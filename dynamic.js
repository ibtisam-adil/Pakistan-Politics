const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  overlay.classList.toggle("hide");
  navLinks.classList.toggle("hidden");
});


