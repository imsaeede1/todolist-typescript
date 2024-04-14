
import { ITask } from "@/types/tasks";
import Task from "./Task";

interface TodoListProps {
    tasks: ITask[]
}
const TodoList:React.FC<TodoListProps> = ({tasks}) => {
    return ( 
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="bg-gray-100">
        <th>task</th>
        <td className="text-right">action</td>
      </tr>
    </thead>
    <tbody>
        {tasks.map((task,i)=>{
            return(
           <Task key={i} task={task} />
            )
        })}
    </tbody>
  </table>
</div>
     );
}
 
export default TodoList;