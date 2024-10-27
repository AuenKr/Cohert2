import { useEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

// const { url: backendUrl } = require("./keys")
// const todosURL = "http://localhost:3000/todos"
// async function todosData() {
//     const data = await fetch(todosURL);
//     return data;
// }


function App() {
  const [todos, setTodos] = useState([]);
  // This is wroong way, Why? => as setTodo get updated it will rerender App() which again calls the fetch make oo loop => useEffect Hook
  //   fetch("http://localhost:3000/todos").then(async (res) => {
  //     const data = await res.json();
  //     setTodos(data.todos)
  // });
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const data = await res.json();
        setTodos(data.todos);
      })
    // setInterval(async () => {
    //   const res = fetch("http://localhost:3000/todos")
    //   const data = await res.json();
    //   setTodos(data.todos);
    // }, 5000);
  }, []);
  return (
    <div>
      <CreateTodo todos={todos} setTodos={setTodos} />
      <Todos todos={todos} />
    </div>
  )
}

export default App
