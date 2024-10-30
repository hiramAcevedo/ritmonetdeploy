// src/components/TeacherSelection.jsx

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import teachersData from '../data/TeachersData.json';

const TeacherSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { selectedCourses, planName } = location.state || {};

  if (!selectedCourses || !planName) {
    // Si no hay información previa, redirige a la página de suscripción
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

  // Obtener el instrumento principal según las reglas
  const getPrimaryInstrument = () => {
    if (planName === 'Beginner') {
      return selectedCourses[0].instrument;
    } else if (planName === 'Medium' || planName === 'Pro') {
      // Instrumento del curso intermedio o avanzado (prioridad)
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
        // Si no hay intermedio o avanzado, tomar el primer curso de principiante
        return selectedCourses[0].instrument;
      }
    }
    return null;
  };

  const primaryInstrument = getPrimaryInstrument();

  const handleTeacherSelect = (teacher) => {
    const isSelected = selectedTeachers.find((t) => t.id === teacher.id);

    if (isSelected) {
      // Deseleccionar maestro
      setSelectedTeachers(selectedTeachers.filter((t) => t.id !== teacher.id));
    } else {
      if (selectedTeachers.length < planLimits[planName]) {
        // Validar que el primer maestro seleccionado corresponda al instrumento principal
        if (
          selectedTeachers.length === 0 &&
          teacher.instrument !== primaryInstrument
        ) {
          alert(
            `El primer maestro debe ser de tu instrumento principal: ${primaryInstrument}.`
          );
          return;
        }
        setSelectedTeachers([...selectedTeachers, teacher]);
      } else {
        alert(`Puedes seleccionar hasta ${planLimits[planName]} maestro(s) en tu plan.`);
      }
    }
  };

  const handleContinue = () => {
    // Validar que se haya seleccionado el número correcto de maestros
    if (selectedTeachers.length === 0) {
      alert('Debes seleccionar al menos un maestro.');
      return;
    }
    // Pasar las selecciones al resumen
    navigate('/subscription-summary', {
      state: { selectedCourses, selectedTeachers, planName },
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Selecciona tus Maestros</h2>
      <p className="mb-4">
        Tu instrumento principal es: <strong>{primaryInstrument}</strong>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teachersData.map((teacher) => {
          // Verificar si el maestro enseña algún instrumento de los cursos seleccionados
          const teachesSelectedInstrument = selectedCourses.some(
            (course) =>
              course.instrument.toLowerCase() === teacher.instrument.toLowerCase()
          );

          const isSelected = selectedTeachers.find((t) => t.id === teacher.id);

          const isDisabled = !teachesSelectedInstrument;

          return (
            <div
              key={teacher.id}
              className={`border rounded-lg overflow-hidden cursor-pointer ${
                isDisabled ? 'opacity-50 cursor-not-allowed' : ''
              } ${isSelected ? 'border-yellow-500' : ''}`}
              onClick={() => !isDisabled && handleTeacherSelect(teacher)}
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{teacher.name}</h3>
                <p className="text-sm mb-2">Instrumento: {teacher.instrument}</p>
                <p className="text-sm mb-2">Experiencia: {teacher.experience}</p>
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