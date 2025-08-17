import { Exercise } from './exerciseService';
import { additionalProvaParenteses } from './additionalParentesesQuestions';
import { additionalProvaParenteses2 } from './additionalParentesesQuestions2';
import { additionalProvaParenteses3 } from './additionalParentesesQuestions3';

// ExercÃ­cios do mÃ³dulo ParÃªnteses 1
export const parentesesExercicio1: Exercise[] = [
  {
    id: 7001,
    category_id: 'parenteses',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente?',
    explanation: 'Os parÃªnteses sÃ£o sinais de pontuaÃ§Ã£o utilizados para intercalar no texto uma informaÃ§Ã£o adicional, explicativa ou para destacar algo.',
    difficulty: 1,
    options: [
      {
        id: 70001,
        exercise_id: 7001,
        option_text: 'A OrganizaÃ§Ã£o das NaÃ§Ãµes Unidas (ONU) foi fundada em 1945, apÃ³s a Segunda Guerra Mundial.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para introduzir a sigla apÃ³s o nome completo.'
      },
      {
        id: 70002,
        exercise_id: 7001,
        option_text: 'A OrganizaÃ§Ã£o das NaÃ§Ãµes Unidas(ONU)foi fundada em 1945, apÃ³s a Segunda Guerra Mundial.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaÃ§os antes e depois dos parÃªnteses.'
      },
      {
        id: 70003,
        exercise_id: 7001,
        option_text: 'A OrganizaÃ§Ã£o das NaÃ§Ãµes Unidas )ONU( foi fundada em 1945, apÃ³s a Segunda Guerra Mundial.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o invertidos.'
      },
      {
        id: 70004,
        exercise_id: 7001,
        option_text: 'A OrganizaÃ§Ã£o das NaÃ§Ãµes Unidas (ONU foi fundada em 1945, apÃ³s a Segunda Guerra Mundial.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de fechamento apÃ³s a sigla.'
      },
      {
        id: 70005,
        exercise_id: 7001,
        option_text: 'A OrganizaÃ§Ã£o das NaÃ§Ãµes Unidas ONU) foi fundada em 1945, apÃ³s a Segunda Guerra Mundial.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de abertura antes da sigla.'
      }
    ]
  },
  {
    id: 7002,
    category_id: 'parenteses',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para isolar uma explicaÃ§Ã£o?',
    explanation: 'Os parÃªnteses sÃ£o utilizados para isolar explicaÃ§Ãµes ou comentÃ¡rios dentro de um texto.',
    difficulty: 1,
    options: [
      {
        id: 70006,
        exercise_id: 7002,
        option_text: 'O novo sistema operacional (que serÃ¡ lanÃ§ado no prÃ³ximo mÃªs) promete revolucionar o mercado de tecnologia.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o isolando uma explicaÃ§Ã£o sobre o lanÃ§amento do sistema operacional.'
      },
      {
        id: 70007,
        exercise_id: 7002,
        option_text: 'O novo sistema operacional que serÃ¡ lanÃ§ado no prÃ³ximo mÃªs) promete revolucionar o mercado de tecnologia.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de abertura antes de "que".'
      },
      {
        id: 70008,
        exercise_id: 7002,
        option_text: 'O novo sistema operacional (que serÃ¡ lanÃ§ado no prÃ³ximo mÃªs promete revolucionar o mercado de tecnologia.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de fechamento apÃ³s "mÃªs".'
      },
      {
        id: 70009,
        exercise_id: 7002,
        option_text: 'O novo sistema operacional)que serÃ¡ lanÃ§ado no prÃ³ximo mÃªs(promete revolucionar o mercado de tecnologia.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o invertidos.'
      },
      {
        id: 70010,
        exercise_id: 7002,
        option_text: 'O novo sistema operacional - que serÃ¡ lanÃ§ado no prÃ³ximo mÃªs - promete revolucionar o mercado de tecnologia.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travÃ©m esteja sendo usado corretamente, a questÃ£o pede especificamente o uso de parÃªnteses.'
      }
    ]
  },
  {
    id: 7003,
    category_id: 'parenteses',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para indicar uma sigla?',
    explanation: 'Os parÃªnteses sÃ£o frequentemente usados para indicar a sigla de um nome ou expressÃ£o apÃ³s sua menÃ§Ã£o completa.',
    difficulty: 1,
    options: [
      {
        id: 70011,
        exercise_id: 7003,
        option_text: 'O Banco Central do Brasil (BCB) anunciou novas medidas econÃ´micas ontem.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para introduzir a sigla apÃ³s o nome completo.'
      },
      {
        id: 70012,
        exercise_id: 7003,
        option_text: 'O (BCB) Banco Central do Brasil anunciou novas medidas econÃ´micas ontem.',
        is_correct: false,
        explanation: 'Incorreto! A sigla deve vir depois do nome completo, nÃ£o antes.'
      },
      {
        id: 70013,
        exercise_id: 7003,
        option_text: 'O Banco Central do Brasil(BCB)anunciou novas medidas econÃ´micas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaÃ§os antes e depois dos parÃªnteses.'
      },
      {
        id: 70014,
        exercise_id: 7003,
        option_text: 'O Banco Central do Brasil (BCB anunciou novas medidas econÃ´micas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de fechamento apÃ³s a sigla.'
      },
      {
        id: 70015,
        exercise_id: 7003,
        option_text: 'O Banco Central do Brasil BCB) anunciou novas medidas econÃ´micas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de abertura antes da sigla.'
      }
    ]
  },
  {
    id: 7004,
    category_id: 'parenteses',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para indicar uma data?',
    explanation: 'Os parÃªnteses podem ser usados para isolar datas que complementam uma informaÃ§Ã£o.',
    difficulty: 1,
    options: [
      {
        id: 70016,
        exercise_id: 7004,
        option_text: 'A DeclaraÃ§Ã£o Universal dos Direitos Humanos (1948) Ã© um documento marco na histÃ³ria dos direitos humanos.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para isolar o ano da declaraÃ§Ã£o.'
      },
      {
        id: 70017,
        exercise_id: 7004,
        option_text: 'A DeclaraÃ§Ã£o Universal dos Direitos Humanos (1948 Ã© um documento marco na histÃ³ria dos direitos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de fechamento apÃ³s o ano.'
      },
      {
        id: 70018,
        exercise_id: 7004,
        option_text: 'A DeclaraÃ§Ã£o Universal dos Direitos Humanos 1948) Ã© um documento marco na histÃ³ria dos direitos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de abertura antes do ano.'
      },
      {
        id: 70019,
        exercise_id: 7004,
        option_text: 'A DeclaraÃ§Ã£o Universal dos Direitos Humanos)1948(Ã© um documento marco na histÃ³ria dos direitos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o invertidos e falta espaÃ§o apÃ³s o fechamento.'
      },
      {
        id: 70020,
        exercise_id: 7004,
        option_text: 'A DeclaraÃ§Ã£o Universal dos Direitos Humanos - 1948 - Ã© um documento marco na histÃ³ria dos direitos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travÃ©m esteja sendo usado corretamente, a questÃ£o pede especificamente o uso de parÃªnteses.'
      }
    ]
  },
  {
    id: 7005,
    category_id: 'parenteses',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para indicar uma possibilidade alternativa?',
    explanation: 'Os parÃªnteses podem ser usados para indicar uma possibilidade alternativa ou uma opÃ§Ã£o.',
    difficulty: 1,
    options: [
      {
        id: 70021,
        exercise_id: 7005,
        option_text: 'O(s) autor(es) deve(m) assinar o termo de responsabilidade.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para indicar a possibilidade de singular ou plural.'
      },
      {
        id: 70022,
        exercise_id: 7005,
        option_text: 'O(s autor(es deve(m assinar o termo de responsabilidade.',
        is_correct: false,
        explanation: 'Incorreto! Faltam os parÃªnteses de fechamento apÃ³s o "s" e apÃ³s o "m".'
      },
      {
        id: 70023,
        exercise_id: 7005,
        option_text: 'O)s( autor)es( deve)m( assinar o termo de responsabilidade.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o invertidos.'
      },
      {
        id: 70024,
        exercise_id: 7005,
        option_text: 'O (s) autor (es) deve (m) assinar o termo de responsabilidade.',
        is_correct: false,
        explanation: 'Incorreto! NÃ£o deve haver espaÃ§os entre a palavra e a letra entre parÃªnteses.'
      },
      {
        id: 70025,
        exercise_id: 7005,
        option_text: 'O/s autor/es deve/m assinar o termo de responsabilidade.',
        is_correct: false,
        explanation: 'Incorreto! Embora a barra possa ser usada para indicar alternativas, a questÃ£o pede especificamente o uso de parÃªnteses.'
      }
    ]
  },
  {
    id: 7006,
    category_id: 'parenteses',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para adicionar uma informaÃ§Ã£o complementar?',
    explanation: 'Os parÃªnteses sÃ£o usados para adicionar informaÃ§Ãµes complementares que nÃ£o sÃ£o essenciais para a compreensÃ£o do texto principal.',
    difficulty: 1,
    options: [
      {
        id: 70026,
        exercise_id: 7006,
        option_text: 'O filme (dirigido por Steven Spielberg) ganhou vÃ¡rios prÃªmios internacionais.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para adicionar uma informaÃ§Ã£o complementar sobre o diretor do filme.'
      },
      {
        id: 70027,
        exercise_id: 7006,
        option_text: 'O filme (dirigido por Steven Spielberg ganhou vÃ¡rios prÃªmios internacionais.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de fechamento apÃ³s o nome do diretor.'
      },
      {
        id: 70028,
        exercise_id: 7006,
        option_text: 'O filme dirigido por Steven Spielberg) ganhou vÃ¡rios prÃªmios internacionais.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de abertura antes de "dirigido".'
      },
      {
        id: 70029,
        exercise_id: 7006,
        option_text: 'O filme)dirigido por Steven Spielberg(ganhou vÃ¡rios prÃªmios internacionais.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o invertidos e faltam espaÃ§os antes e depois.'
      },
      {
        id: 70030,
        exercise_id: 7006,
        option_text: 'O filme, dirigido por Steven Spielberg, ganhou vÃ¡rios prÃªmios internacionais.',
        is_correct: false,
        explanation: 'Incorreto! Embora as vÃ­rgulas estejam sendo usadas corretamente, a questÃ£o pede especificamente o uso de parÃªnteses.'
      }
    ]
  },
  {
    id: 7007,
    category_id: 'parenteses',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para indicar uma citaÃ§Ã£o bibliogrÃ¡fica?',
    explanation: 'Os parÃªnteses sÃ£o frequentemente usados em citaÃ§Ãµes bibliogrÃ¡ficas para indicar o autor e o ano da publicaÃ§Ã£o.',
    difficulty: 1,
    options: [
      {
        id: 70031,
        exercise_id: 7007,
        option_text: 'Segundo Silva (2020), a educaÃ§Ã£o Ã© um processo contÃ­nuo de aprendizagem.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para indicar o ano da publicaÃ§Ã£o apÃ³s o nome do autor.'
      },
      {
        id: 70032,
        exercise_id: 7007,
        option_text: 'Segundo Silva (2020, a educaÃ§Ã£o Ã© um processo contÃ­nuo de aprendizagem.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de fechamento apÃ³s o ano.'
      },
      {
        id: 70033,
        exercise_id: 7007,
        option_text: 'Segundo Silva 2020), a educaÃ§Ã£o Ã© um processo contÃ­nuo de aprendizagem.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de abertura antes do ano.'
      },
      {
        id: 70034,
        exercise_id: 7007,
        option_text: 'Segundo Silva)2020(, a educaÃ§Ã£o Ã© um processo contÃ­nuo de aprendizagem.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o invertidos.'
      },
      {
        id: 70035,
        exercise_id: 7007,
        option_text: 'Segundo Silva - 2020 - a educaÃ§Ã£o Ã© um processo contÃ­nuo de aprendizagem.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travÃ©m esteja sendo usado para isolar o ano, a questÃ£o pede especificamente o uso de parÃªnteses.'
      }
    ]
  },
  {
    id: 7008,
    category_id: 'parenteses',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para indicar uma traduÃ§Ã£o?',
    explanation: 'Os parÃªnteses podem ser usados para fornecer a traduÃ§Ã£o de uma palavra ou expressÃ£o em outro idioma.',
    difficulty: 1,
    options: [
      {
        id: 70036,
        exercise_id: 7008,
        option_text: 'O termo "feedback" (retorno) Ã© muito utilizado no ambiente corporativo.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para fornecer a traduÃ§Ã£o do termo estrangeiro.'
      },
      {
        id: 70037,
        exercise_id: 7008,
        option_text: 'O termo "feedback" (retorno Ã© muito utilizado no ambiente corporativo.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de fechamento apÃ³s a traduÃ§Ã£o.'
      },
      {
        id: 70038,
        exercise_id: 7008,
        option_text: 'O termo "feedback" retorno) Ã© muito utilizado no ambiente corporativo.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de abertura antes da traduÃ§Ã£o.'
      },
      {
        id: 70039,
        exercise_id: 7008,
        option_text: 'O termo ("feedback") retorno Ã© muito utilizado no ambiente corporativo.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses deveriam isolar a traduÃ§Ã£o, nÃ£o o termo estrangeiro.'
      },
      {
        id: 70040,
        exercise_id: 7008,
        option_text: 'O termo "feedback"(retorno)Ã© muito utilizado no ambiente corporativo.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaÃ§os antes e depois dos parÃªnteses.'
      }
    ]
  },
  {
    id: 7009,
    category_id: 'parenteses',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para indicar uma nota explicativa?',
    explanation: 'Os parÃªnteses podem ser usados para inserir notas explicativas que complementam a informaÃ§Ã£o principal.',
    difficulty: 1,
    options: [
      {
        id: 70041,
        exercise_id: 7009,
        option_text: 'A empresa anunciou um aumento de 15% nas vendas (comparado ao mesmo perÃ­odo do ano anterior).',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para inserir uma nota explicativa sobre o aumento nas vendas.'
      },
      {
        id: 70042,
        exercise_id: 7009,
        option_text: 'A empresa anunciou um aumento de 15% nas vendas (comparado ao mesmo perÃ­odo do ano anterior.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de fechamento apÃ³s a nota explicativa.'
      },
      {
        id: 70043,
        exercise_id: 7009,
        option_text: 'A empresa anunciou um aumento de 15% nas vendas comparado ao mesmo perÃ­odo do ano anterior).',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de abertura antes da nota explicativa.'
      },
      {
        id: 70044,
        exercise_id: 7009,
        option_text: 'A empresa anunciou um aumento de 15% nas vendas)comparado ao mesmo perÃ­odo do ano anterior(.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o invertidos.'
      },
      {
        id: 70045,
        exercise_id: 7009,
        option_text: 'A empresa anunciou um aumento de 15% nas vendas, comparado ao mesmo perÃ­odo do ano anterior.',
        is_correct: false,
        explanation: 'Incorreto! Embora a vÃ­rgula esteja sendo usada corretamente, a questÃ£o pede especificamente o uso de parÃªnteses.'
      }
    ]
  },
  {
    id: 7010,
    category_id: 'parenteses',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para inserir um comentÃ¡rio do autor?',
    explanation: 'Os parÃªnteses podem ser usados para inserir comentÃ¡rios pessoais do autor que nÃ£o fazem parte direta do texto.',
    difficulty: 1,
    options: [
      {
        id: 70046,
        exercise_id: 7010,
        option_text: 'O polÃ­tico prometeu resolver todos os problemas (como se isso fosse possÃ­vel!) em apenas um ano de mandato.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para inserir um comentÃ¡rio irÃ´nico do autor.'
      },
      {
        id: 70047,
        exercise_id: 7010,
        option_text: 'O polÃ­tico prometeu resolver todos os problemas (como se isso fosse possÃ­vel! em apenas um ano de mandato.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de fechamento apÃ³s o ponto de exclamaÃ§Ã£o.'
      },
      {
        id: 70048,
        exercise_id: 7010,
        option_text: 'O polÃ­tico prometeu resolver todos os problemas como se isso fosse possÃ­vel!) em apenas um ano de mandato.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de abertura antes do comentÃ¡rio.'
      },
      {
        id: 70049,
        exercise_id: 7010,
        option_text: 'O polÃ­tico prometeu resolver todos os problemas )como se isso fosse possÃ­vel!( em apenas um ano de mandato.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o invertidos.'
      },
      {
        id: 70050,
        exercise_id: 7010,
        option_text: 'O polÃ­tico prometeu resolver todos os problemas - como se isso fosse possÃ­vel! - em apenas um ano de mandato.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travÃ©m esteja sendo usado corretamente, a questÃ£o pede especificamente o uso de parÃªnteses.'
      }
    ]
  }
];

