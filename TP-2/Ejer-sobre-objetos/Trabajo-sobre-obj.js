
// const libro = {
//         titulo : 'Programacion avanzada',
//         autor : 'Ernesto',
//         añoDePublicacion: 2024
// }
// console.log (libro)

const estudiante = { 
        nombre : 'Ignacio',
        edad : 27,
        direccion : {
            calle : 'roberto 1233',
            ciudad : 'c del u',
            pais : 'argentina'
        }
}
console.log(`El estudiante ${estudiante.nombre} vive en: ${estudiante.direccion.pais},
     en la ciudad de ${estudiante.direccion.ciudad}, con domicilio en calle ${estudiante.direccion.calle}`);


// 3. Métodos en Objetos:
//      ○ Añade un método llamado descripción al objeto libro que devuelva
//      una cadena describiendo el título y el autor del libro. Invoca este
//      método e imprime el resultado.

const libro = {
        titulo : 'Programacion avanzada',
        autor : 'Ernesto',
        añoDePublicacion: 2024,
        descripcion:  function(){
                return `El libro "${this.titulo}" fue escrito por ${this.autor}, en el año ${this.añoDePublicacion}, trata sobre el lenguaje de programacion Javascript.`


        }
};
console.log (libro.descripcion());


// 4. Iteración sobre Propiedades de un Objeto:
//      ○ Crea un objeto producto con propiedades como nombre, precio y
//      disponible. Usa un bucle for...in para imprimir todas las propiedades
//      y sus valores.
// 5. Actualización de Propiedades:
//      ○ Modifica el valor de la propiedad precio del objeto producto y luego
//      imprime el objeto completo para verificar el cambio.
const producto = {
        nombre : "Computadora",
        precio :  10000,
        disponible : true,
        categoria : "Electronica",
        marca : "Lenovo"
};

for (const propiedad in producto){
        console.log(`${propiedad}: ${producto[propiedad]}`)
}

producto.precio = 20000;
console.log(producto);
     
// 6. Comprobación de Propiedades:
//      ○ Crea una función llamada tienePropiedad que tome un objeto y una
//      cadena como parámetros, y devuelva true si el objeto tiene una
//      propiedad con ese nombre, o false en caso contrario.
function tienePropiedad(obj,propiedad){
        return Object.prototype.hasOwnProperty.call (obj,propiedad);
}

console.log(tienePropiedad(producto,'año'));

// 7. Eliminación de Propiedades:
//      ○ Elimina la propiedad disponible del objeto producto. Imprime el
//      objeto antes y después de eliminar la propiedad.

console.log(producto);
delete producto.disponible;
console.log(producto);
     
// 8. Combinar Objetos:
//      ○ Usa Object.assign para combinar dos objetos, persona1 y persona2,
//      en un nuevo objeto. Imprime el resultado.
const persona1 = {
        nombre  : "Juan",
        edad : 22
}
const persona2 = {
        nombre : "Maria",
        edad : 24
}
const newPersona = Object.assign (persona1,persona2);
console.log(newPersona);

     
// 9. Copiar Objetos:
//      ○ Crea una copia profunda del objeto estudiante utilizando el método
//      JSON.parse y JSON.stringify. Modifica la copia y verifica que el objeto
//      original no haya sido alterado.


const estudianteCopia = JSON.parse(JSON.stringify(estudiante));
                estudianteCopia.edad = 30;

console.log(estudiante);
console.log(estudianteCopia);
                
     
// 10. Métodos Getters y Setters:
//      Añade un getter y un setter al objeto libro para la propiedad
// añoDePublicacion. Usa el setter para actualizar el año de publicación
// y luego usa el getter para leerlo.

const libroNuevo = { 
        titulo : "El Señor de los Anillos",
        autor : "J.R.R. Tolkien",
        _añoDePublicacion : 1954,
        
        get añoDePublicacion(){
                return this._añoDePublicacion;
        },
        set añoDePublicacion(nuevoAño) {
                if (nuevoAño < 0){
                throw new Error ("El año de publicación no puede ser negativo");
                }
                this._añoDePublicacion = nuevoAño;
                }
        }        
libroNuevo.añoDePublicacion = 1960; 

console.log(libroNuevo.añoDePublicacion)

     