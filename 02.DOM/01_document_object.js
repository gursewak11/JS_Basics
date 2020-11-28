let val;

val = document; // RETURN DOCUMENT
val = document.all; // Return document in array
val = document.all[0]; // Getting values using index
val = document.all[1];
val = document.all[2];

val = document.all.length; // All elements of dom

val = document.head; // This gives head
val = document.body; // This gives body

val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[1].getAttribute("src");

let scripts = document.scripts;

let scriptsArray = Array.from(scripts);

scriptsArray.forEach(function (script) {
  console.log(script.getAttribute("src"));
});

console.log(val);
