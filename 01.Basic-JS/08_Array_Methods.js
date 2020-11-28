const numbers = [12, 65, 50, 85, 02, 6, 97, 73, 64];
const numbers2 = new Array(23, 55, 45, 89, 74);
const fruits = ['apple', 'orange', 'bananna', 'mango'];
const mixture = ['Swagger', 29, true, null, undefined, {a: 1, b: 2}, new Date]

let val;

val = numbers.length;     // length

val = Array.isArray(numbers);   // Check if array or not

val = numbers[0];         // get single value (Indexing)
val = numbers[6];

numbers[2] = 100;         // Insert 

val = numbers.indexOf(100);    // index of a value
val = numbers.indexOf(2);

// MUTATING Array

numbers.push(120);      // Add at the end   
numbers.unshift(110);   // Add at the start

numbers.pop();          // Remove from the end
numbers.shift();        // Remove from the start

// numbers.splice(1, 5);    // Splice Values

numbers.reverse();          // reverse

val = numbers.concat(numbers2);   // concadination arrays 

val = fruits.sort();     // sort alphabets

// sort numbers
val = numbers.sort(); // this does't work, it sort wrt first digit 

// to overcome above use sort function
val = numbers.sort(function(x, y){
  return x - y;
})
// reverse number sort
val = numbers.sort(function(x, y){
  return y - x;
})

// Find
function under50(num){
  return num < 50;
}

val = numbers.find(under50);

// Output
console.log(numbers);
console.log(val);
// console.log(fruits);
// console.log(mixture);