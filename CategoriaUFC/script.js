

function tuCategoria() {
    let pantalla = document.getElementById("display");
    let peso = parseFloat(pantalla.value);
    let devolucion = document.getElementById("laDevolucion")
    if (peso < 52.3) {
                devolucion.textContent = `Categoría: PAJA`;
    } else if( peso >= 52.3 && peso < 56.7) {
        devolucion.textContent = `Categoría: MOSCA`;
    } else if( peso >= 56.7 && peso < 61.2) {
        devolucion.textContent = `Categoría: GALLO`;
    } else if( peso >= 61.2 && peso < 65.8) {
        devolucion.textContent = `Categoría: PLUMA`;
    } else if( peso >= 65.8 && peso < 70.3) {
        devolucion.textContent = `Categoría: LIGERO`;
    } else if( peso >= 70.3 && peso < 77.1) {
        devolucion.textContent = `Categoría: WELTER`;
    } else if( peso >= 77.1 && peso < 83.9) {
        devolucion.textContent = `Categoría: MEDIANO`;
    } else if( peso >= 83.9 && peso < 93) {
        devolucion.textContent = `Categoría: SEMIPESADO`;
    } else if( peso >= 93 && peso < 120.2) {
        devolucion.textContent = `Categoría: PESADO`;
    } 
    
}

