// import React, { useState, useEffect } from 'react';

// // --- COMPONENTS ---

// const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
// //
//   const navItems = [
//     { label: 'Home', href: '#home' },
//     { label: 'About', href: '#about' },
//     { label: 'Facilities', href: '#facilities' },
//     { label: 'Research', href: '#research' },
//     { label: 'Events', href: '#events' },
//     { label: 'Team', href: '#team' },
//     { label: 'Contact', href: '#contact' }
//   ];

//   const scrollToSection = (href) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-white shadow-md border-b border-gray-100' : 'bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-xl">N</span>
//             </div>
//             <div className="flex flex-col">
//               <span className={`font-bold text-lg leading-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
//                 NTIC
//               </span>
//               <span className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
//                 Research & Innovation
//               </span>
//             </div>
//           </div>

//           <div className="hidden md:flex items-center gap-8">
//             {navItems.map((item) => (
//               <button
//                 key={item.label}
//                 onClick={() => scrollToSection(item.href)}
//                 className={`text-sm font-medium transition-colors hover:text-blue-600 ${
//                   isScrolled ? 'text-gray-700' : 'text-white'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>

//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className={`p-2 text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}
//             >
//               {isMobileMenuOpen ? '✕' : '☰'}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200">
//           <div className="px-4 py-4 space-y-3">
//             {navItems.map((item) => (
//               <button
//                 key={item.label}
//                 onClick={() => scrollToSection(item.href)}
//                 className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// const Hero = () => {
//   const handleGetInvolved = () => {
//     const contactSection = document.querySelector('#contact');
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const handleLearnMore = () => {
//     const aboutSection = document.querySelector('#about');
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
//           <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
//           <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
//         </div>
//       </div>

//       <div className="absolute inset-0">
//         <img 
//           alt="Modern research laboratory with advanced equipment" 
//           className="w-full h-full object-cover opacity-20"
//          src="https://images.unsplash.com/photo-1701848055770-effbdb148e15" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
//         <div className="flex justify-center mb-6">
//           <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 inline-flex items-center gap-2">
//             <span className="text-white text-sm font-medium">Leading Innovation Since 2010</span>
//           </div>
//         </div>

//         <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//           National Research &<br />Innovation Center
//         </h1>

//         <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
//           Advancing science, technology, and innovation through cutting-edge research, 
//           state-of-the-art facilities, and collaborative excellence
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <button 
//             onClick={handleGetInvolved}
//             className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105 flex items-center"
//           >
//             Get Involved <span className="ml-2">→</span>
//           </button>
//           <button 
//             onClick={handleLearnMore}
//             className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
//           >
//             Learn More
//           </button>
//         </div>

//         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//           <div className="text-center">
//             <div className="text-4xl font-bold text-white mb-2">150+</div>
//             <div className="text-gray-300 text-sm">Research Projects</div>
//           </div>
//           <div className="text-center">
//             <div className="text-4xl font-bold text-white mb-2">50+</div>
//             <div className="text-gray-300 text-sm">Expert Researchers</div>
//           </div>
//           <div className="text-center">
//             <div className="text-4xl font-bold text-white mb-2">25+</div>
//             <div className="text-gray-300 text-sm">Partner Institutions</div>
//           </div>
//           <div className="text-center">
//             <div className="text-4xl font-bold text-white mb-2">12</div>
//             <div className="text-gray-300 text-sm">State-of-Art Labs</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const About = () => {
//   const values = [
//     {
//       title: 'Our Mission',
//       description: 'To drive groundbreaking research and innovation that addresses global challenges and improves quality of life through scientific excellence and collaborative partnerships.'
//     },
//     {
//       title: 'Our Vision',
//       description: 'To be a world-leading research center recognized for transformative discoveries, cutting-edge technology development, and fostering the next generation of innovators.'
//     },
//     {
//       title: 'Excellence',
//       description: 'We maintain the highest standards in research methodology, ethical practices, and scientific rigor, ensuring impactful and reproducible results.'
//     },
//     {
//       title: 'Collaboration',
//       description: 'We foster interdisciplinary collaboration, bringing together diverse expertise to solve complex problems and accelerate innovation across multiple domains.'
//     }
//   ];

//   return (
//     <section id="about" className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
//             Pioneering Research & Innovation
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Established in 2010, the National Research & Innovation Center has been at the forefront 
//             of scientific discovery, technological advancement, and innovation excellence
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 mb-16">
//           <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
//             <img 
//               alt="Research center building exterior" 
//               className="w-full h-full object-cover"
//              src="https://images.unsplash.com/photo-1565472313041-74b3246942bb" />
//           </div>

//           <div className="flex flex-col justify-center">
//             <h3 className="text-3xl font-bold text-gray-900 mb-6">
//               Driving Innovation Forward
//             </h3>
//             <p className="text-gray-700 mb-4 leading-relaxed">
//               Our center serves as a hub for groundbreaking research across multiple disciplines, 
//               from biotechnology and materials science to artificial intelligence and sustainable energy. 
//               We provide researchers with world-class facilities, cutting-edge equipment, and a 
//               collaborative environment that fosters innovation.
//             </p>
//             <p className="text-gray-700 leading-relaxed">
//               Through strategic partnerships with academic institutions, industry leaders, and 
//               government agencies, we translate research discoveries into real-world applications 
//               that benefit society. Our commitment to excellence has resulted in numerous patents, 
//               publications, and technological breakthroughs that shape the future.
//             </p>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {values.map((value) => (
//             <div
//               key={value.title}
//               className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//             >
//               <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
//                 <div className="w-7 h-7 bg-blue-600 rounded-sm"></div>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
//               <p className="text-gray-600 leading-relaxed">{value.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const Facilities = () => {
//   const facilities = [
//     {
//       title: 'Advanced Microscopy Lab',
//       description: 'State-of-the-art electron and confocal microscopy facilities for nanoscale imaging and analysis.',
//       image: 'Advanced electron microscope laboratory with high-tech imaging equipment'
//     },
//     {
//       title: 'AI & Computing Center',
//       description: 'High-performance computing clusters and AI development platforms for data-intensive research.',
//       image: 'Modern computing center with servers and AI workstations'
//     },
//     {
//       title: 'Materials Science Lab',
//       description: 'Comprehensive materials characterization and synthesis facilities for advanced materials research.',
//       image: 'Materials science laboratory with advanced testing equipment and materials samples'
//     },
//     {
//       title: 'Biotechnology Suite',
//       description: 'Fully equipped biotech labs with cell culture, genomics, and proteomics capabilities.',
//       image: 'Clean room biotechnology laboratory with cell culture equipment'
//     },
//     {
//       title: 'Chemistry Research Lab',
//       description: 'Modern chemistry labs with analytical instruments and synthesis capabilities.',
//       image: 'Chemistry research laboratory with glassware and analytical instruments'
//     },
//     {
//       title: 'Energy Innovation Lab',
//       description: 'Renewable energy research facilities focusing on solar, battery, and sustainable technologies.',
//       image: 'Energy research laboratory with solar panels and battery testing equipment'
//     }
//   ];

//   const handleViewDetails = () => {
//     alert('This feature is coming soon!');
//   };

//   return (
//     <section id="facilities" className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Facilities & Labs</span>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
//             State-of-the-Art Research Facilities
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Our world-class laboratories and research facilities provide researchers with 
//             the tools and environment needed for groundbreaking discoveries
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {facilities.map((facility) => (
//             <div
//               key={facility.title}
//               className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
//             >
//               <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
//                 <img 
//                   alt={facility.title} 
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                  src="https://images.unsplash.com/photo-1693801241056-44d1dbba7d85" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>
              
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
//                   {facility.title}
//                 </h3>
                
//                 <p className="text-gray-600 mb-4 leading-relaxed">
//                   {facility.description}
//                 </p>
                
//                 <button 
//                   onClick={handleViewDetails}
//                   className="w-full py-2 px-4 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
//                 >
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
//           <h3 className="text-3xl font-bold mb-4">Need Access to Our Facilities?</h3>
//           <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
//             We offer facility access programs for researchers, students, and industry partners. 
//             Get in touch to learn about collaboration opportunities.
//           </p>
//           <button 
//             onClick={handleViewDetails}
//             className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
//           >
//             Request Facility Access
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

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
//     alert('This feature is coming soon!');
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

// const Events = () => {
//   const events = [
//     {
//       type: 'Conference',
//       title: 'Annual Innovation Summit 2025',
//       date: 'March 15-17, 2025',
//       location: 'Main Auditorium',
//       attendees: '500+ Expected',
//       description: 'Join leading researchers and innovators for three days of presentations, workshops, and networking focused on cutting-edge research and future technologies.',
//       image: 'Large conference hall with attendees at innovation summit'
//     },
//     {
//       type: 'Workshop',
//       title: 'Machine Learning in Healthcare',
//       date: 'February 28, 2025',
//       location: 'AI & Computing Center',
//       attendees: '50 Participants',
//       description: 'Hands-on workshop exploring practical applications of machine learning algorithms in medical diagnosis and treatment optimization.',
//       image: 'Workshop session with people learning about machine learning and healthcare'
//     },
//     {
//       type: 'Seminar',
//       title: 'Sustainable Energy Technologies',
//       date: 'March 5, 2025',
//       location: 'Virtual & In-Person',
//       attendees: '200+ Registered',
//       description: 'Expert panel discussion on the latest breakthroughs in renewable energy, battery technology, and sustainable infrastructure.',
//       image: 'Seminar presentation on sustainable energy with solar panel displays'
//     }
//   ];

//   const announcements = [
//     {
//       date: 'January 20, 2025',
//       title: 'New Research Grant Program Announced',
//       description: 'We are excited to announce $5M in new research grants available for innovative projects in AI and biotechnology.'
//     },
//     {
//       date: 'January 15, 2025',
//       title: 'Partnership with Global Tech Leaders',
//       description: 'NRIC has formed strategic partnerships with leading technology companies to accelerate research commercialization.'
//     },
//     {
//       date: 'January 10, 2025',
//       title: 'Facility Expansion Completed',
//       description: 'Our new Materials Science wing is now open, featuring state-of-the-art characterization equipment.'
//     }
//   ];

//   const handleRegister = () => {
//     alert('This feature is coming soon!');
//   };

//   const handleReadMore = () => {
//     alert('This feature is coming soon!');
//   };

//   return (
//     <section id="events" className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Events & News</span>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
//             Upcoming Events & Announcements
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Stay connected with our latest events, conferences, and important announcements 
//             from the research community
//           </p>
//         </div>

//         <div className="mb-16">
//           <h3 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {events.map((event) => (
//               <div
//                 key={event.title}
//                 className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
//               >
//                 <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
//                   <img 
//                     alt={event.title} 
//                     className="w-full h-full object-cover"
//                    src="https://images.unsplash.com/photo-1509930854872-0f61005b282e" />
//                   <div className="absolute top-4 left-4">
//                     <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
//                       {event.type}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-4">
//                     {event.title}
//                   </h3>

//                   <div className="space-y-2 mb-4 text-sm text-gray-600">
//                     <div className="flex items-center gap-2">
//                       <span>📅 {event.date}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span>📍 {event.location}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span>👥 {event.attendees}</span>
//                     </div>
//                   </div>

//                   <p className="text-gray-600 mb-4 leading-relaxed">
//                     {event.description}
//                   </p>

//                   <button 
//                     onClick={handleRegister}
//                     className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all duration-300 flex justify-center items-center"
//                   >
//                     Register Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Announcements</h3>
//           <div className="space-y-6">
//             {announcements.map((announcement) => (
//               <div
//                 key={announcement.title}
//                 className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-100"
//               >
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                   <div className="flex-1">
//                     <div className="text-sm text-blue-600 font-semibold mb-2">
//                       {announcement.date}
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">
//                       {announcement.title}
//                     </h3>
//                     <p className="text-gray-700 leading-relaxed">
//                       {announcement.description}
//                     </p>
//                   </div>
//                   <button 
//                     onClick={handleReadMore}
//                     className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 whitespace-nowrap"
//                   >
//                     Read More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
//           <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
//           <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
//             Subscribe to our newsletter to receive updates about upcoming events, 
//             research breakthroughs, and collaboration opportunities.
//           </p>
//           <button 
//             onClick={handleRegister}
//             className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
//           >
//             Subscribe to Newsletter
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Team = () => {
//   const teamMembers = [
//     {
//       name: 'Dr. Sarah Mitchell',
//       role: 'Director of Research',
//       specialization: 'Biotechnology & Genomics',
//       image: 'Professional portrait of female research director in laboratory coat',
//       achievements: 'Ph.D. MIT, 50+ Publications'
//     },
//     {
//       name: 'Prof. James Chen',
//       role: 'AI Research Lead',
//       specialization: 'Machine Learning & AI',
//       image: 'Professional portrait of male AI researcher with computer systems',
//       achievements: 'Ph.D. Stanford, 15 Patents'
//     },
//     {
//       name: 'Dr. Emily Rodriguez',
//       role: 'Materials Science Lead',
//       specialization: 'Nanotechnology & Polymers',
//       image: 'Professional portrait of female materials scientist in research lab',
//       achievements: 'Ph.D. Caltech, Industry Award Winner'
//     },
//     {
//       name: 'Dr. Michael Thompson',
//       role: 'Energy Innovation Lead',
//       specialization: 'Renewable Energy Systems',
//       image: 'Professional portrait of male energy researcher with solar equipment',
//       achievements: 'Ph.D. Cambridge, Clean Energy Pioneer'
//     },
//     {
//       name: 'Dr. Aisha Patel',
//       role: 'Computational Biology Lead',
//       specialization: 'Bioinformatics & Drug Discovery',
//       image: 'Professional portrait of female computational biologist with computer',
//       achievements: 'Ph.D. Oxford, 40+ Publications'
//     },
//     {
//       name: 'Dr. David Kim',
//       role: 'Chemistry Research Lead',
//       specialization: 'Organic Synthesis & Catalysis',
//       image: 'Professional portrait of male chemistry researcher in laboratory',
//       achievements: 'Ph.D. Harvard, AAAS Fellow'
//     }
//   ];

//   const handleContact = () => {
//     alert('This feature is coming soon!');
//   };

//   return (
//     <section id="team" className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Team</span>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
//             World-Class Research Experts
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Our diverse team of leading scientists and researchers brings together expertise 
//             from around the globe to drive innovation and scientific excellence
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {teamMembers.map((member) => (
//             <div
//               key={member.name}
//               className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
//             >
//               <div className="relative h-80 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
//                 <img 
//                   alt={member.name} 
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                  src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
//                   <div className="flex gap-2 px-4 w-full">
//                     <button 
//                       onClick={handleContact}
//                       className="flex-1 bg-white/90 hover:bg-white text-gray-900 py-2 px-4 rounded text-sm font-medium"
//                     >
//                       Email
//                     </button>
//                     <button 
//                       onClick={handleContact}
//                       className="flex-1 bg-white/90 hover:bg-white text-gray-900 py-2 px-4 rounded text-sm font-medium"
//                     >
//                       LinkedIn
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-1">
//                   {member.name}
//                 </h3>
//                 <div className="text-blue-600 font-semibold mb-2">
//                   {member.role}
//                 </div>
//                 <p className="text-gray-600 mb-3">
//                   {member.specialization}
//                 </p>
//                 <div className="flex items-start gap-2 text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
//                   <span>🏆 {member.achievements}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
//           <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
//           <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
//             We're always looking for talented researchers, scientists, and innovators to join our team. 
//             Explore current opportunities and be part of groundbreaking research.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button 
//               onClick={handleContact}
//               className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
//             >
//               View Open Positions
//             </button>
//             <button 
//               onClick={handleContact}
//               className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
//             >
//               Submit Application
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const contactInfo = [
//     {
//       title: 'Email',
//       details: 'info@nric.org',
//       link: 'mailto:info@nric.org'
//     },
//     {
//       title: 'Phone',
//       details: '+1 (555) 123-4567',
//       link: 'tel:+15551234567'
//     },
//     {
//       title: 'Address',
//       details: '123 Innovation Drive, Research Park, CA 94025',
//       link: '#'
//     }
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('This feature is coming soon!');
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <section id="contact" className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
//             Get in Touch
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Have questions about our research, facilities, or collaboration opportunities? 
//             We'd love to hear from you
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="text-gray-700 font-semibold mb-2 block">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
//                   placeholder="John Doe"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="text-gray-700 font-semibold mb-2 block">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
//                   placeholder="john@example.com"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="subject" className="text-gray-700 font-semibold mb-2 block">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
//                   placeholder="Collaboration Inquiry"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="text-gray-700 font-semibold mb-2 block">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={6}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 resize-none"
//                   placeholder="Tell us about your inquiry..."
//                   required
//                 ></textarea>
//               </div>

//               <button 
//                 type="submit"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex justify-center items-center"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
//               <div className="space-y-6">
//                 {contactInfo.map((info) => (
//                   <div
//                     key={info.title}
//                     className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
//                   >
//                     <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
//                       <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
//                       <p className="text-gray-600">{info.details}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Office Hours</h3>
//               <div className="space-y-2 text-gray-700">
//                 <div className="flex justify-between">
//                   <span className="font-medium">Monday - Friday:</span>
//                   <span>8:00 AM - 6:00 PM</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-medium">Saturday:</span>
//                   <span>9:00 AM - 1:00 PM</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-medium">Sunday:</span>
//                   <span>Closed</span>
//                 </div>
//               </div>
//             </div>

//             <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
//               <img 
//                 alt="Research center location on map" 
//                 className="w-full h-full object-cover"
//                src="https://images.unsplash.com/photo-1613375058973-ad78f6512f38" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Footer = () => {
//   const footerLinks = {
//     about: [
//       { label: 'Our Mission', href: '#about' },
//       { label: 'Leadership Team', href: '#team' },
//       { label: 'Careers', href: '#' },
//       { label: 'News & Media', href: '#events' }
//     ],
//     research: [
//       { label: 'Active Projects', href: '#research' },
//       { label: 'Publications', href: '#' },
//       { label: 'Collaborations', href: '#' },
//       { label: 'Research Areas', href: '#research' }
//     ],
//     facilities: [
//       { label: 'Our Labs', href: '#facilities' },
//       { label: 'Equipment', href: '#facilities' },
//       { label: 'Facility Access', href: '#' },
//       { label: 'Safety Guidelines', href: '#' }
//     ],
//     connect: [
//       { label: 'Contact Us', href: '#contact' },
//       { label: 'Events', href: '#events' },
//       { label: 'Newsletter', href: '#' },
//       { label: 'Support', href: '#' }
//     ]
//   };

//   const socialLinks = [
//     { label: 'LinkedIn' },
//     { label: 'Twitter' },
//     { label: 'Facebook' },
//     { label: 'YouTube' }
//   ];

//   const handleLinkClick = (href) => {
//     if (href.startsWith('#')) {
//       const element = document.querySelector(href);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     } else {
//       alert('This feature is coming soon!');
//     }
//   };

//   const handleSocialClick = () => {
//     alert('This feature is coming soon!');
//   };

//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
//           <div className="lg:col-span-1">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-xl">N</span>
//               </div>
//               <div className="flex flex-col">
//                 <span className="font-bold text-lg leading-tight text-white">NRIC</span>
//                 <span className="text-xs text-gray-400">Research & Innovation</span>
//               </div>
//             </div>
//             <p className="text-sm text-gray-400 mb-4">
//               Advancing science and technology through cutting-edge research and innovation.
//             </p>
//             <div className="flex gap-3 flex-wrap">
//               {socialLinks.map((social) => (
//                 <button
//                   key={social.label}
//                   onClick={handleSocialClick}
//                   className="bg-gray-800 px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 text-xs"
//                   aria-label={social.label}
//                 >
//                   {social.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div>
//             <span className="font-semibold text-white text-sm uppercase tracking-wider mb-4 block">
//               About
//             </span>
//             <ul className="space-y-2">
//               {footerLinks.about.map((link) => (
//                 <li key={link.label}>
//                   <button
//                     onClick={() => handleLinkClick(link.href)}
//                     className="text-sm hover:text-blue-400 transition-colors duration-300 text-left"
//                   >
//                     {link.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <span className="font-semibold text-white text-sm uppercase tracking-wider mb-4 block">
//               Research
//             </span>
//             <ul className="space-y-2">
//               {footerLinks.research.map((link) => (
//                 <li key={link.label}>
//                   <button
//                     onClick={() => handleLinkClick(link.href)}
//                     className="text-sm hover:text-blue-400 transition-colors duration-300 text-left"
//                   >
//                     {link.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <span className="font-semibold text-white text-sm uppercase tracking-wider mb-4 block">
//               Facilities
//             </span>
//             <ul className="space-y-2">
//               {footerLinks.facilities.map((link) => (
//                 <li key={link.label}>
//                   <button
//                     onClick={() => handleLinkClick(link.href)}
//                     className="text-sm hover:text-blue-400 transition-colors duration-300 text-left"
//                   >
//                     {link.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <span className="font-semibold text-white text-sm uppercase tracking-wider mb-4 block">
//               Connect
//             </span>
//             <ul className="space-y-2">
//               {footerLinks.connect.map((link) => (
//                 <li key={link.label}>
//                   <button
//                     onClick={() => handleLinkClick(link.href)}
//                     className="text-sm hover:text-blue-400 transition-colors duration-300 text-left"
//                   >
//                     {link.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-sm text-gray-400">
//               © 2025 National Research & Innovation Center. All rights reserved.
//             </p>
//             <div className="flex gap-6 text-sm">
//               <button
//                 onClick={handleSocialClick}
//                 className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//               >
//                 Privacy Policy
//               </button>
//               <button
//                 onClick={handleSocialClick}
//                 className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//               >
//                 Terms of Service
//               </button>
//               <button
//                 onClick={handleSocialClick}
//                 className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//               >
//                 Cookie Policy
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// --- MAIN COMPONENT ---

// function App() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />
//       <Hero />
//       <About />
//       <Facilities />
//       <Research />
//       <Events />
//       <Team />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Facilities from '@/components/Facilities';
import Research from '@/components/Research';
import Events from '@/components/Events';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


import Home from '@/pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-grow">
        <Routes>
          

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/research" element={<Research />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;