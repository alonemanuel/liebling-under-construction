let menuFab = document.getElementById("menu-fab");
console.log(menuFab);
menuFab.addEventListener("click", () => {
  let menuButtons = document.getElementById("menu-portrait");
  menuButtons.classList.toggle("clicked");
});
