import React from "react";
import '../../../styles/components/tetris.css'

const Tetris = () => {
    return(
        <div className="contenTetris">
            <aside className="imagenTetris">
            <img src="/imagenes/CapturaTetris.png" alt="Tetris Screenshot" />

            </aside>
            <main className="descripTetris">
                <h3>Clasico Tetris</h3>
                <p className="parrafoTetris">
                    Recreación del clásico juego de 1984 maquetado en HTML5, CSS3 y JavaScript, en proceso avanzado explora en su desarrollo
                    la inicialización de una matriz bidimensional y los metodos para manejo del DOM para así lograr todo lo que un Tetris debe
                    tener en su jugabilidad. Aspectos como la definición de los tetrominos y las distintas funciones como aleatorizar la aparación
                    de las piezas, el descenso automático y rotación de las mismas, detección de colisiones, fijación de piezas al tablero,
                    detección y eliminación de lineas sin dejar de atender a los estilos aplicados tipo retro para una agradable experiencia de usuario.
                </p>
                <div className="enlaces">
                <a href="https://github.com/AleLuksza/LukszaDev/tree/main/Tetris" target="blank" className="enlaceTetris">Link a Github</a>
                <a href="https://aleluksza.github.io/Tetris" target="blank" className="enlaceTetris">Link al juego</a>
                </div>
            </main>
        </div>
    )
}

export default Tetris;