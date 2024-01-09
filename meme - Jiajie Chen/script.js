document.addEventListener("DOMContentLoaded", crearGIF);
const contenedor = document.getElementById("gif1");
const contenedorCodigo = document.getElementById("imagen");
let right = 300;
let hola = -10;
let num = 0;
const interval = setInterval(moverGIF, 100);
let parar = false;

function crearGIF() {
  const gif = document.createElement("img");
  gif.src = "img/hasbulla.gif";
  gif.style.width = "300px";
  gif.style.height = "350px";

  contenedor.appendChild(gif);
  contenedor.style.top = hola + "px";
  contenedor.style.right = right + "px";
}

function moverGIF() {
  right += 30;
  hola += 20;

  contenedor.style.top = hola + "px";
  contenedor.style.right = right + "px";
  num++;
  console.log(num);
  if (num >= 28) {
    clearInterval(interval);
    cambiarImagen();
    imagenCodigo();
    setTimeout(imagenAmigo, 2000);
    setTimeout(imagenProfe,4000);
  }
  
}

function cambiarImagen () {
    const gif = contenedor.querySelector("img");
    gif.src = "/img/hasbulla.png";
    gif.style.width = '300px';
    gif.style.height = '350px';
}

function imagenCodigo () {
    const imagen = document.createElement("img");
    imagen.src = "img/Captura.PNG";

    contenedorCodigo.appendChild(imagen);
}

function imagenAmigo () {
    const imagen = contenedor.querySelector("img");
    imagen.src = "img/reaccion.png";

    contenedor.appendChild(imagen);
}

function imagenProfe () {
    const imagen = contenedor.querySelector("img");
    imagen.src = "img/profesor.png";

    contenedor.appendChild(imagen);
}