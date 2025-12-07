import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  const values = [
    { title: 'Our Mission', description: 'To drive groundbreaking research and innovation...' },
    { title: 'Our Vision', description: 'To be a world-leading research center...' },

    { title: 'Collaboration', description: 'We foster interdisciplinary collaboration...' }
  ];

  const galleryImages = [
    "/team/carousel10.jpg",
    "/team/pmvisit.jpg",
    "/team/koicavisit.jpg",
    "/team/icimod.jpg",
    "/team/french.jpeg",
    "/team/gates.jpeg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <section id="about" className="py-24 bg-gray-50">

      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-up">
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
          Pioneering Research & Innovation
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Established in 2010, the National Research & Innovation Center has been at the forefront 
          of scientific discovery, technological advancement, and innovation excellence.
        </p>
      </div>

      {/* Director / Chairman's Message */}
      <section className="py-20 bg-gray-50" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
            Message from Director
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-3xl shadow-lg relative" data-aos="fade-right">
              <p className="text-gray-700 italic leading-relaxed mb-6">
                "The Nepal Technology Innovation Center (NTIC) is more than a building—it’s a commitment to connect researchers, innovators, and communities to co-create practical solutions in agriculture, energy, and public health. Established through collaboration between the Government of Nepal and the Republic of Korea with KOICA’s support, NTIC strengthens research and development at Kathmandu University and nationwide. Focused on Agriculture & Rural Development, Renewable Energy, and Public Health, NTIC empowers entrepreneurs, students, scientists, and grassroots innovators through applied research, incubation, training, and policy foresight. By staying adaptive to emerging challenges, NTIC ensures science and innovation are accessible, inclusive, and impactful, reaffirming its vision to become Nepal's leading technology innovation platform."
              </p>
              <p className="text-blue-600 font-semibold">— Prof. Dr. Bim Shrestha</p>
            </div>

            <div className="w-full" data-aos="fade-left">
              <img
                src="/team/bim.jpeg"
                alt="Director"
                className="w-full h-auto object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NTIC Building Card - only on About page */}
      {isAboutPage && (
        <div className="w-screen bg-gradient-to-r from-blue-50 to-purple-50 p-6 md:p-12 flex flex-col md:flex-row items-center md:items-stretch gap-6" data-aos="fade-up">
          <div className="relative w-full md:w-1/2 h-96 md:h-auto rounded-2xl overflow-hidden shadow-inner shadow-blue-200/10 transform transition-all duration-700 hover:scale-[1.02]" data-aos="zoom-in">
            <img 
              src="/team/ntic_building.png" 
              alt="Research center building exterior" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          </div>

          <div className="relative w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8 text-gray-700 leading-relaxed" data-aos="fade-left">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Driving Innovation Forward
            </h3>
            <p className="mb-4">
              Our center serves as a hub for groundbreaking research across multiple disciplines...
            </p>
            <p>
              Through strategic partnerships with academic institutions, industry leaders...
            </p>
          </div>
        </div>
      )}

    {/* Values Grid */}
<div className="mt-20 mb-16 flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {values.map((value, index) => (
      <div
        key={value.title}
        className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 flex flex-col items-center text-center"
        data-aos="fade-up"
        data-aos-delay={index * 150} // staggered animation
        data-aos-duration="1500"
      >
        <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
          <div className="w-7 h-7 bg-blue-200 rounded-sm"></div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
        <p className="text-gray-700 leading-relaxed">{value.description}</p>
      </div>
    ))}
  </div>


      </div>

      {/* Gallery */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our Gallery
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Explore moments from our research center, visits, and collaborations...
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl" data-aos="fade-up">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-50 to-blue-100 p-4">
          <div className="relative w-full h-96 rounded-2xl overflow-hidden">
            <img
              key={currentImage}
              src={galleryImages[currentImage]}
              alt={`Gallery ${currentImage + 1}`}
              className="w-full h-full object-cover transition-opacity duration-1000"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-4 py-2 rounded-full backdrop-blur-md">
              {`Image ${currentImage + 1} of ${galleryImages.length}`}
            </div>

            <button
              onClick={() => setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-900 font-bold rounded-full w-12 h-12 flex items-center justify-center hover:bg-white shadow-lg transition-transform duration-300 hover:scale-110"
            >
              ‹
            </button>

            <button
              onClick={() => setCurrentImage((prev) => (prev + 1) % galleryImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-900 font-bold rounded-full w-12 h-12 flex items-center justify-center hover:bg-white shadow-lg transition-transform duration-300 hover:scale-110"
            >
              ›
            </button>

          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
