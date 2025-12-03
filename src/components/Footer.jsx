import React from 'react';

const Footer = () => {
  const footerLinks = {
    about: [
      { label: 'Our Mission', href: '#about' },
      { label: 'Leadership Team', href: '#team' },
      { label: 'Careers', href: '#' },
      { label: 'News & Media', href: '#events' }
    ],
    research: [
      { label: 'Active Projects', href: '#research' },
      { label: 'Publications', href: '#' },
      { label: 'Collaborations', href: '#' },
      { label: 'Research Areas', href: '#research' }
    ],
    facilities: [
      { label: 'Our Labs', href: '#facilities' },
      { label: 'Equipment', href: '#facilities' },
      { label: 'Facility Access', href: '#' },
      { label: 'Safety Guidelines', href: '#' }
    ],
    connect: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'Events', href: '#events' },
      { label: 'Newsletter', href: '#' },
      { label: 'Support', href: '#' }
    ]
  };

  const socialLinks = [
    { label: 'LinkedIn' },
    { label: 'Twitter' },
    { label: 'Facebook' },
    { label: 'YouTube' }
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      alert('This feature is coming soon!');
    }
  };

  const handleSocialClick = () => {
    alert('This feature is coming soon!');
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-white">NRIC</span>
                <span className="text-xs text-gray-400">Research & Innovation</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Advancing science and technology through cutting-edge research and innovation.
            </p>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <button
                  key={social.label}
                  onClick={handleSocialClick}
                  className="bg-gray-800 px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 text-xs"
                  aria-label={social.label}
                >
                  {social.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="font-semibold text-white text-sm uppercase tracking-wider mb-4 block">
              About
            </span>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-sm hover:text-blue-400 transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-semibold text-white text-sm uppercase tracking-wider mb-4 block">
              Research
            </span>
            <ul className="space-y-2">
              {footerLinks.research.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-sm hover:text-blue-400 transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-semibold text-white text-sm uppercase tracking-wider mb-4 block">
              Facilities
            </span>
            <ul className="space-y-2">
              {footerLinks.facilities.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-sm hover:text-blue-400 transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-semibold text-white text-sm uppercase tracking-wider mb-4 block">
              Connect
            </span>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-sm hover:text-blue-400 transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 National Research & Innovation Center. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button
                onClick={handleSocialClick}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button
                onClick={handleSocialClick}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Terms of Service
              </button>
              <button
                onClick={handleSocialClick}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;