// ExercÃ­cios do mÃ³dulo ParÃªnteses 2
export const parentesesExercicio2: Exercise[] = [
  {
    id: 7011,
    category_id: 'parenteses-2',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para isolar uma expressÃ£o intercalada?',
    explanation: 'Os parÃªnteses podem ser usados para isolar expressÃµes intercaladas no meio de uma frase.',
    difficulty: 2,
    options: [
      {
        id: 70051,
        exercise_id: 7011,
        option_text: 'O candidato, que (segundo pesquisas recentes) lidera as intenÃ§Ãµes de voto, apresentou suas propostas ontem.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para isolar uma expressÃ£o intercalada que complementa a informaÃ§Ã£o.'
      },
      {
        id: 70052,
        exercise_id: 7011,
        option_text: 'O candidato (que segundo pesquisas recentes lidera) as intenÃ§Ãµes de voto, apresentou suas propostas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o interrompendo incorretamente a estrutura da oraÃ§Ã£o relativa.'
      },
      {
        id: 70053,
        exercise_id: 7011,
        option_text: 'O candidato que segundo (pesquisas recentes) lidera as intenÃ§Ãµes de voto, apresentou suas propostas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando apenas parte da expressÃ£o intercalada.'
      },
      {
        id: 70054,
        exercise_id: 7011,
        option_text: 'O candidato que segundo pesquisas recentes lidera as intenÃ§Ãµes de voto, (apresentou suas propostas) ontem.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do predicado, nÃ£o uma expressÃ£o intercalada.'
      },
      {
        id: 70055,
        exercise_id: 7011,
        option_text: '(O candidato que segundo pesquisas recentes lidera as intenÃ§Ãµes de voto), apresentou suas propostas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando todo o sujeito, nÃ£o uma expressÃ£o intercalada.'
      }
    ]
  },
  {
    id: 7012,
    category_id: 'parenteses-2',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente para inserir uma explicaÃ§Ã£o no meio da frase?',
    explanation: 'Os parÃªnteses sÃ£o usados para inserir explicaÃ§Ãµes ou comentÃ¡rios no meio de uma frase sem interromper seu fluxo principal.',
    difficulty: 2,
    options: [
      {
        id: 70056,
        exercise_id: 7012,
        option_text: 'A vacinaÃ§Ã£o (procedimento que estimula o sistema imunolÃ³gico a produzir anticorpos) Ã© essencial para a saÃºde pÃºblica.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para inserir uma explicaÃ§Ã£o sobre o que Ã© a vacinaÃ§Ã£o.'
      },
      {
        id: 70057,
        exercise_id: 7012,
        option_text: 'A vacinaÃ§Ã£o procedimento (que estimula o sistema imunolÃ³gico) a produzir anticorpos Ã© essencial para a saÃºde pÃºblica.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o interrompendo incorretamente a estrutura da explicaÃ§Ã£o.'
      },
      {
        id: 70058,
        exercise_id: 7012,
        option_text: 'A (vacinaÃ§Ã£o procedimento que estimula o sistema imunolÃ³gico a produzir anticorpos) Ã© essencial para a saÃºde pÃºblica.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo o termo principal junto com a explicaÃ§Ã£o.'
      },
      {
        id: 70059,
        exercise_id: 7012,
        option_text: 'A vacinaÃ§Ã£o procedimento que estimula o sistema imunolÃ³gico a produzir anticorpos (Ã© essencial) para a saÃºde pÃºblica.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do predicado, nÃ£o uma explicaÃ§Ã£o.'
      },
      {
        id: 70060,
        exercise_id: 7012,
        option_text: 'A vacinaÃ§Ã£o procedimento que (estimula o sistema imunolÃ³gico a produzir anticorpos Ã© essencial) para a saÃºde pÃºblica.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando incorretamente parte da explicaÃ§Ã£o e parte do predicado.'
      }
    ]
  },
  {
    id: 7013,
    category_id: 'parenteses-2',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para inserir um comentÃ¡rio do autor?',
    explanation: 'Os parÃªnteses podem ser usados para inserir comentÃ¡rios pessoais do autor que nÃ£o fazem parte direta do texto.',
    difficulty: 2,
    options: [
      {
        id: 70061,
        exercise_id: 7013,
        option_text: 'A proposta do governo (que, diga-se de passagem, nÃ£o Ã© nada inovadora) foi aprovada pelo congresso.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para inserir um comentÃ¡rio pessoal do autor.'
      },
      {
        id: 70062,
        exercise_id: 7013,
        option_text: 'A proposta do governo que, (diga-se de passagem), nÃ£o Ã© nada inovadora foi aprovada pelo congresso.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando apenas parte do comentÃ¡rio, interrompendo incorretamente a estrutura da frase.'
      },
      {
        id: 70063,
        exercise_id: 7013,
        option_text: 'A proposta (do governo que, diga-se de passagem, nÃ£o Ã© nada inovadora) foi aprovada pelo congresso.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo parte da informaÃ§Ã£o principal junto com o comentÃ¡rio.'
      },
      {
        id: 70064,
        exercise_id: 7013,
        option_text: 'A proposta do governo que, diga-se de passagem, nÃ£o Ã© nada inovadora (foi aprovada) pelo congresso.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do predicado, nÃ£o um comentÃ¡rio do autor.'
      },
      {
        id: 70065,
        exercise_id: 7013,
        option_text: '(A proposta do governo) que, diga-se de passagem, nÃ£o Ã© nada inovadora foi aprovada pelo congresso.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do sujeito, nÃ£o um comentÃ¡rio do autor.'
      }
    ]
  },
  {
    id: 7014,
    category_id: 'parenteses-2',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente para inserir uma expressÃ£o explicativa?',
    explanation: 'Os parÃªnteses podem ser usados para inserir expressÃµes explicativas que complementam o sentido da frase.',
    difficulty: 2,
    options: [
      {
        id: 70066,
        exercise_id: 7014,
        option_text: 'Os lÃ­deres dos paÃ­ses do BRICS (Brasil, RÃºssia, Ãndia, China e Ãfrica do Sul) reuniram-se para discutir acordos comerciais.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para inserir uma expressÃ£o explicativa que detalha quais sÃ£o os paÃ­ses do BRICS.'
      },
      {
        id: 70067,
        exercise_id: 7014,
        option_text: 'Os lÃ­deres dos paÃ­ses do (BRICS Brasil, RÃºssia, Ãndia, China e Ãfrica do Sul) reuniram-se para discutir acordos comerciais.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses deveriam incluir apenas a explicaÃ§Ã£o, nÃ£o o termo que estÃ¡ sendo explicado.'
      },
      {
        id: 70068,
        exercise_id: 7014,
        option_text: 'Os lÃ­deres dos paÃ­ses do BRICS Brasil, RÃºssia, Ãndia, (China e Ãfrica do Sul) reuniram-se para discutir acordos comerciais.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando apenas parte da expressÃ£o explicativa.'
      },
      {
        id: 70069,
        exercise_id: 7014,
        option_text: 'Os lÃ­deres dos paÃ­ses do BRICS Brasil, RÃºssia, Ãndia, China e Ãfrica do Sul (reuniram-se) para discutir acordos comerciais.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do predicado, nÃ£o uma expressÃ£o explicativa.'
      },
      {
        id: 70070,
        exercise_id: 7014,
        option_text: '(Os lÃ­deres dos paÃ­ses do BRICS) Brasil, RÃºssia, Ãndia, China e Ãfrica do Sul reuniram-se para discutir acordos comerciais.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando o sujeito, nÃ£o a expressÃ£o explicativa.'
      }
    ]
  },
  {
    id: 7015,
    category_id: 'parenteses-2',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para inserir uma observaÃ§Ã£o?',
    explanation: 'Os parÃªnteses podem ser usados para inserir observaÃ§Ãµes que complementam a informaÃ§Ã£o principal.',
    difficulty: 2,
    options: [
      {
        id: 70071,
        exercise_id: 7015,
        option_text: 'A reuniÃ£o serÃ¡ realizada na prÃ³xima segunda-feira (caso nÃ£o haja imprevistos) Ã s 10h da manhÃ£.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para inserir uma observaÃ§Ã£o sobre a possibilidade de mudanÃ§a.'
      },
      {
        id: 70072,
        exercise_id: 7015,
        option_text: 'A reuniÃ£o serÃ¡ realizada na prÃ³xima segunda-feira caso (nÃ£o haja imprevistos) Ã s 10h da manhÃ£.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando apenas parte da observaÃ§Ã£o, interrompendo incorretamente a estrutura da frase.'
      },
      {
        id: 70073,
        exercise_id: 7015,
        option_text: 'A reuniÃ£o (serÃ¡ realizada na prÃ³xima segunda-feira caso nÃ£o haja imprevistos) Ã s 10h da manhÃ£.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo parte da informaÃ§Ã£o principal junto com a observaÃ§Ã£o.'
      },
      {
        id: 70074,
        exercise_id: 7015,
        option_text: 'A reuniÃ£o serÃ¡ realizada na prÃ³xima segunda-feira caso nÃ£o haja imprevistos (Ã s 10h) da manhÃ£.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte da informaÃ§Ã£o sobre o horÃ¡rio, nÃ£o uma observaÃ§Ã£o.'
      },
      {
        id: 70075,
        exercise_id: 7015,
        option_text: '(A reuniÃ£o serÃ¡ realizada na prÃ³xima segunda-feira) caso nÃ£o haja imprevistos Ã s 10h da manhÃ£.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte da informaÃ§Ã£o principal, nÃ£o uma observaÃ§Ã£o.'
      }
    ]
  },
  {
    id: 7016,
    category_id: 'parenteses-2',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente para inserir uma nota de esclarecimento?',
    explanation: 'Os parÃªnteses podem ser usados para inserir notas de esclarecimento que ajudam a compreender melhor o texto.',
    difficulty: 2,
    options: [
      {
        id: 70076,
        exercise_id: 7016,
        option_text: 'O novo medicamento (ainda em fase de testes clÃ­nicos) promete revolucionar o tratamento da doenÃ§a.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para inserir uma nota de esclarecimento sobre o estÃ¡gio de desenvolvimento do medicamento.'
      },
      {
        id: 70077,
        exercise_id: 7016,
        option_text: 'O novo medicamento ainda (em fase de testes clÃ­nicos) promete revolucionar o tratamento da doenÃ§a.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o interrompendo incorretamente a estrutura da frase, separando o advÃ©rbio "ainda" do resto da expressÃ£o.'
      },
      {
        id: 70078,
        exercise_id: 7016,
        option_text: 'O (novo medicamento ainda em fase de testes clÃ­nicos) promete revolucionar o tratamento da doenÃ§a.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo o sujeito principal junto com a nota de esclarecimento.'
      },
      {
        id: 70079,
        exercise_id: 7016,
        option_text: 'O novo medicamento ainda em fase de testes clÃ­nicos (promete) revolucionar o tratamento da doenÃ§a.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando o verbo principal, nÃ£o uma nota de esclarecimento.'
      },
      {
        id: 70080,
        exercise_id: 7016,
        option_text: '(O novo) medicamento ainda em fase de testes clÃ­nicos promete revolucionar o tratamento da doenÃ§a.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando apenas parte do sujeito, nÃ£o uma nota de esclarecimento.'
      }
    ]
  },
  {
    id: 7017,
    category_id: 'parenteses-2',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para inserir um aposto explicativo?',
    explanation: 'Os parÃªnteses podem ser usados para inserir apostos explicativos que fornecem informaÃ§Ãµes adicionais sobre um termo.',
    difficulty: 2,
    options: [
      {
        id: 70081,
        exercise_id: 7017,
        option_text: 'Machado de Assis (um dos maiores escritores brasileiros de todos os tempos) nasceu no Rio de Janeiro em 1839.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para inserir um aposto explicativo sobre Machado de Assis.'
      },
      {
        id: 70082,
        exercise_id: 7017,
        option_text: 'Machado de Assis um (dos maiores escritores brasileiros de todos os tempos) nasceu no Rio de Janeiro em 1839.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando apenas parte do aposto, interrompendo incorretamente a estrutura da frase.'
      },
      {
        id: 70083,
        exercise_id: 7017,
        option_text: '(Machado de Assis um dos maiores escritores brasileiros de todos os tempos) nasceu no Rio de Janeiro em 1839.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo o sujeito principal junto com o aposto explicativo.'
      },
      {
        id: 70084,
        exercise_id: 7017,
        option_text: 'Machado de Assis um dos maiores escritores brasileiros de todos os tempos (nasceu) no Rio de Janeiro em 1839.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando o verbo principal, nÃ£o um aposto explicativo.'
      },
      {
        id: 70085,
        exercise_id: 7017,
        option_text: 'Machado de Assis um dos maiores escritores brasileiros de todos os tempos nasceu no Rio de Janeiro (em 1839).',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando apenas a data de nascimento, nÃ£o um aposto explicativo sobre Machado de Assis.'
      }
    ]
  },
  {
    id: 7018,
    category_id: 'parenteses-2',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente para inserir uma informaÃ§Ã£o complementar?',
    explanation: 'Os parÃªnteses podem ser usados para inserir informaÃ§Ãµes complementares que nÃ£o sÃ£o essenciais para a compreensÃ£o da frase principal.',
    difficulty: 2,
    options: [
      {
        id: 70086,
        exercise_id: 7018,
        option_text: 'A empresa anunciou um aumento de 15% nas vendas (o maior crescimento dos Ãºltimos cinco anos).',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para inserir uma informaÃ§Ã£o complementar sobre o aumento nas vendas.'
      },
      {
        id: 70087,
        exercise_id: 7018,
        option_text: 'A empresa anunciou um aumento (de 15% nas vendas o maior crescimento dos Ãºltimos cinco anos).',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo parte da informaÃ§Ã£o principal junto com a informaÃ§Ã£o complementar.'
      },
      {
        id: 70088,
        exercise_id: 7018,
        option_text: 'A empresa anunciou um aumento de 15% nas vendas o maior (crescimento dos Ãºltimos) cinco anos.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando apenas parte da informaÃ§Ã£o complementar, interrompendo incorretamente a estrutura da frase.'
      },
      {
        id: 70089,
        exercise_id: 7018,
        option_text: '(A empresa anunciou) um aumento de 15% nas vendas o maior crescimento dos Ãºltimos cinco anos.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do predicado principal, nÃ£o uma informaÃ§Ã£o complementar.'
      },
      {
        id: 70090,
        exercise_id: 7018,
        option_text: 'A empresa (anunciou um aumento de 15% nas vendas) o maior crescimento dos Ãºltimos cinco anos.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte da informaÃ§Ã£o principal, nÃ£o uma informaÃ§Ã£o complementar.'
      }
    ]
  },
  {
    id: 7019,
    category_id: 'parenteses-2',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para inserir uma definiÃ§Ã£o?',
    explanation: 'Os parÃªnteses podem ser usados para inserir definiÃ§Ãµes de termos tÃ©cnicos ou pouco conhecidos.',
    difficulty: 2,
    options: [
      {
        id: 70091,
        exercise_id: 7019,
        option_text: 'A fotossÃ­ntese (processo pelo qual as plantas convertem luz solar em energia) Ã© essencial para a vida na Terra.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para inserir uma definiÃ§Ã£o do termo "fotossÃ­ntese".'
      },
      {
        id: 70092,
        exercise_id: 7019,
        option_text: 'A (fotossÃ­ntese processo pelo qual as plantas convertem luz solar em energia) Ã© essencial para a vida na Terra.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo o termo principal junto com sua definiÃ§Ã£o.'
      },
      {
        id: 70093,
        exercise_id: 7019,
        option_text: 'A fotossÃ­ntese processo pelo qual (as plantas convertem luz solar em energia) Ã© essencial para a vida na Terra.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando apenas parte da definiÃ§Ã£o, interrompendo incorretamente a estrutura da frase.'
      },
      {
        id: 70094,
        exercise_id: 7019,
        option_text: 'A fotossÃ­ntese processo pelo qual as plantas convertem luz solar em energia (Ã© essencial) para a vida na Terra.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do predicado principal, nÃ£o uma definiÃ§Ã£o.'
      },
      {
        id: 70095,
        exercise_id: 7019,
        option_text: '(A fotossÃ­ntese) processo pelo qual as plantas convertem luz solar em energia Ã© essencial para a vida na Terra.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando apenas o termo a ser definido, nÃ£o a definiÃ§Ã£o.'
      }
    ]
  },
  {
    id: 7020,
    category_id: 'parenteses-2',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente para inserir uma informaÃ§Ã£o sobre a fonte de uma citaÃ§Ã£o?',
    explanation: 'Os parÃªnteses podem ser usados para inserir informaÃ§Ãµes sobre a fonte de uma citaÃ§Ã£o ou referÃªncia.',
    difficulty: 2,
    options: [
      {
        id: 70096,
        exercise_id: 7020,
        option_text: '"A verdadeira viagem de descobrimento nÃ£o consiste em procurar novas paisagens, mas em ter novos olhos" (Marcel Proust).',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para inserir a fonte da citaÃ§Ã£o.'
      },
      {
        id: 70097,
        exercise_id: 7020,
        option_text: '"A verdadeira viagem de descobrimento nÃ£o consiste em procurar novas paisagens, (mas em ter novos olhos" Marcel Proust).',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o interrompendo incorretamente a citaÃ§Ã£o e incluindo parte dela junto com a fonte.'
      },
      {
        id: 70098,
        exercise_id: 7020,
        option_text: '("A verdadeira viagem de descobrimento nÃ£o consiste em procurar novas paisagens, mas em ter novos olhos") Marcel Proust.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando a citaÃ§Ã£o inteira, nÃ£o a fonte.'
      },
      {
        id: 70099,
        exercise_id: 7020,
        option_text: '"A verdadeira viagem de descobrimento nÃ£o consiste em procurar novas paisagens, mas em ter novos olhos" Marcel (Proust).',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando apenas o sobrenome do autor, nÃ£o a fonte completa.'
      },
      {
        id: 70100,
        exercise_id: 7020,
        option_text: '("A verdadeira viagem de descobrimento nÃ£o consiste em procurar novas paisagens, mas em ter novos olhos" Marcel Proust).',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando tanto a citaÃ§Ã£o quanto a fonte, quando deveriam isolar apenas a fonte.'
      }
    ]
  }
];

