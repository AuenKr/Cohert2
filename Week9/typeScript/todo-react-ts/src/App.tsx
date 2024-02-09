import "./App.css";
import Todo from "./components/Todo";

function App() {
  const todos = [
    {
      title: "jfsd",
      description: "fkjdsakf",
      completed: true,
    },
    {
      title: "jfsd",
      description: "fkjdsakf",
      completed: false,
    },
    {
      title: "jfsd",
      description: "fkjdsakf",
      completed: false,
    },
    {
      title: "jfsd",
      description: "fkjdsakf",
      completed: false,
    },
  ];
  return (
    <>
      <div>
        <h1>Hi htet</h1>
        <div>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
