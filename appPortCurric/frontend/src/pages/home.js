import React from 'react';
import '../styles/components/home.css'

const Home = (props) => {
    return (
        <header>
            <div className='contenedorHome'>
               <h3>Datos personales:</h3>
               <ul>
                <li>Nombres: Alexis Leon Sebastian</li>
                <li>Apellido: Luksza</li>
                <li>Fecha de nac.: 20/01/1983</li>
                <li>Edad: 42 años</li>
               </ul>
            </div>
        </header>
    );
}

export default Home;