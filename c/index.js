console.log('Arreglos .filter');
console.log("============================");

var peoples = [{
    id: 1,
    name: 'Jhon',
    age: 28,
}, {
    id: 2,
    name: 'Jan',
    age: 31,


}, {
    id: 3,
    name: 'peter',
    age: 55,


}];


let people = peoples.filter((p) => {
    if (p.age < 35) {
        return p;
    }
});

console.log(people);