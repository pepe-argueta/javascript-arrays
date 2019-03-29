console.log('Arreglos .filter Veces cada Nombre');
console.log("============================");

let peoples = [
    { name: 'Bob', id: 1 }, { name: 'Jhon', id: 2 }, { name: 'Alex', id: 3 }, { name: 'Jhon', id: 4 }
];

let names = peoples.map((people) => { return people.name });

let countName = names.reduce((cont, name) => {
    cont[name] = (cont[name] || 0) + 1;
    return cont;
}, {});

console.log(countName);