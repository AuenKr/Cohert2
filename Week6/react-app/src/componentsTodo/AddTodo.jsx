import { useState } from "react"
let counter = 4;
function AddTodo({ setTodos, todos }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return (
        <>
            <div>
                <label htmlFor="title">Title</label> <br />
                <input type="text" placeholder="title" name="title" onBlur={(e) => {
                    setTitle(e.target.value)
                }} />
            </div>
            <br />
            <div>
                <label htmlFor="description">Description</label> <br />
                <input type="text" placeholder="description" name="description" onBlur={(e) => {
                    setDescription(e.target.value)
                }} />
            </div>
            <br />
            <button onClick={() => {
                setTodos([...todos, {
                    id: counter++,
                    title,
                    description
                }])
            }}>Add Todo</button>
        </>
    )
}

export default AddTodo