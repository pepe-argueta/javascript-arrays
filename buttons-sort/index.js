console.log("Hola desde Buttons Sort");
console.log('=========================')

const arrayNums = [10, 20, 3, 4, 7, 8, 9, 1];
//Ordena un Array
arrayNums.sort();

const div = document.querySelector('#listButtons');

arrayNums.forEach(num => {
    const p = document.createElement('p');
    p.innerHTML = `<span><button>${num}</button></span>`;
    div.appendChild(p);
});