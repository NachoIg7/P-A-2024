// 1. Función Suma:
// ○ Crea una función llamada sumar que tome dos números como
// parámetros y devuelva su suma. Prueba la función con diferentes
// números.
// function suma(a, b) {
//     return a + b;
// }
// console.log(suma(5, 10));
// console.log(suma(1, 8));


// 2. Función que Multiplica:
// ○ Crea una función llamada multiplicar que tome dos números como
// parámetros y devuelva su producto. Prueba la función con diferentes
// valores.

// function producto(a, b) {
//     return a * b;
// }
// console.log(producto(4, 5));

// 3. Función con Parámetro por Defecto:
// ○ Crea una función llamada saludar que tome un parámetro nombre
// con un valor por defecto de "Invitado". La función debe devolver
// // "Hola, [nombre]".

// function saludar(nombre) {
//     return "Hola, " + nombre;
// }
// console.log(saludar("Invitado"));


// 4. Función que Devuelve un Objeto:
// ○ Crea una función llamada crearPersona que tome nombre y edad
// como parámetros y devuelva un objeto con esas propiedades.

// function crearPersona(nombre, edad) {
//     return { nombre, edad };
// }

// console.log(crearPersona("Nacho", 27));


// 5. Función que Modifica un Objeto:
// ○ Crea una función llamada actualizarEdad que tome un objeto
// persona y un número nuevaEdad, y actualice la propiedad edad del
// objeto.
// function actualizarEdad(persona, nuevaEdad) {
//     persona.edad = nuevaEdad;
// }
// console.log(actualizarEdad({ nombre: "Nacho", edad: 27 }, 28));


// 6. Función Recursiva:
// ○ Crea una función recursiva llamada factorial que calcule el factorial
// de un número dado.
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(5));

// 7. Función con Función Interna:
// ○ Crea una función llamada despedir que contenga una función
// interna adios. despedir debe devolver el resultado de llamar a adios.


// function despedir() {
//     return "Adios";
// }

// console.log(despedir());



// 8. Función que Usa Otra Función:
// ○ Crea una función llamada procesarArray que tome un array y una
// función como parámetros, y aplique la función a cada elemento del
// array. Usa una función como parámetro para multiplicar cada
// número por 2.
// function procesarArray(array, funcion) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] = funcion(array[i]);

//     }
// }

// const array = [1, 2, 3, 4, 5];
// procesarArray(array, (x) => x * 2);
// console.log("Cada valor multiplicado por 2")
// console.log(array);

// procesarArray(array, (x) => x * x);
// console.log("Cada valor multiplicado por si mismo")
// console.log(array);

// 9. Función que Devuelve Otra Función:
// ○ Crea una función llamada crearMultiplicador que tome un número x
// y devuelva una nueva función que multiplique cualquier número por
// x.
// function crearMultiplicador(x) {
//     return function(y) {
//         return x * y;
//     }
// }
// const multiplicador = crearMultiplicador(5);
// console.log(multiplicador(10));


// 10. Función Anónima:
// ○ Crea una función anónima que sume dos números y la asigna a una
// variable llamada sumarAnonima. Luego, invoca la función a través de
// esa variable.
function anonima(a, b) {
    return a + b;
}
const sumarAnonima = (a, b) => a + b;
console.log(sumarAnonima(5, 10));
