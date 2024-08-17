Manejo de bloques con flex

    display: inline-flex;
    display: flex; -> se comporta como bloque
    
    
    flex-direction: column-reverse; -> en columna
    flex-direction: column-reverse; 
    flex-direction: row; -> en fila
    flex-direction: row-reverse;


Ajustes con el espacio disponible en el eje principal

    justify-content: flex-start;
    justify-content: flex-end;
    justify-content: start;
    justify-content: end;
    justify-content: center; -> espacios solamente al inicio y al final
    justify-content: space-between; -> espacio solo entre los bloques
    justify-content: space-around; -> distribuye espacios iguales al final y al inicio de cada elemento 
    justify-content: space-evenly; -> distributye el espacio igualmente


cuando se tienen elementos que sobrepasan el 100% del navegador:

    flex-wrap: nowrap; -> por defecto, no realiza ninguna accion
    flex-wrap: wrap; -> si los elementos sobrepasan el 100% del navegador esos elementos se van a la linea    
    siguiente
    flex-wrap: wrap-reverse; -> comienza desde abajo y termina hacia arriba
    
para combinar el flex-direction y el flex-wrap :

    flex-flow: column wrap;   propiedad colum y propiedad wrap a los elementos


Ajustes con el espacio disponible en el eje cruzado:

    align-items: stretch; -> por defecto (estirar)
    align-items: flex-start; -> se mantienen con el contenido que les corresponde, 
    align-items: flex-end; ->  mantiene el tama;o segun el contenido y se va lo mas abajo posible segun el        espacio disponible
    align-items: center; -> centra los elementos en el eje y
        podemos juntarlo con el justify-content: center para centrar los elementos en el eje x igualmente y           nos quede el elemento centrado totalmente
    align-items: baseline; -> alinear la ultima linea de los elementos

Similar a justify content, se usa cuando los elementos no entren en el espacio 100%


similar a align-items: se diferencia en como se usa el espacio resigual

    align-content: stretch; -> por defecto
    align-content: flex-start;
    align-content: flex-end;
    align-content: center;

    align-content: space-between; -> espacio entre las filas de elementos
    align-content: space-around; -> espacios iguales al final y al inicio de cada fila de elementos
    align-content: space-evenly; -> espacio al inicio/final, y entre cada fila de elementos


Para dar un espacio especifico entre las filas o columnas

    row-gap: 1rem; -> da espacio entre cada fila de elementos segun la cantidad
    column-gap: 1rem; -> da espacio entre cada columna de elementos segun la cantidad
    gap: 3rem; -> da el espacio entre cada fila y columna segun la cantidad
    gap: 3rem 7rem; -> el primer valor se aplica a las filas y el segundo a las columnas


justify-content align-items align-content se les puede pasar un segundo valor(safe/unsafe(por defecto))

    align-content: safe center; -> permite que se centre lo mejor que pueda sin perder ningun dato


Propiedades que pueden tomar los hijos de un contenedor flexible

    li:nth-child(1){
        order: 50;    -> permite ponerle un orden a los elementos y de esta manera cambiar su ubicacion (0 por defecto)
    }


capacidad de los hijos de crecer segun el espacio disponible en el padre

    li{
    flex-grow:1;      -> el espacio residual es ocupado por los hijos, al final todos tienen el mismo tama;o
    }


    Podemos manejar cada hijo para que tome cierta parte del espacio residual

        ul{
            display: flex;
        }
        
        li{
            flex-grow: 0;    0 porcion al hijo 3
        }
        li:nth-child(2){
            flex-grow: 1;    1 porcion al hijo 2
        }
        li:nth-child(1){
            flex-grow: 2;    2 porcines al hijo 1
        }


El espacio residual que se maneja para cada hijo es segun el flex-basis que tienen

    flex-basis -> auto por defecto
    flex-basis: 0; -> el espacio que habia lo empieza a contar desde el inicio de cada hijo de esta manera los espacios residuales que se asignen son proporcionales 

    flex-basis: 15rem; ->  toma el tama;o del espacio residual disponible, si el espacio se va reduciendo de igual forma lo hace con el/los elementos

Tambien podemos hacer que los hijos se encojan


    flex-grow: 1; se ocupa todo el espacio residual de igual forma
    
    li{
        flex-grow: 1;
    }
    li:nth-child(2){
        flex-shrink: 1;      -> el espacio cuando se encoja la pantalla se tomara del hijo 2 (valor 1 por defecto)
    }
    li:nth-child(1){
    flex-shrink: 2;          -> el espacio al encojerse se tomara el doble del primer hijo
    }


Podemos realizar el cambio de espacios ya sea shrink basis grow en uno solo:

    li{
    flex: 1;   -> valor de flex-grow , luego valor de flex-shrink, luego valor de flex-basis.
    }

podemos manejar un solo hijo para darle una instruccion especifica:



    li:nth-child(2){
        align-self: flex-end; el segundo hijo se va al final
    }


    






