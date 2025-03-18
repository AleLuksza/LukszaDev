let contador = document.getElementById("counter");  // Para mostrar puntos
let puntos = 0;  // Contador de puntos
let preguntaActual = 0;  // Para gestionar qué pregunta estamos mostrando

// Lista de preguntas y respuestas
const preguntas = [
    {
        pregunta: "¿Quién fue el guitarrista de Deep Purple?",
        opciones: ["Ritchie Blackmore", "Adorni", "Pablito Lezcano"],
        correcta: "Ritchie Blackmore", // Respuesta correcta como texto
    },
    {
        pregunta: "¿Cuál es el modelo de guitarra de Slash?",
        opciones: ["Ukelele", "Charango", "Les Paul"],
        correcta: "Les Paul", // Respuesta correcta como texto
    },
    {
        pregunta: "Quien inventó el taping?",
        opciones: ["Jesus", "Eddie Van Halen", "Carlitos Balá"],
        correcta: "Eddie Van Halen",
    },
    {
        pregunta: "De que banda es guitarrista Tim Henson",
        opciones: ["Damas gratis", "Los pasteles verdes", "Polyphia"],
        correcta: "Polyphia",
    },
    // Puedes agregar más preguntas aquí
];

// Función para cargar la pregunta actual
function cargarPregunta() {
    const pregunta = preguntas[preguntaActual];  // Obtener la pregunta actual
    const preguntasDiv = document.getElementById("preguntas");  // Contenedor de las opciones

    // Limpiar las opciones previas
    preguntasDiv.innerHTML = "";

    // Establecer la pregunta
    document.getElementById("elide").textContent = pregunta.pregunta;

    // Crear los botones de opciones dinámicamente
    pregunta.opciones.forEach(opcion => {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "botonito";
        input.value = opcion;  // El valor será la opción
        const label = document.createElement("label");
        label.textContent = opcion;
        preguntasDiv.appendChild(input);
        preguntasDiv.appendChild(label);
        preguntasDiv.appendChild(document.createElement("br"));
    });
}

// Función para enviar la respuesta y actualizar el contador de puntos
function enviar() {
    const botones = document.getElementsByName("botonito");  // Obtener todos los radio buttons
    let mensaje = document.getElementById("elide");

    // Buscar la respuesta seleccionada
    for (let i = 0; i < botones.length; i++) {
        if (botones[i].checked) {
            // Verificar si la respuesta seleccionada es correcta
            if (botones[i].value === preguntas[preguntaActual].correcta) {
                puntos++;  // Incrementar el contador de puntos
                contador.textContent = `Puntos: ${puntos}`;
                mensaje.textContent = "¡Correcto!";
            } else {
                mensaje.textContent = "Incorrecto. Intenta de nuevo.";
            }

            // Avanzar a la siguiente pregunta
            preguntaActual++;
            if (preguntaActual < preguntas.length) {
                cargarPregunta();
            } else {
                // Si no hay más preguntas, mostrar el mensaje de finalización
                mensaje.textContent = `¡Has terminado el cuestionario! Hiciste ${puntos} puntos.`;
            }

            return;
        }
    }

    // Si no se seleccionó ninguna opción
    mensaje.textContent = "Por favor, selecciona una opción.";
}

// Cargar la primera pregunta al inicio
cargarPregunta();

