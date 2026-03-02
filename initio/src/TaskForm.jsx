import { useState } from "react";
import { supabase } from "./supabase";

const ESTIMATES = [5, 10, 15, 20, 30, 45, 60, 90];

export default function TaskForm({ session, refresh }) {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(3);
  const [estimate, setEstimate] = useState(25);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const createTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setLoading(true);

    const { data } = await supabase.from("tasks").insert([
      { title: title.trim(), user_id: session.user.id, estimated_minutes: estimate }
    ]).select();

    if (data?.[0]) {
      const taskId = data[0].id;
      const subtasks = Array.from({ length: Number(count) }).map((_, i) => ({
        task_id: taskId,
        user_id: session.user.id,
        position: i,
        title: `Step ${i + 1}`,
        completed: false
      }));
      await supabase.from("subtasks").insert(subtasks);
    }

    setTitle(""); setCount(3); setEstimate(25);
    setExpanded(false); setLoading(false);
    refresh();
  };

  return (
    <form className="task-form" onSubmit={createTask}>
      <div className="task-form-row">
        <input className="task-input" placeholder="Add a new task..."
          value={title} onChange={e => setTitle(e.target.value)} onFocus={() => setExpanded(true)} />
        <button className="btn-add" type="submit" disabled={loading || !title.trim()}>
          {loading ? <span className="btn-spinner dark" /> : "+"}
        </button>
      </div>

      {expanded && (
        <div className="task-form-meta">
          <label className="meta-label">
            Steps
            <select className="meta-select" value={count} onChange={e => setCount(e.target.value)}>
              {[1,2,3,4,5,6,7,8,9,10].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </label>
          <label className="meta-label">
            Estimate
            <select className="meta-select" value={estimate} onChange={e => setEstimate(Number(e.target.value))}>
              {ESTIMATES.map(m => (
                <option key={m} value={m}>{m} min</option>
              ))}
            </select>
          </label>
          <button type="button" className="btn-ghost small" onClick={() => setExpanded(false)}>Cancel</button>
        </div>
      )}
    </form>
  );
}
