console.log('Numero de veces que aparece cada nombre');
let peoples = [
    { name: 'Bob', id: 1 }, { name: 'Jhon', id: 2 }, { name: 'Alex', id: 3 }, { name: 'Jhon', id: 4 }
];
console.log(peoples);
console.log("=======================================");
let names = peoples.map((people) => { return people.name });//Mapeo peoples obteniendo solo name:

let countName = names.reduce((cont, name) => { //cont funcion acumulador, name cada elemnto del array
    cont[name] = (cont[name] || 0) + 1;//el acumulador incrementa cada existe un name
    return cont;
}, {});

console.log(countName);