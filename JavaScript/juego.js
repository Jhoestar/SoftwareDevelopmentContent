

let numeroAzar = Math.floor(Math.random() * 100)+1;
let numeroEntrada = document.getElementById('number');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let intentos = 0;
let size = 10;


const comprobar = () => {
    intentos ++;
    size += 10;
    intento.textContent = intentos; 
    intento.style.fontSize = `${String(size)}px`;
    let numeroIngresado = parseInt(numeroEntrada.value);
    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Ingrese un número válido entre 1 y 100';
        mensaje.style.color = 'black';
        return;
    }else{
        if (numeroAzar>numeroIngresado){
            mensaje.textContent = 'El número es mayor';
            mensaje.style.color = 'red';
        }else if(numeroAzar<numeroIngresado){
            mensaje.textContent = "El numero es menor";
            mensaje.style.color = 'red';
        }else if(numeroAzar === numeroIngresado){
            mensaje.textContent = '¡Felicitaciones! Le pegaste';
            mensaje.style.color = 'green';
            numeroEntrada.disabled = true;
        }
    }
};