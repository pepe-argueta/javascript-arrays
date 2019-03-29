console.log('HTML que presente los  datos.');
console.log("=============================");

var personArr = [{
        "personId": 123,
        "name": "Jhon",
        "city": "Melbourne",
        "phoneNo": "12345678"
    },
    {
        "personId": 124,
        "name": "Amelia",
        "city": "Sydney",
        "phoneNo": "12345678"
    },
    {
        "personId": 125,
        "name": "Emily",
        "city": "Perth",
        "phoneNo": "12345678"
    },
    {
        "personId": 126,
        "name": "Abraham",
        "city": "Perth",
        "phoneNo": "12345678"
    }
];

const fields = Object.keys(personArr[0]);//Obtengo las claves de cada elemento del objeto
const tbody = document.querySelector('#tbody');

personArr.map(element => {
    const tr = document.createElement('tr');//creo un elemnto tr
    fields.forEach(field => {
        const td = document.createElement('td');//crear un elemento td
        td.innerHTML = `${element[field]}`;//agrego al html de cada field
        tr.appendChild(td);// td to tr
    });
    tbody.appendChild(tr);// tr to tbody
});