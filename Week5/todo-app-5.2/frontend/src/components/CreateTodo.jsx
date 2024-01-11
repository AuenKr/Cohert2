import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <input style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="title" onBlur={(event) => {
                setTitle(event.target.value)
            }} />
            <input style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="description" onBlur={(event) => {
                setDescription(event.target.value)
            }} />
            <button style={{
                padding: 8,
                margin: 10
            }} onClick={() => {
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
                        alert("Todo Added", json)
                    })
                    .catch((err) => {
                        console.log("error : \n", err)
                    })
            }}>Add a todo</button>
        </div>
    )
}
