
// agarrar las variables
const inputNumbers = document.querySelector("#input-Numbers");
const result = document.querySelector("#result");


let sucesionF = [0,1];



inputNumbers.addEventListener("keyup", function(){
    this.focus();
})

// agregando numeros al array sucesionF

inputNumbers.addEventListener("keyup", function(){
    let a = sucesionF.length - 1;
    let b = sucesionF.length - 2;
    for(let i = 2 ; i < 20; i++ ){  
        sucesionF.push(sucesionF[a] + sucesionF [b]);       
    }
    result.innerHTML = sucesionF;
});

