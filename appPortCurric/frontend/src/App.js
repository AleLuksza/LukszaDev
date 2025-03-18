import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home"; // Asegúrate de que la ruta sea correcta
import Formacion from "./pages/formacion"; // Asegúrate de que la ruta sea correcta
import Desarrollos from "./pages/desarrollos"; // Asegúrate de que la ruta sea correcta
import Contacto from "./pages/contacto"; // Asegúrate de que la ruta sea correcta

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Nav2 from "./components/layout/nav2";
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav2 />
        {/* Definimos las rutas y los componentes correspondientes */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/desarrollos" element={<Desarrollos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Nav />


        <Footer />
      </div>
    </Router>
  );
}

export default App;
