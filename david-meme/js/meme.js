// document.addEventListener('DOMContentLoaded', function() {
    const pelota = document.getElementById("pelota");
    const parado = document.getElementById("parado");
    const chute = document.getElementById("chute");
    var backgroundTheme = document.getElementById('backgroundTheme');
    var file = backgroundTheme.getAttribute('src');
    var audio = new Audio(file);   

    pelota.style.animation = 'example 0.5s linear'
    
    setTimeout(() => {
        // cambiar foto casillas
        parado.src = '../media/casillas-parada.png'
    }, 250);

    pelota.addEventListener('animationend', function() {
        pelota.style.left = '83px'
        setTimeout(() => {
            audio.play();
            // cambiar foto casillas
            chute.src = '../media/gol.png'
            chute.style.width = '370px'
            chute.style.height = '320px'
            setTimeout(() => {
                // cambiar foto casillas
                chute.src = '../media/belligoal.png'
                chute.style.width = '280px'
                chute.style.height = '450px'
                setTimeout(() => {
                    // cambiar foto casillas
                    chute.src = '../media/tamandua.png'
                    chute.style.top = '20px'
                    chute.style.left = '750px'
                    chute.style.width = '380px'
                    chute.style.height = '550px'
                }, 1000);
            }, 1000);
        }, 350);

    })

// })

