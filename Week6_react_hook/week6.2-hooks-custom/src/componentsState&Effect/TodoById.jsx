import { useEffect, useState } from "react";
import axios from "axios";
import { Todo } from "./Todo";

export function TodoById() {
    const [id, setId] = useState(1);
    const [todo, setTodo] = useState({});
    useEffect(() => {
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            .then(res => {
                setTodo(res.data.todo)
            })
    }, []);
    useEffect(() => {
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            .then((res) => {
                setTodo(res.data.todo)
            })
    }, [id]);
    return (
        <div>
            <input type="text" name="id" placeholder="id" onBlur={(event) => {
                setId(event.target.value);
            }} />
            <br /><br />
            {/* <button onClick={updatedId}>Submit</button> */ console.log(todo)}
            <Todo title={todo.title} description={todo.description}></Todo>
        </div>
    )
}