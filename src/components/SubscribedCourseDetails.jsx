// src/components/SubscribedCourseDetails.jsx

const SubscribedCourseDetails = () => {
    const course = {
      title: "Master the Guitar",
      instructor: "John Doe",
      duration: "8 weeks",
      level: "Beginner",
      description: "Learn the basics of guitar playing...",
      image: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg",
    };
  
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row">
          <img
            src={course.image}
            alt={course.title}
            className="w-full md:w-1/2 h-64 object-cover"
          />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <p className="text-sm mb-2">Instructor: {course.instructor}</p>
            <p className="text-sm mb-2">Duration: {course.duration}</p>
            <p className="text-sm mb-2">Level: {course.level}</p>
            <p className="text-base mb-4">{course.description}</p>
            {/* Aquí puedes agregar contenido adicional del curso */}
          </div>
        </div>
      </div>
    );
  };
  
  export default SubscribedCourseDetails;
  