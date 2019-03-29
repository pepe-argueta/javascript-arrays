console.log('Arreglos String Clientes Empleados');
console.log("const clientes = ['Jose', 'Julio', 'Juan'];const empleados = ['Mario', 'Maria', 'Martha'];");
const clientes = ['Jose', 'Julio', 'Juan'];
const empleados = ['Mario', 'Maria', 'Martha'];

console.log("=============Concat================"); //Opcion correcta
console.log("clientes.concat(empleados)")
console.log(clientes.concat(empleados)); //Combina los 2 array

console.log("=============Join================");
console.log(clientes.join(empleados)); //une en un string y ocupa a cada item empleados como separador en el join

console.log("=============push================");
console.log("Operador de propagacion spread ...miArray clientes.push(...empleados)");
clientes.push(...empleados);
console.log(clientes);