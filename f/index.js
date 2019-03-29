console.log('key’ a un arreglo y ordenarlos según su valor.');
console.log("================================");

var obj = {
    key1: 10,
    key2: 3,
    key3: 40,
    key4: 20,
}

var obje = Object.entries(obj);
var newObj = [];
obje.forEach(element => {
    newObj.push(element[1]);
});
console.log(newObj.sort((a, b) => {//Recibe una funcion como parametro y asi ordena si tiene mas de 1 digito
    return a - b;
}));//Ordena el Array