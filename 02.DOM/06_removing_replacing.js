// Replace Element
const newHeading = document.createElement("h2"); // Create Element
newHeading.id = "test"; // adding id
newHeading.appendChild(document.createTextNode("Dael Heading")); // Adding value to thenew element

const oldHeading = document.getElementById("heading-1"); // getting heading to replace

const cardAction = document.querySelector("div.sub-contents div.sub-content"); // gettingparent element to replace child

cardAction.replaceChild(newHeading, oldHeading); // Replacing child

// Remove element
const listItems = document.querySelectorAll("li.service-list");
const list = document.querySelector("ul.service-ul");

listItems[0].remove(); // Remove list item

list.removeChild(listItems[3]); // Remove chile element

// Classes and attributes
const listFirst = document.querySelector("li.service-list:first-child");
const link = listFirst.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add("test");
link.classList.remove("dael");

// Attributes
val = link.getAttribute("href");
link.setAttribute("href", "https://google.com");
val = link.hasAttribute("href");
val = link.hasAttribute("title");
link.setAttribute("title", "google");
link.removeAttribute("title");
val = link;

console.log(val);
