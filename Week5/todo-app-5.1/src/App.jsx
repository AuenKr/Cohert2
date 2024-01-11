import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      desc: "go to gym at 6-7",
      completd: false
    },
    {
      title: "Study DSA",
      desc: "go to gym at 8-10",
      completd: false
    }
  ]);

  function addNewTodo() {
    setTodos([...todos, {
      title: "New todo title",
      desc: "random todo dfsaf",
      completd: false
    }])
  }
  return (
    <div>
      <button onClick={addNewTodo}>Add random todo</button>
      {todos.map((todo) => {
        return <Todo title={todo.title} desc={todo.desc}></Todo>
      })}
    </div>
  )
}

// Any time the parent re-render, their child also get re-render
// inp : title, desc, completed
function Todo(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  )
}
export default App
