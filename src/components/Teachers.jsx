// src/components/Teachers.jsx

import TeacherCard from './TeacherCard.jsx';
import teachers from '../data/TeachersData.json';

const Teachers = () => {
  return (
    <div>
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestros Maestros de Música Expertos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Teachers;
