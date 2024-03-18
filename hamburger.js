
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-wrapper");
const html = document.querySelector("html");

hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    html.classList.toggle("active");
})

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetSection = link.getAttribute("href");
    if (targetSection) {
      const sectionElement = document.querySelector(targetSection);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }

    hamburger.classList.remove("active");
    menu.classList.remove("active");
    html.classList.remove("active");
  });
});