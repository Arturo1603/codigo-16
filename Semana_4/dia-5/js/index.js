// // Una funcion es un bloque de condigo que realiza una accion
// // La sintaxis de una funcion se divide en 3

// // lo mas clasico y antiguo que existe
// function nombreDeLaFuncion(){
//     //En este espacio podemos escribir codigo
//     const alumnos = ["Pepe", "Juan", "Maria", "Luisa", "Lex", "Lucas", "Klark"];

//     for(let alumno of alumnos){
//         console.log(alumno);
//     }
// }

// // Para hacer que una funcion se ejecute debemos llamarla

// nombreDeLaFuncion();

// // Ahora haremos una funcion que retorna un valor

// // Teoricamente hay dos clases de funciones
// // funcion impuras => Es una funcion que no retorna un valor
// // funcion pura => Es una funcion que retorna un valor

// // * Las funciones tienen la opcion de usar "return" que es una 
// // * palabra reservada de JS la cual sirve para devolver un valor

// function cuboDeUnNumero(){
//     return Math.pow(10, 3);
// }
// //recuerden que esto es basicamente llamar una funcion
// const resultado = cuboDeUnNumero();

// console.log("resultado", resultado);

// // una funcionalidad es el poder enviar valores a las funciones
// // lo que esta adentro del parentesis en una funcion se llama parametros
// // una funcion puede tener n parametros
// // las funciones son reutilizables n veces
// function potenciaDeUnNumero(numero, potencia){
//     return Math.pow(numero, potencia);
// }

// const ejemplo1 = potenciaDeUnNumero(4,3);// 4 al cubo
// const ejemplo2 = potenciaDeUnNumero(6,2);// 6 al cuadrado
// console.log(ejemplo1);
// console.log(ejemplo2);


// //1.    Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado 
// //se deberá imprimir en pantalla.

// let numero1= Number(prompt("Ingrese numero1"));
// let numero2= Number(prompt("Ingrese numero2"));
// function sumaDeNumeros(){
//     let resultado= numero1+numero2;
//     document.write("El resultado es :"+ resultado);
// }

// sumaDeNumeros();


// //2.    Registrar el ingreso de notas de 4 examenes y calcular el promedio de estos.

// let notas = [16,15,18,13];

// function calcularPromedio(){
//         let sumaNumeros = 0;
//         for(i=0; i < notas.length; i++){
//             sumaNumeros = sumaNumeros + notas[i];
//         }
//         console.log("el promedio es: ", sumaNumeros / notas.length);
        
// }
// calcularPromedio();


// calcular factorial
// Paso 1 creo una funcion que me retorne el factorial
function calcularFactorial(numero) {
    // 4 = 1 x 2 x 3 x 4 = 24
    const number = Number(numero);
  
    //! Nota el return aparte de retornar un valor da fin a la
    //! ejecucion de la funcion
    if (isNaN(number)) {
      return "Esto no se puede hacer porque no es un numero";
    }
  
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
      resultado *= i;
    }
  
    return resultado;
  }

//?  nota. Otra cosa chevere es que podemos usar una funcion dentro de otra funcion
function imprimirFactorial(){
    const inputValor = document.getElementById("input_number").value;
    const resultado = calcularFactorial(inputValor);

    //En esta linea estamos buscando el Html al elemento que tenga la clase
    // container cuando lo encuentra lo guarda en la variable container
    // luego de esto podemos usar la propiedad innerHtml para poder
    // agregar Html a este container

    // ! querySelector Es una funcion de JS la cual permite buscar elementos de una forma sencilla
    // ! Nota el  . y el # son selectores de elementos de HTML
    // Cuando es una clase document.querySelector(".container")
    // Cuando es un id document.querySelector("#container")
    // Cuando es una elemento document.querySelector("h1")
    const container = document.querySelector(".container");
    container.innerHTML+= 
        "<p>Factorial de "+ inputValor + " es " + resultado +"</p>";
}
