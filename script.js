const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".navlinks");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navItems.classList.toggle("active");
})