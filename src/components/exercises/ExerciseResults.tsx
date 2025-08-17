import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Star, Trophy, BookOpen, CheckCircle, Zap } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import confetti from 'canvas-confetti';

interface ExerciseResultsProps {
  results: {
    totalExercises: number;
    correctAnswers: number;
    incorrectAnswers: number;
    accuracyPercentage: number;
    xpEarned: number;
    newLevel?: number;
    moduleCompleted: boolean;
  };
  onContinue: () => void;
  onLoginPrompt: () => void;
  isLoggedIn: boolean;
}

const ExerciseResults: React.FC<ExerciseResultsProps> = ({
  results,
  onContinue,
  onLoginPrompt,
  isLoggedIn
}) => {
  // Verificar se results existe para evitar erros
  if (!results) {
    return (
      <div className="max-w-md mx-auto">
        <Card className="border-t-4 border-t-brand-blue overflow-hidden">
          <CardHeader className="bg-brand-blue/5 pb-1">
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-bold">Resultados</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <p>Não foi possível carregar os resultados. Por favor, tente novamente.</p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={onContinue}>Voltar</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  // Extrair valores para evitar acessos condicionais repetidos
  const { moduleCompleted, totalExercises, correctAnswers, incorrectAnswers, accuracyPercentage } = results;
  
  // Usar um ref para controlar se o efeito já foi executado
  const hasRunConfetti = React.useRef(false);
  
  React.useEffect(() => {
    // Só executar o efeito se o módulo foi concluído e ainda não executamos o confetti
    if (moduleCompleted && !hasRunConfetti.current) {
      hasRunConfetti.current = true;
      
      // Disparar evento para atualizar a barra de progresso na página Success
      const progressEvent = new Event('moduleProgressUpdated');
      window.dispatchEvent(progressEvent);
      
      // Efeito de confetti para celebrar
      const duration = 3 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#4285F4', '#0F9D58', '#F4B400', '#DB4437']
        });
        
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#4285F4', '#0F9D58', '#F4B400', '#DB4437']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();
      
      // Limpar o ref quando o componente for desmontado
      return () => {
        hasRunConfetti.current = false;
      };
    }
  }, [moduleCompleted]); // Dependência apenas do valor que nos interessa

  return (
    <div className="max-w-md mx-auto">
      <Card className="border-t-4 border-t-brand-blue overflow-hidden">
        <CardHeader className="bg-brand-blue/5 pb-1">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold">
              {window.location.pathname.includes('/prova-virgula')
                ? (moduleCompleted 
                  ? 'Aprovado!'
                  : 'Não Aprovado')
                : (moduleCompleted 
                  ? 'Exercício Concluído!'
                  : 'Resultados')}
            </CardTitle>
          </div>
        </CardHeader>
        
        <CardContent className="pt-6">
          <div className="space-y-6">
            {/* Removido sistema de XP */}
            
            {/* Module completion status */}
            <div className={`border rounded-lg p-4 ${
              moduleCompleted 
                ? 'border-green-200 bg-green-50' 
                : 'border-orange-200 bg-orange-50'
            }`}>
              <div className="flex items-start">
                <div className={`rounded-full p-2 mr-3 ${
                  moduleCompleted 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-orange-100 text-orange-600'
                }`}>
                  {moduleCompleted 
                    ? <CheckCircle className="h-5 w-5" /> 
                    : <BookOpen className="h-5 w-5" />}
                </div>
                <div>
                  <h3 className={`font-medium mb-1 ${
                    moduleCompleted 
                      ? 'text-green-800' 
                      : 'text-orange-800'
                  }`}>
                    {window.location.pathname.includes('/prova-virgula')
                      ? (moduleCompleted 
                        ? 'Você foi aprovado na Prova Final de Vírgula!' 
                        : 'Você não atingiu a pontuação mínima')
                      : (moduleCompleted 
                        ? 'Exercício concluído com sucesso!' 
                        : 'Exercício não concluído')}
                  </h3>
                  <p className={`text-sm ${
                    moduleCompleted 
                      ? 'text-green-700' 
                      : 'text-orange-700'
                  }`}>
                    {window.location.pathname.includes('/prova-virgula')
                      ? (moduleCompleted 
                        ? 'Parabéns! Você acertou pelo menos 70% das questões.' 
                        : 'Você precisa acertar pelo menos 70% das questões para ser aprovado.')
                      : (moduleCompleted 
                        ? 'Seu progresso foi salvo. Continue para avançar na jornada.' 
                        : 'Você precisa acertar pelo menos 70% das questões para concluir o exercício com sucesso.')}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-gray-800">{totalExercises || 0}</div>
                <div className="text-xs text-gray-600">Questões</div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{correctAnswers || 0}</div>
                <div className="text-xs text-gray-600">Corretas</div>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-red-500">{incorrectAnswers || 0}</div>
                <div className="text-xs text-gray-600">Incorretas</div>
              </div>
            </div>
            
            {/* Accuracy */}
            <div>
              <div className="mb-1">
                <span className="text-sm font-medium">Precisão</span>
              </div>
            </div>
            
            {/* Login prompt for non-logged in users */}
            {!isLoggedIn && (
              <div className="border border-orange-200 bg-orange-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2 text-orange-800">Quer salvar seu progresso?</h3>
                <p className="text-sm text-orange-700 mb-3">
                  Crie uma conta para acompanhar seu desempenho e desbloquear mais conteúdo!
                </p>
                <Button onClick={onLoginPrompt} size="sm" className="w-full">
                  Criar conta
                </Button>
              </div>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="bg-gray-50 border-t">
          <Button onClick={onContinue} className="w-full">
            Continuar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ExerciseResults;
