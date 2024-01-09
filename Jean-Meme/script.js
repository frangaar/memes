document.addEventListener('DOMContentLoaded', function () {
  // Obtener elementos por ID
  let memeContainer = document.getElementById('memeContainer');
  let instuPaper = document.getElementById('instuPaper');

  // Crear elementos con createElement
  let clientPaper = document.createElement('img');
  clientPaper.src = './img/clientPapper.jpg';
  clientPaper.style.position = 'absolute';
  clientPaper.style.display = 'none';
  clientPaper.style.left = window.innerWidth + 'px'; // Inicia fuera de la pantalla

  // Agregar clientPaper al memeContainer
  memeContainer.appendChild(clientPaper);

  // Función para mostrar y animar la imagen clientPaper
  function showClientPaper() {
    clientPaper.style.display = 'block';
    let initialLeft = window.innerWidth;

    // Animar la entrada de clientPaper de derecha a izquierda
    let interval = setInterval(function() {
      initialLeft -= 4; // Ajusta la velocidad de movimiento
      clientPaper.style.left = initialLeft + 'px';

      if (initialLeft <= instuPaper.offsetWidth) {
        clearInterval(interval);
        // Reiniciar el ciclo después de 20 segundos
        setTimeout(function () {
          clientPaper.style.display = 'none';
          clientPaper.style.left = window.innerWidth + 'px';
          setTimeout(showClientPaper, 3000);
        }, 5000);
      }
    }, 10);
  }

  // Mostrar la imagen clientPaper después de 3000ms (3 segundos)
  setTimeout(showClientPaper, 3000);
});
