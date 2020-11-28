document.querySelector("h1").textContent = "Callback Function";
// const add = (num1, num2, sumNum) => {
//   return sumNum(num1, num2);
// };

// console.log(
//   add(5, 2, (n1, n2) => {
//     return n1 + n2;
//   })
// );

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
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    let output1 = "<h2>With out Call Back</h2>";
    posts.forEach((post) => {
      output1 += `<li>${post.title}</li>`;
    });
    document.body.innerHTML += output1;
  }, 1000);
}

createPost({
  title: "Post Four",
  body: "This is post Four",
});

getPosts();

function createPostCB(post, callBack) {
  setTimeout(() => {
    posts.push(post);
    callBack();
  }, 2000);
}

function getPostsCB() {
  setTimeout(() => {
    let output2 = "<h2>With Call Back</h2>";
    posts.forEach((post) => {
      output2 += `<li>${post.title}</li>`;
    });
    document.body.innerHTML += output2;
  }, 1000);
}

createPostCB(
  {
    title: "Post Four",
    body: "This is post Four",
  },
  getPostsCB
);
