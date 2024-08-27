const key = '53302469c52f744b34ef99d64620681b';
const difKelvin = 273.15;

const url = `https://api.openweathermap.org/data/2.5/weather`;

const button = document.getElementById('botonBusqueda');

button.addEventListener('click', () => {
    const city = document.getElementById('ciudadEntrada').value;
    if(city){
        fetchDatosClima(city);
    }
});

const fetchDatosClima = (city) => {
    fetch(`${url}?q=${city}&appid=${key}`)
        .then(response => response.json())
        .then(response => mostrarDatosClima(response))
}


const mostrarDatosClima = (response) => {
    console.log(response)
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';

    const nombreCiudad = response.name;
    const temp = response.main.temp;
    const description = response.weather[0].description;
    const iconID = response.weather[0].icon;
    const nameCountry = response.sys.country;
    const humidity = response.main.humidity;
    
    
    const iconInfo = document.createElement('img');
    iconInfo.src = `https://openweathermap.org/img/wn/${iconID}@2x.png`;
    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${nombreCiudad}, ${nameCountry}`;
    const tempInfo = document.createElement('p');
    tempInfo.textContent = `La temperatura es: ${Math.floor(temp-difKelvin)}°C`;
    const descriptionInfo = document.createElement('p');
    descriptionInfo.textContent = `la descripcion metereologica es: ${description}`;
    const humidityInfo = document.createElement('p');
    humidityInfo.textContent = `la humedad es: ${humidity}%`;

    if(descriptionInfo == 'clear Sky'){
        
    }
    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(iconInfo);
    divDatosClima.appendChild(tempInfo);
    divDatosClima.appendChild(humidityInfo);
    divDatosClima.appendChild(descriptionInfo);
}