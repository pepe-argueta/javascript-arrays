console.log('Arreglos Max min');
console.log("=============================");

var miArray = [1, 2, 3, 4, 20, -1];

let max = Math.max(...miArray);

let min = Math.min(...miArray);
console.log(`El valor maximo es ${max}`);
console.log(`El valor minimo es ${min}`);

console.log(...miArray);