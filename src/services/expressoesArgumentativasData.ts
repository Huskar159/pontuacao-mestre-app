import { Exercise } from './exerciseService';

//==============================================================================
//==============================================================================
//                        EXPRESSÕES ARGUMENTATIVAS
//==============================================================================
//==============================================================================

// ---------- MÓDULO 4: Expressões Argumentativas ----------
export const expressoesArgumentativasExercicio: Exercise[] = [
  {
    id: 76001,
    category_id: 'expressoes-argumentativas',
    question: 'Qual é a melhor expressão argumentativa para iniciar um parágrafo que apresenta uma ideia contrária ao que foi discutido anteriormente?',
    explanation: 'Expressões de contra-argumentação são essenciais para apresentar pontos de vista diferentes e enriquecer a argumentação.',
    difficulty: 2,
    options: [
      {
        id: 760001,
        exercise_id: 76001,
        option_text: 'Em contrapartida',
        is_correct: true,
        explanation: 'Correto! "Em contrapartida" é uma expressão formal e clara para introduzir um argumento que contrasta com o que foi apresentado anteriormente.'
      },
      {
        id: 760002,
        exercise_id: 76001,
        option_text: 'Inclusive',
        is_correct: false,
        explanation: '"Inclusive" é usado para adicionar informações ou exemplos que reforçam o mesmo ponto, não para apresentar uma ideia contrária.'
      },
      {
        id: 760003,
        exercise_id: 76001,
        option_text: 'Assim sendo',
        is_correct: false,
        explanation: '"Assim sendo" é usado para concluir um raciocínio com base no que foi dito antes, não para introduzir uma ideia contrária.'
      },
      {
        id: 760004,
        exercise_id: 76001,
        option_text: 'Nesse sentido',
        is_correct: false,
        explanation: '"Nesse sentido" é usado para dar continuidade a uma mesma linha de raciocínio, não para introduzir um contraste.'
      }
    ]
  },
  {
    id: 76002,
    category_id: 'expressoes-argumentativas',
    question: 'Qual das seguintes expressões é mais adequada para introduzir um exemplo que reforça seu argumento?',
    explanation: 'Expressões que introduzem exemplos são fundamentais para tornar a argumentação mais concreta e compreensível.',
    difficulty: 2,
    options: [
      {
        id: 760005,
        exercise_id: 76002,
        option_text: 'A saber',
        is_correct: false,
        explanation: '"A saber" é usado para anunciar uma explicação ou enumeração, não especificamente para introduzir um exemplo.'
      },
      {
        id: 760006,
        exercise_id: 76002,
        option_text: 'Como ilustração disso',
        is_correct: true,
        explanation: 'Correto! "Como ilustração disso" é uma expressão formal e clara para introduzir um exemplo que dá suporte ao argumento apresentado.'
      },
      {
        id: 760007,
        exercise_id: 76002,
        option_text: 'No entanto',
        is_correct: false,
        explanation: '"No entanto" é usado para introduzir uma ideia contrária, não um exemplo.'
      },
      {
        id: 760008,
        exercise_id: 76002,
        option_text: 'Em suma',
        is_correct: false,
        explanation: '"Em suma" é usado para introduzir uma conclusão ou resumo, não um exemplo.'
      }
    ]
  },
  {
    id: 76003,
    category_id: 'expressoes-argumentativas',
    question: 'Qual expressão é mais adequada para estabelecer uma relação de causa e efeito em um texto argumentativo?',
    explanation: 'Expressões que estabelecem relações causais são importantes para demonstrar a lógica por trás de um argumento.',
    difficulty: 2,
    options: [
      {
        id: 760009,
        exercise_id: 76003,
        option_text: 'Por conseguinte',
        is_correct: true,
        explanation: 'Correto! "Por conseguinte" é uma expressão formal que estabelece claramente uma relação de causa e efeito.'
      },
      {
        id: 760010,
        exercise_id: 76003,
        option_text: 'Outrossim',
        is_correct: false,
        explanation: '"Outrossim" é usado para adicionar uma nova ideia ou argumento, sem necessariamente estabelecer uma relação causal.'
      },
      {
        id: 760011,
        exercise_id: 76003,
        option_text: 'Simultaneamente',
        is_correct: false,
        explanation: '"Simultaneamente" indica que dois eventos ocorrem ao mesmo tempo, não estabelecendo uma relação de causa e efeito.'
      },
      {
        id: 760012,
        exercise_id: 76003,
        option_text: 'Em contrapartida',
        is_correct: false,
        explanation: '"Em contrapartida" é usado para introduzir uma ideia contrária, não uma relação causal.'
      }
    ]
  },
  {
    id: 76004,
    category_id: 'expressoes-argumentativas',
    question: 'Qual das seguintes expressões é mais adequada para introduzir uma conclusão parcial em um texto argumentativo?',
    explanation: 'Conclusões parciais ajudam a organizar o texto argumentativo, resumindo pontos-chave antes de avançar para novos argumentos.',
    difficulty: 2,
    options: [
      {
        id: 760013,
        exercise_id: 76004,
        option_text: 'Por fim',
        is_correct: false,
        explanation: '"Por fim" é mais adequado para introduzir uma conclusão final, não uma conclusão parcial.'
      },
      {
        id: 760014,
        exercise_id: 76004,
        option_text: 'Até o momento',
        is_correct: true,
        explanation: 'Correto! "Até o momento" é uma expressão que indica uma conclusão parcial, resumindo o que foi discutido até aquele ponto, sem encerrar a argumentação.'
      },
      {
        id: 760015,
        exercise_id: 76004,
        option_text: 'Em vista disso',
        is_correct: false,
        explanation: '"Em vista disso" é usado para introduzir uma consequência ou conclusão direta de um argumento específico, não necessariamente para resumir uma seção inteira.'
      },
      {
        id: 760016,
        exercise_id: 76004,
        option_text: 'Destarte',
        is_correct: false,
        explanation: '"Destarte" é uma expressão mais apropriada para introduzir uma conclusão final ou geral, não uma conclusão parcial.'
      }
    ]
  },
  {
    id: 76005,
    category_id: 'expressoes-argumentativas',
    question: 'Qual expressão é mais adequada para adicionar um argumento que fortalece o ponto de vista já apresentado?',
    explanation: 'Expressões que adicionam argumentos complementares são importantes para fortalecer a posição defendida no texto.',
    difficulty: 2,
    options: [
      {
        id: 760017,
        exercise_id: 76005,
        option_text: 'Apesar disso',
        is_correct: false,
        explanation: '"Apesar disso" é usado para introduzir uma ressalva ou um contraste, não para adicionar um argumento que fortalece o ponto já apresentado.'
      },
      {
        id: 760018,
        exercise_id: 76005,
        option_text: 'Por outro lado',
        is_correct: false,
        explanation: '"Por outro lado" é usado para apresentar um contraste ou uma visão alternativa, não para reforçar o mesmo ponto de vista.'
      },
      {
        id: 760019,
        exercise_id: 76005,
        option_text: 'Soma-se a isso',
        is_correct: true,
        explanation: 'Correto! "Soma-se a isso" é uma expressão que indica claramente a adição de um argumento que complementa e fortalece o que já foi apresentado.'
      },
      {
        id: 760020,
        exercise_id: 76005,
        option_text: 'Em contrapartida',
        is_correct: false,
        explanation: '"Em contrapartida" é usado para introduzir uma ideia contrária, não para reforçar o mesmo ponto de vista.'
      }
    ]
  }
];
