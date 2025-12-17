
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Carlos Eduardo",
      role: "Empresário",
      text: "Fui contemplado em 4 meses seguindo a estratégia de lance do Rafael. Economizei milhares de reais em juros que pagaria no financiamento.",
      avatar: "https://i.pravatar.cc/150?u=carlos"
    },
    {
      name: "Mariana Silva",
      role: "Médica",
      text: "A assessoria da Cruz Consórcio é impecável. Transparência total e suporte em todas as etapas, desde a escolha da cota até o faturamento do bem.",
      avatar: "https://i.pravatar.cc/150?u=mariana"
    },
    {
      name: "Roberto Almeida",
      role: "Investidor",
      text: "Utilizo o consórcio como alavancagem patrimonial. A expertise do Rafael Cruz no mercado de cartas contempladas é um diferencial competitivo.",
      avatar: "https://i.pravatar.cc/150?u=roberto"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">O que dizem nossos clientes</h2>
          <p className="text-gray-500">Histórias reais de quem escolheu a inteligência financeira.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="p-10 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col">
              <div className="flex text-black mb-6">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-sm"></i>
                ))}
              </div>
              <p className="text-gray-700 italic mb-8 flex-grow leading-relaxed">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                <img src={rev.avatar} alt={rev.name} className="w-12 h-12 rounded-full grayscale" />
                <div>
                  <h4 className="font-bold text-gray-900">{rev.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
