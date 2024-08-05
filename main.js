"use strict";
// data Nav
let btnNav = document.querySelectorAll("[data-btn-nav]"),
  overlay = document.querySelector("[data-overlay]"),
  navbar = document.querySelector("[data-nav]");
// Function Nav and overlay
for (let i = 0; i < btnNav.length; i++) {
  btnNav[i].addEventListener("click", function () {
    overlay.classList.toggle("active");
    navbar.classList.toggle("active");
  });
}
