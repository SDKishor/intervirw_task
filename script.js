const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navLinks = document.querySelectorAll(".navbar-links ul li a");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });
});
