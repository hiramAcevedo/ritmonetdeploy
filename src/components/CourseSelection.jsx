// src/components/CourseSelection.jsx

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import coursesData from '../data/CoursesData.json';
import Alert from './Alert';

const CourseSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { planName } = location.state || {};

  if (!planName) {
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
  const [alertMessage, setAlertMessage] = useState('');

  const levels = ['Principiante', 'Intermedio', 'Avanzado'];

  useEffect(() => {
    setAvailableCourses(coursesData);
  }, []);

  const handleCourseSelect = (course) => {
    setAlertMessage(''); // Limpiar cualquier alerta previa

    const isSelected = selectedCourses.find((c) => c.id === course.id);

    if (isSelected) {
      setSelectedCourses(selectedCourses.filter((c) => c.id !== course.id));
    } else {
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
        if (planName === 'Medium') {
          if (course.level === 'Intermedio') {
            const beginnerInstruments = selectedCourses
              .filter((c) => c.level === 'Principiante')
              .map((c) => c.instrument);

            if (beginnerInstruments.includes(course.instrument)) {
              setSelectedCourses([...selectedCourses, course]);
            } else {
              setAlertMessage(
                'El curso intermedio debe ser del mismo instrumento que uno de los cursos de nivel Principiante seleccionados.'
              );
            }
          } else {
            setSelectedCourses([...selectedCourses, course]);
          }
        } else if (planName === 'Pro') {
          if (course.level === 'Intermedio') {
            const beginnerInstruments = selectedCourses
              .filter((c) => c.level === 'Principiante')
              .map((c) => c.instrument);

            if (beginnerInstruments.includes(course.instrument)) {
              setSelectedCourses([...selectedCourses, course]);
            } else {
              setAlertMessage(
                'El curso intermedio debe ser del mismo instrumento que uno de los cursos de nivel Principiante seleccionados.'
              );
            }
          } else if (course.level === 'Avanzado') {
            const intermediateInstruments = selectedCourses
              .filter((c) => c.level === 'Intermedio')
              .map((c) => c.instrument);

            if (intermediateInstruments.includes(course.instrument)) {
              setSelectedCourses([...selectedCourses, course]);
            } else {
              setAlertMessage(
                'El curso avanzado debe ser del mismo instrumento que el curso de nivel Intermedio seleccionado.'
              );
            }
          } else {
            setSelectedCourses([...selectedCourses, course]);
          }
        } else {
          setSelectedCourses([...selectedCourses, course]);
        }
      } else {
        setAlertMessage('Has alcanzado el límite de cursos para este nivel en tu plan.');
      }
    }
  };

  const handleContinue = () => {
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
      setAlertMessage('Debes completar la selección de cursos según tu plan.');
      return;
    }

    navigate('/teacher-selection', { state: { selectedCourses, planName } });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-4">Selecciona tus Cursos</h2>

      {/* Incluir el componente Alert */}
      <Alert
        message={alertMessage}
        onClose={() => setAlertMessage('')}
      />

      {levels.map((level) => {
        const coursesByLevel = availableCourses.filter(
          (course) => course.level === level
        );

        const limits = planLimits[planName];
        if (
          (level === 'Intermedio' && limits.intermediateCourses === 0) ||
          (level === 'Avanzado' && limits.advancedCourses === 0)
        ) {
          return null;
        }

        // Instrucciones específicas por nivel
        let levelInstructions = '';
        if (planName === 'Beginner' && level === 'Principiante') {
          levelInstructions = 'Selecciona 1 curso de nivel Principiante.';
        } else if (planName === 'Medium') {
          if (level === 'Principiante') {
            levelInstructions = 'Selecciona 2 cursos de nivel Principiante.';
          } else if (level === 'Intermedio') {
            levelInstructions = 'Selecciona 1 curso de nivel Intermedio del mismo instrumento que un curso Principiante.';
          }
        } else if (planName === 'Pro') {
          if (level === 'Principiante') {
            levelInstructions = 'Selecciona 3 cursos de nivel Principiante.';
          } else if (level === 'Intermedio') {
            levelInstructions = 'Selecciona 1 curso de nivel Intermedio del mismo instrumento que un curso Principiante.';
          } else if (level === 'Avanzado') {
            levelInstructions = 'Selecciona 1 curso de nivel Avanzado del mismo instrumento que el curso Intermedio.';
          }
        }

        return (
          <div key={level} className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">{level}</h3>
            {levelInstructions && (
              <p className="mb-4 text-blue-700 dark:text-blue-300">{levelInstructions}</p>
            )}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {coursesByLevel.map((course) => {
                const isSelected = selectedCourses.find((c) => c.id === course.id);

                const counts = {
                  Principiante: selectedCourses.filter((c) => c.level === 'Principiante')
                    .length,
                  Intermedio: selectedCourses.filter((c) => c.level === 'Intermedio')
                    .length,
                  Avanzado: selectedCourses.filter((c) => c.level === 'Avanzado').length,
                };

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
                    className={`border rounded-lg overflow-hidden cursor-pointer text-sm ${
                      isDisabled ? 'opacity-50 cursor-not-allowed' : ''
                    } ${
                      isSelected ? 'bg-yellow-100 dark:bg-yellow-500' : 'bg-white dark:bg-gray-800'
                    }`}
                    onClick={() => !isDisabled && handleCourseSelect(course)}
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-2">
                      <h4 className="font-bold text-base mb-1">{course.title}</h4>
                      <p className="text-xs mb-1">Instrumento: {course.instrument}</p>
                      <p className="text-xs mb-1">Instructor: {course.instructor}</p>
                      <p className="text-xs">Duración: {course.duration}</p>
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