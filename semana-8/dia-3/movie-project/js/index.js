// la logica del DOM
// *3
// importo los metodos necesarios de nuestro index.js de service
import {getMovies,StoreMovieMockApi, getMoviesFromMockApi} from "../js/service/index.js"

const btnGetMovies = document.querySelector("#btn-get-movies");
const containerMovies = document.querySelector("#container-movies");
const btnSaveMovies = document.querySelector("#btn-save-movie");
const btnGetMoviesFromMockApi = document.querySelector(
  "#btn-get-movies-mock-api"
);
const inputCantidad = document.querySelector("#input-cantidad");
const bodyTable = document.querySelector("#body-table");

// *creamos una variable de array para poder pushear en nuestro mockApi las peliculas que recibimos
const moviesWithImage = [];

// una funcion asincrona te trae una promesa por tal motivo se debe 
// tratar con una promesa, async await o callback
btnGetMovies.onclick = async function(){
    const movies = await getMovies(); //almacenamos nuestra funcion getMovies resuelta en la variable movies

    // no nos olvidemos de limpiar
    containerMovies.innerHTML = "";
    movies
        .sort(() => 0.5 - Math.random()) //estamos ordenando las movies de forma aleatoria
        .forEach(async (movie) => {//colocamos async antes de nuestro arrow function
        // dentro del forEach no se hereda el async por ende hay que hacer el forEach sea async, entonces transformamos nuestro 
        // foreach en una funcion asincrona
        const imageUrl = movie.images["Poster Art"].url;
        const response = await fetch(imageUrl);
        // Sepamos que si una peticion falla el response.Ok sera false
        // y cuando esta bien sera true

        // ponemos una condicion, si la peticion de la imagen esta bien renderizamos(una funcion que crearemos) la pelicula
        // 
        if(response.ok){
            // Aca colocamos lo que hara si es que response.ok es true
            rederMovie(movie)
            

        }
        
    })
}

btnGetMoviesFromMockApi.onclick = async function () {
  let contador = 0;
  containerMovies.innerHTML = "";
  
  const movies = await getMoviesFromMockApi();
  movies.forEach(async movie =>{
    if(contador >= inputCantidad.value) return ;
    contador ++;
    bodyTable.innerHTML += `
    <tr>
      <th scope="row">${movie.id_movie}</th>
      <td>Mar${movie.title}</td>
      <td>${movie.programType}</td>
      <td>${movie.releaseYear}</td>
    </tr>
  `
  console.log(movie);
  })
  
  
};

// *creamos un boton para poder mostrar en la consola el array moviesWithImages
//creamos una funcion para poder enviar nuestras peliculas, recorriendo el array de objetos moviesWithImage y aplicando
//la funcion StoreMovieMockApi
btnSaveMovies.onclick = function () {
    console.log(moviesWithImage);
    moviesWithImage.forEach(async (movie) => {
      await StoreMovieMockApi(movie);
    });
  };
// Creare una funcion para renderizar las peliculas
// Cuando hablamos de renderizar, nos referimos a pintar nuestras peliculas en el DOM
function rederMovie(movie){
    const movies = document.querySelectorAll("#container-movies .col")
    // Agrupa en un array los elementos seleccionados
    // en este caso los col del padre container-movies, que pintamos cada que se renderiza una movie

    if(movies.length >= 20) return;
    // *pusheamos en nuestra array creado las movies renderizadas
    moviesWithImage.push(movie);
        
    containerMovies.innerHTML += `
    <div class="col">
      <div class="card my-3">
        <div class="into-photo">
          <span class="badge text-bg-${
            movie.programType === "series" ? "success" : "warning"
          }">${movie.programType}</span>
          <img
            src="${movie.images["Poster Art"].url}"
            class="card-img-top"
            alt=""
          />
        </div>
        <div class="card-body">
          <div class="card-title">${movie.title}</div>
        </div>
      </div>
    </div>
  `;
}