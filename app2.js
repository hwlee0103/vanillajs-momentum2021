function sayHello() {}

const player = {
  name: "nico",
  age: 98,
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " nice to meet you");
  },
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");

console.log(player, console);

player.name = "nicolas";
console.log(player);

player.cool = "soon";
console.log(player);

function plus(a, b) {
  //a & b : placeholder. arguments' name could be any. could be 'potato, salad'
  console.log(a + b);
}

//alert("lalalalala");

plus(5, 10);
plus(1.33453, 9898);
plus(9898, 1.33453);

function minusFive(potato) {
  console.log(potato - 5);
}

//only first argument will be send
minusFive(10, 10, 12, 34, 4, 5, 6, 7);

//start using returns
const calculator = {
  add: function (a, b) {
    //onsole.log(a, b);
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

calculator.add(5, 1);
console.log(calculator);
const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
console.log(plusResult);
console.log(minusResult);
console.log(timesResult);
console.log(divideResult);
console.log(powerResult);

const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculate(age);
console.log(krAge);
