
function TaskList (){
    const tasks = ["sleep", "code", "eat"];
    return(
        <ul>
            {tasks.map((task , index)=>(
                <li key ={index}> {task}</li>
            ))}
        </ul>
    )

}

export default TaskList ;