
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para o próximo passo?</h2>
            <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
              Solicite uma simulação personalizada e descubra como a <strong>Cruz Consórcio</strong> pode acelerar sua conquista.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Telefone</div>
                  <div className="text-lg font-medium">(00) 0000-0000</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">E-mail</div>
                  <div className="text-lg font-medium">contato@cruzconsorcio.com.br</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-gray-50 p-12 lg:p-20">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-black transition-colors"
                  placeholder="Seu nome aqui"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-black transition-colors"
                    placeholder="email@exemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">WhatsApp</label>
                  <input 
                    type="tel" 
                    className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-black transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Interesse</label>
                <select className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-black transition-colors appearance-none">
                  <option>Carta de Imóvel</option>
                  <option>Carta de Veículo</option>
                  <option>Carta Contemplada</option>
                  <option>Outros</option>
                </select>
              </div>
              <button className="w-full py-5 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition-all transform hover:scale-[1.02] shadow-xl">
                Enviar Mensagem
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">
                Prometemos não enviar spam. Seus dados estão protegidos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
