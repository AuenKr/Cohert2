// Move to "src/"
import { useEffect, useState } from "react"
import Todos from "./componentsTodo/Todos"

function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos/")
      .then((data) => {
        return data.json()
      })
      .then((json) => {
        setTodos(json.todos)
      })
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos/")
        .then((data) => {
          return data.json()
        })
        .then((json) => {
          setTodos(json.todos)
        })

    }, 5000);
  }, [])
  return (
    <>
      {todos.map(todo => <Todos key={todo.id} title={todo.title} description={todo.description}></Todos>)}
    </>
  )
}

export default App
