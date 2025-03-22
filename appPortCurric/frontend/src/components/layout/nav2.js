import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/components/layout/nav2.css'

const Nav2 = (props) => {
    return (
        <div className="barra2">
            <div className="navbar2">
                <NavLink to="/" className={({ isActive }) => isActive ? "botonio active" : "botonio"}>
                    <div className="button-inner">
                        <span className="button-text">Home</span>
                    </div>
                </NavLink>
                <NavLink to="/formacion" className={({ isActive }) => isActive ? "botonio active" : "botonio"}>
                    <div className="button-inner">
                        <span className="button-text">Formación</span>
                    </div>
                </NavLink>
                <NavLink to="/desarrollos" className={({ isActive }) => isActive ? "botonio active" : "botonio"}>
                    <div className="button-inner">
                        <span className="button-text">Desarrollos</span>
                    </div>
                </NavLink>
                <NavLink to="/contacto" className={({ isActive }) => isActive ? "botonio active" : "botonio"}>
                    <div className="button-inner">
                        <span className="button-text">Contacto</span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Nav2;
