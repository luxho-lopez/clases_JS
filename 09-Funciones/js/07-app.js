iniciarApp();

function iniciarApp() {
    console.log("Inicializando Aplicación...");
    
    segundaFuncion();
}

function segundaFuncion() {
    console.log("Desde la segunda Función");

    autenticarUsuario('Alfredo');
}

function autenticarUsuario(usuario) {
    console.log("Autenticando Usuario... Espere...");
    console.log(`Usuario Autenticado Exitosamente: ${usuario}`);
}

























/*
// Como se comunican las funciones entre si...

// Tus funciones se van a comunicar, en lugar de tener una gran función con 800 lineas es recomendable dividirla en pequeñas partes, realizan una operación y se van hacia la otra función...

iniciarApp();

function iniciarApp() {
    console.log('Iniciando App...');
    segundaFuncion();
}


function segundaFuncion() {
    console.log('Desde la segunda función...')
    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario...');
    console.log(`Usuario autenticado con éxito ${usuario} `)
}


*/