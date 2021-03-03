// Los objetos son valores agrupados a una variable por medio de: {}

const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 200,
    disponible: true
};

const medidas = {
    alto: 15,
    ancho: 30
};


console.log(producto);
console.log(medidas);


// Unir dos objetos

// Object.assign
const resultado1 = Object.assign(producto, medidas);

// Metodo Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas };

console.log(resultado1);
console.log(resultado2);






/*
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}


const medidas = {
    peso: '1 kg',
    medida: '1 metro'
}


// Otra forma de hacerlo que se considera más moderna es con algo llamado el Spread Operator o Rest Operator

const resultado = { ...producto, ...medidas};

console.log(resultado);
*/