import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-8 bg-gray-800 text-white dark:bg-gray-800 dark:text-white">
            <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                {/* Logo o Nombre de la Marca */}
                <div className="mb-4 md:mb-0">
                <a href="/" className="text-3xl font-bold">
                    Ritmonet
                </a>
                </div>
                {/* Enlaces de Navegación */}
                <div className="flex space-x-6">
                <a
                    href="/about-us"
                    className="hover:underline text-white hover:text-blue-400 dark:hover:text-blue-300"
                >
                    Sobre Nosotros
                </a>
                <a
                    href="/courses"
                    className="hover:underline text-white hover:text-blue-400 dark:hover:text-blue-300"
                >
                    Cursos
                </a>
                <a
                    href="/teachers"
                    className="hover:underline text-white hover:text-blue-400 dark:hover:text-blue-300"
                >
                    Profesores
                </a>
                <a
                    href="/contact"
                    className="hover:underline text-white hover:text-blue-400 dark:hover:text-blue-300"
                >
                    Contacto
                </a>
                </div>
                {/* Íconos de Redes Sociales */}
                <div className="flex space-x-4 mt-4 md:mt-0">
                <a
                    href="#"
                    className="text-white hover:text-blue-400 dark:hover:text-blue-300"
                >
                    <FaFacebookF className="w-5 h-5" />
                </a>
                <a
                    href="#"
                    className="text-white hover:text-blue-400 dark:hover:text-blue-300"
                >
                    <FaTwitter className="w-5 h-5" />
                </a>
                <a
                    href="#"
                    className="text-white hover:text-blue-400 dark:hover:text-blue-300"
                >
                    <FaInstagram className="w-5 h-5" />
                </a>
                <a
                    href="#"
                    className="text-white hover:text-blue-400 dark:hover:text-blue-300"
                >
                    <FaLinkedinIn className="w-5 h-5" />
                </a>
                </div>
            </div>
            {/* Derechos de Autor */}
            <div className="text-center mt-8">
                &copy; {new Date().getFullYear()} Melody Masters. Todos los derechos reservados.
            </div>
            </div>
        </footer>
    );
};

export default Footer;
