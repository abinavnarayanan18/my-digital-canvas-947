import { useEffect, useState, useRef } from "react";
import { supabase } from "./supabase";

const PRESETS = [
  { label: "5 min", seconds: 300 },
  { label: "15 min", seconds: 900 },
  { label: "25 min", seconds: 1500 },
  { label: "45 min", seconds: 2700 },
];

export default function Timer({ task, sessionUser, close }) {
  const [seconds, setSeconds] = useState(1500);
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState("idle"); // idle | running | paused | done
  const interval = useRef(null);
  const startedAt = useRef(null);

  const total = useRef(seconds);

  const pad = (n) => String(n).padStart(2, "0");
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const progress = 1 - seconds / total.current;

  const startSession = async (planned) => {
    await supabase.from("sessions").insert([{
      user_id: sessionUser.user.id,
      task_id: task.id,
      planned_seconds: planned
    }]);
  };

  const start = async () => {
    total.current = seconds;
    startedAt.current = Date.now();
    setPhase("running");
    setRunning(true);
    await startSession(seconds);
    interval.current = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval.current);
          setPhase("done");
          setRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pause = () => {
    clearInterval(interval.current);
    setPhase("paused");
    setRunning(false);
  };

  const resume = () => {
    setPhase("running");
    setRunning(true);
    interval.current = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval.current);
          setPhase("done");
          setRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const reset = (s) => {
    clearInterval(interval.current);
    setSeconds(s);
    total.current = s;
    setPhase("idle");
    setRunning(false);
  };

  useEffect(() => {
    return () => clearInterval(interval.current);
  }, []);

  const circumference = 2 * Math.PI * 54;

  return (
    <div className="timer-overlay" onClick={(e) => e.target === e.currentTarget && close()}>
      <div className="timer-modal">
        <button className="timer-close" onClick={close}>×</button>

        <p className="timer-task-name">{task.title}</p>

        <div className="timer-ring-wrap">
          <svg className="timer-ring" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" className="ring-bg" />
            <circle
              cx="60" cy="60" r="54"
              className="ring-progress"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - progress)}
            />
          </svg>
          <div className="timer-display">
            <span className="timer-time">{pad(mins)}:{pad(secs)}</span>
            {phase === "done" && <span className="timer-done-label">Complete</span>}
          </div>
        </div>

        {phase === "idle" && (
          <div className="timer-presets">
            {PRESETS.map(p => (
              <button
                key={p.seconds}
                className={`preset-btn ${seconds === p.seconds ? "active" : ""}`}
                onClick={() => reset(p.seconds)}
              >
                {p.label}
              </button>
            ))}
          </div>
        )}

        <div className="timer-controls">
          {phase === "idle" && (
            <button className="timer-btn primary" onClick={start}>Start session</button>
          )}
          {phase === "running" && (
            <button className="timer-btn" onClick={pause}>Pause</button>
          )}
          {phase === "paused" && (
            <>
              <button className="timer-btn primary" onClick={resume}>Resume</button>
              <button className="timer-btn" onClick={() => reset(total.current)}>Reset</button>
            </>
          )}
          {phase === "done" && (
            <>
              <button className="timer-btn primary" onClick={close}>Done ✓</button>
              <button className="timer-btn" onClick={() => reset(total.current)}>Again</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
