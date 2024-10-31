// src/components/CoursesPage.jsx

import { useParams } from 'react-router-dom';
import CourseCard from './CourseCard.jsx';
import courses from '../data/CoursesData.json';
import { slugify } from '../utils/slugify';

const CoursesPage = () => {
  const { instrument } = useParams();

  // Filtrar cursos por instrumento
  const coursesByInstrument = courses.filter(
    (course) => slugify(course.instrument) === instrument
  );

  // Obtener el nombre real del instrumento para mostrar en el título
  const instrumentName =
    coursesByInstrument.length > 0 ? coursesByInstrument[0].instrument : instrument;

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Cursos de {instrumentName.charAt(0).toUpperCase() + instrumentName.slice(1)}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {coursesByInstrument.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
