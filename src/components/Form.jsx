const Form = ({ addTask }) => {
  return (
    <form onSubmit={addTask} action="">
      <label htmlFor="task">Write your task:</label>
      <input type="text" name="task" id="task" />
      <button type="submit">Add task</button>
    </form>
  );
};

export default Form;
