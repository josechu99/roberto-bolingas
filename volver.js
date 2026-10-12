/* Botón "Daddys Games" para volver a la portada desde el menú de cada juego.
   Cada juego lo carga con <script src="../volver.js"></script> al final del archivo,
   así se puede sustituir el juego por una versión nueva sin tocar el botón. */
(function () {
  var HOME = '../';
  function add() {
    // Roberto: botón al final de la lista del menú principal
    var music = document.getElementById('b-music');
    if (music && !document.getElementById('dg-home')) {
      var a = document.createElement('a');
      a.id = 'dg-home';
      a.href = HOME;
      a.className = 'btn ghost';
      a.textContent = 'Daddys Games';
      a.style.cssText = 'text-align:center;text-decoration:none;display:block';
      music.parentNode.appendChild(a);
    }
    // Pedorreta: enlace debajo de la fila de iconos del menú (otro icono partiría la fila en el móvil)
    var icons = document.querySelector('nav.icons');
    if (icons && !document.getElementById('dg-home-p')) {
      var b = document.createElement('a');
      b.id = 'dg-home-p';
      b.href = HOME;
      b.className = 'linkbtn';
      b.textContent = '🕹️ Volver a Daddys Games';
      b.style.cssText = 'color:#fffaf0;font:800 13px Nunito,system-ui,sans-serif;text-decoration:underline;text-underline-offset:3px;padding:6px 10px';
      icons.parentNode.insertBefore(b, icons.nextSibling);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', add);
  else add();
})();
