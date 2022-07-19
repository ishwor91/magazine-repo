let menu = document.querySelector(".navbar-menu");
menu.addEventListener('click', hamburger);
let navBar = document.querySelector(".navbar");
navBar.addEventListener('click', menulist);

function hamburger() {
    menu.classList.toggle('active');
}
function menulist() {
    navBar.classList.toggle('active');
}