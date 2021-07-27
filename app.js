//document.title = "Hello! From JS!";

const title = document.getElementById("title");

console.dir(title);
console.log(title);

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);

const hellos = document.getElementsByClassName("hello");
//array of many h1s
console.log(hellos);

//array
const title1 = document.getElementsByTagName("h1");
console.log(title1);

const title2 = document.querySelector(".hello h1");
console.log(title2);

//array
const title3 = document.querySelectorAll(".hello h1");
console.log(title3);

const one = document.querySelector("#hello");
const two = document.getElementById("hello");
//one and two are same

const title4 = document.querySelector("div.hello:first-child h1");
console.log(title4);

title4.style.color = "blue";

function handleTitleClick() {
  console.log("title was clicked!");
  title4.innerHTML = "Title Clicked!";
}

function handleMouseEnter() {
  console.log("mouse is here!");
}

function handleMouseLeave() {
  title4.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOD");
}
//do not add () to end of function name if only function acts at events
title4.addEventListener("click", handleTitleClick);
//title4.addEventListener("mouseenter", handleMouseEnter);
title4.addEventListener("mouseleave", handleMouseLeave);
//nico doesn't prefer this way
title4.onmouseenter = handleMouseEnter;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy); //when try to copy on window

//when wifi - offline
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
