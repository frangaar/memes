/** 1. Archivos de audio.*/
var audioWeLive = document.getElementById('weLive')
var fileWeLive = audioWeLive.getAttribute('src');
var audio = new Audio(fileWeLive);  

/** 2. Crear y inicializar las variables del DOM.*/
let container = document.getElementById('container')
let title = document.createElement('h1')
title.classList.add('title')
title.textContent = 'WE LIVE... WE LOVE... WE LIE...'
title.style.display = 'none'
container.appendChild(title)
// 2.1 Smurfcat.
let smurfcat = document.createElement('img')
smurfcat.classList.add('smurfCat')
smurfcat.src = '../img/smurfcat.png'
smurfcat.style.display = 'none'
container.appendChild(smurfcat)
// 2.2 Forest.
let img = 'url(../img/forest.jpg)'
container.style.backgroundImage = img
// 2.3 Botones.
let button = document.createElement('span')
button.classList.add('buttons')
button.style.backgroundImage = 'url(../img/button.png)'
container.appendChild(button)

/** 3. Añadir los eventos.*/
button.addEventListener('click', function() {
    container.style.animation = 'zoom 2s linear'
    button.style.display = 'none'
    container.addEventListener('animationend', function () {
        container.style.transform = 'scale(2.2)'
        container.style.left = '-200px'
        container.style.width = '188%'
        container.style.height = '303%'
        smurfcat.style.display = ''
        title.style.display = ''
        title.style.animation = 'textAppear 2s linear'
        audio.play()
        smurfcat.style.animation = 'gatoMoviendose 2s linear'
        title.addEventListener('animationend', function() {
            title.style.opacity = 1
        })
    } )
})