// Eventos
//  Un evento es una accion que el usuario o el navegador pueden activar
// onClick => Este evento se activa cuando el usuario usa el mouse y clickea un elemento 
// Para activar los eventos podemos hacerlo desde JS o desde el HTMl

// onChange
// onKeyup
// onKeydown
// onSubmit
// onmouse
// onmouseover
// onFocus

const btnTest = document.querySelector("#btn-test");

btnTest.onclick = () => {
    console.log("Es un click");
}

// btnTest.onclick = function(){
//     console.log("Hola mundo");
// }

const variableH1 =  document.querySelector("#h1-test");

variableH1.onclick = () => {
    console.log("Click desde el h1 perroooo");
}
document.document.onclick = () => {
    console.log("Clickeando el dom");
}