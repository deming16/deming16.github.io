var navItems = document.getElementsByClassName('navigation__item');

Array.from(navItems).forEach((item) => {
  item.addEventListener("click", toggleNavi);
});

function toggleNavi(e) {
  document.getElementById("navi-toggle").checked = false;
}