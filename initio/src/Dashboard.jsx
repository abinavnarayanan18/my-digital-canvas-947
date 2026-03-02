import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function Dashboard({ session }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    const { data } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", session.user.id)
      .order("created_at", { ascending: false });

    setTasks(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const email = session.user.email;
  const initial = email ? email[0].toUpperCase() : "?";

  return (
    <div className="dashboard">
      <header className="dash-header">
        <div className="dash-logo">
          <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M14 6v8l5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span>Initio</span>
        </div>
        <div className="dash-user">
          <span className="user-email">{email}</span>
          <button className="btn-avatar" onClick={() => supabase.auth.signOut()} title="Sign out">
            {initial}
          </button>
        </div>
      </header>

      <main className="dash-main">
        <div className="dash-hero">
          <h2 className="dash-greeting">
            {getGreeting()}, <span className="greeting-name">{email.split("@")[0]}</span>.
          </h2>
          <p className="dash-tagline">What are you focusing on today?</p>
        </div>

        <TaskForm session={session} refresh={fetchTasks} />

        <div className="task-section">
          {loading ? (
            <div className="tasks-loading">
              {[1,2,3].map(i => <div key={i} className="task-skeleton" />)}
            </div>
          ) : tasks.length === 0 ? (
            <div className="tasks-empty">
              <p className="empty-icon">◎</p>
              <p className="empty-text">No tasks yet. Add one above to begin.</p>
            </div>
          ) : (
            <TaskList session={session} tasks={tasks} refresh={fetchTasks} />
          )}
        </div>
      </main>
    </div>
  );
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}
