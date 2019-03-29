console.log('Numero máximo y el numero mínimo');
console.log("=============================");

var miArray = [1, 2, 3, 4, 20, -1];

let max = Math.max(...miArray);//Maximo del Array 
let min = Math.min(...miArray);//Min del Array
//...miArray enlista cada elemento del array
console.log(`El valor maximo es ${max}`);
console.log(`El valor minimo es ${min}`);

console.log(miArray);