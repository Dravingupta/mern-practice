import { useEffect , useState } from "react";

function TaskList (){
    const [tasks, setTasks] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/tasks")
        .then((res)=> res.json())
        .then((data)=> {setTasks(data);

        })
        .catch((err)=>{
            console.log(err)
        })
    },[]);
    return(
        <ul>
            {tasks.map((task , index)=>(
                <li key ={index}> {task.title}</li>
            ))}
        </ul>
    )

}

export default TaskList ;