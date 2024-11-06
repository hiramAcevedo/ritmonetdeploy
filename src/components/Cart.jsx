// src/components/Cart.jsx

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useContext(UserContext);

  const handleCheckout = () => {
    navigate('/payment'); // Navegar a la página de pago
  };

  const totalPrice = cart.reduce((total, course) => total + course.price, 0);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Tu Carrito</h1>
      {cart.length === 0 ? (
        <p className="text-center text-lg">No tienes cursos en tu carrito.</p>
      ) : (
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Lista de Cursos */}
          <div className="md:w-2/3">
            {cart.map((course) => (
              <div key={course.id} className="flex items-center border-b py-4">
                {/* Imagen del curso */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-24 h-24 object-cover rounded-md"
                />
                {/* Detalles del curso */}
                <div className="ml-4 flex-grow">
                  <h2 className="text-xl font-bold">{course.title}</h2>
                  <p className="text-sm">Instructor: {course.instructor}</p>
                </div>
                {/* Precio y eliminar */}
                <div className="text-right">
                  <p className="text-lg font-bold">${course.price} USD</p>
                  <button
                    onClick={() => removeFromCart(course.id)}
                    className="text-red-500 underline mt-2"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Resumen del Pedido */}
          <div className="md:w-1/3 mt-8 md:mt-0">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Resumen del Pedido</h2>
              <div className="flex justify-between mb-2">
                <span>Total:</span>
                <span className="font-bold">${totalPrice} USD</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 text-white font-bold py-2 px-4 rounded"
              >
                Proceder al Pago
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;