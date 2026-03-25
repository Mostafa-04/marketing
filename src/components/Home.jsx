import { TypeAnimation } from 'react-type-animation';
export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-blue-900 px-4"
    >
      {/* Background décoratif avec carrés */}
      <div className="absolute inset-0 z-0">
        {/* Carrés statiques */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 opacity-20 rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rotate-45"></div>
        <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-blue-800 opacity-30 -rotate-6"></div>

        {/* Carrés animés */}
        <div className="absolute animate-pulse-slow bottom-10 right-10 w-32 h-32 bg-orange-400 opacity-10 rotate-12 rounded-md"></div>
        <div className="absolute animate-bounce-slow top-20 left-1/2 w-20 h-20 bg-white/20 rotate-45 rounded-lg"></div>
      </div>

      {/* Container principal */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Partie texte */}
        <div className="flex-1 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              <TypeAnimation
                sequence={[
                  'Ajabboune Abdelilah',
                  1000,
                ]}
                speed={50}
                wrapper="span"
                repeat={0}
              />
            </h1>

            <h2 className="text-xl md:text-2xl text-orange-400 mt-4">
              <TypeAnimation
                sequence={[
                  'Expert en Marketing Digital',
                  1000,
                ]}
                speed={60}
                wrapper="span"
                repeat={Infinity}
              />
            </h2>

          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Je transforme vos idées en stratégies digitales performantes. 
            Boostez votre présence en ligne et atteignez vos objectifs business.
          </p>

          <a
            href="#about"
            className="px-8 py-4 bg-orange-400 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-500 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Découvrir mon Profil
          </a>
        </div>

        {/* Partie image */}
        <div className="flex-1 flex justify-center animate-slideIn">
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-800 to-blue-700 rounded-full overflow-hidden shadow-2xl border-4 border-orange-400">
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <img src="img.jpg" alt="Profil" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Petits éléments décoratifs */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/20 rounded-full animate-bounce"></div>
          </div>
        </div>

      </div>
    </section>
  );
}