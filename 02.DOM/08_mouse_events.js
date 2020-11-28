const search = document.querySelector(".search_btn");
const services = document.querySelector("#services-list");
const heading = document.querySelector("#main-heading");

// click
search.addEventListener("click", runEvent);

// double click
search.addEventListener("dblclick", runEvent);

// mouse down
search.addEventListener("mousedown", runEvent);

// mouse up
search.addEventListener("mouseup", runEvent);

// mouse enter
services.addEventListener("mouseenter", runEvent);

// mouse leave
services.addEventListener("mouseleave", runEvent);

// mouse over
services.addEventListener("mouseover", runEvent);

// mouse out
services.addEventListener("mouseout", runEvent);

// mouse move
services.addEventListener("mousemove", mouseLocation);

// Event Handler
function runEvent(e) {
  console.log(`Event TYPE: ${e.type}`);
}

function mouseLocation(e) {
  console.log(`Event TYPE: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  document.body.style.background = `rgb( ${e.offsetX}, ${e.offsetY}, 40)`;
}

// console.log(search);
// console.log(services);
// console.log(heading);
