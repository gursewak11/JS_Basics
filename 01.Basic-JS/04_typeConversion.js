let val;


val = String(5555);             // Number to String
val = String(4+4);              // Number to String
val = String(true);             // Boolean to String
val = String(new Date());       // Date To string
val = String([1, 2, 3, 4, 5])   // Array to String

// toString()
val = (5).toString();
val = (true).toString();

// String to Number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('Hello');
val = Number([1, 2, 3, 4, 5]);

// parseInt()
val = parseInt('100.30');     // Only int not float
val = parseFloat('100.30');   // Float



// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);    // Only used in String
console.log(val.toFixed(2));   // Only for int
// toFixed() set the decimal value to given number


// Type Conversion
const val1 = '5';
const val2 = 6;
const sum = parseInt(val1 + val2);

console.log(sum);
console.log(typeof sum)