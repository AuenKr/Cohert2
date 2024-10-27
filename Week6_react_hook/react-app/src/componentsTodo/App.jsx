// Move to "src/"
import { useState } from "react"
import { Todos } from "./componentsTodo/Todos"
import AddToDo from "./componentsTodo/AddTodo"

const intial = [{
    id: 1,
    title: "Complete 6.1",
    description: "today"
}, {
    id: 2,
    title: "Complete 6.2",
    description: "Before today tonight"
}, {
    id: 3,
    title: "Cfdsaf",
    description: "133 Before today tonight"
}]

function App() {
    const [todos, setTodos] = useState(intial)
    return (
        <>
            <AddToDo todos={todos} setTodos={setTodos}></AddToDo>
            {todos.map(todo => <Todos key={todo.id} title={todo.title} description={todo.description}></Todos>)}
        </>
    )
}

export default App
