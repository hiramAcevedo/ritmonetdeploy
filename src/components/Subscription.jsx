// src/components/Subscription.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Subscription = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Beginner',
      price: '$19/mes',
      features: [
        'Acceso a un curso de instrumento de nivel principiante.',
        '2 horas de sesión virtual semanal con un tutor.',
        'Soporte por correo electrónico.',
      ],
    },
    {
      name: 'Medium',
      price: '$49/mes',
      features: [
        'Acceso a todos los cursos de nivel principiante e intermedio.',
        '4 horas de sesión virtual semanal con un tutor.',
        'Acceso a partituras y videos exclusivos.',
        'Una Masterclass mensual.',
      ],
    },
    {
      name: 'Pro',
      price: '$99/mes',
      features: [
        'Acceso a todos los cursos de todos los niveles.',
        '6 horas de sesión virtual semanal con un tutor.',
        'Acceso a partituras y videos exclusivos.',
        'Una Masterclass quincenal.',
        'Derecho a producir un disco anual.',
      ],
    },
  ];

  const handleSubscribe = (planName) => {
    // Aquí puedes implementar la lógica para manejar la suscripción según el plan seleccionado
    navigate('/subscription-confirmation');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Elige tu Plan</h1>
      <div className="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-lg p-8 text-center bg-white dark:bg-gray-800 flex flex-col justify-between ${
              plan.name === 'Pro' ? 'border-purple-500' : ''
            } shadow-lg hover:shadow-xl transition-shadow duration-300`}
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
              <p className="text-3xl font-extrabold mb-6">{plan.price}</p>
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
            <button
              onClick={() => handleSubscribe(plan.name)}
              className={`mt-auto bg-gradient-to-r ${
                plan.name === 'Pro'
                  ? 'from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600'
                  : 'from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
              } transition duration-300 text-white font-bold py-2 px-4 rounded`}
            >
              Suscribirse
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;