import React from 'react';

const Hero = () => {
  const handleGetInvolved = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
        </div>
      </div>

      <div className="absolute inset-0">
        <img 
          alt="Modern research laboratory with advanced equipment" 
          className="w-full h-full object-cover opacity-20"
         src="https://images.unsplash.com/photo-1701848055770-effbdb148e15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 inline-flex items-center gap-2">
            <span className="text-white text-sm font-medium">Leading Innovation Since 2010</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          National Research &<br />Innovation Center
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Advancing science, technology, and innovation through cutting-edge research, 
          state-of-the-art facilities, and collaborative excellence
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={handleGetInvolved}
            className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105 flex items-center"
          >
            Get Involved <span className="ml-2">→</span>
          </button>
          <button 
            onClick={handleLearnMore}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
          >
            Learn More
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">150+</div>
            <div className="text-gray-300 text-sm">Research Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300 text-sm">Expert Researchers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">25+</div>
            <div className="text-gray-300 text-sm">Partner Institutions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">12</div>
            <div className="text-gray-300 text-sm">State-of-Art Labs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;