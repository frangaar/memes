let mouse = document.getElementById("mouse");
let mouth = document.getElementById("mouth");
setInterval(function() {
moveMouse();

}, 80);

function moveMouse (){
    if(mouse.offsetLeft < 1228){
mouse.style.left = mouse.offsetLeft + 0.5+"px";
}

if(mouse.offsetTop < 620) {mouse.style.top = mouse.offsetTop + 0.5+ "px";}

if(mouse.offsetLeft == 1224)
{
    mouse.src = "img/mouseClicked.png";
    smile();
}

}

function smile (){
mouth.id = "smile";
}