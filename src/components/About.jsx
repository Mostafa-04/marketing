export default function About() {
  return (
    <section id="about" className="py-20 bg-blue-900 text-white relative overflow-hidden">
      
      {/* Background décoratif */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-40 h-40 bg-orange-400 opacity-10 rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-12">

          <div className="lg:w-2/5 flex justify-center">
            <div className="relative group">
              
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-800 to-blue-700 rounded-full overflow-hidden shadow-2xl border-4 border-orange-400">
                <img
                  src="img.jpg"
                  alt="Profil"
                  className="w-full h-full"
                />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-orange-400 opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></div>
            </div>
          </div>

          {/* 📝 TEXT */}
          <div className="lg:w-3/5 text-center lg:text-left">
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              À propos de <span className="text-orange-400">moi</span>
            </h2>

            <div className="space-y-4 text-lg text-white/80 leading-relaxed">
              <p>
                Je suis <strong className="text-white">Ajabboune Abdelilah</strong>, spécialiste en Marketing Digital certifié par 
                <strong className="text-orange-400"> Gomycode</strong>.
              </p>

              <p>
                Je crée des stratégies performantes incluant 
                <strong className="text-white"> contenu</strong>, 
                <strong className="text-white"> design</strong>, 
                <strong className="text-white"> vidéo</strong> et 
                <strong className="text-white"> publicité ADS</strong>.
              </p>

              <p>
                Étudiant en <strong className="text-orange-400">Faculté de Gestion</strong>, je développe mes compétences en stratégie et management.
              </p>
            </div>

            {/* 🚀 SKILLS */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Marketing Digital',
                'Création de Contenu',
                'Design Graphique',
                'Montage Vidéo',
                'Stratégie ADS',
                'Photographie'
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center hover:bg-orange-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="font-medium text-sm">{skill}</span>
                </div>
              ))}
            </div>

            {/* 🔘 BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              
              <a
                href="#contact"
                className="px-6 py-3 bg-orange-400 text-white rounded-lg font-semibold shadow-lg hover:bg-orange-500 hover:scale-105 transition-all duration-300"
              >
                Contactez-moi
              </a>

              <a
                href="#projects"
                className="px-6 py-3 border-2 border-orange-400 text-orange-400 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300"
              >
                Voir mes Projets
              </a>
            </div>
          </div>
        </div>

        {/* 🎓 CERTIFICATIONS */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Certifications & Formation
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:shadow-lg transition duration-300 border border-white/10">
              <h4 className="font-bold text-orange-400 mb-2">Gomycode</h4>
              <p className="text-white/80">Certification en Marketing Digital</p>
              <p className="text-sm text-white/60 mt-2">
                Formation intensive en stratégies digitales
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:shadow-lg transition duration-300 border border-white/10">
              <h4 className="font-bold text-orange-400 mb-2">Faculté de Gestion</h4>
              <p className="text-white/80">Parcours Universitaire</p>
              <p className="text-sm text-white/60 mt-2">
                Baccalauréat 2024 - En cours
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}