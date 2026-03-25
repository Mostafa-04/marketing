import { useState, useEffect } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: 'Accueil', href: '#home', icon: <FaHome className="inline mr-2" /> },
    { name: 'À Propos', href: '#about', icon: <FaUser className="inline mr-2" /> },
    { name: 'Projets', href: '#projects', icon: <FaProjectDiagram className="inline mr-2" /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope className="inline mr-2" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-blue-900/95 backdrop-blur-md shadow-lg py-2' : 'bg-blue-900 shadow-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="text-orange-400 font-bold text-xl lg:text-2xl">
            <a href="#home" className="inline-block transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
              <img src="./logo2.png" className="w-16 h-16" alt="Logo" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-orange-400 font-medium rounded-lg flex items-center hover:text-white hover:bg-blue-700transition-all duration-300"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-orange-400 hover:text-white hover:bg-blue-700 rounded-lg transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-blue-900 border-t border-gray-200 px-4 py-3 shadow-inner">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 px-4 text-orange-400 font-medium rounded-lg flex items-center hover:text-white hover:bg-blue-700 transition-colors duration-300 border-b border-gray-100 last:border-b-0"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}