"use client";
import { useState } from "react";
import Form from "./Form";
import List from "./List";

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

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function toggleComplete(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  }

  return (
    <section className="h-[80vh] bg-[#f7ede2] absolute bottom-0 left-0 w-full pt-24 px-4 rounded-tl-[6rem]">
      <Form addTask={addTask} />
      <List tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </section>
  );
};

export default ToDoApp;
