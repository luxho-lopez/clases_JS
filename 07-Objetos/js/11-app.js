// Los objetos son valores agrupados a una variable por medio de: {}

const nombre = "Luxho";
const precio = 300;

const producto1 = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 200,
    disponible: true,
    mostrarInfo: function () {
        // la palabra reservada this, ayuda a busca la informacion dentro del objeto
        console.log(`El producto: ${this.nombre}, tiene un precio de: ${this.precio} Dolares`);
    }
};

const producto2 = {
    nombre: "Monitor de 50 Pulgadas",
    precio: 500,
    disponible: true,
    mostrarInfo: function () {
        // la palabra reservada this, ayuda a busca la informacion dentro del objeto
        console.log(`El producto: ${this.nombre}, tiene un precio de: ${this.precio} Dolares`);
    }
};

producto1.mostrarInfo();
producto2.mostrarInfo();