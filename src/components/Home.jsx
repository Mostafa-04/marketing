export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 to-white px-4">
      {/* Container principal avec image et texte côte à côte */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Partie texte */}
        <div className="flex-1 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Ajabboune <span className="text-blue-600">Abdelilah</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-blue-500 font-semibold mb-6">
            Expert en Marketing Digital
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Je transforme vos idées en stratégies digitales performantes. 
            Boostez votre présence en ligne et atteignez vos objectifs business.
          </p>
            <a 
            href="#about"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
            Découvrir mon Profil
            </a>
       
        </div>
        
        {/* Partie image */}
        <div className="flex-1 flex justify-center animate-slideIn">
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full overflow-hidden shadow-2xl">
              {/* Remplacez cette div par votre image */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                <img src="img.jpg" alt="" />
              </div>
            </div>
            {/* Élément décoratif */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-300 rounded-full opacity-30 animate-bounce"></div>
          </div>
        </div>
      </div>
      
      
    </section>
  );
}