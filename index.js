let menu = document.querySelector(".navbar-menu");
menu.addEventListener("click", hamburger);
let navBar = document.querySelector(".header");
let link = document.querySelector(".nav-list");
// navBar.addEventListener("click", menulist);

function hamburger() {
  menu.classList.toggle("active");
  navBar.classList.toggle("active");
  link.classList.toggle("active");

};

link.addEventListener("click", hamburger);
function hideNav() {
  navBar.classList.remove("active");
  link.classList.toogle("active");
  menu.classList.remove("active");

}

// Js for Tab



function example(a, b, c) {
  var btnWrapper = document.querySelector(a);
  var tabBtns = btnWrapper.querySelectorAll(b);
  var tabPanes = document.querySelectorAll(c);
  tabBtns.forEach(function (btn) {
    btn.onclick = function () {
      var dataTarget = this.getAttribute("data-show");
      var targetID = document.getElementById(dataTarget);
      tabBtns.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      tabPanes.forEach((pane) =>
        (pane.classList.remove('show')));
      targetID.classList.add('show');

    };

  });
}
example('.hot-topic-title', '.nav-link', '.hot-topic-swiper');



// load more Js  
const btn = document.querySelector(".l-btn");
const content = document.querySelector(".image-container");


btn.addEventListener("click", function () {
  if (btn.innerHTML === "Load More") {
    btn.innerHTML = "show less";
  } else {
    btn.innerHTML = "Load More";
  };

  content.classList.toggle("active");

})

// image container JS
const poping_content = document.querySelector(".popup-image");
const popimg = document.querySelectorAll(".image-pop img");
const close = document.querySelector(".close");

popimg.forEach(function (elm) {
  elm.addEventListener("click", function () {
    poping_content.classList.add("active");
    document.querySelector(".popup-image img").src = elm.getAttribute("src");
    close.addEventListener("click", () => poping_content.classList.remove("active"));
  });
  
  

  
});
