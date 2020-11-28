document.querySelector("h1").textContent = "Regular Expersions";

let re;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // g = Global search

// console.log(re);
// console.log(re.source);

let result, str;

// exec(), return result in array or null
result = re.exec("dael hello world");
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test(), return true or false
result = re.test("Hello");
console.log("hello");

// match(), retuen result array or null
str = "Hello There";
result = str.match(re);
console.log(result);

// search(), return index of the first match if not found returns -1
str = "Hello There";
result = str.search(re);
console.log(result);

// replace(), return new string with some or all matches of a pattern
str = "Hello There";
const newStr = str.replace(re, "Hi");
console.log(newStr);
