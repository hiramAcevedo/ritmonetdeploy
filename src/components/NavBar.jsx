// src/components/NavBar.jsx

import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const NavBar = ({ darkMode, toggleDarkMode }) => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs para detectar clics fuera de los menús
  const coursesRef = useRef(null);
  const accountRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Función para cerrar menús al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (coursesRef.current && !coursesRef.current.contains(event.target)) {
        setIsCoursesOpen(false);
      }
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setIsAccountMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
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
        {/* Izquierda: Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-3xl font-bold">
            Ritmonet
          </Link>
        </div>

        {/* Botón del Menú Móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
            {/* Icono de Menú Hamburguesa */}
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Centro y Derecha: Enlaces de Navegación */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Barra de Búsqueda */}
          <input
            type="text"
            placeholder="Buscar..."
            className="px-2 py-1 border rounded-md focus:outline-none"
          />

          <Link to="/subscription" className="hover:underline">
            Clases
          </Link>

          <div
            className="relative"
            ref={coursesRef}
            onMouseEnter={() => setIsCoursesOpen(true)}
            onMouseLeave={() => setIsCoursesOpen(false)}
          >
            <button className="hover:underline focus:outline-none">
              Cursos
            </button>
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

          {/* Acciones de Usuario */}
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

      {/* Menú Móvil */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="p-4">
            {/* Barra de Búsqueda */}
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full px-2 py-1 border rounded-md focus:outline-none mb-4"
            />

            <Link
              to="/subscription"
              className="block py-2 hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Clases
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="w-full text-left py-2 focus:outline-none hover:underline flex justify-between items-center"
              >
                <span>Cursos</span>
                <svg
                  className={`w-4 h-4 transform ${
                    isCoursesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isCoursesOpen && (
                <div className="mt-2 ml-4">
                  <ul>
                    {courses.map((course, index) => (
                      <li key={index}>
                        <Link
                          to={course.path}
                          className="block py-2 hover:underline"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {course.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link
              to="/teachers"
              className="block py-2 hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Maestros
            </Link>

            <Link
              to="/about-us"
              className="block py-2 hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nosotros
            </Link>

            <Link
              to="/login"
              className="block py-2 hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Iniciar Sesión / Registrarse
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
                className="w-full text-left py-2 focus:outline-none hover:underline flex justify-between items-center"
              >
                <span>Cuenta</span>
                <svg
                  className={`w-4 h-4 transform ${
                    isAccountMenuOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isAccountMenuOpen && (
                <div className="mt-2 ml-4">
                  <ul>
                    <li>
                      <Link
                        to="/profile"
                        className="block py-2 hover:underline"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Perfil de Usuario
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/acquired-courses"
                        className="block py-2 hover:underline"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Cursos Adquiridos
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link
              to="/cart"
              className="block py-2 hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              🛒 Carrito
            </Link>

            <button
              onClick={() => {
                toggleDarkMode();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 focus:outline-none hover:underline flex items-center"
            >
              {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;