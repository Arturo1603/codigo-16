// crear variable que puede cambiar de tipo
let numero = 10;
console.log("Primer tipo", numero);

numero = "Pepe";
console.log("Segundo tipo", numero);
// let o const se va solo cuando se crea la variable
// podemos cambiar el tipo de dato
// vamos a ver el console.log
// permite imprimir un valor en la consola del navegador
console.log(numero);

//! const 
const igv = 0.18;
console.log("Primer Igv", igv);
//la constante no puede ser cambiada 

// Existe otra forma de mostrar una variable
//alert 
alert("Paga tu impuesto nomas :v", igv);

//* concatenacion: Basicamente es juntar 2 o mas variables
const primerNombre = "Arturo";
const primerApellido = "Chaparro";
let edad = 27;
let dias = 20;
// Para concatenar 2 o mas variables se utiliza el operador +
console.log("Concatenacion");
console.log(primerNombre +" "+ primerApellido + 27);
console.log(edad + dias);

// en JS podemos realizar cualquier operacion matematica


// Sepamos que en JS existen String y Number
// Al hacer esto estamos transformando un entero en un String
console.log("Edad " + String(edad));
// "22" + "20"
console.log(String(edad) + String(dias));

console.log(edad, dias, edad);