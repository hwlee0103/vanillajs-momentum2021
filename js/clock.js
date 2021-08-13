const clock = document.querySelector("h2#clock");

clock.innerText = "lalalala clock is ticking!";

function sayHello() {
  console.log("hello");
}

setInterval(sayHello, 5000);
