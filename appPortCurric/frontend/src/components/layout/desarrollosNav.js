import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/components/layout/desarrollosNav.css'

const DesarrollosNav = () => {
    return (
      <div className="desarrollosNav">
       
        <nav>
          <ul>
            <li>
              <NavLink to="/desarrollos/categoriaUFC" className="nav-item">Categorías UFC</NavLink>
            </li>
            <li>
           <NavLink to="/desarrollos/tetris" className="nav-item">Tetris</NavLink>
           </li>
           <li>
            <NavLink to="/desarrollos/calculadora" className="nav-item">Calculadora</NavLink>
           </li>
           <li>
            <NavLink to="/desarrollos/snake" className="nav-item">Snake</NavLink>
           </li>
            {/* Agrega más proyectos aquí */}
          </ul>
        </nav>
      </div>
    );
  };
  
  export default DesarrollosNav;