var list = document.querySelector(".navigation-list");
var menu_icon = document.querySelector(".hamburger-menu-icon");
var close_icon = document.querySelector(".hamburger-close-icon");
var menu_container = document.querySelector(".one");
var close_container = document.querySelector(".two");

menu_icon.addEventListener("click", (a) => {
  list.classList.toggle("nav-open");
  menu_container.classList.toggle("close");
  close_container.classList.toggle("open");
});

close_icon.addEventListener("click", (a) => {
  list.classList.toggle("nav-open");
  menu_container.classList.toggle("close");
  close_container.classList.toggle("open");
});
