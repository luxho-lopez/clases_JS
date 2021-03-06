// Los objetos son valores agrupados a una variable por medio de: {}

const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 200,
    disponible: true
};

// o, de esta forma aun mas reducida, acceder a multiples valores separados por coma
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);




// Destructiring en Arreglos
const numeros = [10,20,30,40,50];

// La primer variable del corchete, toma el primer valor del arreglo
const [ primero ] = numeros;
console.log(primero);

// Si se desea un valor de otra posicion, se colocan variables vacias separadas por comas
const [ , , tercero ] = numeros;
console.log(tercero);















/*
// Array Destructuring - Al igual que los objetos algunas veces quieres crear la variable y el valor del arreglo, veamos algunos ejemplos:


const numeros = [10,20,30,40,50];

const [primero, , segundo, tercero ] = numeros;


// console.log(numeros);
console.log(primero);
console.log(segundo);
console.log(tercero);

// Si quieres saltarte un valor, pon una coma....

// ahora, como extraes todos los otros valores, digamos que solo quieres crear la primer variable, mantener el arreglo original..

const [primero, , segundo, ...tercero ] = numeros;
*/