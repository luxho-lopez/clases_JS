const carritoCompra = [];


// Definir un producto
const producto1 = {
    nombre: "Monitor de 40\"",
    precio: 500
};

const producto2 = {
    nombre: "Telcel Motorola",
    precio: 900
};

const producto3 = {
    nombre: "Peluche",
    precio: 120
};



let resultado;

resultado = [...carritoCompra, producto1];

resultado = [producto3, ...resultado, producto2]


console.table(resultado);















/*
// Veamos como añadir un elemento a un arreglo utilizando el Spread Operator o Rest Operator...
const carrito = [];

// Añadir un elemento al carrito...
const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}

// Para añadir producto al arreglo simplemente agregamos...
let resultado = [...carrito, producto];
 resultado = [...resultado, producto2];

 // Para añadir al inicio...
 resultado = [producto3, ...resultado];

//Esta forma se conoce más como Declarativa mientras que la del video anterior es más imperativa, ambas son muy utilizadas en programación JavaScript

console.log(resultado);
*/