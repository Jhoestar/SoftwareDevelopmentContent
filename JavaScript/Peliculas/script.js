


document.getElementById('searchButton').addEventListener('click',searchMovies);

const apiKey = '27f03acdc813b25583b50a0a5ee1f16a';
const url = 'https://api.themoviedb.org/3/search/movie';
const urlImg = 'https://image.tmdb.org/t/p/w500';


const resultsContainer = document.getElementById('results');


function searchMovies(){
    resultsContainer.innerHTML = 'Cargando...';
    let searchInput = document.getElementById('searchInput').value;
    
    fetch(`${url}?query=${searchInput}&api_key=${apiKey}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}


function displayMovies(movies){

    resultsContainer.innerHTML = '';
    if(movies.length === 0){
        resultsContainer.innerHTML = '<p>no se encontraron peliculas para tu busqueda</p>';
        return
    }

   
    movies.forEach(movie => {
        let movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');


        let title = document.createElement('h2');
        title.textContent = movie.title

        let releaseDate = document.createElement('p');
        releaseDate.textContent = 'la fecha de lanzamiento fue: ' + movie.release_date
        
        let overview = document.createElement('p');
        overview.textContent = movie.overview

        let poster = document.createElement('img');
        poster.src = `${urlImg}${movie.poster_path}`;

        movieDiv.appendChild(poster);
        movieDiv.appendChild(title);
        movieDiv.appendChild(releaseDate);
        movieDiv.appendChild(overview);

        resultsContainer.appendChild(movieDiv)
        });


}