

const agregar = (elemento) => {document.getElementById('pantalla').value += elemento;}

const deleteAll = () => document.getElementById('pantalla').value = '';


const calcular = () => {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}