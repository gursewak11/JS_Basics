// FOR LOOP

let i=0;

for(i = 0; i < 10; i++){
  if(i === 2){
    console.log('2 is my favorite number');
    continue;
  }

  if(i === 5){
    console.log('Stop the loop');
    break;
  }

  console.log('Number '+ i);
}

// WHILE LOOP

i = 0;
while(i < 10){
  console.log('Number ' + i);
  i++;
}

// DO WHILE
i = 100;

do {
  console.log('Number ' + i);
  i++;
}while(i < 10);

// LOOP THROUGH ARRAY
const cars = ['Ford', 'TATA', 'Honda', 'Toyota'];

for(i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

// FOREACH
cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);
});

// MAP
const users  = [
  {id: 1, name:'Dael'},
  {id: 2, name: 'Swag'},
  {id: 3, name: 'Boss'},
  {id: 4, name: 'God'}
];

const ids = users.map(function(user){
  return user.id;
});
// The map() method creates a new array with the results of calling a function for every array element

console.log(ids);

// FOR IN LOOP
const user = {
  firstName: 'Dael', 
  lastName: 'Singh',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}