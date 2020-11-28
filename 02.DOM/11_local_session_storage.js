// set local storage item
localStorage.setItem("name", "Gursewak");
localStorage.setItem("age", "19");

// set session storage
sessionStorage.setItem("name", "Gursewak");

// remove from storage
localStorage.removeItem("name");

// get from storage
const name = localStorage.getItem("name");
const age = localStorage.getItem("age");

// clear local storage
localStorage.clear();

console.log(name, age);

// Saving searches
const submit = document.querySelector(".search_btn");
const form = document.querySelector("form");
const input = document.querySelector("#search-bar");

submit.addEventListener("click", () => {
  form.submit(); // Submitting the form

  let searches;

  if (localStorage.getItem("search") === null) {
    searches = [];
  } else {
    searches = JSON.parse(localStorage.getItem("search"));
  }

  searches.push(input.value);
  // console.log(searches);

  localStorage.setItem("search", JSON.stringify(searches));
  alert("Data Saved");
});

const searchesArr = JSON.parse(localStorage.getItem("search"));
searchesArr.forEach(function (search) {
  console.log(search);
});
// console.log(searchesArr);
