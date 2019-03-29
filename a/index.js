console.log('Combinar en  contactos los array Clientes, Empleados');
console.log("const clientes = ['Jose', 'Julio', 'Juan'];const empleados = ['Mario', 'Maria', 'Martha'];");
const clientes = ['Jose', 'Julio', 'Juan'];
const empleados = ['Mario', 'Maria', 'Martha'];
let contactos = [];

console.log("=============Concat================"); //Opcion correcta
console.log("clientes.concat(empleados)")
contactos = clientes.concat(empleados); //Combina los 2 array
console.log(contactos);

console.log("=============Join================");
console.log(clientes.join(empleados)); //une en un string y ocupa a cada item empleados como separador en el join

console.log("=============push===... Un array Literal mas poderoso=============");
//Tambien funciona solo hay que utlizar el operador ...
console.log("Operador de propagacion spread ...miArray clientes.push(...empleados)");
//contactos.push(...clientes, ...empleados);//
//console.log(contactos);

console.log("============slice================");
//Solo devuelve una copia de una parte del array dentro de un nuevo array
console.log(contactos = clientes.slice(0,clientes.length) + empleados.slice(0,empleados.length));
//Mas dificil de definir en el nuevo array