const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
  //console.log("i will paint", newTodo);
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  //console.log(li);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  //console.log(toDoInput.value);
  toDoInput.value = "";
  //console.log(newTodo, toDoInput.value);
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
