// import React, { useState } from 'react';

// const Research = () => {
//   const [activeCategory, setActiveCategory] = useState('all');

//   const categories = [
//     { id: 'all', label: 'All Projects' },
//     { id: 'ai', label: 'AI & Machine Learning' },
//     { id: 'biotech', label: 'Biotechnology' },
//     { id: 'energy', label: 'Sustainable Energy' },
//     { id: 'materials', label: 'Materials Science' }
//   ];

//   const projects = [
//     {
//       category: 'ai',
//       title: 'AI-Powered Drug Discovery',
//       description: 'Developing machine learning algorithms to accelerate pharmaceutical research and identify novel drug candidates.',
//       status: 'Active',
//       team: '12 Researchers',
//       duration: '2023-2025',
//       image: 'Scientists using AI computer systems for drug discovery research'
//     },
//     {
//       category: 'biotech',
//       title: 'Gene Therapy Innovations',
//       description: 'Pioneering new gene editing techniques for treating genetic disorders and advancing personalized medicine.',
//       status: 'Active',
//       team: '8 Researchers',
//       duration: '2023-2026',
//       image: 'Biotechnology laboratory with DNA sequencing equipment and gene therapy research'
//     },
//     {
//       category: 'energy',
//       title: 'Next-Gen Solar Cells',
//       description: 'Researching perovskite solar cells with enhanced efficiency and durability for renewable energy applications.',
//       status: 'Active',
//       team: '10 Researchers',
//       duration: '2024-2026',
//       image: 'Solar cell research laboratory with testing equipment and solar panels'
//     },
//     {
//       category: 'materials',
//       title: 'Biodegradable Polymers',
//       description: 'Creating sustainable polymer materials that decompose naturally, reducing environmental plastic pollution.',
//       status: 'Completed',
//       team: '6 Researchers',
//       duration: '2022-2024',
//       image: 'Materials science lab with biodegradable polymer samples and testing equipment'
//     },
//     {
//       category: 'ai',
//       title: 'Quantum Machine Learning',
//       description: 'Exploring quantum computing applications in machine learning to solve complex optimization problems.',
//       status: 'Active',
//       team: '15 Researchers',
//       duration: '2023-2027',
//       image: 'Quantum computing research facility with advanced quantum processors'
//     },
//     {
//       category: 'biotech',
//       title: 'Microbiome Health Research',
//       description: 'Investigating the human microbiome to develop novel treatments for digestive and immune system disorders.',
//       status: 'Active',
//       team: '9 Researchers',
//       duration: '2024-2026',
//       image: 'Microbiome research laboratory with petri dishes and microscopy equipment'
//     }
//   ];

//   const filteredProjects = activeCategory === 'all' 
//     ? projects 
//     : projects.filter(p => p.category === activeCategory);

//   const handleLearnMore = () => {
//     alert('This update is coming soon!');
//   };

//   return (
//     <section id="research" className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Research Projects</span>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
//             Groundbreaking Research Initiatives
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Our diverse portfolio of research projects addresses critical challenges across 
//             multiple disciplines, driving innovation and scientific advancement
//           </p>
//         </div>

//         <div className="mb-12">
//           <div className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-white p-2 rounded-xl shadow-md gap-2">
//             {categories.map((category) => (
//               <button 
//                 key={category.id} 
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
//                   activeCategory === category.id 
//                     ? 'bg-blue-600 text-white shadow-sm' 
//                     : 'text-gray-600 hover:bg-gray-100'
//                 }`}
//               >
//                 {category.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project) => (
//             <div
//               key={project.title}
//               className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
//             >
//               <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
//                 <img 
//                   alt={project.title} 
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                  src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
//                 <div className="absolute top-4 right-4">
//                   <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                     project.status === 'Active' 
//                       ? 'bg-green-500 text-white' 
//                       : 'bg-blue-500 text-white'
//                   }`}>
//                     {project.status}
//                   </span>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <div className="flex items-center gap-3 mb-4">
//                   <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
//                     {project.title}
//                   </h3>
//                 </div>

