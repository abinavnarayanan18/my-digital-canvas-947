import { useState, useEffect } from "react";
import { supabase } from "./supabase";
import Dashboard from "./Dashboard";

export default function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (loading) return <Loader />;
  if (session) return <Dashboard session={session} />;
  return <Auth />;
}

function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader-dot" />
    </div>
  );
}

function Auth() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setStatus("loading");
    setMsg("");

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) { setMsg(error.message); setStatus("error"); }
      else { setMsg("Account created! You can now sign in."); setStatus("success"); setMode("login"); }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) { setMsg(error.message); setStatus("error"); }
      else setStatus("idle");
    }
  };

  return (
    <div className="auth-screen">
      <div className="auth-bg">
        <div className="auth-grid" />
        <div className="auth-glow" />
      </div>

      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M14 6v8l5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className="auth-title">Initio</h1>
          <p className="auth-subtitle">Focus. One task at a time.</p>
        </div>

        <div className="auth-tabs">
          <button className={`auth-tab ${mode === "login" ? "active" : ""}`}
            onClick={() => { setMode("login"); setMsg(""); setStatus("idle"); }}>
            Sign in
          </button>
          <button className={`auth-tab ${mode === "signup" ? "active" : ""}`}
            onClick={() => { setMode("signup"); setMsg(""); setStatus("idle"); }}>
            Create account
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="field">
            <label className="field-label">Email address</label>
            <input className="field-input" type="email" placeholder="you@example.com"
              value={email} onChange={e => setEmail(e.target.value)} autoFocus />
          </div>
          <div className="field">
            <label className="field-label">Password</label>
            <input className="field-input" type="password"
              placeholder={mode === "signup" ? "Min. 6 characters" : "Your password"}
              value={password} onChange={e => setPassword(e.target.value)} />
          </div>

          {status === "error" && <p className="auth-error">{msg}</p>}
          {status === "success" && <p className="auth-success">{msg}</p>}

          <button className={`btn-primary ${status === "loading" ? "btn-loading" : ""}`}
            type="submit" disabled={status === "loading"}>
            {status === "loading" ? <span className="btn-spinner" /> : mode === "login" ? "Sign in →" : "Create account →"}
          </button>
        </form>
      </div>

      <p className="auth-footer">© {new Date().getFullYear()} Initio</p>
    </div>
  );
}
