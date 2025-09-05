// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Array para almacenar los nombres de los amigos
let amigos = [];

// funcion para agregar amigos al array
function agregarAmigo() {
    // Captura el valor del campo de entrada
    const input = document.getElementById("amigo");
    // trim elimina los espacios en blanco al principio y al final del campo
    const nombre = input.value.trim();
    
    //Validación de que no esta vacio el campo
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    //Actualiza el array de amigos
    amigos.push(nombre);

    //Limpia el campo de entrada
    input.value = "";
    
}