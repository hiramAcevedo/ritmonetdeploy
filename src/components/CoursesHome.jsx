// src/components/CoursesHome.jsx

import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

const instruments = [
  {
    name: 'Guitarra',
    image: '/assets/img/CoursesHome/free-photo-of-madera-arboles-hierba-cesped.jpg',
  },
  {
    name: 'Piano',
    image: '/assets/img/CoursesHome/pexels-photo-9646751.jpg',
  },
  {
    name: 'Batería',
    image: '/assets/img/CoursesHome/pexels-photo-11776933.jpg',
  },
  {
    name: 'Técnica Vocal',
    image: '/assets/img/CoursesHome/pexels-photo-9001968.jpg',
  },
];

const CoursesHome = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Nuestros Cursos por Instrumento
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {instruments.map((instrument, index) => {
          const instrumentSlug = slugify(instrument.name);
          return (
            <Link to={`/courses/${instrumentSlug}`} key={index} className="block">
              <div className="border rounded-lg overflow-hidden bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <img
                  src={instrument.image}
                  alt={instrument.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-center">{instrument.name}</h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesHome;