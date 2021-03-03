// Los objetos son valores agrupados a una variable por medio de: {}

// Metod estricto de javascript
"use strict";

const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 200,
    disponible: true
};
// Sella el objeto para no poder agregar ni eliminar valores, pero si lo puedes modificar
Object.seal(producto);


producto.disponible = false;

// delete producto.precio;

// producto.imagen = "imagen.jpg";


console.log(producto);

// para saber si un objeto esta sellado
console.log(Object.isSealed(producto));










/*
// Veamos como unir 2 objetos, esto llega a ser muy común ya que algunas veces en una base de datos obtienes el ID del cliente y también tienes los clientes que pertenecen a ese ID y te gustaría unirlos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}


const medidas = {
    peso: '1 kg',
    medida: '1 metro'
}

// Una forma de hacerlo es con el object method llamado assign

const resultado = Object.assign(producto, medidas);

// Otra forma de hacerlo que se considera más moderna es con El Spread Operator o Rest Operator, veamoslo en el siguiente video

console.log(resultado);
*/