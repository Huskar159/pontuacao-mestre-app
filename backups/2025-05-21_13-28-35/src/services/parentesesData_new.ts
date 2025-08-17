import { Exercise } from './exerciseService';

// Exercícios do módulo Parênteses 1
export const parentesesExercicio1: Exercise[] = [
  {
    id: 7001,
    category_id: 'parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente?',
    explanation: 'Os parênteses são sinais de pontuação utilizados para intercalar no texto uma informação adicional, explicativa ou para destacar algo.',
    difficulty: 1,
    options: [
      {
        id: 70001,
        exercise_id: 7001,
        option_text: 'A Organização das Nações Unidas (ONU) foi fundada em 1945, após a Segunda Guerra Mundial.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para introduzir a sigla após o nome completo.'
      },
      {
        id: 70002,
        exercise_id: 7001,
        option_text: 'A Organização das Nações Unidas(ONU)foi fundada em 1945, após a Segunda Guerra Mundial.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 70003,
        exercise_id: 7001,
        option_text: 'A Organização das Nações Unidas )ONU( foi fundada em 1945, após a Segunda Guerra Mundial.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão invertidos.'
      },
      {
        id: 70004,
        exercise_id: 7001,
        option_text: 'A Organização das Nações Unidas (ONU foi fundada em 1945, após a Segunda Guerra Mundial.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de fechamento após a sigla.'
      },
      {
        id: 70005,
        exercise_id: 7001,
        option_text: 'A Organização das Nações Unidas ONU) foi fundada em 1945, após a Segunda Guerra Mundial.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de abertura antes da sigla.'
      }
    ]
  },
  {
    id: 7002,
    category_id: 'parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para isolar uma explicação?',
    explanation: 'Os parênteses são utilizados para isolar explicações ou comentários dentro de um texto.',
    difficulty: 1,
    options: [
      {
        id: 70006,
        exercise_id: 7002,
        option_text: 'O novo sistema operacional (que será lançado no próximo mês) promete revolucionar o mercado de tecnologia.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão isolando uma explicação sobre o lançamento do sistema operacional.'
      },
      {
        id: 70007,
        exercise_id: 7002,
        option_text: 'O novo sistema operacional que será lançado no próximo mês) promete revolucionar o mercado de tecnologia.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de abertura antes de "que".'
      },
      {
        id: 70008,
        exercise_id: 7002,
        option_text: 'O novo sistema operacional (que será lançado no próximo mês promete revolucionar o mercado de tecnologia.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de fechamento após "mês".'
      },
      {
        id: 70009,
        exercise_id: 7002,
        option_text: 'O novo sistema operacional)que será lançado no próximo mês(promete revolucionar o mercado de tecnologia.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão invertidos.'
      },
      {
        id: 70010,
        exercise_id: 7002,
        option_text: 'O novo sistema operacional - que será lançado no próximo mês - promete revolucionar o mercado de tecnologia.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travém esteja sendo usado corretamente, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7003,
    category_id: 'parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma sigla?',
    explanation: 'Os parênteses são frequentemente usados para indicar a sigla de um nome ou expressão após sua menção completa.',
    difficulty: 1,
    options: [
      {
        id: 70011,
        exercise_id: 7003,
        option_text: 'O Banco Central do Brasil (BCB) anunciou novas medidas econômicas ontem.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para introduzir a sigla após o nome completo.'
      },
      {
        id: 70012,
        exercise_id: 7003,
        option_text: 'O (BCB) Banco Central do Brasil anunciou novas medidas econômicas ontem.',
        is_correct: false,
        explanation: 'Incorreto! A sigla deve vir depois do nome completo, não antes.'
      },
      {
        id: 70013,
        exercise_id: 7003,
        option_text: 'O Banco Central do Brasil(BCB)anunciou novas medidas econômicas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 70014,
        exercise_id: 7003,
        option_text: 'O Banco Central do Brasil (BCB anunciou novas medidas econômicas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de fechamento após a sigla.'
      },
      {
        id: 70015,
        exercise_id: 7003,
        option_text: 'O Banco Central do Brasil BCB) anunciou novas medidas econômicas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de abertura antes da sigla.'
      }
    ]
  },
  {
    id: 7004,
    category_id: 'parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma data?',
    explanation: 'Os parênteses podem ser usados para isolar datas que complementam uma informação.',
    difficulty: 1,
    options: [
      {
        id: 70016,
        exercise_id: 7004,
        option_text: 'A Declaração Universal dos Direitos Humanos (1948) é um documento marco na história dos direitos humanos.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para isolar o ano da declaração.'
      },
      {
        id: 70017,
        exercise_id: 7004,
        option_text: 'A Declaração Universal dos Direitos Humanos (1948 é um documento marco na história dos direitos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de fechamento após o ano.'
      },
      {
        id: 70018,
        exercise_id: 7004,
        option_text: 'A Declaração Universal dos Direitos Humanos 1948) é um documento marco na história dos direitos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de abertura antes do ano.'
      },
      {
        id: 70019,
        exercise_id: 7004,
        option_text: 'A Declaração Universal dos Direitos Humanos)1948(é um documento marco na história dos direitos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão invertidos e falta espaço após o fechamento.'
      },
      {
        id: 70020,
        exercise_id: 7004,
        option_text: 'A Declaração Universal dos Direitos Humanos - 1948 - é um documento marco na história dos direitos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travém esteja sendo usado corretamente, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7005,
    category_id: 'parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma possibilidade alternativa?',
    explanation: 'Os parênteses podem ser usados para indicar uma possibilidade alternativa ou uma opção.',
    difficulty: 1,
    options: [
      {
        id: 70021,
        exercise_id: 7005,
        option_text: 'O(s) autor(es) deve(m) assinar o termo de responsabilidade.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar a possibilidade de singular ou plural.'
      },
      {
        id: 70022,
        exercise_id: 7005,
        option_text: 'O(s autor(es deve(m assinar o termo de responsabilidade.',
        is_correct: false,
        explanation: 'Incorreto! Faltam os parênteses de fechamento após o "s" e após o "m".'
      },
      {
        id: 70023,
        exercise_id: 7005,
        option_text: 'O)s( autor)es( deve)m( assinar o termo de responsabilidade.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão invertidos.'
      },
      {
        id: 70024,
        exercise_id: 7005,
        option_text: 'O (s) autor (es) deve (m) assinar o termo de responsabilidade.',
        is_correct: false,
        explanation: 'Incorreto! Não deve haver espaços entre a palavra e a letra entre parênteses.'
      },
      {
        id: 70025,
        exercise_id: 7005,
        option_text: 'O/s autor/es deve/m assinar o termo de responsabilidade.',
        is_correct: false,
        explanation: 'Incorreto! Embora a barra possa ser usada para indicar alternativas, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7006,
    category_id: 'parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para adicionar uma informação complementar?',
    explanation: 'Os parênteses são usados para adicionar informações complementares que não são essenciais para a compreensão do texto principal.',
    difficulty: 1,
    options: [
      {
        id: 70026,
        exercise_id: 7006,
        option_text: 'O filme (dirigido por Steven Spielberg) ganhou vários prêmios internacionais.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para adicionar uma informação complementar sobre o diretor do filme.'
      },
      {
        id: 70027,
        exercise_id: 7006,
        option_text: 'O filme (dirigido por Steven Spielberg ganhou vários prêmios internacionais.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de fechamento após o nome do diretor.'
      },
      {
        id: 70028,
        exercise_id: 7006,
        option_text: 'O filme dirigido por Steven Spielberg) ganhou vários prêmios internacionais.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de abertura antes de "dirigido".'
      },
      {
        id: 70029,
        exercise_id: 7006,
        option_text: 'O filme)dirigido por Steven Spielberg(ganhou vários prêmios internacionais.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão invertidos e faltam espaços antes e depois.'
      },
      {
        id: 70030,
        exercise_id: 7006,
        option_text: 'O filme, dirigido por Steven Spielberg, ganhou vários prêmios internacionais.',
        is_correct: false,
        explanation: 'Incorreto! Embora as vírgulas estejam sendo usadas corretamente, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7007,
    category_id: 'parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma citação bibliográfica?',
    explanation: 'Os parênteses são frequentemente usados em citações bibliográficas para indicar o autor e o ano da publicação.',
    difficulty: 1,
    options: [
      {
        id: 70031,
        exercise_id: 7007,
        option_text: 'Segundo Silva (2020), a educação é um processo contínuo de aprendizagem.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar o ano da publicação após o nome do autor.'
      },
      {
        id: 70032,
        exercise_id: 7007,
        option_text: 'Segundo Silva (2020, a educação é um processo contínuo de aprendizagem.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de fechamento após o ano.'
      },
      {
        id: 70033,
        exercise_id: 7007,
        option_text: 'Segundo Silva 2020), a educação é um processo contínuo de aprendizagem.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de abertura antes do ano.'
      },
      {
        id: 70034,
        exercise_id: 7007,
        option_text: 'Segundo Silva)2020(, a educação é um processo contínuo de aprendizagem.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão invertidos.'
      },
      {
        id: 70035,
        exercise_id: 7007,
        option_text: 'Segundo Silva - 2020 - a educação é um processo contínuo de aprendizagem.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travém esteja sendo usado para isolar o ano, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7008,
    category_id: 'parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma tradução?',
    explanation: 'Os parênteses podem ser usados para fornecer a tradução de uma palavra ou expressão em outro idioma.',
    difficulty: 1,
    options: [
      {
        id: 70036,
        exercise_id: 7008,
        option_text: 'O termo "feedback" (retorno) é muito utilizado no ambiente corporativo.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para fornecer a tradução do termo estrangeiro.'
      },
      {
        id: 70037,
        exercise_id: 7008,
        option_text: 'O termo "feedback" (retorno é muito utilizado no ambiente corporativo.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de fechamento após a tradução.'
      },
      {
        id: 70038,
        exercise_id: 7008,
        option_text: 'O termo "feedback" retorno) é muito utilizado no ambiente corporativo.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de abertura antes da tradução.'
      },
      {
        id: 70039,
        exercise_id: 7008,
        option_text: 'O termo ("feedback") retorno é muito utilizado no ambiente corporativo.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses deveriam isolar a tradução, não o termo estrangeiro.'
      },
      {
        id: 70040,
        exercise_id: 7008,
        option_text: 'O termo "feedback"(retorno)é muito utilizado no ambiente corporativo.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      }
    ]
  },
  {
    id: 7009,
    category_id: 'parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma nota explicativa?',
    explanation: 'Os parênteses podem ser usados para inserir notas explicativas que complementam a informação principal.',
    difficulty: 1,
    options: [
      {
        id: 70041,
        exercise_id: 7009,
        option_text: 'A empresa anunciou um aumento de 15% nas vendas (comparado ao mesmo período do ano anterior).',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para inserir uma nota explicativa sobre o aumento nas vendas.'
      },
      {
        id: 70042,
        exercise_id: 7009,
        option_text: 'A empresa anunciou um aumento de 15% nas vendas (comparado ao mesmo período do ano anterior.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de fechamento após a nota explicativa.'
      },
      {
        id: 70043,
        exercise_id: 7009,
        option_text: 'A empresa anunciou um aumento de 15% nas vendas comparado ao mesmo período do ano anterior).',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de abertura antes da nota explicativa.'
      },
      {
        id: 70044,
        exercise_id: 7009,
        option_text: 'A empresa anunciou um aumento de 15% nas vendas)comparado ao mesmo período do ano anterior(.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão invertidos.'
      },
      {
        id: 70045,
        exercise_id: 7009,
        option_text: 'A empresa anunciou um aumento de 15% nas vendas, comparado ao mesmo período do ano anterior.',
        is_correct: false,
        explanation: 'Incorreto! Embora a vírgula esteja sendo usada corretamente, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7010,
    category_id: 'parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para inserir um comentário do autor?',
    explanation: 'Os parênteses podem ser usados para inserir comentários pessoais do autor que não fazem parte direta do texto.',
    difficulty: 1,
    options: [
      {
        id: 70046,
        exercise_id: 7010,
        option_text: 'O político prometeu resolver todos os problemas (como se isso fosse possível!) em apenas um ano de mandato.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para inserir um comentário irônico do autor.'
      },
      {
        id: 70047,
        exercise_id: 7010,
        option_text: 'O político prometeu resolver todos os problemas (como se isso fosse possível! em apenas um ano de mandato.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de fechamento após o ponto de exclamação.'
      },
      {
        id: 70048,
        exercise_id: 7010,
        option_text: 'O político prometeu resolver todos os problemas como se isso fosse possível!) em apenas um ano de mandato.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de abertura antes do comentário.'
      },
      {
        id: 70049,
        exercise_id: 7010,
        option_text: 'O político prometeu resolver todos os problemas )como se isso fosse possível!( em apenas um ano de mandato.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão invertidos.'
      },
      {
        id: 70050,
        exercise_id: 7010,
        option_text: 'O político prometeu resolver todos os problemas - como se isso fosse possível! - em apenas um ano de mandato.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travém esteja sendo usado corretamente, a questão pede especificamente o uso de parênteses.'
      }
    ]
  }
];

// Exercícios do módulo Parênteses 2
export const parentesesExercicio2: Exercise[] = [
  {
    id: 7011,
    category_id: 'parenteses-2',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para isolar uma expressão intercalada?',
    explanation: 'Os parênteses podem ser usados para isolar expressões intercaladas no meio de uma frase.',
    difficulty: 2,
    options: [
      {
        id: 70051,
        exercise_id: 7011,
        option_text: 'O candidato, que (segundo pesquisas recentes) lidera as intenções de voto, apresentou suas propostas ontem.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para isolar uma expressão intercalada que complementa a informação.'
      },
      {
        id: 70052,
        exercise_id: 7011,
        option_text: 'O candidato (que segundo pesquisas recentes lidera) as intenções de voto, apresentou suas propostas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão interrompendo incorretamente a estrutura da oração relativa.'
      },
      {
        id: 70053,
        exercise_id: 7011,
        option_text: 'O candidato que segundo (pesquisas recentes) lidera as intenções de voto, apresentou suas propostas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando apenas parte da expressão intercalada.'
      },
      {
        id: 70054,
        exercise_id: 7011,
        option_text: 'O candidato que segundo pesquisas recentes lidera as intenções de voto, (apresentou suas propostas) ontem.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do predicado, não uma expressão intercalada.'
      },
      {
        id: 70055,
        exercise_id: 7011,
        option_text: '(O candidato que segundo pesquisas recentes lidera as intenções de voto), apresentou suas propostas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando todo o sujeito, não uma expressão intercalada.'
      }
    ]
  },
  {
    id: 7012,
    category_id: 'parenteses-2',
    question: 'Qual alternativa utiliza os parênteses corretamente para inserir uma explicação no meio da frase?',
    explanation: 'Os parênteses são usados para inserir explicações ou comentários no meio de uma frase sem interromper seu fluxo principal.',
    difficulty: 2,
    options: [
      {
        id: 70056,
        exercise_id: 7012,
        option_text: 'A vacinação (procedimento que estimula o sistema imunológico a produzir anticorpos) é essencial para a saúde pública.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para inserir uma explicação sobre o que é a vacinação.'
      },
      {
        id: 70057,
        exercise_id: 7012,
        option_text: 'A vacinação procedimento (que estimula o sistema imunológico) a produzir anticorpos é essencial para a saúde pública.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão interrompendo incorretamente a estrutura da explicação.'
      },
      {
        id: 70058,
        exercise_id: 7012,
        option_text: 'A (vacinação procedimento que estimula o sistema imunológico a produzir anticorpos) é essencial para a saúde pública.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo o termo principal junto com a explicação.'
      },
      {
        id: 70059,
        exercise_id: 7012,
        option_text: 'A vacinação procedimento que estimula o sistema imunológico a produzir anticorpos (é essencial) para a saúde pública.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do predicado, não uma explicação.'
      },
      {
        id: 70060,
        exercise_id: 7012,
        option_text: 'A vacinação procedimento que (estimula o sistema imunológico a produzir anticorpos é essencial) para a saúde pública.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando incorretamente parte da explicação e parte do predicado.'
      }
    ]
  },
  {
    id: 7013,
    category_id: 'parenteses-2',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para inserir um comentário do autor?',
    explanation: 'Os parênteses podem ser usados para inserir comentários pessoais do autor que não fazem parte direta do texto.',
    difficulty: 2,
    options: [
      {
        id: 70061,
        exercise_id: 7013,
        option_text: 'A proposta do governo (que, diga-se de passagem, não é nada inovadora) foi aprovada pelo congresso.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para inserir um comentário pessoal do autor.'
      },
      {
        id: 70062,
        exercise_id: 7013,
        option_text: 'A proposta do governo que, (diga-se de passagem), não é nada inovadora foi aprovada pelo congresso.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando apenas parte do comentário, interrompendo incorretamente a estrutura da frase.'
      },
      {
        id: 70063,
        exercise_id: 7013,
        option_text: 'A proposta (do governo que, diga-se de passagem, não é nada inovadora) foi aprovada pelo congresso.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo parte da informação principal junto com o comentário.'
      },
      {
        id: 70064,
        exercise_id: 7013,
        option_text: 'A proposta do governo que, diga-se de passagem, não é nada inovadora (foi aprovada) pelo congresso.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do predicado, não um comentário do autor.'
      },
      {
        id: 70065,
        exercise_id: 7013,
        option_text: '(A proposta do governo) que, diga-se de passagem, não é nada inovadora foi aprovada pelo congresso.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do sujeito, não um comentário do autor.'
      }
    ]
  },
  {
    id: 7014,
    category_id: 'parenteses-2',
    question: 'Qual alternativa utiliza os parênteses corretamente para inserir uma expressão explicativa?',
    explanation: 'Os parênteses podem ser usados para inserir expressões explicativas que complementam o sentido da frase.',
    difficulty: 2,
    options: [
      {
        id: 70066,
        exercise_id: 7014,
        option_text: 'Os líderes dos países do BRICS (Brasil, Rússia, Índia, China e África do Sul) reuniram-se para discutir acordos comerciais.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para inserir uma expressão explicativa que detalha quais são os países do BRICS.'
      },
      {
        id: 70067,
        exercise_id: 7014,
        option_text: 'Os líderes dos países do (BRICS Brasil, Rússia, Índia, China e África do Sul) reuniram-se para discutir acordos comerciais.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses deveriam incluir apenas a explicação, não o termo que está sendo explicado.'
      },
      {
        id: 70068,
        exercise_id: 7014,
        option_text: 'Os líderes dos países do BRICS Brasil, Rússia, Índia, (China e África do Sul) reuniram-se para discutir acordos comerciais.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando apenas parte da expressão explicativa.'
      },
      {
        id: 70069,
        exercise_id: 7014,
        option_text: 'Os líderes dos países do BRICS Brasil, Rússia, Índia, China e África do Sul (reuniram-se) para discutir acordos comerciais.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do predicado, não uma expressão explicativa.'
      },
      {
        id: 70070,
        exercise_id: 7014,
        option_text: '(Os líderes dos países do BRICS) Brasil, Rússia, Índia, China e África do Sul reuniram-se para discutir acordos comerciais.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando o sujeito, não a expressão explicativa.'
      }
    ]
  },
  {
    id: 7015,
    category_id: 'parenteses-2',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para inserir uma observação?',
    explanation: 'Os parênteses podem ser usados para inserir observações que complementam a informação principal.',
    difficulty: 2,
    options: [
      {
        id: 70071,
        exercise_id: 7015,
        option_text: 'A reunião será realizada na próxima segunda-feira (caso não haja imprevistos) às 10h da manhã.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para inserir uma observação sobre a possibilidade de mudança.'
      },
      {
        id: 70072,
        exercise_id: 7015,
        option_text: 'A reunião será realizada na próxima segunda-feira caso (não haja imprevistos) às 10h da manhã.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando apenas parte da observação, interrompendo incorretamente a estrutura da frase.'
      },
      {
        id: 70073,
        exercise_id: 7015,
        option_text: 'A reunião (será realizada na próxima segunda-feira caso não haja imprevistos) às 10h da manhã.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo parte da informação principal junto com a observação.'
      },
      {
        id: 70074,
        exercise_id: 7015,
        option_text: 'A reunião será realizada na próxima segunda-feira caso não haja imprevistos (às 10h) da manhã.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte da informação sobre o horário, não uma observação.'
      },
      {
        id: 70075,
        exercise_id: 7015,
        option_text: '(A reunião será realizada na próxima segunda-feira) caso não haja imprevistos às 10h da manhã.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte da informação principal, não uma observação.'
      }
    ]
  },
  {
    id: 7016,
    category_id: 'parenteses-2',
    question: 'Qual alternativa utiliza os parênteses corretamente para inserir uma nota de esclarecimento?',
    explanation: 'Os parênteses podem ser usados para inserir notas de esclarecimento que ajudam a compreender melhor o texto.',
    difficulty: 2,
    options: [
      {
        id: 70076,
        exercise_id: 7016,
        option_text: 'O novo medicamento (ainda em fase de testes clínicos) promete revolucionar o tratamento da doença.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para inserir uma nota de esclarecimento sobre o estágio de desenvolvimento do medicamento.'
      },
      {
        id: 70077,
        exercise_id: 7016,
        option_text: 'O novo medicamento ainda (em fase de testes clínicos) promete revolucionar o tratamento da doença.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão interrompendo incorretamente a estrutura da frase, separando o advérbio "ainda" do resto da expressão.'
      },
      {
        id: 70078,
        exercise_id: 7016,
        option_text: 'O (novo medicamento ainda em fase de testes clínicos) promete revolucionar o tratamento da doença.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo o sujeito principal junto com a nota de esclarecimento.'
      },
      {
        id: 70079,
        exercise_id: 7016,
        option_text: 'O novo medicamento ainda em fase de testes clínicos (promete) revolucionar o tratamento da doença.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando o verbo principal, não uma nota de esclarecimento.'
      },
      {
        id: 70080,
        exercise_id: 7016,
        option_text: '(O novo) medicamento ainda em fase de testes clínicos promete revolucionar o tratamento da doença.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando apenas parte do sujeito, não uma nota de esclarecimento.'
      }
    ]
  },
  {
    id: 7017,
    category_id: 'parenteses-2',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para inserir um aposto explicativo?',
    explanation: 'Os parênteses podem ser usados para inserir apostos explicativos que fornecem informações adicionais sobre um termo.',
    difficulty: 2,
    options: [
      {
        id: 70081,
        exercise_id: 7017,
        option_text: 'Machado de Assis (um dos maiores escritores brasileiros de todos os tempos) nasceu no Rio de Janeiro em 1839.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para inserir um aposto explicativo sobre Machado de Assis.'
      },
      {
        id: 70082,
        exercise_id: 7017,
        option_text: 'Machado de Assis um (dos maiores escritores brasileiros de todos os tempos) nasceu no Rio de Janeiro em 1839.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando apenas parte do aposto, interrompendo incorretamente a estrutura da frase.'
      },
      {
        id: 70083,
        exercise_id: 7017,
        option_text: '(Machado de Assis um dos maiores escritores brasileiros de todos os tempos) nasceu no Rio de Janeiro em 1839.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo o sujeito principal junto com o aposto explicativo.'
      },
      {
        id: 70084,
        exercise_id: 7017,
        option_text: 'Machado de Assis um dos maiores escritores brasileiros de todos os tempos (nasceu) no Rio de Janeiro em 1839.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando o verbo principal, não um aposto explicativo.'
      },
      {
        id: 70085,
        exercise_id: 7017,
        option_text: 'Machado de Assis um dos maiores escritores brasileiros de todos os tempos nasceu no Rio de Janeiro (em 1839).',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando apenas a data de nascimento, não um aposto explicativo sobre Machado de Assis.'
      }
    ]
  },
  {
    id: 7018,
    category_id: 'parenteses-2',
    question: 'Qual alternativa utiliza os parênteses corretamente para inserir uma informação complementar?',
    explanation: 'Os parênteses podem ser usados para inserir informações complementares que não são essenciais para a compreensão da frase principal.',
    difficulty: 2,
    options: [
      {
        id: 70086,
        exercise_id: 7018,
        option_text: 'A empresa anunciou um aumento de 15% nas vendas (o maior crescimento dos últimos cinco anos).',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para inserir uma informação complementar sobre o aumento nas vendas.'
      },
      {
        id: 70087,
        exercise_id: 7018,
        option_text: 'A empresa anunciou um aumento (de 15% nas vendas o maior crescimento dos últimos cinco anos).',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo parte da informação principal junto com a informação complementar.'
      },
      {
        id: 70088,
        exercise_id: 7018,
        option_text: 'A empresa anunciou um aumento de 15% nas vendas o maior (crescimento dos últimos) cinco anos.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando apenas parte da informação complementar, interrompendo incorretamente a estrutura da frase.'
      },
      {
        id: 70089,
        exercise_id: 7018,
        option_text: '(A empresa anunciou) um aumento de 15% nas vendas o maior crescimento dos últimos cinco anos.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do predicado principal, não uma informação complementar.'
      },
      {
        id: 70090,
        exercise_id: 7018,
        option_text: 'A empresa (anunciou um aumento de 15% nas vendas) o maior crescimento dos últimos cinco anos.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte da informação principal, não uma informação complementar.'
      }
    ]
  },
  {
    id: 7019,
    category_id: 'parenteses-2',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para inserir uma definição?',
    explanation: 'Os parênteses podem ser usados para inserir definições de termos técnicos ou pouco conhecidos.',
    difficulty: 2,
    options: [
      {
        id: 70091,
        exercise_id: 7019,
        option_text: 'A fotossíntese (processo pelo qual as plantas convertem luz solar em energia) é essencial para a vida na Terra.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para inserir uma definição do termo "fotossíntese".'
      },
      {
        id: 70092,
        exercise_id: 7019,
        option_text: 'A (fotossíntese processo pelo qual as plantas convertem luz solar em energia) é essencial para a vida na Terra.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo o termo principal junto com sua definição.'
      },
      {
        id: 70093,
        exercise_id: 7019,
        option_text: 'A fotossíntese processo pelo qual (as plantas convertem luz solar em energia) é essencial para a vida na Terra.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando apenas parte da definição, interrompendo incorretamente a estrutura da frase.'
      },
      {
        id: 70094,
        exercise_id: 7019,
        option_text: 'A fotossíntese processo pelo qual as plantas convertem luz solar em energia (é essencial) para a vida na Terra.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do predicado principal, não uma definição.'
      },
      {
        id: 70095,
        exercise_id: 7019,
        option_text: '(A fotossíntese) processo pelo qual as plantas convertem luz solar em energia é essencial para a vida na Terra.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando apenas o termo a ser definido, não a definição.'
      }
    ]
  },
  {
    id: 7020,
    category_id: 'parenteses-2',
    question: 'Qual alternativa utiliza os parênteses corretamente para inserir uma informação sobre a fonte de uma citação?',
    explanation: 'Os parênteses podem ser usados para inserir informações sobre a fonte de uma citação ou referência.',
    difficulty: 2,
    options: [
      {
        id: 70096,
        exercise_id: 7020,
        option_text: '"A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, mas em ter novos olhos" (Marcel Proust).',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para inserir a fonte da citação.'
      },
      {
        id: 70097,
        exercise_id: 7020,
        option_text: '"A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, (mas em ter novos olhos" Marcel Proust).',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão interrompendo incorretamente a citação e incluindo parte dela junto com a fonte.'
      },
      {
        id: 70098,
        exercise_id: 7020,
        option_text: '("A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, mas em ter novos olhos") Marcel Proust.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando a citação inteira, não a fonte.'
      },
      {
        id: 70099,
        exercise_id: 7020,
        option_text: '"A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, mas em ter novos olhos" Marcel (Proust).',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando apenas o sobrenome do autor, não a fonte completa.'
      },
      {
        id: 70100,
        exercise_id: 7020,
        option_text: '("A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, mas em ter novos olhos" Marcel Proust).',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando tanto a citação quanto a fonte, quando deveriam isolar apenas a fonte.'
      }
    ]
  }
];

// Exercícios do módulo Parênteses 3
export const parentesesExercicio3: Exercise[] = [
  {
    id: 7021,
    category_id: 'parenteses-3',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente em uma citação bibliográfica?',
    explanation: 'Os parênteses são usados em citações bibliográficas para indicar o autor e o ano da publicação.',
    difficulty: 3,
    options: [
      {
        id: 70101,
        exercise_id: 7021,
        option_text: 'De acordo com estudos recentes (SILVA, 2022), o aquecimento global tem se intensificado nas últimas décadas.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar a referência bibliográfica com o sobrenome do autor em maiúsculas e o ano.'
      },
      {
        id: 70102,
        exercise_id: 7021,
        option_text: 'De acordo com estudos recentes SILVA (2022), o aquecimento global tem se intensificado nas últimas décadas.',
        is_correct: false,
        explanation: 'Incorreto! O nome do autor deveria estar dentro dos parênteses junto com o ano.'
      },
      {
        id: 70103,
        exercise_id: 7021,
        option_text: 'De acordo com estudos recentes (SILVA), 2022, o aquecimento global tem se intensificado nas últimas décadas.',
        is_correct: false,
        explanation: 'Incorreto! O ano da publicação deveria estar dentro dos parênteses junto com o nome do autor.'
      },
      {
        id: 70104,
        exercise_id: 7021,
        option_text: 'De acordo com estudos recentes (SILVA 2022, o aquecimento global) tem se intensificado nas últimas décadas.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo parte do conteúdo da frase junto com a referência.'
      },
      {
        id: 70105,
        exercise_id: 7021,
        option_text: '(De acordo com estudos recentes SILVA, 2022), o aquecimento global tem se intensificado nas últimas décadas.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte da frase junto com a referência.'
      }
    ]
  },
  {
    id: 7022,
    category_id: 'parenteses-3',
    question: 'Qual alternativa utiliza os parênteses corretamente para indicar a omissão de parte de uma citação direta?',
    explanation: 'Os parênteses com reticências [...] são usados para indicar que parte do texto original foi omitida em uma citação direta.',
    difficulty: 3,
    options: [
      {
        id: 70106,
        exercise_id: 7022,
        option_text: 'Segundo o autor, "a educação é um processo contínuo (...) que se estende por toda a vida".',
        is_correct: true,
        explanation: 'Correto! Os parênteses com reticências estão sendo usados adequadamente para indicar a omissão de parte do texto original.'
      },
      {
        id: 70107,
        exercise_id: 7022,
        option_text: 'Segundo o autor, "a educação é um processo (contínuo) que se estende por toda a vida".',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão sendo usados para destacar uma palavra, não para indicar omissão.'
      },
      {
        id: 70108,
        exercise_id: 7022,
        option_text: 'Segundo o autor, "a educação é um processo contínuo (que se estende) por toda a vida".',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do texto sem indicar omissão.'
      },
      {
        id: 70109,
        exercise_id: 7022,
        option_text: 'Segundo o autor, ("a educação é um processo contínuo") que se estende por toda a vida.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte da citação, não indicando omissão.'
      },
      {
        id: 70110,
        exercise_id: 7022,
        option_text: 'Segundo o autor, "a educação é um processo contínuo ... que se estende por toda a vida".',
        is_correct: false,
        explanation: 'Incorreto! As reticências para indicar omissão em citações diretas devem estar entre parênteses.'
      }
    ]
  },
  {
    id: 7023,
    category_id: 'parenteses-3',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma fonte em uma citação direta?',
    explanation: 'Os parênteses são usados para indicar a fonte de uma citação direta, incluindo autor e ano.',
    difficulty: 3,
    options: [
      {
        id: 70111,
        exercise_id: 7023,
        option_text: '"A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, mas em ter novos olhos" (PROUST, 1923).',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar o autor e o ano da citação após o texto citado.'
      },
      {
        id: 70112,
        exercise_id: 7023,
        option_text: '"A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, mas em ter novos olhos" PROUST (1923).',
        is_correct: false,
        explanation: 'Incorreto! Tanto o autor quanto o ano deveriam estar dentro dos parênteses.'
      },
      {
        id: 70113,
        exercise_id: 7023,
        option_text: '("A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, mas em ter novos olhos") PROUST, 1923.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando a citação, não a fonte.'
      },
      {
        id: 70114,
        exercise_id: 7023,
        option_text: '"A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, mas em ter novos olhos" (PROUST) 1923.',
        is_correct: false,
        explanation: 'Incorreto! O ano deveria estar dentro dos parênteses junto com o autor.'
      },
      {
        id: 70115,
        exercise_id: 7023,
        option_text: '(PROUST, 1923) "A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, mas em ter novos olhos".',
        is_correct: false,
        explanation: 'Incorreto! A fonte deve vir após a citação, não antes.'
      }
    ]
  },
  {
    id: 7024,
    category_id: 'parenteses-3',
    question: 'Qual alternativa utiliza os parênteses corretamente para indicar uma página em uma referência bibliográfica?',
    explanation: 'Os parênteses são usados para indicar a página de uma obra citada em uma referência bibliográfica.',
    difficulty: 3,
    options: [
      {
        id: 70116,
        exercise_id: 7024,
        option_text: 'Conforme Santos (2019, p. 42), "a sustentabilidade deve ser o foco das políticas públicas atuais".',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar o ano e a página da obra citada.'
      },
      {
        id: 70117,
        exercise_id: 7024,
        option_text: 'Conforme Santos (2019), p. 42, "a sustentabilidade deve ser o foco das políticas públicas atuais".',
        is_correct: false,
        explanation: 'Incorreto! A indicação da página deveria estar dentro dos parênteses junto com o ano.'
      },
      {
        id: 70118,
        exercise_id: 7024,
        option_text: 'Conforme (Santos, 2019, p. 42), "a sustentabilidade deve ser o foco das políticas públicas atuais".',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo o nome do autor, que deveria estar fora quando citado diretamente no texto.'
      },
      {
        id: 70119,
        exercise_id: 7024,
        option_text: 'Conforme Santos 2019 (p. 42), "a sustentabilidade deve ser o foco das políticas públicas atuais".',
        is_correct: false,
        explanation: 'Incorreto! O ano deveria estar dentro dos parênteses junto com a indicação da página.'
      },
      {
        id: 70120,
        exercise_id: 7024,
        option_text: 'Conforme Santos (2019) (p. 42), "a sustentabilidade deve ser o foco das políticas públicas atuais".',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pares de parênteses separados; o ano e a página devem estar no mesmo parênteses.'
      }
    ]
  },
  {
    id: 7025,
    category_id: 'parenteses-3',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma nota explicativa em uma referência?',
    explanation: 'Os parênteses podem ser usados para inserir notas explicativas em referências bibliográficas.',
    difficulty: 3,
    options: [
      {
        id: 70121,
        exercise_id: 7025,
        option_text: 'A obra de Machado de Assis (considerado o maior escritor brasileiro) influenciou gerações de autores.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para inserir uma nota explicativa sobre Machado de Assis.'
      },
      {
        id: 70122,
        exercise_id: 7025,
        option_text: 'A obra de Machado de Assis considerado (o maior escritor brasileiro) influenciou gerações de autores.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando apenas parte da nota explicativa, separando-a incorretamente.'
      },
      {
        id: 70123,
        exercise_id: 7025,
        option_text: '(A obra de Machado de Assis) considerado o maior escritor brasileiro influenciou gerações de autores.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando o sujeito da oração, não inserindo uma nota explicativa.'
      },
      {
        id: 70124,
        exercise_id: 7025,
        option_text: 'A obra de Machado de Assis considerado o maior escritor brasileiro (influenciou) gerações de autores.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando o verbo principal, não inserindo uma nota explicativa.'
      },
      {
        id: 70125,
        exercise_id: 7025,
        option_text: 'A obra de (Machado de Assis considerado o maior escritor brasileiro) influenciou gerações de autores.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando o nome do autor junto com a nota explicativa, quando deveriam isolar apenas a nota.'
      }
    ]
  },
  {
    id: 7026,
    category_id: 'parenteses-3',
    question: 'Qual alternativa utiliza os parênteses corretamente em uma citação no sistema autor-data?',
    explanation: 'Os parênteses são usados no sistema autor-data para indicar o sobrenome do autor e o ano da publicação.',
    difficulty: 3,
    options: [
      {
        id: 70126,
        exercise_id: 7026,
        option_text: 'A teoria da relatividade revolucionou a física do século XX (EINSTEIN, 1905).',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar o sobrenome do autor em maiúsculas e o ano da publicação.'
      },
      {
        id: 70127,
        exercise_id: 7026,
        option_text: 'A teoria da relatividade revolucionou a física do século XX (Einstein, 1905).',
        is_correct: false,
        explanation: 'Incorreto! No sistema autor-data, o sobrenome do autor deve estar em maiúsculas dentro dos parênteses.'
      },
      {
        id: 70128,
        exercise_id: 7026,
        option_text: 'A teoria da relatividade (revolucionou a física do século XX) EINSTEIN, 1905.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte da informação principal, e a referência deveria estar entre parênteses.'
      },
      {
        id: 70129,
        exercise_id: 7026,
        option_text: 'A teoria da relatividade revolucionou a física do século XX EINSTEIN (1905).',
        is_correct: false,
        explanation: 'Incorreto! Tanto o sobrenome do autor quanto o ano deveriam estar dentro dos parênteses.'
      },
      {
        id: 70130,
        exercise_id: 7026,
        option_text: '(A teoria da relatividade revolucionou a física do século XX) EINSTEIN, 1905.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando a informação principal, não a referência bibliográfica.'
      }
    ]
  },
  {
    id: 7027,
    category_id: 'parenteses-3',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma tradução em uma citação?',
    explanation: 'Os parênteses podem ser usados para indicar a tradução de termos estrangeiros em citações.',
    difficulty: 3,
    options: [
      {
        id: 70131,
        exercise_id: 7027,
        option_text: 'Shakespeare usa o termo "fair play" (jogo limpo) em várias de suas obras.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar a tradução do termo estrangeiro.'
      },
      {
        id: 70132,
        exercise_id: 7027,
        option_text: 'Shakespeare usa o termo ("fair play" jogo limpo) em várias de suas obras.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses deveriam conter apenas a tradução, não o termo original junto com a tradução.'
      },
      {
        id: 70133,
        exercise_id: 7027,
        option_text: 'Shakespeare usa o termo "fair play"(jogo limpo)em várias de suas obras.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 70134,
        exercise_id: 7027,
        option_text: 'Shakespeare usa o (termo "fair play") jogo limpo em várias de suas obras.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte da expressão, não a tradução.'
      },
      {
        id: 70135,
        exercise_id: 7027,
        option_text: 'Shakespeare usa o termo "fair play" jogo limpo (em várias de suas obras).',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando o complemento da frase, não a tradução do termo.'
      }
    ]
  },
  {
    id: 7028,
    category_id: 'parenteses-3',
    question: 'Qual alternativa utiliza os parênteses corretamente para indicar uma data em uma referência bibliográfica?',
    explanation: 'Os parênteses são usados para indicar a data de publicação em referências bibliográficas.',
    difficulty: 3,
    options: [
      {
        id: 70136,
        exercise_id: 7028,
        option_text: 'A Declaração Universal dos Direitos Humanos (1948) é um marco na história da humanidade.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar o ano de publicação do documento.'
      },
      {
        id: 70137,
        exercise_id: 7028,
        option_text: 'A Declaração Universal dos Direitos Humanos(1948)é um marco na história da humanidade.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 70138,
        exercise_id: 7028,
        option_text: 'A (Declaração Universal dos Direitos Humanos 1948) é um marco na história da humanidade.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando o nome do documento junto com a data, quando deveriam isolar apenas a data.'
      },
      {
        id: 70139,
        exercise_id: 7028,
        option_text: 'A Declaração Universal dos Direitos Humanos - 1948 - é um marco na história da humanidade.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      },
      {
        id: 70140,
        exercise_id: 7028,
        option_text: 'A Declaração Universal dos Direitos Humanos é um marco na história da humanidade (1948).',
        is_correct: false,
        explanation: 'Incorreto! A data deveria estar logo após o nome do documento, não no final da frase.'
      }
    ]
  },
  {
    id: 7029,
    category_id: 'parenteses-3',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma referência a um capítulo?',
    explanation: 'Os parênteses podem ser usados para indicar o capítulo de uma obra citada.',
    difficulty: 3,
    options: [
      {
        id: 70141,
        exercise_id: 7029,
        option_text: 'Conforme discutido anteriormente (Capítulo 3), a metodologia aplicada apresentou resultados satisfatórios.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar a referência ao capítulo.'
      },
      {
        id: 70142,
        exercise_id: 7029,
        option_text: 'Conforme discutido anteriormente Capítulo (3), a metodologia aplicada apresentou resultados satisfatórios.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses deveriam incluir tanto a palavra "Capítulo" quanto o número.'
      },
      {
        id: 70143,
        exercise_id: 7029,
        option_text: 'Conforme (discutido anteriormente Capítulo 3), a metodologia aplicada apresentou resultados satisfatórios.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo parte da informação principal junto com a referência ao capítulo.'
      },
      {
        id: 70144,
        exercise_id: 7029,
        option_text: 'Conforme discutido anteriormente Capítulo 3, (a metodologia aplicada) apresentou resultados satisfatórios.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do predicado, não a referência ao capítulo.'
      },
      {
        id: 70145,
        exercise_id: 7029,
        option_text: '(Conforme discutido anteriormente) Capítulo 3, a metodologia aplicada apresentou resultados satisfatórios.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando a expressão introdutória, não a referência ao capítulo.'
      }
    ]
  },
  {
    id: 7030,
    category_id: 'parenteses-3',
    question: 'Qual alternativa utiliza os parênteses corretamente para indicar uma sigla em uma referência bibliográfica?',
    explanation: 'Os parênteses são usados para apresentar siglas após o nome completo da entidade ou termo em referências bibliográficas.',
    difficulty: 3,
    options: [
      {
        id: 70146,
        exercise_id: 7030,
        option_text: 'Segundo dados da Organização Mundial da Saúde (OMS), as doenças cardiovasculares são a principal causa de morte no mundo.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para apresentar a sigla após o nome completo da entidade.'
      },
      {
        id: 70147,
        exercise_id: 7030,
        option_text: 'Segundo dados da (Organização Mundial da Saúde) OMS, as doenças cardiovasculares são a principal causa de morte no mundo.',
        is_correct: false,
        explanation: 'Incorreto! A sigla deveria estar dentro dos parênteses, não o nome completo da entidade.'
      },
      {
        id: 70148,
        exercise_id: 7030,
        option_text: 'Segundo dados da Organização Mundial da Saúde(OMS), as doenças cardiovasculares são a principal causa de morte no mundo.',
        is_correct: false,
        explanation: 'Incorreto! Falta um espaço antes do parêntese de abertura.'
      },
      {
        id: 70149,
        exercise_id: 7030,
        option_text: 'Segundo dados da (OMS) Organização Mundial da Saúde, as doenças cardiovasculares são a principal causa de morte no mundo.',
        is_correct: false,
        explanation: 'Incorreto! A sigla deve vir depois do nome completo da entidade, não antes.'
      },
      {
        id: 70150,
        exercise_id: 7030,
        option_text: 'Segundo dados da Organização Mundial da Saúde - OMS - as doenças cardiovasculares são a principal causa de morte no mundo.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  }
];

// Exercícios do módulo Parênteses 4
export const parentesesExercicio4: Exercise[] = [
  {
    id: 7031,
    category_id: 'parenteses-4',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para adicionar informações complementares?',
    explanation: 'Os parênteses são usados para adicionar informações complementares que não são essenciais para a compreensão da frase principal.',
    difficulty: 4,
    options: [
      {
        id: 70151,
        exercise_id: 7031,
        option_text: 'O evento ocorrerá no dia 15 de maio (terça-feira) no auditório principal da universidade.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para adicionar a informação complementar sobre o dia da semana.'
      },
      {
        id: 70152,
        exercise_id: 7031,
        option_text: 'O evento ocorrerá no dia (15 de maio) terça-feira no auditório principal da universidade.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando a data, que é informação essencial, e não o complemento.'
      },
      {
        id: 70153,
        exercise_id: 7031,
        option_text: 'O evento (ocorrerá no dia 15 de maio) terça-feira no auditório principal da universidade.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte da informação principal, não um complemento.'
      },
      {
        id: 70154,
        exercise_id: 7031,
        option_text: 'O evento ocorrerá no dia 15 de maio terça-feira (no auditório principal) da universidade.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão separando incorretamente elementos que deveriam permanecer unidos.'
      },
      {
        id: 70155,
        exercise_id: 7031,
        option_text: '(O evento ocorrerá no dia 15 de maio) terça-feira no auditório principal da universidade.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando a informação principal em vez do complemento.'
      }
    ]
  },
  {
    id: 7032,
    category_id: 'parenteses-4',
    question: 'Qual alternativa utiliza os parênteses corretamente para fornecer dados adicionais?',
    explanation: 'Os parênteses são usados para fornecer dados adicionais como números, datas ou quantidades que complementam a informação principal.',
    difficulty: 4,
    options: [
      {
        id: 70156,
        exercise_id: 7032,
        option_text: 'A população da cidade aumentou significativamente nos últimos anos (de 50.000 para 75.000 habitantes).',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para fornecer dados numéricos adicionais que complementam a informação.'
      },
      {
        id: 70157,
        exercise_id: 7032,
        option_text: 'A população da cidade (aumentou significativamente) nos últimos anos de 50.000 para 75.000 habitantes.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do predicado, não os dados adicionais.'
      },
      {
        id: 70158,
        exercise_id: 7032,
        option_text: 'A população da cidade aumentou significativamente nos últimos anos de (50.000) para 75.000 habitantes.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando apenas parte dos dados numéricos.'
      },
      {
        id: 70159,
        exercise_id: 7032,
        option_text: '(A população da cidade aumentou significativamente nos últimos anos) de 50.000 para 75.000 habitantes.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando a informação principal em vez dos dados adicionais.'
      },
      {
        id: 70160,
        exercise_id: 7032,
        option_text: 'A população da cidade aumentou significativamente nos últimos anos de 50.000 para 75.000 (habitantes).',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando apenas a unidade de medida, não os dados adicionais completos.'
      }
    ]
  },
  {
    id: 7033,
    category_id: 'parenteses-4',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para adicionar uma informação estatística?',
    explanation: 'Os parênteses são usados para adicionar informações estatísticas que complementam a informação principal.',
    difficulty: 4,
    options: [
      {
        id: 70161,
        exercise_id: 7033,
        option_text: 'A maioria dos brasileiros (cerca de 85%) considera importante a preservação do meio ambiente.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para adicionar a informação estatística que complementa a afirmação.'
      },
      {
        id: 70162,
        exercise_id: 7033,
        option_text: 'A maioria dos brasileiros cerca de (85%) considera importante a preservação do meio ambiente.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses deveriam incluir a expressão "cerca de" junto com o percentual.'
      },
      {
        id: 70163,
        exercise_id: 7033,
        option_text: 'A (maioria dos brasileiros cerca de 85%) considera importante a preservação do meio ambiente.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo parte da informação principal junto com a informação estatística.'
      },
      {
        id: 70164,
        exercise_id: 7033,
        option_text: 'A maioria dos brasileiros cerca de 85% (considera importante) a preservação do meio ambiente.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do predicado, não a informação estatística.'
      },
      {
        id: 70165,
        exercise_id: 7033,
        option_text: '(A maioria dos brasileiros) cerca de 85% considera importante a preservação do meio ambiente.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do sujeito, não a informação estatística.'
      }
    ]
  },
  {
    id: 7034,
    category_id: 'parenteses-4',
    question: 'Qual alternativa utiliza os parênteses corretamente para adicionar uma informação sobre localização?',
    explanation: 'Os parênteses são usados para adicionar informações sobre localização que complementam a informação principal.',
    difficulty: 4,
    options: [
      {
        id: 70166,
        exercise_id: 7034,
        option_text: 'O Rio Amazonas (que nasce no Peru) é o maior rio do mundo em volume de água.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para adicionar a informação sobre a localização da nascente do rio.'
      },
      {
        id: 70167,
        exercise_id: 7034,
        option_text: 'O Rio Amazonas que (nasce no Peru) é o maior rio do mundo em volume de água.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão interrompendo incorretamente a estrutura da oração relativa.'
      },
      {
        id: 70168,
        exercise_id: 7034,
        option_text: 'O (Rio Amazonas que nasce no Peru) é o maior rio do mundo em volume de água.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo o sujeito principal junto com a informação sobre localização.'
      },
      {
        id: 70169,
        exercise_id: 7034,
        option_text: 'O Rio Amazonas que nasce no Peru (é o maior rio) do mundo em volume de água.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do predicado, não a informação sobre localização.'
      },
      {
        id: 70170,
        exercise_id: 7034,
        option_text: '(O Rio Amazonas) que nasce no Peru é o maior rio do mundo em volume de água.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando apenas o nome do rio, não a informação sobre localização.'
      }
    ]
  },
  {
    id: 7035,
    category_id: 'parenteses-4',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para adicionar uma informação temporal?',
    explanation: 'Os parênteses são usados para adicionar informações temporais que complementam a informação principal.',
    difficulty: 4,
    options: [
      {
        id: 70171,
        exercise_id: 7035,
        option_text: 'A Segunda Guerra Mundial (1939-1945) foi um dos conflitos mais devastadores da história.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para adicionar a informação sobre o período do conflito.'
      },
      {
        id: 70172,
        exercise_id: 7035,
        option_text: 'A Segunda Guerra Mundial 1939-(1945) foi um dos conflitos mais devastadores da história.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando apenas parte da informação temporal.'
      },
      {
        id: 70173,
        exercise_id: 7035,
        option_text: 'A (Segunda Guerra Mundial 1939-1945) foi um dos conflitos mais devastadores da história.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo o nome do evento junto com a informação temporal.'
      },
      {
        id: 70174,
        exercise_id: 7035,
        option_text: 'A Segunda Guerra Mundial 1939-1945 (foi um dos conflitos) mais devastadores da história.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do predicado, não a informação temporal.'
      },
      {
        id: 70175,
        exercise_id: 7035,
        option_text: '(A Segunda Guerra Mundial) 1939-1945 foi um dos conflitos mais devastadores da história.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando o nome do evento, não a informação temporal.'
      }
    ]
  },
  {
    id: 7036,
    category_id: 'parenteses-4',
    question: 'Qual alternativa utiliza os parênteses corretamente para adicionar uma informação sobre quantidade?',
    explanation: 'Os parênteses são usados para adicionar informações sobre quantidades que complementam a informação principal.',
    difficulty: 4,
    options: [
      {
        id: 70176,
        exercise_id: 7036,
        option_text: 'Os participantes do evento (mais de 500 pessoas) lotaram o auditório principal.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para adicionar a informação sobre a quantidade de participantes.'
      },
      {
        id: 70177,
        exercise_id: 7036,
        option_text: 'Os participantes do evento mais de (500 pessoas) lotaram o auditório principal.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses deveriam incluir a expressão "mais de" junto com o número.'
      },
      {
        id: 70178,
        exercise_id: 7036,
        option_text: 'Os (participantes do evento mais de 500 pessoas) lotaram o auditório principal.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo o sujeito principal junto com a informação sobre quantidade.'
      },
      {
        id: 70179,
        exercise_id: 7036,
        option_text: 'Os participantes do evento mais de 500 pessoas (lotaram) o auditório principal.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando o verbo, não a informação sobre quantidade.'
      },
      {
        id: 70180,
        exercise_id: 7036,
        option_text: '(Os participantes do evento) mais de 500 pessoas lotaram o auditório principal.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do sujeito, não a informação sobre quantidade.'
      }
    ]
  },
  {
    id: 7037,
    category_id: 'parenteses-4',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para adicionar uma informação sobre preço?',
    explanation: 'Os parênteses são usados para adicionar informações sobre preços que complementam a informação principal.',
    difficulty: 4,
    options: [
      {
        id: 70181,
        exercise_id: 7037,
        option_text: 'O novo smartphone (custando R$ 3.500,00) será lançado no próximo mês.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para adicionar a informação sobre o preço do produto.'
      },
      {
        id: 70182,
        exercise_id: 7037,
        option_text: 'O novo smartphone custando (R$ 3.500,00) será lançado no próximo mês.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses deveriam incluir o gerundio "custando" junto com o valor.'
      },
      {
        id: 70183,
        exercise_id: 7037,
        option_text: 'O (novo smartphone custando R$ 3.500,00) será lançado no próximo mês.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo o sujeito principal junto com a informação sobre preço.'
      },
      {
        id: 70184,
        exercise_id: 7037,
        option_text: 'O novo smartphone custando R$ 3.500,00 (será lançado) no próximo mês.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do predicado, não a informação sobre preço.'
      },
      {
        id: 70185,
        exercise_id: 7037,
        option_text: '(O novo smartphone) custando R$ 3.500,00 será lançado no próximo mês.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando o sujeito, não a informação sobre preço.'
      }
    ]
  },
  {
    id: 7038,
    category_id: 'parenteses-4',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para adicionar uma informação sobre medidas?',
    explanation: 'Os parênteses são usados para adicionar informações sobre medidas que complementam a informação principal.',
    difficulty: 4,
    options: [
      {
        id: 70186,
        exercise_id: 7038,
        option_text: 'O novo edifício (com 50 metros de altura) será inaugurado no próximo mês.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para adicionar a informação sobre a altura do edifício.'
      },
      {
        id: 70187,
        exercise_id: 7038,
        option_text: 'O novo edifício com (50 metros de altura) será inaugurado no próximo mês.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses deveriam incluir a preposição "com" junto com a medida.'
      },
      {
        id: 70188,
        exercise_id: 7038,
        option_text: 'O (novo edifício com 50 metros de altura) será inaugurado no próximo mês.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo o sujeito principal junto com a informação sobre medida.'
      },
      {
        id: 70189,
        exercise_id: 7038,
        option_text: 'O novo edifício com 50 metros de altura (será inaugurado) no próximo mês.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do predicado, não a informação sobre medida.'
      },
      {
        id: 70190,
        exercise_id: 7038,
        option_text: '(O novo edifício) com 50 metros de altura será inaugurado no próximo mês.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do sujeito, não a informação sobre medida.'
      }
    ]
  },
  {
    id: 7039,
    category_id: 'parenteses-4',
    question: 'Qual alternativa utiliza os parênteses corretamente para adicionar uma informação sobre capacidade?',
    explanation: 'Os parênteses são usados para adicionar informações sobre capacidade que complementam a informação principal.',
    difficulty: 4,
    options: [
      {
        id: 70191,
        exercise_id: 7039,
        option_text: 'O novo estádio (com capacidade para 60 mil pessoas) será palco da final do campeonato.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para adicionar a informação sobre a capacidade do estádio.'
      },
      {
        id: 70192,
        exercise_id: 7039,
        option_text: 'O novo estádio com (capacidade para 60 mil pessoas) será palco da final do campeonato.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses deveriam incluir a preposição "com" junto com a informação sobre capacidade.'
      },
      {
        id: 70193,
        exercise_id: 7039,
        option_text: 'O (novo estádio com capacidade para 60 mil pessoas) será palco da final do campeonato.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo o sujeito principal junto com a informação sobre capacidade.'
      },
      {
        id: 70194,
        exercise_id: 7039,
        option_text: 'O novo estádio com capacidade para 60 mil pessoas (será palco) da final do campeonato.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do predicado, não a informação sobre capacidade.'
      },
      {
        id: 70195,
        exercise_id: 7039,
        option_text: '(O novo estádio) com capacidade para 60 mil pessoas será palco da final do campeonato.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do sujeito, não a informação sobre capacidade.'
      }
    ]
  },
  {
    id: 7040,
    category_id: 'parenteses-4',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para adicionar uma informação sobre distância?',
    explanation: 'Os parênteses são usados para adicionar informações sobre distâncias que complementam a informação principal.',
    difficulty: 4,
    options: [
      {
        id: 70196,
        exercise_id: 7040,
        option_text: 'A cidade de Ouro Preto (a 100 km de Belo Horizonte) é um importante destino turístico de Minas Gerais.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para adicionar a informação sobre a distância entre as cidades.'
      },
      {
        id: 70197,
        exercise_id: 7040,
        option_text: 'A cidade de Ouro Preto a (100 km de Belo Horizonte) é um importante destino turístico de Minas Gerais.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses deveriam incluir a preposição "a" junto com a informação sobre distância.'
      },
      {
        id: 70198,
        exercise_id: 7040,
        option_text: 'A (cidade de Ouro Preto a 100 km de Belo Horizonte) é um importante destino turístico de Minas Gerais.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo o sujeito principal junto com a informação sobre distância.'
      },
      {
        id: 70199,
        exercise_id: 7040,
        option_text: 'A cidade de Ouro Preto a 100 km de Belo Horizonte (é um importante) destino turístico de Minas Gerais.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do predicado, não a informação sobre distância.'
      },
      {
        id: 70200,
        exercise_id: 7040,
        option_text: '(A cidade de Ouro Preto) a 100 km de Belo Horizonte é um importante destino turístico de Minas Gerais.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do sujeito, não a informação sobre distância.'
      }
    ]
  }
];

// Exercícios do módulo Parênteses 5
export const parentesesExercicio5: Exercise[] = [
  {
    id: 7041,
    category_id: 'parenteses-5',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma possibilidade alternativa?',
    explanation: 'Os parênteses podem ser usados para indicar uma possibilidade alternativa ou uma opção.',
    difficulty: 5,
    options: [
      {
        id: 70201,
        exercise_id: 7041,
        option_text: 'Favor enviar o(s) documento(s) solicitado(s) para o departamento financeiro.',
        is_correct: true,
        explanation: 'Correto! Os parênteses com "s" estão sendo usados adequadamente para indicar a possibilidade de singular ou plural.'
      },
      {
        id: 70202,
        exercise_id: 7041,
        option_text: 'Favor enviar o(s documento(s) solicitado(s) para o departamento financeiro.',
        is_correct: false,
        explanation: 'Incorreto! O primeiro parênteses está mal posicionado, deveria incluir apenas o "s".'
      },
      {
        id: 70203,
        exercise_id: 7041,
        option_text: 'Favor enviar (o)s documento(s) solicitado(s) para o departamento financeiro.',
        is_correct: false,
        explanation: 'Incorreto! O primeiro parênteses está isolando incorretamente o artigo em vez de apenas o "s".'
      },
      {
        id: 70204,
        exercise_id: 7041,
        option_text: 'Favor enviar o(s) documento(s) (solicitado)(s) para o departamento financeiro.',
        is_correct: false,
        explanation: 'Incorreto! O último par de parênteses está incorreto, deveria ser solicitado(s).'
      },
      {
        id: 70205,
        exercise_id: 7041,
        option_text: 'Favor (enviar) o(s) documento(s) solicitado(s) para o departamento financeiro.',
        is_correct: false,
        explanation: 'Incorreto! O primeiro par de parênteses está isolando o verbo, que não é uma possibilidade alternativa.'
      }
    ]
  },
  {
    id: 7042,
    category_id: 'parenteses-5',
    question: 'Qual alternativa utiliza os parênteses corretamente para indicar um comentário irônico?',
    explanation: 'Os parênteses podem ser usados para inserir comentários irônicos ou humorísticos em um texto.',
    difficulty: 5,
    options: [
      {
        id: 70206,
        exercise_id: 7042,
        option_text: 'O palestrante, um especialista (segundo ele mesmo) no assunto, falou por duas horas.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para inserir um comentário irônico sobre a autodenominação do palestrante.'
      },
      {
        id: 70207,
        exercise_id: 7042,
        option_text: 'O palestrante, um (especialista) segundo ele mesmo no assunto, falou por duas horas.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando apenas a palavra "especialista", não o comentário irônico completo.'
      },
      {
        id: 70208,
        exercise_id: 7042,
        option_text: 'O palestrante, (um especialista segundo ele mesmo) no assunto, falou por duas horas.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo parte da informação principal junto com o comentário irônico.'
      },
      {
        id: 70209,
        exercise_id: 7042,
        option_text: 'O palestrante, um especialista segundo ele mesmo (no assunto), falou por duas horas.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando "no assunto", que não é o comentário irônico.'
      },
      {
        id: 70210,
        exercise_id: 7042,
        option_text: '(O palestrante), um especialista segundo ele mesmo no assunto, falou por duas horas.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando o sujeito da oração, não inserindo um comentário irônico.'
      }
    ]
  },
  {
    id: 7043,
    category_id: 'parenteses-5',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma opção de gênero?',
    explanation: 'Os parênteses podem ser usados para indicar opções de gênero em textos formais.',
    difficulty: 5,
    options: [
      {
        id: 70211,
        exercise_id: 7043,
        option_text: 'O(a) candidato(a) deverá apresentar-se munido(a) de documento oficial com foto.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar a possibilidade de gênero masculino ou feminino.'
      },
      {
        id: 70212,
        exercise_id: 7043,
        option_text: 'O (a) candidato (a) deverá apresentar-se munido (a) de documento oficial com foto.',
        is_correct: false,
        explanation: 'Incorreto! Não deve haver espaço entre o artigo ou substantivo e a letra entre parênteses.'
      },
      {
        id: 70213,
        exercise_id: 7043,
        option_text: '(O)a candidat(o)a deverá apresentar-se munid(o)a de documento oficial com foto.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão posicionados incorretamente, isolando letras que não representam opções de gênero.'
      },
      {
        id: 70214,
        exercise_id: 7043,
        option_text: 'O(a candidato)(a) deverá apresentar-se munido(a) de documento oficial com foto.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão mal posicionados, separando incorretamente as palavras.'
      },
      {
        id: 70215,
        exercise_id: 7043,
        option_text: 'O/a candidato/a deverá apresentar-se munido/a de documento oficial com foto.',
        is_correct: false,
        explanation: 'Incorreto! Embora a barra possa ser usada para indicar opções de gênero, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7044,
    category_id: 'parenteses-5',
    question: 'Qual alternativa utiliza os parênteses corretamente para indicar uma forma abreviada?',
    explanation: 'Os parênteses podem ser usados para indicar formas abreviadas de palavras ou expressões.',
    difficulty: 5,
    options: [
      {
        id: 70216,
        exercise_id: 7044,
        option_text: 'A Organização das Nações Unidas (ONU) foi fundada em 1945, após o fim da Segunda Guerra Mundial.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar a forma abreviada da organização.'
      },
      {
        id: 70217,
        exercise_id: 7044,
        option_text: 'A (Organização das Nações Unidas) ONU foi fundada em 1945, após o fim da Segunda Guerra Mundial.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses deveriam conter a sigla, não o nome completo da organização.'
      },
      {
        id: 70218,
        exercise_id: 7044,
        option_text: 'A Organização das Nações Unidas(ONU)foi fundada em 1945, após o fim da Segunda Guerra Mundial.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 70219,
        exercise_id: 7044,
        option_text: 'A Organização das Nações Unidas - ONU - foi fundada em 1945, após o fim da Segunda Guerra Mundial.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      },
      {
        id: 70220,
        exercise_id: 7044,
        option_text: 'A (ONU) Organização das Nações Unidas foi fundada em 1945, após o fim da Segunda Guerra Mundial.',
        is_correct: false,
        explanation: 'Incorreto! A sigla deve vir depois do nome completo, não antes.'
      }
    ]
  },
  {
    id: 7045,
    category_id: 'parenteses-5',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma opção num formulário?',
    explanation: 'Os parênteses podem ser usados para indicar opções a serem marcadas em formulários.',
    difficulty: 5,
    options: [
      {
        id: 70221,
        exercise_id: 7045,
        option_text: 'Estado civil: ( ) Solteiro(a) ( ) Casado(a) ( ) Divorciado(a) ( ) Viúvo(a)',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar opções a serem marcadas em um formulário.'
      },
      {
        id: 70222,
        exercise_id: 7045,
        option_text: 'Estado civil: () Solteiro(a) () Casado(a) () Divorciado(a) () Viúvo(a)',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços entre os parênteses vazios e as opções.'
      },
      {
        id: 70223,
        exercise_id: 7045,
        option_text: 'Estado civil: ( Solteiro(a) ) ( Casado(a) ) ( Divorciado(a) ) ( Viúvo(a) )',
        is_correct: false,
        explanation: 'Incorreto! As opções estão dentro dos parênteses, quando deveriam estar fora.'
      },
      {
        id: 70224,
        exercise_id: 7045,
        option_text: 'Estado civil: [  ] Solteiro(a) [  ] Casado(a) [  ] Divorciado(a) [  ] Viúvo(a)',
        is_correct: false,
        explanation: 'Incorreto! Embora os colchetes possam ser usados em formulários, a questão pede especificamente o uso de parênteses.'
      },
      {
        id: 70225,
        exercise_id: 7045,
        option_text: 'Estado civil: (X) Solteiro(a) ( ) Casado(a) ( ) Divorciado(a) ( ) Viúvo(a)',
        is_correct: false,
        explanation: 'Incorreto! A questão pede o uso correto dos parênteses para indicar opções, não para mostrar uma opção já marcada.'
      }
    ]
  },
  {
    id: 7046,
    category_id: 'parenteses-5',
    question: 'Qual alternativa utiliza os parênteses corretamente para indicar uma nota de rodapé?',
    explanation: 'Os parênteses podem ser usados para indicar notas de rodapé em textos acadêmicos.',
    difficulty: 5,
    options: [
      {
        id: 70226,
        exercise_id: 7046,
        option_text: 'Segundo o autor(1), a teoria apresentada revolucionou o campo de estudos.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar uma nota de rodapé.'
      },
      {
        id: 70227,
        exercise_id: 7046,
        option_text: 'Segundo o autor (1, a teoria apresentada revolucionou o campo de estudos.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de fechamento após o número da nota.'
      },
      {
        id: 70228,
        exercise_id: 7046,
        option_text: 'Segundo o (autor)1, a teoria apresentada revolucionou o campo de estudos.',
        is_correct: false,
        explanation: 'Incorreto! O número da nota de rodapé deve estar dentro dos parênteses, não fora.'
      },
      {
        id: 70229,
        exercise_id: 7046,
        option_text: 'Segundo o autor[1], a teoria apresentada revolucionou o campo de estudos.',
        is_correct: false,
        explanation: 'Incorreto! Embora os colchetes possam ser usados para notas em alguns estilos, a questão pede especificamente o uso de parênteses.'
      },
      {
        id: 70230,
        exercise_id: 7046,
        option_text: 'Segundo o autor 1), a teoria apresentada revolucionou o campo de estudos.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de abertura antes do número da nota.'
      }
    ]
  },
  {
    id: 7047,
    category_id: 'parenteses-5',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma equação matemática?',
    explanation: 'Os parênteses são usados em equações matemáticas para agrupar termos e indicar a ordem das operações.',
    difficulty: 5,
    options: [
      {
        id: 70231,
        exercise_id: 7047,
        option_text: 'O resultado da expressão 2 x (3 + 4) é igual a 14.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para agrupar a soma que deve ser feita antes da multiplicação.'
      },
      {
        id: 70232,
        exercise_id: 7047,
        option_text: 'O resultado da expressão 2 x 3 + 4) é igual a 14.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de abertura antes do número 3.'
      },
      {
        id: 70233,
        exercise_id: 7047,
        option_text: 'O resultado da expressão 2 x (3 + 4 é igual a 14.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de fechamento após o número 4.'
      },
      {
        id: 70234,
        exercise_id: 7047,
        option_text: 'O resultado da expressão (2 x 3) + 4 é igual a 14.',
        is_correct: false,
        explanation: 'Incorreto! Embora o uso dos parênteses esteja correto, o resultado da expressão (2 x 3) + 4 é 10, não 14.'
      },
      {
        id: 70235,
        exercise_id: 7047,
        option_text: 'O resultado da expressão 2 x [3 + 4] é igual a 14.',
        is_correct: false,
        explanation: 'Incorreto! Embora os colchetes possam ser usados em expressões matemáticas, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7048,
    category_id: 'parenteses-5',
    question: 'Qual alternativa utiliza os parênteses corretamente para indicar uma observação em um manual de instruções?',
    explanation: 'Os parênteses podem ser usados em manuais de instruções para adicionar observações importantes.',
    difficulty: 5,
    options: [
      {
        id: 70236,
        exercise_id: 7048,
        option_text: 'Conecte o cabo de alimentação à tomada (certifique-se de que a voltagem seja compatível).',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para adicionar uma observação importante sobre a voltagem.'
      },
      {
        id: 70237,
        exercise_id: 7048,
        option_text: 'Conecte o cabo de alimentação (certifique-se de que a voltagem seja compatível) à tomada.',
        is_correct: false,
        explanation: 'Incorreto! A observação está interrompendo a instrução principal, quando deveria vir ao final.'
      },
      {
        id: 70238,
        exercise_id: 7048,
        option_text: '(Conecte o cabo de alimentação à tomada) certifique-se de que a voltagem seja compatível.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando a instrução principal, não a observação.'
      },
      {
        id: 70239,
        exercise_id: 7048,
        option_text: 'Conecte o cabo de alimentação à tomada certifique-se (de que a voltagem seja compatível).',
        is_correct: false,
        explanation: 'Incorreto! Falta pontuação entre a instrução principal e a observação, e os parênteses estão isolando apenas parte da observação.'
      },
      {
        id: 70240,
        exercise_id: 7048,
        option_text: 'Conecte o cabo de alimentação à tomada - certifique-se de que a voltagem seja compatível.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para adicionar observações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7049,
    category_id: 'parenteses-5',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma pronunúncia?',
    explanation: 'Os parênteses podem ser usados para indicar a pronúncia de palavras estrangeiras ou pouco conhecidas.',
    difficulty: 5,
    options: [
      {
        id: 70241,
        exercise_id: 7049,
        option_text: 'A palavra "software" (pronuncia-se "sóftwer") é um termo em inglês muito usado na informática.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar a pronúncia da palavra estrangeira.'
      },
      {
        id: 70242,
        exercise_id: 7049,
        option_text: 'A palavra ("software" pronuncia-se "sóftwer") é um termo em inglês muito usado na informática.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo a palavra junto com sua pronúncia, quando deveriam isolar apenas a pronúncia.'
      },
      {
        id: 70243,
        exercise_id: 7049,
        option_text: 'A palavra "software" pronuncia-se ("sóftwer") é um termo em inglês muito usado na informática.',
        is_correct: false,
        explanation: 'Incorreto! Falta pontuação entre o verbo "pronuncia-se" e a pronúncia.'
      },
      {
        id: 70244,
        exercise_id: 7049,
        option_text: 'A palavra "software" (pronuncia-se "sóftwer" é um termo em inglês muito usado na informática.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de fechamento após a pronúncia.'
      },
      {
        id: 70245,
        exercise_id: 7049,
        option_text: 'A palavra "software" - pronuncia-se "sóftwer" - é um termo em inglês muito usado na informática.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para adicionar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7050,
    category_id: 'parenteses-5',
    question: 'Qual alternativa utiliza os parênteses corretamente para indicar um resultado em uma operação matemática?',
    explanation: 'Os parênteses podem ser usados para indicar o resultado de uma operação matemática.',
    difficulty: 5,
    options: [
      {
        id: 70246,
        exercise_id: 7050,
        option_text: 'A soma de 15 + 27 = (42) está correta.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para destacar o resultado da operação matemática.'
      },
      {
        id: 70247,
        exercise_id: 7050,
        option_text: 'A soma de (15 + 27) = 42 está correta.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando a operação, não o resultado.'
      },
      {
        id: 70248,
        exercise_id: 7050,
        option_text: 'A soma de 15 + 27 = 42) está correta.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parêntese de abertura antes do resultado.'
      },
      {
        id: 70249,
        exercise_id: 7050,
        option_text: 'A soma de 15 + 27 (= 42) está correta.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo o sinal de igualdade junto com o resultado.'
      },
      {
        id: 70250,
        exercise_id: 7050,
        option_text: 'A soma de 15 + 27 = [42] está correta.',
        is_correct: false,
        explanation: 'Incorreto! Embora os colchetes possam ser usados para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  }
];

// Exercícios da prova final de Parênteses
export const provaParenteses: Exercise[] = [
  {
    id: 7501,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para inserir uma informação adicional?',
    explanation: 'Os parênteses são usados para inserir informações adicionais ou explicativas que não são essenciais para a compreensão da frase principal.',
    difficulty: 5,
    options: [
      {
        id: 75001,
        exercise_id: 7501,
        option_text: 'O presidente (eleito em outubro do ano passado) anunciou novas medidas econômicas ontem.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para inserir uma informação adicional sobre o presidente.'
      },
      {
        id: 75002,
        exercise_id: 7501,
        option_text: 'O presidente eleito (em outubro do ano passado anunciou) novas medidas econômicas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão separando incorretamente elementos da frase que deveriam permanecer unidos.'
      },
      {
        id: 75003,
        exercise_id: 7501,
        option_text: 'O (presidente eleito em outubro do ano passado) anunciou novas medidas econômicas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando todo o sujeito, não apenas a informação adicional.'
      },
      {
        id: 75004,
        exercise_id: 7501,
        option_text: 'O presidente eleito em outubro do ano passado (anunciou novas medidas) econômicas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do predicado, não uma informação adicional.'
      },
      {
        id: 75005,
        exercise_id: 7501,
        option_text: '(O presidente) eleito em outubro do ano passado anunciou novas medidas econômicas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando apenas parte do sujeito, não uma informação adicional.'
      }
    ]
  },
  {
    id: 7502,
    category_id: 'prova-parenteses',
    question: 'Qual alternativa utiliza os parênteses corretamente para indicar uma sigla?',
    explanation: 'Os parênteses são usados para apresentar siglas após o nome completo da entidade ou termo.',
    difficulty: 5,
    options: [
      {
        id: 75006,
        exercise_id: 7502,
        option_text: 'A Organização Mundial da Saúde (OMS) emitiu um alerta sobre a nova doença.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para introduzir a sigla após o nome completo.'
      },
      {
        id: 75007,
        exercise_id: 7502,
        option_text: 'A (Organização Mundial da Saúde) OMS emitiu um alerta sobre a nova doença.',
        is_correct: false,
        explanation: 'Incorreto! A sigla deveria estar dentro dos parênteses, não fora.'
      },
      {
        id: 75008,
        exercise_id: 7502,
        option_text: 'A Organização Mundial da Saúde(OMS)emitiu um alerta sobre a nova doença.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75009,
        exercise_id: 7502,
        option_text: 'A (OMS) Organização Mundial da Saúde emitiu um alerta sobre a nova doença.',
        is_correct: false,
        explanation: 'Incorreto! A sigla deve vir depois do nome completo, não antes.'
      },
      {
        id: 75010,
        exercise_id: 7502,
        option_text: 'A Organização Mundial da Saúde - OMS - emitiu um alerta sobre a nova doença.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7503,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma data?',
    explanation: 'Os parênteses são frequentemente usados para indicar datas que complementam a informação principal.',
    difficulty: 5,
    options: [
      {
        id: 75011,
        exercise_id: 7503,
        option_text: 'A Declaração Universal dos Direitos Humanos (1948) é um documento marco na história dos direitos humanos.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar o ano da Declaração.'
      },
      {
        id: 75012,
        exercise_id: 7503,
        option_text: 'A Declaração (Universal dos Direitos Humanos 1948) é um documento marco na história dos direitos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo parte do nome oficial junto com a data.'
      },
      {
        id: 75013,
        exercise_id: 7503,
        option_text: 'A Declaração Universal dos Direitos Humanos(1948)é um documento marco na história dos direitos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75014,
        exercise_id: 7503,
        option_text: 'A (Declaração Universal dos Direitos Humanos 1948) é um documento marco na história dos direitos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando todo o sujeito junto com a data.'
      },
      {
        id: 75015,
        exercise_id: 7503,
        option_text: 'A Declaração Universal dos Direitos Humanos - 1948 - é um documento marco na história dos direitos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7504,
    category_id: 'prova-parenteses',
    question: 'Qual alternativa utiliza os parênteses corretamente para fornecer uma tradução?',
    explanation: 'Os parênteses podem ser usados para fornecer a tradução de uma palavra ou expressão em outro idioma.',
    difficulty: 5,
    options: [
      {
        id: 75016,
        exercise_id: 7504,
        option_text: 'O termo "deadline" (prazo final) é muito utilizado no ambiente corporativo.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para fornecer a tradução do termo estrangeiro.'
      },
      {
        id: 75017,
        exercise_id: 7504,
        option_text: 'O termo ("deadline" prazo final) é muito utilizado no ambiente corporativo.',
        is_correct: false,
        explanation: 'Incorreto! A tradução deve vir entre parênteses após o termo estrangeiro.'
      },
      {
        id: 75018,
        exercise_id: 7504,
        option_text: 'O termo "deadline"(prazo final)é muito utilizado no ambiente corporativo.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75019,
        exercise_id: 7504,
        option_text: 'O termo ("deadline") prazo final é muito utilizado no ambiente corporativo.',
        is_correct: false,
        explanation: 'Incorreto! A tradução deve estar dentro dos parênteses, não o termo estrangeiro.'
      },
      {
        id: 75020,
        exercise_id: 7504,
        option_text: 'O termo "deadline" - prazo final - é muito utilizado no ambiente corporativo.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7505,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma possibilidade alternativa?',
    explanation: 'Os parênteses podem ser usados para indicar uma possibilidade alternativa ou uma opção.',
    difficulty: 5,
    options: [
      {
        id: 75021,
        exercise_id: 7505,
        option_text: 'O(a) candidato(a) deve apresentar seu documento de identidade no dia da prova.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar a possibilidade de gênero masculino ou feminino.'
      },
      {
        id: 75022,
        exercise_id: 7505,
        option_text: 'O (a) candidato (a) deve apresentar seu documento de identidade no dia da prova.',
        is_correct: false,
        explanation: 'Incorreto! Não deve haver espaço entre o artigo e a letra entre parênteses.'
      },
      {
        id: 75023,
        exercise_id: 7505,
        option_text: '(O)a candidat(o)a deve apresentar seu documento de identidade no dia da prova.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão posicionados incorretamente, isolando letras que não representam alternativas.'
      },
      {
        id: 75024,
        exercise_id: 7505,
        option_text: 'O(a candidato)(a) deve apresentar seu documento de identidade no dia da prova.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão mal posicionados, separando incorretamente as palavras.'
      },
      {
        id: 75025,
        exercise_id: 7505,
        option_text: 'O/a candidato/a deve apresentar seu documento de identidade no dia da prova.',
        is_correct: false,
        explanation: 'Incorreto! Embora a barra possa ser usada para indicar alternativas, a questão pede especificamente o uso de parênteses.'
      }
    ]
  }
];

// Função para obter exercícios por categoria
export async function getParentesesExercises(categoryId: string): Promise<Exercise[]> {
  // Retornar exercícios conforme a categoria solicitada
  switch(categoryId) {
    case 'parenteses':
      // Retornar os exercícios do módulo 1
      return parentesesExercicio1;
    case 'parenteses-2':
      // Retornar os exercícios do módulo 2
      return parentesesExercicio2;
    case 'parenteses-3':
      // Retornar os exercícios do módulo 3
      return parentesesExercicio3;
    case 'parenteses-4':
      // Retornar os exercícios do módulo 4
      return parentesesExercicio4;
    case 'parenteses-5':
      // Retornar os exercícios do módulo 5
      return parentesesExercicio5;
    case 'prova-parenteses':
      // Retornar os exercícios da prova final
      return provaParenteses;
    default:
      return [];
  }
}
