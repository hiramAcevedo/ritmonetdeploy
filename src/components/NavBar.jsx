// src/components/NavBar.jsx

import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const NavBar = ({ darkMode, toggleDarkMode }) => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  // Refs para detectar clics fuera de los menús
  const coursesRef = useRef(null);
  const accountRef = useRef(null);

  // Función para cerrar menús al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (coursesRef.current && !coursesRef.current.contains(event.target)) {
        setIsCoursesOpen(false);
      }
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setIsAccountMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const courses = [
    { name: 'Guitarra', path: '/course-details' },
    { name: 'Piano', path: '/course-details' },
    { name: 'Batería', path: '/course-details' },
    { name: 'Técnica Vocal', path: '/course-details' },
  ];

  return (
    <nav className="p-4 bg-white shadow-md dark:bg-gray-800 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Izquierda: Logo y Barra de Búsqueda */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold">
            Ritmonet
          </Link>
          <input
            type="text"
            placeholder="Buscar..."
            className="px-2 py-1 border rounded-md focus:outline-none"
          />
        </div>

        {/* Centro: Enlaces de Navegación */}
        <div className="flex items-center space-x-4">
          <Link to="/subscription" className="hover:underline">
            Clases
          </Link>

          <div className="relative" ref={coursesRef}>
            <button
              onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              className="hover:underline focus:outline-none"
            >
              Cursos
            </button>
            {isCoursesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
                <ul>
                  {courses.map((course, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Link to={course.path}>{course.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link to="/teachers" className="hover:underline">
            Maestros
          </Link>

          <Link to="/about-us" className="hover:underline">
            Nosotros
          </Link>
        </div>

        {/* Derecha: Acciones de Usuario */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="hover:underline">
            Iniciar Sesión / Registrarse
          </Link>

          <div className="relative" ref={accountRef}>
            <button
              onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
              className="focus:outline-none"
            >
              <span role="img" aria-label="User">
                👤
              </span>
            </button>
            {isAccountMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link to="/profile">Perfil de Usuario</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link to="/acquired-courses">Cursos Adquiridos</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link to="/cart" className="hover:underline">
            <span role="img" aria-label="Cart">
              🛒
            </span>
          </Link>

          <button onClick={toggleDarkMode} className="p-2 rounded-full">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
