class Person {
  constructor(fistName, lastName, dob) {
    this.fistName = fistName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting() {
    return `Hello There ${this.fistName} ${this.lastName}`;
  }
  calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  // Below is a static method, means this method belongs to the class not the object
  static addNumbers(x, y) {
    return x + y;
  }
}

const swagger = new Person("Swagger", "Singh", "11 June 1998"); // Person's Object

console.log(swagger);
console.log(swagger.greeting());
console.log(swagger.calculateAge());
swagger.getsMarried("Dael");
console.log(swagger.greeting());

// console.log(swagger.addNumbers(1, 2));   // this does not works as static methos hence doesn't belong to object
console.log(Person.addNumbers(1, 2));
