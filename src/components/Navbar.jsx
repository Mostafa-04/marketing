import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const links = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-white shadow-md py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo / Nom */}
            <div className="text-blue-600 font-bold text-xl lg:text-2xl hover:text-blue-700 transition-colors duration-300">
              <a href="#home">
                Ajabboune Abdelilah
              </a>
            </div>

            {/* Navigation Desktop */}
            <div className="hidden md:flex space-x-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>


            {/* Menu Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-300"
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

        {/* Menu Mobile Dropdown */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t border-gray-200 px-4 py-3 shadow-inner">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 px-4 text-gray-700 font-medium rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 border-b border-gray-100 last:border-b-0"
              >
                {link.name}
              </a>
            ))}

          </div>
        </div>
      </nav>


    </>
  );
}