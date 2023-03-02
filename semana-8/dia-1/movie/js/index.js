const containerMovies = document.querySelector("#container-movies")

const url = "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json";

function renderCards(movies){
    containerMovies.innerHTML = "";
    // console.log(movies)
    movies.sort(() => 0.5 - Math.random())
    movies.forEach((movie, index) => {
        const{ title: titulo, images: imagen,programType: tipo, description : descripcion} = movie;
        if(index < 10){
            console.log(movie.images["Poster Art"].url);
            containerMovies.innerHTML += `<div class="col-12 col-sm-3 cold-md-4 col-log-4">
            <div class="card" style="width: 18rem">
            <div> 
                <img src="${imagen["Poster Art"].url}"
                onerror = "this.onerror=null;this.src='https://i.quotev.com/img/q/u/15/12/25/78a31e5f80-imag.jpg';"
                class="card-img-top"
                alt="">
                <span class="badge rounded-pill position-absolute top-0 start-50 translate-middle ${(tipo == "series")? `text-bg-light` : `text-bg-primary`}">${tipo}</span>
            </div>
                <div class="card-body">
                    <div class="card-title">${titulo}</div>
                    <p class="card-text">
                        ${descripcion}
                    </p>
                </div>
            </div>`
        }
    })
}

// const peticion = fetch(url).then((response) => response.json()) .then((data) => renderCards(data.entries));


async function peticionMovie(){

        const response = await fetch(url);
        const movies = await response.json();
        return renderCards(movies.entries);
    
}
peticionMovie();

// recordemos que fetch me retorna una promesa que tiene 2 escenarios
// * resolve cuando la peticion esta resuelta ok
// ! reject cuando la peticion falla

// * then() es un callback, es una funcion que se ejecuta cuando algo termina

// ahora con la poke api

const urlPoke = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

const peticion2 = fetch(urlPoke).then((promise) => promise.json()).then((data) => console.log(data));