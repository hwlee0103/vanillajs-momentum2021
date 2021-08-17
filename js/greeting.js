const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const link = document.querySelector("a");
const username = loginInput.value;

function onLoginBtnClick() {
  console.log(username);
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long");
  }
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

//link.addEventListener("click", handleLinkClick);

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const typedUsername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, typedUsername);
  console.log(typedUsername);
  paintGreetings(typedUsername);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(username);
}
