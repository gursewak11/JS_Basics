// Destructuring Introduced in ES6, easy way to assign and extract variables from object and array
document.querySelector("h1").textContent = "Destructuring";

// Destructuring Assignment
let a, b;
[a, b] = [100, 200];

// rest pattern, (...) this is a spread operator
[a, b, ...rest] = [100, 200, 300, 400, 500]; // Destructuring Assignment
console.log(rest);

// We can also do above with objects
({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 }); // Destructuring Assignment
console.log(rest);

// Array Destructuring
const people = ["Dael", "Swagger", "Singh"];
const [person1, person2, person3] = people;
console.log(person1, person2, person3);

// Parse array return from funcation
function getPeople() {
  return ["Dael", "Swagger", "Singh"];
}

let person01, person02, person03;
[person01, person02, person03] = getPeople();
console.log(person01, person02, person03);

// Object Destructuring
const person = {
  name: "Swagger",
  age: 19,
  city: "Punjab",
  gender: "male",
  sayHello: () => {
    a;
    console.log("Hello");
  },
};

// Old ES5
const nameOld = person.name;
const cityOld = person.city;
const ageOld = person.age;

// New ES6 Destructuring
const { name, age, city, sayHello } = person;
console.log(name, age, city);
sayHello();
