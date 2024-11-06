import { BsCheckCircle } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsTrash3 } from "react-icons/bs";

//task prop er selveopgaveobjektet, som indeholder oplysninger om id, text og completed-status
//ListItem får task som prop, så den ved, hvilken opgave den skal vise. deleteTask og toggleComplete bruges her, så ListItem kan udføre handlinger på den specifikke opgave, den repræsenterer – for eksempel ved at slette opgaven eller ændre dens completed-status.
const ListItem = ({ task, deleteTask, toggleComplete }) => (
  <li className="flex justify-between py-1" style={{ textDecoration: task.completed ? "line-through" : "none" }}>
    <div className="flex items-center gap-3">
      <button onClick={() => toggleComplete(task.id)}>{task.completed ? <BsCheckCircleFill /> : <BsCheckCircle />}</button>
      {task.text}
    </div>
    <button onClick={() => deleteTask(task.id)}>
      <BsTrash3 className="hover:scale-110" />
    </button>
  </li>
);

export default ListItem;
