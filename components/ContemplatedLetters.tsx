
import React from 'react';

const ContemplatedLetters: React.FC = () => {
  // Link de publicação do Google Doc
  const googleDocsUrl = "https://docs.google.com/document/d/e/2PACX-1vSNt3nLR1FboEbq4Tu2f-MQrN3GcEutCCkOkFt1Xu0qbvi9WuYAvlVUfbexao2u4Mbxa2K-LzpERvyy/pub?embedded=true";

  return (
    <section id="contemplated" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Cartas Contempladas Disponíveis</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg px-4">
            Confira abaixo nossa tabela atualizada em tempo real com as melhores oportunidades de crédito imediato no mercado.
          </p>
        </div>

        <div className="relative w-full bg-gray-50 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col">
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-800 to-black z-10"></div>
          
          {/* Responsive Iframe Container */}
          {/* height varies based on screen size: 500px on mobile, 650px on tablets, 800px on desktop */}
          <div className="w-full h-[500px] sm:h-[650px] lg:h-[800px] relative bg-white">
            <iframe 
              src={googleDocsUrl} 
              className="absolute inset-0 w-full h-full border-none"
              title="Tabela de Cartas Contempladas"
              loading="lazy"
              allowFullScreen
            >
              Carregando disponibilidade...
            </iframe>
          </div>
          
          {/* Footer status bar */}
          <div className="p-4 bg-gray-100 text-center text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-bold border-t border-gray-200">
            <span className="flex items-center justify-center gap-2">
              <i className="fas fa-sync-alt animate-spin-slow text-black"></i> 
              Atualizado Frequentemente
            </span>
          </div>
        </div>
        
        <div className="mt-12 text-center px-4">
          <p className="text-gray-500 mb-6 italic text-sm">Documento otimizado para visualização em todos os dispositivos.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 active:scale-95 shadow-xl group"
          >
            <span>Quero uma cota</span>
            <i className="fab fa-whatsapp text-xl group-hover:scale-110 transition-transform"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContemplatedLetters;
