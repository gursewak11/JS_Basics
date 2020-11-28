// Strings
const name1 = "Dael"; // normal
const name2 = new String("Dael"); // using constructor
name2.foo = "Bar";

console.log(name1);
console.log(name2);
console.log(typeof name1);
console.log(typeof name2);

if (name2 === "Dael") {
  console.log("Yes");
} else {
  console.log("No");
}

// Number
const num1 = 4; // normal
const num2 = new Number(5); // using constructor
console.log(num2);

// Boolean
const bool1 = true; // normal
const bool2 = new Boolean(true); // using constructor
console.log(bool2);

// Functions
const getSum1 = function (x, y) {
  return x + y;
}; // normal
console.log(getSum1(5, 2));

const getSum2 = new Function("x", "y", "return x+y;"); // using constructor
console.log(getSum2(2, 3));

// Object
const gurswag1 = { name: "Gursewak" }; // normal
console.log(gurswag1);

const gurswag2 = new Object({ name: "Gursewak" }); // using constructor
console.log(gurswag2);

// Array
const array1 = [1, 2, 3, 4, 5]; // normal
console.log(array1);

const array2 = new Array(1, 2, 3, 4, 5); // using constructor
console.log(array2);

// Regular Expressions
const re1 = /\w+/; // normal
console.log(re1);
const re2 = new RegExp("\\w+"); // using constructor
console.log(re2);
