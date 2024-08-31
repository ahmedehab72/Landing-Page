const navbarToggle = document.querySelector(".toggle");
const navbarNav = document.querySelector(".divnav");
console.log(navbarNav,navbarToggle);

navbarToggle.addEventListener("click", () => {
  navbarNav.classList.toggle("show");
});