// ExercÃ­cios do mÃ³dulo ParÃªnteses 3
export const parentesesExercicio3: Exercise[] = [
  {
    id: 7021,
    category_id: 'parenteses-3',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente em uma citaÃ§Ã£o bibliogrÃ¡fica?',
    explanation: 'Os parÃªnteses sÃ£o usados em citaÃ§Ãµes bibliogrÃ¡ficas para indicar o autor e o ano da publicaÃ§Ã£o.',
    difficulty: 3,
    options: [
      {
        id: 70101,
        exercise_id: 7021,
        option_text: 'De acordo com estudos recentes (SILVA, 2022), o aquecimento global tem se intensificado nas Ãºltimas dÃ©cadas.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para indicar a referÃªncia bibliogrÃ¡fica com o sobrenome do autor em maiÃºsculas e o ano.'
      },
      {
        id: 70102,
        exercise_id: 7021,
        option_text: 'De acordo com estudos recentes SILVA (2022), o aquecimento global tem se intensificado nas Ãºltimas dÃ©cadas.',
        is_correct: false,
        explanation: 'Incorreto! O nome do autor deveria estar dentro dos parÃªnteses junto com o ano.'
      },
      {
        id: 70103,
        exercise_id: 7021,
        option_text: 'De acordo com estudos recentes (SILVA), 2022, o aquecimento global tem se intensificado nas Ãºltimas dÃ©cadas.',
        is_correct: false,
        explanation: 'Incorreto! O ano da publicaÃ§Ã£o deveria estar dentro dos parÃªnteses junto com o nome do autor.'
      },
      {
        id: 70104,
        exercise_id: 7021,
        option_text: 'De acordo com estudos recentes (SILVA 2022, o aquecimento global) tem se intensificado nas Ãºltimas dÃ©cadas.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo parte do conteÃºdo da frase junto com a referÃªncia.'
      },
      {
        id: 70105,
        exercise_id: 7021,
        option_text: '(De acordo com estudos recentes SILVA, 2022), o aquecimento global tem se intensificado nas Ãºltimas dÃ©cadas.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte da frase junto com a referÃªncia.'
      }
    ]
  },
  {
    id: 7022,
    category_id: 'parenteses-3',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente para indicar a omissÃ£o de parte de uma citaÃ§Ã£o direta?',
    explanation: 'Os parÃªnteses com reticÃªncias [...] sÃ£o usados para indicar que parte do texto original foi omitida em uma citaÃ§Ã£o direta.',
    difficulty: 3,
    options: [
      {
        id: 70106,
        exercise_id: 7022,
        option_text: 'Segundo o autor, "a educaÃ§Ã£o Ã© um processo contÃ­nuo (...) que se estende por toda a vida".',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses com reticÃªncias estÃ£o sendo usados adequadamente para indicar a omissÃ£o de parte do texto original.'
      },
      {
        id: 70107,
        exercise_id: 7022,
        option_text: 'Segundo o autor, "a educaÃ§Ã£o Ã© um processo (contÃ­nuo) que se estende por toda a vida".',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o sendo usados para destacar uma palavra, nÃ£o para indicar omissÃ£o.'
      },
      {
        id: 70108,
        exercise_id: 7022,
        option_text: 'Segundo o autor, "a educaÃ§Ã£o Ã© um processo contÃ­nuo (que se estende) por toda a vida".',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do texto sem indicar omissÃ£o.'
      },
      {
        id: 70109,
        exercise_id: 7022,
        option_text: 'Segundo o autor, ("a educaÃ§Ã£o Ã© um processo contÃ­nuo") que se estende por toda a vida.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte da citaÃ§Ã£o, nÃ£o indicando omissÃ£o.'
      },
      {
        id: 70110,
        exercise_id: 7022,
        option_text: 'Segundo o autor, "a educaÃ§Ã£o Ã© um processo contÃ­nuo ... que se estende por toda a vida".',
        is_correct: false,
        explanation: 'Incorreto! As reticÃªncias para indicar omissÃ£o em citaÃ§Ãµes diretas devem estar entre parÃªnteses.'
      }
    ]
  },
  {
    id: 7023,
    category_id: 'parenteses-3',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para indicar uma fonte em uma citaÃ§Ã£o direta?',
    explanation: 'Os parÃªnteses sÃ£o usados para indicar a fonte de uma citaÃ§Ã£o direta, incluindo autor e ano.',
    difficulty: 3,
    options: [
      {
        id: 70111,
        exercise_id: 7023,
        option_text: '"A verdadeira viagem de descobrimento nÃ£o consiste em procurar novas paisagens, mas em ter novos olhos" (PROUST, 1923).',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para indicar o autor e o ano da citaÃ§Ã£o apÃ³s o texto citado.'
      },
      {
        id: 70112,
        exercise_id: 7023,
        option_text: '"A verdadeira viagem de descobrimento nÃ£o consiste em procurar novas paisagens, mas em ter novos olhos" PROUST (1923).',
        is_correct: false,
        explanation: 'Incorreto! Tanto o autor quanto o ano deveriam estar dentro dos parÃªnteses.'
      },
      {
        id: 70113,
        exercise_id: 7023,
        option_text: '("A verdadeira viagem de descobrimento nÃ£o consiste em procurar novas paisagens, mas em ter novos olhos") PROUST, 1923.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando a citaÃ§Ã£o, nÃ£o a fonte.'
      },
      {
        id: 70114,
        exercise_id: 7023,
        option_text: '"A verdadeira viagem de descobrimento nÃ£o consiste em procurar novas paisagens, mas em ter novos olhos" (PROUST) 1923.',
        is_correct: false,
        explanation: 'Incorreto! O ano deveria estar dentro dos parÃªnteses junto com o autor.'
      },
      {
        id: 70115,
        exercise_id: 7023,
        option_text: '(PROUST, 1923) "A verdadeira viagem de descobrimento nÃ£o consiste em procurar novas paisagens, mas em ter novos olhos".',
        is_correct: false,
        explanation: 'Incorreto! A fonte deve vir apÃ³s a citaÃ§Ã£o, nÃ£o antes.'
      }
    ]
  },
  {
    id: 7024,
    category_id: 'parenteses-3',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente para indicar uma pÃ¡gina em uma referÃªncia bibliogrÃ¡fica?',
    explanation: 'Os parÃªnteses sÃ£o usados para indicar a pÃ¡gina de uma obra citada em uma referÃªncia bibliogrÃ¡fica.',
    difficulty: 3,
    options: [
      {
        id: 70116,
        exercise_id: 7024,
        option_text: 'Conforme Santos (2019, p. 42), "a sustentabilidade deve ser o foco das polÃ­ticas pÃºblicas atuais".',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para indicar o ano e a pÃ¡gina da obra citada.'
      },
      {
        id: 70117,
        exercise_id: 7024,
        option_text: 'Conforme Santos (2019), p. 42, "a sustentabilidade deve ser o foco das polÃ­ticas pÃºblicas atuais".',
        is_correct: false,
        explanation: 'Incorreto! A indicaÃ§Ã£o da pÃ¡gina deveria estar dentro dos parÃªnteses junto com o ano.'
      },
      {
        id: 70118,
        exercise_id: 7024,
        option_text: 'Conforme (Santos, 2019, p. 42), "a sustentabilidade deve ser o foco das polÃ­ticas pÃºblicas atuais".',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo o nome do autor, que deveria estar fora quando citado diretamente no texto.'
      },
      {
        id: 70119,
        exercise_id: 7024,
        option_text: 'Conforme Santos 2019 (p. 42), "a sustentabilidade deve ser o foco das polÃ­ticas pÃºblicas atuais".',
        is_correct: false,
        explanation: 'Incorreto! O ano deveria estar dentro dos parÃªnteses junto com a indicaÃ§Ã£o da pÃ¡gina.'
      },
      {
        id: 70120,
        exercise_id: 7024,
        option_text: 'Conforme Santos (2019) (p. 42), "a sustentabilidade deve ser o foco das polÃ­ticas pÃºblicas atuais".',
        is_correct: false,
        explanation: 'Incorreto! NÃ£o se deve usar dois pares de parÃªnteses separados; o ano e a pÃ¡gina devem estar no mesmo parÃªnteses.'
      }
    ]
  },
  {
    id: 7025,
    category_id: 'parenteses-3',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para indicar uma nota explicativa em uma referÃªncia?',
    explanation: 'Os parÃªnteses podem ser usados para inserir notas explicativas em referÃªncias bibliogrÃ¡ficas.',
    difficulty: 3,
    options: [
      {
        id: 70121,
        exercise_id: 7025,
        option_text: 'A obra de Machado de Assis (considerado o maior escritor brasileiro) influenciou geraÃ§Ãµes de autores.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para inserir uma nota explicativa sobre Machado de Assis.'
      },
      {
        id: 70122,
        exercise_id: 7025,
        option_text: 'A obra de Machado de Assis considerado (o maior escritor brasileiro) influenciou geraÃ§Ãµes de autores.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando apenas parte da nota explicativa, separando-a incorretamente.'
      },
      {
        id: 70123,
        exercise_id: 7025,
        option_text: '(A obra de Machado de Assis) considerado o maior escritor brasileiro influenciou geraÃ§Ãµes de autores.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando o sujeito da oraÃ§Ã£o, nÃ£o inserindo uma nota explicativa.'
      },
      {
        id: 70124,
        exercise_id: 7025,
        option_text: 'A obra de Machado de Assis considerado o maior escritor brasileiro (influenciou) geraÃ§Ãµes de autores.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando o verbo principal, nÃ£o inserindo uma nota explicativa.'
      },
      {
        id: 70125,
        exercise_id: 7025,
        option_text: 'A obra de (Machado de Assis considerado o maior escritor brasileiro) influenciou geraÃ§Ãµes de autores.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando o nome do autor junto com a nota explicativa, quando deveriam isolar apenas a nota.'
      }
    ]
  },
  {
    id: 7026,
    category_id: 'parenteses-3',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente em uma citaÃ§Ã£o no sistema autor-data?',
    explanation: 'Os parÃªnteses sÃ£o usados no sistema autor-data para indicar o sobrenome do autor e o ano da publicaÃ§Ã£o.',
    difficulty: 3,
    options: [
      {
        id: 70126,
        exercise_id: 7026,
        option_text: 'A teoria da relatividade revolucionou a fÃ­sica do sÃ©culo XX (EINSTEIN, 1905).',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para indicar o sobrenome do autor em maiÃºsculas e o ano da publicaÃ§Ã£o.'
      },
      {
        id: 70127,
        exercise_id: 7026,
        option_text: 'A teoria da relatividade revolucionou a fÃ­sica do sÃ©culo XX (Einstein, 1905).',
        is_correct: false,
        explanation: 'Incorreto! No sistema autor-data, o sobrenome do autor deve estar em maiÃºsculas dentro dos parÃªnteses.'
      },
      {
        id: 70128,
        exercise_id: 7026,
        option_text: 'A teoria da relatividade (revolucionou a fÃ­sica do sÃ©culo XX) EINSTEIN, 1905.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte da informaÃ§Ã£o principal, e a referÃªncia deveria estar entre parÃªnteses.'
      },
      {
        id: 70129,
        exercise_id: 7026,
        option_text: 'A teoria da relatividade revolucionou a fÃ­sica do sÃ©culo XX EINSTEIN (1905).',
        is_correct: false,
        explanation: 'Incorreto! Tanto o sobrenome do autor quanto o ano deveriam estar dentro dos parÃªnteses.'
      },
      {
        id: 70130,
        exercise_id: 7026,
        option_text: '(A teoria da relatividade revolucionou a fÃ­sica do sÃ©culo XX) EINSTEIN, 1905.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando a informaÃ§Ã£o principal, nÃ£o a referÃªncia bibliogrÃ¡fica.'
      }
    ]
  },
  {
    id: 7027,
    category_id: 'parenteses-3',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para indicar uma traduÃ§Ã£o em uma citaÃ§Ã£o?',
    explanation: 'Os parÃªnteses podem ser usados para indicar a traduÃ§Ã£o de termos estrangeiros em citaÃ§Ãµes.',
    difficulty: 3,
    options: [
      {
        id: 70131,
        exercise_id: 7027,
        option_text: 'Shakespeare usa o termo "fair play" (jogo limpo) em vÃ¡rias de suas obras.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para indicar a traduÃ§Ã£o do termo estrangeiro.'
      },
      {
        id: 70132,
        exercise_id: 7027,
        option_text: 'Shakespeare usa o termo ("fair play" jogo limpo) em vÃ¡rias de suas obras.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses deveriam conter apenas a traduÃ§Ã£o, nÃ£o o termo original junto com a traduÃ§Ã£o.'
      },
      {
        id: 70133,
        exercise_id: 7027,
        option_text: 'Shakespeare usa o termo "fair play"(jogo limpo)em vÃ¡rias de suas obras.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaÃ§os antes e depois dos parÃªnteses.'
      },
      {
        id: 70134,
        exercise_id: 7027,
        option_text: 'Shakespeare usa o (termo "fair play") jogo limpo em vÃ¡rias de suas obras.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte da expressÃ£o, nÃ£o a traduÃ§Ã£o.'
      },
      {
        id: 70135,
        exercise_id: 7027,
        option_text: 'Shakespeare usa o termo "fair play" jogo limpo (em vÃ¡rias de suas obras).',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando o complemento da frase, nÃ£o a traduÃ§Ã£o do termo.'
      }
    ]
  },
  {
    id: 7028,
    category_id: 'parenteses-3',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente para indicar uma data em uma referÃªncia bibliogrÃ¡fica?',
    explanation: 'Os parÃªnteses sÃ£o usados para indicar a data de publicaÃ§Ã£o em referÃªncias bibliogrÃ¡ficas.',
    difficulty: 3,
    options: [
      {
        id: 70136,
        exercise_id: 7028,
        option_text: 'A DeclaraÃ§Ã£o Universal dos Direitos Humanos (1948) Ã© um marco na histÃ³ria da humanidade.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para indicar o ano de publicaÃ§Ã£o do documento.'
      },
      {
        id: 70137,
        exercise_id: 7028,
        option_text: 'A DeclaraÃ§Ã£o Universal dos Direitos Humanos(1948)Ã© um marco na histÃ³ria da humanidade.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaÃ§os antes e depois dos parÃªnteses.'
      },
      {
        id: 70138,
        exercise_id: 7028,
        option_text: 'A (DeclaraÃ§Ã£o Universal dos Direitos Humanos 1948) Ã© um marco na histÃ³ria da humanidade.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando o nome do documento junto com a data, quando deveriam isolar apenas a data.'
      },
      {
        id: 70139,
        exercise_id: 7028,
        option_text: 'A DeclaraÃ§Ã£o Universal dos Direitos Humanos - 1948 - Ã© um marco na histÃ³ria da humanidade.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessÃ£o possa ser usado para destacar informaÃ§Ãµes, a questÃ£o pede especificamente o uso de parÃªnteses.'
      },
      {
        id: 70140,
        exercise_id: 7028,
        option_text: 'A DeclaraÃ§Ã£o Universal dos Direitos Humanos Ã© um marco na histÃ³ria da humanidade (1948).',
        is_correct: false,
        explanation: 'Incorreto! A data deveria estar logo apÃ³s o nome do documento, nÃ£o no final da frase.'
      }
    ]
  },
  {
    id: 7029,
    category_id: 'parenteses-3',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para indicar uma referÃªncia a um capÃ­tulo?',
    explanation: 'Os parÃªnteses podem ser usados para indicar o capÃ­tulo de uma obra citada.',
    difficulty: 3,
    options: [
      {
        id: 70141,
        exercise_id: 7029,
        option_text: 'Conforme discutido anteriormente (CapÃ­tulo 3), a metodologia aplicada apresentou resultados satisfatÃ³rios.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para indicar a referÃªncia ao capÃ­tulo.'
      },
      {
        id: 70142,
        exercise_id: 7029,
        option_text: 'Conforme discutido anteriormente CapÃ­tulo (3), a metodologia aplicada apresentou resultados satisfatÃ³rios.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses deveriam incluir tanto a palavra "CapÃ­tulo" quanto o nÃºmero.'
      },
      {
        id: 70143,
        exercise_id: 7029,
        option_text: 'Conforme (discutido anteriormente CapÃ­tulo 3), a metodologia aplicada apresentou resultados satisfatÃ³rios.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo parte da informaÃ§Ã£o principal junto com a referÃªncia ao capÃ­tulo.'
      },
      {
        id: 70144,
        exercise_id: 7029,
        option_text: 'Conforme discutido anteriormente CapÃ­tulo 3, (a metodologia aplicada) apresentou resultados satisfatÃ³rios.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do predicado, nÃ£o a referÃªncia ao capÃ­tulo.'
      },
      {
        id: 70145,
        exercise_id: 7029,
        option_text: '(Conforme discutido anteriormente) CapÃ­tulo 3, a metodologia aplicada apresentou resultados satisfatÃ³rios.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando a expressÃ£o introdutÃ³ria, nÃ£o a referÃªncia ao capÃ­tulo.'
      }
    ]
  },
  {
    id: 7030,
    category_id: 'parenteses-3',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente para indicar uma sigla em uma referÃªncia bibliogrÃ¡fica?',
    explanation: 'Os parÃªnteses sÃ£o usados para apresentar siglas apÃ³s o nome completo da entidade ou termo em referÃªncias bibliogrÃ¡ficas.',
    difficulty: 3,
    options: [
      {
        id: 70146,
        exercise_id: 7030,
        option_text: 'Segundo dados da OrganizaÃ§Ã£o Mundial da SaÃºde (OMS), as doenÃ§as cardiovasculares sÃ£o a principal causa de morte no mundo.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para apresentar a sigla apÃ³s o nome completo da entidade.'
      },
      {
        id: 70147,
        exercise_id: 7030,
        option_text: 'Segundo dados da (OrganizaÃ§Ã£o Mundial da SaÃºde) OMS, as doenÃ§as cardiovasculares sÃ£o a principal causa de morte no mundo.',
        is_correct: false,
        explanation: 'Incorreto! A sigla deveria estar dentro dos parÃªnteses, nÃ£o o nome completo da entidade.'
      },
      {
        id: 70148,
        exercise_id: 7030,
        option_text: 'Segundo dados da OrganizaÃ§Ã£o Mundial da SaÃºde(OMS), as doenÃ§as cardiovasculares sÃ£o a principal causa de morte no mundo.',
        is_correct: false,
        explanation: 'Incorreto! Falta um espaÃ§o antes do parÃªntese de abertura.'
      },
      {
        id: 70149,
        exercise_id: 7030,
        option_text: 'Segundo dados da (OMS) OrganizaÃ§Ã£o Mundial da SaÃºde, as doenÃ§as cardiovasculares sÃ£o a principal causa de morte no mundo.',
        is_correct: false,
        explanation: 'Incorreto! A sigla deve vir depois do nome completo da entidade, nÃ£o antes.'
      },
      {
        id: 70150,
        exercise_id: 7030,
        option_text: 'Segundo dados da OrganizaÃ§Ã£o Mundial da SaÃºde - OMS - as doenÃ§as cardiovasculares sÃ£o a principal causa de morte no mundo.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessÃ£o possa ser usado para destacar informaÃ§Ãµes, a questÃ£o pede especificamente o uso de parÃªnteses.'
      }
    ]
  }
];

