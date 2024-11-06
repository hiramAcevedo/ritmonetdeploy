// src/components/AcquiredCourses.jsx

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const AcquiredCourses = () => {
  const { acquiredCourses } = useContext(UserContext);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Tus Cursos Adquiridos</h1>
      {acquiredCourses.length === 0 ? (
        <p className="text-center text-lg">No has adquirido cursos aún.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {acquiredCourses.map((course) => (
            <div key={course.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              {/* Imagen del curso */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              {/* Detalles del curso */}
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                <p className="text-sm mb-2">Instructor: {course.instructor}</p>
                <Link
                  to={`/purchased-course/${course.id}`}
                  className="inline-block mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 text-white font-bold py-2 px-4 rounded"
                >
                  Ir al Curso
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AcquiredCourses;