//alert("hi");
console.log(12345);
console.log("hello");

let a = 5;
let b = 2;
//const a = 5;
//const b = 2;

//const myName = "wendy";
let myName = "wendy";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "melody";
console.log("your new name is " + myName);

//boolean
const amIFat = true;
console.log(amIFat);

const kcal = null;
const notdefined;
console.log(notdefined);

//array
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeekStr = mon + tue + wed + thu + fri + sat + sun;
console.log(daysOfWeekStr);

const daysOfWeekArr = [mon, tue, wed, thu, fri, sat, sun];
const nonsense = [1, 2, "hello", false, null, true, nudefined, "nico"];
console.log(daysOfWeekArr);
console.log(nonsense);

//Get item from array
console.log(daysOfWeekArr[5]);
//Add one more day to the array
daysOfWeekArr.push("sun");

const toBuy = ["potato", "tomato", "pizza"];
//undefined: out of index range
console.log(toBuy[1239123]);

//objects
//variable
const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

//array
const player=["nico", 1212, false, "little bit"];

//object
const player = {
    //player 내부이므로 playerName과 같이 쓸 필요 없음.
    name: "nico",
    points: 10,
    fat: true,
    //diff data type could be saved
};
console.log(player);
//getting value
console.log(player.name);
console.log(player["name"]);

console.log(player);
//update
player.fat = false;
//append
player.lastName = "potato";
player.points = player.points + 15;

console.log(player);
