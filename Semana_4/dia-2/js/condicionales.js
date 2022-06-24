// document.write sirve para poder escribir en un html ya ejecutado
// podemos imprimir codigo html y css como en el ejemplo
// wirte es un metodo de document
document.write("<h3>Notas</h3>");
document.write(Date());

let nota = 20;
// nota = Number(prompt("Ingrese nota")); //nota de un alumno

if(isNaN(nota)){
    alert("Solo numeros porfavor");
    nota = Number(prompt("Ingrese nota"));
}

// Condicional si o if
if ( nota < 15 ) {
    //instrucciones que se ejecutaran si la condicion se cumple
    // para poder utilizar clases dentro las etiquetas en un document.write
    // utilizamos las comillas simples
    document.write("<p class='red'>Desaprobado con " + nota  + "</p>")

} else {
    document.write("<p class='blue'>Aprobado con " + nota + "</p>")
    // instrucciones si no se cumplen las condiciones
}


// angulos
document.write("<h3>ANGULOS</h3>");
let angulo = 170;
let mensaje = "<p>inexistente</p>";

document.write("<p>angulo</p>");

if (angulo === 0){
    mensaje ="<p>nulo</p>";
}else if (angulo < 90){
    mensaje ="<p>agudo</p>";
}else if (angulo === 90 ){
    mensaje = "<p>recto</p>";
}else if (angulo < 180){
    mensaje = "<p>obtuso</p>";
}else if (angulo === 180){
    mensaje = "<p>llano</p>";
}else if ( angulo < 360){
    mensaje = "<p>concavo</p>";
}else if (angulo === 360) {
    mensaje = "<p>completo</p>";
}
document.write(mensaje);

// Operadores logicos en js
//* && significa and
//* || pipa o pipe que significa or
//* ! operacion de negacion