console.log('Arreglos Key');
console.log("=============================");

var obj = {
    key1: 10,
    key2: 3,
    key3: 40,
    key4: 20
}

var obje = Object.entries(obj);
var newObj = [];
obje.forEach(element => {
    newObj.push(element[1]);
});

//newObj.sort();
console.log(newObj.sort());