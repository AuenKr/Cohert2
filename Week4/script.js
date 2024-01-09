const title = document.querySelector("#title");
const desc = document.querySelector("#todoDesc");
const submitBtn = document.querySelector("#submit");
const todoList = document.querySelector("#todoList");

submitBtn.addEventListener("click", function (event) {
    const li = document.createElement("li");
    const todoDiv = document.createElement("div");
    const todoDescDiv = document.createElement("div");
    const markAsDoneBtn = document.createElement("button");
    const br = document.createElement("br");
    todoDiv.innerHTML = title.value;
    todoDescDiv.innerHTML = desc.value;
    markAsDoneBtn.innerHTML = "Mark as Done";
    markAsDoneBtn.setAttribute("id", "markAsDone");

    li.append(todoDiv, todoDescDiv, markAsDoneBtn);
    todoList.append(li);

    title.value = " ";
    desc.value = " ";
});

todoList.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
        const markAsDoneBtn = document.querySelector("#markAsDone");
        markAsDoneBtn.innerHTML = "Done!";
    }
});

let globalId = 1;
function markAsDone(todoId) {
    const parent = document.getElementById(todoId);
    parent.children[2].innerHTML = "Done!";
}

function createChild(title, description, id) {
    const child = document.createElement("div");
    const firstGrandParent = document.createElement("div");
    firstGrandParent.innerHTML = title;
    const secondGrandParent = document.createElement("div");
    secondGrandParent.innerHTML = description;
    const thirdGrandParent = document.createElement("button");
    thirdGrandParent.innerHTML = "Mark as done";
    thirdGrandParent.setAttribute("onclick", `markAsDone(${id})`);
    child.appendChild(firstGrandParent);
    child.appendChild(secondGrandParent);
    child.appendChild(thirdGrandParent);
    child.setAttribute("id", id);
    return child;
}

function updateState(newTodos) {
    const parent = document.getElementById("todos");
    parent.innerHTML = "";
    for (let i = 0; i < newTodos.length; i++) {
        const title = newTodos[i].title;
        const description = newTodos[i].description;
        parent.appendChild(createChild(title, description, globalId++));
    }
}

function addTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    todoState.push({
        title: title,
        description: description,
        id: globalId++,
    });
    updateState(todoState);
}
