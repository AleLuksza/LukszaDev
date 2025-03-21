import React from "react";
import '../../../styles/components/tetris.css'

const Calculadora = () => {
    return(
        <div className="contenTetris">
            <aside className="imagenTetris">
            <img src="/imagenes/CapturaCalcu.png" alt="Tetris Screenshot" />

            </aside>
            <main className="descripTetris">
                <h3>Calculadora basica</h3>
                <p className="parrafoTetris">
                    Caluladora basica desarrollada en HTML5, CSS3 y JavaScript. La misma cuenta con las operaciones basicas de la aritmética pero haciendo uso en su desarrollo
                    del metodo <b>eval</b> para reducir significativamente lacantidad de lineas de codigo empleadas para el script.
                    Otro desarrollo para aplicar logica de programación, refactorizacion del codigo y generar una interfaz grafica acorde al objetivo del componente.
                </p>

                <a href="https://github.com/AleLuksza/LukszaDev/tree/main/Calculadora" target="blank" className="enlaceTetris">Link a Github</a>
            </main>
        </div>
    )
}

export default Calculadora;