const reproductor = {
    cancion: '',
    reproducir: nombre => console.log(`Reproduciendo Cancion: ${nombre}`),
    pausar: () => console.log('Pausa'),
    crearPlaylist: nombrePlaylist => console.log(`Creando PlayList: ${nombrePlaylist}`),
    reproducirPlaylist: nombrePlaylist => console.log(`Reproduciendo PlayList: ${nombrePlaylist}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo: ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`Nueva Cancion Agregada: ${this.cancion}`)
    }
};

// Cuando se agrega a traves de SET no se usa los parentesis
reproductor.nuevaCancion = 'El Favor De La Soledad';
// Cuando se obtiene a traves de GET no se usa los parentesis
reproductor.obtenerCancion;


reproductor.reproducir('Lo que contruimos');
reproductor.pausar();

reproductor.borrar = nombre => console.log(`Cancion eliminada... ${nombre}`);

reproductor.borrar('Lo que contruimos');
reproductor.crearPlaylist('Electronica Moderna');
reproductor.reproducirPlaylist('Electronica 90s');

























/*
// Arrow functions en métodos de propiedad


const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando canción con id: ${id}`),
    crearPlaylist: nombre =>  console.log(`Creando la Playlist ${nombre}`),
    reproducirPlaylist: nombre =>  console.log(`Reproduciendo la Playlist ${nombre}`),

    // También existen los Set y Get si tienes experiencia con esos términos, y si no, set es para añadir un valor, get es para obtenerlo...

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}
reproductor.reproducir(30);
reproductor.pausar();

// Tambien los métodos pueden quedarse por fuera
// reproductor.borrar = function(id) {
    
// }
reproductor.borrar(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');


// Probando set y get se utilizando de la siguiente forma
reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;
*/