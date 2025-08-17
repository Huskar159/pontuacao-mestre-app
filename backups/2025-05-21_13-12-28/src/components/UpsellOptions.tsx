
import React, { useState } from 'react';
import { Plus, Minus, BookOpen } from 'lucide-react';

interface UpsellOption {
  id: number;
  title: string;
  description: string;
  price: number;
  selected: boolean;
}

const UpsellOptions: React.FC = () => {
  const [upsells, setUpsells] = useState<UpsellOption[]>([
    {
      id: 1,
      title: "Palavras Repetitivas na Redação",
      description: "80+ exercícios práticos para eliminar repetições e enriquecer seu vocabulário.",
      price: 10,
      selected: false,
    },
    {
      id: 2,
      title: "Elimine Pleonasmos (Vícios de Linguagem)",
      description: "60+ exercícios para identificar e corrigir vícios de linguagem em textos.",
      price: 7,
      selected: false,
    },
    {
      id: 3,
      title: "Concordância Verbal e Nominal Essencial",
      description: "120+ exercícios práticos para dominar as regras de concordância.",
      price: 10,
      selected: false,
    },
    {
      id: 4,
      title: "Uso dos Porquês Simplificado",
      description: "50+ exercícios para nunca mais errar o uso dos porquês.",
      price: 7,
      selected: false,
    }
  ]);

  const toggleUpsell = (id: number) => {
    setUpsells(upsells.map(upsell => 
      upsell.id === id ? { ...upsell, selected: !upsell.selected } : upsell
    ));
  };

  const totalAdditional = upsells
    .filter(upsell => upsell.selected)
    .reduce((sum, upsell) => sum + upsell.price, 0);

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Turbine Sua Preparação
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Adicione módulos extras ao seu pedido e domine outros tópicos 
            cruciais de português por um preço especial
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {upsells.map((upsell) => (
            <div 
              key={upsell.id}
              className={`border-2 rounded-xl p-6 transition-all duration-300 card-hover ${
                upsell.selected 
                  ? 'border-brand-green bg-brand-lightGreen/30' 
                  : 'border-gray-200'
              }`}
              onClick={() => toggleUpsell(upsell.id)}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div 
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        upsell.selected 
                          ? 'bg-brand-green text-white' 
                          : 'border border-gray-300'
                      }`}
                    >
                      {upsell.selected ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{upsell.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{upsell.description}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>Módulo completo com exercícios práticos</span>
                    </div>
                  </div>
                </div>
                <div className="font-bold text-xl text-brand-blue">
                  +R$ {upsell.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-6 flex justify-between items-center">
          <div>
            <p className="text-gray-600">Valor adicional selecionado:</p>
            <p className="text-2xl font-bold text-brand-blue">
              {totalAdditional > 0 ? `+R$ ${totalAdditional}` : "R$ 0"}
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-600">Valor total:</p>
            <p className="text-2xl font-bold text-brand-green">
              R$ {27 + totalAdditional}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpsellOptions;
