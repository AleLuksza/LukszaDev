import React from 'react';
import '../../styles/components/layout/header.css'

const Header = (props) => {
    return (
        <header>
            <div className='contenHeader'>
               <img src='imagenes/logoportaEtiqNgr.png' alt='logo'></img>
                <h1>Alexis Luksza</h1>
            </div>
        </header>
    );
}

export default Header;