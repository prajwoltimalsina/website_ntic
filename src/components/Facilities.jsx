import React from 'react';

const Facilities = () => {
  const facilities = [
    {
      title: 'Advanced Microscopy Lab',
      description: 'State-of-the-art electron and confocal microscopy facilities for nanoscale imaging and analysis.',
      image: '/team/microscopy.jpg'
    },
    {
      title: 'AI & Computing Center',
      description: 'High-performance computing clusters and AI development platforms for data-intensive research.',
      image: '/team/ai_computing.jpg'
    },
    {
      title: 'Materials Science Lab',
      description: 'Comprehensive materials characterization and synthesis facilities for advanced materials research.',
      image: '/team/materials_lab.jpg'
    },
    {
      title: 'Biotechnology Suite',
      description: 'Fully equipped biotech labs with cell culture, genomics, and proteomics capabilities.',
      image: '/team/biotech_lab.jpg'
    },
    {
      title: 'Chemistry Research Lab',
      description: 'Modern chemistry labs with analytical instruments and synthesis capabilities.',
      image: '/team/chemistry_lab.jpg'
    },
    {
      title: 'Energy Innovation Lab',
      description: 'Renewable energy research facilities focusing on solar, battery, and sustainable technologies.',
      image: '/team/energy_lab.jpg'
    }
  ];

  const handleViewDetails = () => {
    alert('This feature is coming soon!');
  };

  return (
    <section id="facilities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Facilities & Labs</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            State-of-the-Art Research Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our world-class laboratories and research facilities provide researchers with 
            the tools and environment needed for groundbreaking discoveries
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
                <img 
                  alt={facility.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={facility.image} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {facility.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {facility.description}
                </p>
                
                <button 
                  onClick={handleViewDetails}
                  className="w-full py-2 px-4 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Need Access to Our Facilities?</h3>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            We offer facility access programs for researchers, students, and industry partners. 
            Get in touch to learn about collaboration opportunities.
          </p>
          <button 
            onClick={handleViewDetails}
            className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
          >
            Request Facility Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
