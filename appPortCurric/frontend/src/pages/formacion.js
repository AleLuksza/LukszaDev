import React from 'react';
import '../styles/components/formacion.css'

const Formacion = (props) => {
    return (

        <div className='contenedorFormacion'>
            <main className="main-content">
                <h3>Formación:</h3>
                <ul className='listaFormacion'>
                    <li><b>Universidad Nacional de General San Martín:</b><br></br>
                        Licenciatura en filosofía: Inconcluso.
                    </li><br></br>
                    <li><b>Universidad Tecnológica Nacional:</b><br></br>
                        Diplomatura en desarrollo Full-Stack: Finalizado
                    </li><br></br>
                    <li><b>Universidad Tecnológica Nacional:</b><br></br>
                        Tecnicatura Superior en Informática Aplicada: En curso.<br></br>
                    </li>
                </ul>


                <h3>Experiencia laboral:</h3>
                <ul className='listaLaboral'>
                    <li><b>Opticas Vacance:</b><br></br>
                        Cadetería y atencioón al público inglés/castellano.<br></br>
                        2002-2003
                    </li><br></br>
                    <li><b>Sport Trends Argentina:</b><br></br>
                        Operario Textil en producción.<br></br>
                        Despacho y seguimiento de cortes.<br></br>
                        Control de calidad de prendas en proceso y terminada.<br></br>
                        2003-2010
                    </li><br></br>
                    <li><b>Volkswagen Argentina:</b><br></br>
                        Operario de producción en línea de montaje.<br></br>
                        Desarrollo y construcción de mobiliario tubular<br></br>
                        atendiendo las demandas de cada sector.<br></br>
                        2010-2024
                    </li>
                </ul>
              
            </main>

            <aside className="sidebar">
                <h3>Conocimientos:</h3>
                <ul className='listaItems'>
                    <li>Inglés avanzado<br></br>
                        Oral y escrito.
                    </li>
                    <li>Python</li>
                    <li>Tkinter</li>
                    <li>CustomTkinter</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>NodeJs</li>
                    <li>SQL</li>
                    <li>Bootstrap</li>
                    <li>Responsive Design</li>
                    <li>MVC</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Express</li>
                </ul>
            </aside>
        </div>

    );
}

export default Formacion;