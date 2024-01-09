document.addEventListener("DOMContentLoaded", function() {
    const corrDer = document.getElementById("corrDer");
    const corrIzq = document.getElementById("corrIzq");
    const form = document.getElementById("form");
    const container = document.getElementById("container");
    var posicionCursor = corrDer.offsetLeft;
    var posicionLeftCorrDer = corrDer.offsetLeft;
    var posicionLeftCorrIzq = corrIzq.offsetLeft;

    // Mostrar la posición en la consola
    console.log('Posición Left: ' + posicionLeftCorrDer);

    var abrirTelon = setInterval(()=>{
        posicionLeftCorrDer += 1;
        corrDer.style.left = posicionLeftCorrDer + "px"; 
        posicionLeftCorrIzq -= 1;
        corrIzq.style.left = posicionLeftCorrIzq + "px"; 
    },4)

    var moverCursor;

    setTimeout(function() {
        clearInterval(abrirTelon); 
        corrDer.style.visibility = 'hidden';
        corrIzq.style.visibility = 'hidden';
        var cursor = new Image();
        container.appendChild(cursor);
        cursor.classList.add("cursor");
        cursor.src="img/cursor.png";
        cursor.style.left = posicionCursor + "px";
        posicionCursor = cursor.offsetTop;
        moverCursor = setInterval(()=>{
            posicionCursor += 0.9;
            cursor.style.top = posicionCursor + "px"; 
        },6)
    }, 3000);

    setTimeout(function() {
        form.src = "img/2cap.png";
    }, 3500);

    setTimeout(function() {
        form.src = "img/3cap.png";
    }, 4500);

    setTimeout(function() {
        clearInterval(moverCursor);
        form.src = "img/4cap.png";
    }, 5500);

});