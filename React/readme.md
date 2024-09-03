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