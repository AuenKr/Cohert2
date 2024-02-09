import { useEffect, useState } from "react";
import axios from "axios";

// Custom Hooks
function useTodos(time) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios("https://sum-server.100xdevs.com/todos").then((response) => {
      setTodos(response.data.todos);
      setLoading(false);
    });
    const interval = setInterval(() => {
      axios("https://sum-server.100xdevs.com/todos").then((response) => {
        setTodos(response.data.todos);
        setLoading(false);
      });
    }, time * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);
  return { todos, loading };
}

function Todos() {
  const { todos, loading } = useTodos(10);
  return (
    <div>
      <h1>Todos</h1>
      {loading
        ? "Loading..."
        : todos.map((todo, index) => <Todo key={index} todo={todo} />)}
    </div>
  );
}

export default Todos;

function Todo({ todo }) {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <div>
        <b>{todo.completed}</b>
      </div>
    </div>
  );
}
