import { useState } from "react";

function AddTask() {
  const [title, setTitle] = useState("");

  const addTask = async () => {
    if (!title) return;

    await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    setTitle(""); // clear input
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default AddTask;
