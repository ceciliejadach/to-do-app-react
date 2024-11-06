"use client";
import { useState } from "react";
import Form from "./Form";
import List from "./List";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);

  //funktion til at tilføje en opgave
  function addTask(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const task = formData.get("task");

    const newTask = {
      id: crypto.randomUUID(),
      text: task,
      completed: false,
    };

    //concat() for at pushe den nye task
    setTasks(tasks.concat(newTask));
    event.target.reset();
  }

  //funktion til at slette en opgave
  function deleteTask(id) {
    setTasks((deleteTasks) => deleteTasks.filter((task) => task.id !== id));
  }

  //funktion til at skifte opgavens status mellem fuldført og ikke fuldført
  function toggleComplete(id) {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  }

  return (
    <section className="h-[80vh] bg-[#f7ede2] absolute bottom-0 left-0 w-full pt-10 px-4 rounded-tl-[4rem]">
      <Form addTask={addTask} />
      <List tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </section>
  );
};

export default ToDoApp;
