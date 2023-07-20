{
  /* <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>; */
}
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");
function opentab(tabname) {
  for (tlink of tablinks) {
    tlink.classList.remove("active-link");
  }
  for (ttab of tabcontents) {
    ttab.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
const links = document.querySelector(".ul-links");
// console.log(links);
function openmenu() {
  links.style.right = "0px";
}
function closemenu() {
  links.style.right = "-300px";
}
