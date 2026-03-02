import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import DailyFocus from "./DailyFocus";
import StatsBar from "./StatsBar";

export default function Dashboard({ session }) {
  const [tasks, setTasks] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("focus"); // focus | all

  const fetchAll = async () => {
    const uid = session.user.id;

    const [{ data: tasksData }, { data: sessionsData }] = await Promise.all([
      supabase.from("tasks").select("*, subtasks(*)").eq("user_id", uid).order("created_at", { ascending: false }),
      supabase.from("sessions").select("*").eq("user_id", uid).order("created_at", { ascending: false })
    ]);

    setTasks(tasksData || []);
    setSessions(sessionsData || []);
    setStreak(calcStreak(sessionsData || []));
    setLoading(false);
  };

  useEffect(() => { fetchAll(); }, []);

  const email = session.user.email;
  const initial = email ? email[0].toUpperCase() : "?";

  // Today's focus seconds
  const todaySeconds = sessions
    .filter(s => isToday(s.created_at))
    .reduce((sum, s) => sum + (s.actual_seconds || s.planned_seconds || 0), 0);

  const completedToday = tasks.filter(t => t.completed && isToday(t.updated_at)).length;

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
        <nav className="dash-nav">
          <button className={`nav-btn ${view === "focus" ? "active" : ""}`} onClick={() => setView("focus")}>Today</button>
          <button className={`nav-btn ${view === "all" ? "active" : ""}`} onClick={() => setView("all")}>All Tasks</button>
        </nav>
        <div className="dash-user">
          <span className="user-email">{email}</span>
          <button className="btn-avatar" onClick={() => supabase.auth.signOut()} title="Sign out">{initial}</button>
        </div>
      </header>

      <main className="dash-main">
        <div className="dash-hero">
          <div className="hero-left">
            <h2 className="dash-greeting">
              {getGreeting()}, <span className="greeting-name">{email.split("@")[0]}</span>.
            </h2>
            <p className="dash-tagline">What are you focusing on today?</p>
          </div>
          <div className="hero-right">
            {streak > 0 && (
              <div className="streak-badge">
                <span className="streak-fire">🔥</span>
                <span className="streak-num">{streak}</span>
                <span className="streak-label">day streak</span>
              </div>
            )}
          </div>
        </div>

        <StatsBar todaySeconds={todaySeconds} completedToday={completedToday} sessions={sessions} />

        {view === "focus" ? (
          <>
            <DailyFocus tasks={tasks} session={session} refresh={fetchAll} />
            <div className="section-divider">
              <span>All tasks</span>
            </div>
            <TaskForm session={session} refresh={fetchAll} />
            {!loading && (
              <TaskList session={session} tasks={tasks} refresh={fetchAll} />
            )}
          </>
        ) : (
          <>
            <TaskForm session={session} refresh={fetchAll} />
            {!loading && (
              <TaskList session={session} tasks={tasks} refresh={fetchAll} />
            )}
          </>
        )}
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

function isToday(dateStr) {
  if (!dateStr) return false;
  const d = new Date(dateStr);
  const now = new Date();
  return d.getDate() === now.getDate() && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
}

function calcStreak(sessions) {
  if (!sessions.length) return 0;
  const days = [...new Set(sessions.map(s => new Date(s.created_at).toDateString()))];
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    if (days.includes(d.toDateString())) streak++;
    else if (i > 0) break;
  }
  return streak;
}
