const carritoCompra = [
    { nombre: "Monitor de 32\"", precio: 200},
    { nombre: "Cajon de CPU", precio: 350},
    { nombre: "Teclado Colorico", precio: 130},
    { nombre: "Disco Duro SSD", precio: 1200},
    { nombre: "Mouse Inalambrico", precio: 80},
    { nombre: "Memoria Usb", precio: 30}
];


// Recorre el arreglo dependiendo de la cantidad de valores que esta tenga 
for( let i = 0; i < carritoCompra.length; i++) {
    // Si se quiere acceder al valor dentro del objeto se coloca el valor deseado
    console.log( `${carritoCompra[i].nombre} - Precio: ${carritoCompra[i].precio}` );
};



// Metodo forEach
carritoCompra.forEach( function(producto) {
    console.log( `${producto.nombre} - Precio: ${producto.precio} ` );
} );

console.log(carritoCompra);


















/*
// De aquí en adelante estaremos viendo una serie de métodos de arreglos
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

// Recorrer un arreglo de la forma tradicional y mostrar su contenido...
for(let i = 0; i < carrito.length; i++ ){
    console.log( `Articulo: ${ carrito[i].nombre } Precio: $ ${carrito[i].precio} ` )
}

// ForEach
carrito.forEach( function(producto) {
    console.log( `Articulo: ${ producto.nombre } Precio: $ producto.precio} ` )
})
*/