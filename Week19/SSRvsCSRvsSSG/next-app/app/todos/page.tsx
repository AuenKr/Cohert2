import revalidateTodo from "../lib/actions/revaliateTodo";

// Static file geration
export default async function Todos() {
    const response = await fetch("https://sum-server.100xdevs.com/todos", {
        next: {
            // revalidate : 5 // Static file generation with every 5 sec
            tags: ["todos"],
        },
    });
    const data = await response.json();

    revalidateTodo();   // whenever revalidateTodo called it will refresh data

    return (
        <div>
            {data.todos.map((todo: any) => {
                return (
                    <div key={todo.id}>
                        <div>{todo.title}</div>
                        <div>{todo.description}</div>
                    </div>
                );
            })}
        </div>
    );
}
