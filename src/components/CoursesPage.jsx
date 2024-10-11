// src/components/CoursesPage.jsx

import { useParams } from 'react-router-dom';
import CourseCard from './CourseCard.jsx';

const allCourses = [
  // ... (incluye todos los cursos con el campo "instrument")
];

const CoursesPage = () => {
  const { instrument } = useParams();

  // Filtrar cursos por instrumento
  const courses = allCourses.filter(
    (course) => course.instrument.toLowerCase() === instrument.toLowerCase()
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Cursos de {instrument.charAt(0).toUpperCase() + instrument.slice(1)}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
