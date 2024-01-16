import axios from "axios";
import { useState } from "react"
export default function InputTodo({ todos, setTodos }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const updateTitle = (e) => setTitle(e.target.value);
    const updateDesc = (e) => setDesc(e.target.value);
    let globalID = todos.length;
    const addTodo = () => {
        axios.post("http://localhost:3000/todo/add", {
            title, description: desc, id: globalID
        }).then((res) => {
            console.log(res.data);
        }).catch((err) => console.log(err));
        setTodos(prev => [...prev, { title, description: desc, id: globalID }]);
    }

    return (
        <div>
            <input id="title" type="text" placeholder="title" onBlur={updateTitle} /><br /><br />
            <input id="title" type="text" placeholder="description" onBlur={updateDesc} /><br /><br />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}