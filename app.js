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

    //muestra la lista
    mostrarLista();

    //Limpia el campo de entrada
    input.value = "";  
}


//Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
    //Obtener el elemento de la lista en HTML
    const lista = document.getElementById("listaAmigos");
    //Limpia  la lista existente para evitar registros duplicados
    lista.innerHTML = "";
    //Recorrer el array de amigos
    for (let i = 0; i < amigos.length; i++){
        //Crear un elemento <li> para cada amigo
        const li = document.createElement("li");
        li.textContent = amigos[i];
        //Agregar el <li> a la lista
        lista.appendChild(li);
    }
}