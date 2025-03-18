import React from 'react';
import '../../styles/components/layout/nav.css'

const Nav = (props) => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-items">
                    {/* Íconos de FontAwesome para HTML, CSS y JS */}
                    <a href="#html" className="navbar-item">
                        <i className="fab fa-html5"></i>
                        <span>HTML</span>
                    </a>
                    <a href="#css" className="navbar-item">
                        <i className="fab fa-css3-alt"></i>
                        <span>CSS</span>
                    </a>
                    <a href="#javascript" className="navbar-item">
                        <i className="fab fa-js-square"></i>
                        <span>JavaScript</span>
                    </a>
                    <a href="#react" className="navbar-item">
                        <i className="fab fa-react"></i>
                        <span>React</span>
                    </a>
                    <a href="#python" className="navbar-item">
                        <i className="fab fa-python"></i>
                        <span>Python</span>
                    </a>
                    <a href="#sql" className="navbar-item">
                        <i className="fas fa-database"></i>
                        <span>SQL</span>
                    </a>
                    <a href="#node" className="navbar-item">
                        <i className="fab fa-node"></i>
                        <span>Node.js</span>
                    </a>
                    <a href="#express" className="navbar-item">
                        <i className="fas fa-cogs"></i> {/* No hay ícono específico de Express, usamos un ícono de configuración */}
                        <span>Express</span>
                    </a>
                    <a href="#handlebars" className="navbar-item">
                        <i className="fab fa-node-js"></i> {/* No hay ícono específico de Handlebars, pero el ícono de Node puede funcionar */}
                        <span>Handlebars</span>
                    </a>
                    <a href="#git" className="navbar-item">
                        <i className="fab fa-git"></i>
                        <span>Git</span>
                    </a>
                    <a href="#github" className="navbar-item">
                        <i className="fab fa-github"></i>
                        <span>GitHub</span>
                    </a>
                    <a href="#vscode" className="navbar-item">
                        <i className="fab fa-vuejs"></i> {/* VSCode no tiene ícono directo, podemos usar uno de Vue.js como alternativa */}
                        <span>VSCode</span>
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Nav;