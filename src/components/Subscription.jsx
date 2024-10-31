// src/components/Subscription.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import plansData from '../data/PlansData.json';

const Subscription = () => {
  const navigate = useNavigate();

  const [selectedDuration, setSelectedDuration] = useState('1 mes');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const durations = ['1 mes', '6 meses', '12 meses'];

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
  };

  const handlePlanSelect = (planName) => {
    setSelectedPlan(planName);
  };

  const handleSubscribe = () => {
    if (selectedPlan) {
      navigate('/course-selection', { state: { planName: selectedPlan, duration: selectedDuration } });
    } else {
      alert('Por favor, selecciona un plan.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Elige tu Plan</h1>

      {/* Selector de duración */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex justify-center">
          {durations.map((duration, index) => (
            <button
              key={index}
              onClick={() => handleDurationChange(duration)}
              className={`mx-2 px-4 py-2 rounded ${
                selectedDuration === duration
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200'
              }`}
            >
              {duration}
            </button>
          ))}
        </div>
        {selectedDuration === '12 meses' && (
          <div className="mt-4 bg-yellow-500 text-white px-4 py-1 rounded-full">
            ¡Mejor Oferta!
          </div>
        )}
      </div>

      {/* Instrucciones dinámicas */}
      <div className="mb-8">
        {selectedPlan && (
          <div className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 p-4 rounded">
            <h3 className="font-bold mb-2">Instrucciones:</h3>
            {selectedPlan === 'Beginner' && (
              <p>
                En el plan <strong>Beginner</strong>, debes seleccionar 1 curso de nivel Principiante y 1 maestro.
              </p>
            )}
            {selectedPlan === 'Medium' && (
              <p>
                En el plan <strong>Medium</strong>, debes seleccionar 2 cursos de nivel Principiante, 1 curso de nivel Intermedio y hasta 2 maestros.
              </p>
            )}
            {selectedPlan === 'Pro' && (
              <p>
                En el plan <strong>Pro</strong>, debes seleccionar 3 cursos de nivel Principiante, 1 curso de nivel Intermedio, 1 curso de nivel Avanzado y hasta 3 maestros.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Planes */}
      <div className="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-8">
        {plansData.map((plan, index) => {
          const durationInfo = plan.durations.find(
            (d) => d.period === selectedDuration
          );

          const isSelected = selectedPlan === plan.name;

          return (
            <div
              key={index}
              onClick={() => handlePlanSelect(plan.name)}
              className={`relative w-full md:w-1/3 border rounded-lg p-8 text-center cursor-pointer flex flex-col justify-between ${
                isSelected ? 'bg-yellow-100 dark:bg-yellow-500' : 'bg-white dark:bg-gray-800'
              } ${
                isSelected ? 'border-yellow-500' : 'border-gray-200 dark:border-gray-700'
              } shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div>
                <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
                <p className="text-3xl font-extrabold mb-2">{durationInfo.price}</p>
                {durationInfo.bonus && (
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">{durationInfo.bonus}</p>
                )}
                <ul className="text-left mb-6 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-blue-500 dark:text-blue-300 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Botón de Suscribirse */}
      <div className="text-center mt-8">
        <button
          onClick={handleSubscribe}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 text-white font-bold py-3 px-6 rounded"
        >
          Continuar con la Suscripción
        </button>
      </div>
    </div>
  );
};

export default Subscription;