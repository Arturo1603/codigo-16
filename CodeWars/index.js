// let x = [1, 2, 3];
// function grow(x){
//     let result = 1;
//     x.forEach(number => result *= number);
// }

// grow(x);

const dna = "TAATT";
function DNAtoRNA(dna) {
    let arrays = [];
    let newData = [];
    let resultData = [];
    for(let i = 0 ; i < dna.length; i++){
        arrays.push(dna[i]);
    }
    console.log(arrays);  
    for(array of arrays){
        if( array === "T"){
            newData.push(array.replace("T","U"));
        }else{
            newData.push(array);
        }
        
    }
    resultData = newData.join("");
    console.log(resultData);

}

DNAtoRNA(dna);
