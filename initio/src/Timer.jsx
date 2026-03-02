import { useEffect, useState, useRef } from "react";
import { supabase } from "./supabase";

export default function Timer({ task, sessionUser, close }) {
  const [seconds, setSeconds] = useState(300);
  const [running, setRunning] = useState(false);
  const interval = useRef(null);

  const startSession = async () => {
    await supabase.from("sessions").insert([{
      user_id: sessionUser.user.id,
      task_id: task.id,
      planned_seconds: seconds
    }]);
  };

  const start = async () => {
    setRunning(true);
    await startSession();

    interval.current = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);
  };

  const pause = () => {
    clearInterval(interval.current);
    setRunning(false);
  };

  const resume = () => {
    setRunning(true);
    interval.current = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(interval.current);
    close();
  };

  useEffect(() => {
    if (seconds <= 0) {
      clearInterval(interval.current);
      setRunning(false);
    }
  }, [seconds]);

  return (
    <div style={{ marginTop: 20 }}>
      <h2>{task.title}</h2>
      <h1>{Math.floor(seconds / 60)}:{seconds % 60}</h1>

      {!running ? (
        <>
          <button onClick={start}>Start</button>
          <button onClick={() => setSeconds(600)}>10 min</button>
          <button onClick={() => setSeconds(300)}>5 min</button>
        </>
      ) : (
        <>
          <button onClick={pause}>Pause</button>
        </>
      )}

      {!running && seconds < 300 && (
        <button onClick={resume}>Resume</button>
      )}

      <button onClick={stop}>Close</button>
    </div>
  );
}