// 1. Agregar y Eliminar Elementos:
// ○ Crea un array frutas con los valores ["manzana", "banana", "pera"]. Usa
// push para agregar una fruta al final, y pop para eliminar la última
// fruta.

// let frutas = ["manzana", "banana", "pera"];	
// frutas.push("naranja");
// console.log(frutas);
// frutas.pop();
// console.log(frutas);


// 2. Array Bidimensional:Crea un array bidimensional llamado matriz con los valores [[1, 2, 3],
// [4, 5, 6], [7, 8, 9]]. Accede al elemento 5 e imprímelo en la consola.

// let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(matriz[1][1]);



// 3. Iterar sobre un Array:
// ○ Usa un bucle for para iterar sobre el array frutas e imprimir cada
// elemento.
// let frutas = ["manzana", "banana", "pera" , "naranja"];
// for (let i=0; i < frutas.length; i++){
//     console.log(frutas[i]); 
// }



// 4. Uso de map:
// ○ Crea una función llamada elevarAlCuadrado que tome un array de
// números y devuelva un nuevo array con cada número elevado al
// cuadrado. Usa map para implementar la función.

// function elevarAlCuadrado (numeros,resultado ){
//     for (let i=0; i < numeros.length; i++){
//         resultado[i] = numeros[i] * numeros[i];
//     }
// }

// let numeros = [1, 2, 3, 4, 5];
// let resultado = [];
// elevarAlCuadrado(numeros, resultado);
// console.log(resultado);


// 5. Uso de filter:
// ○ Crea una función llamada filtrarMayoresDe que tome un array de
// números y un valor de referencia, y devuelva un nuevo array solo con
// los números mayores que ese valor. Usa filter.

// function filtrarMayoresDe (numeros,valor){
    
//     resultado = numeros.filter((numeros) => numeros > valor);
           
// }
// let valor = 2;
// filtrarMayoresDe(numeros,valor);
// console.log(resultado);



// 6. Uso de reduce:
// ○ Crea una función llamada sumarElementos que tome un array de
// números y devuelva la suma de todos los elementos del array
// usando reduce.

// function sumarElementos (numeros) {
//     return numeros.reduce((a, b) => a + b, 0);
// }
// let resultado = sumarElementos(numeros);
// console.log(resultado);


// 7. Uso de some:
// ○ Crea un array de números llamado numeros y usa some para
// verificar si algún número es mayor que 10.

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
// let resultado = numeros.some((numeros) => numeros > 10);
// console.log(resultado);




// 8. Uso de every:
// ○ Crea un array de números llamado numeros y usa every para
// verificar si todos los números son positivos.
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
// let resultado = numeros.every((numeros) => numeros > 0);
// console.log(resultado);


// 9. Uso de find:
// ○ Crea un array de objetos llamados personas donde cada objeto
// tenga nombre y edad. Usa find para encontrar a la primera persona
// mayor de 30 años.

// let personas = [
//     { nombre: "Juan", edad: 25 },
//     { nombre: "Pedro", edad: 30 },
//     { nombre: "Maria", edad: 28 },
//     { nombre: "Luis", edad: 35 },
// ];

// mayorDe30 = personas.find ((personas) => personas.edad > 30);
// console.log(mayorDe30);


// 10. Uso de sort:
// ○ Crea un array de palabras y ordénalo alfabéticamente usando sort.

// let palabras = ["arbol", "casa", "mesa", "auto", "facultad", "libro", "programacion",
//      "backend", "estudiante"];

// console.log(palabras.sort());

