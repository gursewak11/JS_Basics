// Maps are in ES6, holds key value pairs
// Maps = key-value pairs - we can use any tyoe as key or value
document.querySelector("h1").textContent = "Maps";

const map1 = new Map();

//  Set Keys
const key1 = "some string";
const key2 = {};
const key3 = function () {};

// Set map values by key
map1.set(key1, "Value of key1");
map1.set(key2, "Value of key2");
map1.set(key3, "Value of key3");

// get values by key
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

// Count Values
console.log(map1.size);

// Iterating Maps

// usinf for...of to get keys and values
for (let [key, value] of map1) {
  console.log(`${key} = ${value}`);
}

// Iterte keys only
for (let key of map1.keys()) {
  console.log(key);
}

// Iterte values only
for (let value of map1.values()) {
  console.log(value);
}

// Loop with for Each...................
map1.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

// Convert to arrays
// Create an array of the key value pair
const keyValArray = Array.from(map1);
console.log(keyValArray);

// Create an array of the  value pair
const valArray = Array.from(map1.values());
console.log(valArray);

// Create an array of the key  pair
const keyArray = Array.from(map1.keys());
console.log(keyArray);
