// src/components/Hero.jsx

import { Link } from 'react-router-dom';

const Hero = ({ backgroundImage, title, subtitle, buttonText, buttonLink }) => {
  return (
    <div
      className="relative h-[50vh] bg-cover bg-center"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-xl mb-8">{subtitle}</p>
          <Link
            to={buttonLink}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
