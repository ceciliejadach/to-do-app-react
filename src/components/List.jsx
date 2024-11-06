import ListItem from "./ListItem";

const List = ({ tasks, deleteTask, toggleComplete }) => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      <section>
        <h2>Incomplete Tasks</h2>
        <ul>
          {incompleteTasks.map((task) => (
            <ListItem key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} />
          ))}
        </ul>
      </section>

      <section>
        <h2>Completed Tasks</h2>
        <ul>
          {completedTasks.map((task) => (
            <ListItem key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default List;
