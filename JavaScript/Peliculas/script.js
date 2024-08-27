


const buscar = document.getElementById('search');
buscar.addEventListener('click',searchMovies);
let apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2YwM2FjZGM4MTNiMjU1ODNiNTBhMGE1ZWUxZjE2YSIsIm5iZiI6MTcyNDc5NTMzMy45NTgxOTUsInN1YiI6IjY2Y2U0N2RiODM3Nzg3MGUxMGRlMDJmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ro1WZeE3dojfU4dE9BH-RLnDMKvRzgG97-JU4rc5ReI';


const searchMovies = ()=>{
    const searchInput = document.getElementById('searchInput');
    const results = document.getElementById('results');

    if(!pelicula){
        results.appendChild('h2')
        results.textContent = 'Pelicula no encontrada'
    }else{
        for

    }
}