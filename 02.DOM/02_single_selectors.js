// Single element Selector
let val;

// document.getElementById()
val = document.getElementById("main-heading");

// Get Things from the element
val = document.getElementById("main-heading").id;
val = document.getElementById("main-heading").className;

// Chnage Styling
document.getElementById("main-heading").style.background = "#333";
document.getElementById("main-heading").style.color = "#f4f4f4";
document.getElementById("main-heading").style.padding = "1rem";
// document.getElementById("main-heading").style.display = "none";

// Change Content
document.getElementById("main-heading").textContent = "Dael Heading";
document.getElementById("main-heading").innerText = "Swagger Heading";
document.getElementById("main-heading").innerHTML = "<span>Span Heading</span>";

// Better way of doing above thing
const mainHeading = document.getElementById("main-heading");

// Chnage Styling
mainHeading.style.background = "#333";
mainHeading.style.color = "#f4f4f4";
mainHeading.style.padding = "1rem";
// mainHeading.style.display = "none";

// Change Content
mainHeading.textContent = "Dael Heading";
mainHeading.innerText = "Swagger Heading";
mainHeading.innerHTML = "<span>Span Heading</span>";

// -------------------------------------------------------------------

// document.querySelector()
val = document.querySelector("#main-heading"); // selecting by Id
val = document.querySelector(".heading"); // selecting by class
val = document.querySelector("h2"); // selecting by element

document.querySelector("li").style.background = "red"; // changinf style
document.querySelector("ul li").style.background = "blue";

// Use os sudo selectors
document.querySelector("li:last-child").style.background = "red";
document.querySelector("li:nth-child(2)").style.background = "yellow";

document.querySelector("li:nth-child(2)").textContent = "C Text";

document.querySelector("li:nth-child(odd)").style.background = "purple"; // Not every odd changes

console.log(val);
