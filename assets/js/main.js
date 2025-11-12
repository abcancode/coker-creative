// /assets/js/main.js
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});
