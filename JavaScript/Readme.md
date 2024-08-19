# Eventos
Es una accion o suceso que pasa en una pagina web, nos dayuda a darle interactividad a la pagina

document.getElementById("seleccionable").innerHTML = Date();

    document -> lee todo el documento entero

    getElementById -> selecciona el elemento que se le indique

    seleccionble -> es el id del elemento

    innerHTML  -> se le pasa lo que se escribira en el html

    Date()  -> devuelve la fecha

EN EL HTML

    <button onclick="mostrar()">Clickeame</button>

    onclick -> realiza la operacion del script con lo que se le indique en el onclick, la accion se realiza al hacer click en el boton


    - abort
    - afterprint
    - animationiteration
    - animationstart 
    - beforeprint
    - beforeunload
    - blur
    - canplay
    - canplaythrough
    - change
    - click     -> escucha cuando haces click
    - contextmenu
    - focus
    - copy      -> escucha cuando copias algo
    - drag      -> cuando arrastras y deslizas algo
    - drop      -> cuando dejas de arrastrar algo
    - focus     -> cuando haces click en un input
    - load      -> cuando se carga un objeto
    - mouseleave -> cuando entras o salis de un lugar
    - mouseenter
    - mousedown
    - mouseover  -> cuando el mouse este encima del elemento
    - mouseout   -> cuando deje de estar encima del elemento
    - keydown    -> estar en el boton(click) y presionar una tecla 
    - onload     -> escucha apenas cargue el navegador
    - onchange   -> escucha cuando el selector es cambiado
    - etc




    trim()  ->metodo elimina los espacios atras y delante del string
    charAt(posicion)  -> devuelve la letra
    split('.')     -> metodo que separa el string cada que encuentre un punto








Calculo interesante:

    let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    console.log(number.sort(x,y) => x-y)            -> nos ayuda a ordenar de menor a mayor ya que el sort normal no lo va a hacer en este caso

    y-x es para ordenar de mayor a menor



Para cambiar el contenido de un elemento en HTML se puede usar:

    document.getElementById('id').textContent = "Este texto sera pasado al elemento HTML"


De igual forma podemos acceder al estilo de un elemento

    document.getElementById('id').style.color - 'red';

Podemos igualmente hacer el manejo de otro tipo de atributos en el caso de un input de texto o solo numerico (number)

    document.getElementById('id').disabled = true;


El uso de Sets puede realizarse en caso de no querer repetidos

    let mapa = new Map([
        ['Computadoras', 10],
        ['Tablets', 10],
        ['Celulares', 15]
    ])

    mapa.set('Teclados',20)
    mapa.delete('Computadoras')
    let pregunta = mapa.has('Tablets')
    console.log(pregunta)

y de igual forma podemos convertir un set a un array

    let array = [1,1,1,2,3,3,4,5,4,7,75,4]
    let unico = new Set(array)
    let nuevoArray = [...unico]
    console.log(unico)



El typeof puede ser usado para verificar si lo que devuelve una bd es un valor que esperamos

    let valorDeLaBaseDeDatos = "Curso de JavaScript";
    if(valorDeLaBaseDeDatos === 'string'){
        console.log('lo que biene del backend es string')
    }else{
        console.log('reclamale a tu compa;ero que te mande un string')
    }



instanceOf puede ser utilizado para saber si es una instancia de un objeto

    let a = [1,2,3]
    let b = new Date()
    let c = new Set()
    let d = new Map()
    let i = null

    a instanceof Array

    instance of de null no es posible ya que no es un valor


# Conversion de tipo y 

    - parseInt
    - parseFloat
    - Number()
    - String()
    - toString()
    - parseInt
    - parseInt


    podemos convertir de dates -> number
                        dates -> string
                        number -> boolean



Es necesario colocar type = "module" en el HTML si es que se esta usando un modulo en el archivo js