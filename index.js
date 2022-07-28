let menu = document.querySelector(".navbar-menu");
menu.addEventListener("click", hamburger);
let navBar = document.querySelector(".header");
let link = document.querySelector(".nav-list");
// navBar.addEventListener("click", menulist);

function hamburger() {
  menu.classList.toggle("active");
  navBar.classList.toggle("active");
}

// function menulist() { };

// js for nav list remove classlist
// document.querySelectorAll(".nav-list a").forEach((menu) => {
//   menu.click = () => {
//     navBar.classList.remove("active");

//   }
// })\
let nav = document.querySelectorAll(".nav");
nav.forEach((menu_hide) => {
  menu_hide.addEventListener("click", hideNav);
});

function hideNav() {
  navBar.classList.remove("active");
  link.classList.toogle("active");
}






// Js for Tab
function openPage(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("hot-topic-swiper");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("nav-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "nav-link");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += "active";
}
document.querySelectorAll.forEach((element) => {
  element.addEventListener("click", openCity(evt, paris));
});

document.getElementById("defaultOpen").click();
