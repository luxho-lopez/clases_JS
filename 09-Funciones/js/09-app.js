const reproductor = {
    reproducir: function(nombre) {
        console.log(`Reproduciendo Cancion: ${nombre}`);
    },
    pausar: function() {
        console.log('Pausa');
    },
    crearPlaylist: function(nombrePlaylist) {
        console.log(`Creando PlayList: ${nombrePlaylist}`);
    },
    reproducirPlaylist: function(nombrePlaylist) {
        console.log(`Reproduciendo PlayList: ${nombrePlaylist}`);
    }
};

reproductor.reproducir('Lo que contruimos');
reproductor.pausar();

reproductor.borrar = function(nombre) {
    console.log(`Cancion eliminada... ${nombre}`);
};

reproductor.borrar('Lo que contruimos');
reproductor.crearPlaylist('Electronica Moderna');
reproductor.reproducirPlaylist('Electronica 90s');
















/*
// En este video veremos lo que son los métodos de propiedad, es decir son funciones con una sintaxis similar a las de un método..

// también llegan a ser muy comunes sobretodo porque es un objeto grande con todas las funciones...

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción id ${id}`);
    },
    pausar: function() {
        console.log('pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando canción con id: ${id}`)
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la Playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la Playlist ${nombre}`)
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

*/