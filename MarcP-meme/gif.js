var imagePaths = ['./img/mario1.jpg', './img/mario2.jpg', './img/mario3.jpg'];

//Variable global para rastrejar l'índex actual.
var currentIndex = 0;

//Funció per crear l'etiqueta d'image i agregar-la al contenidor.
function createImageElement() {
    var imageContainer = document.getElementById('gifContainer');
    var imgElement = document.createElement('img');
    imgElement.src = imagePaths[currentIndex];

    imgElement.style.width = '40%';
    imgElement.style.height = 'auto';

    imageContainer.innerHTML = ''; //Netejar el contenidor abans d'agregar una nova imatge.
    imageContainer.appendChild(imgElement);
    currentIndex = (currentIndex + 1) % imagePaths.length; //Cíclo en les imatges.
}

//Funció per iniciar l'animació.
function startGIFAnimation() {
    createImageElement();
    setTimeout(startGIFAnimation, 1000); //Canviar l'imatge cada 1000 milisegons (1 segon).
}

//Afegir esdeveniment al cargar la pègina per iniciar l'animació.
window.addEventListener('load', startGIFAnimation);
