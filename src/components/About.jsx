import React from 'react';

const About = () => {
  const values = [
    {
      title: 'Our Mission',
      description: 'To drive groundbreaking research and innovation that addresses global challenges and improves quality of life through scientific excellence and collaborative partnerships.'
    },
    {
      title: 'Our Vision',
      description: 'To be a world-leading research center recognized for transformative discoveries, cutting-edge technology development, and fostering the next generation of innovators.'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in research methodology, ethical practices, and scientific rigor, ensuring impactful and reproducible results.'
    },
    {
      title: 'Collaboration',
      description: 'We foster interdisciplinary collaboration, bringing together diverse expertise to solve complex problems and accelerate innovation across multiple domains.'
    }
  ];

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
             src="public/team/ntic_building.png" />
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <div className="w-7 h-7 bg-blue-600 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

// import React from 'react';

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

// export default About;