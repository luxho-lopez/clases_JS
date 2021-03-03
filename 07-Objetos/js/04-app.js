// Los objetos son valores agrupados a una variable por medio de: {}

const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 200,
    disponible: true
};


// extraer valor de un objeto y asignarlo a una variable
const nombre1 = producto.nombre;
console.log(nombre1);

const nombre2 = producto['nombre'];
console.log(nombre2);


// Metodo Destructuring... opcion mas reducida; extrae el valor y crea la variable en un paso
// const { nombre } = producto;
// const { precio } = producto;
// const { disponible } = producto;

// console.log(nombre);
// console.log(precio);
// console.log(disponible);


// o, de esta forma aun mas reducida, acceder a multiples valores separados por coma
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);



/*
// Un objeto puede contener cualquier tipo de dato dentro de el, incluso puede tener otros objetos:, esto se le conoce como Objetos anidados.


const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion : {
        peso: '1kg',
        medida: '1m'
    }
}



console.log(producto); // Puedes ver que tenemos un objeto dentro de un objeto.

// De nueva cuenta para acceder a un objeto, se utiliza la sintaxis de punto

console.log(producto.informacion);
console.log(producto.informacion.peso);
console.log(producto.informacion.medida);
*/