const clock = document.querySelector("h2#clock");

//clock.innerText = "lalalala clock is ticking!";

//function sayHello() {
//  console.log("hello");
//}

//function sayBye() {
//  console.log("bye");
//}

function getClock() {
  const date = new Date();
  //console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

setInterval(getClock, 1000);

//setInterval(sayHello, 5000);

//setTimeout(sayBye, 10000);
