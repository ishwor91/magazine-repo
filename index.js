let menu = document.querySelector(".navbar-menu");
menu.addEventListener("click", hamburger);
let navBar = document.querySelector(".header");
navBar.addEventListener("click", menulist);

function hamburger() {
  menu.classList.toggle("active");
  navBar.classList.toggle("active");
}

function menulist() { };



