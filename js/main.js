let menuBtn = document.querySelector(".menu-btn");
let menuBar = document.querySelector(".menu-bar");
let nav = document.querySelector("nav");
let ul = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menuBar.classList.toggle("active");
  nav.classList.toggle("active");
  ul.classList.toggle("active");
  console.log("hello");
});
