const form = document.querySelector("form");
const taskInput = document.getElementById("search-bar");
const heading = document.getElementById("heading-1");
const select = document.querySelector("select");

// Clear Input
// taskInput.value = "";

// On submit
form.addEventListener("submit", runEvent);

// key down
taskInput.addEventListener("keydown", changeHeading);

// key up
taskInput.addEventListener("keyup", changeHeading);

// key press
taskInput.addEventListener("keypress", runEvent);

// focus
taskInput.addEventListener("focus", runEvent);

// blur
taskInput.addEventListener("blur", runEvent);

// cut
taskInput.addEventListener("cut", runEvent);

// paste
taskInput.addEventListener("paste", runEvent);

// input
taskInput.addEventListener("input", runEvent);

// change
select.addEventListener("change", runEvent); // this is used for select list

function runEvent(e) {
  console.log(`EVENT TYPE ${e.type}`);
  // Get input value
  console.log(taskInput.value);
  // e.preventDefault();
}

function changeHeading(e) {
  console.log(`EVENT TYPE ${e.type}`);

  console.log(e.target.value);
  heading.innerText = e.target.value;
}
