import { useState } from "react";
import { TasksList } from "./tasksList";

export const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [tasksList, setTasksList] = useState<string[]>([]);
 
  const handleAddTask = () => {
    if(newTask.trim==='') return 
    setTasksList(prevTasks => [...prevTasks,newTask])
    setNewTask("")
  };

  const handleDeleteTask = (index:number)=>{
    setTasksList(tasks=>tasks.filter((_,i)=>i !== index))
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button onClick={handleAddTask}>Agregar tarea</button>
      </div>
      <TasksList tasksList={tasksList} deleteTask={handleDeleteTask} />
    </div>
  );
};
