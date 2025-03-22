// src/pages/Desarrollos.js
import React from "react";
import DesarrollosNav from "../components/layout/desarrollosNav"; // Importa la barra de navegación específica para esta sección
import { Routes, Route } from "react-router-dom";
import Pesaje from "./proyectos/categoriaUFC/categoriaUFC"; // Ejemplo de un proyecto
import Tetris from "./proyectos/tetris/tetris";
import Calculadora from "./proyectos/calculadora/calculadora";
import Snake from "./proyectos/snake/snake";



const Desarrollos = () => {
  return (
    <div className="desarrollos-container">
      <DesarrollosNav /> {/* Muestra la barra de navegación de proyectos */}
      <div className="desarrollos-content">
        {/* Rutas para los proyectos específicos */}
        <Routes>
          <Route path="CategoriaUFC" element={<Pesaje />} />
          <Route path="tetris" element={<Tetris />} />
          <Route path="calculadora" element={<Calculadora />} />
          <Route path="snake" element={<Snake />} />
        </Routes>
      </div>
    </div>
  );
};

export default Desarrollos;
