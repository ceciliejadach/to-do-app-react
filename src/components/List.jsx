import ListItem from "./ListItem";

const List = ({ tasks, deleteTask, toggleComplete }) => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="grid">
      <section>
        {/* <h2>Incomplete Tasks</h2> */}
        <ul className="max-w-md mx-auto">
          {incompleteTasks.map((task) => (
            <ListItem key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} />
          ))}
        </ul>
      </section>

      <section className="pt-[10rem]">
        <h2 className="max-w-md mx-auto text-xl">Tasks done</h2>
        <ul className="max-w-md mx-auto">
          {completedTasks.map((task) => (
            <ListItem key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default List;
