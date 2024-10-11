// src/components/CourseCard.jsx

import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="border rounded-lg overflow-hidden bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{course.title}</h3>
        <p className="text-sm mb-2">Instructor: {course.instructor}</p>
        <p className="text-sm mb-2">Duration: {course.duration}</p>
        <p className="text-sm mb-4">Level: {course.level}</p>
        <Link
          to="/course-details"
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 w-full text-white font-bold py-2 px-4 rounded block text-center"
        >
          View Course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
