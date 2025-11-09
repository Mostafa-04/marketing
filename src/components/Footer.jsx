export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenu principal du footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Colonne 1: Présentation */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-white">Ajabboune Abdelilah</h3>
            <p className="text-gray-300 leading-relaxed">
              Expert en Marketing Digital passionné par la création de stratégies innovantes 
              et de contenu engageant pour booster votre présence en ligne.
            </p>
          </div>

          {/* Colonne 2: Liens rapides */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation Rapide</h4>
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 3: Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p className="hover:text-white transition-colors duration-300">
                <a href="tel:0688142336">📱 06 88 14 23 36</a>
              </p>
              <p className="hover:text-white transition-colors duration-300">
                <a href="mailto:abdelilahajbmarketing@gmail.com">✉️ abdelilahajbmarketing@gmail.com</a>
              </p>
              <div className="flex justify-center md:justify-end space-x-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/abdelilah-ajabboune-b23780394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="mailto:abdelilahajbmarketing@gmail.com"
                  className="bg-red-500 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
                <a
                  href="tel:0688142336"
                  className="bg-green-500 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bas du footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-300 text-sm">
            © {currentYear} Ajabboune Abdelilah. Tous droits réservés.
          </div>
          
          <div className="flex space-x-6 text-sm text-gray-300">
            <a href="#home" className="hover:text-white transition-colors duration-300">
              Accueil
            </a>
            <a href="#about" className="hover:text-white transition-colors duration-300">
              À Propos
            </a>
            <a href="#contact" className="hover:text-white transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>

        {/* Badge de développement */}
        <div className="text-center mt-8 pt-4 border-t border-gray-800">
          <span className="text-xs text-gray-500">
            Développé avec React & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}