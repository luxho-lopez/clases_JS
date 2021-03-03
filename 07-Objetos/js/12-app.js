// Los objetos son valores agrupados a una variable por medio de: {}

// Obeject Literal
const producto1 = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 200,
    disponible: true
};


console.log(producto1)


// Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre,
    this.precio = precio,
    this.disponible = true
};
// Agrega los valores a un Objeto Constructor
const producto2 = new Producto("Monitor de 50 pulgadas", 500)
const producto3 = new Producto("Monitor de 85 pulgadas", 850)


console.log(producto2)
console.log(producto3)







/*
// En este video estaremos viendo la palabra this...
// This se refiere al valor sobre el objeto o context que se esta ejecutando en ese momento


// Aún no hemos visto las funciones, pero lo haremos en los próximos capitulos...

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        return `El Producto: ${this.nombre}  tiene un precio de ${this.precio}`;
    }
}

console.log(producto.mostrarInfo() );
*/