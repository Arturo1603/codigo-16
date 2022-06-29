// En la funcion existe parametros con valores predeterminados
// Cuando llamamos a la funcion restar es obligatorio pasar los 2 parametros?
// Existe una forma en la cual podemos decir que un parametro llene un valor por 
// defecto

function restar(numero1 = 2, numero2 = 5){
    console.log(numero1);
    console.log(numero2);
    return numero1 -numero2;
}

// En el caso que a la funcion restar solo le pasan el numero 1 esta de forma
// automatica asumira que el numero2 vale 5
console.log("Resta1 ", restar(6));
console.log("Resta2 ", restar(4,8));
console.log("Resta3 ", restar());
console.log("Resta4 ", restar(4,4));


// Funciones anonimas
// son funciones sin nommbre
// es considerado una variable que guarda una funcion
// aca estamos demostrando que una variable puede almacenar una funcion
// ! nota: El funcionamiento es igual
// !lo que cambia es la sintaxis de la funcion y ademas cuando usamos funciones
// ! anonimas no tenemos acceso a this
// ! this es una forma en la cual podemos acceder a variable usando clases
const multiplicar = function(n1, n2){
    return n1 * n2;
}

multiplicar(5,6);

// * Lo que se utiliza actualmente son los arrow function o funciones flecha
// * En el caso de las funciones flecha no hace falta escribir la palabra reservada function
// * ya que esta inplicito
// * un arrow function es considerado una function anonima por ende
// * tampoco tiene acceso a this
const dividir = (n1,n2) =>{
    return n1/n2;
}

// * Esto no excluye a que podamos combinar funciones
// *recordemos que isNaN retorna un boolean
// * por ende esta funcion retorna un true o false 
function validarNumero(numero){
    return isNaN(numero);
}


const imprimirAlumnos = () => {
    const inputNombre = document.querySelector("#input_name");
    const nombre = inputNombre.value;
    // Estamos agregando el alumnos al array
    alumnos.push(nombre);
    // Estamos indicando el value del input es igual cuando hacemos estos
    // estamos limpiado el contenido del input
    inputNombre.value = "";
    const resultado = document.querySelector(".resultado");
  
    // Siempre debemos limpiar el espacio del resultado antes del for
    resultado.innerHTML = "";
  
    for (let alumno of alumnos) {
      // += es adicion es una suma la
      //  resultado.innerHTML = resultado.innerHTML + "<p>" + alumno + "</p>";
      // Indica que al contenido anterior le agremos esto si yo no uso el +=
      // va a reemplazar el contenido
      resultado.innerHTML += "<p>" + alumno + "</p>";
    }
  };

  