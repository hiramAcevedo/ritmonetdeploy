// src/components/AcquiredCourses.jsx

import { Link } from 'react-router-dom';

const AcquiredCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Master the Guitar",
      instructor: "John Doe",
    },
    // ... otros cursos si lo deseas
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Tus Cursos</h1>
      {courses.map((course) => (
        <div key={course.id} className="border rounded-lg p-4 mb-4">
          <h2 className="text-xl font-bold">{course.title}</h2>
          <p className="text-sm">Instructor: {course.instructor}</p>
          <Link
            to="/homepage"
            className="text-blue-500 underline mt-2 inline-block"
          >
            Ir al Curso
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AcquiredCourses;
