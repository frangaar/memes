document.addEventListener("DOMContentLoaded", function () {
    let firstImage = document.getElementById("image");
    let memeText = document.getElementById("text");
    let secondImage = document.createElement("img");
    let div = document.getElementById("image-container");

    function cambiarMeme() {
        firstImage.style.display = "none";
        secondImage.src = "gandhi.png";
        secondImage.style.position = "absolute";
        secondImage.style.left = "-100%";
        secondImage.style.top = "50%";
        secondImage.style.transform = "translate(0, -50%) rotate(0deg)";
        div.appendChild(secondImage);
        memeText.innerText = "Cuando te llega";

        let leftPosition = -100;
        let finalPosition = 50;
        let rotationAngle = 0;
        let finalRotation = 360;

        let animationInterval = setInterval(function () {
            leftPosition += 2;
            rotationAngle += 9.6;

            if (leftPosition >= finalPosition) {
                leftPosition = finalPosition; 
                clearInterval(animationInterval);
            }

            secondImage.style.left = leftPosition + "%";
            secondImage.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;
        }, 20);
    }

    setTimeout(cambiarMeme, 3000);
});