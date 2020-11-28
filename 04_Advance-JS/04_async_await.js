document.querySelector("h1").textContent = "Async Await";

async function myFun() {
  // return "Dael";
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Swagger");
    }, 2000);
  });

  const error = false;
  if (!error) {
    // await wait until the operation is resolved
    const res = await promise; // wait until promis is resolve
    return res;
  } else {
    await Promise.reject(new Error("Something Went Wrong"));
  }
}

myFun()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

async function getUsers() {
  // await response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // Only Proceed once its(above) resolved
  const data = await response.json();
  // only proceed once secound promise is resolved
  return data;
}

getUsers().then((users) => console.log(users));
