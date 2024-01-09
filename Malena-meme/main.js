
const meme = document.getElementById('meme');

document.addEventListener('DOMContentLoaded', function () {
    
    // Obtener las imágenes de la hormiga feliz y triste
    const imagenHormigaFeliz = document.getElementById('hormigaFeliz');
  
    // Configurar la imagen inicial
    imagenHormigaFeliz.src = 'img/happy.jpg';

    //texto
    const texto1 = document.createElement('img');
    texto1.src = "img/texto1.png"
    texto1.style.position = "absolute";
    texto1.style.top = "70%";
    texto1.style.left = "50%";
    texto1.style.transform = "translate(-50%, -50%)";
    texto1.style.zIndex = 3;
    meme.appendChild(texto1);

    //transición
    setTimeout(function () {
        cambiarImagenConFade(imagenHormigaFeliz, 'img/sad.jpg');
    }, 2000);
});

function cambiarImagenConFade(imagen, nuevaSrc) {
    
    const imagenHormigaTriste = document.getElementById('hormigaTriste');
    imagenHormigaTriste.src = nuevaSrc;
    // Configurar la opacidad de la nueva imagen
    imagenHormigaTriste.style.opacity = 0;

    // Agregar la nueva imagen al mismo contenedor
    meme.appendChild(imagenHormigaTriste);

    // Configurar la transición de opacidad
    imagenHormigaTriste.style.transition = 'opacity 1s';
    
    // Cambiar la opacidad de la nueva imagen a 1 para activar el efecto de fade
    setTimeout(function () {
        imagenHormigaTriste.style.opacity = 1;
    }, 100);

    // Cambiar la opacidad de la imagen original a 0
    imagen.style.opacity = 0;

    // Eliminar la imagen original después de que la transición haya terminado
    setTimeout(function () {
        meme.removeChild(imagen);
    }, 1000);
}


