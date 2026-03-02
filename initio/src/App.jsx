import { useState } from "react";
import { supabase } from "./supabase";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const login = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "https://www.abinavnarayanan.com/initio"
      }
    });

    if (error) setMsg(error.message);
    else setMsg("Check your email.");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Initio</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={login}>Login</button>
      <p>{msg}</p>
    </div>
  );
}