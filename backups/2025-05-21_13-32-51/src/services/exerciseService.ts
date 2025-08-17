import { User } from '@supabase/supabase-js';
import { getDoisPontosExercises } from './doisPontosData';
import { getPontoEVirgulaExercises } from './pontoEVirgulaData';
import { getVirgulaExercises } from './virgulaData';
import { getParentesesExercises } from './parentesesData';
import { getInterpretacaoTextualExercises } from './interpretacaoTextualData';

// Types
export interface Exercise {
  id: number;
  category_id: string;
  question: string;
  explanation: string;
  difficulty: number;
  options: ExerciseOption[];
}

export interface ExerciseOption {
  id: number;
  exercise_id: number;
  option_text: string;
  is_correct: boolean;
  explanation: string;
}

export interface ExerciseCategory {
  id: string;
  title: string;
  description: string;
}

export interface ExerciseResults {
  totalExercises: number;
  correctAnswers: number;
  incorrectAnswers: number;
  accuracyPercentage: number;
  xpEarned: number;
  newLevel?: number;
  moduleCompleted: boolean;
  completedExercises: Exercise[];
}

// Get exercises by category
export async function getExercisesByCategory(categoryId: string): Promise<Exercise[]> {
  // Para exercícios de Dois Pontos, usar os dados locais
  if (categoryId.includes('dois-pontos')) {
    console.log('Usando dados locais para exercícios de Dois Pontos:', categoryId);
    return getDoisPontosExercises(categoryId);
  }
  
  // Para exercícios de Ponto e Vírgula, usar os dados locais
  if (categoryId.includes('ponto-e-virgula')) {
    return getPontoEVirgulaExercises(categoryId);
  }
  
  // Para exercícios de Vírgula, usar os dados locais
  if (categoryId.includes('virgula')) {
    return getVirgulaExercises(categoryId);
  }
  
  // Para exercícios de Parênteses, usar os dados locais
  if (categoryId.includes('parenteses')) {
    return getParentesesExercises(categoryId);
  }
  
  // Para exercícios de Interpretação Textual, usar os dados locais
  if (categoryId.includes('interpretacao-')) {
    return getInterpretacaoTextualExercises(categoryId);
  }
  
  // Caso nenhuma das condições acima seja atendida, retornar lista vazia
  // (todos os exercícios agora estão em arquivos locais)
  console.warn('Categoria não encontrada:', categoryId);
  return [];
}

// A função getUserProgressForCategory foi removida porque não precisamos mais rastrear o progresso individual por exercício
// Agora todas as informações são gerenciadas localmente
export async function getUserModuleProgress(userId: string): Promise<Record<string, number>> {
  // Retorna um objeto vazio, pois não estamos mais usando o Supabase
  console.log(`Buscando progresso do módulo localmente para o usuário: ${userId}`);
  return {};
}

// Save user's answer to an exercise
export async function saveUserAnswer(
  user: User,
  exerciseId: number,
  isCorrect: boolean
): Promise<boolean> {
  try {
    // Não é mais necessário salvar respostas individuais no Supabase
    // pois todas as questões agora são gerenciadas localmente
    // Esta função é mantida apenas para compatibilidade com o código existente
    
    // Log para depuração (pode ser removido em produção)
    console.log(`Resposta registrada localmente - Exercício: ${exerciseId}, Correto: ${isCorrect}`);
    
    return true;
  } catch (error) {
    console.error('Error in saveUserAnswer:', error);
    return false;
  }
}

// Get exercise results for a session
export async function getExerciseResults(
  user: User, 
  categoryId: string, 
  completedExercises: Exercise[], 
  correctAnswers: number,
  moduleCompleted: boolean = false
): Promise<ExerciseResults> {
  // Verificar se é uma prova final
  const isProvaFinal = categoryId === 'prova-virgula' || categoryId === 'prova-ponto-e-virgula' || 
                     categoryId === 'prova-dois-pontos' || categoryId === 'prova-parenteses';
  
  // Usar 30 para provas finais, senão usar o tamanho do array de exercícios concluídos
  const totalExercises = isProvaFinal ? 30 : completedExercises.length;
  
  // Garantir que o número de respostas corretas não seja maior que o total de exercícios
  const adjustedCorrectAnswers = Math.min(correctAnswers, totalExercises);
  const incorrectAnswers = totalExercises - adjustedCorrectAnswers;
  
  // Calcular porcentagem de acerto
  const accuracyPercentage = totalExercises > 0 
    ? Math.round((adjustedCorrectAnswers / totalExercises) * 100) 
    : 0;
  
  // Calcular XP (10 por resposta correta, bônus de 5 para alta precisão)
  let xpEarned = adjustedCorrectAnswers * 10;
  if (accuracyPercentage >= 80) xpEarned += 5;
  if (accuracyPercentage === 100) xpEarned += 10;

  // Não é mais necessário buscar estatísticas do usuário do Supabase
  // pois não estamos mais usando o sistema de níveis e XP
  const newLevel = undefined;
  
  // Log para depuração
  console.log(`[getExerciseResults] Resultados - Categoria: ${categoryId}, ` +
              `Acertos: ${adjustedCorrectAnswers}/${totalExercises} (${accuracyPercentage}%)`);
  
  // Log para depuração
  if (moduleCompleted) {
    console.log(`[getExerciseResults] Módulo ${categoryId} marcado como concluído localmente`);
  }

  return {
    totalExercises,
    correctAnswers: adjustedCorrectAnswers,
    incorrectAnswers,
    accuracyPercentage,
    xpEarned,
    newLevel,
    moduleCompleted,
    completedExercises
  };
}

