function moverImagen() {
    const container = document.getElementById('container');

    
    const imagenFondo = document.createElement('img');
    imagenFondo.src = 'hierba.png';
    imagenFondo.alt = 'Imagen de fondo';
    imagenFondo.className = 'imagen-fondo';
    container.appendChild(imagenFondo);

    
    const imagenSuperpuesta1 = document.createElement('img');
    imagenSuperpuesta1.src = 'homersolo.png';
    imagenSuperpuesta1.alt = 'Imagen superpuesta 1';
    imagenSuperpuesta1.className = 'imagen-superpuesta';
    container.appendChild(imagenSuperpuesta1);

    
    const imagenSuperpuesta2 = document.createElement('img');
    imagenSuperpuesta2.src = 'hierba2.png';
    imagenSuperpuesta2.alt = 'Imagen superpuesta 2';
    imagenSuperpuesta2.className = 'imagen-superpuesta2';
    container.appendChild(imagenSuperpuesta2);

    let posicion = 0;
    const intervalo = setInterval(() => {
        posicion += 10;

        imagenSuperpuesta1.style.left = `${posicion}px`;

        if (posicion >= 300) {
            imagenSuperpuesta1.style.display = 'none';
            posicion = 0;
            imagenSuperpuesta1.style.left = `${posicion}px`;
            imagenSuperpuesta1.style.display = 'block';
        }
    }, 100);

   
}


moverImagen();
setInterval(moverImagen, 3000);