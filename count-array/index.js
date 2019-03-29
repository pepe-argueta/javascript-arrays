console.log("Ejercicio Contando los elementos repetidos de un array");
console.log("======================================================");

let arrayNums = (totalNums) => {

    const nums = [];
    for (let i = 1; i <= totalNums; i++) {
        nums.push(Math.floor(Math.random() * (1, 10)));
    }
    return nums;
}
const arrayNumeros = arrayNums(10);

console.log(arrayNumeros);
console.log("Count Array");
console.log("======================================================");

const cantidadNumeros = arrayNumeros.reduce((contadorNumero, numero) => {
    contadorNumero[numero] = (contadorNumero[numero] || 0) + 1;
    return contadorNumero;
}, {});

console.log(cantidadNumeros);

console.log("======================================================");
console.log("Ejemplo Reduce");

let telefono = ['5', '5', '4', '5', '3', '0', '7', '2', '5', '6'];
console.log(telefono.join(''));

let nombre = ['P', 'e', 'p', 'e'];

let palabra = nombre.reduce(function(nuevo, viejo, index, arreglo) {
    return nuevo + viejo;
});

console.log(palabra);

console.log("======================================================");

let telefonos = ['5', '5', '4', '5', '3', '0', '7', '2', '5', '6'];

const counTNums = telefonos.reduce((cont, num) => {
    cont[num] = (cont[num] || 0) + 1;
    return cont;
}, {});

console.log(counTNums);