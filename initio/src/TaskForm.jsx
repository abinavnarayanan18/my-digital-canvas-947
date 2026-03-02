import { useState } from "react";
import { supabase } from "./supabase";

export default function TaskForm({ session, refresh }) {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(1);

  const createTask = async () => {
    const { data } = await supabase.from("tasks").insert([
      { title, user_id: session.user.id }
    ]).select();

    const taskId = data[0].id;

    const subtasks = Array.from({ length: count }).map((_, i) => ({
      task_id: taskId,
      user_id: session.user.id,
      position: i,
      title: `Step ${i + 1}`
    }));

    await supabase.from("subtasks").insert(subtasks);

    setTitle("");
    refresh();
  };

  return (
    <div>
      <input placeholder="Task" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="number" min="1" max="10" value={count} onChange={e => setCount(e.target.value)} />
      <button onClick={createTask}>Add</button>
    </div>
  );
}