import React, { useState, useEffect } from 'react';

const About = () => {
  const values = [
    { title: 'Our Mission', description: 'To drive groundbreaking research and innovation that addresses global challenges and improves quality of life through scientific excellence and collaborative partnerships.' },
    { title: 'Our Vision', description: 'To be a world-leading research center recognized for transformative discoveries, cutting-edge technology development, and fostering the next generation of innovators.' },
    { title: 'Excellence', description: 'We maintain the highest standards in research methodology, ethical practices, and scientific rigor, ensuring impactful and reproducible results.' },
    { title: 'Collaboration', description: 'We foster interdisciplinary collaboration, bringing together diverse expertise to solve complex problems and accelerate innovation across multiple domains.' }
  ];




  
  const galleryImages = [
    "/team/carousel10.jpg"
,    "/team/pmvisit.jpg",
    "/team/koicavisit.jpg",
    "/team/icimod.jpg",
    "/team/french.jpeg",
    "/team/gates.jpeg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Automatic slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000); // change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  // Navigate to next image
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  // Navigate to previous image
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Pioneering Research & Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in 2010, the National Research & Innovation Center has been at the forefront 
            of scientific discovery, technological advancement, and innovation excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              alt="Research center building exterior" 
              className="w-full h-full object-cover"
              src="/team/ntic_building.png"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Driving Innovation Forward
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our center serves as a hub for groundbreaking research across multiple disciplines, 
              from biotechnology and materials science to artificial intelligence and sustainable energy. 
              We provide researchers with world-class facilities, cutting-edge equipment, and a 
              collaborative environment that fosters innovation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through strategic partnerships with academic institutions, industry leaders, and 
              government agencies, we translate research discoveries into real-world applications 
              that benefit society. Our commitment to excellence has resulted in numerous patents, 
              publications, and technological breakthroughs that shape the future.
            </p>
          </div>
        </div>

       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
  {values.map((value, index) => (
    <div key={value.title} className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500">
      <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
        <div className="w-7 h-7 bg-blue-600 rounded-sm"></div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
      <p className="text-gray-700 leading-relaxed">{value.description}</p>
    </div>
  ))}
</div>

{/* Gallery Section */}
<div className="text-center mb-12">
  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
    Our Gallery
  </h3>
  <p className="text-gray-600 max-w-2xl mx-auto mb-8">
    Explore moments from our research center, visits, and collaborations. Click through our gallery to see more.
  </p>
</div>

<div className="relative mx-auto max-w-4xl">
  {/* Outer Card */}
  <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-50 to-blue-100 p-4">
    {/* Slideshow */}
    <div className="relative w-full h-96 rounded-2xl overflow-hidden">
      <img
        key={currentImage}
        src={galleryImages[currentImage]}
        alt={`Gallery ${currentImage + 1}`}
        className="w-full h-full object-cover transition-opacity duration-1000 animate-fade-in"
      />

      {/* Caption Overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-4 py-2 rounded-full backdrop-blur-md">
        {`Image ${currentImage + 1} of ${galleryImages.length}`}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-900 font-bold rounded-full w-12 h-12 flex items-center justify-center hover:bg-white shadow-lg transition-transform duration-300 hover:scale-110"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-900 font-bold rounded-full w-12 h-12 flex items-center justify-center hover:bg-white shadow-lg transition-transform duration-300 hover:scale-110"
      >
        ›
      </button>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default About;
