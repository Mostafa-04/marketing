import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaArrowRight,
  FaWhatsapp
} from "react-icons/fa";

export default function Contact() {

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: "Appel Direct",
      value: "06 88 14 23 36",
      link: "tel:0688142336",
      description: "Disponible du lundi au vendredi"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "abdelilahajbmarketing@gmail.com",
      link: "mailto:abdelilahajbmarketing@gmail.com",
      description: "Réponse sous 24h"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Ajabboune Abdelilah",
      link: "https://www.linkedin.com",
      description: "Connectons-nous"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-blue-900 text-white relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-orange-400 opacity-10 rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Travaillons <span className="text-orange-400">ensemble</span>
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto">
            Prêt à booster votre présence digitale ? Contactez-moi 
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-orange-400 transition duration-300 text-center hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-orange-400 text-white rounded-xl text-2xl mb-4 group-hover:scale-110 transition">
                {contact.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition">
                {contact.title}
              </h3>

              <p className="text-white/90 font-semibold mb-1">
                {contact.value}
              </p>

              <p className="text-white/60 text-sm">
                {contact.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex justify-center text-orange-400 opacity-0 group-hover:opacity-100 transition">
                <FaArrowRight className="transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 text-center">
          
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-md">
            <div className="text-3xl font-bold text-orange-400">24h</div>
            <div className="text-white/70">Réponse</div>
          </div>

          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-md">
            <div className="text-3xl font-bold text-orange-400">100%</div>
            <div className="text-white/70">Disponible</div>
          </div>

          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-md">
            <div className="text-3xl font-bold text-orange-400">Flexible</div>
            <div className="text-white/70">Adaptation</div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-2xl mx-auto border border-white/10">

            <h3 className="text-2xl font-bold mb-4">
              Commençons votre projet 
            </h3>

            <p className="text-white/70 mb-6">
              Discutons et transformons votre idée en succès
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}