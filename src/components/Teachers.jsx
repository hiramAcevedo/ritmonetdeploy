// src/components/Teachers.jsx

import TeacherCard from './TeacherCard.jsx';

const teachers = [
  // ... (lista de profesores permanece igual)
  { id: 1, name: "John Smith", instrument: "Guitar", experience: "15 years", image: "https://images.pexels.com/photos/4088012/pexels-photo-4088012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 2, name: "Sarah Johnson", instrument: "Piano", experience: "20 years", image: "https://images.pexels.com/photos/4088801/pexels-photo-4088801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 3, name: "Michael Brown", instrument: "Drums", experience: "12 years", image: "https://images.pexels.com/photos/4088019/pexels-photo-4088019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 4, name: "Emily Davis", instrument: "Violin", experience: "18 years", image: "https://images.pexels.com/photos/4088014/pexels-photo-4088014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 5, name: "David Wilson", instrument: "Saxophone", experience: "10 years", image: "https://images.pexels.com/photos/4088001/pexels-photo-4088001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 6, name: "Lisa Anderson", instrument: "Flute", experience: "14 years", image: "https://images.pexels.com/photos/4088018/pexels-photo-4088018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 7, name: "Robert Taylor", instrument: "Cello", experience: "16 years", image: "https://images.pexels.com/photos/4088016/pexels-photo-4088016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 8, name: "Amanda White", instrument: "Clarinet", experience: "11 years", image: "https://images.pexels.com/photos/4088011/pexels-photo-4088011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
];

const Teachers = () => {
  return (
    <div>
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Expert Music Teachers
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
