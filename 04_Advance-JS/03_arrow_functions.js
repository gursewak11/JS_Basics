document.querySelector("h1").textContent = "Arrow Function";

// const sayHello = () => {
//   console.log("Dael");
// };
// below is same as above
const sayHello = () => console.log("Dael");

// One line return
const sayHello1 = () => "Swagger"; // this is returning Swagger

// Return Object
const sayObject = () => ({ title: "Dael" });

// single parameter donot need ()
const name = (name) => console.log(name);

// more than one parameter, need ()
const fullName = (firstName, lastName) =>
  console.log(`${firstName} ${lastName}`);

// Shorter than  normal function
const users = ["Gursewak", "Dael", "Gursant", "Swagger"];
let nameLength = users.map((name) => {
  return name.length;
});

// Shortest way
nameLength = users.map((name) => name.length);

console.log(nameLength);

console.log(sayHello1());
console.log(sayObject());
sayHello();
name("Dael Singh");
fullName("Swagger", "Singh");
