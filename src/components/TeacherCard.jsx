// src/components/TeacherCard.jsx

import { Link } from 'react-router-dom';

const TeacherCard = ({ teacher }) => {
  return (
    <Link to={`/teachers/${teacher.id}`} className="block">
      <div className="border rounded-lg overflow-hidden bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <img
          src={teacher.image}
          alt={teacher.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{teacher.name}</h3>
          <p className="text-sm mb-2">Instrument: {teacher.instrument}</p>
          <p className="text-sm mb-4">Experience: {teacher.experience}</p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 w-full text-white font-bold py-2 px-4 rounded">
            Book a Lesson
          </button>
        </div>
      </div>
    </Link>
  );
};

export default TeacherCard;
