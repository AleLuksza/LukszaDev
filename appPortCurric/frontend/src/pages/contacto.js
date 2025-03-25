import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/components/contacto.css'

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí es donde usas tu configuración de EmailJS
    emailjs
      .sendForm(
        'service_j4oojra', // Este es el ID de tu servicio SMTP en EmailJS
        'template_yimw0p7', // Este es el ID de la plantilla en EmailJS
        e.target,
        'VmycC7SWR9s9MTSB3' // Este es tu ID de usuario en EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('¡Mensaje enviado con éxito!');
        },
        (error) => {
          console.log(error.text);
          setStatus('Hubo un error al enviar el mensaje.');
        }
      );
  };

  return (
    <div className='contato'>
      <h2 className='elhachedos'>Contacto:</h2>
      <form onSubmit={handleSubmit}>
        <input className='losinpu'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Tu Nombre"
          required
        />
        <input className='losinpu'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Tu Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tu Mensaje"
          required
        ></textarea>
        <button className='leBoton' type="submit">Enviar</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Contacto;
