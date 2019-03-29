console.log('personas menores de 35 años .filter()');
console.log("=====================================");

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

let people = peoples.filter((people) => {
    if (people.age < 35) {//filtra cada elemento de peoples
        return people;
    }
});

console.log(people);