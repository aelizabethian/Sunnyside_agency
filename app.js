"use strict";
console.log("i'm connected");

document.querySelector(".btn-mobile-nav").addEventListener("click", () => {
  console.log("clicked");
  const mobileNav = document
    .querySelector(".open-nav")
    .classList.toggle("hide");
});
