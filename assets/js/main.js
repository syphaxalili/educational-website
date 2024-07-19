// Change the navbar background color on scroll
window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("window-scroll", scrollY > 70);
});

// Show/Hide FAQ Answer

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    //   Toggle the icon (+/-)
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

// Show/Hide the nav menu on Tablet
const navMenu = document.querySelector(".nav__menu");
const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

openMenuBtn.addEventListener("click", () => {
  navMenu.style.display = "flex";
  closeMenuBtn.style.display = "inline-block";
  openMenuBtn.style.display = "none";
});

// Close nav menu function
function closeNavMenu() {
  navMenu.style.display = "none";
  closeMenuBtn.style.display = "none";
  openMenuBtn.style.display = "inline-block";
}

closeMenuBtn.addEventListener("click", closeNavMenu);
