// script.js
const board = document.getElementById('board');
const gameOver = document.getElementById('gameOver');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');

const boardSize = 20;  // El tablero tiene 20x20 celdas
let snake = [{x: 10, y: 10}];  // La serpiente comienza en el centro
let direction = 'RIGHT';  // Dirección inicial
let food = {x: 5, y: 5};  // La comida comienza en una posición
let gameInterval;
let snakeLength = 1;
let gamePaused = false;
let score = 0;

// Crear el tablero
function createBoard() {
    for (let i = 0; i < boardSize * boardSize; i++) {
        const cell = document.createElement('div');
        board.appendChild(cell);
    }
}

// Actualizar la posición de la serpiente y la comida
function updateGame() {
    if (gamePaused) return;  // Si el juego está en pausa, no actualizar

    // Mover la serpiente
    let head = { ...snake[0] };

    switch (direction) {
        case 'UP': head.y--; break;
        case 'DOWN': head.y++; break;
        case 'LEFT': head.x--; break;
        case 'RIGHT': head.x++; break;
    }

    // Agregar la nueva cabeza a la serpiente
    snake.unshift(head);

    // Si la serpiente come la comida
    if (head.x === food.x && head.y === food.y) {
        snakeLength++;
        score++;  // Aumentar la puntuación
        scoreDisplay.textContent = `Puntos: ${score}`;  // Actualizar puntuación
        generateFood();  // Crear nueva comida
    } else {
        snake.pop();  // Eliminar la última parte de la serpiente si no ha comido
    }

    // Verificar colisiones
    if (head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize || checkSelfCollision()) {
        gameOver.style.display = 'block';
        clearInterval(gameInterval);  // Detener el juego
        return;
    }

    draw();
}

// Verificar si la serpiente se choca con sí misma
function checkSelfCollision() {
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    return false;
}

// Dibujar la serpiente y la comida en el tablero
function draw() {
    const cells = board.getElementsByTagName('div');
    // Limpiar el tablero
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('snake', 'food');
    }

    // Dibujar la serpiente
    snake.forEach(segment => {
        const index = segment.y * boardSize + segment.x;
        cells[index].classList.add('snake');
    });

    // Dibujar la comida
    const foodIndex = food.y * boardSize + food.x;
    cells[foodIndex].classList.add('food');
}

// Generar una nueva comida en una posición aleatoria
function generateFood() {
    let x = Math.floor(Math.random() * boardSize);
    let y = Math.floor(Math.random() * boardSize);
    
    // Asegurarse de que la comida no aparezca en la serpiente
    while (snake.some(segment => segment.x === x && segment.y === y)) {
        x = Math.floor(Math.random() * boardSize);
        y = Math.floor(Math.random() * boardSize);
    }

    food = {x, y};
}

// Cambiar la dirección de la serpiente
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
    if (e.key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
    if (e.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
    if (e.key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';

    if (e.key === 'Enter' && gameOver.style.display === 'block') {
        startGame();  // Reiniciar el juego al presionar Enter después de Game Over
    }

    if (e.key === ' ' && gameInterval) {
        togglePause();  // Pausar o reanudar el juego con la barra espaciadora
    }
});

// Pausar o reanudar el juego
function togglePause() {
    if (gamePaused) {
        gamePaused = false;
        gameInterval = setInterval(updateGame, 200);  // Continuar el juego
    } else {
        gamePaused = true;
        clearInterval(gameInterval);  // Pausar el juego
    }
}

// Iniciar el juego
function startGame() {
    snake = [{x: 10, y: 10}];  // Resetear la serpiente
    direction = 'RIGHT';  // Dirección inicial
    food = {x: 5, y: 5};  // Resetear la comida
    score = 0;
    snakeLength = 1;
    scoreDisplay.textContent = `Puntos: ${score}`;
    gameOver.style.display = 'none';  // Ocultar el mensaje de Game Over
    createBoard();
    generateFood();
    gameInterval = setInterval(updateGame, 200);  // Empezar el juego
}

// Botón de iniciar juego
startButton.addEventListener('click', startGame);

// Botón de pausa
pauseButton.addEventListener('click', togglePause);

// Inicializar el juego con la función startGame
startGame();
