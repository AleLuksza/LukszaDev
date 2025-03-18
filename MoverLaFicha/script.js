const TAB_ANCHO = 10;  // Ancho del tablero (en celdas)
const TAB_ALTO = 10;   // Alto del tablero (en celdas)
let tablero = [];

// Inicializamos la matriz 10x10
for (let x = 0; x < TAB_ALTO; x++) {
    let fila = [];
    for (let y = 0; y < TAB_ANCHO; y++) {
        fila.push(0);  // Inicializamos todas las celdas con 0 (vacías)
    }
    tablero.push(fila);  // Añadimos la fila al tablero
}

// Función para dibujar el tablero
function drawBoard() {
    const contenedor = document.getElementById('tablero');
    contenedor.innerHTML = "";  // Limpiar cualquier contenido previo

    // Recorrer la matriz `tablero` y dibujar cada celda
    for (let row = 0; row < TAB_ALTO; row++) {
        for (let col = 0; col < TAB_ANCHO; col++) {
            const block = document.createElement('div');
            block.classList.add('block');

            // Asignar color a la celda dependiendo de su valor en la matriz
            if (tablero[row][col] === 1) {
                block.style.backgroundColor = 'red';  // Celda ocupada por una pieza
            } else {
                block.style.backgroundColor = '#ddd';  // Celda vacía
            }

            contenedor.appendChild(block);
        }
    }
}

// Llamamos a la función para dibujar el tablero
drawBoard();

function cambiarCelda() {
    tablero[5][5] = 1;
    drawBoard();

}

let celdaDibujada = cambiarCelda();
cambiarCelda();

function moverCeldaDerecha() {
    for (let row = 0; row < TAB_ALTO; row++) {
        for (let col = 0; col < TAB_ANCHO; col++) {
            if (tablero[row][col] === 1) {
                // Comprobamos que no estamos fuera de los límites del tablero
                if (col + 1 < TAB_ANCHO && tablero[row][col + 1] === 0) {
                    tablero[row][col] = 0;  // Limpiar la celda original
                    tablero[row][col + 1] = 1;  // Mover la pieza a la derecha
                    drawBoard();  // Redibujamos el tablero
                    console.log(`La pieza se movió de [${row}, ${col}] a [${row}, ${col + 1}]`);
                    return;  // Terminamos la función después de mover una pieza
                }
            }
        }
    }
}

function moverCeldaIzquierda() {
    for (let row = 0; row < TAB_ALTO; row++) {
        for (let col = 0; col < TAB_ANCHO; col++) {
            if (tablero[row][col] === 1) {
                // Comprobamos que no estamos fuera de los límites del tablero
                if (col - 1 < TAB_ANCHO && tablero[row][col - 1] === 0) {
                    tablero[row][col] = 0;  // Limpiar la celda original
                    tablero[row][col - 1] = 1;  // Mover la pieza a la derecha
                    drawBoard();  // Redibujamos el tablero
                   // console.log(`La pieza se movió de [${row}, ${col}] a [${row}, ${col + 1}]`);
                    return;  // Terminamos la función después de mover una pieza
                }
            }
        }
    }
}

function moverCeldaAbajo() {
    for (let row = 0; row < TAB_ALTO; row++) {
        for (let col = 0; col < TAB_ANCHO; col++) {
            if (tablero[row][col] === 1) {
                // Comprobamos que no estamos fuera de los límites del tablero
                if (row + 1 < TAB_ANCHO && tablero[row +1][col] === 0) {
                    tablero[row][col] = 0;  // Limpiar la celda original
                    tablero[row +1][col] = 1;  // Mover la pieza a la derecha
                    drawBoard();  // Redibujamos el tablero
                   // console.log(`La pieza se movió de [${row}, ${col}] a [${row}, ${col + 1}]`);
                    return;  // Terminamos la función después de mover una pieza
                }
            }
        }
    }
}

function moverCeldaArriba() {
    for (let row = 0; row < TAB_ALTO; row++) {
        for (let col = 0; col < TAB_ANCHO; col++) {
            if (tablero[row][col] === 1) {
                // Comprobamos que no estamos fuera de los límites del tablero
                if (row - 1 < TAB_ANCHO && tablero[row -1][col] === 0) {
                    tablero[row][col] = 0;  // Limpiar la celda original
                    tablero[row -1][col] = 1;  // Mover la pieza a la derecha
                    drawBoard();  // Redibujamos el tablero
                   // console.log(`La pieza se movió de [${row}, ${col}] a [${row}, ${col + 1}]`);
                    return;  // Terminamos la función después de mover una pieza
                }
            }
        }
    }
}
// Manejo de eventos de teclas
document.addEventListener("keydown", manejoDeFichas);

function manejoDeFichas(event) {
    switch (event.key) {
        case 'ArrowRight':
            moverCeldaDerecha();
            break;

        case 'ArrowLeft':
            moverCeldaIzquierda();
            break;
            
        case 'ArrowDown':
        moverCeldaAbajo();
        break;

        case 'ArrowUp':
            moverCeldaArriba();
            break;
        // Puedes añadir más teclas en el futuro, como las flechas hacia la izquierda, arriba y abajo.
    }
}
