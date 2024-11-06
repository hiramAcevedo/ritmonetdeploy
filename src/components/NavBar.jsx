// src/components/NavBar.jsx

import { Link } from 'react-router-dom';
import { useState, useRef, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';

// Importamos los íconos de Heroicons versión 2
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  SunIcon,
  MoonIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

const NavBar = ({ darkMode, toggleDarkMode }) => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);
  const [isMobileAccountMenuOpen, setIsMobileAccountMenuOpen] = useState(false);

  // Obtenemos el carrito del contexto para mostrar el número de artículos
  const { cart } = useContext(UserContext);

  // Refs para detectar clics fuera de los menús de escritorio
  const coursesRef = useRef(null);
  const accountRef = useRef(null);

  // Función para cerrar menús de escritorio al hacer clic fuera
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
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-800 dark:text-white" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-800 dark:text-white" />
            )}
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
            <button className="hover:underline focus:outline-none flex items-center">
              Cursos
              <ChevronDownIcon className="w-4 h-4 ml-1" />
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
              <UserCircleIcon className="w-6 h-6 text-gray-800 dark:text-white" />
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

          <Link to="/cart" className="hover:underline relative">
            <ShoppingCartIcon className="w-6 h-6 text-gray-800 dark:text-white" />
            {cart && cart.length > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          <button onClick={toggleDarkMode} className="p-2 rounded-full">
            {darkMode ? (
              <SunIcon className="w-6 h-6 text-yellow-500" />
            ) : (
              <MoonIcon className="w-6 h-6 text-gray-800 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
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
              <div className="flex justify-between items-center">
                <Link
                  to="/courses"
                  className="py-2 hover:underline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Cursos
                </Link>
                <button
                  onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                  className="focus:outline-none"
                  aria-label="Toggle Courses Submenu"
                >
                  <ChevronDownIcon
                    className={`w-4 h-4 transform ${
                      isMobileCoursesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              {isMobileCoursesOpen && (
                <div className="mt-2 ml-4">
                  <ul>
                    {courses.map((course, index) => (
                      <li key={index}>
                        <Link
                          to={course.path}
                          className="block py-2 hover:underline"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileCoursesOpen(false);
                          }}
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
                onClick={() =>
                  setIsMobileAccountMenuOpen(!isMobileAccountMenuOpen)
                }
                className="w-full text-left py-2 focus:outline-none hover:underline flex justify-between items-center"
              >
                <span>Cuenta</span>
                <ChevronDownIcon
                  className={`w-4 h-4 transform ${
                    isMobileAccountMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isMobileAccountMenuOpen && (
                <div className="mt-2 ml-4">
                  <ul>
                    <li>
                      <Link
                        to="/profile"
                        className="block py-2 hover:underline"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileAccountMenuOpen(false);
                        }}
                      >
                        Perfil de Usuario
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/acquired-courses"
                        className="block py-2 hover:underline"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileAccountMenuOpen(false);
                        }}
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
              className="block py-2 hover:underline flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ShoppingCartIcon className="w-6 h-6 mr-2" />
              Carrito
              {cart && cart.length > 0 && (
                <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>

            <button
              onClick={() => {
                toggleDarkMode();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 focus:outline-none hover:underline flex items-center"
            >
              {darkMode ? (
                <>
                  <SunIcon className="w-6 h-6 mr-2 text-yellow-500" />
                  Modo Claro
                </>
              ) : (
                <>
                  <MoonIcon className="w-6 h-6 mr-2 text-gray-800 dark:text-white" />
                  Modo Oscuro
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;