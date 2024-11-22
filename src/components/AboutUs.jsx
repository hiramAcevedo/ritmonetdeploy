// src/components/AboutUs.jsx

import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/assets/img/AboutUs/musica-clasica.jpg"
          alt="Música"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Sobre Nosotros</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestra Misión</h2>
        <p className="mb-8 text-lg leading-relaxed text-center">
          En Ritmonet, nuestro objetivo es crear una plataforma accesible y de alta calidad para la enseñanza musical en español. Ofrecemos cursos completos para diversos instrumentos musicales, integrando herramientas interactivas como teoría musical, entrenamiento auditivo y evaluaciones en línea.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="/src/assets/img/AboutUs/musica-arte.jpg"
            alt="Enseñanza Musical"
            className="w-full h-80 object-cover rounded-lg"
          />
          <div>
            <h3 className="text-2xl font-bold mb-4">Innovación en la Enseñanza</h3>
            <p className="text-lg leading-relaxed">
              Nuestra plataforma innova en la forma en que se enseña música en línea desde un enfoque técnico y pedagógico. Desarrollamos funcionalidades interactivas, como exámenes en línea y ejercicios de teoría musical, todo integrado en un sistema que prioriza la usabilidad y la experiencia del usuario.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Accesibilidad para Todos</h3>
            <p className="text-lg leading-relaxed">
              Nuestro proyecto no solo pretende democratizar el acceso a la educación musical de calidad, sino también proporcionar una plataforma web accesible y adaptada culturalmente para la comunidad hispanohablante, con la visión de fomentar el desarrollo musical en nuestra región y más allá.
            </p>
          </div>
          <img
            src="/src/assets/img/AboutUs/pexels-photo-2479312.jpg"
            alt="Accesibilidad"
            className="w-full h-100 object-cover rounded-lg"
          />
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Únete a Nosotros</h3>
          <p className="text-lg leading-relaxed mb-8">
            Aprende a tocar, domina tu pasión. ¡Atrévete a ritmar con nosotros!
          </p>
          <img
            src="/src/assets/img/AboutUs/Diseño-sin-título-3.png"
            alt="Únete a Nosotros"
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;