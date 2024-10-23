let button = document.querySelector("#button");
let menu = document.querySelector("#menu");
button.addEventListener("click", function () {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  }
  else {
    menu.style.display = "none";
  }
});
