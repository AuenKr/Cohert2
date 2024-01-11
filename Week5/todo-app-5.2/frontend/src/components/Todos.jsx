import { useState } from 'react'
export function Todos({ todos, setTodos }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
        }}> {
                todos.map((todo) => {
                    return (
                        <div>
                            <h3>{todo.title}</h3>
                            <p>{todo.description}</p>
                            <button onClick={(e) => {
                                fetch("http://localhost:3000/completed", {
                                    method: "PUT",
                                    headers: {
                                        "content-type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        "id": todo._id
                                    })
                                }).then((data) => {
                                    const temp = todos;
                                    for (let i = 0; i < temp.length; i++) {
                                        if (todos[i]._id === todo._id) {
                                            console.log(temp[i])
                                            temp[i].completed = true;
                                            console.log(temp[i])
                                            break;
                                        }
                                    }
                                    setTodos(temp);
                                })
                            }}>{todo.completed == true ? "Completed" : "Mark as done"}</button>
                        </div>
                    )
                })
            }
        </div>

    )
}