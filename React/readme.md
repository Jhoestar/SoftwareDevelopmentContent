Es mejor usar funciones anonimas para pasar datos al ejecutar una funcion, si es que no necesitamos pasar argumentos podemos pasar la funcion como una callback directamente

```hs
<button onClick={() => addCounter()}>Contador</button>
```

una forma de controlar los props sin typescript
```hs
PrimerComponente.propTypes = [
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired    
]

PrimerComponente.defaultProps{
    titulo: "curso de React",
    subtitulo: "seccion de props"
}
```

o declararlo directamente en el prop del componente

```hs
export const PrimerComponente = ({titulo, subtitulo = 'seccion de props'}) => {
    return{
        <>
            <h1> {titulo} </h1>
            <h2> {subtitulo} </h2>
        </>
    }
}
```

# Eventos
[para ver todos los eventos posibles en react](https://es.legacy.reactjs.org/docs/events.html)


# Formulario

para poder realizar un formulario en react es necesario hacer uso de useState(inicializado en un string vacio) para controlar el estado del valor que es recibido por entrada por ejemplo y una funcion para cambiar el valor de la entrada de un input text, este input text tendra un value y un onChange para escuchar a la hora de realizar el cambio.
Dentro de la funcion cambiaremos el estado del valor con el metodo set y recuperando el texto que ha sido introducido en el texto con el event.target.value


```hs
    export const AgregarTarea = () => {
        const [inputValue, setInputValue] = useState('')
        const onInputChange = (event) => {
            setInputValue(evento.target.value)
        }
        return(
            <input
                type='text'
                placeholder ='Ingresa tarea nueva'
                value={inputValue}
                onChange={onInputChange}
            />
        )
    }
```

de igual forma podemos desestructurar los atributos de la funcion mediante las llaves {{}}, es decir en vez de acceder al value luego del evento y target, podriamos directamente pedir el target y acceder al value mediante este

```hs
    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }
```

Debemos tener en cuenta que cuando pulsamos un enter(submit) se actualiza la pagina por lo cual es necesario usar un preventDefault para que esto no suceda

# Use effect y Use state

Use state es una funcion que permite manejar el estado en componentes funcionales, nos permite mantener y actualizar datos que pueden cambiar con el tiempo y que afectan la renderizacion del componente.

Use effect es un hook que se ejecuta despues de que el componente se ha renderizado permite manejar efectos secundarios 

para usar useEffect se requiere una Fetchcallback que sera la accion que queremos que se ejecute una sola vez y las dependencias en forma de array, por lo tanto si no se coloca nada las dependencias se tratan del componente como tal

Es mejor usar Async y Await cuando se maneja fetch y APIs ya que en ese caso se necesita que se devuelvan los datos que se le este pidiendo, tambien se podria usar el try catch para manejar los errores que tengamos a la hora de pedir los datos

```hs
    const [users, setUsers] = useState([])

    const fetchUsers = async() =>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setUsers(data)
        }catch(error){
            console.log(error)
        }
    }
    
    useEffect(()=>{fetchUsers()},[])
    
  return (
    <>
        <h1>LIsta de usuarios</h1>
        <ul>
        {users.map(user => <li key={user.id}>Nombre: {user.name}</li>)}
        </ul>
    </>
  )
```
Si es que nosotros tratasemos de usar el fetchUsers  sin el useEffect se estaran enviando los datos a cada rato, ya usando el fetch users se manejara de diferente forma, esperara una inicializacion o modificacion en el componente para que se ejecute solamente una vez luego de eso.

Sin embargo no es necesario usar el useEffect aplicando unas modificaciones al ejemplo anterior:


```hs
  return (
    <>
        <h1>LIsta de usuarios</h1>
        <ul>
        {users.map(user => <li key={user.id}>Nombre: {user.name} Email:{user.email}</li>)}
        </ul>

        <button onClick={handleFetch}>Devolver usuarios</button>
    </>
  )
```
```hs
    function handleFetch(){
        fetchUsers()
    }
```

tenemos un boton que llamara cuando se presione a la funcion handleFetch() que esta llamara a fetchUsers() que nos devolvera el resultado de la API


# Build y dist

para buildear nuestro proyecto solamente npm run build, nos creara un archivo dist que contendra el html, css y js. El archivo js comprimira? todo lo que hayamos hecho en react

si se compara el proyecto en despliegue con el de desarrollador se puede notar como es que en el dev se llama dos veces debido al strictMode y al estar en produccion solo se llama una vez, asi que ese problema no sera una molestia como tal

al estar en el modo dev al llamar a una api no se mostrara 2 veces sino que solamente una debido a que no se cambia todo el componente como tal sino que solamente se cambia la dependencia que se coloco en el useEffect



tener en cuenta que no se puede usar async await dentro de useEffect por lo tanto se puede tomar lo que se reciva del fetch dentro del useEffect como si fuera una promesa:

con async y await:
```hs
    useEffect( async()=>{
    const {data, isLoading} = await fetchData(endPoint)
    },[endPoint])
```
con promesas:
```hs
    useEffect( ()=>{
        fetchData(endPoint).then(response => 
            {setDataApi(response.data),
            setIsLoading(isLoading.data)})
    },[endPoint])
```

En caso de querer usar el async await debemos hacerlo fuera del useEffect para luego llamar a esa funcion dentro del useEffect:

```hs
    const getFetch = async() =>{
        const {dataApi,isLoading} = await fetchData(endPoint)
        setDataApi(dataApi)
        setIsLoading(isLoading)
    }

    useEffect( ()=>{
        getFetch()
    },[endPoint])
```


useRef lo podemos usar como una referencia guardandolo en una variable para luego pasarlo a la parte del html en la que necesitemos, luego en un fetch podemos utilizar esto para darle una instruccion

Por ejemplo puede ser usada cuando se use el scroll en una pagina y de esta manera useRef apunte al ultimo elemento de html de manera que la pagina se vaya cargando mientras se vaya explorando la pagina


```hs
    const focusRef = useRef()

    useEffect(() => {
      focusRef.current.focus()
    }, [])

            <div className="form-group">
                <label htmlFor="exampleInputPassword1">email</label>
                <input
                    ref = {focusRef}
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={onInputChange}
                />
            </div>

```

en el anterior ejemplo simplemente le hacemos un focus en esa parte del dcumento html n este caso el email.



El useMemo lo podemos usar para que cuando se realicen calculos complejos, no se vuelvan a realizar cada vez que cambie el componente si no es necesario sino que se cambien solo cuando se cambie los datos del calculo o se altere en este mismo 

```hs
  const getCalculo = numeros => useMemo(() =>{
    return numeros.reduce((a,b)=> a*b)
  },[numeros])
```

en el ejemplo anterior tenemos un array de numeros en el cual si es que se cambia este array se realizara nuevamente el calculo, si no no deberia de realizar nuevamente.
De igual forma es posible usar este para cuando se este haciendo llamadas APIs para que no se vuelva a llamar a cada rato sino cuando se requiera de este

# REDUCER

es una funcion que recibe un estado inicial una accion y devuelve un estado modificado, no puede hacer acciones asincronas y no puede setear en el local storage o sesion storage.

Se necesita iniciar el estado que el reducer usara cuando se inicialice el hook:

```hs
    const initialState = {
        count: 0,
        tasks: []
    };
```

se puede usar en el componente de la siguiente manerea

```hs
    const [state, dispatch] = useReducer(reducer, initialState);
```

donde:
    state es el estado actual.
    dispatch es una función que envía acciones al reducer.






