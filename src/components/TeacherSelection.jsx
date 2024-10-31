// src/components/TeacherSelection.jsx

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import teachersData from '../data/TeachersData.json';
import Alert from './Alert';

const TeacherSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { selectedCourses, planName } = location.state || {};

  if (!selectedCourses || !planName) {
    navigate('/subscription');
    return null;
  }

  // Definir los límites según el plan
  const planLimits = {
    Beginner: 1,
    Medium: 2,
    Pro: 3,
  };

  const [selectedTeachers, setSelectedTeachers] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');

  // Obtener el instrumento principal según las reglas
  const getPrimaryInstrument = () => {
    if (planName === 'Beginner') {
      return selectedCourses[0].instrument;
    } else if (planName === 'Medium' || planName === 'Pro') {
      const intermediateCourse = selectedCourses.find(
        (c) => c.level === 'Intermedio'
      );
      const advancedCourse = selectedCourses.find(
        (c) => c.level === 'Avanzado'
      );
      if (advancedCourse) {
        return advancedCourse.instrument;
      } else if (intermediateCourse) {
        return intermediateCourse.instrument;
      } else {
        return selectedCourses[0].instrument;
      }
    }
    return null;
  };

  const primaryInstrument = getPrimaryInstrument();

  const handleTeacherSelect = (teacher) => {
    setAlertMessage(''); // Limpiar cualquier alerta previa

    const isSelected = selectedTeachers.find((t) => t.id === teacher.id);

    if (isSelected) {
      setSelectedTeachers(selectedTeachers.filter((t) => t.id !== teacher.id));
    } else {
      if (selectedTeachers.length < planLimits[planName]) {
        // Validar que el primer maestro seleccionado corresponda al instrumento principal
        if (
          selectedTeachers.length === 0 &&
          teacher.instrument !== primaryInstrument
        ) {
          setAlertMessage(
            `El primer maestro debe ser de tu instrumento principal: ${primaryInstrument}.`
          );
          return;
        }
        setSelectedTeachers([...selectedTeachers, teacher]);
      } else {
        setAlertMessage(
          `Puedes seleccionar hasta ${planLimits[planName]} maestro(s) en tu plan.`
        );
      }
    }
  };

  const handleContinue = () => {
    if (selectedTeachers.length === 0) {
      setAlertMessage('Debes seleccionar al menos un maestro.');
      return;
    }
    navigate('/subscription-summary', {
      state: { selectedCourses, selectedTeachers, planName },
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-4">Selecciona tus Maestros</h2>
      <p className="mb-4">
        Tu instrumento principal es: <strong>{primaryInstrument}</strong>
      </p>

      {/* Incluir el componente Alert */}
      <Alert
        message={alertMessage}
        onClose={() => setAlertMessage('')}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {teachersData.map((teacher) => {
          const teachesSelectedInstrument = selectedCourses.some(
            (course) =>
              course.instrument.toLowerCase() === teacher.instrument.toLowerCase()
          );

          const isSelected = selectedTeachers.find((t) => t.id === teacher.id);

          const isDisabled = !teachesSelectedInstrument;

          return (
            <div
              key={teacher.id}
              className={`border rounded-lg overflow-hidden cursor-pointer text-sm ${
                isDisabled ? 'opacity-50 cursor-not-allowed' : ''
              } ${
                isSelected ? 'bg-yellow-100 dark:bg-yellow-500' : 'bg-white dark:bg-gray-800'
              }`}
              onClick={() => !isDisabled && handleTeacherSelect(teacher)}
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                <h3 className="font-bold text-base mb-1">{teacher.name}</h3>
                <p className="text-xs mb-1">Instrumento: {teacher.instrument}</p>
                <p className="text-xs mb-1">Experiencia: {teacher.experience}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={handleContinue}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 text-white font-bold py-3 px-6 rounded"
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default TeacherSelection;