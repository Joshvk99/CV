

function crearBarra(id_barra) {
  for (i = 0; i <= 16; i++) {
    let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
  }
}

let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let php = document.getElementById("php");
crearBarra(php);
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);

let contadores = [-1, -1, -1, -1, -1, -1];

let entro = false;

function efectoHabilidades() {
  var habilidades = document.getElementById("habilidades");
  var distancia_skills =
    window.innerHeight - habilidades.getBoundingClientRect().top;
  if (distancia_skills >= 300 && entro == false) {
    entro = true;
    const intervalHtml = setInterval(function () {
      pintarBarra(html, 8, 0, intervalHtml);
    }, 100);
    const intervalJavascript = setInterval(function () {
      pintarBarra(javascript, 2, 1, intervalJavascript);
    }, 100);
    const intervalWordpress = setInterval(function () {
      pintarBarra(wordpress, 10, 2, intervalWordpress);
    }, 100);
    const intervalPhotoshop = setInterval(function () {
      pintarBarra(photoshop, 5, 3, intervalPhotoshop);
    }, 100);
    const intervalPhp = setInterval(function () {
      pintarBarra(php, 10, 4, intervalPhp);
    }, 100);
    const intervalIlustrator = setInterval(function () {
      pintarBarra(ilustrator, 3, 5, intervalIlustrator);
    }, 100);
  }
}

function pintarBarra(id_barra, cantidad, indice, interval) {
  contadores[indice]++;
  x = contadores[indice];
  if (x < cantidad) {
    let elementos = id_barra.getElementsByClassName("e");
    elementos[x].style.backgroundColor = "#e6e6e6";
  } else {
    clearInterval(interval);
  }
}
window.onscroll = function () {
  efectoHabilidades();
};


window.addEventListener('scroll', function() {
    const offset = window.pageYOffset;
    document.querySelector('.scrolling-background').style.backgroundPositionY = offset * 0.7 + 'px';
  });
  