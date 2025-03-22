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
                    Caluladora básica desarrollada en HTML5, CSS3 y JavaScript. La misma cuenta con las operaciones basicas de la aritmética pero haciendo uso en su desarrollo
                    del método <b>eval</b> para reducir significativamente la cantidad de líneas de código empleadas para el script.
                    Otro desarrollo para aplicar lógica de programación, refactorización del código y generar una interfaz grafica acorde al objetivo del componente.
                </p>
                <div className="enlaces">
                <a href="https://github.com/AleLuksza/LukszaDev/tree/main/Calculadora" target="blank" className="enlaceTetris">Link a Github</a>
                <a href="https:/aleluksza.github.io/Calculadora" target="blank" className="enlaceTetris">Calculadora</a>
                </div>
            </main>
        </div>
    )
}

export default Calculadora;