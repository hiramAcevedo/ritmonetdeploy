// src/components/LoginRegister.jsx

import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Registro de Usuario</h1>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <label htmlFor="nombre" className="block mb-2">
          Nombre Completo:
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          className="w-full mb-4 p-2 border rounded bg-white text-gray-900 dark:bg-gray-700 dark:text-white"
        />

        <label htmlFor="username" className="block mb-2">
          Nombre de Usuario:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          required
          className="w-full mb-4 p-2 border rounded bg-white text-gray-900 dark:bg-gray-700 dark:text-white"
        />

        <label htmlFor="email" className="block mb-2">
          Correo Electrónico:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full mb-4 p-2 border rounded bg-white text-gray-900 dark:bg-gray-700 dark:text-white"
        />

        <label htmlFor="contrasena" className="block mb-2">
          Contraseña:
        </label>
        <input
          type="password"
          id="contrasena"
          name="contrasena"
          required
          className="w-full mb-4 p-2 border rounded bg-white text-gray-900 dark:bg-gray-700 dark:text-white"
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 text-white font-bold py-2 px-4 rounded w-full"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default LoginRegister;