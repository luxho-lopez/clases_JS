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

// push - agrega el valor dentro del array en la posicion vacia que encuentre al final
carritoCompra.push(producto1);
carritoCompra.push(producto2);

const producto3 = {
    nombre: "Peluche",
    precio: 120
};

// unshif - forza al valor a colocarse en la pocision numero 0
carritoCompra.unshift(producto3);

console.table(carritoCompra);












/*
// Supongamos que creamos un carrito de compras desde la consola, más adelante lo haremos ya desde una interfaz web.
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

carrito.push(producto);
carrito.push(producto2);


// Añadir al Inicio del carrito...

const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}
carrito.unshift(producto3);

// Existen otras formas más modernas de hacerlo... pero esta sintaxis aún se utiliza mucho asi que veamos como hacerlo en el proximo video

console.log(carrito);
*/