import React, {useState} from "react"

function ToDoList(){

    const [tasks, setTasks] = useState([])

    const [newTask, setNewTask] = useState("")



    function handleNewTask(){
        const task = document.getElementById("task").value
        setNewTask(task)
    }

    function handleTasks(){
        newTask != "" && setTasks([...tasks, newTask])
        
        document.getElementById("task").value = ""
        setNewTask("")
    }
    function handleDelete(index){
        setTasks(tasks.filter((_,i) => i!==index))
    }

    function handleMoveUp(index){
        if(index -1 >= 0){
            const upperItem = tasks[index-1]
            const lowerItem = tasks[index]
    
            tasks[index-1] = lowerItem
            tasks[index] = upperItem
    
            setTasks([...tasks])
        } 
    }
    function handleMoveDown(index){
        if(index+1 < tasks.length){
            const upperItem = tasks[index]
            const lowerItem = tasks[index+1]
    
            tasks[index] = lowerItem
            tasks[index+1] = upperItem
    
            setTasks([...tasks]) 
        }
 
    }
    return(
        <div>
            <ol>
                {tasks.map((task, index) => 
                { return <li className="task-text" key={index}>{task}
                    <button onClick={() => handleDelete(index)} className="delete-button">Delete</button>
                    <button onClick={() => handleMoveUp(index)} className="up-button" >UP</button>
                    <button onClick={() => handleMoveDown(index)} className="down-button">DOWN</button>
                    </li>
                
                } )
                }

            </ol>


            <input id={"task"} onChange={handleNewTask} placeholder="Enter a task..." >
            </input>
            <button onClick={handleTasks}>
                Add
            </button>
        </div>
    )
}

export default ToDoList