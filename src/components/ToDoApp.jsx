"use client";
import { useState } from "react";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);

  function addTask(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const task = formData.get("task");

    const newTask = {
      id: crypto.randomUUID(),
      text: task,
      completed: false,
    };
    setTasks(tasks.concat(newTask));

    event.target.reset();
  }

  return (
    <section>
      <form onSubmit={addTask} action="">
        <label htmlFor="task">Write your task:</label>
        <input type="text" name="task" id="task" />
        <button
          onClick={() => {
            setTasks([...tasks]);
          }}
          type="submit"
        >
          Add task
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}{" "}
            <button
              onClick={() => {
                setTasks(tasks.filter((a) => a.id !== task.id));
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ToDoApp;
