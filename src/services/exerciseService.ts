import { User } from '@supabase/supabase-js';
import { getDoisPontosExercises } from './doisPontosData';
import { getPontoEVirgulaExercises } from './pontoEVirgulaData';
import { getVirgulaExercises } from './virgulaData';
import { getParentesesExercises } from './parentesesData';
import { getInterpretacaoTextualExercises } from './interpretacaoTextualData';
import {
  substituicaoPalavrasComunsExercicio,
  verbosComunsExercicio,
  conectivosTransicaoExercicio,
  palavrasImprecisasExercicio,
  reducaoRedundanciasExercicio,
  provaFinalPalavrasRepetitivasExercicio
} from './palavrasRepetitivasData';
import { expressoesArgumentativasExercicio } from './expressoesArgumentativasData';
import { conclusoesRedacaoExercicio } from './conclusoesRedacaoData';

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
  
  // Para exercícios de Palavras Repetitivas, usar os dados locais
  if (categoryId === 'substituicao-palavras-comuns') {
    return substituicaoPalavrasComunsExercicio;
  }
  
  if (categoryId === 'verbos-comuns') {
    return verbosComunsExercicio;
  }
  
  if (categoryId === 'conectivos-transicao') {
    return conectivosTransicaoExercicio;
  }
  
  if (categoryId === 'palavras-imprecisas') {
    return palavrasImprecisasExercicio;
  }
  
  if (categoryId === 'reducao-redundancias') {
    return reducaoRedundanciasExercicio;
  }
  
  if (categoryId === 'prova-final-palavras-repetitivas') {
    return provaFinalPalavrasRepetitivasExercicio;
  }
  
  // Para exercícios de Expressões Argumentativas, usar os dados locais
  if (categoryId === 'expressoes-argumentativas') {
    return expressoesArgumentativasExercicio;
  }
  
  // Para exercícios de Conclusões de Redação, usar os dados locais
  if (categoryId === 'conclusoes-redacao') {
    return conclusoesRedacaoExercicio;
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
  const isProvaFinal = categoryId === 'prova-ponto-e-virgula' || 
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
    
    // Categorias para Palavras Repetitivas
    { id: 'substituicao-palavras-comuns', title: 'Substituição de Palavras Comuns', description: 'Exercícios sobre como substituir palavras repetitivas por sinônimos mais precisos' },
    { id: 'verbos-comuns', title: 'Verbos Comuns', description: 'Exercícios sobre como substituir verbos genéricos por opções mais precisas' },
    { id: 'conectivos-transicao', title: 'Conectivos e Transições', description: 'Exercícios sobre como melhorar conectivos e expressões de transição' },
    { id: 'palavras-imprecisas', title: 'Palavras Imprecisas', description: 'Exercícios sobre como substituir termos vagos por opções mais precisas' },
    { id: 'reducao-redundancias', title: 'Redução de Redundâncias', description: 'Exercícios sobre como eliminar pleonasmos e redundâncias' },
    { id: 'expressoes-argumentativas', title: 'Expressões Argumentativas - Módulo 4', description: 'Enriqueça seus argumentos com expressões mais elaboradas' },
    { id: 'conclusoes-redacao', title: 'Conclusões de Redação - Módulo 5', description: 'Aprenda a variar as expressões conclusivas' },
    { id: 'prova-final-palavras-repetitivas', title: 'Prova Final de Palavras Repetitivas', description: 'Teste seus conhecimentos sobre aprimoramento vocabular' },
    
    // Categorias para Interpretação Textual
    // Textos Jornalísticos (5 módulos)
    { id: 'interpretacao-jornalistico', title: 'Textos Jornalísticos - Módulo 1', description: 'Interpretação de notícias e reportagens de temas atuais' },
    { id: 'interpretacao-jornalistico-2', title: 'Textos Jornalísticos - Módulo 2', description: 'Interpretação de entrevistas e depoimentos jornalísticos' },
    { id: 'interpretacao-jornalistico-3', title: 'Textos Jornalísticos - Módulo 3', description: 'Interpretação de manchetes e leads de notícias' },
    { id: 'interpretacao-jornalistico-4', title: 'Textos Jornalísticos - Módulo 4', description: 'Interpretação de reportagens especiais e investigativas' },
    { id: 'interpretacao-jornalistico-5', title: 'Textos Jornalísticos - Módulo 5', description: 'Interpretação de artigos jornalísticos e editoriais' },
    // Textos Literários (5 módulos)
    { id: 'interpretacao-literario', title: 'Textos Literários - Módulo 1', description: 'Interpretação de contos clássicos e contemporâneos' },
    { id: 'interpretacao-literario-2', title: 'Textos Literários - Módulo 2', description: 'Interpretação de poemas líricos e sonetos' },
    { id: 'interpretacao-literario-3', title: 'Textos Literários - Módulo 3', description: 'Interpretação de crônicas literárias' },
    { id: 'interpretacao-literario-4', title: 'Textos Literários - Módulo 4', description: 'Interpretação de fragmentos de romances' },
    { id: 'interpretacao-literario-5', title: 'Textos Literários - Módulo 5', description: 'Interpretação de textos dramáticos e peças teatrais' },
    // Textos Argumentativos (5 módulos)
    { id: 'interpretacao-argumentativo', title: 'Textos Argumentativos - Módulo 1', description: 'Interpretação de artigos de opinião' },
    { id: 'interpretacao-argumentativo-2', title: 'Textos Argumentativos - Módulo 2', description: 'Interpretação de editoriais de jornais e revistas' },
    { id: 'interpretacao-argumentativo-3', title: 'Textos Argumentativos - Módulo 3', description: 'Interpretação de dissertações argumentativas' },
    { id: 'interpretacao-argumentativo-4', title: 'Textos Argumentativos - Módulo 4', description: 'Interpretação de cartas argumentativas e manifestos' },
    { id: 'interpretacao-argumentativo-5', title: 'Textos Argumentativos - Módulo 5', description: 'Interpretação de resenhas críticas e ensaios' }
  ];
}
