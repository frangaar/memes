

//Mou la imatge cap a baix
function moureImatge() {
    const memePython = document.getElementById("memePython");
    const currentTop = parseInt(memePython.style.top) || 0;
    memePython.style.top = (currentTop + 20) + "px";

    // Llama a la función nuevamente después de 5000 milisegundos (5 segundos)
    setTimeout(function () {
        moureImatge();

    }, 200);

    setTimeout(memeJosh, 5000);
}





function memeJosh() {




    // Crea un nuevo elemento de imagen
    const nuevaImagen = document.createElement("img");

    // Establece atributos para la nueva imagen
    nuevaImagen.src = "img/memeJosh.jpg"; // Reemplaza con la ruta de tu nueva imagen
    nuevaImagen.alt = "memeJosh"; // Reemplaza con el texto alternativo


    const nuevoAudio = document.createElement("audio");

    // Establece atributos para el nuevo audio
    nuevoAudio.src = "audio/silbidoMeme.mp3"; // Reemplaza con la ruta de tu archivo de audio

    nuevoAudio.autoplay = true; // Inicia la reproducción automáticamente

    // Marca el audio como reproducido
    audioReproducido = true;

    // Obtiene el contenedor de la imagen actual
    const containerImagen = document.querySelector(".container-imagen");

    // Reemplaza la imagen actual con la nueva imagen
    const memePython = document.getElementById("memePython");
    containerImagen.replaceChild(nuevaImagen, memePython);


    // Agrega el nuevo elemento de audio al contenedor
    containerImagen.appendChild(nuevoAudio);

}




