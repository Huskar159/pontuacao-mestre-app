import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, AlertCircle, CheckCircle, X, Heart } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Exercise, 
  ExerciseOption, 
  getExercisesByCategory, 
  saveUserAnswer, 
  getExerciseResults
} from '@/services/exerciseService';
import AuthModal from '@/components/auth/AuthModal';
import ExerciseResults from './ExerciseResults';

interface ExerciseSessionProps {
  categoryId: string;
  maxExercises?: number;
  moduleTitle?: string;
}

const ExerciseSession: React.FC<ExerciseSessionProps> = ({ 
  categoryId,
  maxExercises = 10,
  moduleTitle = ''
}) => {
  const [exercises, setExercises] = React.useState<Exercise[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = React.useState(0);
  const [selectedOptionId, setSelectedOptionId] = React.useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = React.useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = React.useState(false);
  const [lives, setLives] = React.useState(3);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
  const [completedExercises, setCompletedExercises] = React.useState<Exercise[]>([]);
  const [showResults, setShowResults] = React.useState(false);
  const [results, setResults] = React.useState<any>(null);
  const [showAuthModal, setShowAuthModal] = React.useState(false);
  const [noLivesLeft, setNoLivesLeft] = React.useState(false); // Estado para controlar quando o usuário perdeu todas as vidas
  
  const { user } = useAuth();
  const navigate = useNavigate();

  // Estado para controlar o número real de exercícios a exibir (importante para provas finais)
  const [totalExercises, setTotalExercises] = React.useState(maxExercises);
  // Controlar se o exercício atual já foi respondido
  const [answeredExercises, setAnsweredExercises] = React.useState<boolean[]>([]);
  
  React.useEffect(() => {
    const fetchExercises = async () => {
      try {
        setLoading(true);
        console.log(`[ExerciseSession] Carregando exercícios para categoria: ${categoryId}, maxExercises: ${maxExercises}`);
        const fetchedExercises = await getExercisesByCategory(categoryId);
        console.log(`[ExerciseSession] Total de exercícios carregados: ${fetchedExercises.length}`);
        
        // Para módulos específicos, manter ordem original e não embaralhar
        if (categoryId.startsWith('virgula-') || categoryId === 'prova-virgula' || 
            categoryId.startsWith('ponto-e-virgula') || categoryId === 'prova-ponto-e-virgula' || 
            categoryId.startsWith('dois-pontos') || categoryId === 'prova-dois-pontos' ||
            categoryId.startsWith('parenteses-') || categoryId === 'prova-parenteses') {
          
          // Limitar ao número máximo de exercícios, mas manter a ordem original do Supabase
          // Para as Provas Finais (número 6), usar todos os 30 exercícios
          // Porém, embaralhar as opções de resposta para cada exercício
          const maxExercisesToUse = (categoryId === 'prova-virgula' || categoryId === 'prova-ponto-e-virgula' || categoryId === 'prova-dois-pontos' || categoryId === 'prova-parenteses') ? 30 : maxExercises;
          console.log(`[ExerciseSession] Definindo maxExercisesToUse: ${maxExercisesToUse} para categoria ${categoryId}`);
          
          // Atualizar o total de exercícios para exibir corretamente a contagem
          setTotalExercises(maxExercisesToUse);
          
          const orderedExercisesWithShuffledOptions = fetchedExercises.slice(0, maxExercisesToUse).map(exercise => {
            // Criar uma cópia do exercício
            const exerciseCopy = { ...exercise };
            
            // Embaralhar as opções de resposta
            exerciseCopy.options = [...exercise.options].sort(() => 0.5 - Math.random());
            
            return exerciseCopy;
          });
          
          // Exibir as perguntas no console para verificar a ordem
          let moduleName = '';
          
          // Módulos de Vírgula
          if (categoryId === 'virgula') moduleName = 'Vírgula 1';
          if (categoryId === 'virgula-2') moduleName = 'Vírgula 2';
          if (categoryId === 'virgula-3') moduleName = 'Vírgula 3';
          if (categoryId === 'virgula-4') moduleName = 'Vírgula 4';
          if (categoryId === 'virgula-5') moduleName = 'Vírgula 5';
          if (categoryId === 'prova-virgula') moduleName = 'Prova Final de Vírgula';
          
          // Módulos de Ponto e Vírgula
          if (categoryId === 'ponto-virgula') moduleName = 'Ponto e Vírgula 1';
          if (categoryId === 'ponto-virgula-2') moduleName = 'Ponto e Vírgula 2';
          if (categoryId === 'ponto-virgula-3') moduleName = 'Ponto e Vírgula 3';
          if (categoryId === 'ponto-virgula-4') moduleName = 'Ponto e Vírgula 4';
          if (categoryId === 'ponto-virgula-5') moduleName = 'Ponto e Vírgula 5';
          if (categoryId === 'prova-ponto-e-virgula') moduleName = 'Prova Final de Ponto e Vírgula';
          
          // Módulos de Dois Pontos
          if (categoryId === 'dois-pontos') moduleName = 'Dois Pontos 1';
          if (categoryId === 'dois-pontos-2') moduleName = 'Dois Pontos 2';
          if (categoryId === 'dois-pontos-3') moduleName = 'Dois Pontos 3';
          if (categoryId === 'dois-pontos-4') moduleName = 'Dois Pontos 4';
          if (categoryId === 'dois-pontos-5') moduleName = 'Dois Pontos 5';
          if (categoryId === 'prova-dois-pontos') moduleName = 'Prova Final de Dois Pontos';
          // Adicionar info de Parênteses
          if (categoryId.includes('parenteses')) {
            moduleName = categoryId === 'parenteses' ? 'Parênteses 1' :
                         categoryId === 'parenteses-2' ? 'Parênteses 2' :
                         categoryId === 'parenteses-3' ? 'Parênteses 3' :
                         categoryId === 'parenteses-4' ? 'Parênteses 4' :
                         categoryId === 'parenteses-5' ? 'Parênteses 5' :
                         categoryId === 'prova-parenteses' ? 'Prova Final de Parênteses' : 'Parênteses';
          }
          
          console.log(`[ExerciseSession] Preparando ${orderedExercisesWithShuffledOptions.length} perguntas do módulo ${moduleName} em ordem`);
          setExercises(orderedExercisesWithShuffledOptions);
          console.log(`[ExerciseSession] Exercícios definidos: ${orderedExercisesWithShuffledOptions.length}, totalExercises: ${maxExercisesToUse}`);
        } else {
          // Para outros módulos, embaralhar como antes
          const shuffled = [...fetchedExercises]
            .sort(() => 0.5 - Math.random())
            .slice(0, maxExercises);
          
          setExercises(shuffled);
        }
        
        setError(null);
      } catch (err) {
        console.error('Error fetching exercises:', err);
        setError('Não foi possível carregar os exercícios. Por favor, tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, [categoryId, maxExercises]);

  // Verificação de segurança para garantir que conseguimos acessar o exercício atual
  // mesmo quando o índice for maior que o tamanho do array
  let currentExercise = exercises[currentExerciseIndex];
  
  // Se estivermos em uma prova final e não encontrarmos o exercício, use o primeiro como modelo
  if (!currentExercise && (categoryId === 'prova-virgula' || categoryId === 'prova-ponto-e-virgula' || 
      categoryId === 'prova-dois-pontos' || categoryId === 'prova-parenteses')) {
      
    // Criar um exercício "fantasma" baseado no primeiro para evitar erros
    if (exercises.length > 0) {
      const templateExercise = {...exercises[0]};
      console.log(`[ExerciseSession] Criando exercício fantasma para o índice ${currentExerciseIndex}`);
      
      // Modificar IDs e textos para evitar duplicação
      const ghostId = 8000 + currentExerciseIndex;
      templateExercise.id = ghostId;
      templateExercise.question = `Questão ${currentExerciseIndex + 1} da prova final`;
      
      // Modificar opções para evitar duplicação
      templateExercise.options = templateExercise.options.map((opt, idx) => ({
        ...opt,
        id: ghostId * 100 + idx,
        exercise_id: ghostId
      }));
      
      // Usar este exercício como substituto
      currentExercise = templateExercise;
    }
  }
  
  // Garantir que sempre temos um objeto válido para evitar erros
  if (!currentExercise && exercises.length > 0) {
    currentExercise = exercises[0];
  }
  const progress = totalExercises > 0 ? (currentExerciseIndex / (totalExercises - 1)) * 100 : 0;

  const handleOptionSelect = (optionId: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionId(optionId);
  };

  const handleSubmitAnswer = async () => {
    if (!selectedOptionId || !currentExercise) return;
    
    // Log para tracking
    console.log(`[ExerciseSession] Questão ${currentExerciseIndex + 1} de ${totalExercises} respondida`);
    
    const selectedOption = currentExercise.options.find(opt => opt.id === selectedOptionId);
    if (!selectedOption) return;
    
    const correct = selectedOption.is_correct;
    setIsAnswerCorrect(correct);
    setIsAnswerSubmitted(true);
    
    // Marcar o exercício atual como respondido
    const newAnsweredExercises = [...answeredExercises];
    newAnsweredExercises[currentExerciseIndex] = true;
    setAnsweredExercises(newAnsweredExercises);
    
    // Adicionar à lista de exercícios completados
    setCompletedExercises(prev => {
      // Verificar se já não está incluso para evitar duplicação
      if (!prev.some(ex => ex.id === currentExercise.id)) {
        return [...prev, currentExercise];
      }
      return prev;
    });
    
    // Update correct answers count
    if (correct) {
      setCorrectAnswers(prev => prev + 1);
    } else {
      // Decrease lives for incorrect answers, exceto nas Provas Finais de todos os módulos
      if (categoryId !== 'prova-virgula' && categoryId !== 'prova-ponto-e-virgula' && categoryId !== 'prova-dois-pontos' && categoryId !== 'prova-parenteses') {
        const newLives = lives - 1;
        setLives(newLives);
        
        // Verificar se o usuário perdeu todas as vidas
        if (newLives <= 0) {
          setNoLivesLeft(true);
        }
      }
    }
    
    // Save progress to Supabase if user is logged in
    if (user) {
      await saveUserAnswer(user, currentExercise.id, correct);
    }
  };

  const handleNextExercise = () => {
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    
    // Log do status atual
    console.log(`[ExerciseSession] Avançando para próxima questão. Atual: ${currentExerciseIndex + 1}, Total: ${totalExercises}`);
    
    // MODIFICAÇÃO CRUCIAL: Verificar explicitamente contra totalExercises
    // e garantir que a sessão só termine quando atingirmos exatamente 30 questões nas provas finais
    if (lives <= 0 || 
        (categoryId === 'prova-virgula' || categoryId === 'prova-ponto-e-virgula' || 
         categoryId === 'prova-dois-pontos' || categoryId === 'prova-parenteses' 
           ? currentExerciseIndex >= 29  // Índice 29 = questão 30 (última)
           : currentExerciseIndex >= totalExercises - 1)) {
      
      console.log(`[ExerciseSession] Finalizando sessão após a questão ${currentExerciseIndex + 1}`);
      handleEndSession();
    } else {
      // Avançar para o próximo exercício
      setCurrentExerciseIndex(prev => prev + 1);
      console.log(`[ExerciseSession] Avançado para questão ${currentExerciseIndex + 2}`);
    }
  };

  const handleEndSession = async () => {
    // Determine if this session counts as a completed module (needs at least 70% correct)
    const completedModuleThreshold = 0.7; // 70%
    const effectiveExercises = Math.max(completedExercises.length, 1); // Evitar divisão por zero
    const passedModule = correctAnswers / effectiveExercises >= completedModuleThreshold;
    
    // Verificar se o usuário completou todos os exercícios
    // Para as provas finais, consideramos que completou todos se respondeu o número total requerido
    const completedAllExercises = (categoryId === 'prova-virgula' || categoryId === 'prova-ponto-e-virgula' || 
                                categoryId === 'prova-dois-pontos' || categoryId === 'prova-parenteses') ?
                                currentExerciseIndex >= totalExercises - 1 : currentExerciseIndex >= exercises.length - 1;
    
    // Para as provas finais (vírgula, ponto e vírgula, dois pontos, e parênteses), exigir 70% de acerto para passar
    let passedExercise = completedAllExercises;
    if ((categoryId === 'prova-virgula' || categoryId === 'prova-ponto-e-virgula' || 
         categoryId === 'prova-dois-pontos' || categoryId === 'prova-parenteses') && completedAllExercises) {
      
      // Nesse caso usamos o totalExercises (30) como base para o cálculo, não o tamanho do array
      const accuracyPercentage = (correctAnswers / totalExercises) * 100;
      passedExercise = accuracyPercentage >= 70;
      
      let provaName = 'Vírgula';
      if (categoryId === 'prova-ponto-e-virgula') provaName = 'Ponto e Vírgula';
      if (categoryId === 'prova-dois-pontos') provaName = 'Dois Pontos';
      if (categoryId === 'prova-parenteses') provaName = 'Parênteses';
      
      console.log(`Prova Final de ${provaName} - Porcentagem de acerto: ${accuracyPercentage.toFixed(2)}%`);
      console.log(`Questões respondidas: ${completedExercises.length} de ${totalExercises}`);
      console.log('Passou na prova:', passedExercise ? 'SIM' : 'NÃO');
    }
    
    console.log('=== DEBUG ===');
    console.log('categoryId:', categoryId);
    console.log('exercises.length:', exercises.length);
    console.log('correctAnswers:', correctAnswers);
    console.log('completedExercises.length:', completedExercises.length);
    console.log('passedModule:', passedModule);
    console.log('completedAllExercises:', completedAllExercises);
    console.log('currentExerciseIndex:', currentExerciseIndex);
    console.log('User logged in:', !!user);
    
    if (user) {
      // >>> Início: Lógica para salvar módulo concluído exclusivamente no Supabase <<<
      // Marcar como concluído se o usuário completou todos os exercícios
      // Para a prova final de vírgula, ponto e vírgula, e dois pontos, só marcar como concluído se atingir 70% de acerto
      if (completedAllExercises && ((categoryId !== 'prova-virgula' && categoryId !== 'prova-ponto-e-virgula' && categoryId !== 'prova-dois-pontos') || passedExercise)) {
        console.log('Tentando salvar o módulo concluído...');
        
        // Definir um objeto para armazenar o progresso
        let currentProgress = {};
        let newProgress = {};
        
        try {
          // 1. Tentar buscar progresso atual do Supabase
          const { data: currentProfile, error: fetchError } = await supabase
            .from('profiles')
            .select('completed_modules')
            .eq('id', user.id)
            .maybeSingle();

          // 2. Preparar novo objeto de progresso
          currentProgress = currentProfile?.completed_modules || {};
          
          // Garantir que estamos salvando o valor correto para marcar como concluído
          // O módulo é considerado concluído quando completedExercises === totalExercises
          console.log(`[ExerciseSession] Definindo ${categoryId} como concluído com ${exercises.length} exercícios`);
          
          newProgress = {
            ...currentProgress,
            [categoryId]: exercises.length // Marca como concluído com o total de exercícios
          };

          console.log('Progresso atual:', currentProgress);
          console.log('Novo progresso:', newProgress);

          // 3. Atualizar no Supabase
          console.log(`[ExerciseSession] Salvando no Supabase: ${JSON.stringify(newProgress)}`);
          
          const { error: updateError } = await supabase
            .from('profiles')
            .update({ completed_modules: newProgress })
            .eq('id', user.id);

          if (updateError) {
            console.error('Erro ao atualizar perfil no Supabase:', updateError);
            throw updateError; // Forçar o fluxo para o catch
          }
          
          console.log(`[ExerciseSession] Atualização no Supabase bem-sucedida!`);

          console.log(`Módulo ${categoryId} marcado como concluído no Supabase.`);
        } catch (error) {
          console.error('Erro ao salvar no Supabase:', error);
          // Não fazer nada em caso de erro, apenas logar
        } finally {
          // Garantir que newProgress tenha o módulo atual marcado como concluído
          if (!newProgress[categoryId]) {
            newProgress[categoryId] = exercises.length;
          }
          
          console.log('[ExerciseSession] Disparando evento moduleProgressUpdated com:', {
            moduleId: categoryId,
            progress: newProgress
          });
          
          // Disparar evento para atualizar a UI
          window.dispatchEvent(new CustomEvent('moduleProgressUpdated', {
            detail: { moduleId: categoryId, progress: newProgress }
          }));
        }
      }
      // >>> Fim: Lógica para salvar módulo concluído exclusivamente no Supabase <<<

      // Calculate and save results (existing logic)
      const sessionResults = await getExerciseResults(
        user,
        categoryId,
        completedExercises,
        correctAnswers,
        passedModule // Pass whether this counts as a completed module
      );
      setResults(sessionResults);
    } else {
      // Create basic results for non-logged in users
      // Para provas finais, sempre usar 30 como o número total de questões
      const isProvaFinal = categoryId === 'prova-virgula' || categoryId === 'prova-ponto-e-virgula' || 
                          categoryId === 'prova-dois-pontos' || categoryId === 'prova-parenteses';
      
      // Usar totalExercises (que deve ser 30 para provas finais) em vez de completedExercises.length
      const finalTotalExercises = isProvaFinal ? 30 : completedExercises.length;
      const finalIncorrectAnswers = finalTotalExercises - correctAnswers;
      
      console.log(`[ExerciseSession] Configurando resultados finais:`); 
      console.log(`- Total de exercícios: ${finalTotalExercises}`); 
      console.log(`- Respostas corretas: ${correctAnswers}`);
      console.log(`- Respostas incorretas: ${finalIncorrectAnswers}`);
      
      setResults({
        totalExercises: finalTotalExercises,
        correctAnswers,
        incorrectAnswers: finalIncorrectAnswers,
        accuracyPercentage: Math.round((correctAnswers / finalTotalExercises) * 100),
        xpEarned: correctAnswers * 10,
        moduleCompleted: passedModule,
        completedExercises
      });
    }
    
    setShowResults(true);
  };

  const handleLoginPrompt = () => {
    setShowAuthModal(true);
  };

  const handleReturnToModules = () => {
    navigate('/success');
  };

  const handleRestartExercise = () => {
    // Reiniciar o exercício
    setCurrentExerciseIndex(0);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setIsAnswerCorrect(false);
    setLives(3);
    setCorrectAnswers(0);
    setCompletedExercises([]);
    setShowResults(false);
    setResults(null);
    setNoLivesLeft(false);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px]">
        <Loader2 className="h-10 w-10 animate-spin text-brand-blue mb-4" />
        <p className="text-gray-600">Carregando exercícios</p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mb-4">
        <AlertCircle className="h-4 w-4 mr-2" />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (showResults) {
    return (
      <>
        <ExerciseResults 
          results={results} 
          onContinue={handleReturnToModules}
          onLoginPrompt={handleLoginPrompt}
          isLoggedIn={!!user}
        />
        
        {showAuthModal && (
          <AuthModal 
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
            defaultTab="register"
          />
        )}
      </>
    );
  }

  if (!currentExercise) {
    return (
      <Alert variant="destructive" className="mb-4">
        <AlertCircle className="h-4 w-4 mr-2" />
        <AlertDescription>Não foram encontrados exercícios para esta categoria.</AlertDescription>
      </Alert>
    );
  }

  // Se o usuário perdeu todas as vidas, mostrar tela de fim de jogo (exceto nas Provas Finais)
  if (noLivesLeft && !showResults && categoryId !== 'prova-virgula' && categoryId !== 'prova-ponto-e-virgula' && categoryId !== 'prova-dois-pontos' && categoryId !== 'prova-parenteses') {
    return (
      <div className="max-w-3xl mx-auto">
        <Card className="mb-6 border-t-4 border-t-red-500">
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <div className="flex justify-center mb-4">
                {[...Array(3)].map((_, i) => (
                  <Heart key={i} className="h-8 w-8 text-gray-300 mx-1" />
                ))}
              </div>
              <h2 className="text-2xl font-bold mb-4">Você perdeu todas as vidas!</h2>
              <p className="text-gray-600 mb-6">
                Você acertou {correctAnswers} de {exercises.length} questões.
              </p>
              
              <div className="flex justify-center gap-4">
                <Button 
                  variant="outline" 
                  onClick={handleReturnToModules}
                  className="px-6"
                >
                  Voltar ao Menu
                </Button>
                <Button 
                  onClick={handleRestartExercise}
                  className="px-6"
                >
                  Refazer Exercício
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header with module title and progress */}
      <div className="mb-6">
        {moduleTitle && (
          <h2 className="text-2xl font-bold mb-4">{moduleTitle}</h2>
        )}
        <div className="flex justify-between items-center mb-2">
          {categoryId !== 'prova-virgula' && categoryId !== 'prova-ponto-e-virgula' && categoryId !== 'prova-dois-pontos' && categoryId !== 'prova-parenteses' && (
            <div className="flex gap-2">
              {[...Array(lives)].map((_, i) => (
                <Heart key={i} className="h-6 w-6 text-red-500 fill-red-500" />
              ))}
              {[...Array(3 - lives)].map((_, i) => (
                <Heart key={i + lives} className="h-6 w-6 text-gray-300" />
              ))}
            </div>
          )}
          <div className="text-sm font-medium">
            Questão {currentExerciseIndex + 1} de {totalExercises}
          </div>
        </div>
        <Progress 
          value={progress} 
          className="h-2" 
        />
      </div>
      
      {/* Exercise Title and Question */}
      <Card className="mb-6">
        <CardHeader>
          {/* Todos os títulos foram movidos para o topo da página */}
          <CardTitle className="text-xl">{currentExercise.question}</CardTitle>
        </CardHeader>
      </Card>
      
      {/* Options */}
      <div className="space-y-3 mb-6">
        {currentExercise.options.map((option) => (
          <button
            key={option.id}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${              
                selectedOptionId === option.id 
                  ? 'border-brand-blue bg-brand-blue/5' 
                  : 'border-gray-200 hover:border-gray-300'
            } ${
              isAnswerSubmitted && !categoryId.includes('prova-') && selectedOptionId === option.id
                ? option.is_correct 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-red-500 bg-red-50'
                : ''
            } ${isAnswerSubmitted && !categoryId.includes('prova-') && option.is_correct && selectedOptionId !== option.id
                ? 'border-green-500 bg-green-50'
                : ''
            }`}
            onClick={() => handleOptionSelect(option.id)}
            disabled={isAnswerSubmitted}
          >
            <div className="flex items-center justify-between">
              <span>{option.option_text}</span>
              {isAnswerSubmitted && !categoryId.includes('prova-') && (
                <>
                  {selectedOptionId === option.id ? (
                    option.is_correct ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <X className="h-5 w-5 text-red-500" />
                    )
                  ) : (
                    option.is_correct && <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </>
              )}
            </div>
          </button>
        ))}
      </div>
      
      {/* Explanation when answer is submitted - não mostrar nas Provas Finais */}
      {isAnswerSubmitted && !categoryId.includes('prova-') && (
        <Card className="mb-6 border-t-4 border-t-brand-blue">
          <CardContent className="pt-6">
            <h3 className="font-medium text-lg mb-2">
              {isAnswerCorrect ? 'Correto!' : 'Ops! Não é bem assim.'}
            </h3>
            <p className="text-gray-700">
              {currentExercise.explanation}
            </p>
            {selectedOptionId && (
              <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  {currentExercise.options.find(opt => opt.id === selectedOptionId)?.explanation}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
      
      {/* Action buttons */}
      <div className="flex justify-end">
        {(categoryId === 'prova-virgula' || categoryId === 'prova-ponto-e-virgula' || categoryId === 'prova-dois-pontos' || categoryId === 'prova-parenteses') ? (
          // Na Prova Final de Vírgula ou de Ponto e Vírgula, o botão sempre avança para a próxima questão sem mostrar feedback
          <Button 
            onClick={() => {
              if (!selectedOptionId) return;
              
              // Registra a resposta internamente mas não mostra feedback
              const selectedOption = currentExercise.options.find(opt => opt.id === selectedOptionId);
              if (selectedOption?.is_correct) {
                setCorrectAnswers(prev => prev + 1);
              }
              
              // Adiciona à lista de exercícios completados
              setCompletedExercises(prev => [...prev, currentExercise]);
              
              // Salva o progresso no Supabase se o usuário estiver logado
              if (user) {
                saveUserAnswer(user, currentExercise.id, selectedOption?.is_correct || false);
              }
              
              // Avança para a próxima questão ou mostra resultados
              if (currentExerciseIndex >= exercises.length - 1) {
                handleEndSession();
                setShowResults(true); // Mostrar os resultados finais
              } else {
                setCurrentExerciseIndex(prev => prev + 1);
                setSelectedOptionId(null);
              }
            }}
            disabled={!selectedOptionId}
            className="min-w-[120px]"
          >
            {currentExerciseIndex >= exercises.length - 1 ? 'Finalizar' : 'Próxima'}
          </Button>
        ) : (
          // Para os outros módulos, mantém o comportamento original
          !isAnswerSubmitted ? (
            <Button 
              onClick={handleSubmitAnswer}
              disabled={!selectedOptionId}
              className="min-w-[120px]"
            >
              Verificar
            </Button>
          ) : (
            <Button 
              onClick={handleNextExercise}
              className="min-w-[120px]"
            >
              {currentExerciseIndex >= exercises.length - 1 || lives <= 0 ? 'Ver resultados' : 'Continuar'}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default ExerciseSession;
