import { useEffect, useState, useRef } from "react";
import { supabase } from "./supabase";

const PRESETS = [
  { label: "2 min", seconds: 120, quick: true },
  { label: "5 min", seconds: 300 },
  { label: "15 min", seconds: 900 },
  { label: "25 min", seconds: 1500 },
  { label: "45 min", seconds: 2700 },
];

export default function Timer({ task, sessionUser, close }) {
  const [seconds, setSeconds] = useState(task.estimated_minutes ? task.estimated_minutes * 60 : 1500);
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState("idle");
  const [elapsed, setElapsed] = useState(0);
  const [overrun, setOverrun] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [completionAnim, setCompletionAnim] = useState(false);
  const interval = useRef(null);
  const elapsedInterval = useRef(null);
  const totalRef = useRef(seconds);

  const pad = (n) => String(n).padStart(2, "0");
  const mins = Math.floor(Math.abs(seconds) / 60);
  const secs = Math.abs(seconds) % 60;
  const progress = Math.min(elapsed / totalRef.current, 1);
  const circumference = 2 * Math.PI * 54;
  const isQuick = totalRef.current === 120;

  const startSession = async (planned) => {
    const { data } = await supabase.from("sessions").insert([{
      user_id: sessionUser.user.id,
      task_id: task.id,
      planned_seconds: planned
    }]).select();
    if (data?.[0]) setSessionId(data[0].id);
  };

  const endSession = async (actualSeconds) => {
    if (sessionId) {
      await supabase.from("sessions").update({ actual_seconds: actualSeconds }).eq("id", sessionId);
    }
  };

  const start = async (overrideSeconds) => {
    const s = overrideSeconds || seconds;
    totalRef.current = s;
    setSeconds(s);
    setElapsed(0);
    setPhase("running");
    setRunning(true);
    setOverrun(false);
    await startSession(s);

    interval.current = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    elapsedInterval.current = setInterval(() => {
      setElapsed(prev => prev + 1);
    }, 1000);
  };

  const pause = () => {
    clearInterval(interval.current);
    clearInterval(elapsedInterval.current);
    setPhase("paused");
    setRunning(false);
  };

  const resume = () => {
    setPhase("running");
    setRunning(true);
    interval.current = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);
    elapsedInterval.current = setInterval(() => {
      setElapsed(prev => prev + 1);
    }, 1000);
  };

  const stop = async () => {
    clearInterval(interval.current);
    clearInterval(elapsedInterval.current);
    await endSession(elapsed);
    close();
  };

  const reset = (s) => {
    clearInterval(interval.current);
    clearInterval(elapsedInterval.current);
    setSeconds(s);
    totalRef.current = s;
    setPhase("idle");
    setRunning(false);
    setElapsed(0);
    setOverrun(false);
  };

  useEffect(() => {
    if (seconds === 0 && phase === "running") {
      setOverrun(true);
    }
    if (seconds <= 0 && phase === "running") {
      // keep going into overrun — don't stop
    }
  }, [seconds, phase]);

  useEffect(() => {
    if (phase === "running" && elapsed === totalRef.current) {
      setCompletionAnim(true);
      setTimeout(() => setCompletionAnim(false), 2000);
    }
  }, [elapsed]);

  useEffect(() => {
    return () => {
      clearInterval(interval.current);
      clearInterval(elapsedInterval.current);
    };
  }, []);

  const elapsedMins = Math.floor(elapsed / 60);
  const elapsedSecs = elapsed % 60;

  return (
    <div className="timer-overlay" onClick={(e) => e.target === e.currentTarget && stop()}>
      <div className={`timer-modal ${completionAnim ? "completion-flash" : ""}`}>
        <button className="timer-close" onClick={stop}>×</button>

        {isQuick && phase !== "idle" && (
          <div className="quick-start-badge">⚡ Just 2 minutes</div>
        )}

        <p className="timer-task-name">{task.title}</p>
        {task.estimated_minutes && phase !== "idle" && (
          <p className="timer-estimate-label">
            Estimated: {task.estimated_minutes}m
            {overrun && <span className="overrun-tag"> · over by {Math.abs(Math.floor(seconds / 60))}m</span>}
          </p>
        )}

        <div className="timer-ring-wrap">
          <svg className="timer-ring" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" className="ring-bg" />
            <circle cx="60" cy="60" r="54"
              className={`ring-progress ${overrun ? "ring-overrun" : ""}`}
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - progress)}
            />
          </svg>
          <div className="timer-display">
            {overrun ? (
              <>
                <span className="timer-overrun-label">+{pad(Math.floor(Math.abs(seconds) / 60))}:{pad(Math.abs(seconds) % 60)}</span>
                <span className="timer-overrun-sub">over time</span>
              </>
            ) : (
              <span className="timer-time">{pad(mins)}:{pad(secs)}</span>
            )}
            {phase !== "idle" && (
              <span className="timer-elapsed">{pad(elapsedMins)}:{pad(elapsedSecs)} elapsed</span>
            )}
          </div>
        </div>

        {phase === "idle" && (
          <>
            <div className="timer-quick-start">
              <button className="quick-btn" onClick={() => start(120)}>
                <span className="quick-icon">⚡</span>
                <span>Just 2 min</span>
              </button>
            </div>
            <div className="timer-presets">
              {PRESETS.filter(p => !p.quick).map(p => (
                <button key={p.seconds}
                  className={`preset-btn ${seconds === p.seconds ? "active" : ""}`}
                  onClick={() => reset(p.seconds)}>
                  {p.label}
                </button>
              ))}
            </div>
          </>
        )}

        <div className="timer-controls">
          {phase === "idle" && (
            <button className="timer-btn primary" onClick={() => start()}>Start session</button>
          )}
          {phase === "running" && (
            <>
              <button className="timer-btn" onClick={pause}>Pause</button>
              <button className="timer-btn danger" onClick={stop}>End</button>
            </>
          )}
          {phase === "paused" && (
            <>
              <button className="timer-btn primary" onClick={resume}>Resume</button>
              <button className="timer-btn" onClick={() => reset(totalRef.current)}>Reset</button>
              <button className="timer-btn danger" onClick={stop}>End</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
