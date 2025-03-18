// script.js

// Elementos del DOM
const borderSize = document.getElementById('borderSize');
const paddingSize = document.getElementById('paddingSize');
const marginSize = document.getElementById('marginSize');
const fontFamily = document.getElementById('fontFamily');
const bgColor = document.getElementById('bgColor');
const borderColor = document.getElementById('borderColor');
const headerTextInput = document.getElementById('headerText'); // Campo de texto para el header
const headerTitle = document.getElementById('headerTitle'); // Elemento h2 dentro del header
const htmlCode = document.getElementById('htmlCode'); // Area de texto para HTML
const cssCode = document.getElementById('cssCode'); // Area de texto para CSS

// Función para actualizar el header y los códigos
function updateHeader() {
    // Cambiar el texto del header con lo que el usuario escriba
    headerTitle.textContent = headerTextInput.value;

    // Actualizar las propiedades del header
    const header = document.getElementById('header');
    header.style.borderWidth = `${borderSize.value}px`;
    header.style.padding = `${paddingSize.value}px`;
    header.style.margin = `${marginSize.value}px`;
    header.style.fontFamily = fontFamily.value;
    header.style.backgroundColor = bgColor.value;
    header.style.borderColor = borderColor.value;

    // Actualizar el código HTML
    htmlCode.value = `<!-- Código HTML del Header -->
<header id="header">
    <h2>${headerTextInput.value}</h2>
</header>`;

    // Actualizar el código CSS
    cssCode.value = `/* Código CSS del Header */
header {
    text-align: center;
    padding: ${paddingSize.value}px;
    border: solid ${borderSize.value}px ${borderColor.value};
    border-radius: 8px;
    background-color: ${bgColor.value};
    font-family: ${fontFamily.value};
}`;
}

// Agregar eventos para actualizar cuando cambian los controles
borderSize.addEventListener('input', updateHeader);
paddingSize.addEventListener('input', updateHeader);
marginSize.addEventListener('input', updateHeader);
fontFamily.addEventListener('change', updateHeader);
bgColor.addEventListener('input', updateHeader);
borderColor.addEventListener('input', updateHeader);


headerTextInput.addEventListener('input', updateHeader);

updateHeader();

function copyCode(id) {
    const codeArea = document.getElementById(id);
    codeArea.select();
    codeArea.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("¡Código copiado al portapapeles!");
}

function updateColorInput(input, color) {
    input.style.backgroundColor = color;
}


bgColor.addEventListener('input', (e) => {
    updateHeader();
    updateColorInput(e.target, e.target.value); 
});
borderColor.addEventListener('input', (e) => {
    updateHeader();
    updateColorInput(e.target, e.target.value); 
});
