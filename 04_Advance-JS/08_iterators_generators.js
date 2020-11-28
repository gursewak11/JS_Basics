document.querySelector("h1").textContent = "Iterators Generators";

// Iterators Example
function nameIterators(names) {
  let nextIndex = 0;
  return {
    next: () => {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    },
  };
}

// Create array of names
const namesArray = ["Swagger", "singh", "dael"];

// initialise Iterators and pass array
const names = nameIterators(namesArray);

// console.log(names.next());
console.log(names.next().value); // log Swagger
console.log(names.next().value); // log singh
console.log(names.next().value); // log dael
console.log(names.next().value); // log undefined

console.log("------------------------------");

// Generators Example   (*) means its an Generators not a fun
function* sayNames() {
  yield "Swagger";
  yield "dael";
  yield "singh";
}

const name = sayNames();

// console.log(name.next());
console.log(name.next().value); // log Swagger
console.log(name.next().value); // log dael
console.log(name.next().value); // log singh
console.log(name.next().value); // log undefined

// ID Creator
function* createIds() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
