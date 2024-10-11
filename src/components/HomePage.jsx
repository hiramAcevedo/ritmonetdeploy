// src/components/HomePage.jsx

import Hero from './Hero.jsx';
import CourseCard from './CourseCard.jsx';

const courses = [
  // ... (lista de cursos permanece igual, asegurándonos de incluir el campo "instrument")
    {
    id: 1,
    title: "Master the Guitar",
    instructor: "John Doe",
    duration: "8 weeks",
    level: "Beginner",
    image: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Ruta a la imagen del curso de guitarra
    },
    {
    id: 2,
    title: "Piano for Professionals",
    instructor: "Jane Smith",
    duration: "12 weeks",
    level: "Advanced",
    image: "https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Ruta a la imagen del curso de piano
    },
    {
    id: 3,
    title: "Drum Basics",
    instructor: "Mike Johnson",
    duration: "6 weeks",
    level: "Beginner",
    image: "https://images.pexels.com/photos/164967/pexels-photo-164967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Ruta a la imagen del curso de batería
    },
    {
    id: 4,
    title: "Vocal Techniques",
    instructor: "Sarah Lee",
    duration: "10 weeks",
    level: "Intermediate",
    image: "https://images.pexels.com/photos/7086299/pexels-photo-7086299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Ruta a la imagen del curso de canto
    },
];

const HomePage = () => {
    return (
        <div>
        <Hero
            backgroundImage="https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg"
            title="Learn Music Online"
            subtitle="Master your favorite instruments from anywhere in the world"
            buttonText="Get Started"
            buttonLink="/subscription"
        />
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">
            Our Popular Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
            </div>
        </div>
        </div>
    );
};

export default HomePage;

