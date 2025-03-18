let entrada = document.getElementById("agrego");
let boton = document.getElementById("botonazo");



function agregar() {
    let elemento = entrada.value;
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = elemento; // Establecer el texto del <li> al valor del input

    // Obtener la lista <ul> y agregar el nuevo <li>
    if (elemento != "") {

        let lista = document.getElementById("lista");
        lista.appendChild(nuevoElemento);

        // Limpiar el campo de entrada
        entrada.value = "";
    } else {
        alert("No estas agregando nada")
    }
    
}

function borrar() {
    let lista = document.getElementById("lista");
    lista.removeChild(lista.lastChild);
}