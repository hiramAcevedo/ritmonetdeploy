// src/components/SubscriptionSummary.jsx

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SubscriptionSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { selectedCourses, selectedTeachers, planName } = location.state || {};

  if (!selectedCourses || !selectedTeachers || !planName) {
    navigate('/subscription');
    return null;
  }

  // Calcular horas de clase según el plan y maestros
  const calculateClassHours = () => {
    let totalHours = 0;
    let hoursDistribution = [];

    if (planName === 'Beginner') {
      totalHours = 2;
      hoursDistribution.push({ teacher: selectedTeachers[0], hours: 2 });
    } else if (planName === 'Medium') {
      totalHours = 4;
      if (selectedTeachers.length === 1) {
        hoursDistribution.push({ teacher: selectedTeachers[0], hours: 4 });
      } else if (selectedTeachers.length === 2) {
        hoursDistribution.push({ teacher: selectedTeachers[0], hours: 3 });
        hoursDistribution.push({ teacher: selectedTeachers[1], hours: 1 });
      }
    } else if (planName === 'Pro') {
      totalHours = 6;
      if (selectedTeachers.length === 1) {
        hoursDistribution.push({ teacher: selectedTeachers[0], hours: 6 });
      } else if (selectedTeachers.length === 2) {
        hoursDistribution.push({ teacher: selectedTeachers[0], hours: 4 });
        hoursDistribution.push({ teacher: selectedTeachers[1], hours: 2 });
      } else if (selectedTeachers.length === 3) {
        hoursDistribution.push({ teacher: selectedTeachers[0], hours: 4 });
        hoursDistribution.push({ teacher: selectedTeachers[1], hours: 1 });
        hoursDistribution.push({ teacher: selectedTeachers[2], hours: 1 });
      }
    }

    return { totalHours, hoursDistribution };
  };

  const { totalHours, hoursDistribution } = calculateClassHours();

  const handleConfirm = () => {
    navigate('/subscription-confirmation');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Resumen de tu Suscripción
        </h2>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Plan Seleccionado:</h3>
          <p className="text-xl">{planName}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Cursos Seleccionados:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedCourses.map((course) => (
              <div
                key={course.id}
                className="border rounded-lg p-4 flex items-center bg-white dark:bg-gray-700"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div>
                  <h4 className="font-bold">{course.title}</h4>
                  <p className="text-sm">{course.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Maestros Seleccionados:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hoursDistribution.map(({ teacher, hours }) => (
              <div
                key={teacher.id}
                className="border rounded-lg p-4 flex items-center bg-white dark:bg-gray-700"
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-16 h-16 object-cover rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">{teacher.name}</h4>
                  <p className="text-sm">Instrumento: {teacher.instrument}</p>
                  <p className="text-sm">Horas por semana: {hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-lg">
            Total de horas de clase por semana: <strong>{totalHours} horas</strong>.
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={handleConfirm}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 text-white font-bold py-3 px-6 rounded"
          >
            Confirmar y Suscribirse
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSummary;