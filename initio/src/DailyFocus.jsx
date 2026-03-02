import { useState, useEffect } from "react";
import { supabase } from "./supabase";
import Timer from "./Timer";

export default function DailyFocus({ tasks, session, refresh }) {
  const [focusIds, setFocusIds] = useState([]);
  const [activeTask, setActiveTask] = useState(null);
  const [picking, setPicking] = useState(false);

  const storageKey = `initio_focus_${session.user.id}_${today()}`;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setFocusIds(JSON.parse(saved));
  }, []);

  const save = (ids) => {
    setFocusIds(ids);
    localStorage.setItem(storageKey, JSON.stringify(ids));
  };

  const addToFocus = (taskId) => {
    if (focusIds.length >= 3 || focusIds.includes(taskId)) return;
    save([...focusIds, taskId]);
    setPicking(false);
  };

  const removeFromFocus = (taskId) => {
    save(focusIds.filter(id => id !== taskId));
  };

  const focusTasks = focusIds
    .map(id => tasks.find(t => t.id === id))
    .filter(Boolean);

  const availableTasks = tasks.filter(t => !focusIds.includes(t.id) && !t.completed);

  return (
    <div className="daily-focus">
      <div className="daily-focus-header">
        <div className="daily-focus-title">
          <span className="df-icon">◈</span>
          <span>Today's Focus</span>
          <span className="df-count">{focusTasks.length}/3</span>
        </div>
        <p className="df-sub">Pick up to 3 tasks. That's it.</p>
      </div>

      <div className="focus-slots">
        {focusTasks.map((task, i) => (
          <FocusSlot
            key={task.id}
            task={task}
            index={i}
            onStart={() => setActiveTask(task)}
            onRemove={() => removeFromFocus(task.id)}
            refresh={refresh}
          />
        ))}

        {focusTasks.length < 3 && (
          <div className="focus-slot empty" onClick={() => setPicking(true)}>
            <span className="slot-plus">+</span>
            <span className="slot-label">Add a priority task</span>
          </div>
        )}
      </div>

      {picking && (
        <div className="task-picker">
          <div className="picker-header">
            <span>Choose a task</span>
            <button className="btn-ghost small" onClick={() => setPicking(false)}>✕</button>
          </div>
          {availableTasks.length === 0 ? (
            <p className="picker-empty">No more tasks available.</p>
          ) : (
            availableTasks.map(task => (
              <button key={task.id} className="picker-item" onClick={() => addToFocus(task.id)}>
                {task.title}
              </button>
            ))
          )}
        </div>
      )}

      {activeTask && (
        <Timer task={activeTask} sessionUser={session} close={() => { setActiveTask(null); refresh(); }} />
      )}
    </div>
  );
}

function FocusSlot({ task, index, onStart, onRemove, refresh }) {
  const [expanded, setExpanded] = useState(false);
  const subtasks = task.subtasks || [];
  const done = subtasks.filter(s => s.completed).length;
  const pct = subtasks.length ? Math.round((done / subtasks.length) * 100) : 0;

  const toggleSubtask = async (subtask) => {
    await supabase.from("subtasks").update({ completed: !subtask.completed }).eq("id", subtask.id);
    refresh();
  };

  const labels = ["Primary", "Secondary", "Tertiary"];

  return (
    <div className={`focus-slot filled priority-${index}`}>
      <div className="slot-top">
        <div className="slot-meta">
          <span className="slot-priority">{labels[index]}</span>
          {subtasks.length > 0 && (
            <span className="slot-progress-text">{done}/{subtasks.length} steps</span>
          )}
        </div>
        <div className="slot-actions">
          <button className="slot-btn start" onClick={onStart}>Focus</button>
          <button className="slot-btn expand" onClick={() => setExpanded(!expanded)}>
            {expanded ? "▲" : "▼"}
          </button>
          <button className="slot-btn remove" onClick={onRemove}>✕</button>
        </div>
      </div>

      <p className="slot-title">{task.title}</p>

      {subtasks.length > 0 && (
        <div className="slot-progress-bar">
          <div className="slot-progress-fill" style={{ width: `${pct}%` }} />
        </div>
      )}

      {expanded && subtasks.length > 0 && (
        <div className="slot-subtasks">
          {subtasks.map(s => (
            <label key={s.id} className={`subtask-row ${s.completed ? "done" : ""}`}>
              <input type="checkbox" checked={!!s.completed} onChange={() => toggleSubtask(s)} />
              <span>{s.title}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

function today() {
  return new Date().toISOString().split("T")[0];
}
