
import React from 'react';
import { Check } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const problems = [
    "Perde pontos em questões de português por causa de regras de pontuação",
    "Confunde quando usar vírgula, ponto e vírgula ou dois pontos",
    "Comete erros básicos que custam a aprovação no concurso",
    "Estuda regras teóricas mas não consegue aplicá-las na prática",
    "Investe em materiais caros e complexos que não trazem resultados"
  ];

  const solutions = [
    "150+ questões práticas com foco total em pontuação",
    "Explicações diretas e simples sobre cada regra aplicada",
    "Método que prioriza a prática e memorização das regras",
    "Gabaritos comentados para entender cada erro e acerto",
    "Investimento único de apenas R$27 com acesso imediato"
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-red-600 mb-6">
              Você se identifica com isso?
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-3 mt-0.5">
                    ✗
                  </span>
                  <span className="text-gray-700">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-brand-lightGreen p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-brand-green mb-6">
              Com o Pontuação Mestre, você vai:
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-brand-green mr-3" />
                  </div>
                  <span className="text-gray-700">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Por que pontuação é tão importante?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Erros de pontuação podem custar <span className="font-bold">até 25% da sua nota</span> em português. 
            Concursos de elite como da <span className="font-bold">Magistratura, Diplomacia e Tribunais</span> são 
            extremamente rigorosos com esse tópico. Você não pode mais perder pontos por algo que tem solução tão acessível!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution;