// ExercÃ­cios do mÃ³dulo ParÃªnteses 4
export const parentesesExercicio4: Exercise[] = [
  {
    id: 7031,
    category_id: 'parenteses-4',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para adicionar informaÃ§Ãµes complementares?',
    explanation: 'Os parÃªnteses sÃ£o usados para adicionar informaÃ§Ãµes complementares que nÃ£o sÃ£o essenciais para a compreensÃ£o da frase principal.',
    difficulty: 4,
    options: [
      {
        id: 70151,
        exercise_id: 7031,
        option_text: 'O evento ocorrerÃ¡ no dia 15 de maio (terÃ§a-feira) no auditÃ³rio principal da universidade.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para adicionar a informaÃ§Ã£o complementar sobre o dia da semana.'
      },
      {
        id: 70152,
        exercise_id: 7031,
        option_text: 'O evento ocorrerÃ¡ no dia (15 de maio) terÃ§a-feira no auditÃ³rio principal da universidade.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando a data, que Ã© informaÃ§Ã£o essencial, e nÃ£o o complemento.'
      },
      {
        id: 70153,
        exercise_id: 7031,
        option_text: 'O evento (ocorrerÃ¡ no dia 15 de maio) terÃ§a-feira no auditÃ³rio principal da universidade.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte da informaÃ§Ã£o principal, nÃ£o um complemento.'
      },
      {
        id: 70154,
        exercise_id: 7031,
        option_text: 'O evento ocorrerÃ¡ no dia 15 de maio terÃ§a-feira (no auditÃ³rio principal) da universidade.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o separando incorretamente elementos que deveriam permanecer unidos.'
      },
      {
        id: 70155,
        exercise_id: 7031,
        option_text: '(O evento ocorrerÃ¡ no dia 15 de maio) terÃ§a-feira no auditÃ³rio principal da universidade.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando a informaÃ§Ã£o principal em vez do complemento.'
      }
    ]
  },
  {
    id: 7032,
    category_id: 'parenteses-4',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente para fornecer dados adicionais?',
    explanation: 'Os parÃªnteses sÃ£o usados para fornecer dados adicionais como nÃºmeros, datas ou quantidades que complementam a informaÃ§Ã£o principal.',
    difficulty: 4,
    options: [
      {
        id: 70156,
        exercise_id: 7032,
        option_text: 'A populaÃ§Ã£o da cidade aumentou significativamente nos Ãºltimos anos (de 50.000 para 75.000 habitantes).',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para fornecer dados numÃ©ricos adicionais que complementam a informaÃ§Ã£o.'
      },
      {
        id: 70157,
        exercise_id: 7032,
        option_text: 'A populaÃ§Ã£o da cidade (aumentou significativamente) nos Ãºltimos anos de 50.000 para 75.000 habitantes.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do predicado, nÃ£o os dados adicionais.'
      },
      {
        id: 70158,
        exercise_id: 7032,
        option_text: 'A populaÃ§Ã£o da cidade aumentou significativamente nos Ãºltimos anos de (50.000) para 75.000 habitantes.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando apenas parte dos dados numÃ©ricos.'
      },
      {
        id: 70159,
        exercise_id: 7032,
        option_text: '(A populaÃ§Ã£o da cidade aumentou significativamente nos Ãºltimos anos) de 50.000 para 75.000 habitantes.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando a informaÃ§Ã£o principal em vez dos dados adicionais.'
      },
      {
        id: 70160,
        exercise_id: 7032,
        option_text: 'A populaÃ§Ã£o da cidade aumentou significativamente nos Ãºltimos anos de 50.000 para 75.000 (habitantes).',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando apenas a unidade de medida, nÃ£o os dados adicionais completos.'
      }
    ]
  },
  {
    id: 7033,
    category_id: 'parenteses-4',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para adicionar uma informaÃ§Ã£o estatÃ­stica?',
    explanation: 'Os parÃªnteses sÃ£o usados para adicionar informaÃ§Ãµes estatÃ­sticas que complementam a informaÃ§Ã£o principal.',
    difficulty: 4,
    options: [
      {
        id: 70161,
        exercise_id: 7033,
        option_text: 'A maioria dos brasileiros (cerca de 85%) considera importante a preservaÃ§Ã£o do meio ambiente.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para adicionar a informaÃ§Ã£o estatÃ­stica que complementa a afirmaÃ§Ã£o.'
      },
      {
        id: 70162,
        exercise_id: 7033,
        option_text: 'A maioria dos brasileiros cerca de (85%) considera importante a preservaÃ§Ã£o do meio ambiente.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses deveriam incluir a expressÃ£o "cerca de" junto com o percentual.'
      },
      {
        id: 70163,
        exercise_id: 7033,
        option_text: 'A (maioria dos brasileiros cerca de 85%) considera importante a preservaÃ§Ã£o do meio ambiente.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo parte da informaÃ§Ã£o principal junto com a informaÃ§Ã£o estatÃ­stica.'
      },
      {
        id: 70164,
        exercise_id: 7033,
        option_text: 'A maioria dos brasileiros cerca de 85% (considera importante) a preservaÃ§Ã£o do meio ambiente.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do predicado, nÃ£o a informaÃ§Ã£o estatÃ­stica.'
      },
      {
        id: 70165,
        exercise_id: 7033,
        option_text: '(A maioria dos brasileiros) cerca de 85% considera importante a preservaÃ§Ã£o do meio ambiente.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do sujeito, nÃ£o a informaÃ§Ã£o estatÃ­stica.'
      }
    ]
  },
  {
    id: 7034,
    category_id: 'parenteses-4',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente para adicionar uma informaÃ§Ã£o sobre localizaÃ§Ã£o?',
    explanation: 'Os parÃªnteses sÃ£o usados para adicionar informaÃ§Ãµes sobre localizaÃ§Ã£o que complementam a informaÃ§Ã£o principal.',
    difficulty: 4,
    options: [
      {
        id: 70166,
        exercise_id: 7034,
        option_text: 'O Rio Amazonas (que nasce no Peru) Ã© o maior rio do mundo em volume de Ã¡gua.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para adicionar a informaÃ§Ã£o sobre a localizaÃ§Ã£o da nascente do rio.'
      },
      {
        id: 70167,
        exercise_id: 7034,
        option_text: 'O Rio Amazonas que (nasce no Peru) Ã© o maior rio do mundo em volume de Ã¡gua.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o interrompendo incorretamente a estrutura da oraÃ§Ã£o relativa.'
      },
      {
        id: 70168,
        exercise_id: 7034,
        option_text: 'O (Rio Amazonas que nasce no Peru) Ã© o maior rio do mundo em volume de Ã¡gua.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo o sujeito principal junto com a informaÃ§Ã£o sobre localizaÃ§Ã£o.'
      },
      {
        id: 70169,
        exercise_id: 7034,
        option_text: 'O Rio Amazonas que nasce no Peru (Ã© o maior rio) do mundo em volume de Ã¡gua.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do predicado, nÃ£o a informaÃ§Ã£o sobre localizaÃ§Ã£o.'
      },
      {
        id: 70170,
        exercise_id: 7034,
        option_text: '(O Rio Amazonas) que nasce no Peru Ã© o maior rio do mundo em volume de Ã¡gua.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando apenas o nome do rio, nÃ£o a informaÃ§Ã£o sobre localizaÃ§Ã£o.'
      }
    ]
  },
  {
    id: 7035,
    category_id: 'parenteses-4',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para adicionar uma informaÃ§Ã£o temporal?',
    explanation: 'Os parÃªnteses sÃ£o usados para adicionar informaÃ§Ãµes temporais que complementam a informaÃ§Ã£o principal.',
    difficulty: 4,
    options: [
      {
        id: 70171,
        exercise_id: 7035,
        option_text: 'A Segunda Guerra Mundial (1939-1945) foi um dos conflitos mais devastadores da histÃ³ria.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para adicionar a informaÃ§Ã£o sobre o perÃ­odo do conflito.'
      },
      {
        id: 70172,
        exercise_id: 7035,
        option_text: 'A Segunda Guerra Mundial 1939-(1945) foi um dos conflitos mais devastadores da histÃ³ria.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando apenas parte da informaÃ§Ã£o temporal.'
      },
      {
        id: 70173,
        exercise_id: 7035,
        option_text: 'A (Segunda Guerra Mundial 1939-1945) foi um dos conflitos mais devastadores da histÃ³ria.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo o nome do evento junto com a informaÃ§Ã£o temporal.'
      },
      {
        id: 70174,
        exercise_id: 7035,
        option_text: 'A Segunda Guerra Mundial 1939-1945 (foi um dos conflitos) mais devastadores da histÃ³ria.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do predicado, nÃ£o a informaÃ§Ã£o temporal.'
      },
      {
        id: 70175,
        exercise_id: 7035,
        option_text: '(A Segunda Guerra Mundial) 1939-1945 foi um dos conflitos mais devastadores da histÃ³ria.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando o nome do evento, nÃ£o a informaÃ§Ã£o temporal.'
      }
    ]
  },
  {
    id: 7036,
    category_id: 'parenteses-4',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente para adicionar uma informaÃ§Ã£o sobre quantidade?',
    explanation: 'Os parÃªnteses sÃ£o usados para adicionar informaÃ§Ãµes sobre quantidades que complementam a informaÃ§Ã£o principal.',
    difficulty: 4,
    options: [
      {
        id: 70176,
        exercise_id: 7036,
        option_text: 'Os participantes do evento (mais de 500 pessoas) lotaram o auditÃ³rio principal.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para adicionar a informaÃ§Ã£o sobre a quantidade de participantes.'
      },
      {
        id: 70177,
        exercise_id: 7036,
        option_text: 'Os participantes do evento mais de (500 pessoas) lotaram o auditÃ³rio principal.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses deveriam incluir a expressÃ£o "mais de" junto com o nÃºmero.'
      },
      {
        id: 70178,
        exercise_id: 7036,
        option_text: 'Os (participantes do evento mais de 500 pessoas) lotaram o auditÃ³rio principal.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo o sujeito principal junto com a informaÃ§Ã£o sobre quantidade.'
      },
      {
        id: 70179,
        exercise_id: 7036,
        option_text: 'Os participantes do evento mais de 500 pessoas (lotaram) o auditÃ³rio principal.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando o verbo, nÃ£o a informaÃ§Ã£o sobre quantidade.'
      },
      {
        id: 70180,
        exercise_id: 7036,
        option_text: '(Os participantes do evento) mais de 500 pessoas lotaram o auditÃ³rio principal.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do sujeito, nÃ£o a informaÃ§Ã£o sobre quantidade.'
      }
    ]
  },
  {
    id: 7037,
    category_id: 'parenteses-4',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para adicionar uma informaÃ§Ã£o sobre preÃ§o?',
    explanation: 'Os parÃªnteses sÃ£o usados para adicionar informaÃ§Ãµes sobre preÃ§os que complementam a informaÃ§Ã£o principal.',
    difficulty: 4,
    options: [
      {
        id: 70181,
        exercise_id: 7037,
        option_text: 'O novo smartphone (custando R$ 3.500,00) serÃ¡ lanÃ§ado no prÃ³ximo mÃªs.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para adicionar a informaÃ§Ã£o sobre o preÃ§o do produto.'
      },
      {
        id: 70182,
        exercise_id: 7037,
        option_text: 'O novo smartphone custando (R$ 3.500,00) serÃ¡ lanÃ§ado no prÃ³ximo mÃªs.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses deveriam incluir o gerundio "custando" junto com o valor.'
      },
      {
        id: 70183,
        exercise_id: 7037,
        option_text: 'O (novo smartphone custando R$ 3.500,00) serÃ¡ lanÃ§ado no prÃ³ximo mÃªs.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo o sujeito principal junto com a informaÃ§Ã£o sobre preÃ§o.'
      },
      {
        id: 70184,
        exercise_id: 7037,
        option_text: 'O novo smartphone custando R$ 3.500,00 (serÃ¡ lanÃ§ado) no prÃ³ximo mÃªs.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do predicado, nÃ£o a informaÃ§Ã£o sobre preÃ§o.'
      },
      {
        id: 70185,
        exercise_id: 7037,
        option_text: '(O novo smartphone) custando R$ 3.500,00 serÃ¡ lanÃ§ado no prÃ³ximo mÃªs.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando o sujeito, nÃ£o a informaÃ§Ã£o sobre preÃ§o.'
      }
    ]
  },
  {
    id: 7038,
    category_id: 'parenteses-4',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para adicionar uma informaÃ§Ã£o sobre medidas?',
    explanation: 'Os parÃªnteses sÃ£o usados para adicionar informaÃ§Ãµes sobre medidas que complementam a informaÃ§Ã£o principal.',
    difficulty: 4,
    options: [
      {
        id: 70186,
        exercise_id: 7038,
        option_text: 'O novo edifÃ­cio (com 50 metros de altura) serÃ¡ inaugurado no prÃ³ximo mÃªs.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para adicionar a informaÃ§Ã£o sobre a altura do edifÃ­cio.'
      },
      {
        id: 70187,
        exercise_id: 7038,
        option_text: 'O novo edifÃ­cio com (50 metros de altura) serÃ¡ inaugurado no prÃ³ximo mÃªs.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses deveriam incluir a preposiÃ§Ã£o "com" junto com a medida.'
      },
      {
        id: 70188,
        exercise_id: 7038,
        option_text: 'O (novo edifÃ­cio com 50 metros de altura) serÃ¡ inaugurado no prÃ³ximo mÃªs.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo o sujeito principal junto com a informaÃ§Ã£o sobre medida.'
      },
      {
        id: 70189,
        exercise_id: 7038,
        option_text: 'O novo edifÃ­cio com 50 metros de altura (serÃ¡ inaugurado) no prÃ³ximo mÃªs.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do predicado, nÃ£o a informaÃ§Ã£o sobre medida.'
      },
      {
        id: 70190,
        exercise_id: 7038,
        option_text: '(O novo edifÃ­cio) com 50 metros de altura serÃ¡ inaugurado no prÃ³ximo mÃªs.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do sujeito, nÃ£o a informaÃ§Ã£o sobre medida.'
      }
    ]
  },
  {
    id: 7039,
    category_id: 'parenteses-4',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente para adicionar uma informaÃ§Ã£o sobre capacidade?',
    explanation: 'Os parÃªnteses sÃ£o usados para adicionar informaÃ§Ãµes sobre capacidade que complementam a informaÃ§Ã£o principal.',
    difficulty: 4,
    options: [
      {
        id: 70191,
        exercise_id: 7039,
        option_text: 'O novo estÃ¡dio (com capacidade para 60 mil pessoas) serÃ¡ palco da final do campeonato.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para adicionar a informaÃ§Ã£o sobre a capacidade do estÃ¡dio.'
      },
      {
        id: 70192,
        exercise_id: 7039,
        option_text: 'O novo estÃ¡dio com (capacidade para 60 mil pessoas) serÃ¡ palco da final do campeonato.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses deveriam incluir a preposiÃ§Ã£o "com" junto com a informaÃ§Ã£o sobre capacidade.'
      },
      {
        id: 70193,
        exercise_id: 7039,
        option_text: 'O (novo estÃ¡dio com capacidade para 60 mil pessoas) serÃ¡ palco da final do campeonato.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo o sujeito principal junto com a informaÃ§Ã£o sobre capacidade.'
      },
      {
        id: 70194,
        exercise_id: 7039,
        option_text: 'O novo estÃ¡dio com capacidade para 60 mil pessoas (serÃ¡ palco) da final do campeonato.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do predicado, nÃ£o a informaÃ§Ã£o sobre capacidade.'
      },
      {
        id: 70195,
        exercise_id: 7039,
        option_text: '(O novo estÃ¡dio) com capacidade para 60 mil pessoas serÃ¡ palco da final do campeonato.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do sujeito, nÃ£o a informaÃ§Ã£o sobre capacidade.'
      }
    ]
  },
  {
    id: 7040,
    category_id: 'parenteses-4',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para adicionar uma informaÃ§Ã£o sobre distÃ¢ncia?',
    explanation: 'Os parÃªnteses sÃ£o usados para adicionar informaÃ§Ãµes sobre distÃ¢ncias que complementam a informaÃ§Ã£o principal.',
    difficulty: 4,
    options: [
      {
        id: 70196,
        exercise_id: 7040,
        option_text: 'A cidade de Ouro Preto (a 100 km de Belo Horizonte) Ã© um importante destino turÃ­stico de Minas Gerais.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para adicionar a informaÃ§Ã£o sobre a distÃ¢ncia entre as cidades.'
      },
      {
        id: 70197,
        exercise_id: 7040,
        option_text: 'A cidade de Ouro Preto a (100 km de Belo Horizonte) Ã© um importante destino turÃ­stico de Minas Gerais.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses deveriam incluir a preposiÃ§Ã£o "a" junto com a informaÃ§Ã£o sobre distÃ¢ncia.'
      },
      {
        id: 70198,
        exercise_id: 7040,
        option_text: 'A (cidade de Ouro Preto a 100 km de Belo Horizonte) Ã© um importante destino turÃ­stico de Minas Gerais.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo o sujeito principal junto com a informaÃ§Ã£o sobre distÃ¢ncia.'
      },
      {
        id: 70199,
        exercise_id: 7040,
        option_text: 'A cidade de Ouro Preto a 100 km de Belo Horizonte (Ã© um importante) destino turÃ­stico de Minas Gerais.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do predicado, nÃ£o a informaÃ§Ã£o sobre distÃ¢ncia.'
      },
      {
        id: 70200,
        exercise_id: 7040,
        option_text: '(A cidade de Ouro Preto) a 100 km de Belo Horizonte Ã© um importante destino turÃ­stico de Minas Gerais.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do sujeito, nÃ£o a informaÃ§Ã£o sobre distÃ¢ncia.'
      }
    ]
  }
];

