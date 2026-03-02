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
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/initio` }
    });
    if (error) { setMsg(error.message); setStatus("error"); }
    else setStatus("sent");
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
        {status === "sent" ? (
          <div className="auth-sent">
            <div className="sent-icon">✦</div>
            <p className="sent-title">Check your inbox</p>
            <p className="sent-sub">We sent a magic link to <strong>{email}</strong></p>
            <button className="btn-ghost" onClick={() => setStatus("idle")}>Try a different email</button>
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="field">
              <label className="field-label">Email address</label>
              <input className="field-input" type="email" placeholder="you@example.com"
                value={email} onChange={e => setEmail(e.target.value)} autoFocus />
            </div>
            {status === "error" && <p className="auth-error">{msg}</p>}
            <button className={`btn-primary ${status === "loading" ? "btn-loading" : ""}`}
              type="submit" disabled={status === "loading"}>
              {status === "loading" ? <span className="btn-spinner" /> : "Continue with email →"}
            </button>
            <p className="auth-note">No password needed. We'll send you a sign-in link.</p>
          </form>
        )}
      </div>
      <p className="auth-footer">© {new Date().getFullYear()} Initio</p>
    </div>
  );
}
