// Create element
const li = document.createElement("li");

// Add class
li.className = "service-list";

// Add id
li.id = "new-item";

// Adding attribute
li.setAttribute("title", "new-item");

// Create text node and appned
li.appendChild(document.createTextNode("New Text"));

// Crate new link element
const link = document.createElement("a"); // Create element
link.className = "Deal Link"; // adding classes
link.innerHTML = "<span>Dael</span>"; // adding innerhtml
li.appendChild(link); // appending to li

// Appen li as child to ul
document.querySelector("ul.service-ul").appendChild(li);

console.log(li);
