


import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Research', path: '/research' },
    { label: 'Events', path: '/events' },
    { label: 'Team', path: '/team' },
    { label: 'Contact', path: '/contact' }
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <Link to="/" className="flex items-center gap-3">
            {/* Updated Logo */}
            <img 
              src="/team/NTIC-logo.png" 
              alt="NTIC Logo" 
              className="w-[86px] h-[86px] object-contain"
            />

            <div className="flex flex-col">
              <span className="font-bold text-3xl leading-tight text-black">
                NTIC
              </span>
              <span className="text-lg text-black">
                Research & Innovation
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`text-sm font-medium transition-colors 
                hover:text-blue-600 ${
                  location.pathname === item.path
                    ? 'text-blue-600 font-bold'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-2xl font-bold text-gray-900"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;




// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navigation = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const location = useLocation();

//   const navItems = [
//     {
//       label: "About Us",
//       children: [
//         { label: "Who we are", path: "/about/who-we-are" },
//         { label: "Mission & Vision", path: "/about/mission-vision" },
//         { label: "Our History & Collaboration", path: "/about/history-collaboration" },
//         { label: "Advisory Team", path: "/about/advisory-team" },
//         { label: "Team", path: "/about/team" },
//       ],
//     },
//     {
//       label: "Projects",
//       children: [
//         { label: "Current project", path: "/projects/current" },
//         { label: "Success stories", path: "/projects/success-stories" },
//         { label: "Events", path: "/projects/events" },
//       ],
//     },
//     {
//       label: "Resources",
//       children: [
//         { label: "Startup Fund", path: "/resources/startup-fund" },
//         { label: "Lab", path: "/resources/lab" },
//         { label: "Health -eq.-bus.", path: "/resources/health" },
//         { label: "Agri -eq.", path: "/resources/agri" },
//         { label: "Energy -eq.", path: "/resources/energy" },
//         { label: "I.T", path: "/resources/it" },
//         { label: "Auditorium", path: "/resources/auditorium" },
//         { label: "Event Hall", path: "/resources/event-hall" },
//       ],
//     },
//     {
//       label: "Stay Informed",
//       children: [
//         { label: "Announcements", path: "/informed/announcements" },
//         { label: "Blog", path: "/informed/blog" },
//         { label: "From Director", path: "/informed/from-director" },
//         { label: "From VC", path: "/informed/from-vc" },
//         { label: "From Advisors", path: "/informed/from-advisors" },
//         { label: "News & Features", path: "/informed/news-features" },
//         { label: "Vacancy", path: "/informed/vacancy" },
//       ],
//     },
//   ];

//   React.useEffect(() => {
//     window.scrollTo(0, 0);
//     setIsMobileMenuOpen(false);
//   }, [location.pathname]);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">

//           {/* LOGO */}
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src="/team/NTIC-logo.png"
//               alt="NTIC Logo"
//               className="w-[70px] h-[70px] object-contain"
//             />
//             <div className="flex flex-col">
//               <span className="font-bold text-3xl text-black">NTIC</span>
//               <span className="text-lg text-black">Research & Innovation</span>
//             </div>
//           </Link>

//           {/* DESKTOP MENU */}
//           <div className="hidden md:flex items-center gap-8">
//             {navItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative group"
//               >
//                 <button className="text-gray-800 font-medium hover:text-blue-600 transition">
//                   {item.label}
//                 </button>

//                 {/* DROPDOWN */}
//                 <div className="absolute left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all bg-white shadow-lg border rounded-lg p-4 w-56">
//                   {item.children.map((sub, i) => (
//                     <Link
//                       key={i}
//                       to={sub.path}
//                       className="block px-2 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
//                     >
//                       {sub.label}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* MOBILE TOGGLE */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="p-2 text-3xl font-bold text-gray-900"
//             >
//               {isMobileMenuOpen ? "✕" : "☰"}
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* MOBILE DROPDOWNS */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200">
//           <div className="px-4 py-4 space-y-4">
//             {navItems.map((item, index) => (
//               <div key={index}>
//                 <button
//                   onClick={() =>
//                     setOpenDropdown(openDropdown === index ? null : index)
//                   }
//                   className="w-full text-left font-semibold text-gray-800 py-2"
//                 >
//                   {item.label}
//                 </button>

//                 {openDropdown === index && (
//                   <div className="pl-4 pt-2 space-y-2">
//                     {item.children.map((sub, i) => (
//                       <Link
//                         key={i}
//                         to={sub.path}
//                         className="block py-2 text-gray-700 hover:text-blue-600"
//                       >
//                         {sub.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navigation;
