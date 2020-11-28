// document.getElementsByClassName
const items = document.getElementsByClassName("service-list"); // retuen HTML collection similar to array
console.log(items);
console.log(items[0]);
items[0].style.color = "red";
items[1].textContent = "Deal Changed";

const listItems = document
  .querySelector("#services-list ul")
  .getElementsByClassName("service-list"); // using locally

console.log(listItems);

// document.getElementsByTagName
let lis = document.getElementsByTagName("li"); // retuen HTML collection similar to array
console.log(lis);
console.log(lis[0]);
lis[0].style.background = "red";
lis[1].style.background = "pink";

// Converting HTML Collections to Array
lis = Array.from(lis);
lis.reverse();
console.log(lis);
lis.forEach(function (li, index) {
  console.log(li);
  li.textContent = `${index} : Index`;
});

// document.querySelectorAll
const itemsAll = document.querySelectorAll("ul li.service-list"); // return node list

itemsAll.forEach(function (item, index) {
  console.log(item);
  item.textContent = `${index} : Index`;
});

const liOdd = document.querySelectorAll("li.service-list:nth-child(odd)");
const liEven = document.querySelectorAll("li.service-list:nth-child(even)");

liOdd.forEach(function (li) {
  li.style.background = "#ccc";
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#e4e4e4";
}

console.log(itemsAll);
