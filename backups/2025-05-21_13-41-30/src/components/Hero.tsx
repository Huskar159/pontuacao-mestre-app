
import React from 'react';
import CTAButton from './CTAButton';

const Hero: React.FC = () => {
  const scrollToCheckout = () => {
    const checkoutElement = document.getElementById('checkout');
    if (checkoutElement) {
      checkoutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full gradient-bg py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block bg-brand-lightYellow px-4 py-1 rounded-full text-brand-yellow font-semibold mb-6 animate-fade-in">
          Método Focado em Resultados Rápidos
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
          Pare de Perder Pontos em <span className="highlight-text">Pontuação!</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in">
          O Método Prático e Acessível com <span className="font-bold">+150 Exercícios</span> para 
          Você Gabaritar Pontuação no seu Próximo Concurso
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
          <CTAButton 
            text="Quero Dominar Pontuação Agora!" 
            onClick={scrollToCheckout}
            className="animate-fade-in"
          />
          <div className="flex items-center bg-white px-4 py-3 rounded-lg shadow-md animate-fade-in">
            <div className="text-right">
              <span className="block text-lg text-gray-800">Por apenas</span>
              <span className="block text-3xl font-bold text-brand-blue">R$ 27</span>
              <span className="text-sm text-gray-500">Pagamento único</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md inline-block animate-fade-in">
          <div className="text-gray-700 text-sm">
            Acesso imediato ao conteúdo • Sem mensalidades • Estude no seu ritmo
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
