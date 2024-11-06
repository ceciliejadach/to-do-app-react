import { BsCheckCircle } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsTrash3 } from "react-icons/bs";

const ListItem = ({ task, deleteTask, toggleComplete }) => (
  <li className="flex" style={{ textDecoration: task.completed ? "line-through" : "none" }}>
    <button onClick={() => toggleComplete(task.id)}>{task.completed ? <BsCheckCircleFill /> : <BsCheckCircle />}</button>
    {task.text}
    <button onClick={() => deleteTask(task.id)}>
      <BsTrash3 />
    </button>
  </li>
);

export default ListItem;
