// // import React from 'react';

// // const Team = () => {
// //   const teamMembers = [
// //     {
// //       name: 'Dr. Sarah Mitchell',
// //       role: 'Director of Research',
// //       specialization: 'Biotechnology & Genomics',
// //       image: 'Professional portrait of female research director in laboratory coat',
// //       achievements: 'Ph.D. MIT, 50+ Publications'
// //     },
// //     {
// //       name: 'Prof. James Chen',
// //       role: 'AI Research Lead',
// //       specialization: 'Machine Learning & AI',
// //       image: 'Professional portrait of male AI researcher with computer systems',
// //       achievements: 'Ph.D. Stanford, 15 Patents'
// //     },
// //     {
// //       name: 'Dr. Emily Rodriguez',
// //       role: 'Materials Science Lead',
// //       specialization: 'Nanotechnology & Polymers',
// //       image: 'Professional portrait of female materials scientist in research lab',
// //       achievements: 'Ph.D. Caltech, Industry Award Winner'
// //     },
// //     {
// //       name: 'Dr. Michael Thompson',
// //       role: 'Energy Innovation Lead',
// //       specialization: 'Renewable Energy Systems',
// //       image: 'Professional portrait of male energy researcher with solar equipment',
// //       achievements: 'Ph.D. Cambridge, Clean Energy Pioneer'
// //     },
// //     {
// //       name: 'Dr. Aisha Patel',
// //       role: 'Computational Biology Lead',
// //       specialization: 'Bioinformatics & Drug Discovery',
// //       image: 'Professional portrait of female computational biologist with computer',
// //       achievements: 'Ph.D. Oxford, 40+ Publications'
// //     },
// //     {
// //       name: 'Dr. David Kim',
// //       role: 'Chemistry Research Lead',
// //       specialization: 'Organic Synthesis & Catalysis',
// //       image: 'Professional portrait of male chemistry researcher in laboratory',
// //       achievements: 'Ph.D. Harvard, AAAS Fellow'
// //     }
// //   ];

// //   const handleContact = () => {
// //     alert('This update is coming soon!');
// //   };

// //   return (
// //     <section id="team" className="py-24 bg-gray-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-16">
// //           <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Team</span>
// //           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
// //             World-Class Research Experts
// //           </h2>
// //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //             Our diverse team of leading scientists and researchers brings together expertise 
// //             from around the globe to drive innovation and scientific excellence
// //           </p>
// //         </div>

// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
// //           {teamMembers.map((member) => (
// //             <div
// //               key={member.name}
// //               className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
// //             >
// //               <div className="relative h-80 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
// //                 <img 
// //                   alt={member.name} 
// //                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //                  src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
// //                   <div className="flex gap-2 px-4 w-full">
// //                     <button 
// //                       onClick={handleContact}
// //                       className="flex-1 bg-white/90 hover:bg-white text-gray-900 py-2 px-4 rounded text-sm font-medium"
// //                     >
// //                       Email
// //                     </button>
// //                     <button 
// //                       onClick={handleContact}
// //                       className="flex-1 bg-white/90 hover:bg-white text-gray-900 py-2 px-4 rounded text-sm font-medium"
// //                     >
// //                       LinkedIn
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="p-6">
// //                 <h3 className="text-2xl font-bold text-gray-900 mb-1">
// //                   {member.name}
// //                 </h3>
// //                 <div className="text-blue-600 font-semibold mb-2">
// //                   {member.role}
// //                 </div>
// //                 <p className="text-gray-600 mb-3">
// //                   {member.specialization}
// //                 </p>
// //                 <div className="flex items-start gap-2 text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
// //                   <span>🏆 {member.achievements}</span>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
// //           <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
// //           <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
// //             We're always looking for talented researchers, scientists, and innovators to join our team. 
// //             Explore current opportunities and be part of groundbreaking research.
// //           </p>
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <button 
// //               onClick={handleContact}
// //               className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
// //             >
// //               View Open Positions
// //             </button>
// //             <button 
// //               onClick={handleContact}
// //               className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
// //             >
// //               Submit Application
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Team;


// import React from 'react';

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

// export default Team;

// import React from "react";

// Import images for each member
// import mike from "../assets/team/mike.jpg";
// import tim from "../assets/team/tim.jpg";
// import achyut from "../assets/team/achyut.jpg";

// import bim from "public/bim.jpg";
// import sanjiv from "../assets/team/sanjiv.jpg";
// import shree from "../assets/team/shree.jpg";
// import suman from "../assets/team/suman.jpg";
// import ujjwal from "public/ujjwal.jpg";
// import asish from "public/asish.jpg";
// import shreesha from "../assets/team/shreesha.jpg";
// import anuja from "../assets/team/anuja.jpg";
// import yam from "public/yamraj.jpg";
// import anup from "../assets/team/anup.jpg";



// const Team = () => {
//   const advisoryTeam = [
//     { name: "MIKE HARKER", role: "CHIEF OF PUBLIC AFFAIRS - US EMBASSY, NEPAL", linkedin: "#", image: mike },
//     { name: "TIM GOCHER OBE", role: "FOUNDER/CEO DOLMA IMPACT FUND", linkedin: "#", image: tim },
//     { name: "PROF. DR. ACHYUT WAGLE", role: "VICE CHANCELLOR, KU", linkedin: "#", image: achyut },
//   ];

