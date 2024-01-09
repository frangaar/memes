let handIcon = document.createElement('img');

// Asignar las clases y atributos necesarios
handIcon.className = 'hand-icon';
handIcon.src = 'assets/hand.png';
handIcon.alt = 'Hand';

let personajeDiv = document.querySelector('.personaje');
personajeDiv.appendChild(handIcon);


let pulsadores = document.querySelectorAll('.pulsador-icon');

let topPosition = 0;
let horizontalPosition = 0;

let stopHeight = pulsadores[0].getBoundingClientRect().bottom - pulsadores[0].clientHeight;
let stopRight = 100;
let stopLeft = -100;
let rightMovement = true;

let moveDirection = 1;

function moveElement() {
    if (topPosition > stopHeight) {
        if (horizontalPosition < stopRight && rightMovement) {
            horizontalPosition += moveDirection;
            handIcon.style.transform = 'scaleX(-1)';
            handIcon.style.left = horizontalPosition + 'px';
            if (horizontalPosition == 100) {
                rightMovement = false;
            }
        } else if (horizontalPosition > stopLeft && !rightMovement) {
            horizontalPosition -= moveDirection;
            handIcon.style.transform = 'scaleX(1)';
            handIcon.style.left = horizontalPosition + 'px';
            if (horizontalPosition == -100) {
                rightMovement = true;
            }
        }
    } else {
        topPosition += 1;
        handIcon.style.bottom = topPosition + 'px';
    }
}

setInterval(moveElement, 1);