import React from "react";
import '../../../styles/components/tetris.css'

const Snake = () => {
    return(
        <div className="contenTetris">
            <aside className="imagenTetris">
            <img src="/imagenes/juegoSnake.png" alt="Snake Screenshot" />

            </aside>
            <main className="descripTetris">
                <h3>Classic Snake</h3>
                <p className="parrafoTetris">
                    Otra recreación de un clásico maquetado en HTML5, CSS3 y JavaScript poniendo en práctica la manipulación del DOM
                    trabajando en una matríz bidimensional
                </p>
                <div className="enlaces">
                <a href="https://github.com/AleLuksza/LukszaDev/tree/main/Viborita" target="blank" className="enlaceTetris">Link a Github</a>
                <a href="https://aleluksza.github.io/Snake" target="blank" className="enlaceTetris">Link al juego</a>
                </div>
            </main>
        </div>
    )
}

export default Snake;