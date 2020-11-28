let val;

const list = document.querySelector("ul.service-ul");
const listItem = document.querySelector("li.service-list");

val = listItem;
val = list;

// get child node
val = list.childNodes; // nodelist
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1  - Element
// 2  - Attribute (deprecated)
// 3  - Text node
// 8  - Comment
// 9  - Document itself
// 10 - Doctype

// get children element node
val = list.children; // html Collection
val = list.children[1];
val = list.children[1].textContent = "Dael";
// Children of Children
val = list.children[3].children[0].id = "dael";
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
