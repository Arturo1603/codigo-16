// Aca estaran los metodos para poder obtener, crear, actualizar y eliminar
//*2

// Para poder codificar los metodos necesarios para mutar la api importamos las variables que contienen las url necesarias de
//  config.js
// *utilizamos la palabra reservada import para poder importar 
// *se utiliza esta sintaxis para la importancion de variables, funciones, etc
import { urlMovies, mockApiUrl } from "./config.js";

// Aca realizaremos los metodos para poder
// obtener -> get
// Crear -> post
// actualizar -> put
// eliminar -> delete

// *funcion que retorna las 100 peliculas

// ! El await sirve para pausar la ejecucion de la funcion  hasta que se cumpla la promesa y recien continuar

// *destructuracion
// La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar 
// valores de arreglos o propiedades de objetos en distintas variables.

// exportamos nuestro metodo getMovies para ser usado en index.js
export const getMovies = async() => {
    try {
        const response = await fetch(urlMovies);
        const {entries: peliculas} = await response.json();
        // data tiene 2 keys
        // 
        // total : 100
        // entries :[]
        // 
        return peliculas;
    } catch (error) {
        console.log(error);
    }
}


// ahora crearemos una funcion que se encargue de guardar una pelicula en mockApi
export const StoreMovieMockApi = async(data) => {
    try {
        // primero creamos un objeto el cual sera el que enviemos a mockApi
        const object = {
            title: data.title,
            programType: data.programType,
            releaseYear: data.releaseYear,
            imageUrl: data.images["Poster Art"].url,
        }
        // Como fetch por defecto te trae un get, ahora tenemos que especificar el metodo que utilizaremos
        // en este caso POST
        const response = await fetch(mockApiUrl, {
            // Estas son las propiedades(key,value) de nuestro fetch.
            // En el method va el metodo que utilizaremos GET, POST, PUT, DELETE, etc
            method: "POST",
            // Aca va el cuerpo de nuestro objeto convertido en texto
            body: JSON.stringify(object),
            // headers ponemos el tipo de dato que estamos enviando
            //Indica el tipo de contenido
            headers: {
                "Content-Type": "application/json",
            },
        })
        return response;
    } catch (error) {
        return error;
    }
}

/**
 * Esta funcion va a traer las peliculas de mockapi
 */
 export const getMoviesFromMockApi = async () => {
    try {
      const response = await fetch(mockApiUrl);
      const data = await response.json();
  
      return data;
    } catch (error) {
      return error;
    }
  };