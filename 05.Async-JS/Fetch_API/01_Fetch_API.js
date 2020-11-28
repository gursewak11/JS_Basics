// For plain text
document.getElementById("get-text").addEventListener("click", getText);
function getText() {
  fetch("../dataFiles/data.txt")
    .then((res) => res.text())
    .then((data) => (document.getElementById("output").innerHTML = data))
    .catch((err) => console.log(err));
}

// For Json file
document.getElementById("get-json").addEventListener("click", getJson);
function getJson() {
  fetch("../dataFiles/customers.json")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      let output = "";
      data.forEach(function (post) {
        output += `<li>${post.name}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}

// For External API
document.getElementById("get-api-data").addEventListener("click", getExternal);
function getExternal() {
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      let output = "";
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}

// Error Handeling, we have to check the response and throw an error
// fetch("https://api.github.com/users")
//   .then((res) => res.json())
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(res.error);
//     }
//     return res;
//   })
//   .catch((err) => console.log(err));

function handleErrors(res) {
  if (!res.ok) throw new Error(res.error);
  return res;
}

fetch("https://api.github.com/users")
  .then((res) => res.json())
  .then(handleErrors)
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
