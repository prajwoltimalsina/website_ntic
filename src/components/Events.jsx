// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useLocation } from "react-router-dom";
// const location = useLocation();
// {location.pathname === "/events" && (
//   <div
//     className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white transform transition-all duration-500 hover:scale-[1.02]"
//     data-aos="zoom-in"
//   >
//     <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
//     <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
//       Subscribe to our newsletter to receive updates about upcoming events, research breakthroughs, and collaboration opportunities.
//     </p>
//     <button 
//       onClick={() => alert('This update is coming soon!')}
//       className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-110"
//     >
//       Subscribe to Newsletter
//     </button>
//   </div>
// )}






// const Events = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   const events = [
//     {
//       title: 'Prime Minister Visit',
//       location: 'Kathmandu University, Dhulikhel',
//       description: 'PM K P Sharma Oli Visits NTIC During Kathmandu University’s 30th Convocation – Phase II',
//       image: '/team/pmvisit.jpg'
//     },
//     {
//       title: 'KOICA Nepal Visit',
//       location: 'NTIC',
//       description: 'Mr. Mooheon Kong, Country Director, KOICA Nepal Pays Official Visit to NTIC.',
//       image: '/team/koicavisit.jpg'
//     },
//     {
//       title: 'NTIC Hosts ICIMOD Director',
//       location: 'NTIC',
//       description: 'NTIC Hosts ICIMOD Director General Dr. Pema Gyamtsho for Strategic Partnership Dialogue.',
//       image: '/team/icimod.jpg'
//     },
//     {
//       title: 'French Ambassador Visit',
//       location: 'NTIC',
//       description: 'Visit of French Ambassador to Nepal Technology Innovation Center (NTIC).',
//       image: '/team/french.jpeg'
//     },
//     {
//       title: 'Gates Foundation Visit',
//       location: 'NTIC',
//       description: 'Visit of Dr. Roshan Raj Shrestha, Deputy Director at Gates Foundation, to Nepal Technology Innovation Center.',
//       image: '/team/gates.jpeg'
//     }
//   ];

//   const announcements = [
//     {
//       date: 'Coming Soon',
//       title: 'Student Blogs',
//       description: 'Check out what the architecture students have in their minds.'
//     }
//   ];

//   const handleReadMore = () => alert('This update is coming soon!');

//   return (
//     <section id="events" className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-20" data-aos="fade-up">
//           <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Events & News</span>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
//             Upcoming Events & Announcements
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Stay connected with our latest events, conferences, and important announcements from the research community
//           </p>
//         </div>

//         {/* Recent Events */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-bold text-gray-900 mb-8" data-aos="fade-right">Recent Events</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {events.map((event, i) => (
//               <div
//                 key={event.title}
//                 className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
//                 data-aos="fade-up"
//                 data-aos-delay={i * 100}
//               >
//                 {/* Image */}
//                 <div className="relative h-48 overflow-hidden">
//                   <img 
//                     src={event.image} 
//                     alt={event.title} 
//                     className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
//                   {event.location && <p className="text-gray-500 text-sm mb-2"> {event.location}</p>}
//                   <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>
//                   <button
//                     onClick={handleReadMore}
//                     className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all duration-300"
//                   >
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Announcements */}
//        {/* Hackathon Launch Section */}

//        <div className="mb-20">
  
//   {/* Heading */}
//   <h3
//     className="text-4xl font-bold text-gray-900 mb-8"
//     data-aos="fade-right"
//   >
//     Announcements
//   </h3>
//   </div>

// <div className="mb-20">
//   <h3
//     className="text-3xl font-extrabold text-gray-900 mb-10 text-center"
//     data-aos="fade-right"
//   >
//     🚀 Harvard Health Hackathon 2025 — Now Open for Applications!
//   </h3>

//   <div
//     className="bg-gradient-to-br  from-blue-50 to-indigo-50  rounded-2xl p-10 shadow-xl border border-red-200 hover:shadow-2xl transition-all duration-500"
//     data-aos="fade-up"
//   >
//     <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      
//       {/* Left Section */}
//       <div className="flex-1">
//         <h2 className="text-2xl font-bold text-red-800 mb-3">
//           Harvard Health Hackathon 2025
//         </h2>

//         <p className="text-gray-700 text-lg leading-relaxed mb-4">
//           We are excited to launch the **Harvard Health Hackathon 2025**, a
//           global innovation event focused on solving real-world health
//           challenges through technology, creativity, and collaboration.
//         </p>

//         <p className="text-gray-700 leading-relaxed">
//           Developers, designers, entrepreneurs, and students from around the
//           world are invited to participate and showcase groundbreaking
//           solutions. Limited seats — apply today!
//         </p>
//       </div>

