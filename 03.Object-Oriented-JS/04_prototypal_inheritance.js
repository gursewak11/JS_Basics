// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.greeting = function () {
  return `Hello There ${this.firstName} ${this.lastName}`;
};

const dael = new Person("Dael", "Singh");
console.log(dael);
console.log(dael.greeting());

// Customer Constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName); // Inheriting From Person

  this.phone = phone;
  this.membership = membership;
}

// Inherit The persone prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make Customer.prototype return Customer()
Customer.prototype.constructor = Customer;

const swaggerCustomer = new Customer(
  "Swagger",
  "Singh",
  "1234567890",
  "Standard"
);

console.log(swaggerCustomer);
console.log(swaggerCustomer.greeting());

// Customer greeting, overwriting the greeting function
Customer.prototype.greeting = function () {
  return `Hello There ${this.firstName} ${this.lastName}, Welcome to our Club`;
};

console.log(swaggerCustomer.greeting());
