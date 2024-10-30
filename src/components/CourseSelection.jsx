// src/components/CourseSelection.jsx

import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import coursesData from '../data/CoursesData.json';

const CourseSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { planName } = location.state || {};

  if (!planName) {
    // Si no hay plan seleccionado, redirige a la página de suscripción
    navigate('/subscription');
    return null;
  }

  // Definir los límites según el plan
  const planLimits = {
    Beginner: {
      beginnerCourses: 1,
      intermediateCourses: 0,
      advancedCourses: 0,
    },
    Medium: {
      beginnerCourses: 2,
      intermediateCourses: 1,
      advancedCourses: 0,
    },
    Pro: {
      beginnerCourses: 3,
      intermediateCourses: 1,
      advancedCourses: 1,
    },
  };

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [availableCourses, setAvailableCourses] = useState([]);

  const levels = ['Principiante', 'Intermedio', 'Avanzado'];

  useEffect(() => {
    // Filtrar cursos disponibles según el plan
    setAvailableCourses(coursesData);
  }, []);

  const handleCourseSelect = (course) => {
    // Lógica para seleccionar y deseleccionar cursos
    const isSelected = selectedCourses.find((c) => c.id === course.id);

    if (isSelected) {
      // Deseleccionar curso
      setSelectedCourses(selectedCourses.filter((c) => c.id !== course.id));
    } else {
      // Seleccionar curso si no se ha alcanzado el límite
      const counts = {
        Principiante: selectedCourses.filter((c) => c.level === 'Principiante').length,
        Intermedio: selectedCourses.filter((c) => c.level === 'Intermedio').length,
        Avanzado: selectedCourses.filter((c) => c.level === 'Avanzado').length,
      };

      const limits = planLimits[planName];

      if (
        (course.level === 'Principiante' && counts.Principiante < limits.beginnerCourses) ||
        (course.level === 'Intermedio' && counts.Intermedio < limits.intermediateCourses) ||
        (course.level === 'Avanzado' && counts.Avanzado < limits.advancedCourses)
      ) {
        // Verificar reglas adicionales según el plan
        if (planName === 'Medium') {
          // El curso intermedio debe ser de un instrumento seleccionado en principiante
          if (course.level === 'Intermedio') {
            const beginnerInstruments = selectedCourses
              .filter((c) => c.level === 'Principiante')
              .map((c) => c.instrument);

            if (beginnerInstruments.includes(course.instrument)) {
              setSelectedCourses([...selectedCourses, course]);
            } else {
              alert(
                'El curso intermedio debe ser del mismo instrumento que uno de los cursos de principiante seleccionados.'
              );
            }
          } else {
            setSelectedCourses([...selectedCourses, course]);
          }
        } else if (planName === 'Pro') {
          // Reglas para el plan Pro
          if (course.level === 'Intermedio') {
            const beginnerInstruments = selectedCourses
              .filter((c) => c.level === 'Principiante')
              .map((c) => c.instrument);

            if (beginnerInstruments.includes(course.instrument)) {
              setSelectedCourses([...selectedCourses, course]);
            } else {
              alert(
                'El curso intermedio debe ser del mismo instrumento que uno de los cursos de principiante seleccionados.'
              );
            }
          } else if (course.level === 'Avanzado') {
            const intermediateInstruments = selectedCourses
              .filter((c) => c.level === 'Intermedio')
              .map((c) => c.instrument);

            if (intermediateInstruments.includes(course.instrument)) {
              setSelectedCourses([...selectedCourses, course]);
            } else {
              alert(
                'El curso avanzado debe ser del mismo instrumento que el curso intermedio seleccionado.'
              );
            }
          } else {
            setSelectedCourses([...selectedCourses, course]);
          }
        } else {
          setSelectedCourses([...selectedCourses, course]);
        }
      } else {
        alert('Has alcanzado el límite de cursos para este nivel en tu plan.');
      }
    }
  };

  const handleContinue = () => {
    // Validar que se hayan seleccionado los cursos requeridos
    const limits = planLimits[planName];
    const counts = {
      Principiante: selectedCourses.filter((c) => c.level === 'Principiante').length,
      Intermedio: selectedCourses.filter((c) => c.level === 'Intermedio').length,
      Avanzado: selectedCourses.filter((c) => c.level === 'Avanzado').length,
    };

    if (
      counts.Principiante < limits.beginnerCourses ||
      counts.Intermedio < limits.intermediateCourses ||
      counts.Avanzado < limits.advancedCourses
    ) {
      alert('Debes completar la selección de cursos según tu plan.');
      return;
    }

    // Pasar los cursos seleccionados a la siguiente página
    navigate('/teacher-selection', { state: { selectedCourses, planName } });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Selecciona tus Cursos</h2>

      {levels.map((level) => {
        const coursesByLevel = availableCourses.filter(
          (course) => course.level === level
        );

        // Ocultar niveles que no aplican al plan
        const limits = planLimits[planName];
        if (
          (level === 'Intermedio' && limits.intermediateCourses === 0) ||
          (level === 'Avanzado' && limits.advancedCourses === 0)
        ) {
          return null;
        }

        return (
          <div key={level} className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">{level}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coursesByLevel.map((course) => {
                const isSelected = selectedCourses.find((c) => c.id === course.id);

                // Deshabilitar cursos si se alcanzó el límite para ese nivel
                const counts = {
                  Principiante: selectedCourses.filter((c) => c.level === 'Principiante')
                    .length,
                  Intermedio: selectedCourses.filter((c) => c.level === 'Intermedio')
                    .length,
                  Avanzado: selectedCourses.filter((c) => c.level === 'Avanzado').length,
                };

                const limits = planLimits[planName];

                const isDisabled =
                  (course.level === 'Principiante' &&
                    counts.Principiante >= limits.beginnerCourses &&
                    !isSelected) ||
                  (course.level === 'Intermedio' &&
                    counts.Intermedio >= limits.intermediateCourses &&
                    !isSelected) ||
                  (course.level === 'Avanzado' &&
                    counts.Avanzado >= limits.advancedCourses &&
                    !isSelected);

                return (
                  <div
                    key={course.id}
                    className={`border rounded-lg overflow-hidden cursor-pointer ${
                      isDisabled ? 'opacity-50 cursor-not-allowed' : ''
                    } ${isSelected ? 'border-yellow-500' : ''}`}
                    onClick={() => !isDisabled && handleCourseSelect(course)}
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-lg mb-2">{course.title}</h4>
                      <p className="text-sm mb-2">Instrumento: {course.instrument}</p>
                      <p className="text-sm mb-2">Instructor: {course.instructor}</p>
                      <p className="text-sm mb-2">Duración: {course.duration}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

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

export default CourseSelection;