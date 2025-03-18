import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/components/layout/nav2.css'

const Nav2 = (props) => {
    return (
        <div className="barra2">
            <div className="navbar2">

                <NavLink to="/home" className={({ isActive }) => isActive ? "botonio active-link" : "botonio"}>Home</NavLink>
                <NavLink to="/formacion" className={({ isActive }) => isActive ? "botonio active-link" : "botonio"}>Formación</NavLink>
                <NavLink to="/desarrollos" className={({ isActive }) => isActive ? "botonio active-link" : "botonio"}>Desarrollos</NavLink>
                <NavLink to="/contacto" className={({ isActive }) => isActive ? "botonio active-link" : "botonio"}>Contacto</NavLink>
            </div>
        </div>
    );
}

export default Nav2;