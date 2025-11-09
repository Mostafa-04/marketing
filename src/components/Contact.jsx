export default function Contact() {
  const contactInfo = [
    {
      icon: "📱",
      title: "Appel Direct",
      value: "06 88 14 23 36",
      link: "tel:0688142336",
      description: "Disponible du lundi au vendredi, 9h-18h"
    },
    {
      icon: "✉️",
      title: "Email Professionnel",
      value: "abdelilahajbmarketing@gmail.com",
      link: "mailto:abdelilahajbmarketing@gmail.com",
      description: "Réponse garantie sous 24 heures"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Ajabboune Abdelilah",
      link: "https://www.linkedin.com/in/abdelilah-ajabboune-b23780394",
      description: "Connectons-nous professionnellement"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Éléments de fond décoratifs */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-100 rounded-full opacity-40"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-blue-50 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-blue-700 font-semibold">Disponible immédiatement</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Travaillons <span className="text-blue-600">ensemble</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Prêt à transformer votre présence digitale ? Contactez-moi pour discuter de votre projet.
          </p>
        </div>

        {/* Cartes de contact horizontales */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target={contact.title === "LinkedIn" ? "_blank" : "_self"}
              rel={contact.title === "LinkedIn" ? "noopener noreferrer" : ""}
              className="group block bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row items-center p-6">
                {/* Icône */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl text-white mb-4 sm:mb-0 sm:mr-6 group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>

                {/* Contenu */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {contact.title}
                  </h3>
                  <p className="text-lg text-gray-800 font-semibold mb-1">
                    {contact.value}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {contact.description}
                  </p>
                </div>

                {/* Flèche */}
                <div className="hidden sm:flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Stats de contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
          <div className="text-center p-6 bg-blue-50 rounded-2xl">
            <div className="text-2xl font-bold text-blue-600 mb-2">24h</div>
            <div className="text-gray-700">Délai de réponse moyen</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-2xl">
            <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-700">Disponibilité projets</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-2xl">
            <div className="text-2xl font-bold text-purple-600 mb-2">Flexible</div>
            <div className="text-gray-700">Adaptation à vos besoins</div>
          </div>
        </div>

        {/* Zone d'action principale */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 max-w-2xl mx-auto border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Commençons votre projet dès aujourd'hui
            </h3>
            <p className="text-gray-600 mb-6">
              Discutons de votre vision et voyons comment je peux vous aider à la concrétiser
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/0688142336"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>📱</span>
                WhatsApp Direct
              </a>
              <a 
                href="mailto:abdelilahajbmarketing@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>🚀</span>
                Démarrer un Projet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}