"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Todo({ todo }) {
    return (<div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <b>Completed : {todo.completed}</b>
    </div>);
}
exports.default = Todo;
