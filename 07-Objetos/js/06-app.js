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


// Metodo Destructuring (ejemplos sencillos en 03-app y 04-app)
const { nombre, precio, especification: { dimension: { alto } }, especification: { color: { primario } } } = producto;
console.log(nombre);
console.log(precio);
console.log(alto);
console.log(primario);


console.log(producto);








/*
// Si recuerdas una variable con const una vez que es definida no puede reasginarse su valor.


// const producto = "Monitor";
// producto = 'Tablet';
// console.log(producto);


// En el caso de los objetos veremos que tienen un comportamiento diferente, ya que sus propiedades si se pueden reescribir.

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}


console.log(producto);

producto.disponible = false;

console.log(producto); // Puedes ver que lo pudimos modificar, a pesar de ser const, veamos como prevenir esto en el próximo video
*/