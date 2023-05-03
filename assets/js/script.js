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


  //  // Obtenemos todas las secciones y las ocultamos por defecto, excepto la de inicio.
  //  var secciones = document.getElementsByTagName("section");
  //  for (var i = 1; i < secciones.length; i++) {
  //    secciones[i].style.display = "none";
  //  }

  //  // Escuchamos el evento de clic en cada enlace de navegación.
  //  var enlaces = document.getElementsByTagName("a");
  //  for (var i = 0; i < enlaces.length; i++) {
  //    enlaces[i].addEventListener("click", function(evento) {
  //      evento.preventDefault(); // Evita que se recargue la página al hacer clic en un enlace.
  //      var objetivo = this.getAttribute("href"); // Obtenemos el valor del atributo href del enlace.
  //      var seccionObjetivo = document.querySelector(objetivo); // Buscamos la sección correspondiente.
  //      for (var j = 0; j < secciones.length; j++) {
  //        secciones[j].style.display = "none"; // Ocultamos todas las secciones.
  //      }
  //      seccionObjetivo.style.display = "block"; // Mostramos la sección correspondiente.
  //    });
  //  }