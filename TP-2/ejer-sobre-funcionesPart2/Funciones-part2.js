// 1. Consumo de Datos desde una API:
// ○ Crea una función llamada obtenerUsuarios que haga una petición
// HTTP a la API https://jsonplaceholder.typicode.com/users usando
// fetch. Luego, imprime en la consola la lista de usuarios obtenida.

// function obtenerUsuarios () {
//     fetch ('https://jsonplaceholder.typicode.com/users')
//     .then (response => response.json())
//     .then (data => console.log(data))
//     .catch (error => console.log('Error al consumir la API: ',error));
// }

// obtenerUsuarios ();


// 2. Procesamiento de Datos de una API:
// ○ Usando la función obtenerUsuarios, crea otra función llamada
// imprimirNombresDeUsuarios que filtre y muestre solo los nombres
// de los usuarios.

// function imprimirNombresDeUsuarios () {
//     fetch ('https://jsonplaceholder.typicode.com/users')
//         .then (respuesta => respuesta.json())
//         .then (datos => {
//             const nombres = datos.map (user => user.name);
//             console.log (nombres);
//         })
//         .catch (error => console.log('Error al consumir la API: ',error));
// }

// imprimirNombresDeUsuarios ();




// 3. Autenticación Simulada:
// ○ Crea una función llamada autenticarUsuario que tome un objeto
// credenciales con usuario y contraseña, y verifique si coinciden con
// un usuario predefinido. La función debe devolver true si la
// autenticación es exitosa y false en caso contrario.

// function autenticarUsuario (credenciales) {
//     return credenciales.user === 'admin' && credenciales.password === '1234';
// }
// const credenciales = {user: 'admin', password: '1234'};
// console.log (autenticarUsuario (credenciales));

// const credenciales2 = {user : 'nacho', password : '123123123'};
// console.log (autenticarUsuario (credenciales2));

// 4. Transformación de Datos:
// ○ Crea una función llamada mapearUsuarios que tome un array de
// usuarios obtenidos de la API y devuelva un nuevo array con solo las
// propiedades nombre y email de cada usuario.

// function mapearUsuarios (array){
//     fetch ('https://jsonplaceholder.typicode.com/users')
//         .then (response => response.json())
//         .then (data => {
//             const usuarios = data.map (user => {
//                 const {name, email} = user;
//                 return {name, email};
//             })
//             console.log (usuarios);
//         })
//         .catch (error => console.log('Error al consumir la API: ',error));

// }

// console.log (mapearUsuarios ());

// 5. Validación de Formularios:
// ○ Crea una función llamada validarFormulario que tome un objeto con
// los campos nombre, email y password. La función debe devolver true si todos los campos están presentes
// y no están vacíos, y false en caso contrario.

// function validarFormulario(objeto) {
//     const camposRequeridos = ['nombre', 'email', 'password'];
//     const objetoValido = camposRequeridos.every(campo => {
//       return Object.prototype.hasOwnProperty.call(objeto, campo) && objeto[campo] !== '';
//     });
//     return objetoValido;
// }
// --every() para verificar si todos los campos están presentes en el objeto y no están vacíos. 
// El método every() devuelve true si todos los elementos del arreglo cumplen con la condición,
//  y false en caso contrario.
// --Object.prototype.hasOwnProperty.call() para verificar si el objeto tiene la propiedad correspondiente al campo actual.
//  Esto es para evitar errores si el objeto no tiene la propiedad.
// const formulario = {    
//     nombre : 'nacho',
//     email : 'nacho@nacho',
//     password : '1234'
// };

// const formulario2 = {
//     nombre : 'juan',
//     email : 'juan@hotmal.com',
//     password : ''
// };
// console.log (validarFormulario (formulario));
// console.log (validarFormulario (formulario2));



// 6. Paginación de Datos:
// ○ Crea una función llamada obtenerPagina que tome un array de
// datos y un número de página. La función debe devolver los
// elementos correspondientes a esa página, asumiendo que cada
// página tiene 5 elementos.

// function obtenerPagina (array, pagina) {
//     const inicio = (pagina - 1) * 5;
//     const fin = inicio + 5;
//     return array.slice(inicio,fin);
// }
// const array = [1,2,3,4,5,6,7,8,9,10];
// console.log (obtenerPagina (array, 1));
// console.log (obtenerPagina (array, 2));
// console.log (obtenerPagina (array, 3));



// 7. Envío de Datos a una API:
// ○ Crea una función llamada enviarDatos que tome un objeto data y
// haga una petición POST a la API
// https://jsonplaceholder.typicode.com/posts. La función debe
// imprimir la respuesta de la API.

// function enviarDatos (data) {
//     fetch ('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then (response => response.json())
//     .then (data => console.log(data))
//     .catch (error => console.log('Error al consumir la API: ',error));
// }

// const dato = {
//     userId: 1,
//     title: 'nacho',
//     body: 'nacho',
// };

// enviarDatos (dato);


// 8. Búsqueda de Usuarios:
// ○ Crea una función llamada buscarUsuarioPorEmail que tome un array
// de usuarios y un email como parámetros, y devuelva el usuario que
// coincida con el email proporcionado. Usa el método find para
// implementarlo.

// function buscarUsuarioPorEmail (array, email) {
//     return array.find (user => user.email === email);
// }

// const usuarios = [
//     {name: 'nacho', email: 'nacho@nacho'},
//     {name: 'juan', email: 'juan@juan'},
//     {name: 'pedro', email: 'pedro@pedro'},
// ];

// console.log (buscarUsuarioPorEmail (usuarios, 'nacho@nacho'));


// 9. Generación de Token de Autenticación:
// ○ Crea una función llamada generarToken que tome un objeto usuario
// y devuelva un token JWT simulado como una cadena. Puedes usar
// una función como btoa (Base64) para simular la generación del
// token.


// function generarToken (user) {
//     return btoa(JSON.stringify(user));
// }

// const usuario = {
//     name: 'nacho',
//     email: 'nacho@nacho',
// };

// console.log (generarToken (usuario));



// 10. Actualización de Información del Usuario:
// ○ Crea una función llamada actualizarUsuario que tome un objeto
// usuario y una lista de cambios a aplicar. La función debe retornar el
// usuario con las propiedades actualizadas.

function actualizarUsuario (usuario,cambios) {
    return {...usuario, ...cambios};
}

const usuario = {
    name: 'nacho',
    email: 'nacho@nacho',
};
const cambios = {
    name: 'ignacio',
    email: 'ignacio@hotmail.com',
};
console.log (actualizarUsuario (usuario,cambios));