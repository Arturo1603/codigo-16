const inputPassword = document.querySelector("#input-password");
const inputPasswordConfirm = document.querySelector("#input-password-confirm")
const checkboxShowPassword = document.querySelector("#checkbox-showpassword");
const textError = document.querySelector(".text-error");
const inputPhoneNumber = document.querySelector("#input-phone-number");
const inputEmail = document.querySelector("#input-email");


checkboxShowPassword.onchange = function() {
    if(this.checked){
        inputPassword.type = "text";
    } else {
        inputPassword.type = "password";
    } 
    // this.checked ? inputPassword.type = "text" : inputPassword.type = "password"; 
    // *recuerda que cuando realizas funciones arrow o anonimas no acepta this
}

// Cuando hablamos del evento del teclado
// * onkdeydown => Es el primer evento que se ejecuta a presionar la tecla
// * onkyepress => Es el evento que se ejecuta mientras se presiona la tecla
// * onkeyup => Es el ultimo evento que se ejecuta cuando se lenvata la tecla



inputPasswordConfirm.onkeyup = function() {
    // ? paso1 : validar 
    const password = inputPassword.value;
    const confirmPassword = this.value;
    if(password == ""){
        alert("Debes escribir el password para poder pasar perro");
        this.value = "";
        inputPassword.focus();
        return;
    }

    // ? Paso2: verificar que el texto sea igual al del inputPassword
    if(password !== confirmPassword){
        console.log("no son iguales, no me quieras engañar");
        textError.style.display = "block"; 
    }else {
        console.log("Si son iguales, ya te habias tardado");
        textError.style.display = "none"; 
    }    
};



inputPhoneNumber.onkeyup = function () {
  const valor = this.value;
  //? Podemos convertir el texto a un array y evaluar si alguno de ellos es un string
  //? si es asi eliminar del array y luego convertir ese array a un string sea
  //? el value del input
  const caracteres = valor.split("");

  let newValue = "";
  // isNaN: is not a number
  caracteres.forEach((caracter) => {
    // Si es un numero entonces agregalo a newValue
    if (!isNaN(Number(caracter))) {
      newValue += caracter;
    }
  });

  // Luego de iterar el array y verificar que solo agregue los numeros
  // a la variable newValue decimos que el valor del input sera newValue
  this.value = newValue;
};
// inputPhoneNumber.onkeyup = function () {
//     this.value = this.value
//       .split("")
//       .filter((caracter) => !isNaN(Number(caracter)))
//       .join("");
//   };

inputEmail.onkeyup = function () {
    const value = this.value;
    const regex =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gm;
    
    
    if(regex.test(value)){
        console.log(regex.test(value));
        inputEmail.style.color = "black"; 
    }else {
        inputEmail.style.color = "red";
        console.log(regex.test(value));
    }
    // Reto
    //Si regex es falso muestren un mensaje de error
    // Si es verdade no muestren nada
  };

