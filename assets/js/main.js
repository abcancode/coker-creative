document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.querySelector(".nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});
