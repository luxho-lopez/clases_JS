// Los objetos son valores agrupados a una variable por medio de: {}

const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 200,
    disponible: true
};


// Agregar nuevas propiedades a un objeto
producto.imagen = "Imagen.jpg";

// eliminar propiedad de un objeto
delete producto.disponible;



// Otra forma de hacerlo y que también es nueva, es con algo llamado object destructuring...
const { nombre } = producto;
const { precio } = producto;
const { imagen } = producto;
console.log(nombre);
console.log(precio);
console.log(imagen);

 

console.log(producto);









/*
// Veamos como asignar variables hacia un objeto


const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el último elemento puede o no tener la ,
}


// const nombre = producto.nombre;




// Otra forma de hacerlo y que también es nueva, es con algo llamado object destructuring...

// Destructuring significa, sacar de una esctructura, puede ser complejo, no lo es tanto sobretodo cuando lo practicas

const { nombre } = producto;


// si deseas extraer más variables;
const { precio } = producto;

console.log(nombre)
console.log(precio)

// O puedes hacerlo mejor con 

const {nombre, precio} = producto;
*/