// ExercÃ­cios do mÃ³dulo ParÃªnteses 5
export const parentesesExercicio5: Exercise[] = [
  {
    id: 7041,
    category_id: 'parenteses-5',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para indicar uma possibilidade alternativa?',
    explanation: 'Os parÃªnteses podem ser usados para indicar uma possibilidade alternativa ou uma opÃ§Ã£o.',
    difficulty: 5,
    options: [
      {
        id: 70201,
        exercise_id: 7041,
        option_text: 'Favor enviar o(s) documento(s) solicitado(s) para o departamento financeiro.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses com "s" estÃ£o sendo usados adequadamente para indicar a possibilidade de singular ou plural.'
      },
      {
        id: 70202,
        exercise_id: 7041,
        option_text: 'Favor enviar o(s documento(s) solicitado(s) para o departamento financeiro.',
        is_correct: false,
        explanation: 'Incorreto! O primeiro parÃªnteses estÃ¡ mal posicionado, deveria incluir apenas o "s".'
      },
      {
        id: 70203,
        exercise_id: 7041,
        option_text: 'Favor enviar (o)s documento(s) solicitado(s) para o departamento financeiro.',
        is_correct: false,
        explanation: 'Incorreto! O primeiro parÃªnteses estÃ¡ isolando incorretamente o artigo em vez de apenas o "s".'
      },
      {
        id: 70204,
        exercise_id: 7041,
        option_text: 'Favor enviar o(s) documento(s) (solicitado)(s) para o departamento financeiro.',
        is_correct: false,
        explanation: 'Incorreto! O Ãºltimo par de parÃªnteses estÃ¡ incorreto, deveria ser solicitado(s).'
      },
      {
        id: 70205,
        exercise_id: 7041,
        option_text: 'Favor (enviar) o(s) documento(s) solicitado(s) para o departamento financeiro.',
        is_correct: false,
        explanation: 'Incorreto! O primeiro par de parÃªnteses estÃ¡ isolando o verbo, que nÃ£o Ã© uma possibilidade alternativa.'
      }
    ]
  },
  {
    id: 7042,
    category_id: 'parenteses-5',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente para indicar um comentÃ¡rio irÃ´nico?',
    explanation: 'Os parÃªnteses podem ser usados para inserir comentÃ¡rios irÃ´nicos ou humorÃ­sticos em um texto.',
    difficulty: 5,
    options: [
      {
        id: 70206,
        exercise_id: 7042,
        option_text: 'O palestrante, um especialista (segundo ele mesmo) no assunto, falou por duas horas.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para inserir um comentÃ¡rio irÃ´nico sobre a autodenominaÃ§Ã£o do palestrante.'
      },
      {
        id: 70207,
        exercise_id: 7042,
        option_text: 'O palestrante, um (especialista) segundo ele mesmo no assunto, falou por duas horas.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando apenas a palavra "especialista", nÃ£o o comentÃ¡rio irÃ´nico completo.'
      },
      {
        id: 70208,
        exercise_id: 7042,
        option_text: 'O palestrante, (um especialista segundo ele mesmo) no assunto, falou por duas horas.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo parte da informaÃ§Ã£o principal junto com o comentÃ¡rio irÃ´nico.'
      },
      {
        id: 70209,
        exercise_id: 7042,
        option_text: 'O palestrante, um especialista segundo ele mesmo (no assunto), falou por duas horas.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando "no assunto", que nÃ£o Ã© o comentÃ¡rio irÃ´nico.'
      },
      {
        id: 70210,
        exercise_id: 7042,
        option_text: '(O palestrante), um especialista segundo ele mesmo no assunto, falou por duas horas.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando o sujeito da oraÃ§Ã£o, nÃ£o inserindo um comentÃ¡rio irÃ´nico.'
      }
    ]
  },
  {
    id: 7043,
    category_id: 'parenteses-5',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para indicar uma opÃ§Ã£o de gÃªnero?',
    explanation: 'Os parÃªnteses podem ser usados para indicar opÃ§Ãµes de gÃªnero em textos formais.',
    difficulty: 5,
    options: [
      {
        id: 70211,
        exercise_id: 7043,
        option_text: 'O(a) candidato(a) deverÃ¡ apresentar-se munido(a) de documento oficial com foto.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para indicar a possibilidade de gÃªnero masculino ou feminino.'
      },
      {
        id: 70212,
        exercise_id: 7043,
        option_text: 'O (a) candidato (a) deverÃ¡ apresentar-se munido (a) de documento oficial com foto.',
        is_correct: false,
        explanation: 'Incorreto! NÃ£o deve haver espaÃ§o entre o artigo ou substantivo e a letra entre parÃªnteses.'
      },
      {
        id: 70213,
        exercise_id: 7043,
        option_text: '(O)a candidat(o)a deverÃ¡ apresentar-se munid(o)a de documento oficial com foto.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o posicionados incorretamente, isolando letras que nÃ£o representam opÃ§Ãµes de gÃªnero.'
      },
      {
        id: 70214,
        exercise_id: 7043,
        option_text: 'O(a candidato)(a) deverÃ¡ apresentar-se munido(a) de documento oficial com foto.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o mal posicionados, separando incorretamente as palavras.'
      },
      {
        id: 70215,
        exercise_id: 7043,
        option_text: 'O/a candidato/a deverÃ¡ apresentar-se munido/a de documento oficial com foto.',
        is_correct: false,
        explanation: 'Incorreto! Embora a barra possa ser usada para indicar opÃ§Ãµes de gÃªnero, a questÃ£o pede especificamente o uso de parÃªnteses.'
      }
    ]
  },
  {
    id: 7044,
    category_id: 'parenteses-5',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente para indicar uma forma abreviada?',
    explanation: 'Os parÃªnteses podem ser usados para indicar formas abreviadas de palavras ou expressÃµes.',
    difficulty: 5,
    options: [
      {
        id: 70216,
        exercise_id: 7044,
        option_text: 'A OrganizaÃ§Ã£o das NaÃ§Ãµes Unidas (ONU) foi fundada em 1945, apÃ³s o fim da Segunda Guerra Mundial.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para indicar a forma abreviada da organizaÃ§Ã£o.'
      },
      {
        id: 70217,
        exercise_id: 7044,
        option_text: 'A (OrganizaÃ§Ã£o das NaÃ§Ãµes Unidas) ONU foi fundada em 1945, apÃ³s o fim da Segunda Guerra Mundial.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses deveriam conter a sigla, nÃ£o o nome completo da organizaÃ§Ã£o.'
      },
      {
        id: 70218,
        exercise_id: 7044,
        option_text: 'A OrganizaÃ§Ã£o das NaÃ§Ãµes Unidas(ONU)foi fundada em 1945, apÃ³s o fim da Segunda Guerra Mundial.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaÃ§os antes e depois dos parÃªnteses.'
      },
      {
        id: 70219,
        exercise_id: 7044,
        option_text: 'A OrganizaÃ§Ã£o das NaÃ§Ãµes Unidas - ONU - foi fundada em 1945, apÃ³s o fim da Segunda Guerra Mundial.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessÃ£o possa ser usado para destacar informaÃ§Ãµes, a questÃ£o pede especificamente o uso de parÃªnteses.'
      },
      {
        id: 70220,
        exercise_id: 7044,
        option_text: 'A (ONU) OrganizaÃ§Ã£o das NaÃ§Ãµes Unidas foi fundada em 1945, apÃ³s o fim da Segunda Guerra Mundial.',
        is_correct: false,
        explanation: 'Incorreto! A sigla deve vir depois do nome completo, nÃ£o antes.'
      }
    ]
  },
  {
    id: 7045,
    category_id: 'parenteses-5',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para indicar uma opÃ§Ã£o num formulÃ¡rio?',
    explanation: 'Os parÃªnteses podem ser usados para indicar opÃ§Ãµes a serem marcadas em formulÃ¡rios.',
    difficulty: 5,
    options: [
      {
        id: 70221,
        exercise_id: 7045,
        option_text: 'Estado civil: ( ) Solteiro(a) ( ) Casado(a) ( ) Divorciado(a) ( ) ViÃºvo(a)',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para indicar opÃ§Ãµes a serem marcadas em um formulÃ¡rio.'
      },
      {
        id: 70222,
        exercise_id: 7045,
        option_text: 'Estado civil: () Solteiro(a) () Casado(a) () Divorciado(a) () ViÃºvo(a)',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaÃ§os entre os parÃªnteses vazios e as opÃ§Ãµes.'
      },
      {
        id: 70223,
        exercise_id: 7045,
        option_text: 'Estado civil: ( Solteiro(a) ) ( Casado(a) ) ( Divorciado(a) ) ( ViÃºvo(a) )',
        is_correct: false,
        explanation: 'Incorreto! As opÃ§Ãµes estÃ£o dentro dos parÃªnteses, quando deveriam estar fora.'
      },
      {
        id: 70224,
        exercise_id: 7045,
        option_text: 'Estado civil: [  ] Solteiro(a) [  ] Casado(a) [  ] Divorciado(a) [  ] ViÃºvo(a)',
        is_correct: false,
        explanation: 'Incorreto! Embora os colchetes possam ser usados em formulÃ¡rios, a questÃ£o pede especificamente o uso de parÃªnteses.'
      },
      {
        id: 70225,
        exercise_id: 7045,
        option_text: 'Estado civil: (X) Solteiro(a) ( ) Casado(a) ( ) Divorciado(a) ( ) ViÃºvo(a)',
        is_correct: false,
        explanation: 'Incorreto! A questÃ£o pede o uso correto dos parÃªnteses para indicar opÃ§Ãµes, nÃ£o para mostrar uma opÃ§Ã£o jÃ¡ marcada.'
      }
    ]
  },
  {
    id: 7046,
    category_id: 'parenteses-5',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente para indicar uma nota de rodapÃ©?',
    explanation: 'Os parÃªnteses podem ser usados para indicar notas de rodapÃ© em textos acadÃªmicos.',
    difficulty: 5,
    options: [
      {
        id: 70226,
        exercise_id: 7046,
        option_text: 'Segundo o autor(1), a teoria apresentada revolucionou o campo de estudos.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para indicar uma nota de rodapÃ©.'
      },
      {
        id: 70227,
        exercise_id: 7046,
        option_text: 'Segundo o autor (1, a teoria apresentada revolucionou o campo de estudos.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de fechamento apÃ³s o nÃºmero da nota.'
      },
      {
        id: 70228,
        exercise_id: 7046,
        option_text: 'Segundo o (autor)1, a teoria apresentada revolucionou o campo de estudos.',
        is_correct: false,
        explanation: 'Incorreto! O nÃºmero da nota de rodapÃ© deve estar dentro dos parÃªnteses, nÃ£o fora.'
      },
      {
        id: 70229,
        exercise_id: 7046,
        option_text: 'Segundo o autor[1], a teoria apresentada revolucionou o campo de estudos.',
        is_correct: false,
        explanation: 'Incorreto! Embora os colchetes possam ser usados para notas em alguns estilos, a questÃ£o pede especificamente o uso de parÃªnteses.'
      },
      {
        id: 70230,
        exercise_id: 7046,
        option_text: 'Segundo o autor 1), a teoria apresentada revolucionou o campo de estudos.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de abertura antes do nÃºmero da nota.'
      }
    ]
  },
  {
    id: 7047,
    category_id: 'parenteses-5',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para indicar uma equaÃ§Ã£o matemÃ¡tica?',
    explanation: 'Os parÃªnteses sÃ£o usados em equaÃ§Ãµes matemÃ¡ticas para agrupar termos e indicar a ordem das operaÃ§Ãµes.',
    difficulty: 5,
    options: [
      {
        id: 70231,
        exercise_id: 7047,
        option_text: 'O resultado da expressÃ£o 2 x (3 + 4) Ã© igual a 14.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para agrupar a soma que deve ser feita antes da multiplicaÃ§Ã£o.'
      },
      {
        id: 70232,
        exercise_id: 7047,
        option_text: 'O resultado da expressÃ£o 2 x 3 + 4) Ã© igual a 14.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de abertura antes do nÃºmero 3.'
      },
      {
        id: 70233,
        exercise_id: 7047,
        option_text: 'O resultado da expressÃ£o 2 x (3 + 4 Ã© igual a 14.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de fechamento apÃ³s o nÃºmero 4.'
      },
      {
        id: 70234,
        exercise_id: 7047,
        option_text: 'O resultado da expressÃ£o (2 x 3) + 4 Ã© igual a 14.',
        is_correct: false,
        explanation: 'Incorreto! Embora o uso dos parÃªnteses esteja correto, o resultado da expressÃ£o (2 x 3) + 4 Ã© 10, nÃ£o 14.'
      },
      {
        id: 70235,
        exercise_id: 7047,
        option_text: 'O resultado da expressÃ£o 2 x [3 + 4] Ã© igual a 14.',
        is_correct: false,
        explanation: 'Incorreto! Embora os colchetes possam ser usados em expressÃµes matemÃ¡ticas, a questÃ£o pede especificamente o uso de parÃªnteses.'
      }
    ]
  },
  {
    id: 7048,
    category_id: 'parenteses-5',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente para indicar uma observaÃ§Ã£o em um manual de instruÃ§Ãµes?',
    explanation: 'Os parÃªnteses podem ser usados em manuais de instruÃ§Ãµes para adicionar observaÃ§Ãµes importantes.',
    difficulty: 5,
    options: [
      {
        id: 70236,
        exercise_id: 7048,
        option_text: 'Conecte o cabo de alimentaÃ§Ã£o Ã  tomada (certifique-se de que a voltagem seja compatÃ­vel).',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para adicionar uma observaÃ§Ã£o importante sobre a voltagem.'
      },
      {
        id: 70237,
        exercise_id: 7048,
        option_text: 'Conecte o cabo de alimentaÃ§Ã£o (certifique-se de que a voltagem seja compatÃ­vel) Ã  tomada.',
        is_correct: false,
        explanation: 'Incorreto! A observaÃ§Ã£o estÃ¡ interrompendo a instruÃ§Ã£o principal, quando deveria vir ao final.'
      },
      {
        id: 70238,
        exercise_id: 7048,
        option_text: '(Conecte o cabo de alimentaÃ§Ã£o Ã  tomada) certifique-se de que a voltagem seja compatÃ­vel.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando a instruÃ§Ã£o principal, nÃ£o a observaÃ§Ã£o.'
      },
      {
        id: 70239,
        exercise_id: 7048,
        option_text: 'Conecte o cabo de alimentaÃ§Ã£o Ã  tomada certifique-se (de que a voltagem seja compatÃ­vel).',
        is_correct: false,
        explanation: 'Incorreto! Falta pontuaÃ§Ã£o entre a instruÃ§Ã£o principal e a observaÃ§Ã£o, e os parÃªnteses estÃ£o isolando apenas parte da observaÃ§Ã£o.'
      },
      {
        id: 70240,
        exercise_id: 7048,
        option_text: 'Conecte o cabo de alimentaÃ§Ã£o Ã  tomada - certifique-se de que a voltagem seja compatÃ­vel.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessÃ£o possa ser usado para adicionar observaÃ§Ãµes, a questÃ£o pede especificamente o uso de parÃªnteses.'
      }
    ]
  },
  {
    id: 7049,
    category_id: 'parenteses-5',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para indicar uma pronunÃºncia?',
    explanation: 'Os parÃªnteses podem ser usados para indicar a pronÃºncia de palavras estrangeiras ou pouco conhecidas.',
    difficulty: 5,
    options: [
      {
        id: 70241,
        exercise_id: 7049,
        option_text: 'A palavra "software" (pronuncia-se "sÃ³ftwer") Ã© um termo em inglÃªs muito usado na informÃ¡tica.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para indicar a pronÃºncia da palavra estrangeira.'
      },
      {
        id: 70242,
        exercise_id: 7049,
        option_text: 'A palavra ("software" pronuncia-se "sÃ³ftwer") Ã© um termo em inglÃªs muito usado na informÃ¡tica.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo a palavra junto com sua pronÃºncia, quando deveriam isolar apenas a pronÃºncia.'
      },
      {
        id: 70243,
        exercise_id: 7049,
        option_text: 'A palavra "software" pronuncia-se ("sÃ³ftwer") Ã© um termo em inglÃªs muito usado na informÃ¡tica.',
        is_correct: false,
        explanation: 'Incorreto! Falta pontuaÃ§Ã£o entre o verbo "pronuncia-se" e a pronÃºncia.'
      },
      {
        id: 70244,
        exercise_id: 7049,
        option_text: 'A palavra "software" (pronuncia-se "sÃ³ftwer" Ã© um termo em inglÃªs muito usado na informÃ¡tica.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de fechamento apÃ³s a pronÃºncia.'
      },
      {
        id: 70245,
        exercise_id: 7049,
        option_text: 'A palavra "software" - pronuncia-se "sÃ³ftwer" - Ã© um termo em inglÃªs muito usado na informÃ¡tica.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessÃ£o possa ser usado para adicionar informaÃ§Ãµes, a questÃ£o pede especificamente o uso de parÃªnteses.'
      }
    ]
  },
  {
    id: 7050,
    category_id: 'parenteses-5',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente para indicar um resultado em uma operaÃ§Ã£o matemÃ¡tica?',
    explanation: 'Os parÃªnteses podem ser usados para indicar o resultado de uma operaÃ§Ã£o matemÃ¡tica.',
    difficulty: 5,
    options: [
      {
        id: 70246,
        exercise_id: 7050,
        option_text: 'A soma de 15 + 27 = (42) estÃ¡ correta.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para destacar o resultado da operaÃ§Ã£o matemÃ¡tica.'
      },
      {
        id: 70247,
        exercise_id: 7050,
        option_text: 'A soma de (15 + 27) = 42 estÃ¡ correta.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando a operaÃ§Ã£o, nÃ£o o resultado.'
      },
      {
        id: 70248,
        exercise_id: 7050,
        option_text: 'A soma de 15 + 27 = 42) estÃ¡ correta.',
        is_correct: false,
        explanation: 'Incorreto! Falta o parÃªntese de abertura antes do resultado.'
      },
      {
        id: 70249,
        exercise_id: 7050,
        option_text: 'A soma de 15 + 27 (= 42) estÃ¡ correta.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo o sinal de igualdade junto com o resultado.'
      },
      {
        id: 70250,
        exercise_id: 7050,
        option_text: 'A soma de 15 + 27 = [42] estÃ¡ correta.',
        is_correct: false,
        explanation: 'Incorreto! Embora os colchetes possam ser usados para destacar informaÃ§Ãµes, a questÃ£o pede especificamente o uso de parÃªnteses.'
      }
    ]
  }
];

