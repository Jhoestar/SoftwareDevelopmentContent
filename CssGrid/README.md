# CssGrid


Nos permite controlar los elementos de manera bidimensional

    display: grid 

    grid-tenplate-columns: 100px 100px 100px;    -> le damos el tama;o de cada columna, y a;adimos segun la cantidad de columnas que queramos, en este caso 3 columnas de 100 pixeles, en tal caso se acomodan de izq a der y de arriba a abajo 

    grid-template-columns: auto 20px 100px 100px;   -> en este caso auto toma todo el espacio disponible, luego se le da un tama;o de 20 y las demas columnas de 100


    grid-template-columns: auto auto 100px 100px;    -> en caso de tener varios auto, el tama;o varia segun el contenido que se tenga, mientras mas mayor es el tama;o


Grid nos permite indicar el tama;o de las columnas de manera proporcional

    grid-template-columns: 1fr 1fr 2fr;      -> divide el espacio en las fracciones existentes


A la vez podemos romper el contenedor si ponemos tama;os fijos

    grid-template-columns: 500px 1fr 200px;

Tambien podemos controlar las filas

    
    grid-template-rows: 100px 50px 30px 100px;    -> las filas toman los tama;os que se le indican, si no existe una fila de elementos debemos tener en cuenta que puede crear espacios vacios

Podemos indicar cual es el tama;o que deben tener las filas que automaticamente se generan

    grid-auto-rows: 100px   -> cuando se genere una nueva fila o las filas que no tengan tama;o asignado tomaran el tama;o que se le haya asignado



    grid-auto-flow: row;       -> cuando algo no cabe se generan en filas  
    grid-auto-flow: row;       -> cuando algo no cabe se generan en columnas  

    
Tambien es posible usar el repeat() en vez de anotar varias veces lo mismo (tanto en grid-template-rows y grid-template-columns)

    grid-template-rows: repeat(3,1fr)
    grid-template-columns: repeat(3,100px)
    
    grid-template-columns: 25px repeat(3,1fr) 25px
    
    grid-template-columns: repeat(3, 25px 100px)

Podemos definir un tama;o maximo y un tama;o mimimo para las filas y las columnas

    
    grid-template-columns: minmax(100px,1fr) 1fr 1fr;    -> cuando el espacio disponible sea mayor a 100px sera como una parte mas de las columnas, si no se quedara con los 100 px y el espacio sera restado de aquellos elementos que no tengan esta coniguracion

    PUEDE USARSE CUANDO QUEREMOS QUE EL TAMA;O DE UNA SIDEVAR PUEDA REDUCIR SU TAMA;O PERO SIN EMBARGO SE LIMITE PARA NO BORRAR EL CONTENIDO QUE TENEMOS EN ESA SIDEVAR

    TAMBIEN ES USADO EN EL CASO DE MEDIAQUERYS, 

    @media (width > 100px){
        ## codigo 
    }
Tambien podemos asignar un espacio entre cada elemento:

    grid-column-gap: 16px;     -> espacio entre columnas
    row-gap: 32px;             -> espacio entre filas

    gap: 32px 16px             -> espacio entre filas y entre columnas
    gap: 16px                  -> mismo espacio entre filas y columns

Valores que ayudan a saber cuantas columnas se manejaran en el espacio disponible

    auto-fill                  -> ubicar el numero de columnas segun el tama;o impuesto a cada columna

Es posible usar el auto-fill dentro de repeat de la sgte manera:

    grid-template-columns: repeat(
        auto-fill,          
        minmax(200px, 1fr)
    );

    la cantidad de elementos sera definida por el valor minimo en este caso 200, otro elemento
    sera acomodado en una nueva columna si es que el espacio lo permite, 2 col -> 400px, 
    3 col -> 600px


para limitar el tama;o de un elemento y centrarlo:

    display: grid;
    grid-template-columns: repeat(
        auto-fill,          
        minmax(200px, 1fr)
    );
    gap: 16px;
    max-width: 500px;       -> tama;o maximo
    margin: 0 auto;         -> centrado

