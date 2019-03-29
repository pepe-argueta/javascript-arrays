console.log('numbers .filter()');

var numbers = [5, 32, 43, 4, 8, 7];
console.log(numbers);
console.log("=======Array numbers=========");
const number = numbers.filter((num) => {
    return num % 2 !== 0; //Valida que el restante del numero divido entre 2 sea 0
});
console.log("solo devuelve si el numero dividido por 2 es diferente a 0");
console.log(number);