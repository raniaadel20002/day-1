// ------------------------------
// Task 1 — Array warm‑up (no loops)
// ------------------------------
console.log("\\nTask 1 — Array warm‑up");
let people = ["Adam", "Mia", "Jamal", "Sara", "Omar", "Nina"];

// 1) Remove the person at the FRONT who decided to leave.
people.shift();
// 2) Add "Luna" to the VERY FRONT.
people.push("Luna");
// 3) Move the LAST TWO people to be right AFTER the first element (keep their order).
let moves = people.splice(-2);
people.splice(0,1,...moves);
console.log("people =", people); // ["Luna", "Omar", "Nina", "Mia", "Jamal", "Sara"]

// ------------------------------
// Task 2 — Small decisions with logical operators
// ------------------------------
console.log("\\nTask 2 — Decisions with && and ||");
let a = 12;
let b = 5;
let c = 0;
let isNiceNumber = true;
if (a % 2 === 0 && b % 2 !== 0 || !c) {
// Create a variable 'isNiceNumber' that is TRUE only if:
//   - a is even AND b is odd OR c is NOT truthy (use !c)
// Use &&, ||, and !
console.log("isNiceNumber =", isNiceNumber);
}else {
  (console.log("NotSoNice"));}
 // true

// ------------------------------
// Task 3 — Array membership without loops
// ------------------------------
console.log("\\nTask 3 — Array membership without loops");
let cartA = ["Phone", "Headphones", "Charger"];
let cartB = ["Laptop", "Camera"];

// Create 'hasTechDeal' that is TRUE if EITHER cart contains "Laptop" OR "Camera".
// Use includes or indexOf (no loops).
let hasTechDeal = cartA.includes("Laptop") || cartA.includes("Camera") ||
                  cartB.includes("Laptop") || cartB.includes("Camera");

console.log("hasTechDeal =", hasTechDeal);


// ------------------------------
// Task 4 — Truthy vs Falsy (no loops)
// ------------------------------
console.log("\\nTask 4 — Truthy vs Falsy");
let values = [0, "hi", "", 42, null];
let truthy ;
let falsy;
// Create two arrays: truthy and falsy. Then, using if/else for EACH element by index,
// push the value into the correct array. Use the logical NOT operator to test falsy.

// value at index 0
// if value is falsy, push it to falsy array
// if value is truthy, push it to truthy array
if (!values[0]) {
  falsy.push(values[0]);
} else {truthy.push(values[0]);}
// value at index 1
// if value is falsy, push it to falsy array
// if value is truthy, push it to truthy array
if (!values[1]) {
  falsy.push(values[1]);
} else {truthy.push(values[1]);}
// value at index 2
// if value is falsy, push it to falsy array
// if value is truthy, push it to truthy array
if (!values[2]) {
  falsy.push(values[2]);
} else {truthy.push(values[2]);}
// value at index 3
// if value is falsy, push it to falsy array
// if value is truthy, push it to truthy array
if (!values[3]) {
  falsy.push(values[3]);
} else {truthy.push(values[3]);}
// value at index 4
// if value is falsy, push it to falsy array
// if value is truthy, push it to truthy array
if (!values[4]) {
  falsy.push(values[4]);
} else {truthy.push(values[4]);}
console.log("truthy =", truthy);
console.log("falsy  =", falsy);


// ------------------------------
// Task 5 — Merge settings (Object.assign) WITHOUT changing defaults
// ------------------------------
console.log("\\nTask 5 — Object.assign merge");
let defaults = { theme: "light", pageSize: 20, showTips: true };
let overrides = { theme: "", pageSize: 50 }; // falsy value "" should still override
Object.assign(overrides ,defaults);  
console.log(overrides);
// Create 'settings' as a MERGE of defaults and overrides WITHOUT mutating 'defaults'.
// Use Object.assign on an empty object or a shallow copy of defaults.
let settings = Object.create( overrides);

console.log("settings =", settings);
console.log("defaults still =", defaults);


// ------------------------------
// Task 6 — Prototypes with Object.create (no functions needed)
// ------------------------------
console.log("\\nTask 6 — Object.create basics");
let vehicleBase = {
  type: "vehicle",
  wheels: 0,
  powered: true
};
let myBike;
let vehicleBase = Object.create( myBike);
// Using Object.create, make myBike that INHERITS from vehicleBase,
// and give it its OWN properties: kind: "bike", wheels: 2, brand: "EcoRide".
myBike.kind = "bike"; 
myBike.wheels = "2";
// e.g., myBike.kind = "bike"; ...
myBike.brand = "EcoRide";
// Check prototype data access (should read from prototype if not on the object itself).
console.log("myBike.kind     =", myBike.kind);
console.log("myBike.wheels   =", myBike.wheels);
console.log("myBike.powered  =", myBike.powered);


// ------------------------------
// Task 7 — Object.keys / Object.values with decisions (no loops)
// ------------------------------
console.log("\\nTask 7 — keys & values");
let scores = { Alice: 17, Bob: 22, Carol: 22 };
let names = Object.keys(scores);
// 1) Make two variables: names = Object.keys(scores), numbers = Object.values(scores)
/* TODO */
let numbers = Object.values(scores);
// 2) Make 'hasBob' true if "Bob" exists in names.
let hasBob;
let hasBob = names.includes("Bob");

// 3) Decide a winner name and store in 'winner' by comparing the known properties with if/else.
//    If there is a tie, set winner to "TIE". (No loops; compare known keys)
let winner;
if (scores.Amina > scores.Omar && scores.Amina > scores.Sara) {
  winner = "Amina";
} else if (scores.Omar > scores.Amina && scores.Omar > scores.Sara) {
  winner = "Omar";
} else if (scores.Sara > scores.Amina && scores.Sara > scores.Omar) {
  winner = "Sara";
} else {
  winner = "TIE";
}
console.log("names  =", names);
console.log("numbers=", numbers);
console.log("hasBob =", hasBob);
console.log("winner =", winner);


// ------------------------------
// Task 8 — If / Else if / Else rules (ticket price)
// ------------------------------
console.log("\\nTask 8 — Ticket price rules");
let customer = { age: 20, isStudent: true, hasCoupon: true };
// Rules (in this order):
//   1) If age < 6: price = 0
//   2) Else if age <= 18 OR isStudent is true: price = 8
//   3) Else if age >= 65: price = 6
//   4) Else: price = 12
//   After that, if hasCoupon is true, subtract 2 (but not below 0).
let price;
if (age < 6) {
  price = 0;
} else if (age <= 18 || Student == true) {
  price = 8;
} else if ( age >= 65) {
  price = 6;
} else {
  price = 12;
}
console.log("price =", price);


// ------------------------------
// Task 9 — String methods
// ------------------------------
console.log("\\nTask 9 — String methods");
let rawName = "   PreProgramming JavaScript   ";
rawName.trim();
rawName.charAt(0).toUpperCase();
rawName.slice(1).toLowerCase();
// Create 'displayName' so that:
//   - trims spaces
//   - first letter uppercase
//   - rest lowercase (for the first word only is OK here)
let displayName;

// Create 'hasProgram' that is TRUE if the (trimmed, lowercased) string contains "program".
let hasProgram = trimmed.toLowerCase().include("program");

console.log("displayName =", displayName);
console.log("hasProgram  =", hasProgram);

