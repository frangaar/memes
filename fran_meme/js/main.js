document.addEventListener('DOMContentLoaded',function(){
   
    let container = document.getElementsByClassName('container');
    
    // Crear botón
    let btnIniciar = document.createElement('button');
    btnIniciar.setAttribute('class','btn btn-primary');
    btnIniciar.setAttribute('id','iniciar');
    btnIniciar.innerHTML = 'Iniciar';

    // Crear chica
    let chica = document.createElement('img');
    chica.setAttribute('src','img/laiaDerechaCaminando.gif');
    chica.setAttribute('id','chica');

    // Crear imagen1
    let chicaMeme = document.createElement('img');
    chicaMeme.setAttribute('src','img/chica.jpg');
    chicaMeme.setAttribute('id','chicaMeme');

    // Crear imagen gato ordenador
    let gatoOrdenador = document.createElement('img');
    gatoOrdenador.setAttribute('src','img/gatoordenador.jpg');
    gatoOrdenador.setAttribute('id','gatoOrdenador');

    // Crear imagen gato1
    let gato = document.createElement('img');
    gato.setAttribute('src','img/gato.jpg');
    gato.setAttribute('id','gato');

    // Añadir botón a container
    container[0].appendChild(btnIniciar)

    btnIniciar.addEventListener('click',function(){

        chicaMeme.style.display = 'none';
        gato.style.display = 'none';

        // Añadir chica a container
        container[0].appendChild(chica);
        container[0].appendChild(gatoOrdenador);
        container[0].appendChild(gato);
        container[0].appendChild(chicaMeme);
       chica.setAttribute('src','img/laiaDerechaCaminando.png');
        chica.classList.add('moverChica');  
    })
    

    chica.addEventListener("animationend", () => {
        
        chica.setAttribute('src','img/laiaDerechaParada.png');
        chicaMeme.style.display = 'block';
        setTimeout(gatoRespuesta, 1200);
    });


    function gatoRespuesta() {
        gato.style.display = 'block';
    }

});
