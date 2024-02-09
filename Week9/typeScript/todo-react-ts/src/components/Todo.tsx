interface todoItem {
  title: string;
  description: string;
  completed: boolean;
}

interface todoInput {
  todo: todoItem;
}

export default function Todo({ todo }: todoInput) {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <b>Completed : {todo.completed}</b>
    </div>
  );
}
