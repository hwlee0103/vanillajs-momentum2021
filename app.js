//document.title = "Hello! From JS!";

const title = document.getElementById("#title");

console.dir(title);

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
