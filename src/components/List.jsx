import ListItem from "./ListItem";
//Komponeneten List har brug for adgang til alle opgaver: tasks, så den kan vise dem korrekt.
//Det er også nødvendigt at have deleteTask og toggleComplete, så de kan sendes videre til ListItem, som gør det muligt at slette eller ændre status på en opgave
const List = ({ tasks, deleteTask, toggleComplete }) => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="grid">
      <section>
        <ul className="max-w-md mx-auto">
          {incompleteTasks.map((task) => (
            <ListItem key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} />
          ))}
        </ul>
      </section>

      <section className="pt-[5rem]">
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
