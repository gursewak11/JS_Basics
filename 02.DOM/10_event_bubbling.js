// Event Bubbling
document
  .querySelector(".services-title")
  .addEventListener("click", function (e) {
    console.log("services-title");
  });

document
  .querySelector("#services-list")
  .addEventListener("click", function (e) {
    console.log("services-list");
  });

document.querySelector(".grid").addEventListener("click", function (e) {
  console.log("grid");
});

document.querySelector("body").addEventListener("click", function (e) {
  console.log("body");
});

// Event Delgation Example
const deleteItem = document // work only with first go
  .querySelector(".bhot_dael")
  .addEventListener("click", function (e) {
    console.log("This will work on only first go");
  });

// Event Delgation
document.body.addEventListener("click", selList); // taking any parent element of li's
function selList(e) {
  // console.log(e.target);
  // below taking element we tap and checking its class if same perform function
  if (e.target.parentElement.className === "dael bhot_dael") {
    console.log("go");
  }
}

// Deleating element
document.querySelector("ul.service-ul").addEventListener("click", delItem);
function delItem(e) {
  if (e.target.parentElement.classList.contains("dael")) {
    console.log("go");

    e.target.parentElement.parentElement.remove(); // Deleting item
  }
}
