// personPrototypes contains of all the prototype functions
const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

// Object.create() method creates a new object, using an existing object as the prototype of the newly created object
const gursewak = Object.create(personPrototypes);
gursewak.firstName = "Gursewak";
gursewak.lastName = "Singh";
gursewak.age = 21;

console.log(gursewak);
console.log(gursewak.greeting());

gursewak.getsMarried("Dael");

console.log(gursewak);
console.log(gursewak.greeting());

const swagger = Object.create(personPrototypes, {
  firstName: { value: "Swagger" },
  lastName: { value: "Singh" },
  age: { value: "22" },
});

console.log(swagger);
console.log(swagger.greeting());
