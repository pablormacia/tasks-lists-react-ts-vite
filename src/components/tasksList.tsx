import { Task } from "./task"

type ListaTareas = {
    tasksList: string[]
    deleteTask: (index:number) => void
}

export const TasksList = ({tasksList,deleteTask}: ListaTareas) => {
  return (
    <div className="taskList">
        {tasksList.map((task,index)=>(
            <Task key={index} task={task} deleteTask={()=>deleteTask(index)} />
        ))}
    </div>
  )
}