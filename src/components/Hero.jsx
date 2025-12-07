import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  // ------------------ Slideshow Background ------------------
  const bgImages = [
    "/team/pmvisit.jpg",
    "/team/carousel10.jpg",
    "/team/koicavisit.jpg",
    "/team/icimod.jpg"
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000); // change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // ----------------------------------------------------------

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0">
        <img
          key={currentBg} // ensures React replaces the image
          alt={`Background ${currentBg + 1}`}
          className="w-full h-full object-cover transition-opacity duration-1000"
          src={bgImages[currentBg]}
        />
        {/* Dark overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Optional blurred color circles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 inline-flex items-center gap-2">
            <span className="text-gray-50 text-sm font-medium">Leading Innovation Since 2010</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-6 leading-tight">
          National Research &<br />Innovation Center
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Advancing science, technology, and innovation through cutting-edge research, 
          state-of-the-art facilities, and collaborative excellence
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105 flex items-center"
          >
            Get Involved <span className="ml-2">→</span>
          </button>
          <button 
            onClick={() => navigate('/about')}
            className="bg-transparent border-2 border-white text-gray-100 hover:bg-white hover:text-blue-900 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
          >
            Learn More
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-50 mb-2">150+</div>
            <div className="text-gray-300 text-sm">Research Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-50 mb-2">50+</div>
            <div className="text-gray-300 text-sm">Expert Researchers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-50 mb-2">25+</div>
            <div className="text-gray-300 text-sm">Partner Institutions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-50 mb-2">12</div>
            <div className="text-gray-300 text-sm">State-of-Art Labs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
