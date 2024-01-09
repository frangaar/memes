const alex = document.getElementById('imgalex');
const ivan = document.getElementById('imgivan');
const arnau = document.getElementById('imgarnau');
const alexis = document.getElementById('imgalexis');
const boton = document.getElementById('boton');
boton.addEventListener('click', empezar);

function empezar() {
    boton.style.display = 'none';
    const imagenAlex = document.createElement('img');
    imagenAlex.src = './assets/alexicon.png';

    const imagenAlexis = document.createElement('img');
    imagenAlexis.src = './assets/alexisicon.png';

    const imagenArnau = document.createElement('img');
    imagenArnau.src = './assets/arnauicon.png';

    const imagenIvan = document.createElement('img');
    imagenIvan.src = './assets/ivanicon.png';

    alex.appendChild(imagenAlex);
    ivan.appendChild(imagenIvan);
    arnau.appendChild(imagenArnau);
    alexis.appendChild(imagenAlexis);

    const intervalId = setInterval(() => {
        const moveSpeed = 1;

        // Obtener los valores actuales y convertirlos a números
        let currentLeftAlex = parseInt(alex.style.left || 0);
        let currentTopIvan = parseInt(ivan.style.top || 0);
        let currentBottomArnau = parseInt(arnau.style.bottom || 0);
        let currentRightAlexis = parseInt(alexis.style.right || 0);

        // Incrementar los valores en 1px
        currentLeftAlex += moveSpeed;
        currentTopIvan += moveSpeed;
        currentBottomArnau += moveSpeed;
        currentRightAlexis += moveSpeed;

        // Asignar los nuevos valores al estilo
        alex.style.left = `${currentLeftAlex}px`;
        ivan.style.top = `${currentTopIvan}px`;
        arnau.style.bottom = `${currentBottomArnau}px`;
        alexis.style.right = `${currentRightAlexis}px`;

        // Verificar si las imágenes se han salido de la pantalla y ocultarlas
        if (
            currentLeftAlex > window.innerWidth &
            currentTopIvan > window.innerHeight &
            currentBottomArnau > window.innerHeight &
            currentRightAlexis > window.innerWidth
        ) {
            clearInterval(intervalId); // Detener el intervalo
            alex.style.display = 'none';
            ivan.style.display = 'none';
            arnau.style.display = 'none';
            alexis.style.display = 'none';
        }
    }, 5); // Ejecutar cada 5 ms (incremento más rápido para una mejor detección de bordes)
}