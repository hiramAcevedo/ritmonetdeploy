// src/components/TeacherDetails.jsx

import { useParams } from 'react-router-dom';
import teachers from '../data/TeachersData.json';

const TeacherDetails = () => {
  const { id } = useParams();

  // Buscar el maestro correspondiente
  const teacher = teachers.find((t) => t.id === parseInt(id));

  if (!teacher) {
    return <div>Maestro no encontrado</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row">
        <img
          src={teacher.image}
          alt={teacher.name}
          className="w-full md:w-1/2 h-64 object-cover"
        />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">{teacher.name}</h1>
          <p className="text-sm mb-2">Instrumento: {teacher.instrument}</p>
          <p className="text-sm mb-2">Experiencia: {teacher.experience}</p>
          <p className="text-base mb-4">
            {/* Puedes agregar una descripción más detallada aquí */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;