
import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-br from-brand-lightBlue to-brand-lightGreen">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="w-24 h-24 bg-brand-lightYellow rounded-full flex items-center justify-center mx-auto mb-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-12 text-brand-yellow" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">Garantia de Acesso Vitalício</h2>
          <p className="text-xl text-gray-700 mb-6">
            Ao adquirir o Pontuação Mestre, você terá acesso garantido a todo o material 
            por tempo ilimitado, incluindo todas as atualizações futuras.
          </p>
          <div className="flex justify-center">
            <div className="flex items-center text-brand-blue">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <span className="font-semibold">Acesso imediato e permanente ao conteúdo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
