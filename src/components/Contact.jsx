// src/components/Contact.jsx

import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contáctanos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Información de Contacto */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
          <p className="mb-4">
            <strong>Dirección:</strong>
            <br />
            Avenida de la Música 123
            <br />
            Ciudad Musical, País
          </p>
          <p className="mb-4">
            <strong>Teléfonos:</strong>
            <br />
            +1 (555) 123-4567
            <br />
            +1 (555) 987-6543
          </p>
          <p className="mb-4">
            <strong>Email:</strong>
            <br />
            contacto@ritmonet.com
          </p>
          <p className="mb-4">
            <strong>Director:</strong>
            <br />
            Carlos Melódico
          </p>
        </div>
        {/* Mapa de Google */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nuestra Ubicación</h2>
          <div className="h-64">
            <iframe
              title="Ubicación de Ritmonet"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31024.09217141386!2d-103.41319079180752!3d20.67152489692976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1fb67ef00ad%3A0x565792d14c620e!2sGlorieta%20de%20La%20Minerva!5e0!3m2!1ses-419!2smx!4v1729898311016!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Formulario de Contacto */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Envíanos un Mensaje</h2>
        <form className="max-w-lg">
          <div className="mb-4">
            <label htmlFor="nombre" className="block mb-2">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              className="w-full p-2 border rounded bg-white text-gray-900 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 border rounded bg-white text-gray-900 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mensaje" className="block mb-2">
              Mensaje:
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              required
              className="w-full p-2 border rounded bg-white text-gray-900 dark:bg-gray-700 dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 text-white font-bold py-2 px-4 rounded"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;