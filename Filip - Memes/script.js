function start() {
    console.log("Iniciando función start");

    // Ocultar la imagen completa
    document.getElementById('imagen-gif').style.display = 'none';

    // Mostrar las partes izquierda y derecha
    let parteIzquierda = document.getElementById('parte-izquierda');
    let parteDerecha = document.getElementById('parte-derecha');
    parteIzquierda.style.display = 'block';
    parteDerecha.style.display = 'block';

    document.getElementById('audio-pollo').play();
    document.querySelector('button').style.display="none";
    // Animar las partes izquierda y derecha
    let posicion = 0;
    let intervalo = setInterval(function() {
        if (posicion === 10) { 
            clearInterval(intervalo);
            document.getElementById('imagen-pollo').style.display = 'block';
        } else {
            posicion++;
            parteIzquierda.style.left = (-posicion) + 'px'; 
            parteDerecha.style.right = (-posicion) + 'px'; 
        }
    }, 100);
}
