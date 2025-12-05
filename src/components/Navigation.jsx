// import React, { useState, useEffect } from 'react';

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

// export default Navigation;


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Research', path: '/research' },
    { label: 'Events', path: '/events' },
    { label: 'Team', path: '/team' },
    { label: 'Contact', path: '/contact' }
  ];

  // Determine if we should use dark text (scrolled or not on home page)
  const isHome = location.pathname === '/';
  const useDarkText = isScrolled || !isHome;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      useDarkText ? 'bg-white shadow-md border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight ${useDarkText ? 'text-gray-900' : 'text-white'}`}>
                NTIC
              </span>
              <span className={`text-xs ${useDarkText ? 'text-gray-600' : 'text-gray-200'}`}>
                Research & Innovation
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === item.path
                    ? 'text-blue-600 font-bold'
                    : useDarkText ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 text-2xl font-bold ${useDarkText ? 'text-gray-900' : 'text-white'}`}
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