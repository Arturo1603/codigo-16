document.write("<h1>Dia 3 Switch</h1>");

// Switch
// Problema: en base a la nota escribir un mensaje
// nota < 13 debe mejorar
// nota > 15 alumno promedio
// nota > 18 alumno sobresaliente
// nota = 20 alumno genio
// const nota = Number(prompt("Ingrese nota"));

// let mensaje = "";

// if (nota <= 13){
//     mensaje = "Debe mejorar";
// }else if(nota >= 14 && nota < 18){
//     mensaje = "alumno promedio";
// }else if(nota >= 18 && nota <= 20){
//     mensaje = "alumno sobresaliente";
// }else if(nota = 20){
//     mensaje = "alumno genio";
// }

// alert(mensaje);


// Switch
//* Esto dice que angulo sera la variable padre
//* y en cada case vamos a evaluar esta variable, sin embargo no hace 
// * falta volver a llamar a la variable

//! Una recomendacion es usar el brake cada que utilicemos un case

let angulo = 18;

switch(angulo){
    case 0:
        document.write("<p>Nulo</p>");
        // despues de ejecutar lo que queremos ponemos un break
        break;
    case 90:
        document.write("<p>Recto</p>");
        break;
    case 180:
        document.write("<p>Llano</p>");
        break;
    case 360:
        document.write("<p>Completo</p>");
    default:
        document.write("<p>No entra en los parametros</p>")
}
//! en el default no hace falta poner break porque solo entra ahi cuando en ni un caso se cumple


// Arreglos
const nombres = ["Pepe", "Juan", "Maria", "Luisa", "Carlos", "Lucas"];
console.log(nombres);

console.log(nombres);
console.log(nombres[3]);
console.log(nombres[6]);

// ! cuando se pide un dato que no existe en nuestroa arreglo nos devuelve undifined,
// debido a que el dato no existe, no esta deficinido.

console.log("nombres", nombres.length);

const datos = [1, true, false, -2, "Hola mundo"];

console.log("datos", datos.length);

// Pregunta si quieres acceder al ultimo elemento usando length
console.log("datos", datos[datos.length - 1]);


// funcion push: Sirve para agregar un elemento al array
// lo agrega en la ultima posicion
datos.push("Agregando un dato");

console.log("datos con push", datos);
console.log("Agregando un array dentro de un array");

datos.push(["pepe", "juan", "maria"]);

console.log("agregando un array", datos);

const datosPrueba = [
    1,
    true,
    false,
    -2,
    "Hola mundo",
    "Agregando un dato",
    ["pepe", "juan", [1, 2, 4, 5, [-1, -2, -3, -4]], "maria"]
]
console.log("imprimiendo datos prueba", datosPrueba[6][0]);//en este caso estamos marcando el array, y dentro de nuestro
//array hijo estamos llamdno a nuestro indice 0 en este caso pepe
console.log(datosPrueba[6][2][3]);
console.log(datosPrueba[6][2][4][2]);

console.log(datosPrueba[6][2].length);//5

console.log(datosPrueba[6][datosPrueba[6].length-3]);//juan
console.log(
    datosPrueba[6][datosPrueba[6].length - 2][datosPrueba[6][2].length-1]
);

// Pop: es una funcion que me permite elimnar un elemento de un array
const laptop = ["lenovo", "hp", "apple"];
console.log("Laptops: ", laptop);
// retorna el elemento eliminado
console.log("Elemento eliminado", laptop.pop());
console.log("Laptops: ", laptop);

// Supongoamos que tenemos una lista de alumnos
const alumnos = ["Luis", "Juan", "Maria", "Luciana", "Lucas"];
console.log("El alumno " + alumnos.pop() + "Fue eliminado");
console.log("Alumnos:  ", alumnos);

// Uunshift: esta funcion agrega un elemento o un array pero en la primera
// posicion osea la 0
alumnos.unshift("Daniel");
console.log("unshift", alumnos);

// shift: Esta funcion elimina al primer elemento de un array
console.log(alumnos.shift());

// para pdoer reemplazar un dato de nuestro array independientemente de su posicion
alumnos[3] = "Federico";

// indexOf : retorna la posicion en base a un dato
// Si tenemos elemento repetidos encontrara al mas cercano en este caso el uno
// si estamos buscando un elemento que no existe retornara -1
const colores = ["rojo", "verde", "amarillo", "azul", "verde", "morado"];
console.log(colores.indexOf("verde"));

const busqueda = prompt("ingrese el color");

if(busqueda !== -1){
    alert("el color si existe y es "+ colores[colores.indexOf(busqueda)]);
}else{
    alert("el color no existe");
}