
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-20">
      {/* Background Overlay Image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1920" 
          alt="Modern Finance Office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 border border-white/20 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium tracking-widest uppercase animate-pulse">
          Consultoria de Elite em Consórcios
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-none">
          Transforme planos em <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
            Realidade Contemplada
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Estratégias avançadas para acelerar sua contemplação. 
          Deixe o acaso de lado e utilize a expertise de <strong>Rafael Cruz Ribeiro</strong> para conquistar seu patrimônio.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Quero minha carta contemplada</span>
            <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all"
          >
            Ver Serviços
          </a>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2">
            <i className="fas fa-check-circle text-xl"></i>
            <span className="text-sm font-medium">100% Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-chart-line text-xl"></i>
            <span className="text-sm font-medium">Estratégia de Lance</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-award text-xl"></i>
            <span className="text-sm font-medium">Expertise Comprovada</span>
          </div>
        </div>
      </div>

      {/* Decorative arrow pointing down */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white/40 text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;
