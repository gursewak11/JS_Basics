document.querySelector("h1").textContent = "Try Catch";

const user = { email: "dael@mail.com" };

try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Will produce SyntaxError
  // eval('Hello World');

  // Will produce a URIError
  // decodeURIComponent('%');

  // Creating Custom error
  if (!user.name) {
    //throw 'User has no name';
    throw new SyntaxError("User has no name");
  }
} catch (e) {
  console.log(`User Error: ${e.message}`);

  // console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
  // console.log(e instanceof TypeError);
} finally {
  console.log("Finally runs regardless of result");
}

console.log("Program Continues..");
