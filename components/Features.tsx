
import React from 'react';

const Features: React.FC = () => {
  const items = [
    {
      icon: "fa-bolt",
      title: "Agilidade",
      desc: "Processos otimizados para reduzir o tempo médio de contemplação."
    },
    {
      icon: "fa-chess",
      title: "Estratégia",
      desc: "Análise técnica de grupos e lances para aumentar suas chances reais."
    },
    {
      icon: "fa-shield-halved",
      title: "Transparência",
      desc: "Consultoria ética com todas as regras do Banco Central respeitadas."
    },
    {
      icon: "fa-piggy-bank",
      title: "Economia",
      desc: "Menores taxas do mercado comparado ao financiamento tradicional."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="group p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 mb-6 bg-black text-white rounded-2xl flex items-center justify-center text-2xl group-hover:rotate-6 transition-transform">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
