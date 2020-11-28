class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName); // [  super()  ] this calls parent class constructer
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return "500";
  }
}

const deal = new Customer("Dael", "Singh", "1236985470", "standard");

console.log(deal);
console.log(deal.greeting());

console.log(Customer.getMembershipCost());
