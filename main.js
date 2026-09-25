const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const icon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});