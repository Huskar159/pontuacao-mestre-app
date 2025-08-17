import React, { useState } from 'react';
import { CheckCircle, HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import StudyLayout from '@/components/StudyLayout';

interface Exercise {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const exerciseData: Exercise[] = [
  {
    id: 1,
    question: "Assinale a alternativa em que a vírgula foi utilizada corretamente para separar o adjunto adverbial deslocado:",
    options: [
      "No final do ano, as vendas aumentaram significativamente.",
      "As vendas, aumentaram significativamente no final do ano.",
      "As vendas aumentaram, significativamente no final do ano.",
      "As vendas aumentaram significativamente, no final do ano."
    ],
    correctAnswer: 0,
    explanation: "O adjunto adverbial 'No final do ano' está deslocado no início da frase, exigindo o uso da vírgula para separar este termo do resto da oração."
  },
  {
    id: 2,
    question: "Em qual alternativa a vírgula é utilizada corretamente para separar orações coordenadas?",
    options: [
      "Ela estudou muito, mas não foi aprovada.",
      "Ela estudou, muito mas não foi aprovada.",
      "Ela estudou muito mas, não foi aprovada.",
      "Ela, estudou muito mas não foi aprovada."
    ],
    correctAnswer: 0,
    explanation: "A vírgula é utilizada corretamente antes da conjunção adversativa 'mas' para separar orações coordenadas."
  },
  {
    id: 3,
    question: "Indique a alternativa em que os dois-pontos foram utilizados corretamente:",
    options: [
      "Precisamos comprar: frutas, legumes e cereais.",
      "O diretor falou para: todos se sentarem.",
      "Os alunos: fizeram a prova em duas horas.",
      "O resultado foi: satisfatório por completo."
    ],
    correctAnswer: 0,
    explanation: "Os dois-pontos estão corretos na primeira opção, usados para anunciar uma enumeração (frutas, legumes e cereais)."
  },
  {
    id: 4,
    question: "Qual alternativa apresenta uso correto do ponto e vírgula?",
    options: [
      "Uns foram para a praia; outros preferiram ficar em casa.",
      "Uns foram para a praia, outros; preferiram ficar em casa.",
      "Uns foram; para a praia outros preferiram ficar em casa.",
      "Uns foram para a praia outros; preferiram ficar em casa."
    ],
    correctAnswer: 0,
    explanation: "O ponto e vírgula está corretamente usado para separar orações coordenadas que já contêm vírgulas ou que possuem estrutura interna mais complexa."
  },
  {
    id: 5,
    question: "Assinale a alternativa em que as vírgulas são usadas corretamente para isolar o aposto:",
    options: [
      "Paulo, o médico da família, fará a cirurgia.",
      "Paulo o médico, da família fará a cirurgia.",
      "Paulo o médico da família, fará, a cirurgia.",
      "Paulo o, médico da família fará a cirurgia."
    ],
    correctAnswer: 0,
    explanation: "As vírgulas estão corretamente empregadas para isolar o aposto 'o médico da família', que explica quem é Paulo."
  }
];

const Exercises: React.FC = () => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  
  const exercise = exerciseData[currentExercise];
  const isLastExercise = currentExercise === exerciseData.length - 1;
  const isFirstExercise = currentExercise === 0;
  
  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
    
    if (!completedExercises.includes(exercise.id)) {
      setCompletedExercises([...completedExercises, exercise.id]);
    }
  };
  
  const handleNext = () => {
    if (!isLastExercise) {
      setCurrentExercise(currentExercise + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };
  
  const handlePrevious = () => {
    if (!isFirstExercise) {
      setCurrentExercise(currentExercise - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };
  
  const resetExercise = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
  };
  
  const progress = Math.round((completedExercises.length / exerciseData.length) * 100);
  
  return (
    <StudyLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Exercícios de Pontuação</h1>
          <p className="text-gray-600">Pratique com questões selecionadas para fixar seu aprendizado</p>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between mb-1 text-sm">
              <span>Progresso: {completedExercises.length} de {exerciseData.length} exercícios</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-brand-green h-2.5 rounded-full" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Exercise Card */}
        <Card className="p-6 shadow-lg mb-6">
          <div className="mb-6">
            <div className="flex justify-between mb-4">
              <span className="text-sm font-medium text-gray-500">Exercício {currentExercise + 1} de {exerciseData.length}</span>
              <button 
                onClick={resetExercise} 
                className="text-sm text-brand-blue hover:underline"
                disabled={selectedAnswer === null}
              >
                Tentar novamente
              </button>
            </div>
            
            <h2 className="text-xl font-semibold mb-4">{exercise.question}</h2>
            
            <div className="space-y-3">
              {exercise.options.map((option, index) => (
                <div 
                  key={index} 
                  className={`p-3 border rounded-lg cursor-pointer flex items-center ${
                    selectedAnswer === null
                      ? "hover:bg-gray-50"
                      : selectedAnswer === index
                        ? index === exercise.correctAnswer
                          ? "bg-green-50 border-green-500"
                          : "bg-red-50 border-red-500"
                        : index === exercise.correctAnswer && showExplanation
                          ? "bg-green-50 border-green-500"
                          : ""
                  }`}
                  onClick={() => selectedAnswer === null && handleAnswerSelect(index)}
                >
                  <div className="mr-3">
                    <div 
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        selectedAnswer === index 
                          ? index === exercise.correctAnswer
                            ? "bg-green-500 text-white" 
                            : "bg-red-500 text-white"
                          : showExplanation && index === exercise.correctAnswer
                            ? "bg-green-500 text-white"
                            : "border border-gray-300"
                      }`}
                    >
                      {selectedAnswer === index ? (
                        index === exercise.correctAnswer ? <CheckCircle className="h-4 w-4" /> : <HelpCircle className="h-4 w-4" />
                      ) : showExplanation && index === exercise.correctAnswer ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <span className="text-sm">{String.fromCharCode(65 + index)}</span>
                      )}
                    </div>
                  </div>
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Explanation */}
          {showExplanation && (
            <div className={`p-4 rounded-lg mb-4 ${selectedAnswer === exercise.correctAnswer ? "bg-green-50" : "bg-yellow-50"}`}>
              <h3 className="font-semibold mb-2">
                {selectedAnswer === exercise.correctAnswer ? "Correto!" : "Explicação:"}
              </h3>
              <p>{exercise.explanation}</p>
            </div>
          )}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4">
            <Button
              onClick={handlePrevious}
              disabled={isFirstExercise}
              variant="outline"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
            </Button>
            <Button
              onClick={handleNext}
              disabled={isLastExercise}
              variant={selectedAnswer !== null ? "default" : "outline"}
            >
              Próximo <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </StudyLayout>
  );
};

export default Exercises;
