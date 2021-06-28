const age = parseInt(prompt("How old are you?"));

console.log(age); //input is string
console.log(typeof age);

console.log(typeof "15", parseInt("15"));
console.log(paresInt(age));

console.log(isNaN(age));

if (isNaN(age)) {
  console.log("Please write a number");
  //condition === true
} else {
  //condition === false
  console.log("Thank you for writing your age.");
}
