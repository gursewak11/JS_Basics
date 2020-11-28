document.querySelector(".search_btn").addEventListener("click", function (e) {
  console.log("Dael Hogi");
  // e.preventDefault();
});

document.querySelector(".search_btn").addEventListener("click", onClick);

function onClick(e) {
  // console.log("Dael Hogi");
  let val;

  val = e;

  // Event targate element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // e.target.innerText = "Hello";

  // Event Type
  val = e.type;

  // Time stamo
  val = e.timeStamp;

  // Coordinates at event relative to window
  val = e.clientY;
  val = e.clientX;

  // Coordinates at event relative to window
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
