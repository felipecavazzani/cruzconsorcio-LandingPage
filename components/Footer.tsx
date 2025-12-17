
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <div className="h-8 w-8 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
                  <rect x="20" y="50" width="15" height="30" rx="2" />
                  <rect x="42" y="65" width="15" height="15" rx="2" />
                  <rect x="65" y="30" width="15" height="50" rx="2" />
                  <path d="M20 60 L45 40 L60 60 L85 20" fill="none" stroke="black" strokeWidth="4" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tighter">
                CRUZ <span className="font-light text-gray-500 uppercase text-sm">Consórcio</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              Especialista em contemplação de cartas de crédito. Rafael Cruz Ribeiro &copy; {new Date().getFullYear()}.
            </p>
          </div>
          
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-xs uppercase tracking-widest text-gray-400">Links</span>
              <a href="#services" className="text-sm hover:text-gray-500">Serviços</a>
              <a href="#about" className="text-sm hover:text-gray-500">Sobre</a>
              <a href="#faq" className="text-sm hover:text-gray-500">FAQ</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold text-xs uppercase tracking-widest text-gray-400">Social</span>
              <a href="#" className="text-sm hover:text-gray-500">Instagram</a>
              <a href="#" className="text-sm hover:text-gray-500">LinkedIn</a>
              <a href="#" className="text-sm hover:text-gray-500">Facebook</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 text-center text-xs text-gray-400">
          <p>Cruz Consórcio - CNPJ 00.000.000/0000-00. Autorizado pelas principais administradoras de consórcio do país.</p>
          <p className="mt-2">O consórcio é uma modalidade de compra programada regulamentada pela Lei nº 11.795/2008.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
