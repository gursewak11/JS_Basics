const person = {
  firstName: 'Gursewak',
  lastName: 'Singh',
  age: 21,
  email: 'dael@gmail.com',
  hobies: ['music', 'sports', 'dael pana'],
  address: {
    city: 'Delhi',
    state: 'New Delhi'
  },
  getBirthYear: function(){
    return 2020 - this.age;
  }
}

let val;

val = person;

// access single element
val = person.firstName;       // perfered way
val = person['firstName'];

val = person.age;
val = person.hobies;
val = person.hobies[2];
val = person.address.city;    // prefered way
val = person.address['state'];

val = person.getBirthYear();

console.log(val);

const people = [
  {name: 'Gursewak', age: 19},
  {name: 'Swagger', age: 21},
  {name: 'Dael Singh', age: 25}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}