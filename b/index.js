console.log('Arreglos .filter()');
console.log("=============================");


var numbers = [5, 32, 43, 4, 8, 7];

const number = numbers.filter((num) => {
    return num % 2 !== 0;
});

console.log(number);
console.log("solo devuelve si el numero dividido por 2 es diferente a 0");