import { useState } from "react";
import { supabase } from "./supabase";
import Timer from "./Timer";

export default function TaskList({ tasks, session, refresh }) {
  const [activeTask, setActiveTask] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const deleteTask = async (id) => {
    setDeletingId(id);
    await supabase.from("tasks").delete().eq("id", id);
    setDeletingId(null);
    refresh();
  };

  const toggleComplete = async (task) => {
    await supabase.from("tasks").update({ completed: !task.completed, updated_at: new Date().toISOString() }).eq("id", task.id);
    refresh();
  };

  const toggleSubtask = async (subtask) => {
    await supabase.from("subtasks").update({ completed: !subtask.completed }).eq("id", subtask.id);
    refresh();
  };

  const incomplete = tasks.filter(t => !t.completed);
  const completed = tasks.filter(t => t.completed);

  return (
    <>
      <div className="task-list">
        <div className="task-list-header">
          <span className="list-label">Tasks</span>
          <span className="list-count">{incomplete.length}</span>
        </div>

        {incomplete.map((task, idx) => (
          <TaskItem
            key={task.id}
            task={task}
            idx={idx}
            expanded={expandedId === task.id}
            deleting={deletingId === task.id}
            onExpand={() => setExpandedId(expandedId === task.id ? null : task.id)}
            onStart={() => setActiveTask(task)}
            onDelete={() => deleteTask(task.id)}
            onToggleComplete={() => toggleComplete(task)}
            onToggleSubtask={toggleSubtask}
          />
        ))}

        {incomplete.length === 0 && completed.length === 0 && (
          <div className="tasks-empty">
            <p className="empty-icon">◎</p>
            <p className="empty-text">No tasks yet. Add one above to begin.</p>
          </div>
        )}

        {completed.length > 0 && (
          <div className="completed-section">
            <div className="task-list-header" style={{ marginTop: 24 }}>
              <span className="list-label">Completed</span>
              <span className="list-count">{completed.length}</span>
            </div>
            {completed.map((task, idx) => (
              <TaskItem
                key={task.id}
                task={task}
                idx={idx}
                expanded={expandedId === task.id}
                deleting={deletingId === task.id}
                onExpand={() => setExpandedId(expandedId === task.id ? null : task.id)}
                onStart={() => setActiveTask(task)}
                onDelete={() => deleteTask(task.id)}
                onToggleComplete={() => toggleComplete(task)}
                onToggleSubtask={toggleSubtask}
              />
            ))}
          </div>
        )}
      </div>

      {activeTask && (
        <Timer task={activeTask} sessionUser={session}
          close={() => { setActiveTask(null); refresh(); }} />
      )}
    </>
  );
}

function TaskItem({ task, idx, expanded, deleting, onExpand, onStart, onDelete, onToggleComplete, onToggleSubtask }) {
  const subtasks = task.subtasks || [];
  const done = subtasks.filter(s => s.completed).length;
  const pct = subtasks.length ? Math.round((done / subtasks.length) * 100) : 0;

  return (
    <div className={`task-item ${task.completed ? "task-completed" : ""} ${deleting ? "task-deleting" : ""}`}
      style={{ animationDelay: `${idx * 40}ms` }}>
      <div className="task-item-main">
        <div className="task-item-left">
          <button className={`task-check ${task.completed ? "checked" : ""}`} onClick={onToggleComplete} title="Mark complete">
            {task.completed ? "✓" : ""}
          </button>
          <div className="task-item-info">
            <span className="task-item-title">{task.title}</span>
            <div className="task-item-meta">
              {task.estimated_minutes && (
                <span className="task-estimate">~{task.estimated_minutes}m</span>
              )}
              {subtasks.length > 0 && (
                <span className="task-steps">{done}/{subtasks.length} steps</span>
              )}
            </div>
          </div>
        </div>
        <div className="task-item-actions">
          {!task.completed && (
            <button className="btn-start" onClick={onStart}>Focus</button>
          )}
          {subtasks.length > 0 && (
            <button className="btn-expand" onClick={onExpand}>{expanded ? "▲" : "▼"}</button>
          )}
          <button className="btn-delete" onClick={onDelete} title="Delete">×</button>
        </div>
      </div>

      {subtasks.length > 0 && (
        <div className="task-progress-bar">
          <div className="task-progress-fill" style={{ width: `${pct}%` }} />
        </div>
      )}

      {expanded && (
        <div className="task-subtasks">
          {subtasks.map(s => (
            <label key={s.id} className={`subtask-row ${s.completed ? "done" : ""}`}>
              <input type="checkbox" checked={!!s.completed} onChange={() => onToggleSubtask(s)} />
              <span>{s.title}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
