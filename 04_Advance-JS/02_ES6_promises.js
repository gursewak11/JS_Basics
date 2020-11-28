document.querySelector("h1").textContent = "ES6 Promises";

const posts = [
  {
    title: "Post One",
    body: "This is post one",
  },
  {
    title: "Post Two",
    body: "This is post two",
  },
  {
    title: "Post Three",
    body: "This is post Three",
  },
];

function createPost(post) {
  // Initialising promise
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Something Went wrong");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    let output2 = "<h2>With Call Back</h2>";
    posts.forEach((post) => {
      output2 += `<li>${post.title}</li>`;
    });
    document.body.innerHTML += output2;
  }, 1000);
}

createPost({
  title: "Post Four",
  body: "This is post Four",
})
  .then(getPosts)
  .catch(function (error) {
    console.log(error);
  });

//.then, run when resolved
// .catch, run when reject
