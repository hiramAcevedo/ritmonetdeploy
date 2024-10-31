// src/components/Alert.jsx

import React from 'react';

const Alert = ({ message, type = 'error', onClose }) => {
  return (
    <div
      className={`fixed bottom-4 right-4 max-w-xs w-full z-50 p-4 rounded shadow-lg transition-transform transform ${
        message ? 'translate-y-0' : 'translate-y-20'
      } ${
        type === 'error'
          ? 'bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200'
          : 'bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200'
      }`}
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-xl font-bold">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Alert;