// Los objetos son valores agrupados a una variable por medio de: {}
// Objetos dentro de objeto

const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 200,
    disponible: true,
    especification: {
        dimension: {
            alto: "30 cm",
            largo: "60 cm"
            
        },
        color: {
            primario: "Rojo",
            secundario: "Negro"
        }
    }
};

console.log(producto);
console.log(producto.especification);
console.log(producto.especification.color);
console.log(producto.especification.color.primario);




/*
// Veamos como hacer destructuring de un objeto que esta dentro de otro objeto..

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion : {
        peso: '1kg',
        medida: '1m'
    }
}


const { nombre, informacion, informacion: { peso, medida } } = producto;


console.log(nombre)
console.log(informacion)
console.log(peso)
console.log(medida)
*/