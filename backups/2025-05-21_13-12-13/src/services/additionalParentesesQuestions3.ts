import { Exercise } from './exerciseService';

// Questões adicionais para a prova final de Parênteses (parte 3)
export const additionalProvaParenteses3: Exercise[] = [
  {
    id: 7521,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma idade?',
    explanation: 'Os parênteses podem ser usados para indicar a idade de uma pessoa após seu nome.',
    difficulty: 5,
    options: [
      {
        id: 75101,
        exercise_id: 7521,
        option_text: 'O atleta brasileiro Gustavo Kuerten (25) conquistou seu terceiro título de Roland Garros em 2001.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar a idade do atleta.'
      },
      {
        id: 75102,
        exercise_id: 7521,
        option_text: 'O (atleta brasileiro Gustavo Kuerten 25) conquistou seu terceiro título de Roland Garros em 2001.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão englobando tanto o nome quanto a idade.'
      },
      {
        id: 75103,
        exercise_id: 7521,
        option_text: 'O atleta brasileiro Gustavo Kuerten(25)conquistou seu terceiro título de Roland Garros em 2001.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75104,
        exercise_id: 7521,
        option_text: '(25) O atleta brasileiro Gustavo Kuerten conquistou seu terceiro título de Roland Garros em 2001.',
        is_correct: false,
        explanation: 'Incorreto! A idade deve vir após o nome a que se refere, não antes da frase.'
      },
      {
        id: 75105,
        exercise_id: 7521,
        option_text: 'O atleta brasileiro Gustavo Kuerten - 25 - conquistou seu terceiro título de Roland Garros em 2001.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7522,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar um valor monetário?',
    explanation: 'Os parênteses podem ser usados para especificar valores monetários após a menção de um produto ou serviço.',
    difficulty: 5,
    options: [
      {
        id: 75106,
        exercise_id: 7522,
        option_text: 'O novo smartphone (R$ 3.500,00) será lançado na próxima semana.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar o preço do smartphone.'
      },
      {
        id: 75107,
        exercise_id: 7522,
        option_text: 'O (novo smartphone R$ 3.500,00) será lançado na próxima semana.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão englobando tanto o produto quanto o valor.'
      },
      {
        id: 75108,
        exercise_id: 7522,
        option_text: 'O novo smartphone(R$ 3.500,00)será lançado na próxima semana.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75109,
        exercise_id: 7522,
        option_text: '(R$ 3.500,00) O novo smartphone será lançado na próxima semana.',
        is_correct: false,
        explanation: 'Incorreto! O valor deve vir após o produto a que se refere, não antes da frase.'
      },
      {
        id: 75110,
        exercise_id: 7522,
        option_text: 'O novo smartphone - R$ 3.500,00 - será lançado na próxima semana.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7523,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma área geográfica?',
    explanation: 'Os parênteses podem ser usados para especificar a localização geográfica de uma cidade ou região.',
    difficulty: 5,
    options: [
      {
        id: 75111,
        exercise_id: 7523,
        option_text: 'A cidade de Florianópolis (SC) é conhecida por suas belas praias.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar o estado onde se localiza a cidade.'
      },
      {
        id: 75112,
        exercise_id: 7523,
        option_text: 'A (cidade de Florianópolis SC) é conhecida por suas belas praias.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão englobando tanto a cidade quanto o estado.'
      },
      {
        id: 75113,
        exercise_id: 7523,
        option_text: 'A cidade de Florianópolis(SC)é conhecida por suas belas praias.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75114,
        exercise_id: 7523,
        option_text: '(SC) A cidade de Florianópolis é conhecida por suas belas praias.',
        is_correct: false,
        explanation: 'Incorreto! A localização deve vir após o nome da cidade a que se refere, não antes da frase.'
      },
      {
        id: 75115,
        exercise_id: 7523,
        option_text: 'A cidade de Florianópolis - SC - é conhecida por suas belas praias.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7524,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma informação numérica?',
    explanation: 'Os parênteses podem ser usados para indicar informações numéricas que complementam a informação principal.',
    difficulty: 5,
    options: [
      {
        id: 75116,
        exercise_id: 7524,
        option_text: 'A maioria dos entrevistados (78%) concordou com a proposta.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar a porcentagem dos entrevistados.'
      },
      {
        id: 75117,
        exercise_id: 7524,
        option_text: 'A (maioria dos entrevistados 78%) concordou com a proposta.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão englobando tanto o sujeito quanto a informação numérica.'
      },
      {
        id: 75118,
        exercise_id: 7524,
        option_text: 'A maioria dos entrevistados(78%)concordou com a proposta.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75119,
        exercise_id: 7524,
        option_text: '(78%) A maioria dos entrevistados concordou com a proposta.',
        is_correct: false,
        explanation: 'Incorreto! A informação numérica deve vir após o termo a que se refere, não antes da frase.'
      },
      {
        id: 75120,
        exercise_id: 7524,
        option_text: 'A maioria dos entrevistados - 78% - concordou com a proposta.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7525,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente em uma equação algébrica?',
    explanation: 'Os parênteses são usados em equações algébricas para determinar a ordem das operações.',
    difficulty: 5,
    options: [
      {
        id: 75121,
        exercise_id: 7525,
        option_text: 'A fórmula x = (-b ± √(b² - 4ac)) / (2a) é usada para resolver equações quadráticas.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para definir a ordem das operações na fórmula de Bhaskara.'
      },
      {
        id: 75122,
        exercise_id: 7525,
        option_text: 'A fórmula x = -b ± √(b² - 4ac) / (2a) é usada para resolver equações quadráticas.',
        is_correct: false,
        explanation: 'Incorreto! Faltam parênteses no numerador para agrupar toda a expressão -b ± √(b² - 4ac).'
      },
      {
        id: 75123,
        exercise_id: 7525,
        option_text: 'A fórmula x = (-b ± √b² - 4ac) / (2a) é usada para resolver equações quadráticas.',
        is_correct: false,
        explanation: 'Incorreto! Faltam parênteses para agrupar a expressão b² - 4ac dentro da raiz quadrada.'
      },
      {
        id: 75124,
        exercise_id: 7525,
        option_text: 'A fórmula x = (-b ± √(b² - 4ac) / 2a) é usada para resolver equações quadráticas.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão agrupando incorretamente a divisão por 2a junto com a raiz.'
      },
      {
        id: 75125,
        exercise_id: 7525,
        option_text: 'A fórmula x = -b ± √b² - 4ac / 2a é usada para resolver equações quadráticas.',
        is_correct: false,
        explanation: 'Incorreto! Faltam todos os parênteses necessários para definir corretamente a ordem das operações.'
      }
    ]
  }
,
  {
    id: 7526,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar um horário?',
    explanation: 'Os parênteses podem ser usados para indicar horários em textos',
    difficulty: 5,
    options: [
      {
        id: 75126,
        exercise_id: 7526,
        option_text: 'A reunião será realizada amanhã (14h30) na sala principal.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar o horário da reunião.'
      },
      {
        id: 75127,
        exercise_id: 7526,
        option_text: 'A reunião (será realizada amanhã 14h30) na sala principal.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão englobando tanto a ação quanto o horário.'
      },
      {
        id: 75128,
        exercise_id: 7526,
        option_text: 'A reunião será realizada amanhã(14h30)na sala principal.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75129,
        exercise_id: 7526,
        option_text: '(14h30) A reunião será realizada amanhã na sala principal.',
        is_correct: false,
        explanation: 'Incorreto! O horário deve vir após a menção do evento, não antes da frase.'
      },
      {
        id: 75130,
        exercise_id: 7526,
        option_text: 'A reunião será realizada amanhã - 14h30 - na sala principal.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7527,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma informação adicional sobre um número?',
    explanation: 'Os parênteses podem ser usados para adicionar informações sobre números.',
    difficulty: 5,
    options: [
      {
        id: 75131,
        exercise_id: 7527,
        option_text: 'A população da cidade aumentou em 15% (aproximadamente 50.000 pessoas) no último ano.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para fornecer uma informação adicional sobre o percentual mencionado.'
      },
      {
        id: 75132,
        exercise_id: 7527,
        option_text: 'A população (da cidade aumentou em 15% aproximadamente 50.000 pessoas) no último ano.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão englobando tanto o sujeito quanto a informação adicional.'
      },
      {
        id: 75133,
        exercise_id: 7527,
        option_text: 'A população da cidade aumentou em 15%(aproximadamente 50.000 pessoas)no último ano.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75134,
        exercise_id: 7527,
        option_text: '(Aproximadamente 50.000 pessoas) A população da cidade aumentou em 15% no último ano.',
        is_correct: false,
        explanation: 'Incorreto! A informação adicional deve vir após o número ao qual se refere, não antes da frase.'
      },
      {
        id: 75135,
        exercise_id: 7527,
        option_text: 'A população da cidade aumentou em 15% - aproximadamente 50.000 pessoas - no último ano.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7528,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma nota de rodapé?',
    explanation: 'Os parênteses podem ser usados para indicar notas de rodapé em textos acadêmicos.',
    difficulty: 5,
    options: [
      {
        id: 75136,
        exercise_id: 7528,
        option_text: 'Segundo o autor (1), a teoria apresentada é consistente com os dados empíricos.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar uma nota de rodapé.'
      },
      {
        id: 75137,
        exercise_id: 7528,
        option_text: 'Segundo o (autor 1), a teoria apresentada é consistente com os dados empíricos.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando incorretamente o termo "autor" junto com o número da nota.'
      },
      {
        id: 75138,
        exercise_id: 7528,
        option_text: 'Segundo o autor(1)a teoria apresentada é consistente com os dados empíricos.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75139,
        exercise_id: 7528,
        option_text: '(1) Segundo o autor, a teoria apresentada é consistente com os dados empíricos.',
        is_correct: false,
        explanation: 'Incorreto! A nota de rodapé deve vir após a menção do autor, não antes da frase.'
      },
      {
        id: 75140,
        exercise_id: 7528,
        option_text: 'Segundo o autor - 1 - a teoria apresentada é consistente com os dados empíricos.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7529,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma informação complementar sobre um local?',
    explanation: 'Os parênteses podem ser usados para adicionar informações complementares sobre locais mencionados em um texto.',
    difficulty: 5,
    options: [
      {
        id: 75141,
        exercise_id: 7529,
        option_text: 'O Museu do Louvre (Paris, França) é um dos mais visitados do mundo.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para fornecer informações sobre a localização do museu.'
      },
      {
        id: 75142,
        exercise_id: 7529,
        option_text: 'O (Museu do Louvre Paris, França) é um dos mais visitados do mundo.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão englobando tanto o nome do museu quanto sua localização.'
      },
      {
        id: 75143,
        exercise_id: 7529,
        option_text: 'O Museu do Louvre(Paris, França)é um dos mais visitados do mundo.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75144,
        exercise_id: 7529,
        option_text: '(Paris, França) O Museu do Louvre é um dos mais visitados do mundo.',
        is_correct: false,
        explanation: 'Incorreto! A informação complementar deve vir após o local a que se refere, não antes da frase.'
      },
      {
        id: 75145,
        exercise_id: 7529,
        option_text: 'O Museu do Louvre - Paris, França - é um dos mais visitados do mundo.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7530,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma tradução literal de um termo estrangeiro?',
    explanation: 'Os parênteses podem ser usados para fornecer a tradução literal de termos estrangeiros em um texto.',
    difficulty: 5,
    options: [
      {
        id: 75146,
        exercise_id: 7530,
        option_text: 'O conceito de "zeitgeist" (espírito do tempo) é fundamental para compreender o contexto histórico.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para fornecer a tradução literal do termo estrangeiro.'
      },
      {
        id: 75147,
        exercise_id: 7530,
        option_text: 'O conceito de ("zeitgeist" espírito do tempo) é fundamental para compreender o contexto histórico.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão englobando tanto o termo quanto sua tradução, mas as aspas deveriam estar fora dos parênteses.'
      },
      {
        id: 75148,
        exercise_id: 7530,
        option_text: 'O conceito de "zeitgeist"(espírito do tempo)é fundamental para compreender o contexto histórico.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75149,
        exercise_id: 7530,
        option_text: '(Espírito do tempo) O conceito de "zeitgeist" é fundamental para compreender o contexto histórico.',
        is_correct: false,
        explanation: 'Incorreto! A tradução deve vir logo após o termo estrangeiro, não antes da frase.'
      },
      {
        id: 75150,
        exercise_id: 7530,
        option_text: 'O conceito de "zeitgeist" - espírito do tempo - é fundamental para compreender o contexto histórico.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  }
];
