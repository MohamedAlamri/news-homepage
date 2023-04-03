let menuIcon = document.querySelector(".menu-icon");
let navItems = document.querySelector(".nav-items");

menuIcon.addEventListener("click", () => {
  navItems.classList.toggle("active");
  if (navItems.classList.contains("active")) {
    menuIcon.src = "images/icon-menu-close.svg";
  } else {
    menuIcon.src = "images/icon-menu.svg";
  }
});
