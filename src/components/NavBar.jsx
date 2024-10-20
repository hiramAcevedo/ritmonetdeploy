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
    { name: 'Guitarra', path: '/courses/guitarra' },
    { name: 'Piano', path: '/courses/piano' },
    { name: 'Batería', path: '/courses/bateria' },
    { name: 'Técnica Vocal', path: '/courses/tecnica-vocal' },
  ];

  return (
    <nav className="p-4 bg-white shadow-md dark:bg-gray-800 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Izquierda: Logo y Barra de Búsqueda */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-3xl font-bold">
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

          <div
            className="relative"
            ref={coursesRef}
            onMouseEnter={() => setIsCoursesOpen(true)}
            onMouseLeave={() => setIsCoursesOpen(false)}
          >
            <Link to="/courses" className="hover:underline focus:outline-none">
              Cursos
            </Link>
            {isCoursesOpen && (
              <div className="absolute left-0 top-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
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

          <div
            className="relative"
            ref={accountRef}
            onMouseEnter={() => setIsAccountMenuOpen(true)}
            onMouseLeave={() => setIsAccountMenuOpen(false)}
          >
            <button className="focus:outline-none">
              <span role="img" aria-label="User">
                👤
              </span>
            </button>
            {isAccountMenuOpen && (
              <div className="absolute right-0 top-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
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
