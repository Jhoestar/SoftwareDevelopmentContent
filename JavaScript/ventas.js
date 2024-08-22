
import { barcelona, paris, roma,londres } from './ciudades.js';


let enlaces = document.querySelectorAll('a');
let tituloDOM = document.getElementById("titulo");
let subtituloDOM = document.getElementById("subtitulo");
let parrafoDOM = document.getElementById('parrafo');
let precioDOM = document.getElementById('precio');

//agregando un evento click a cada enlace a

enlaces.forEach(function(enlace){
    enlace.addEventListener('click',function(){
        enlaces.forEach(function(enlace){
            //Remover la clase 'active' de todos los enlaces
            enlace.classList.remove('active');
        })
        //Le damos el active al enlace del que escuchamos el click
        this.classList.add('active');

        //obtenemos el contenido que coincida de ciudades.js
        let contenido = obtenerContenido(this.textContent);

        //mostrar el contenido en el DOM

        tituloDOM.innerHTML = contenido.titulo;
        subtituloDOM.innerHTML = contenido.subtitulo;
        parrafoDOM.innerHTML = contenido.parrafo;
        precioDOM.innerHTML = contenido.precio;
    })
});

function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma' : roma,
        'Paris' : paris,
        'Londres' : londres
    };
    return contenido[enlace];
}
