// src/components/CourseUnits.jsx

import React from 'react';

const CourseUnits = ({ units }) => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleUnit = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Contenido del Curso</h2>
      <div className="space-y-4">
        {units.map((unit, index) => (
          <div key={index} className="border rounded-md">
            <button
              onClick={() => toggleUnit(index)}
              className="w-full text-left px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none flex justify-between items-center"
            >
              <span className="font-semibold">{unit.title}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-2 bg-white dark:bg-gray-900">
                <p className="text-gray-700 dark:text-gray-300">{unit.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseUnits;