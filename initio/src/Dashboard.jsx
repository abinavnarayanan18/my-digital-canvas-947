import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function Dashboard({ session }) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const { data } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", session.user.id)
      .order("created_at", { ascending: false });

    setTasks(data || []);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Initio</h1>
      <button onClick={() => supabase.auth.signOut()}>Logout</button>
      <TaskForm session={session} refresh={fetchTasks} />
      <TaskList session={session} tasks={tasks} refresh={fetchTasks} />
    </div>
  );
}