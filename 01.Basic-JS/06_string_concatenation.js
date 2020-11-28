const firstName = "Gursewak Dael";
const lastName = "Singh";
let val;
const str = "Hello, Gursewak this side";
const target= "Web Dev, IOT, Dael, Embedded, Swagger";

val = firstName + lastName;

// Concadination
val = firstName + ' ' + lastName;
val = 'Hi My Name is ' + firstName + ' I am a developer';

// Append
val = firstName;
val += ' ';
val += lastName;

// Escaping
val = "That's awesome swagger";
val = 'That\'s awesome swagger';

// Length
val = firstName.length;

// Concat
val = firstName .concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// index
val = firstName[0];
val = firstName[5];

// indexof
val = firstName.indexOf('e');
val = firstName.lastIndexOf('e');

// charAT
val = firstName.charAt(6);

// last char
val = firstName.charAt(firstName.length - 1);

// Substring
val = firstName.substring(2, 9);

// Slice
val = firstName.slice(2, 9);
val = firstName.slice(-3);

// split
val = str.split(' ');
val = target.split(', ');

// replace
val = str.replace('Gursewak', 'Swagger');

// includes, its logocal
val = str.includes('foo');

// Output
console.log(val);