//                 <p className="text-gray-600 mb-4 leading-relaxed">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-col gap-2 mb-4 text-sm text-gray-500">
//                   <div className="flex justify-between">
//                     <span>Team Size:</span>
//                     <span className="font-semibold text-gray-700">{project.team}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Duration:</span>
//                     <span className="font-semibold text-gray-700">{project.duration}</span>
//                   </div>
//                 </div>

//                 <button 
//                   onClick={handleLearnMore}
//                   className="w-full py-2 px-4 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 flex items-center justify-center"
//                 >
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <button 
//             onClick={handleLearnMore}
//             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center"
//           >
//             View All Research Projects
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Research;


import React, { useState } from 'react';

const Research = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'biotech', label: 'Biotechnology' },
    { id: 'energy', label: 'Sustainable Energy' },
    { id: 'materials', label: 'Materials Science' }
  ];

  const projects = [
    {
      category: 'ai',
      title: 'AI-Powered Drug Discovery',
      description: 'Developing machine learning algorithms to accelerate pharmaceutical research and identify novel drug candidates.',
      status: 'Active',
      team: '12 Researchers',
      duration: '2023-2025',
      image: 'S cocientists using AImputer systems for drug discovery research'
    },
    {
      category: 'biotech',
      title: 'Gene Therapy Innovations',
      description: 'Pioneering new gene editing techniques for treating genetic disorders and advancing personalized medicine.',
      status: 'Active',
      team: '8 Researchers',
      duration: '2023-2026',
      image: 'Biotechnology laboratory with DNA sequencing equipment and gene therapy research'
    },
    {
      category: 'energy',
      title: 'Next-Gen Solar Cells',
      description: 'Researching perovskite solar cells with enhanced efficiency and durability for renewable energy applications.',
      status: 'Active',
      team: '10 Researchers',
      duration: '2024-2026',
      image: 'Solar cell research laboratory with testing equipment and solar panels'
    },
    {
      category: 'materials',
      title: 'Biodegradable Polymers',
      description: 'Creating sustainable polymer materials that decompose naturally, reducing environmental plastic pollution.',
      status: 'Completed',
      team: '6 Researchers',
      duration: '2022-2024',
      image: 'Materials science lab with biodegradable polymer samples and testing equipment'
    },
    {
      category: 'ai',
      title: 'Quantum Machine Learning',
      description: 'Exploring quantum computing applications in machine learning to solve complex optimization problems.',
      status: 'Active',
      team: '15 Researchers',
      duration: '2023-2027',
      image: 'Quantum computing research facility with advanced quantum processors'
    },
    {
      category: 'biotech',
      title: 'Microbiome Health Research',
      description: 'Investigating the human microbiome to develop novel treatments for digestive and immune system disorders.',
      status: 'Active',
      team: '9 Researchers',
      duration: '2024-2026',
      image: 'Microbiome research laboratory with petri dishes and microscopy equipment'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const handleLearnMore = () => {
    alert('This feature is coming soon!');
  };

  return (
    <section id="research" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Research Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Groundbreaking Research Initiatives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse portfolio of research projects addresses critical challenges across 
            multiple disciplines, driving innovation and scientific advancement
          </p>
        </div>

        <div className="mb-12">
          <div className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-white p-2 rounded-xl shadow-md gap-2">
            {categories.map((category) => (
              <button 
                key={category.id} 
                onClick={() => setActiveCategory(category.id)}
                className={`py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
                <img 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Active' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-blue-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-col gap-2 mb-4 text-sm text-gray-500">
                  <div className="flex justify-between">
                    <span>Team Size:</span>
                    <span className="font-semibold text-gray-700">{project.team}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-semibold text-gray-700">{project.duration}</span>
                  </div>
                </div>

                <button 
                  onClick={handleLearnMore}
                  className="w-full py-2 px-4 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={handleLearnMore}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center"
          >
            View All Research Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Research;