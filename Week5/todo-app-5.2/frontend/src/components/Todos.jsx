import { Todo } from "./Todo"

export function Todos({ todos }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
        }}> {
                todos.map((todo) => {
                    return (
                        <Todo key={todo._id} title={todo.title} description={todo.description} completed={todo.completed} id={todo._id}></Todo>
                    )
                })
            }
        </div>

    )
}