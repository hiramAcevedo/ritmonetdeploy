// src/components/PurchasedCourseDetails.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const PurchasedCourseDetails = () => {
  const { courseId } = useParams();
  const { acquiredCourses } = useContext(UserContext);

  const course = acquiredCourses.find((c) => c.id === parseInt(courseId));

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row">
        {/* Información del curso */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-sm mb-2">Instructor: {course.instructor}</p>
          <p className="text-sm mb-2">Duración: {course.duration}</p>
          <p className="text-sm mb-2">Nivel: {course.level}</p>
          <p className="text-base mb-4">{course.description}</p>
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
      {/* Contenido del curso */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Contenido del Curso</h2>
        {course.units && course.units.length > 0 ? (
          <div className="space-y-4">
            {course.units.map((unit, index) => (
              <div key={index} className="p-4 border rounded-md">
                <h3 className="text-xl font-semibold mb-2">{unit.title}</h3>
                <p>{unit.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No hay unidades disponibles para este curso.</p>
        )}
      </div>
    </div>
  );
};

export default PurchasedCourseDetails;