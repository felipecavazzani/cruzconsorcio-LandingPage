
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-800/50 rounded-full blur-3xl"></div>
            <div className="relative z-10 border-[12px] border-white/5 rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Rafael Cruz Ribeiro" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-8 -right-8 bg-white text-black p-8 rounded-2xl shadow-2xl animate-float">
              <div className="text-4xl font-bold">+10</div>
              <div className="text-xs uppercase tracking-tighter font-bold opacity-60">Anos de Mercado</div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Rafael Cruz Ribeiro</h2>
            <p className="text-xl text-gray-400 font-light italic mb-8 border-l-4 border-white/20 pl-6">
              "Meu compromisso é transformar a complexidade do sistema de consórcios em um caminho claro e vitorioso para meus clientes."
            </p>
            <div className="space-y-6 text-gray-300 leading-relaxed font-light">
              <p>
                Especialista em planejamento financeiro através de consórcios, Rafael Cruz Ribeiro fundou a <strong>Cruz Consórcio</strong> com o objetivo de oferecer uma assessoria técnica de alto nível.
              </p>
              <p>
                Com vasta experiência em análise de grupos e oferta estratégica de lances, ele já auxiliou centenas de famílias e empresas a conquistarem patrimônio de forma inteligente, evitando as armadilhas dos juros bancários.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold mb-1">R$ 50M+</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Créditos Gerenciados</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Foco no Cliente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
