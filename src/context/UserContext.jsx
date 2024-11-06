// src/context/UserContext.jsx

import React, { createContext, useState } from 'react';

// Crear el contexto
export const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Juan Pérez',
    username: 'juanperez',
    email: 'juanperez@example.com',
    age: 30,
    creditCard: '1234567812345678',
    expiryDate: '12/24',
    cvv: '123',
  }); // Información del usuario por defecto para pruebas

  const [cart, setCart] = useState([]); // Estado del carrito
  const [acquiredCourses, setAcquiredCourses] = useState([]); // Cursos adquiridos

  const addToCart = (course) => {
    setCart((prevCart) => {
      if (
        !prevCart.find((c) => c.id === course.id) &&
        !acquiredCourses.find((c) => c.id === course.id)
      ) {
        return [...prevCart, course];
      } else {
        return prevCart; // No agregar duplicados ni cursos ya adquiridos
      }
    });
  };

  const removeFromCart = (courseId) => {
    setCart((prevCart) => prevCart.filter((course) => course.id !== courseId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const purchaseCourses = () => {
    // Agregar cursos del carrito a los cursos adquiridos
    setAcquiredCourses((prevCourses) => [...prevCourses, ...cart]);
    // Vaciar el carrito
    clearCart();
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        updateUser,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        acquiredCourses,
        purchaseCourses,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};