AUTO FIT: si no hay mas elementos ocupare todo el espacio segun los elementos que tenga (se estira asta ajustarse)

    grid-template-columns: repeat(
        auto-fit,          
        minmax(200px, 1fr)
    );

     En cambio autofill rellena los espacios vacios

Es mejor usar GAP en el contenedor

    para separar los elementos y adicionalmente si se requiere un espacio entre la caja contenedora se puede usar el padding

    gap: 4px;
    padding: 4px


Tambien podemos darle posicion a los elementos 

    grid-column-start:1;
    grid-column-end:3;
    grid-row-start:1;
    grid-row-end:3;
    
Tambien es posible darle directamente cuantas posiciones ocupara

    grid-column-start: span 2;
    grid-row-start: span 2;

De otra forma podemos usar la forma mas corta, con el /

    posicion inicial/posicion final
    
    grid-column: 2/4;
    grid-row: 2/3;

    de esta forma tambien podemos cambiar de lugar un elemento, puede ser usado en mediaquerys para manejar otro tipo de tama;os de pantalla en dispositivos

Tambien podemos utilizar numeros negativos
    

    grid-column: 1/-1     -> va desde el inicio hasta el final (de punta a punta)
    grid-row: 1/-4;      ->  igualmente se toma el espacio hasta el final de todo

    
Es posible superponer elementos dando las mismas posiciones a 2 o mas elementos

    en estos casos podemos usar el Z-index para manejarlo de una u otra forma

        z-index:999;

    esto igualmente puede ser usado para que cuando se haga hover en el elemento mediante una animacion se muestre el otro elemento que esta debajo

Tambien podemos dar nombre a cada uno de los elementos

            
        grid-area: nombre;


Para luego manejarlos dentro del contenedor de la siguiente forma


        .container{
            display: grid;
            grid-template-columns: repeat(3,1fr);
            grid-template-rows: 35px 1fr 100px;
            min-height: 100vh;
            grid-template-areas: 
                "header header header"            -> donde se maneja todo sin dar posiciones sino
                "sidebar content content"            que se escribe el nombre segun la 
                "footer footer footer";              cantidad de espacio que ocupara
        }


        tambien podemos simplemente colocar un punto para dejar un hueco

                "header header header"            
                "sidebar content ."       
                "footer . footer";


# Alinear elementos

podemos hacer uso del justify-items que nos ayuda a cambiar el valor de como se tiene que alinear un elemento en linea dentro de la cuadricula (lo podemos hacer tanto en el contenedor como en los hijos)

    justify-items: normal;    -> por defecto
    justify-items: stretch;   -> estirar funciona muy similar al normal
    justify-items: center;    -> centra cada elemento de la columna
    justify-items: start;     -> lo deja todo al inicio de cada cuadricula de grid
    justify-items: end;       -> al final

    para cada hijo usar:

    justify-self

Tambien podemos hacer la alineacion en bloque

    align-items: start;     -> mueve todo hacia arriba de la cuadricula
    align-items: end;       -> alinea todo abajo
    align-items: center;    -> alinea todo al centro

    para cada hijo usar:

    align-self

tambien podemos hacer uso de justify-content para cambiar la posicion de la cuadricula entera

        justify-content: center;
        justify-content: end;
        justify-content: space-around;  -> distribuye espacios iguales a cada lado de los elementos
        justify-content: space-between;

tambien para manejar la cuadricula de manera vertical

        align-content: center;
        align-content: end;
        align-content: space-around;
        align-content: space-between;


# entonces al usar items es para cada elemento y al usar content es para toda la cuadricula

ejm final

    para dar el espacio que quieras puedes hacer simplemente un 

    justify-content: center;
    align-content: center;
    gap: 4px;     -> y manejamos el espaciado con los pixeles segun el espaciado que queramos
    
