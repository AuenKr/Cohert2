"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const Todo_1 = __importDefault(require("./components/Todo"));
function App() {
    const todos = [
        {
            title: "jfsd",
            description: "fkjdsakf",
            completed: true,
        },
        {
            title: "jfsd",
            description: "fkjdsakf",
            completed: false,
        },
        {
            title: "jfsd",
            description: "fkjdsakf",
            completed: false,
        },
        {
            title: "jfsd",
            description: "fkjdsakf",
            completed: false,
        },
    ];
    return (<>
      <div>
        <h1>Hi htet</h1>
        <div>
          {todos.map((todo, index) => (<Todo_1.default key={index} todo={todo}/>))}
        </div>
      </div>
    </>);
}
exports.default = App;
