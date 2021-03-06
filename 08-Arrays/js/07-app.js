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
    nombre: "Cajon CPU",
    precio: 350
};

// push - agrega el valor dentro del array en la posicion vacia que encuentre al final
carritoCompra.push(producto1);
carritoCompra.push(producto2);
carritoCompra.push(producto3);

const producto4 = {
    nombre: "Peluche",
    precio: 120
};

// unshif - forza al valor a colocarse en la pocision numero 0
carritoCompra.unshift(producto4);
console.table(carritoCompra);

// Eliminar elemento intermedios
carritoCompra.splice(1, 1);
console.table(carritoCompra);

// Eliminar ultimo elemento del arreglo
carritoCompra.pop();
console.table(carritoCompra);

// Eliminar del principio del arreglo
carritoCompra.shift();
console.table(carritoCompra);
























/*
const carrito = [];

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
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}
carrito.unshift(producto3);

// Veamos como Eliminar elementos de un arreglo... con un objeto solo se utiliza delete, los arreglos también son sencillos de manipular

// Eliminar el primer elemento...
// carrito.shift();

// // Eliminar el ultimo elemento...
// carrito.pop();


// Ahora supongamos que deseas eliminar del centro...
carrito.splice(1,0); // el segundo parametro es que tantos elementos vamos a borrar, 0 significa nada, entonces seria igual a no tener nada, si no le pasas un valor va a borrar todos a partir de ahi..
// carrito.splice(1, 2);



console.log(carrito);
*/