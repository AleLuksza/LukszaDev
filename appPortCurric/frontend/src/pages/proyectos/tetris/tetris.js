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
                    Recreación del clasico juego de 1984 maquetado en HTML5, CSS3 y JavaScript, en proceso avanzado explora en su desarrollo
                    la inicialización de una matriz bidimensional y los metodos para manejo del DOM para asi lograr todo lo que un Tetris debe
                    tener en su jugabilidad. Aspectos como la definición de los tetrominos y las distintas funciones como aleatorizar la aparación
                    de las piezas, el descenso automatico y rotación manual de las mismas, detección de colisiones, fijación de piezas al tablero,
                    detección y eliminacion de lineas sin dejar de atender a los estilos aplicados tipo retro para una agradable experiencia de usuario.
                </p>

                <a href="https://github.com/AleLuksza/LukszaDev/tree/main/Tetris" target="blank" className="enlaceTetris">Link a Github</a>
            </main>
        </div>
    )
}

export default Tetris;