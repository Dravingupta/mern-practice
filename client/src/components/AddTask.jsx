import { useState } from "react";
import axios from "axios";

function AddTask() {
  const [title, setTitle] = useState("");

  const addTask = async () => {
    if (!title) return;

    const res = await axios.post("http://localhost:3000/tasks" , 
      {
        "title": title,
        "status": "false"
      },
      {
        withCredentials: true
      }
    );
    console.log(res);

    
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
