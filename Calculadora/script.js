// Función para añadir texto al display (pantalla)
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Función para borrar el contenido del display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Función para calcular el resultado
function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Usamos eval para realizar el cálculo
    } catch (e) {
        display.value = 'Error';
    }
}