//   const mainTeam = [
//     { name: "PROF. DR. BIM PRASAD SHRESTHA", role: "DIRECTOR", linkedin: "https://www.linkedin.com/in/bim-shrestha-79150427?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: "/bim" },
//     { name: "DR. SANJIV GUPTA", role: "CHIEF OF INNOVATION", linkedin: "https://www.linkedin.com/in/drsanjivgupta?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: "/sanjiv" },
//     { name: "SHREE KRISHNA DHITAL", role: "AGRICULTURE INNOVATION OFFICER", linkedin: "https://www.linkedin.com/in/shree-krishna-dhital?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: shree },
//     { name: "SUMAN", role: "WASH INNOVATION OFFICER", linkedin: "https://www.linkedin.com/in/sumandhunshrestha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: suman },
//     { name: "UJJWAL THAPA", role: "PROJECT COORDINATOR", linkedin: "#", image: "/ujjwal" },
//     { name: "ASISH", role: "OPERATION MANAGER", linkedin: "#", image: "/asish" },
//     { name: "SHREESHA", role: "RESEARCHER", linkedin: "#", image: shreesha },
//     { name: "ANUJA", role: "RESEARCHER", linkedin: "#", image: anuja },
//     { name: "YAM", role: "RESEARCHER", linkedin: "#", image: yam },
//     { name: "ANUP RAJ PANDEY", role: "HACKATHON COORDINATOR", linkedin: "#", image: anup },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* ------------------ Advisory Team ------------------ */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900">
//             OUR HONORABLE ADVISORY TEAM
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-3 gap-10 mb-24">
//           {advisoryTeam.map((member, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-2xl overflow-hidden transition hover:shadow-xl"
//             >
//               {/* Photo with simple frame */}
//               <div className="p-4 bg-white">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-64 object-cover rounded-xl border-2 border-gray-200 shadow-sm"
//                 />
//               </div>

//               <div className="p-6 text-center">
//                 <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
//                 <p className="text-blue-600 font-semibold mt-2">{member.role}</p>

//                 <a
//                   href={member.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   LinkedIn Profile
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ------------------ Main Team ------------------ */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900">OUR TEAM</h2>
//         </div>

//         <div className="grid md:grid-cols-3 gap-10">
//           {mainTeam.map((member, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-2xl overflow-hidden transition hover:shadow-xl"
//             >
//               {/* Photo with simple frame */}
//               <div className="p-4 bg-white">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-64 object-cover rounded-xl border-2 border-gray-200 shadow-sm"
//                 />
//               </div>

//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
//                 <p className="text-blue-600 font-semibold mt-2">{member.role}</p>

//                 <a
//                   href={member.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   LinkedIn Profile
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;
import React from "react";

const Team = () => {
  // ------------------ Advisory Team ------------------
  const advisoryTeam = [
    {
      name: "MIKE HARKER",
      role: "CHIEF OF PUBLIC AFFAIRS - US EMBASSY, NEPAL",
      linkedin: "https://www.linkedin.com/in/mike-harker?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/mike.jpg",
    },
    {
      name: "TIM GOCHER OBE",
      role: "FOUNDER/CEO DOLMA IMPACT FUND",
      linkedin: "https://www.linkedin.com/in/timgocher?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/tim.jpg",
    },
    {
      name: "PROF. DR. ACHYUT WAGLE",
      role: "VICE CHANCELLOR, KU",
      linkedin: "https://www.linkedin.com/in/achyut-wagle-a9b1537a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/achyut.jpg",
    },
  ];

  // ------------------ Main Team ------------------
  const mainTeam = [
    {
      name: "PROF. DR. BIM PRASAD SHRESTHA",
      role: "DIRECTOR",
      linkedin: "https://www.linkedin.com/in/bim-shrestha-79150427?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/bim.jpeg",
    },
    {
      name: "DR. SANJIV GUPTA",
      role: "CHIEF OF INNOVATION",
      linkedin: "https://www.linkedin.com/in/drsanjivgupta?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/sanjiv.jpg",
    },
    {
      name: "SHREE KRISHNA DHITAL",
      role: "AGRICULTURE INNOVATION OFFICER",
      linkedin: "https://www.linkedin.com/in/shree-krishna-dhital?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/shree.jpg",
    },
    {
      name: "SUMAN",
      role: "WASH INNOVATION OFFICER",
      linkedin: "https://www.linkedin.com/in/sumandhunshrestha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/suman.jpg",
    },
    {
      name: "UJJWAL THAPA",
      role: "PROJECT COORDINATOR",
      linkedin: "#",
      image: "/team/ujjwal.jpg",
    },
    {
      name: "ASISH",
      role: "OPERATION MANAGER",
      linkedin: "#",
      image: "/team/asish.jpg",
    },
    {
      name: "SHREESHA",
      role: "RESEARCHER",
      linkedin: "#",
      image: "/team/shreesha.jpg",
    },
    {
      name: "ANUJA",
      role: "RESEARCHER",
      linkedin: "https://www.linkedin.com/in/anuja-upadhyay-5a9129193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/team/anuja.jpg",
    },
    {
      name: "YAM",
      role: "RESEARCHER",
      linkedin: "#",
      image: "/team/yamraj.jpg",
    },
    {
      name: "ANUP RAJ PANDEY",
      role: "HACKATHON COORDINATOR",
      linkedin: "#",
      image: "/team/anup.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Advisory Team */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            OUR HONORABLE ADVISORY TEAM
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {advisoryTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl overflow-hidden transition hover:shadow-xl"
            >
              <div className="p-4 bg-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-xl border-2 border-gray-200 shadow-sm"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mt-2">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Main Team */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">OUR TEAM</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {mainTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl overflow-hidden transition hover:shadow-xl"
            >
              <div className="p-4 bg-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-xl border-2 border-gray-200 shadow-sm"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mt-2">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Team;
