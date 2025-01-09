// content.js
console.log("Content script injected!");
document.body.style.backgroundColor = "lightcoral";

// Example: Adding a button to the page
const button = document.createElement("button");
button.textContent = "Click me!";
button.style.position = "fixed";
button.style.top = "10px";
button.style.right = "10px";
document.body.appendChild(button);

button.addEventListener("click", () => {
  alert("Button clicked!");
});
