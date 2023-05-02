 document.getElementById("nav__icon").addEventListener("click",showMenu);
 document.getElementById("back__nav").addEventListener("click",closeMenu);
 nav = document.getElementById("header__nav")
 backgroundMenu = document.getElementById("back__nav");
function showMenu(){
nav.style.right= "0px"
backgroundMenu.style.display = "block"


}
function closeMenu(){
  nav.style.right= "-300px";
  backgroundMenu.style.display= "none";

}