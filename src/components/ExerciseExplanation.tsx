import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, CheckCircle, HelpCircle, Quote, Pencil, List } from 'lucide-react';

interface ExerciseExplanationProps {
  moduleId: number;
}

const ExerciseExplanation: React.FC<ExerciseExplanationProps> = ({ moduleId }) => {
  // Content for different modules
  const explanations = {
    1: {
      title: 'Vírgulas',
      icon: <BookOpen className="h-6 w-6" />,
      color: 'bg-brand-blue',
      description: 'A vírgula é um dos sinais de pontuação mais importantes e versáteis da língua portuguesa.',
      examples: [
        { text: 'Para separar elementos de uma enumeração', example: 'Comprei pão, leite, ovos e manteiga.' },
        { text: 'Para isolar o aposto', example: 'Paulo, o médico da família, fará a cirurgia.' },
        { text: 'Para separar adjuntos adverbiais deslocados', example: 'No final do ano, as vendas aumentaram significativamente.' },
      ],
      exercises: [
        'Identificar elementos que exigem vírgula',
        'Corrigir textos com uso incorreto de vírgulas',
        'Pontuar frases complexas'
      ]
    },
    2: {
      title: 'Ponto e Vírgula',
      icon: <Pencil className="h-6 w-6" />,
      color: 'bg-purple-500',
      description: 'O ponto e vírgula tem um valor intermediário entre a vírgula e o ponto final.',
      examples: [
        { text: 'Para separar orações coordenadas extensas', example: 'Uns foram para a praia; outros preferiram ficar em casa.' },
        { text: 'Para separar itens em enumerações complexas', example: 'Art. 1º. São direitos do consumidor: I - proteção à vida; II - educação para o consumo; III - informação adequada.' },
        { text: 'Para separar orações com conteúdo relacionado', example: 'Estava cansado; mesmo assim, continuou trabalhando.' },
      ],
      exercises: [
        'Distinguir entre vírgula e ponto e vírgula',
        'Aplicar o ponto e vírgula em documentos formais',
        'Corrigir textos com pontuação inadequada'
      ]
    },
    3: {
      title: 'Dois Pontos',
      icon: <Quote className="h-6 w-6" />,
      color: 'bg-indigo-500',
      description: 'Os dois pontos são utilizados para anunciar algo que virá a seguir.',
      examples: [
        { text: 'Para introduzir uma enumeração', example: 'Precisamos comprar: frutas, legumes e cereais.' },
        { text: 'Para introduzir uma citação', example: 'Como dizia Machado de Assis: "A vida não é um jogo de xadrez."' },
        { text: 'Para introduzir uma explicação', example: 'Só havia uma solução: estudar mais.' },
      ],
      exercises: [
        'Identificar situações para uso dos dois pontos',
        'Diferenciar os dois pontos de outras pontuações',
        'Pontuar diálogos e citações corretamente'
      ]
    },
    4: {
      title: 'Aposto',
      icon: <List className="h-6 w-6" />,
      color: 'bg-emerald-500',
      description: 'O aposto é um termo que explica, desenvolve ou especifica outro termo da oração.',
      examples: [
        { text: 'Aposto explicativo', example: 'São Paulo, a maior cidade brasileira, tem muitos problemas de trânsito.' },
        { text: 'Aposto enumerativo', example: 'Três coisas me agradam: música, literatura e pintura.' },
        { text: 'Aposto especificativo', example: 'O poeta Castro Alves escreveu "Navio Negreiro".' },
      ],
      exercises: [
        'Identificar tipos de apostos em textos',
        'Pontuar corretamente os apostos',
        'Criar frases utilizando diferentes tipos de apostos'
      ]
    },
    5: {
      title: 'Avaliação Final',
      icon: <CheckCircle className="h-6 w-6" />,
      color: 'bg-amber-500',
      description: 'Teste seus conhecimentos sobre todas as regras de pontuação estudadas.',
      examples: [
        { text: 'Questões de múltipla escolha', example: 'Selecione a alternativa com pontuação correta.' },
        { text: 'Correção de textos', example: 'Identifique e corrija os erros de pontuação no texto apresentado.' },
        { text: 'Análise de casos', example: 'Explique por que a pontuação está correta ou incorreta em cada caso.' },
      ],
      exercises: [
        'Exercícios completos sobre vírgulas',
        'Questões sobre ponto e vírgula e dois pontos',
        'Pontuação de apostos e adjuntos adverbiais'
      ]
    }
  };

  // Get the content for the selected module or default to module 1
  const content = explanations[moduleId as keyof typeof explanations] || explanations[1];

  return (
    <Card className="shadow-lg border-l-4" style={{ borderLeftColor: content.color.replace('bg-', '') === 'brand-blue' ? '#3b82f6' : '' }}>
      <CardContent className="p-6">
        <div className="md:flex items-start">
          <div className={`${content.color} text-white rounded-full p-3 mr-4 shadow-md flex-shrink-0`}>
            {content.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{content.title}</h3>
            <p className="text-gray-600 mb-4">{content.description}</p>
            
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Exemplos:</h4>
              <div className="space-y-2">
                {content.examples.map((example, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-gray-700">{example.text}:</p>
                    <p className="text-sm italic text-gray-600 mt-1">"{example.example}"</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">O que você vai praticar:</h4>
              <ul className="space-y-1">
                {content.exercises.map((exercise, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-brand-green mr-2 flex-shrink-0 mt-0.5">
                      <HelpCircle className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-gray-600">{exercise}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExerciseExplanation;
