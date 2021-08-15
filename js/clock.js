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
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  //clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(getClock, 1000);

//setInterval(sayHello, 5000);

//setTimeout(sayBye, 10000);
