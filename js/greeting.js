//const loginForm = document.getElementById("login-form");
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const link = document.querySelector("a");
//with submit, making click event is not needed
function onLoginBtnClick() {
  //console.log(loginInput);
  //console.log("click!!!!!");
  const username = loginInput.value;
  console.log(username);
  //if html has validation, codes below is not needed
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long");
  }
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
  //alert("clicked!"); //blockes everything
}

link.addEventListener("click", handleLinkClick);

function onLoginSubmit(event) {
  //const username = loginInput.value;
  event.preventDefault();
  //console.log(username);
  //console.log(event);
  loginForm.classList.add("hidden");
  const typedUsername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, typedUsername);
  console.log(typedUsername);
  //greeting.innerHTML = "Hello" + username;
  paintGreetings(typedUsername);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

//loginButton.addEventListener("click", onLoginBtnClick);

const savedUsername = localStorage.getItem("username");
if (savedUsername === null) {
  //show form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greetings
  paintGreetings(username);
}
