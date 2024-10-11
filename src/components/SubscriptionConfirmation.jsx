// src/components/SubscriptionConfirmation.jsx

import { useNavigate } from 'react-router-dom';

const SubscriptionConfirmation = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/subscribed-course');
  };

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">¡Gracias por Suscribirte!</h1>
      <p className="mb-8">
        Tu suscripción ha sido activada exitosamente. Ahora tienes acceso a todos nuestros cursos.
      </p>
      <button
        onClick={handleContinue}
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 text-white font-bold py-2 px-4 rounded"
      >
        Continuar
      </button>
    </div>
  );
};

export default SubscriptionConfirmation;
