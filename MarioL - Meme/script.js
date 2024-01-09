document.addEventListener("DOMContentLoaded", function () {
    let gato = document.getElementById("gato");
    const musica = document.getElementById("musica");

    let play = document.getElementById("play");
    play.addEventListener("click", function () {
        musica.play();
        let leftInicial = -15;
        let leftValue = leftInicial;
        let fin = false;




        musica.addEventListener("ended", function () {
            fin = true;
        });

        function moverGato() {
            leftValue += 0.0455;
            gato.style.left = leftValue + "%";

            if (leftValue >= 40) {
                clearInterval(intervalId);
                gatoGrande();
            }
        }

        let intervalId = setInterval(moverGato, 10);

        function gatoGrande() {
            let escala = 1.0;

            function escalar() {
                escala += 0.01;
                gato.style.transform = "scale(" + escala + ")";

                if (escala >= 2.0) {
                    clearInterval(intervalEscalado);
                    gatoCantor();
                }
            }

            let intervalEscalado = setInterval(escalar, 10);
        }

        function gatoCantor() {
            const imagenes = ["gato1.png", "gato2.png"];
            let indice = 0;

            let intervalCantor = setInterval(function () {
                gato.src = imagenes[indice];
                gato.alt = "Imagen " + (indice + 1);

                // Alternar entre las imágenes
                indice = (indice + 1) % imagenes.length;

                if (fin) {
                    clearInterval(intervalCantor);
                    gato.src = "gato2.png";
                }
            }, 120);
        }
    })
});
