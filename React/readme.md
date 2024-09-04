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