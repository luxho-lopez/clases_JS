const aprendiendo1 = function(tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
}

aprendiendo1('JavaScript');




//Arrow Function
// Cuando solo se le pasa un parametro, los parentesis son opcionales
const aprendiendo2 = (tecnologia1, tecnologia2) => `Aprendiendo ${tecnologia1} y ${tecnologia2}`;

console.log(aprendiendo2('JavaScript', 'NodeJS'));



















/*
// Parametros en un arrow Function...


// Parametros
const aprendiendo = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

// si es un solo parmetro no ocupamos el parentesis
const aprendiendo = tecnologia => console.log(`aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

// multiples parametros si requieren parentesis
const aprendiendo = (tecn1, tecn2) => console.log(`Aprendiendo ${tecn1} ${tecn2}`);
aprendiendo('JS', 'ES');

*/