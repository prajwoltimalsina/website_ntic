// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Hero = () => {
//   const navigate = useNavigate();

//   const bgImages = [
//     "/team/pmvisit.jpg",
//     "/team/carousel10.jpg",
//     "/team/koicavisit.jpg",
//     "/team/icimod.jpg"
//   ];

//   const [currentBg, setCurrentBg] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBg((prev) => (prev + 1) % bgImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
//       {/* Background */}
//       <div className="absolute inset-0">
//         <img
//           key={currentBg}
//           alt={`Background ${currentBg + 1}`}
//           className="w-full h-full object-cover transition-opacity duration-1000"
//           src={bgImages[currentBg]}
//         />

//         <div className="absolute inset-0 bg-black/50"></div>

//         <div className="absolute inset-0 opacity-25">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-[#93C5FD] rounded-full mix-blend-multiply blur-3xl"></div>
//           <div className="absolute top-40 right-10 w-72 h-72 bg-[#C084FC] rounded-full mix-blend-multiply blur-3xl"></div>
//           <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#A5B4FC] rounded-full mix-blend-multiply blur-3xl"></div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">

//         {/* Badge */}
//         <div className="flex justify-center mb-6">
//           <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 inline-flex items-center gap-2">
//             <span className="text-[#D9F4FF] text-sm font-medium">
//               Leading Innovation Since 2010
//             </span>
//           </div>
//         </div>

//         {/* Title */}
//         <h1 className="text-5xl md:text-7xl font-bold text-[#AEE8FF] mb-6 leading-tight drop-shadow-lg">
//           National Research &<br />Innovation Center
//         </h1>

//         {/* Subtitle */}
//         <p className="text-xl md:text-2xl text-[#C8F1FF] mb-12 max-w-3xl mx-auto leading-relaxed">
//           Advancing science, technology, and innovation through cutting-edge research, 
//           state-of-the-art facilities, and collaborative excellence
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <button 
//             onClick={() => navigate('/contact')}
//             className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105 flex items-center"
//           >
//             Get Involved <span className="ml-2">→</span>
//           </button>

//           <button 
//             onClick={() => navigate('/about')}
//             className="bg-transparent border-2 border-white text-[#AEE8FF] hover:bg-white hover:text-blue-900 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
//           >
//             Learn More
//           </button>
//         </div>

//         {/* Stats */}
//         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">

//           <div className="text-center">
//             <div className="text-4xl font-bold text-[#9DDFFF] mb-2">150+</div>
//             <div className="text-[#B7DFF5] text-sm">Research Projects</div>
//           </div>

//           <div className="text-center">
//             <div className="text-4xl font-bold text-[#9DDFFF] mb-2">50+</div>
//             <div className="text-[#B7DFF5] text-sm">Expert Researchers</div>
//           </div>

//           <div className="text-center">
//             <div className="text-4xl font-bold text-[#9DDFFF] mb-2">25+</div>
//             <div className="text-[#B7DFF5] text-sm">Partner Institutions</div>
//           </div>

//           <div className="text-center">
//             <div className="text-4xl font-bold text-[#9DDFFF] mb-2">12</div>
//             <div className="text-[#B7DFF5] text-sm">State-of-Art Labs</div>
//           </div>

//         </div>

//       </div>


//     </section>
//   );
// };

// export default Hero;


import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6" data-aos="fade-right">
          <span className="inline-flex items-center bg-white rounded-full px-4 py-1 shadow text-sm font-medium text-gray-700 mb-2">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Research & Innovation 
          </span>

          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
            Nepal <span className="text-blue-600">Technology and</span> Research Center
          </h1>

          <p className="text-gray-700 text-lg sm:text-xl max-w-xl">
            Advancing science, technology, and innovation through cutting-edge research{" "}
            <span className="font-semibold text-blue-600">state-of-the-art facilities, </span> and collaborative excellence
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300"
            >
              Get Involved
            </button>
            <button
              onClick={() => navigate("/about")}
              className="bg-white border border-gray-300 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-100"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative" data-aos="fade-left">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="/team/pmvisit.jpg"
              alt="Clinical Internship 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="/team/carousel10.jpg"
              alt="Clinical Internship 2"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute top-2 left-2 bg-white rounded-lg px-3 py-1 text-sm font-semibold shadow">
              98% Success Rate
            </div> */}
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="/team/koicavisit.jpg"
              alt="Clinical Internship 3"
              className="w-full h-full object-cover"
            />
           
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="/team/icimod.jpg"
              alt="Clinical Internship 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

    {/* Stats Section */}
<div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
  {[
    { value: 150, label: "Research Projects" },
    { value: 50, label: "Expert Researchers" },
    { value: 25, label: "Partner Institutions" },
    { value: 12, label: "State-of-Art Labs" },
  ].map((stat, idx) => (
    <div
      key={idx}
      className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center justify-center transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      data-aos="fade-up"
      data-aos-delay={idx * 100}
    >
      <div className="text-4xl md:text-5xl font-extrabold text-[#023d5a] mb-2">
        {stat.value}+
      </div>
      <div className="text-[#07557f] text-sm md:text-base font-medium text-center">
        {stat.label}
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default Hero;
