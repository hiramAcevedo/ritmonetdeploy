// src/components/AboutUs.jsx

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Nosotros</h1>
      <p className="mb-4">
      En Ritmonet el objetivo de nuestro proyecto es crear una plataforma web robusta y escalable dedicada a la enseñanza musical en español con costos accesibles. Esta plataforma no solo aloja un repositorio de cursos para varios instrumentos musicales, sino que también integra herramientas interactivas para teoría musical, entrenamiento auditivo y evaluaciones en línea. El desafío técnico radica en desarrollar una arquitectura web que maneja eficientemente diversos tipos de contenido multimedia, interactividad en tiempo real y un sistema de gestión de aprendizaje personalizado.
      Somos el futuro de la enseñanza musical. 
      
      </p>
      <p className="mb-4">
      ¡Atrévete a ritmar con nosotros!
      </p>

{/* Imagen añadida */}
<div className="flex justify-center items-center mt-8">
        <img 
          src="https://www.nus.agency/wp-content/uploads/elementor/thumbs/musica-arte-scaled-q3s9zjmsgnvmn73optv6vm808qaju2jakn089uojbg.jpg" 
          alt="Arte musical"
          className="w-128 h-64"
        />
      </div>


      <p className="mb-4">
      Nuestra plataforma innova en la forma en que se enseña música en línea desde un enfoque técnico y pedagógico. Los usuarios podrán navegar por una interfaz diseñada para facilitar el acceso a una amplia gama de recursos educativos. Además, desarrollamos funcionalidades interactivas, como exámenes en línea y ejercicios de teoría musical, todo ello integrado en un sistema que prioriza la usabilidad y la experiencia del usuario.
      
      </p>

      <p className="mb-4">
      ¡Sueña en grande, solfea con ritmonet!
      </p>

      {/* Imagen añadida */}
      <div className="flex justify-center items-center mt-8">
        <img 
          src="https://holatelcel.com/wp-content/uploads/2023/12/Disen%CC%83o-sin-ti%CC%81tulo-3.png"
          className="w-128 h-64"
        />
      </div>

      <p className="mb-4">
      Nuestro proyecto no solo pretende democratizar el acceso a la educación musical de calidad, sino también proporcionar una plataforma web accesible y culturalmente adaptada para la comunidad hispanohablante, con la visión de fomentar el desarrollo musical en nuestra región y más allá.
      </p>

      <p className="mb-4">
      Aprende a tocar, domina tu pasión.
      </p>

  {/* Imagen añadida */}
  <div className="flex justify-center items-center mt-8">
        <img 
          src="https://www.orquestafilarmonia.com/wp-content/uploads/2023/12/musica-clasica.png"
          className="w-128 h-64"
        />
      </div>

      {/* Añade más contenido según sea necesario */}
    </div>
  );
};

export default AboutUs;
