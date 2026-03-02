import { useState } from "react";
import { supabase } from "./supabase";
import Timer from "./Timer";

export default function TaskList({ tasks, session, refresh }) {
  const [activeTask, setActiveTask] = useState(null);

  const deleteTask = async (id) => {
    await supabase.from("tasks").delete().eq("id", id);
    refresh();
  };

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <button onClick={() => setActiveTask(task)}>Start</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}

      {activeTask && (
        <Timer
          task={activeTask}
          sessionUser={session}
          close={() => setActiveTask(null)}
        />
      )}
    </div>
  );
}