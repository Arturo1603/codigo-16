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