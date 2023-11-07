const button = document.querySelector(".nav-toggle-btn");

button.addEventListener("mousedown", function () {
  // Add the 'clicked' class to change the background color
  button.classList.add("clicked");
});

button.addEventListener("mouseup", function () {
  // Remove the 'clicked' class to revert the background color
  button.classList.remove("clicked");
});
const buttonactive = document.querySelector(".nav-toggle-btn.active");

button.addEventListener("mousedown", function () {
  // Add the 'clicked' class to change the background color
  button.classList.add("clicked");
});

button.addEventListener("mouseup", function () {
  // Remove the 'clicked' class to revert the background color
  button.classList.remove("clicked");
});