//       {/* Apply Button */}
//       <a
//         href="YOUR_APPLICATION_LINK_HERE"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="px-6 py-3 bg-red-600 text-white rounded-xl font-semibold shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-300 whitespace-nowrap"
//       >
//         Apply Now
//       </a>

//     </div>
//   </div>
// </div>

//         {/* Newsletter */}
//         <div className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white transform transition-all duration-500 hover:scale-[1.02]" data-aos="zoom-in">
//           <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
//           <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
//             Subscribe to our newsletter to receive updates about upcoming events, research breakthroughs, and collaboration opportunities.
//           </p>
//           <button 
//             onClick={() => alert('This update is coming soon!')}
//             className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-110"
//           >
//             Subscribe to Newsletter
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Events;



import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from "react-router-dom";

const Events = () => {
  const location = useLocation(); // ⭐ Detect current route

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const events = [
    {
      title: 'Prime Minister Visit',
      location: 'Kathmandu University, Dhulikhel',
      description: 'PM K P Sharma Oli Visits NTIC During Kathmandu University’s 30th Convocation – Phase II',
      image: '/team/pmvisit.jpg'
    },
    {
      title: 'KOICA Nepal Visit',
      location: 'NTIC',
      description: 'Mr. Mooheon Kong, Country Director, KOICA Nepal Pays Official Visit to NTIC.',
      image: '/team/koicavisit.jpg'
    },
    {
      title: 'NTIC Hosts ICIMOD Director',
      location: 'NTIC',
      description: 'NTIC Hosts ICIMOD Director General Dr. Pema Gyamtsho for Strategic Partnership Dialogue.',
      image: '/team/icimod.jpg'
    },
    {
      title: 'French Ambassador Visit',
      location: 'NTIC',
      description: 'Visit of French Ambassador to Nepal Technology Innovation Center (NTIC).',
      image: '/team/french.jpeg'
    },
    {
      title: 'Gates Foundation Visit',
      location: 'NTIC',
      description: 'Visit of Dr. Roshan Raj Shrestha, Deputy Director at Gates Foundation, to Nepal Technology Innovation Center.',
      image: '/team/gates.jpeg'
    }
  ];

  const announcements = [
    {
      date: 'Coming Soon',
      title: 'Student Blogs',
      description: 'Check out what the architecture students have in their minds.'
    }
  ];

  const handleReadMore = () => alert('This update is coming soon!');

  return (
    <section id="events" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Events & News</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Upcoming Events & Announcements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with our latest events, conferences, and important announcements from the research community
          </p>
        </div>

        {/* Recent Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8" data-aos="fade-right">Recent Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <div
                key={event.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  {event.location && <p className="text-gray-500 text-sm mb-2"> {event.location}</p>}
                  <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>
                  <button
                    onClick={handleReadMore}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Announcements */}
        <div className="mb-20">
          <h3
            className="text-4xl font-bold text-gray-900 mb-8"
            data-aos="fade-right"
          >
            Announcements
          </h3>
        </div>

        {/* Hackathon Section */}
        <div className="mb-20">
  {/* Heading */}
  <h3
    className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-blue-700"
    data-aos="fade-right"
    data-aos-duration="1000"
  >
    🚀 Harvard Health Hackathon 2025 — Now Open for Applications!
  </h3>

  {/* Card */}
  <div
    className="bg-white rounded-3xl p-10 shadow-xl border border-blue-200
               hover:shadow-2xl transform transition-all duration-500"
    data-aos="fade-up"
    data-aos-duration="1200"
  >
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

      {/* Left Section */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-3" data-aos="fade-right" data-aos-delay="200">
          Harvard Health Hackathon 2025
        </h2>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4" data-aos="fade-right" data-aos-delay="300">
          We are excited to launch the <strong>Harvard Health Hackathon 2025</strong>, a
          global innovation event focused on solving real-world health
          challenges through technology, creativity, and collaboration.
        </p>

        <p className="text-gray-700 leading-relaxed" data-aos="fade-right" data-aos-delay="400">
          Developers, designers, entrepreneurs, and students worldwide are invited to participate. Limited seats — apply today!
        </p>
      </div>

      {/* Apply Button */}
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold 
                   shadow-md hover:shadow-xl hover:scale-105 transition-all duration-500 whitespace-nowrap"
        data-aos="zoom-in"
        data-aos-delay="500"
      >
        Apply Now
      </a>

    </div>
  </div>
</div>


        {/* Newsletter — appears ONLY on /events */}
        {location.pathname === "/events" && (
          <div
            className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white transform transition-all duration-500 hover:scale-[1.02]"
            data-aos="zoom-in"
          >
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates about upcoming events, research breakthroughs, and collaboration opportunities.
            </p>
            <button 
              onClick={() => alert('This update is coming soon!')}
              className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-110"
            >
              Subscribe to Newsletter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Events;
