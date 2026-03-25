import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  { 
    name: 'Campagne Publicitaire Instagram', 
    description: 'Stratégie ADS complète avec +150% trafic et +200% conversions.',
    image: './projet1.jpg',
    link: '#',
    tags: ['Instagram ADS', 'Stratégie', 'Conversion']
  },
  { 
    name: 'Refonte Identité Visuelle', 
    description: 'Création d’une identité visuelle moderne et cohérente.',
    image: './projet2.jpg',
    link: '#',
    tags: ['Design', 'Branding', 'Logo']
  },
  { 
    name: 'Montage Vidéo Promotionnel', 
    description: 'Vidéo corporate avec storytelling engageant.',
    image: './projet3.png',
    link: '#',
    tags: ['Vidéo', 'Montage', 'Production']
  },
  { 
    name: 'Stratégie Content Marketing', 
    description: 'Plan de contenu sur 6 mois + analyse performance.',
    image: './projet4.jpg',
    link: '#',
    tags: ['Content', 'SEO', 'Stratégie']
  },
  { 
    name: 'Campagne Email Marketing', 
    description: 'Séquence email avec 45% open rate.',
    image: './projet5.jpg',
    link: '#',
    tags: ['Email', 'Automation']
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-blue-900 text-white relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-orange-400 opacity-10 rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-orange-400">Projets</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Découvrez mes réalisations en marketing digital et stratégie
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-orange-400 text-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/80 mb-4">
                  {project.description}
                </p>

               
                <a
                  href={project.link}
                  target="_blank"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-400 text-white rounded-lg text-sm font-semibold 
                  hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 group/btn"
                >
                  Voir Projet
                  <FaExternalLinkAlt className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </a>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-orange-400 text-white rounded-xl font-bold hover:bg-orange-500 transition transform hover:scale-105 shadow-lg"
          >
            Discutons de votre projet 
          </a>
        </div>

      </div>
    </section>
  );
}