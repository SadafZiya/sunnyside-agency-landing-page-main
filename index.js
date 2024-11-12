let desktopMenu = document.getElementById("desktop-menu");
let mobileMenu = document.getElementById("mobile-menu"); 

function openMenu() {
  let hamMenu = document.getElementById("ham-menu"); 
  if (hamMenu.style.display == "" || hamMenu.style.display == null || hamMenu.style.display == "none")
    hamMenu.style.display = "block";
  else hamMenu.style.display = "none";
}
function selectMenu(event) {
  removeActiveMenu();
  id = event.target.id.split("-")[1];
  document.getElementById(`mobile-${id}`).classList.add("active-menu");
  document.getElementById(`desktop-${id}`).classList.add("active-menu");
}
function gotToHomePage(event) {
  removeActiveMenu();
  history.replaceState(null, "", window.location.pathname);
}

function removeActiveMenu() {
  const menuItems = document.querySelectorAll("#menu-desktop a");
  menuItems.forEach((item) => item.classList.remove("active-menu"));

  const menuMobItems = document.querySelectorAll("#menu-mobile a");
  menuMobItems.forEach((item) => item.classList.remove("active-menu"));

  document.getElementById("ham-menu").style.display = "none";
} 
