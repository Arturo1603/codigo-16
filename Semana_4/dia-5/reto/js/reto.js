// reto : Crear una vista la cual tenga un input y boton
// esto debera tener la tabla de multiplicar 


   

// function multiplicar(numero){
    
//     for(i = 0; i <= 12; i++){
//         let resultado = numero * i;
//         const container = document.querySelector(".container");
//         let imagen = container.innerHTML+="<p>"+numero+"* "+ i + "=" +resultado +"</p>"
        
//     } 
//     return imagen;
    
// }

// function imprimir(){
    
//     const inputvalor= document.getElementById("input_number").value;
//     const result = multiplicar(inputvalor);
// }

// recuerden que el return aparte de retornar un valor tambien termina la ejecucion de la funcion


// ejercicio

   


const  Promedio4Notas = (nota1, nota2, nota3, nota4) => {
    nota1= Number(document.getElementById("input_number1").value);
    nota2= Number(document.getElementById("input_number2").value);
    nota3= Number(document.getElementById("input_number3").value);
    nota4= Number(document.getElementById("input_number4").value);
    
    
    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
        alert("Ingresa numeros porfavor");
    }else{
    let resultado = nota1 + nota2 + nota3 + nota4;
    const container = document.querySelector(".container");
    return container.innerHTML += "<p>El promedio de notas es "+ nota1 +"</p>";
    }

}