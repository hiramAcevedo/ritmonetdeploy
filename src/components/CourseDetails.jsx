// src/components/CourseDetails.jsx

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import courses from '../data/CoursesData.json';
import CourseUnits from './CourseUnits';
import { slugify } from '../utils/slugify'; // Importamos slugify
import { UserContext } from '../context/UserContext'; // Importamos el contexto

const CourseDetails = () => {
  const { instrument, courseId } = useParams();
  const { addToCart, cart, acquiredCourses } = useContext(UserContext); // Obtenemos addToCart, cart y acquiredCourses

  // Buscar el curso correspondiente
  const course = courses.find(
    (c) =>
      c.id === parseInt(courseId) &&
      slugify(c.instrument) === instrument // Usamos slugify aquí
  );

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  // Verificar si el curso ya está en el carrito
  const isInCart = cart.find((c) => c.id === course.id);
  // Verificar si el curso ya está adquirido
  const isAcquired = acquiredCourses.find((c) => c.id === course.id);

  const handleAddToCart = () => {
    addToCart(course);
  };

  const handleGiftCourse = () => {
    // Implementa la lógica para regalar el curso
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row">
        {/* Información del curso */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-sm mb-2">Instructor: {course.instructor}</p>
          <p className="text-sm mb-2">Duración: {course.duration}</p>
          <p className="text-sm mb-2">Nivel: {course.level}</p>
          <p className="text-sm mb-2">Precio: ${course.price} USD</p>
          <p className="text-base mb-4">{course.description}</p>
          {isAcquired ? (
            <button
              onClick={handleGiftCourse}
              className="bg-blue-500 hover:bg-blue-600 transition duration-300 text-white font-bold py-2 px-4 rounded"
            >
              Regalar curso
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              disabled={isInCart}
              className={`${
                isInCart
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
              } transition duration-300 text-white font-bold py-2 px-4 rounded`}
            >
              {isInCart ? 'Agregado al Carrito' : 'Agregar al Carrito'}
            </button>
          )}
        </div>
        {/* Imagen del curso */}
        <div className="md:w-1/2 mt-4 md:mt-0 md:ml-8">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-64 object-cover rounded-md"
          />
        </div>
      </div>
      {/* Bloque de unidades */}
      <CourseUnits units={course.units} />
    </div>
  );
};

export default CourseDetails;