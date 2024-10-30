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
      // Puedes pasar la información del plan y duración seleccionados a la siguiente página
      navigate('/course-selection', { state: { planName: selectedPlan, duration: selectedDuration } });
    } else {
      alert('Por favor, selecciona un plan.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Elige tu Plan</h1>

      {/* Selector de duración */}
      <div className="flex justify-center mb-8">
        {durations.map((duration, index) => (
          <button
            key={index}
            onClick={() => handleDurationChange(duration)}
            className={`mx-2 px-4 py-2 rounded ${
              selectedDuration === duration
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {duration}
          </button>
        ))}
      </div>

      {/* Planes */}
      <div className="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-8">
        {plansData.map((plan, index) => {
          const durationInfo = plan.durations.find(
            (d) => d.period === selectedDuration
          );

          const isBestDeal = selectedDuration === '12 meses';

          const isSelected = selectedPlan === plan.name;

          return (
            <div
              key={index}
              onClick={() => handlePlanSelect(plan.name)}
              className={`w-full md:w-1/3 border rounded-lg p-8 text-center cursor-pointer flex flex-col justify-between ${
                isSelected ? 'border-yellow-500' : 'border-gray-200'
              } ${
                isBestDeal && selectedPlan === plan.name
                  ? 'bg-yellow-100'
                  : 'bg-white'
              } shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              {isBestDeal && (
                <div className="absolute -mt-16 ml-2 bg-yellow-500 text-white px-4 py-1 rounded-full">
                  ¡Mejor Oferta!
                </div>
              )}
              <div>
                <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
                <p className="text-3xl font-extrabold mb-2">{durationInfo.price}</p>
                {durationInfo.bonus && (
                  <p className="text-sm text-green-600 mb-4">{durationInfo.bonus}</p>
                )}
                <ul className="text-left mb-6 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
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