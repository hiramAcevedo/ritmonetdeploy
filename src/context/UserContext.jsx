// src/context/UserContext.jsx

import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Estado inicial del usuario
  const [user, setUser] = useState({
    name: 'Juan Pérez',
    username: 'juanperez',
    email: 'juan.perez@example.com',
    age: 30,
    creditCard: '',
    expiryDate: '',
    cvv: '',
  });

  // Función para actualizar los datos del usuario
  const updateUser = (newUserData) => {
    setUser({ ...user, ...newUserData });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
