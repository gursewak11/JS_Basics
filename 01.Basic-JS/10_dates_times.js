let val;

const today = new Date();
let birthday = new Date('06-11-1998 12:30:25');
birthday = new Date('January 17 2002');
birthday = new Date('9/10/1981');

val = today.getMonth();     // months starts from 0
val = today.getDate();    
val = today.getDay();       // it return the number 
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(01);
birthday.setFullYear(1993);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);
console.log(val);