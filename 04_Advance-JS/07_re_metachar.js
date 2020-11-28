document.querySelector("h1").textContent = "MetaCharacter Symbol";

let re;

// Literal Character
re = /hello/;
re = /hello/i;

// Metacharacters Symbols
re = /^h/i; // (^) Must start with
re = /world$/i; // ($) Must end with
re = /^hello$/i; // Must begin and end with
re = /^h.llo$/i; // (.)matches any one character
re = /h*llo/i; // (*)matches any 0 or more times
re = /gre?a?y/i; // (?) optional it means e and a are optional in this
re = /gre?a?y\?/i; // (\) escape char

// Brackets [] - Character Set
re = /gr[ae]y/i; // Must be a or e
re = /[GF]ray/i; // Must be G or F
re = /[^GF]ray/i; // Match any thing expect G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur between {m, n} m to n amount
re = /Hel{2,}o/i; // Must occur atleast m times

// Paretheses () - Grouping
re = /([0-9]x){3}/; // look for numx 3 times
re = /^([0-9]x){3}$/; // look for numx 3 times, exactly

// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // Non-Word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any Non-digit
re = /\s/; // Match whitespace char
re = /\S/; // Match non-whitespace char
re = /Hell\b/i; // Word boundary, it will only found hell not hello

// Assertions
re = /x(?=y)/; // Match x only if followed by y, (xy will work)
re = /x(?!y)/; // Match x only if NOT followed by y (xy will never work)

// String to match
const str = "Hello welcome to hell";

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does NOT matched ${re.source}`);
  }
}
reTest(re, str);
