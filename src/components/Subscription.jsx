// src/components/Subscription.jsx

import { useNavigate } from 'react-router-dom';

const Subscription = () => {
  const navigate = useNavigate();

  const plans = [
    { name: 'Beginner', price: '$19/mes' },
    { name: 'Medium', price: '$49/mes' },
    { name: 'Pro', price: '$99/mes' },
  ];

  const handleSubscribe = () => {
    navigate('/subscription-confirmation');
  };
    // ...resto del código permanece igual
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-12">Elige tu Plan</h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          {plans.map((plan, index) => (
            <div key={index} className="border rounded-lg p-8 text-center bg-white dark:bg-gray-800">
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
              <p className="text-xl mb-8">{plan.price}</p>
              <button
                onClick={handleSubscribe}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 text-white font-bold py-2 px-4 rounded"
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
