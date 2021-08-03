//const loginForm = document.getElementById("login-form");
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

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

function onLoginSubmit(event) {
  //const username = loginInput.value;
  event.preventDefault();
  //console.log(username);
  console.log(event);
}

//loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit", onLoginSubmit);
