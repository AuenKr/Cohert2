import { useState } from "react";

export function CreateTodo({ todos, setTodos }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function addTodo() {
        /*
        How to get title and desc from input?
            1. document.querySelector("input")
            2. un-optimal way : using stateVar -> current way 
            3. Optimal way : react-query further teahes
        */
        fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
                "title": title,
                "description": description
            }),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(async (data) => {
                const json = await data.json();
                setTodos([...todos, json.todo]);
                document.querySelectorAll("input").forEach(input => {
                    input.value = ""
                })

            })
            .catch((err) => {
                console.log("error : \n", err)
            })
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <h2>Add Todo</h2>
            <input style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="title" onBlur={(event) => {
                setTitle(event.target.value);
            }} />
            <input style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="description" onBlur={(event) => {
                setDescription(event.target.value);
            }} />
            <button style={{
                padding: 8,
                margin: 10
            }}
                onClick={addTodo}>
                Add a todo
            </button>
        </div >
    )
}
