
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    {
      q: "O que é uma carta de crédito contemplada?",
      a: "É uma cota de consórcio que já passou pelo sorteio ou lance e já tem o valor disponível para compra do bem. É a forma mais rápida de acessar o crédito sem os juros do financiamento."
    },
    {
      q: "Consórcio realmente não tem juros?",
      a: "Exatamente. O consórcio trabalha com taxa de administração, que é diluída ao longo das parcelas. No final das contas, o custo total é muito inferior ao de um financiamento bancário tradicional."
    },
    {
      q: "Qual o valor mínimo para começar?",
      a: "Temos planos que se adaptam a diversos perfis, desde créditos para veículos populares até grandes investimentos imobiliários. A consultoria serve justamente para encontrar a parcela que cabe no seu bolso."
    },
    {
      q: "Como o Rafael Cruz pode acelerar minha contemplação?",
      a: "Através de análise técnica do histórico do grupo. Identificamos grupos com menor concorrência e sugerimos lances estratégicos (embutidos ou recursos próprios) para maximizar suas chances estatísticas."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {questions.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg">{item.q}</span>
                <i className={`fas fa-chevron-${openIndex === idx ? 'up' : 'down'} text-gray-400`}></i>
              </button>
              {openIndex === idx && (
                <div className="px-8 pb-6 text-gray-600 leading-relaxed animate-fade-in">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
