let menuFab = document.getElementById("menu-fab");
let menuButtons = document.getElementById("menu-portrait");
console.log(menuFab);
menuFab.addEventListener("click", () => {
  menuButtons.classList.toggle("clicked");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    menuFab.style.opacity = 1;
  } else {
    menuFab.style.opacity = 0;
    menuButtons.classList.remove("clicked");
  }
});
