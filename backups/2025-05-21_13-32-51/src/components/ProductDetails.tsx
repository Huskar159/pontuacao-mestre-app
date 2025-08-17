
import React from 'react';
import { Book, FileText, Check } from 'lucide-react';
import CTAButton from './CTAButton';

const ProductDetails: React.FC = () => {
  const scrollToCheckout = () => {
    const checkoutElement = document.getElementById('checkout');
    if (checkoutElement) {
      checkoutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    "150+ questões práticas com gabarito comentado",
    "Abordagem direta das regras aplicadas a casos reais",
    "Questões organizadas por nível de dificuldade",
    "Simulado final para medir seu progresso",
    "Resumo teórico prático e objetivo",
    "Acesso imediato após o pagamento"
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Apresentando o <span className="highlight-text">Pontuação Mestre</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Sistema completo e focado para você dominar todas as regras de pontuação 
            através da prática intensiva.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <div className="flex items-center mb-6">
                <Book className="h-8 w-8 text-brand-blue mr-3" />
                <h3 className="text-2xl font-bold">O que você vai receber:</h3>
              </div>
              
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-brand-green mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="text-xl font-semibold mb-4">Ideal para você que:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="number-bubble">1</div>
                    <span>Precisa melhorar rapidamente em pontuação</span>
                  </li>
                  <li className="flex items-center">
                    <div className="number-bubble">2</div>
                    <span>Busca um método prático e direto ao ponto</span>
                  </li>
                  <li className="flex items-center">
                    <div className="number-bubble">3</div>
                    <span>Quer um material acessível e eficaz</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/3 bg-gradient-to-br from-brand-blue to-brand-green p-8 text-white">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Pontuação Mestre</h3>
                <div className="mb-4">
                  <span className="text-lg opacity-75 line-through price-tag">R$ 97</span>
                  <div className="text-4xl font-bold">R$ 27</div>
                  <span className="text-sm opacity-90">Pagamento único</span>
                </div>

                <div className="bg-white/20 rounded-lg p-4 mb-6">
                  <FileText className="h-8 w-8 text-white mx-auto mb-2" />
                  <p className="text-sm">
                    Acesso imediato a todo o material após a compra. 
                    Estude no seu ritmo, quando e onde quiser.
                  </p>
                </div>

                <CTAButton 
                  text="Garantir Meu Acesso" 
                  onClick={scrollToCheckout}
                  className="w-full bg-white text-brand-blue hover:bg-brand-lightBlue hover:text-brand-blue"
                  secondary={true}
                />
                
                <p className="text-sm mt-4 opacity-90">
                  Pagamento seguro via cartão, Pix ou boleto
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
