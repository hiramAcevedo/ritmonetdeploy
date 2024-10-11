// src/components/Confirmation.jsx

import { Link, useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">¡Gracias por tu compra!</h1>
      <p className="mb-4">
        Tu pedido ha sido procesado exitosamente.
      </p>
      <p className="mb-4">
        Hemos enviado un correo de confirmación a tu dirección de email con los detalles de tu pedido.
      </p>
      <p className="mb-8">
        Número de pedido: <strong>#123456789</strong>
      </p>
      <p className="mb-8">
        Si tienes alguna pregunta, por favor contáctanos a través de nuestro{' '}
        <Link to="/about-us#contact" className="text-blue-500 underline">Centro de Ayuda</Link>.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 text-white font-bold py-2 px-4 rounded"
      >
        Volver al Inicio
      </button>
    </div>
  );
};

export default Confirmation;
