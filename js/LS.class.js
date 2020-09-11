/**
 * LOCAL STORAGE
 */

class LocalStorageOperation {
    //Propiedades

    //Metodos
        static almacenarLibro(infoLibro) {
            let arrayLibros= this.obtenerLS();
            arrayLibros.push(infoLibro);

            localStorage.setItem('Libros', JSON.stringify(arrayLibros));
        }

        static obtenerLS() {
            if(localStorage.getItem('Libros') === null) {
                return []; //para asi tener un array vacio y no un null y asi poder hacer push
            }else {
                return JSON.parse(localStorage.getItem('Libros'));
            }
        }

        static limpiarStorage() {
            localStorage.clear();
            this.ultimoID();
        }

        static borrarLibro(idLibro) {
            let arrayLibros= this.obtenerLS();
            let arrayAux= [];
            console.log(arrayLibros);

            for(let i= 0; i<arrayLibros.length; i++) {
                if(idLibro != arrayLibros[i].id) {
                    arrayAux.push(arrayLibros[i]);
                }
            }
            console.log(arrayAux);
            localStorage.clear();
            if(arrayAux.length > 0) {
                localStorage.setItem('Libros', JSON.stringify(arrayAux));
            }
        }

        static ultimoID() {
            let arrayLibros= this.obtenerLS();

            if(arrayLibros == 0) {
                return 0;
            }else {
                return(arrayLibros[arrayLibros.length - 1].id);
            }
        }

        static buscarTitulo(titulo) {
            let arrayLibros= this.obtenerLS();

            let resultado= '';

            for(let i= 0; i<arrayLibros.length; i++) {
                if(arrayLibros[i].titulo.toLowerCase() == titulo) {
                    resultado= arrayLibros[i];
                }
            }
            
            return resultado;
        }

        
        
        static validaTitulo(titulo, autor) {
            let arrayLibros= this.obtenerLS();
            let band= 0;

            
            for(let i =0; i< arrayLibros.length; i++) {
                if((titulo == arrayLibros[i].titulo.trim().toLowerCase()) && (autor == arrayLibros[i].autor.trim().toLowerCase())) {
                    band= 1;
                }
            }

            return band;
        }
}