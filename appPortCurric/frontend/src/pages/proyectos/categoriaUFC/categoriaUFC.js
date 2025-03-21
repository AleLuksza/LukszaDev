import React, { useState } from 'react';
import '../../../styles/components/categoriaUFC.css';

const Pesaje = () => {
    const [peso, setPeso] = useState('');
    const [categoria, setCategoria] = useState('');

    const tuCategoria = () => {
        let pesoFloat = parseFloat(peso);

        if (pesoFloat < 52.3) {
            setCategoria('Categoría: PAJA');
        } else if (pesoFloat >= 52.3 && pesoFloat < 56.7) {
            setCategoria('Categoría: MOSCA');
        } else if (pesoFloat >= 56.7 && pesoFloat < 61.2) {
            setCategoria('Categoría: GALLO');
        } else if (pesoFloat >= 61.2 && pesoFloat < 65.8) {
            setCategoria('Categoría: PLUMA');
        } else if (pesoFloat >= 65.8 && pesoFloat < 70.3) {
            setCategoria('Categoría: LIGERO');
        } else if (pesoFloat >= 70.3 && pesoFloat < 77.1) {
            setCategoria('Categoría: WELTER');
        } else if (pesoFloat >= 77.1 && pesoFloat < 83.9) {
            setCategoria('Categoría: MEDIANO');
        } else if (pesoFloat >= 83.9 && pesoFloat < 93) {
            setCategoria('Categoría: SEMIPESADO');
        } else if (pesoFloat >= 93 && pesoFloat < 120.2) {
            setCategoria('Categoría: PESADO');
        } else {
            setCategoria('Categoría: Fuera de rango');
        }
    }

    // Aquí guardamos el código del componente como texto
    const codigoComponente = `
        import React, { useState } from 'react';
        import '../../../styles/components/categoriaUFC.css';

        const Pesaje = () => {
            const [peso, setPeso] = useState('');
            const [categoria, setCategoria] = useState('');

            const tuCategoria = () => {
                let pesoFloat = parseFloat(peso);

                if (pesoFloat < 52.3) {
                    setCategoria('Categoría: PAJA');
                } else if (pesoFloat >= 52.3 && pesoFloat < 56.7) {
                    setCategoria('Categoría: MOSCA');
                } else if (pesoFloat >= 56.7 && pesoFloat < 61.2) {
                    setCategoria('Categoría: GALLO');
                } else if (pesoFloat >= 61.2 && pesoFloat < 65.8) {
                    setCategoria('Categoría: PLUMA');
                } else if (pesoFloat >= 65.8 && pesoFloat < 70.3) {
                    setCategoria('Categoría: LIGERO');
                } else if (pesoFloat >= 70.3 && pesoFloat < 77.1) {
                    setCategoria('Categoría: WELTER');
                } else if (pesoFloat >= 77.1 && pesoFloat < 83.9) {
                    setCategoria('Categoría: MEDIANO');
                } else if (pesoFloat >= 83.9 && pesoFloat < 93) {
                    setCategoria('Categoría: SEMIPESADO');
                } else if (pesoFloat >= 93 && pesoFloat < 120.2) {
                    setCategoria('Categoría: PESADO');
                } else {
                    setCategoria('Categoría: Fuera de rango');
                }
            }

            return (
                <div className="pesaje">
                    <label className="laDevolucion">
                        <p>{categoria}</p>
                    </label>
                    <div className='elementosPesaje'>
                    <p className="ingrese">Ingrese su peso:</p>
                    <input 
                        className="display" 
                        type="number" 
                        value={peso} 
                        onChange={(e) => setPeso(e.target.value)} 
                        maxLength="6"
                    />
                    <button className="botonito" onClick={tuCategoria}>Enviar</button>
                    </div>
                </div>
            );
        }
        
        export default Pesaje;
    `;

    return (
        <div className="pesaje">
            <label className="laDevolucion">
                <p>{categoria}</p>
            </label>
            <div className='elementosPesaje'>
                <p className="ingrese">Ingrese su peso:</p>
                <input 
                    className="display" 
                    type="number" 
                    value={peso} 
                    onChange={(e) => setPeso(e.target.value)} 
                    maxLength="6"
                />
                <button className="botonito" onClick={tuCategoria}>Enviar</button>
            </div>

            {/* Aquí mostramos el código como texto */}
            <div className="codigoComponente">
                <h2>Código del Componente:</h2>
                <pre>
                    <code>
                        {codigoComponente}
                    </code>
                </pre>
            </div>
        </div>
    );
}

export default Pesaje;
