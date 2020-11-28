// Sets - Store unique values of any type
document.querySelector("h1").textContent = "Sets";

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add("Dael String");
set1.add({ name: "John" });
set1.add(true);
set1.add(100);
console.log(set1);

const set2 = new Set([1, true, "Dael"]);
console.log(set2);

// Get Count
console.log(set1.size);

// Check for val
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({ name: "John" })); // OP: false, this is a reference object not a primitive value

// Delete from set
set1.delete(100);
console.log(set1);

// Iterate Thriugh sets

// for...of
for (let item of set1) {
  console.log(item);
}

// For..Each
set1.forEach((item) => {
  console.log(item);
});

// Convert to array
const setArray = Array.from(set1);
console.log(setArray);
