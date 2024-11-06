import ToDoApp from "@/components/ToDoApp";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <h1 className="text-6xl text-center pt-12 text-white">To-do App</h1>
      <ToDoApp />
    </div>
  );
}
