// Object.prototype
// Person.prototype

function Person(firstname, lastname, dob) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.birthday = new Date(dob);
  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

// Calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get Full Name
Person.prototype.getFullName = function () {
  return `${this.firstname} ${this.lastname}`;
};

// Get Married
Person.prototype.getsMaried = function (newLastName) {
  this.lastname = newLastName;
};

const gursewak = new Person("Gursewak", "Singh", "11 June 1998");
const dael = new Person("Swagger", "Singh", "27 Jan 2002");

console.log(dael);
console.log(gursewak.calculateAge());
console.log(dael.getFullName());

dael.getsMaried("Daeler");
console.log(dael.getFullName());

console.log(dael.hasOwnProperty("firstname"));
console.log(dael.hasOwnProperty("getFullName"));
