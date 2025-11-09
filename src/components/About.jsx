export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Partie Image */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden shadow-2xl">
                {/* Remplacez par votre image */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                  <img src="img2.jpg" alt="" />
                </div>
              </div>
              {/* Élément décoratif */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Partie Texte */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              À propos de <span className="text-blue-600">moi</span>
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Je suis <strong>Ajabboune Abdelilah</strong>, spécialiste en Marketing Digital certifié par 
                <strong> Gomycode</strong>. Passionné par l'univers digital, je maîtrise la création de 
                stratégies marketing performantes adaptées aux objectifs de chaque entreprise.
              </p>
              
              <p>
                Mon expertise couvre la <strong>création de contenu</strong>, le <strong>design graphique</strong>, 
                le <strong>montage vidéo</strong> et la prise de vue avec <strong>caméra</strong>. Je développe 
                des campagnes publicitaires efficaces sur les plateformes sociales grâce à une 
                <strong> stratégie ADS</strong> ciblée et optimisée.
              </p>
              
              <p>
                Titulaire d'un <strong>Baccalauréat 2024</strong>, je poursuis actuellement mes études 
                en <strong>Faculté de Gestion</strong> pour approfondir mes connaissances en management 
                et stratégie d'entreprise.
              </p>
            </div>

            {/* Compétences */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Marketing Digital',
                'Création de Contenu',
                'Design Graphique',
                'Montage Vidéo',
                'Stratégie ADS',
                'Photographie'
              ].map((skill) => (
                <div key={skill} className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <span className="text-gray-800 font-medium text-sm">{skill}</span>
                </div>
              ))}
            </div>

            {/* Bouton CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Contactez-moi
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Voir mes Projets
              </a>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Certifications & Formation</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <h4 className="font-bold text-blue-700 mb-2">Gomycode</h4>
              <p className="text-gray-700">Certification en Marketing Digital</p>
              <p className="text-sm text-gray-500 mt-2">Formation intensive en stratégies digitales</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <h4 className="font-bold text-green-700 mb-2">Faculté de Gestion</h4>
              <p className="text-gray-700">Parcours Universitaire</p>
              <p className="text-sm text-gray-500 mt-2">Baccalauréat 2024 - En cours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}