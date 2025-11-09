const projects = [
  { 
    name: 'Campagne Publicitaire Instagram', 
    description: 'Stratégie ADS complète pour une marque de mode avec augmentation de 150% du trafic et 200% des conversions.',
    image: '/projet1.jpg',
    link: '#',
    tags: ['Instagram ADS', 'Stratégie', 'Conversion']
  },
  { 
    name: 'Refonte Identité Visuelle', 
    description: 'Création d\'une identité visuelle moderne et cohérente pour une startup tech avec design logo et charte graphique.',
    image: '/projet2.jpg',
    link: '#',
    tags: ['Design', 'Branding', 'Logo']
  },
  { 
    name: 'Montage Vidéo Promotionnel', 
    description: 'Production et montage d\'une vidéo corporate pour le lancement d\'un nouveau produit avec storytelling engageant.',
    image: '/projet3.jpg',
    link: '#',
    tags: ['Vidéo', 'Montage', 'Production']
  },
  { 
    name: 'Stratégie Content Marketing', 
    description: 'Développement d\'une stratégie de contenu sur 6 mois avec calendrier éditorial et analyse des performances.',
    image: '/projet4.jpg',
    link: '#',
    tags: ['Content', 'Stratégie', 'SEO']
  },
  { 
    name: 'Campagne Email Marketing', 
    description: 'Création d\'une séquence d\'emails automatisés avec taux d\'ouverture de 45% et taux de clics de 12%.',
    image: '/projet5.jpg',
    link: '#',
    tags: ['Email', 'Automation', 'Conversion']
  },
  { 
    name: 'Photos Produit Professionnelles', 
    description: 'Séance photo produit avec éclairage studio et retouches pour catalogue e-commerce de luxe.',
    image: '/projet6.jpg',
    link: '#',
    tags: ['Photo', 'Produit', 'Retouche']
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mes <span className="text-blue-600">Projets</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez mes réalisations en marketing digital, création de contenu et stratégies publicitaires
          </p>
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              {/* Image du projet */}
              <div className="relative overflow-hidden h-48">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-gray-400 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-center">Image {project.name}</span>
                </div>
                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300"></div>
                
                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-blue-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contenu de la carte */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Bouton Voir le projet */}
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 group/btn"
                >
                  <span>Voir le projet</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Voir plus */}
        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Discutons de votre projet</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}