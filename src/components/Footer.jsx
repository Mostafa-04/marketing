import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
  FaArrowRight
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative text-white overflow-hidden pt-16 pb-8">

      {/* CREATIVE BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950"></div>

        {/* Orange glow */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-orange-400 opacity-20 blur-3xl rounded-full animate-pulse"></div>

        {/* Second blob */}
        <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-orange-500 opacity-10 blur-3xl rounded-full"></div>

        {/* Floating shape */}
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-orange-400/10 rotate-45 rounded-3xl animate-spin-slow"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* ABOUT */}
          <div>
            <img src="logo2.png" alt="Logo" className="w-24 mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Ajabboune <span className="text-orange-400">Abdelilah</span>
            </h3>
            <p className="text-white/70 leading-relaxed">
              Expert en marketing digital, je crée des stratégies performantes pour booster votre présence en ligne 
            </p>
          </div>

          {/* LINKS */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-center md:justify-start gap-2 text-white/70 hover:text-orange-400 transition group"
                >
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-white/70">
              <a href="tel:0688142336" className="flex items-center justify-center md:justify-end gap-2 hover:text-orange-400 transition">
                <FaPhoneAlt /> 06 88 14 23 36
              </a>
              <a href="mailto:abdelilahajbmarketing@gmail.com" className="flex items-center justify-center md:justify-end gap-2 hover:text-orange-400 transition">
                <FaEnvelope /> abdelilahajbmarketing@gmail.com
              </a>
            </div>

            {/* SOCIAL */}
            <div className="flex justify-center md:justify-end gap-4 mt-6">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-orange-400 transition transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/212688142336"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-green-500 transition transform hover:scale-110"
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:abdelilahajbmarketing@gmail.com"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-orange-400 transition transform hover:scale-110"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-6"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {currentYear} Ajabboune Abdelilah. Tous droits réservés.</p>
          <div className="flex gap-6">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-orange-400 transition">
                {link.name}
              </a>
            ))}
          </div>
        </div>


      </div>
    </footer>
  );
}