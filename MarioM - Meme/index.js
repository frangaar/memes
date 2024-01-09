let meme = document.querySelector('.img');
let img = document.createElement('img');
img.src = 'img/persona.png';
let originalOpacity = 1;
img.style.height = '400px';

meme.appendChild(img);


setTimeout(() => {
    makeAnimation();
}, 2000);


    
function makeAnimation() {
    img.style.opacity = '0';
    img.style.top = '50px'; 
    img.style.left = '50px'; 

    setTimeout(function () {
        img.src = 'img/esqueleto.png';
        img.style.opacity = originalOpacity;
        img.style.top = '0';
        img.style.left = '0';
    }, 1000);

}