
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Consórcio Imobiliário",
      description: "A forma mais inteligente de comprar, construir ou reformar seu imóvel sem pagar juros abusivos.",
      image: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Consórcio de Veículos",
      description: "Planos para carros, motos e pesados. Upgrade de frota ou seu primeiro veículo com planejamento.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cartas Contempladas",
      description: "Acesso imediato ao crédito através de cotas já contempladas com total segurança jurídica.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Soluções em Crédito</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Consultoria personalizada para escolher o plano que melhor se adapta à sua realidade financeira.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col overflow-hidden group">
              <div className="relative h-64 overflow-hidden rounded-2xl mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              <a href="#contact" className="inline-flex items-center font-bold text-sm uppercase tracking-widest hover:translate-x-2 transition-transform">
                Saiba mais <i className="fas fa-arrow-right ml-2 text-xs"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
