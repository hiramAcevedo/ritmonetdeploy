// src/components/HomePage.jsx

import React from 'react';
import Hero from './Hero.jsx';
import CourseCard from './CourseCard.jsx';
// Importamos el archivo JSON actualizado
import courses from '../data/PopularCourses.json';

const HomePage = () => {
  return (
    <div>
      <Hero
        backgroundImage="src/assets/img/HomePage/pexels-photo-164821.jpg"
        title="Aprende Música en Línea"
        subtitle="Domina tu instrumento favorito desde cualquier lugar del mundo"
        buttonText="Comenzar"
        buttonLink="/subscription"
      />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestros Cursos Populares
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
