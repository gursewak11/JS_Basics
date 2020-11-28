// Person Constructor
function Person(name, age) {
  this.name = name; // constructer name element
  this.age = age;

  console.log(this); // this returns present constructer
}

console.log(this);
// this.alert("1");

const swagger = new Person("Gurswag", 19); // call constructer with "new" keyword
const dael = new Person("Dael Singh", 21);

console.log(swagger);
console.log(swagger.name);
console.log(dael);

console.log("------------------------");

// Constructer Person2
function Person2(name, dob) {
  this.name = name;
  this.birthday = new Date(dob); // creating DOB

  // creating a constructor function or a method
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const gurswag = new Person2("Gursewak", "11 June 1998");
console.log(gurswag);
console.log(gurswag.calculateAge());