// ExercÃ­cios da prova final de ParÃªnteses
export const provaParenteses: Exercise[] = [
  {
    id: 7501,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para inserir uma informaÃ§Ã£o adicional?',
    explanation: 'Os parÃªnteses sÃ£o usados para inserir informaÃ§Ãµes adicionais ou explicativas que nÃ£o sÃ£o essenciais para a compreensÃ£o da frase principal.',
    difficulty: 5,
    options: [
      {
        id: 75001,
        exercise_id: 7501,
        option_text: 'O presidente (eleito em outubro do ano passado) anunciou novas medidas econÃ´micas ontem.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para inserir uma informaÃ§Ã£o adicional sobre o presidente.'
      },
      {
        id: 75002,
        exercise_id: 7501,
        option_text: 'O presidente eleito (em outubro do ano passado anunciou) novas medidas econÃ´micas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o separando incorretamente elementos da frase que deveriam permanecer unidos.'
      },
      {
        id: 75003,
        exercise_id: 7501,
        option_text: 'O (presidente eleito em outubro do ano passado) anunciou novas medidas econÃ´micas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando todo o sujeito, nÃ£o apenas a informaÃ§Ã£o adicional.'
      },
      {
        id: 75004,
        exercise_id: 7501,
        option_text: 'O presidente eleito em outubro do ano passado (anunciou novas medidas) econÃ´micas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando parte do predicado, nÃ£o uma informaÃ§Ã£o adicional.'
      },
      {
        id: 75005,
        exercise_id: 7501,
        option_text: '(O presidente) eleito em outubro do ano passado anunciou novas medidas econÃ´micas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando apenas parte do sujeito, nÃ£o uma informaÃ§Ã£o adicional.'
      }
    ]
  },
  {
    id: 7502,
    category_id: 'prova-parenteses',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente para indicar uma sigla?',
    explanation: 'Os parÃªnteses sÃ£o usados para apresentar siglas apÃ³s o nome completo da entidade ou termo.',
    difficulty: 5,
    options: [
      {
        id: 75006,
        exercise_id: 7502,
        option_text: 'A OrganizaÃ§Ã£o Mundial da SaÃºde (OMS) emitiu um alerta sobre a nova doenÃ§a.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para introduzir a sigla apÃ³s o nome completo.'
      },
      {
        id: 75007,
        exercise_id: 7502,
        option_text: 'A (OrganizaÃ§Ã£o Mundial da SaÃºde) OMS emitiu um alerta sobre a nova doenÃ§a.',
        is_correct: false,
        explanation: 'Incorreto! A sigla deveria estar dentro dos parÃªnteses, nÃ£o fora.'
      },
      {
        id: 75008,
        exercise_id: 7502,
        option_text: 'A OrganizaÃ§Ã£o Mundial da SaÃºde(OMS)emitiu um alerta sobre a nova doenÃ§a.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaÃ§os antes e depois dos parÃªnteses.'
      },
      {
        id: 75009,
        exercise_id: 7502,
        option_text: 'A (OMS) OrganizaÃ§Ã£o Mundial da SaÃºde emitiu um alerta sobre a nova doenÃ§a.',
        is_correct: false,
        explanation: 'Incorreto! A sigla deve vir depois do nome completo, nÃ£o antes.'
      },
      {
        id: 75010,
        exercise_id: 7502,
        option_text: 'A OrganizaÃ§Ã£o Mundial da SaÃºde - OMS - emitiu um alerta sobre a nova doenÃ§a.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessÃ£o possa ser usado para destacar informaÃ§Ãµes, a questÃ£o pede especificamente o uso de parÃªnteses.'
      }
    ]
  },
  {
    id: 7503,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para indicar uma data?',
    explanation: 'Os parÃªnteses sÃ£o frequentemente usados para indicar datas que complementam a informaÃ§Ã£o principal.',
    difficulty: 5,
    options: [
      {
        id: 75011,
        exercise_id: 7503,
        option_text: 'A DeclaraÃ§Ã£o Universal dos Direitos Humanos (1948) Ã© um documento marco na histÃ³ria dos direitos humanos.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para indicar o ano da DeclaraÃ§Ã£o.'
      },
      {
        id: 75012,
        exercise_id: 7503,
        option_text: 'A DeclaraÃ§Ã£o (Universal dos Direitos Humanos 1948) Ã© um documento marco na histÃ³ria dos direitos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o incluindo parte do nome oficial junto com a data.'
      },
      {
        id: 75013,
        exercise_id: 7503,
        option_text: 'A DeclaraÃ§Ã£o Universal dos Direitos Humanos(1948)Ã© um documento marco na histÃ³ria dos direitos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaÃ§os antes e depois dos parÃªnteses.'
      },
      {
        id: 75014,
        exercise_id: 7503,
        option_text: 'A (DeclaraÃ§Ã£o Universal dos Direitos Humanos 1948) Ã© um documento marco na histÃ³ria dos direitos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o isolando todo o sujeito junto com a data.'
      },
      {
        id: 75015,
        exercise_id: 7503,
        option_text: 'A DeclaraÃ§Ã£o Universal dos Direitos Humanos - 1948 - Ã© um documento marco na histÃ³ria dos direitos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessÃ£o possa ser usado para destacar informaÃ§Ãµes, a questÃ£o pede especificamente o uso de parÃªnteses.'
      }
    ]
  },
  {
    id: 7504,
    category_id: 'prova-parenteses',
    question: 'Qual alternativa utiliza os parÃªnteses corretamente para fornecer uma traduÃ§Ã£o?',
    explanation: 'Os parÃªnteses podem ser usados para fornecer a traduÃ§Ã£o de uma palavra ou expressÃ£o em outro idioma.',
    difficulty: 5,
    options: [
      {
        id: 75016,
        exercise_id: 7504,
        option_text: 'O termo "deadline" (prazo final) Ã© muito utilizado no ambiente corporativo.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para fornecer a traduÃ§Ã£o do termo estrangeiro.'
      },
      {
        id: 75017,
        exercise_id: 7504,
        option_text: 'O termo ("deadline" prazo final) Ã© muito utilizado no ambiente corporativo.',
        is_correct: false,
        explanation: 'Incorreto! A traduÃ§Ã£o deve vir entre parÃªnteses apÃ³s o termo estrangeiro.'
      },
      {
        id: 75018,
        exercise_id: 7504,
        option_text: 'O termo "deadline"(prazo final)Ã© muito utilizado no ambiente corporativo.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaÃ§os antes e depois dos parÃªnteses.'
      },
      {
        id: 75019,
        exercise_id: 7504,
        option_text: 'O termo ("deadline") prazo final Ã© muito utilizado no ambiente corporativo.',
        is_correct: false,
        explanation: 'Incorreto! A traduÃ§Ã£o deve estar dentro dos parÃªnteses, nÃ£o o termo estrangeiro.'
      },
      {
        id: 75020,
        exercise_id: 7504,
        option_text: 'O termo "deadline" - prazo final - Ã© muito utilizado no ambiente corporativo.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessÃ£o possa ser usado para destacar informaÃ§Ãµes, a questÃ£o pede especificamente o uso de parÃªnteses.'
      }
    ]
  },
  {
    id: 7505,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parÃªnteses estÃ£o sendo usados corretamente para indicar uma possibilidade alternativa?',
    explanation: 'Os parÃªnteses podem ser usados para indicar uma possibilidade alternativa ou uma opÃ§Ã£o.',
    difficulty: 5,
    options: [
      {
        id: 75021,
        exercise_id: 7505,
        option_text: 'O(a) candidato(a) deve apresentar seu documento de identidade no dia da prova.',
        is_correct: true,
        explanation: 'Correto! Os parÃªnteses estÃ£o sendo usados adequadamente para indicar a possibilidade de gÃªnero masculino ou feminino.'
      },
      {
        id: 75022,
        exercise_id: 7505,
        option_text: 'O (a) candidato (a) deve apresentar seu documento de identidade no dia da prova.',
        is_correct: false,
        explanation: 'Incorreto! NÃ£o deve haver espaÃ§o entre o artigo e a letra entre parÃªnteses.'
      },
      {
        id: 75023,
        exercise_id: 7505,
        option_text: '(O)a candidat(o)a deve apresentar seu documento de identidade no dia da prova.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o posicionados incorretamente, isolando letras que nÃ£o representam alternativas.'
      },
      {
        id: 75024,
        exercise_id: 7505,
        option_text: 'O(a candidato)(a) deve apresentar seu documento de identidade no dia da prova.',
        is_correct: false,
        explanation: 'Incorreto! Os parÃªnteses estÃ£o mal posicionados, separando incorretamente as palavras.'
      },
      {
        id: 75025,
        exercise_id: 7505,
        option_text: 'O/a candidato/a deve apresentar seu documento de identidade no dia da prova.',
        is_correct: false,
        explanation: 'Incorreto! Embora a barra possa ser usada para indicar alternativas, a questÃ£o pede especificamente o uso de parÃªnteses.'
      }
    ]
  }
];

