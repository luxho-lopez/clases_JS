const carritoCompra = [
    { nombre: "Monitor de 32\"", precio: 200},
    { nombre: "Cajon de CPU", precio: 350},
    { nombre: "Teclado Colorico", precio: 130},
    { nombre: "Disco Duro SSD", precio: 1200},
    { nombre: "Mouse Inalambrico", precio: 80},
    { nombre: "Memoria Usb", precio: 30}
];


// Metodo map crea un nuevo arreglo a partir del primero
const carritoNuevo1 = carritoCompra.map( producto => `${producto.nombre} - Precio: ${producto.precio} `);

// Metodo forEach no crea un nuevo arreglo
carritoCompra.forEach( producto => console.log(`${producto.nombre} - Precio: ${producto.precio} `));



console.log(carritoNuevo1);



















/*
// ForEach y Map con arrow functions...

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]


const nuevoArray = carrito.map(  producto =>  `Articulo: ${ producto.nombre } Precio: $ producto.precio} `)

const nuevoArray2 = carrito.forEach( producto =>  console.log( `Articulo: ${ producto.nombre } Precio: $ producto.precio} `));

console.log(nuevoArray);
console.log(nuevoArray2);


// Los arrow functions si no se coloca el return y queda en una sola linea dan por implicito el return.. en el map

*/