const Form = ({ addTask }) => {
  return (
    <form className="grid pb-5 max-w-md mx-auto" onSubmit={addTask} action="">
      {/* <label htmlFor="task">Write your task:</label> */}
      <div className="flex gap-4 justify-center max-w-6xl">
        <input className="rounded-full px-6 py-2 flex-1" type="text" name="task" id="task" />
        <button className="bg-[#84a59d] text-white px-6 py-2 rounded-full" type="submit">
          Add task
        </button>
      </div>
    </form>
  );
};

export default Form;
