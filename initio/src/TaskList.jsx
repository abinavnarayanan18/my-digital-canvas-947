import { useState } from "react";
import { supabase } from "./supabase";
import Timer from "./Timer";

export default function TaskList({ tasks, session, refresh }) {
  const [activeTask, setActiveTask] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const deleteTask = async (id) => {
    setDeletingId(id);
    await supabase.from("tasks").delete().eq("id", id);
    setDeletingId(null);
    refresh();
  };

  return (
    <>
      <div className="task-list">
        <div className="task-list-header">
          <span className="list-label">Tasks</span>
          <span className="list-count">{tasks.length}</span>
        </div>

        {tasks.map((task, idx) => (
          <div
            key={task.id}
            className={`task-item ${deletingId === task.id ? "task-deleting" : ""}`}
            style={{ animationDelay: `${idx * 40}ms` }}
          >
            <div className="task-item-left">
              <div className="task-dot" />
              <span className="task-item-title">{task.title}</span>
            </div>
            <div className="task-item-actions">
              <button
                className="btn-start"
                onClick={() => setActiveTask(task)}
              >
                Focus
              </button>
              <button
                className="btn-delete"
                onClick={() => deleteTask(task.id)}
                disabled={deletingId === task.id}
                title="Delete"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeTask && (
        <Timer
          task={activeTask}
          sessionUser={session}
          close={() => setActiveTask(null)}
        />
      )}
    </>
  );
}
