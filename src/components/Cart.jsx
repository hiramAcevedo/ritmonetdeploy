// src/components/Cart.jsx

import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/confirmation');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Tu Carrito</h1>
      <div className="border rounded-lg p-4 mb-4">
        <h2 className="text-xl font-bold">Master the Guitar</h2>
        <p className="text-sm">Instructor: John Doe</p>
        <p className="text-sm">Precio: $99</p>
      </div>
      <button
        onClick={handleCheckout}
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 text-white font-bold py-2 px-4 rounded"
      >
        Pagar
      </button>
    </div>
  );
};

export default Cart;
