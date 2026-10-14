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
    // Orcasitas: botón junto a "Nueva campaña", en el mapa general (no durante las misiones)
    var cnew = document.getElementById('cnew');
    if (cnew && !document.getElementById('dg-home-o')) {
      var c = document.createElement('a');
      c.id = 'dg-home-o';
      c.href = HOME;
      c.className = 'alt mini';
      c.textContent = '🕹️ Daddys Games';
      c.style.cssText = 'font-family:var(--display);font-size:12px;letter-spacing:.03em;padding:6px 9px;border:1px solid var(--muted);border-radius:4px;color:var(--text);text-decoration:none';
      cnew.parentNode.appendChild(c);
    }
    // Orcasitas: también en la pantalla de inicio, debajo del menú
    var hmenu = document.querySelector('#home .hmenu');
    if (hmenu && !document.getElementById('dg-home-oh')) {
      var d = document.createElement('a');
      d.id = 'dg-home-oh';
      d.href = HOME;
      d.textContent = '🕹️ Volver a Daddys Games';
      d.style.cssText = 'justify-self:' + (matchMedia('(max-width:760px)').matches ? 'center' : 'start') + ';margin-bottom:14px;font-family:var(--body);font-weight:700;font-size:15px;color:var(--muted);text-decoration:underline;text-underline-offset:3px;padding:4px 2px';
      hmenu.appendChild(d);
    }
    // ITV: icono junto al botón de sonido, arriba, y enlace en la pestaña Informe
    var mute = document.getElementById('mute');
    if (mute && document.getElementById('tapBtn') && !document.getElementById('dg-home-i')) {
      var e = document.createElement('a');
      e.id = 'dg-home-i';
      e.href = HOME;
      e.className = 'icon-btn';
      e.textContent = '🕹️';
      e.title = 'Volver a Daddys Games';
      e.setAttribute('aria-label', 'Volver a Daddys Games');
      e.style.cssText = 'text-decoration:none;font-size:18px';
      // en el móvil la fila de arriba va justa: icono algo más pequeño y el dinero en una sola línea
      if (matchMedia('(max-width:420px)').matches) e.style.cssText += ';width:34px;height:34px;font-size:16px;flex:none';
      var money = document.getElementById('money');
      if (money) money.style.whiteSpace = 'nowrap';
      mute.parentNode.insertBefore(e, mute);
    }
    var rbox = document.getElementById('resetBox');
    if (rbox && !document.getElementById('dg-home-ir')) {
      var f = document.createElement('a');
      f.id = 'dg-home-ir';
      f.href = HOME;
      f.textContent = '🕹️ Volver a Daddys Games';
      f.style.cssText = 'border:1px solid var(--junta);border-radius:8px;padding:6px 12px;font-family:var(--f-cond);font-weight:700;color:var(--tiza);text-decoration:none';
      rbox.appendChild(f);
    }
  }
  function start() {
    add();
    // Algunos menús se vuelven a dibujar (p. ej. al volver al inicio): reponer el botón si desaparece
    var t = null;
    new MutationObserver(function () { if (!t) t = setTimeout(function () { t = null; add(); }, 50); })
      .observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
