// src/components/PaymentForm.jsx

import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const PaymentForm = () => {
  const navigate = useNavigate();
  const { cart, purchaseCourses } = useContext(UserContext);

  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    // Aquí puedes agregar validaciones y lógica de procesamiento de pago

    // Simulamos el procesamiento del pago
    setTimeout(() => {
      purchaseCourses(); // Mover cursos a adquiridos y vaciar el carrito
      navigate('/confirmation');
    }, 1000);
  };

  const totalPrice = cart.reduce((total, course) => total + course.price, 0);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Información de Pago</h1>
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <form onSubmit={handlePayment}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Número de Tarjeta</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
              placeholder="XXXX XXXX XXXX XXXX"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Nombre del Titular</label>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
              placeholder="Como aparece en la tarjeta"
              required
            />
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-sm font-bold mb-2">Fecha de Expiración</label>
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none"
                placeholder="MM/AA"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-bold mb-2">CVC</label>
              <input
                type="text"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none"
                placeholder="CVC"
                required
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <p className="text-lg font-bold">Total: ${totalPrice} USD</p>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 text-white font-bold py-2 px-6 rounded"
            >
              Pagar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;