import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Director of Research',
      specialization: 'Biotechnology & Genomics',
      image: 'Professional portrait of female research director in laboratory coat',
      achievements: 'Ph.D. MIT, 50+ Publications'
    },
    {
      name: 'Prof. James Chen',
      role: 'AI Research Lead',
      specialization: 'Machine Learning & AI',
      image: 'Professional portrait of male AI researcher with computer systems',
      achievements: 'Ph.D. Stanford, 15 Patents'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Materials Science Lead',
      specialization: 'Nanotechnology & Polymers',
      image: 'Professional portrait of female materials scientist in research lab',
      achievements: 'Ph.D. Caltech, Industry Award Winner'
    },
    {
      name: 'Dr. Michael Thompson',
      role: 'Energy Innovation Lead',
      specialization: 'Renewable Energy Systems',
      image: 'Professional portrait of male energy researcher with solar equipment',
      achievements: 'Ph.D. Cambridge, Clean Energy Pioneer'
    },
    {
      name: 'Dr. Aisha Patel',
      role: 'Computational Biology Lead',
      specialization: 'Bioinformatics & Drug Discovery',
      image: 'Professional portrait of female computational biologist with computer',
      achievements: 'Ph.D. Oxford, 40+ Publications'
    },
    {
      name: 'Dr. David Kim',
      role: 'Chemistry Research Lead',
      specialization: 'Organic Synthesis & Catalysis',
      image: 'Professional portrait of male chemistry researcher in laboratory',
      achievements: 'Ph.D. Harvard, AAAS Fellow'
    }
  ];

  const handleContact = () => {
    alert('This feature is coming soon!');
  };

  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            World-Class Research Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of leading scientists and researchers brings together expertise 
            from around the globe to drive innovation and scientific excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
                <img 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-2 px-4 w-full">
                    <button 
                      onClick={handleContact}
                      className="flex-1 bg-white/90 hover:bg-white text-gray-900 py-2 px-4 rounded text-sm font-medium"
                    >
                      Email
                    </button>
                    <button 
                      onClick={handleContact}
                      className="flex-1 bg-white/90 hover:bg-white text-gray-900 py-2 px-4 rounded text-sm font-medium"
                    >
                      LinkedIn
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <div className="text-blue-600 font-semibold mb-2">
                  {member.role}
                </div>
                <p className="text-gray-600 mb-3">
                  {member.specialization}
                </p>
                <div className="flex items-start gap-2 text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                  <span>🏆 {member.achievements}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            We're always looking for talented researchers, scientists, and innovators to join our team. 
            Explore current opportunities and be part of groundbreaking research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleContact}
              className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Open Positions
            </button>
            <button 
              onClick={handleContact}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;