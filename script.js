let menuFab = document.getElementById("menu-fab");
console.log(menuFab);
menuFab.addEventListener("click", () => {
  let menuButtons = document.getElementById("menu-portrait");
  menuButtons.classList.toggle("clicked");
});


let windowInnerHeight = window.innerHeight;
let windowOuterHeight = window.outerHeight;
console.log(`inner: ${innerHeight}`);
console.log(`outer: ${outerHeight}`);

menuFab.style.bottom = '';
menuFab.style.top = `${windowInnerHeight}px`;