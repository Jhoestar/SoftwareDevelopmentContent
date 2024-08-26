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



##### Tambien podemos hacer uso de otro tipo de metodo en JS

    document.querySelectorAll('a')

    -> seleccionamos todos los elementos del DOM que sean de tipo a


    enlace.addEventListener('click',()=>{

    })

    -> de esta forma podemos hacer que al enlace(en el ejemplo un elemento de tipo a), se el a;ada un evento, primeramente se le pasa el tipo en este caso click, como segundo paramentro se le pasa la funcion que realizara


    enlace.classList.remove('active')

    -> de esta forma podemos remover la caracteristica que se implemento con el active, en el ejemplo se usa mara cambiar de pantallas en el menu del sistema

    this.classList.add('active')

    -> de esta forma le damos la caracteristica active siempre y cuando se tenga el elemento active en el css

    let contenido = obtenerContenido(this.textContent)



# REGEX

    Tambien podemos hacer el uso de search en js

        let texto = "Hola, como estas";
        let indice = texto.search(/como/);

        console.log(indiece); //imprime el 7 que es el indice en el que se encuentra como

    podemos usar modificadores en este metodo:

        (/como/i) -> ignora mayusculas y minusculas
        (/como/g) -> buscar en todo el texto pasado
        (/como/m) -> busqueda multilinea 
        (/como/s) -> permite usar . al buscar


    Utilizando test para verificar si existe un elemento

        let texto = "utilizando el metodo test"
        let pattern = /metodo/i
        let resultado = pattern.test(texto);
        console.log(resultado)             -> devuelve true

    O usando un rango de numeros

        let texto = "utilizando el metodo test1"
        let pattern = /[0-9]/
        let resultado = pattern.test(texto);
        console.log(resultado)             -> devuelve true
    
    Se puede usar el exec

        let texto = "utilizando el metodo test"
        let pattern = /metodo/
        let resultado = pattern.exec(texto);
        console.log(resultado)             

            Devuelve un Array

            -> busca ignorando mayusculas y minusculas
            -> devuelve el index:33
            -> devuelve el input: "utilizando el metodo test"
            -> devuelve groups: undefined

    Ejemplo de uso:

        Para controlar la entrada de un correo se puede usar:

            let pattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

# El try-catch funciona en js solo si se trabaja con cuestiones sincronas de otra manera es posible usar las promesas para mantener una secuencialidad

    De la misma forma no es recomendable usar muchas promesas y controlarlas como una piramide sino que es mejor usar Async & Await que igualmente ayuda en el uso de las promesas



uso de APIs

    fetch('url.com')
        .then(response => response.json())
        .then(json => console.(json))


JSON forma de representar objetos, se utiliza para intercambiar informacion entre servidor y cliente

RESOURCES
    
    modo de uso:
    /nombre

        4 METODOS DE PEDIDO
            -GET obtener informacion
            -POST subir informacion
            -PUT editar informacion
            -PATCH editar una parte de la informacion
            -DELETE eliminar informacion

        STATUS CODES
            200 -> todo bien
            400 -> errores nuestros
            500 -> errores en la base de datos

ROUTES:

    /comments?portid = 1

        le pasamos el nombre y el comentario que es solo del posteo numero 1 


En js debemos tratar de hacer todo de manera dinamica por lo que hacer un fetch y pasarle la url directa es un tipo de hardcodeo que debemos de evitar

    let url = 'https://algo.com'
    let query = '/comments?postid=5'

    fetch(`${url}/${query}`)  -> otra forma de ver el fetch es como un get
    .then(response => response.json())
    .then(json => console.log(json))


    si en el query usamos el
    posts/1 -> trae un solo objeto 

El body es un tipo de objeto al cual se le puede mandar el formato JSON para que haga un post en la base de datos o en la api


EJEMPLO POST


    let url = 'https://algo.com'
    let query = '/comments?postid=5'
    let requestBody = {
        title: 'Ricardo comenta sobre tu foto',
        body: 'Que bella foto prima, se te extra;a!',
        userId: 1,
    }

    fetch(`${url}/posts`, {
        //creamos un objeto para darle el formato en el cual se mandara nuestro posteo
        method: 'POST'  //en este caso es POST puede ser cualquier tipo
                //cores medida de seguridad al enviar y trabajar con la BD
        headers: {
            'content-type': 'aplication/json'   //mandaremos un JSON
        }
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(json => console.log(json))


EJEMPLO PUT

    let posteo = 5: //modificamos el posteo 5

    let requestBody2 = {
        id: 3,          //modificamos el comentario 3
        title: 'Ricardo comenta sobre tu foto',
        body: 'Que bella foto prima, se te extra;a!',
        userId: 5,
    }

    fetch(`${url}/posts/${posteo}`, {
        method: 'POST'  
        headers: {
            'content-type': 'aplication/json'   //mandaremos un JSON
        }
        body: JSON.stringify(requestBody2)
    })
    .then(response => response.json())
    .then(json => console.log(json))

EJEMPLO PATCH

    let post = 10: //modificamos el posteo 10
    let modificacion = {
        title : 'Este titulo no ha sido modificado'
    }

    fetch(`${url}/posts/${posteo}`, {
        method: 'PATCH'  
        headers: {
            'content-type': 'aplication/json'; 'charset=UTF-8' //mandaremos un JSON
        }
        body: JSON.stringify(modificacion)
    })
    .then(response => response.json())
    .then(json => console.log(json))


EJEMPLO DELETE
    let elementoAEliminar= 7
    fetch(`${url}/posts/${elementoAEliminar}`, {
        method: 'DELETE'  
        headers: {
            'content-type': 'aplication/json'; 'charset=UTF-8' //mandaremos un JSON
        }
        body: JSON.stringify(modificacion)
    })