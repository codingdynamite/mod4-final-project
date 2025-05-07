// Titles: https://omdbapi.com/?s=thor&page=1&apikey=5489aa38
// details: http://www.omdbapi.com/?i=tt3896198&apikey=5489aa38

const movieSearchBox = document.getElementById('movie__search--box');
const searchList = document.getElementById('search__list');
const resultGrid = document. getElementById('result__grid');

/* LOAD MOVIES FROM API */

async function loadMovies(searchTerm) {
    const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=5489aa38`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    // console.log(data.Search);
    if (data.Response === 'True') displayMovieList(data.Search);
}

function findMovies() {
    let searchTerm = (movieSearchBox.value);
    
}

function displayMovieList(movies) {

}