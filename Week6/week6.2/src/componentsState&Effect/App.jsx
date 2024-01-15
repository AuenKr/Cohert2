import { useState } from "react"
import { Todo } from "./Todo"

function App() {
  const [id, setId] = useState(1);
  function updateId(event) {
    setId(parseInt(event.target.innerText))
  }
  return (
    <>
      <button onClick={updateId}>1</button>
      <button onClick={updateId}>2</button>
      <button onClick={updateId}>3</button>
      <button onClick={updateId}>4</button>
      <Todo id={id}></Todo>
    </>
  )
}

export default App
