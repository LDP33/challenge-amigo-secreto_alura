// Array para almacenar los nombres de los amigos
let listaDeAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del campo de texto
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre');
        return;
    }
    // Agregar el nombre a la lista de amigos
    listaDeAmigos.push(nombreAmigo);
    
    // Actualizar la lista visible
    actualizarListaVisible();

    // Limpiar el campo de texto después de agregar
    inputAmigo.value = '';
    
    // Enfocar nuevamente el campo de texto para facilitar la entrada de más nombres
    inputAmigo.focus();
}

// Función para actualizar la lista visible en la página
function actualizarListaVisible() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    
    // Limpiar la lista actual
    listaAmigosElement.innerHTML = '';
    
    // Agregar cada amigo como un elemento de lista
    for (let i = 0; i < listaDeAmigos.length; i++) {
        const amigo = listaDeAmigos[i];
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Verificar que haya al menos un amigo en la lista
    if (listaDeAmigos.length === 0) {
        alert('Agregue al menos un amigo antes de sortear');
        return;
    }
    
    // Seleccionar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    
    // Obtener el nombre del amigo seleccionado
    const amigoSeleccionado = listaDeAmigos[indiceAleatorio];
    
    // Mostrar el resultado en la página
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `¡${amigoSeleccionado} ha sido seleccionado!`;
}

// Agregar evento para permitir presionar Enter en el campo de texto
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});