// Get categories
export async function getCategories(): Promise<ExerciseCategory[]> {
  // Retorna as categorias diretamente, sem acessar o Supabase
  console.log('Buscando categorias localmente');
  
  // Categorias locais para os exercícios
  return [
    { id: 'virgula', title: 'Vírgula', description: 'Exercícios sobre o uso da vírgula' },
    { id: 'virgula-2', title: 'Vírgula - Módulo 2', description: 'Mais exercícios sobre vírgula' },
    { id: 'virgula-3', title: 'Vírgula - Módulo 3', description: 'Exercícios avançados de vírgula' },
    { id: 'virgula-4', title: 'Vírgula - Módulo 4', description: 'Exercícios práticos de vírgula' },
    { id: 'virgula-5', title: 'Vírgula - Módulo 5', description: 'Exercícios avançados de vírgula' },
    { id: 'prova-virgula', title: 'Prova Final de Vírgula', description: 'Teste seus conhecimentos sobre vírgula' },
    
    { id: 'ponto-e-virgula', title: 'Ponto e Vírgula', description: 'Exercícios sobre o uso do ponto e vírgula' },
    { id: 'ponto-e-virgula-2', title: 'Ponto e Vírgula - Módulo 2', description: 'Mais exercícios sobre ponto e vírgula' },
    { id: 'ponto-e-virgula-3', title: 'Ponto e Vírgula - Módulo 3', description: 'Exercícios avançados de ponto e vírgula' },
    { id: 'ponto-e-virgula-4', title: 'Ponto e Vírgula - Módulo 4', description: 'Exercícios práticos de ponto e vírgula' },
    { id: 'ponto-e-virgula-5', title: 'Ponto e Vírgula - Módulo 5', description: 'Exercícios avançados de ponto e vírgula' },
    { id: 'prova-ponto-e-virgula', title: 'Prova Final de Ponto e Vírgula', description: 'Teste seus conhecimentos sobre ponto e vírgula' },
    
    { id: 'dois-pontos', title: 'Dois Pontos', description: 'Exercícios sobre o uso dos dois pontos' },
    { id: 'dois-pontos-2', title: 'Dois Pontos - Módulo 2', description: 'Mais exercícios sobre dois pontos' },
    { id: 'dois-pontos-3', title: 'Dois Pontos - Módulo 3', description: 'Exercícios avançados de dois pontos' },
    { id: 'dois-pontos-4', title: 'Dois Pontos - Módulo 4', description: 'Exercícios práticos de dois pontos' },
    { id: 'dois-pontos-5', title: 'Dois Pontos - Módulo 5', description: 'Exercícios avançados de dois pontos' },
    { id: 'prova-dois-pontos', title: 'Prova Final de Dois Pontos', description: 'Teste seus conhecimentos sobre dois pontos' },
    
    { id: 'parenteses', title: 'Parênteses', description: 'Exercícios sobre o uso de parênteses' },
    { id: 'parenteses-2', title: 'Parênteses - Módulo 2', description: 'Mais exercícios sobre parênteses' },
    { id: 'parenteses-3', title: 'Parênteses - Módulo 3', description: 'Exercícios avançados de parênteses' },
    { id: 'parenteses-4', title: 'Parênteses - Módulo 4', description: 'Exercícios práticos de parênteses' },
    { id: 'parenteses-5', title: 'Parênteses - Módulo 5', description: 'Exercícios avançados de parênteses' },
    { id: 'prova-parenteses', title: 'Prova Final de Parênteses', description: 'Teste seus conhecimentos sobre parênteses' },
    
    // Categorias para Interpretação Textual
    { id: 'interpretacao-jornalistico', title: 'Textos Jornalísticos', description: 'Exercícios de interpretação de textos jornalísticos' },
    { id: 'interpretacao-cientifico', title: 'Textos Técnicos e Científicos', description: 'Exercícios de interpretação de textos técnicos e científicos' },
    { id: 'interpretacao-literario', title: 'Textos Literários', description: 'Exercícios de interpretação de textos literários' },
    { id: 'interpretacao-argumentativo', title: 'Textos Argumentativos', description: 'Exercícios de interpretação de textos argumentativos' }
  ];
}
