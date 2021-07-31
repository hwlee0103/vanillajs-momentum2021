const age = parseInt(prompt("How old are you?"));

console.log(age); //input is string
console.log(typeof age);

console.log(typeof "15", parseInt("15"));
console.log(paresInt(age));

console.log(isNaN(age));

//temp
age = parseInt("15");

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
  //condition === true
} else if (age < 18) {
  //condition === false
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (ange > 50 && age <= 80) {
  console.log("You should excercise");
} else if (age > 80) {
  console.log("You can do whatever you want.");
} else if (age === 100) {
  //will not happen because of previous age>80 condition would be already true
  console.log("Wow you are wise");
}