// Combinar todas as questÃµes da prova final (5 originais + 25 adicionais)
const todasQuestoesProvaParenteses: Exercise[] = [
  ...provaParenteses,                // 5 questÃµes originais
  ...additionalProvaParenteses,      // 10 questÃµes adicionais (parte 1)
  ...additionalProvaParenteses2,     // 5 questÃµes adicionais (parte 2)
  ...additionalProvaParenteses3      // 10 questÃµes adicionais (parte 3)
];

// Log para debug - verificar quantas questões temos no array
console.log(`[parentesesData] Total de questões na prova final: ${todasQuestoesProvaParenteses.length}`);
console.log(`[parentesesData] Primeiras 5 questões (originais): ${provaParenteses.length}`);
console.log(`[parentesesData] Questões adicionais parte 1: ${additionalProvaParenteses.length}`);
console.log(`[parentesesData] Questões adicionais parte 2: ${additionalProvaParenteses2.length}`);
console.log(`[parentesesData] Questões adicionais parte 3: ${additionalProvaParenteses3.length}`);


// FunÃ§Ã£o para obter exercÃ­cios por categoria
export async function getParentesesExercises(categoryId: string): Promise<Exercise[]> {
  // Retornar exercÃ­cios conforme a categoria solicitada
  console.log(`[getParentesesExercises] Carregando exercÃ­cios para categoria: ${categoryId}`);
  let result: Exercise[] = [];
  
  switch(categoryId) {
    case 'parenteses':
      // Retornar os exercÃ­cios do mÃ³dulo 1
      result = parentesesExercicio1;
      break;
    case 'parenteses-2':
      // Retornar os exercÃ­cios do mÃ³dulo 2
      result = parentesesExercicio2;
      break;
    case 'parenteses-3':
      // Retornar os exercÃ­cios do mÃ³dulo 3
      result = parentesesExercicio3;
      break;
    case 'parenteses-4':
      // Retornar os exercÃ­cios do mÃ³dulo 4
      result = parentesesExercicio4;
      break;
    case 'parenteses-5':
      // Retornar os exercÃ­cios do mÃ³dulo 5
      result = parentesesExercicio5;
      break;
    case 'prova-parenteses':
      // Retornar os exercÃ­cios da prova final (array combinado com 30 questÃµes)
      result = todasQuestoesProvaParenteses;
      console.log(`[getParentesesExercises] Prova final de parÃªnteses com ${result.length} questÃµes`);
      // Verificar se as questÃµes tÃªm a categoria correta
      const corretas = result.filter(q => q.category_id === 'prova-parenteses').length;
      console.log(`[getParentesesExercises] QuestÃµes com category_id correto: ${corretas}`);
      break;
    default:
      result = [];
  }
  
  console.log(`[getParentesesExercises] Retornando ${result.length} exercÃ­cios`);
  return result;
}
