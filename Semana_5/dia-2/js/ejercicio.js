// reto 1 
  // Crear un array de edades
  // const edades = [23, 21, 34, 45, 28, 30];
  // y usando for o forEach hagan que una variable guarde el cuadrado de las edades

const edades = [23,21,34,45,28,30];
// usando for
let edadesCuadrado = [];
let FuncionCuadrado = ( ) => {
    

    for(i = 0; i < edades.length; i++){
        edadesCuadrado.push(Math.pow(edades[i], 2));
    }
    console.log(edadesCuadrado);
}

console.log(FuncionCuadrado());


// forEach
let edadNueva = [];
edades.forEach(edad => {
    edadNueva.push(Math.pow(edad,2));
});

console.log(edadNueva);

// Map
// Se puede usar sin reutrn cuando es una linea de codigo
let MapEdades = edades.map(edad =>{ Math.pow(edad,2);
});

console.log(MapEdades);




