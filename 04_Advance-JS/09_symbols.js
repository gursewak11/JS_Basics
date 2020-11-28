// Symbols, are unique premitive datatype, part of ES6
document.querySelector("h1").textContent = "Symbols";

// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol("sym2");

// console.log(typeof sym2);

// Symbols cant be same at all, so below function will return false
console.log(Symbol() === Symbol());

// console.log(`Hello ${String(sym1)}`);
console.log(`Hello ${sym1.toString()}`); // above is same as this

// Unique Object Keys
const Key1 = Symbol();
const Key2 = Symbol("sym2");

const myObj = {};

myObj[Key1] = "Prop1";
myObj[Key2] = "Prop2";
myObj.Key3 = "Prop3";
myObj.Key4 = "Prop4";

console.log(myObj[Key1]);
console.log(myObj[Key2]);

// Symbols are not enumerable in for..in
for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({ key: "prop" }));
console.log(JSON.stringify({ [Symbol("sym1")]: "prop" }));
