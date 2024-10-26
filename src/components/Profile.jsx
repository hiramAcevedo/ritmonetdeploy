// src/components/Profile.jsx

import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { user, updateUser } = useContext(UserContext);

  // Estados locales para manejar el modo edición
  const [isEditingGeneral, setIsEditingGeneral] = useState(false);
  const [isEditingPayment, setIsEditingPayment] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Tu Perfil</h1>

      {/* Tarjeta de Información General */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Información General</h2>
          {!isEditingGeneral && (
            <button
              onClick={() => setIsEditingGeneral(true)}
              className="text-blue-500 hover:underline"
            >
              Editar
            </button>
          )}
        </div>

        {isEditingGeneral ? (
          <div>
            {/* Campos de edición de información general */}
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Nombre Completo:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={editedUser.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="username" className="block mb-2">
                Nombre de Usuario:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={editedUser.username}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={editedUser.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="age" className="block mb-2">
                Edad:
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={editedUser.age}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => {
                  updateUser(editedUser);
                  setIsEditingGeneral(false);
                }}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                Guardar
              </button>
              <button
                onClick={() => {
                  setEditedUser(user);
                  setIsEditingGeneral(false);
                }}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Mostrar información general */}
            <p className="mb-4">
              <strong>Nombre Completo:</strong> {user.name}
            </p>
            <p className="mb-4">
              <strong>Nombre de Usuario:</strong> {user.username}
            </p>
            <p className="mb-4">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="mb-4">
              <strong>Edad:</strong> {user.age}
            </p>
          </div>
        )}
      </div>

      {/* Tarjeta de Información de Pago */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Información de Pago</h2>
          {!isEditingPayment && (
            <button
              onClick={() => setIsEditingPayment(true)}
              className="text-blue-500 hover:underline"
            >
              Editar
            </button>
          )}
        </div>

        {isEditingPayment ? (
          <div>
            {/* Campos de edición de información de pago */}
            <div className="mb-4">
              <label htmlFor="creditCard" className="block mb-2">
                Tarjeta de Crédito:
              </label>
              <input
                type="text"
                id="creditCard"
                name="creditCard"
                value={editedUser.creditCard}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Número de tarjeta"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="expiryDate" className="block mb-2">
                Fecha de Expiración:
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={editedUser.expiryDate}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="MM/AA"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="cvv" className="block mb-2">
                CVV:
              </label>
              <input
                type="password"
                id="cvv"
                name="cvv"
                value={editedUser.cvv}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="CVV"
              />
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => {
                  updateUser(editedUser);
                  setIsEditingPayment(false);
                }}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                Guardar
              </button>
              <button
                onClick={() => {
                  setEditedUser(user);
                  setIsEditingPayment(false);
                }}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Mostrar información de pago */}
            <p className="mb-4">
              <strong>Tarjeta de Crédito:</strong>{' '}
              {user.creditCard ? '**** **** **** ' + user.creditCard.slice(-4) : 'No registrada'}
            </p>
            <p className="mb-4">
              <strong>Fecha de Expiración:</strong>{' '}
              {user.expiryDate ? user.expiryDate : 'No registrada'}
            </p>
            {/* Por seguridad, no mostramos el CVV */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
