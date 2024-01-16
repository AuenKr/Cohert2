import { useEffect, useState } from "react";
import InputTodo from "./InputTodo";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setInterval(() => {
      axios.get("http://localhost:3000/todo/all")
        .then((res) => {
          setTodos(res.data)
          console.log(res.data)
        })
    }, 1000)
  }, [])

  return (
    <div>
      <InputTodo todos={todos} setTodos={setTodos} />
      <ul>
        {
          todos.map((todo) => {
            return (
              <li key={todo._id || todo.id} id={"todo-" + todo.id}>{todo.title}
                <br />
                {todo.description}
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default App;