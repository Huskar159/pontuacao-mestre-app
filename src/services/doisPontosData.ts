// Arquivo com dados locais para os exercícios de Dois Pontos
// Baseado nos scripts SQL criados anteriormente

import { Exercise, ExerciseOption } from './exerciseService';

// Exercícios do módulo Dois Pontos 1
export const doisPontosExercicio1: Exercise[] = [
  {
    id: 1001,
    category_id: 'dois-pontos',
    question: 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente:',
    explanation: 'Os dois pontos são usados para introduzir uma explicação, enumeração ou citação.',
    difficulty: 1,
    options: [
      {
        id: 10001,
        exercise_id: 1001,
        option_text: 'O professor disse: "Amanhã teremos prova."',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados antes de uma citação direta.'
      },
      {
        id: 10002,
        exercise_id: 1001,
        option_text: 'Precisamos de vários itens: canetas, lápis e cadernos.',
        is_correct: false,
        explanation: 'Os dois pontos são usados antes de uma enumeração, mas nesta questão estamos procurando outro uso.'
      },
      {
        id: 10003,
        exercise_id: 1001,
        option_text: 'Concluí: o problema era mais simples do que parecia.',
        is_correct: false,
        explanation: 'Os dois pontos são usados para introduzir uma conclusão, mas nesta questão estamos procurando outro uso.'
      },
      {
        id: 10004,
        exercise_id: 1001,
        option_text: 'Fui à loja, comprei tudo o que precisava: e voltei para casa.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos antes de "e" dessa forma.'
      },
      {
        id: 10005,
        exercise_id: 1001,
        option_text: 'Ele respondeu: que não viria à reunião.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos antes de "que" neste contexto.'
      }
    ]
  },
  {
    id: 1002,
    category_id: 'dois-pontos',
    question: 'Em qual das opções os dois pontos indicam uma explicação?',
    explanation: 'Os dois pontos podem ser usados para introduzir uma explicação do que foi mencionado anteriormente.',
    difficulty: 1,
    options: [
      {
        id: 10006,
        exercise_id: 1002,
        option_text: 'Ficou claro: ele não queria participar da atividade.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma explicação do que foi mencionado antes.'
      },
      {
        id: 10007,
        exercise_id: 1002,
        option_text: 'O resultado foi surpreendente: ninguém esperava um desempenho tão bom.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma explicação ou esclarecimento, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 10008,
        exercise_id: 1002,
        option_text: 'A conclusão é óbvia: precisamos mudar nossa estratégia.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma explicação ou conclusão, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 10009,
        exercise_id: 1002,
        option_text: 'Maria: chegou atrasada para a aula.',
        is_correct: false,
        explanation: 'Incorreto! Neste caso, não se usa dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 10010,
        exercise_id: 1002,
        option_text: 'Eles estavam preocupados: por causa da chuva.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos antes de "por causa" neste contexto.'
      }
    ]
  },
  {
    id: 1003,
    category_id: 'dois-pontos',
    question: 'Qual alternativa apresenta o uso correto dos dois pontos antes de uma enumeração?',
    explanation: 'Os dois pontos são usados antes de enumerações ou listagens.',
    difficulty: 1,
    options: [
      {
        id: 10011,
        exercise_id: 1003,
        option_text: 'Compramos vários itens: frutas, verduras e pães.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados antes de uma enumeração.'
      },
      {
        id: 10012,
        exercise_id: 1003,
        option_text: 'Precisamos de três ingredientes básicos: farinha, ovos e leite.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma enumeração depois de um termo anunciador, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 10013,
        exercise_id: 1003,
        option_text: 'As cores da bandeira são: verde, amarelo, azul e branco.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma enumeração após o verbo "ser", mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 10014,
        exercise_id: 1003,
        option_text: 'Os alunos: Pedro, João e Maria fizeram o trabalho.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito de seus elementos.'
      },
      {
        id: 10015,
        exercise_id: 1003,
        option_text: 'Eu fui para: a escola, o parque e o cinema.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após uma preposição.'
      }
    ]
  },
  {
    id: 1004,
    category_id: 'dois-pontos',
    question: 'Identifique a frase em que os dois pontos estão sendo usados corretamente antes de uma citação:',
    explanation: 'Os dois pontos são usados antes de citações diretas.',
    difficulty: 1,
    options: [
      {
        id: 10016,
        exercise_id: 1004,
        option_text: 'O diretor anunciou: "As aulas serão suspensas amanhã."',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados antes de uma citação direta.'
      },
      {
        id: 10017,
        exercise_id: 1004,
        option_text: 'João disse: "Não poderei ir à festa."',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma fala ou citação direta, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 10018,
        exercise_id: 1004,
        option_text: 'O aviso na porta dizia: "Fechado para manutenção."',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma citação de um texto escrito, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 10019,
        exercise_id: 1004,
        option_text: 'Maria pensou: que era melhor não comentar sobre o assunto.',
        is_correct: false,
        explanation: 'Incorreto! Após "pensou" seguido de "que", não se usam dois pontos, mas sim vírgula ou nada.'
      },
      {
        id: 10020,
        exercise_id: 1004,
        option_text: 'O professor explicou: sobre a matéria da prova.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos antes de "sobre" neste contexto.'
      }
    ]
  },
  {
    id: 1005,
    category_id: 'dois-pontos',
    question: 'Em qual frase os dois pontos estão sendo usados corretamente antes de uma fala?',
    explanation: 'Os dois pontos são usados antes de falas de personagens.',
    difficulty: 1,
    options: [
      {
        id: 10021,
        exercise_id: 1005,
        option_text: 'O professor perguntou: "Por que você chegou atrasado?"',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados antes de uma fala direta.'
      },
      {
        id: 10022,
        exercise_id: 1005,
        option_text: 'Ana respondeu: "Perdi o ônibus."',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma fala em um diálogo, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 10023,
        exercise_id: 1005,
        option_text: 'O cartaz dizia: "Promoção: 50% de desconto!"',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma fala ou citação de um texto escrito, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 10024,
        exercise_id: 1005,
        option_text: 'Ele me contou: que tinha viajado para o exterior.',
        is_correct: false,
        explanation: 'Incorreto! Após verbos como "contar" seguidos de "que", não se usam dois pontos.'
      },
      {
        id: 10025,
        exercise_id: 1005,
        option_text: 'O palestrante: "Foi um prazer estar aqui hoje."',
        is_correct: false,
        explanation: 'Incorreto! Falta um verbo de elocução antes dos dois pontos.'
      }
    ]
  },
  {
    id: 1006,
    category_id: 'dois-pontos',
    question: 'Qual alternativa apresenta o uso correto dos dois pontos introduzindo um esclarecimento?',
    explanation: 'Os dois pontos podem ser usados para introduzir um esclarecimento ou explicação.',
    difficulty: 1,
    options: [
      {
        id: 10026,
        exercise_id: 1006,
        option_text: 'A situação era clara: precisávamos de mais tempo para concluir o projeto.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem um esclarecimento.'
      },
      {
        id: 10027,
        exercise_id: 1006,
        option_text: 'O motivo do atraso foi simples: o trânsito estava congestionado.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma explicação, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 10028,
        exercise_id: 1006,
        option_text: 'A conclusão é evidente: teremos que refazer todo o trabalho.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma conclusão ou explicação, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 10029,
        exercise_id: 1006,
        option_text: 'Ela estava animada: porque ganhou um prêmio.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos antes de "porque" neste contexto.'
      },
      {
        id: 10030,
        exercise_id: 1006,
        option_text: 'O livro: trata de aventuras no espaço.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 1007,
    category_id: 'dois-pontos',
    question: 'Identifique a opção em que os dois pontos estão sendo usados adequadamente em um texto informativo:',
    explanation: 'Os dois pontos são usados em textos informativos para introduzir explicações ou exemplos.',
    difficulty: 1,
    options: [
      {
        id: 10031,
        exercise_id: 1007,
        option_text: 'Importante destacar: esta informação é confidencial.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados para introduzir uma informação importante em textos informativos.'
      },
      {
        id: 10032,
        exercise_id: 1007,
        option_text: 'Nota: os valores apresentados podem sofrer alterações.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma observação ou nota em textos informativos, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 10033,
        exercise_id: 1007,
        option_text: 'Atenção: as inscrições terminam amanhã.',
        is_correct: false,
        explanation: 'Os dois pontos são usados após palavras ou expressões de alerta em textos informativos, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 10034,
        exercise_id: 1007,
        option_text: 'O documento: foi assinado pelo diretor.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 10035,
        exercise_id: 1007,
        option_text: 'A empresa informou: que haverá mudanças.',
        is_correct: false,
        explanation: 'Incorreto! Após verbos como "informar" seguidos de "que", não se usam dois pontos.'
      }
    ]
  },
  {
    id: 1008,
    category_id: 'dois-pontos',
    question: 'Em qual das frases os dois pontos estão sendo usados corretamente em um diálogo?',
    explanation: 'Os dois pontos são usados para introduzir falas em diálogos.',
    difficulty: 1,
    options: [
      {
        id: 10036,
        exercise_id: 1008,
        option_text: 'Carlos perguntou: "Que horas são?"',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados para introduzir falas em diálogos.'
      },
      {
        id: 10037,
        exercise_id: 1008,
        option_text: 'Maria respondeu: "São duas horas."',
        is_correct: false,
        explanation: 'Os dois pontos introduzem a resposta em um diálogo, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 10038,
        exercise_id: 1008,
        option_text: 'O pai alertou: "Não chegue tarde!"',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma fala em um diálogo, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 10039,
        exercise_id: 1008,
        option_text: 'Ele disse: que não sabia a resposta.',
        is_correct: false,
        explanation: 'Incorreto! Após verbos dicendi seguidos de "que", não se usam dois pontos.'
      },
      {
        id: 10040,
        exercise_id: 1008,
        option_text: 'Ana: "Vou ao cinema hoje."',
        is_correct: false,
        explanation: 'Incorreto! Falta um verbo de elocução antes dos dois pontos.'
      }
    ]
  },
  {
    id: 1009,
    category_id: 'dois-pontos',
    question: 'Qual das alternativas apresenta o uso correto dos dois pontos em um contexto de definição?',
    explanation: 'Os dois pontos são usados para introduzir definições.',
    difficulty: 1,
    options: [
      {
        id: 10041,
        exercise_id: 1009,
        option_text: 'Substantivo: classe de palavras que nomeia seres, objetos, lugares, etc.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados para introduzir definições, especialmente em dicionários e glossários.'
      },
      {
        id: 10042,
        exercise_id: 1009,
        option_text: 'Adjetivo: palavra que atribui qualidades aos substantivos.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem a definição de um termo, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 10043,
        exercise_id: 1009,
        option_text: 'Democracia: sistema político em que o poder emana do povo.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem a definição ou explicação de um conceito, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 10044,
        exercise_id: 1009,
        option_text: 'O carro: é um meio de transporte moderno.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos entre o sujeito e o predicado com o verbo "ser".'
      },
      {
        id: 10045,
        exercise_id: 1009,
        option_text: 'A casa: que compramos fica no centro da cidade.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos antes de orações adjetivas iniciadas por "que".'
      }
    ]
  },
  {
    id: 1010,
    category_id: 'dois-pontos',
    question: 'Identifique a frase em que os dois pontos estão sendo usados corretamente em uma conclusão:',
    explanation: 'Os dois pontos podem ser usados para introduzir uma conclusão ou consequência.',
    difficulty: 1,
    options: [
      {
        id: 10046,
        exercise_id: 1010,
        option_text: 'O resultado não poderia ser outro: fracassamos completamente.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma conclusão.'
      },
      {
        id: 10047,
        exercise_id: 1010,
        option_text: 'Agora sabemos a verdade: fomos enganados desde o início.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma conclusão ou consequência, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 10048,
        exercise_id: 1010,
        option_text: 'A decisão está tomada: seguiremos com o plano original.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma conclusão ou resultado, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 10049,
        exercise_id: 1010,
        option_text: 'O problema: foi resolvido rapidamente.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 10050,
        exercise_id: 1010,
        option_text: 'Ela chorou muito: porque estava triste.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos antes de "porque" neste contexto.'
      }
    ]
  },
  {
    id: 1011,
    category_id: 'dois-pontos',
    question: 'Em qual das alternativas os dois pontos estão sendo usados corretamente antes de um exemplo?',
    explanation: 'Os dois pontos podem ser usados para introduzir exemplos que ilustram ou complementam o que foi dito anteriormente.',
    difficulty: 1,
    options: [
      {
        id: 10051,
        exercise_id: 1011,
        option_text: 'Algumas frutas são ricas em vitamina C: laranja, acerola e goiaba.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados para introduzir exemplos de frutas ricas em vitamina C.'
      },
      {
        id: 10052,
        exercise_id: 1011,
        option_text: 'Precisamos de materiais: canetas, lápis e borracha.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma enumeração, mas não exemplos que ilustram uma afirmação anterior.'
      },
      {
        id: 10053,
        exercise_id: 1011,
        option_text: 'O professor explicou: a matéria será cobrada na prova.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma explicação, não exemplos.'
      },
      {
        id: 10054,
        exercise_id: 1011,
        option_text: 'Ela disse: que não viria à festa.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos antes de \'que\' neste contexto.'
      },
      {
        id: 10055,
        exercise_id: 1011,
        option_text: 'Todos chegaram na hora: combinada.',
        is_correct: false,
        explanation: 'Incorreto! O uso dos dois pontos não está adequado para introduzir exemplos neste caso.'
      }
    ]
  },
  {
    id: 1012,
    category_id: 'dois-pontos',
    question: 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente para introduzir uma fala em discurso direto:',
    explanation: 'Os dois pontos são usados para introduzir falas em discurso direto, geralmente após verbos de elocução.',
    difficulty: 1,
    options: [
      {
        id: 10056,
        exercise_id: 1012,
        option_text: 'O diretor anunciou: \'As aulas serão suspensas amanhã.\'',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados após o verbo de elocução para introduzir a fala direta.'
      },
      {
        id: 10057,
        exercise_id: 1012,
        option_text: 'O professor perguntou: se todos haviam feito o dever de casa.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos antes de \'se\' em discurso indireto.'
      },
      {
        id: 10058,
        exercise_id: 1012,
        option_text: 'O aviso dizia: que o local estava interditado.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos antes de \'que\' em discurso indireto.'
      },
      {
        id: 10059,
        exercise_id: 1012,
        option_text: 'Ela: não queria falar sobre o assunto.',
        is_correct: false,
        explanation: 'Incorreto! Falta o verbo de elocução antes dos dois pontos.'
      },
      {
        id: 10060,
        exercise_id: 1012,
        option_text: 'Ele disse: que estava atrasado.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos antes de \'que\' em discurso indireto.'
      }
    ]
  },
  {
    id: 1013,
    category_id: 'dois-pontos',
    question: 'Qual das alternativas apresenta o uso correto dos dois pontos antes de uma enumeração de itens?',
    explanation: 'Os dois pontos são usados para introduzir uma enumeração de itens que se relacionam com o que foi dito anteriormente.',
    difficulty: 1,
    options: [
      {
        id: 10061,
        exercise_id: 1013,
        option_text: 'Precisamos comprar vários materiais: canetas, cadernos, lápis e borracha.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados para introduzir uma enumeração de materiais.'
      },
      {
        id: 10062,
        exercise_id: 1013,
        option_text: 'Ele trouxe: o livro que eu pedi.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos para introduzir um único elemento.'
      },
      {
        id: 10063,
        exercise_id: 1013,
        option_text: 'As cores da bandeira: são verde, amarelo, azul e branco.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos entre o sujeito e o verbo.'
      },
      {
        id: 10064,
        exercise_id: 1013,
        option_text: 'Ela gosta de: dançar, cantar e pintar.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após preposição.'
      },
      {
        id: 10065,
        exercise_id: 1013,
        option_text: 'Os alunos: Pedro, Maria e João foram aprovados.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos para separar o sujeito de seus elementos.'
      }
    ]
  },
  {
    id: 1014,
    category_id: 'dois-pontos',
    question: 'Em qual opção os dois pontos estão sendo usados corretamente para introduzir uma explicação?',
    explanation: 'Os dois pontos são usados para introduzir uma explicação ou esclarecimento sobre o que foi dito anteriormente.',
    difficulty: 1,
    options: [
      {
        id: 10066,
        exercise_id: 1014,
        option_text: 'O motivo do atraso foi simples: o trânsito estava intenso.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados para introduzir uma explicação sobre o motivo do atraso.'
      },
      {
        id: 10067,
        exercise_id: 1014,
        option_text: 'O problema: foi resolvido rapidamente.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 10068,
        exercise_id: 1014,
        option_text: 'Ela não veio: porque estava doente.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos antes de \'porque\' neste contexto.'
      },
      {
        id: 10069,
        exercise_id: 1014,
        option_text: 'A solução: era mais simples do que imaginávamos.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 10070,
        exercise_id: 1014,
        option_text: 'O resultado: foi surpreendente para todos.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 1015,
    category_id: 'dois-pontos',
    question: 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente em um contexto de resumo ou síntese:',
    explanation: 'Os dois pontos podem ser usados para introduzir um resumo ou síntese do que foi dito anteriormente.',
    difficulty: 1,
    options: [
      {
        id: 10071,
        exercise_id: 1015,
        option_text: 'Depois de analisar todos os argumentos, concluímos: a proposta não é viável.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados para introduzir uma conclusão ou síntese após uma análise.'
      },
      {
        id: 10072,
        exercise_id: 1015,
        option_text: 'O relatório está pronto: para ser entregue amanhã.',
        is_correct: false,
        explanation: 'Incorreto! O uso dos dois pontos não é adequado para introduzir uma oração subordinada adverbial.'
      },
      {
        id: 10073,
        exercise_id: 1015,
        option_text: 'A decisão foi tomada: por unanimidade.',
        is_correct: false,
        explanation: 'Incorreto! O uso dos dois pontos não é adequado para introduzir um adjunto adverbial.'
      },
      {
        id: 10074,
        exercise_id: 1015,
        option_text: 'O resultado da pesquisa: foi positivo.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 10075,
        exercise_id: 1015,
        option_text: 'A solução encontrada: resolveu todos os problemas.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  }
];

// Exercícios do módulo Dois Pontos 2
export const doisPontosExercicio2: Exercise[] = [
  {
    id: 2001,
    category_id: 'dois-pontos-2',
    question: 'Em qual das opções os dois pontos estão sendo usados corretamente em uma enumeração?',
    explanation: 'Os dois pontos são usados antes de uma enumeração, especialmente quando há um termo que a anuncia.',
    difficulty: 2,
    options: [
      {
        id: 20001,
        exercise_id: 2001,
        option_text: 'Precisamos dos seguintes materiais: madeira, pregos, cola e lixa.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados antes de uma enumeração, após um termo que a anuncia.'
      },
      {
        id: 20002,
        exercise_id: 2001,
        option_text: 'Comprei algumas frutas: maçãs, bananas, uvas e peras.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma enumeração de itens, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 20003,
        exercise_id: 2001,
        option_text: 'Ele trouxe: lápis, canetas e cadernos para a aula.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma enumeração, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 20004,
        exercise_id: 2001,
        option_text: 'Os alunos: João, Maria e Pedro fizeram o trabalho.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito de seus elementos.'
      },
      {
        id: 20005,
        exercise_id: 2001,
        option_text: 'Eu comprei: no mercado da esquina.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos para separar verbo de adjunto adverbial.'
      }
    ]
  },
  {
    id: 2002,
    category_id: 'dois-pontos-2',
    question: 'Identifique a alternativa em que os dois pontos introduzem corretamente uma lista de itens:',
    explanation: 'Os dois pontos são usados para introduzir listas de itens.',
    difficulty: 2,
    options: [
      {
        id: 20006,
        exercise_id: 2002,
        option_text: 'Para a festa, precisaremos de: balões, doces, refrigerantes e música.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados para introduzir uma lista de itens após a preposição "de".'
      },
      {
        id: 20007,
        exercise_id: 2002,
        option_text: 'A receita leva os ingredientes: farinha, açúcar, ovos e leite.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma lista, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 20008,
        exercise_id: 2002,
        option_text: 'O mercado vende: frutas, verduras e cereais.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma lista, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 20009,
        exercise_id: 2002,
        option_text: 'Os documentos: RG, CPF e comprovante de residência são obrigatórios.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 20010,
        exercise_id: 2002,
        option_text: 'Ela gosta de: chocolate, sorvete e bolo.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após preposição dessa forma.'
      }
    ]
  },
  {
    id: 2003,
    category_id: 'dois-pontos-2',
    question: 'Qual frase apresenta o uso correto dos dois pontos em uma enumeração de características?',
    explanation: 'Os dois pontos são usados para introduzir uma enumeração de características.',
    difficulty: 2,
    options: [
      {
        id: 20011,
        exercise_id: 2003,
        option_text: 'O candidato ideal deve ter as seguintes qualidades: honestidade, dedicação e criatividade.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma enumeração de características após um termo anunciador.'
      },
      {
        id: 20012,
        exercise_id: 2003,
        option_text: 'A casa possui: três quartos, dois banheiros e uma cozinha ampla.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma enumeração, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 20013,
        exercise_id: 2003,
        option_text: 'O livro descreve: personagens complexos e cenários detalhados.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma enumeração, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 20014,
        exercise_id: 2003,
        option_text: 'As características: foram descritas no relatório.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 20015,
        exercise_id: 2003,
        option_text: 'Ele descreveu: sobre as qualidades do produto.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos antes de "sobre" neste contexto.'
      }
    ]
  },
  {
    id: 2004,
    category_id: 'dois-pontos-2',
    question: 'Em qual opção os dois pontos estão sendo usados adequadamente antes de uma sequência de elementos?',
    explanation: 'Os dois pontos são usados antes de uma sequência de elementos.',
    difficulty: 2,
    options: [
      {
        id: 20016,
        exercise_id: 2004,
        option_text: 'O processo ocorre em três etapas: preparação, execução e finalização.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma sequência de elementos após um termo anunciador.'
      },
      {
        id: 20017,
        exercise_id: 2004,
        option_text: 'As fases da lua são: nova, crescente, cheia e minguante.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma sequência de elementos após o verbo "são", mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 20018,
        exercise_id: 2004,
        option_text: 'O alfabeto começa com: A, B, C, D, E.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma sequência, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 20019,
        exercise_id: 2004,
        option_text: 'Os candidatos: devem apresentar os documentos exigidos.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 20020,
        exercise_id: 2004,
        option_text: 'Eu preciso de: tempo para terminar este trabalho.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após preposição.'
      }
    ]
  },
  {
    id: 2005,
    category_id: 'dois-pontos-2',
    question: 'Identifique a alternativa em que os dois pontos introduzem corretamente uma série de ações:',
    explanation: 'Os dois pontos podem introduzir uma série de ações em sequência.',
    difficulty: 2,
    options: [
      {
        id: 20021,
        exercise_id: 2005,
        option_text: 'Para montar o móvel, siga estas instruções: separe as peças, leia o manual e use as ferramentas adequadas.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma série de ações após um termo anunciador.'
      },
      {
        id: 20022,
        exercise_id: 2005,
        option_text: 'Ele fez tudo rapidamente: organizou os documentos, enviou os e-mails e saiu para o almoço.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma série de ações, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 20023,
        exercise_id: 2005,
        option_text: 'O chef preparou: cortou os legumes, temperou a carne e acendeu o forno.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma série de ações, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 20024,
        exercise_id: 2005,
        option_text: 'As tarefas: foram distribuídas entre os membros da equipe.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 20025,
        exercise_id: 2005,
        option_text: 'Ela saiu para: comprar, cozinhar e limpar.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após preposição dessa forma.'
      }
    ]
  },
  {
    id: 2006,
    category_id: 'dois-pontos-2',
    question: 'Qual das frases apresenta o uso correto dos dois pontos antes de uma listagem de tópicos?',
    explanation: 'Os dois pontos são usados para introduzir uma listagem de tópicos.',
    difficulty: 2,
    options: [
      {
        id: 20026,
        exercise_id: 2006,
        option_text: 'A reunião abordará os seguintes tópicos: orçamento anual, contratações e novos projetos.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma listagem de tópicos após um termo anunciador.'
      },
      {
        id: 20027,
        exercise_id: 2006,
        option_text: 'O relatório inclui: dados financeiros, estatísticas de vendas e projeções futuras.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma listagem, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 20028,
        exercise_id: 2006,
        option_text: 'A palestra abordou: questões ambientais, sociais e econômicas.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma listagem, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 20029,
        exercise_id: 2006,
        option_text: 'Os tópicos: foram discutidos na aula anterior.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 20030,
        exercise_id: 2006,
        option_text: 'Ele falou sobre: política, economia e educação.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após preposição dessa forma.'
      }
    ]
  },
  {
    id: 2007,
    category_id: 'dois-pontos-2',
    question: 'Em qual opção os dois pontos estão sendo usados corretamente antes de um detalhamento?',
    explanation: 'Os dois pontos são usados para introduzir um detalhamento do que foi mencionado antes.',
    difficulty: 2,
    options: [
      {
        id: 20031,
        exercise_id: 2007,
        option_text: 'O problema apresentava várias dificuldades: cálculos complexos, falta de dados e prazos curtos.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem um detalhamento das dificuldades mencionadas.'
      },
      {
        id: 20032,
        exercise_id: 2007,
        option_text: 'A casa tinha muitos defeitos: infiltrações, rachaduras e problemas elétricos.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem um detalhamento, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 20033,
        exercise_id: 2007,
        option_text: 'O plano incluiu: estratégias de marketing, redução de custos e expansão internacional.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem um detalhamento, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 20034,
        exercise_id: 2007,
        option_text: 'Os detalhes: foram omitidos do relatório final.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 20035,
        exercise_id: 2007,
        option_text: 'Ela falou com: detalhes sobre sua viagem.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após preposição dessa forma.'
      }
    ]
  },
  {
    id: 2008,
    category_id: 'dois-pontos-2',
    question: 'Identifique a alternativa em que os dois pontos introduzem corretamente uma enumeração de exemplos:',
    explanation: 'Os dois pontos são usados para introduzir exemplos que ilustram uma ideia.',
    difficulty: 2,
    options: [
      {
        id: 20036,
        exercise_id: 2008,
        option_text: 'Há vários esportes aquáticos populares: natação, surfe, mergulho e canoagem.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem exemplos de esportes aquáticos.'
      },
      {
        id: 20037,
        exercise_id: 2008,
        option_text: 'Existem muitos gêneros literários: romance, poesia, conto e crônica.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem exemplos, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 20038,
        exercise_id: 2008,
        option_text: 'O museu exibe: pinturas, esculturas e fotografias de artistas famosos.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem exemplos, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 20039,
        exercise_id: 2008,
        option_text: 'Os exemplos: foram dados pelo professor durante a aula.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 20040,
        exercise_id: 2008,
        option_text: 'Ele visitou: Paris, Roma e Londres durante suas férias.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 2009,
    category_id: 'dois-pontos-2',
    question: 'Qual frase apresenta o uso correto dos dois pontos em uma enumeração de passos ou etapas?',
    explanation: 'Os dois pontos são usados para introduzir uma sequência de passos ou etapas.',
    difficulty: 2,
    options: [
      {
        id: 20041,
        exercise_id: 2009,
        option_text: 'Para fazer um bolo, siga estes passos: misture os ingredientes secos, adicione os líquidos e asse em forno pré-aquecido.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma enumeração de passos após um termo anunciador.'
      },
      {
        id: 20042,
        exercise_id: 2009,
        option_text: 'O procedimento inclui: coleta de dados, análise e apresentação dos resultados.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem uma enumeração de etapas, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 20043,
        exercise_id: 2009,
        option_text: 'A instalação do software ocorre em: download, configuração e ativação.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem etapas, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 20044,
        exercise_id: 2009,
        option_text: 'As etapas: foram explicadas no manual do usuário.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 20045,
        exercise_id: 2009,
        option_text: 'Ele executou: primeiro a limpeza, depois a organização.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 2010,
    category_id: 'dois-pontos-2',
    question: 'Em qual das opções os dois pontos estão sendo usados adequadamente em um cardápio ou lista de opções?',
    explanation: 'Os dois pontos podem ser usados em cardápios ou listas de opções para separar categorias de itens.',
    difficulty: 2,
    options: [
      {
        id: 20046,
        exercise_id: 2010,
        option_text: 'Sobremesas: pudim, mousse de chocolate, sorvete e torta de limão.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados para introduzir itens de uma categoria em um cardápio.'
      },
      {
        id: 20047,
        exercise_id: 2010,
        option_text: 'Bebidas disponíveis: água, refrigerante, suco e café.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem opções em uma lista, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 20048,
        exercise_id: 2010,
        option_text: 'O restaurante oferece: pratos vegetarianos, carnes e massas.',
        is_correct: false,
        explanation: 'Os dois pontos introduzem opções, mas nesta questão estamos procurando outro exemplo.'
      },
      {
        id: 20049,
        exercise_id: 2010,
        option_text: 'As opções: foram apresentadas aos clientes.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 20050,
        exercise_id: 2010,
        option_text: 'Ele pediu: uma pizza e refrigerante.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 2011,
    category_id: 'dois-pontos-2',
    question: 'Em qual frase os dois pontos introduzem corretamente uma enumeração?',
    explanation: 'Os dois pontos são usados para introduzir uma enumeração de itens que ilustram ou exemplificam o que foi dito anteriormente.',
    difficulty: 2,
    options: [
      {
        id: 20051,
        exercise_id: 2011,
        option_text: 'Ele gosta de muitas coisas: especialmente viajar.',
        is_correct: false,
        explanation: 'Incorreto. Introduz um esclarecimento, não uma lista de vários itens.'
      },
      {
        id: 20052,
        exercise_id: 2011,
        option_text: 'Precisamos de três voluntários: João, Maria e Pedro.',
        is_correct: true,
        explanation: 'Correto. Os dois pontos introduzem a lista (enumeração) dos nomes dos voluntários.'
      },
      {
        id: 20053,
        exercise_id: 2011,
        option_text: 'O motivo é simples: falta de tempo.',
        is_correct: false,
        explanation: 'Incorreto. Introduz uma explicação, não uma enumeração.'
      },
      {
        id: 20054,
        exercise_id: 2011,
        option_text: 'Ele afirmou: "Chegarei cedo".',
        is_correct: false,
        explanation: 'Incorreto. Introduz uma citação direta, não uma enumeração.'
      },
      {
        id: 20055,
        exercise_id: 2011,
        option_text: 'Visitaremos: Paris no próximo mês.',
        is_correct: false,
        explanation: 'Incorreto. Não introduz uma enumeração e a pontuação é inadequada.'
      }
    ]
  }
];

// Exercícios do módulo Dois Pontos 3
export const doisPontosExercicio3: Exercise[] = [
  {
    id: 3001,
    category_id: 'dois-pontos-3',
    question: 'Em qual das alternativas os dois pontos estão sendo usados corretamente para introduzir uma citação?',
    explanation: 'Os dois pontos são usados para introduzir uma citação ou fala de alguém.',
    difficulty: 3,
    options: [
      {
        id: 30001,
        exercise_id: 3001,
        option_text: 'O professor disse: "A prova será na próxima semana."',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados para introduzir a fala de alguém.'
      },
      {
        id: 30002,
        exercise_id: 3001,
        option_text: 'Ela respondeu: que não sabia a resposta.',
        is_correct: false,
        explanation: 'Incorreto! Quando a citação é indireta, não se usam dois pontos.'
      },
      {
        id: 30003,
        exercise_id: 3001,
        option_text: 'O aviso: foi colocado no mural da escola.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 30004,
        exercise_id: 3001,
        option_text: 'Ele citou: vários autores em seu trabalho.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 30005,
        exercise_id: 3001,
        option_text: 'A frase: "Quem sabe faz a hora" é de uma música famosa.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 3002,
    category_id: 'dois-pontos-3',
    question: 'Identifique a alternativa em que os dois pontos introduzem corretamente uma fala:',
    explanation: 'Os dois pontos são usados para introduzir a fala de um personagem.',
    difficulty: 3,
    options: [
      {
        id: 30006,
        exercise_id: 3002,
        option_text: 'A mãe alertou: "Não se esqueça de levar o guarda-chuva."',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem a fala de um personagem.'
      },
      {
        id: 30007,
        exercise_id: 3002,
        option_text: 'Ele avisou: que chegaria mais tarde.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 30008,
        exercise_id: 3002,
        option_text: 'A mensagem: foi enviada ontem à noite.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 30009,
        exercise_id: 3002,
        option_text: 'Ela falou: sobre seus planos para o futuro.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 30010,
        exercise_id: 3002,
        option_text: 'O comunicado: "A reunião foi adiada" apareceu no mural.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 3003,
    category_id: 'dois-pontos-3',
    question: 'Qual frase apresenta o uso correto dos dois pontos antes de uma explicação?',
    explanation: 'Os dois pontos são usados para introduzir uma explicação ou esclarecimento.',
    difficulty: 3,
    options: [
      {
        id: 30011,
        exercise_id: 3003,
        option_text: 'A situação era complicada: não tínhamos dinheiro nem tempo para resolver o problema.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma explicação para a situação mencionada.'
      },
      {
        id: 30012,
        exercise_id: 3003,
        option_text: 'Ele não veio: porque estava doente.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos antes de conjunção explicativa.'
      },
      {
        id: 30013,
        exercise_id: 3003,
        option_text: 'A razão: é simples de entender.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 30014,
        exercise_id: 3003,
        option_text: 'Ela explicou: sobre o funcionamento do aparelho.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 30015,
        exercise_id: 3003,
        option_text: 'O motivo do atraso: "o trânsito estava congestionado" foi aceito pelo chefe.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 3004,
    category_id: 'dois-pontos-3',
    question: 'Em qual opção os dois pontos estão sendo usados adequadamente antes de uma conclusão?',
    explanation: 'Os dois pontos podem ser usados para introduzir uma conclusão.',
    difficulty: 3,
    options: [
      {
        id: 30016,
        exercise_id: 3004,
        option_text: 'Analisei todos os dados e cheguei a uma conclusão: o projeto é viável e lucrativo.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma conclusão após um termo anunciador.'
      },
      {
        id: 30017,
        exercise_id: 3004,
        option_text: 'Portanto: devemos agir imediatamente.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 30018,
        exercise_id: 3004,
        option_text: 'A conclusão: foi apresentada no final do relatório.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 30019,
        exercise_id: 3004,
        option_text: 'Ele concluiu: que o experimento foi um sucesso.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 30020,
        exercise_id: 3004,
        option_text: 'O resultado: "positivo" surpreendeu a todos.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 3005,
    category_id: 'dois-pontos-3',
    question: 'Identifique a alternativa em que os dois pontos introduzem corretamente uma definição:',
    explanation: 'Os dois pontos são usados para introduzir uma definição.',
    difficulty: 3,
    options: [
      {
        id: 30021,
        exercise_id: 3005,
        option_text: 'Fotossíntese: processo pelo qual as plantas convertem luz solar em energia química.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem a definição do termo mencionado.'
      },
      {
        id: 30022,
        exercise_id: 3005,
        option_text: 'O termo significa: que a palavra tem origem grega.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 30023,
        exercise_id: 3005,
        option_text: 'A definição: está no dicionário.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 30024,
        exercise_id: 3005,
        option_text: 'Ele definiu: como sendo um processo complexo.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 30025,
        exercise_id: 3005,
        option_text: 'O conceito: "abstração" é difícil de explicar.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 3006,
    category_id: 'dois-pontos-3',
    question: 'Qual das frases apresenta o uso correto dos dois pontos em um título de obra?',
    explanation: 'Os dois pontos podem ser usados em títulos de obras para separar o título principal do subtítulo.',
    difficulty: 3,
    options: [
      {
        id: 30026,
        exercise_id: 3006,
        option_text: 'O livro "História do Brasil: da colônia à república" é uma obra de referência.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos separam o título principal do subtítulo em uma obra.'
      },
      {
        id: 30027,
        exercise_id: 3006,
        option_text: 'O artigo: "Mudanças climáticas no século XXI" foi publicado na revista.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 30028,
        exercise_id: 3006,
        option_text: 'Ele escreveu: "A Arte da Guerra" em 2010.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 30029,
        exercise_id: 3006,
        option_text: 'O título: foi escolhido pelo editor.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 30030,
        exercise_id: 3006,
        option_text: 'A obra chamada: "O Pequeno Príncipe" é um clássico da literatura.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após adjetivo dessa forma.'
      }
    ]
  },
  {
    id: 3007,
    category_id: 'dois-pontos-3',
    question: 'Em qual opção os dois pontos estão sendo usados corretamente em um documento oficial?',
    explanation: 'Os dois pontos são usados em documentos oficiais para introduzir o assunto ou o destinatário.',
    difficulty: 3,
    options: [
      {
        id: 30031,
        exercise_id: 3007,
        option_text: 'Assunto: Solicitação de férias para o período de 10 a 20 de janeiro.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados após "Assunto" em documentos oficiais.'
      },
      {
        id: 30032,
        exercise_id: 3007,
        option_text: 'O requerimento: foi protocolado na secretaria.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 30033,
        exercise_id: 3007,
        option_text: 'Ele solicitou: que o documento fosse assinado urgentemente.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 30034,
        exercise_id: 3007,
        option_text: 'O documento: "Declaração de Imposto de Renda" deve ser entregue até abril.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 30035,
        exercise_id: 3007,
        option_text: 'Ele enviou: um memorando para todos os departamentos.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 3008,
    category_id: 'dois-pontos-3',
    question: 'Identifique a alternativa em que os dois pontos introduzem corretamente um esclarecimento:',
    explanation: 'Os dois pontos são usados para introduzir um esclarecimento ou explicação adicional.',
    difficulty: 3,
    options: [
      {
        id: 30036,
        exercise_id: 3008,
        option_text: 'O problema era evidente: faltava comunicação entre os membros da equipe.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem um esclarecimento sobre o problema mencionado.'
      },
      {
        id: 30037,
        exercise_id: 3008,
        option_text: 'Ele esclareceu: que não estava presente no momento do acidente.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 30038,
        exercise_id: 3008,
        option_text: 'O esclarecimento: foi feito durante a reunião.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 30039,
        exercise_id: 3008,
        option_text: 'Ela falou: sobre os mal-entendidos ocorridos.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 30040,
        exercise_id: 3008,
        option_text: 'A explicação: "falta de recursos" não convenceu ninguém.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 3009,
    category_id: 'dois-pontos-3',
    question: 'Qual frase apresenta o uso correto dos dois pontos em uma introdução de ideia?',
    explanation: 'Os dois pontos são usados para introduzir uma ideia ou conceito que será desenvolvido.',
    difficulty: 3,
    options: [
      {
        id: 30041,
        exercise_id: 3009,
        option_text: 'Tenho uma proposta interessante: podemos dividir o trabalho em etapas e estabelecer prazos para cada uma.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma ideia que será desenvolvida.'
      },
      {
        id: 30042,
        exercise_id: 3009,
        option_text: 'Ele sugeriu: que fizéssemos uma pausa para o almoço.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 30043,
        exercise_id: 3009,
        option_text: 'A ideia: foi bem recebida por todos.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 30044,
        exercise_id: 3009,
        option_text: 'Ela pensou: em uma solução para o problema.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 30045,
        exercise_id: 3009,
        option_text: 'O conceito: "sustentabilidade" foi o tema central da palestra.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 3010,
    category_id: 'dois-pontos-3',
    question: 'Em qual das opções os dois pontos estão sendo usados adequadamente em uma correspondência?',
    explanation: 'Os dois pontos são usados em correspondências para introduzir o vocativo ou o corpo da mensagem.',
    difficulty: 3,
    options: [
      {
        id: 30046,
        exercise_id: 3010,
        option_text: 'Prezado cliente: Informamos que sua encomenda foi despachada hoje.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados após o vocativo em correspondências.'
      },
      {
        id: 30047,
        exercise_id: 3010,
        option_text: 'A carta: foi enviada ontem pelo correio.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 30048,
        exercise_id: 3010,
        option_text: 'Ele escreveu: que está com saudades.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 30049,
        exercise_id: 3010,
        option_text: 'O e-mail: "Confirmação de Pedido" chegou na caixa de entrada.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 30050,
        exercise_id: 3010,
        option_text: 'Ela enviou: uma mensagem de agradecimento.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 3011,
    category_id: 'dois-pontos-3',
    question: '"Os planetas do sistema solar são oito: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno." Os dois pontos foram usados porque:',
    explanation: 'Os dois pontos são usados para introduzir uma enumeração que foi anunciada anteriormente na frase por um termo genérico ou numérico.',
    difficulty: 3,
    options: [
      {
        id: 30051,
        exercise_id: 3011,
        option_text: 'A lista de planetas é muito longa.',
        is_correct: false,
        explanation: 'Incorreto. O tamanho da lista não é o critério principal, mas sim a função de anunciar.'
      },
      {
        id: 30052,
        exercise_id: 3011,
        option_text: 'A frase anterior termina com o número "oito", anunciando a quantidade de itens.',
        is_correct: true,
        explanation: 'Correto. A palavra "oito" (ou um termo genérico como "planetas") anuncia a enumeração que se segue, justificando os dois pontos.'
      },
      {
        id: 30053,
        exercise_id: 3011,
        option_text: 'Cada item da lista é um nome próprio.',
        is_correct: false,
        explanation: 'Incorreto. O tipo de item não determina o uso dos dois pontos para introduzir a lista.'
      },
      {
        id: 30054,
        exercise_id: 3011,
        option_text: 'A frase expressa uma opinião científica.',
        is_correct: false,
        explanation: 'Incorreto. A função é sintática (introduzir enumeração).'
      },
      {
        id: 30055,
        exercise_id: 3011,
        option_text: 'É uma citação de um livro de astronomia.',
        is_correct: false,
        explanation: 'Incorreto. Não está formatado como citação.'
      }
    ]
  }
];

// Exercícios do módulo Dois Pontos 4
export const doisPontosExercicio4: Exercise[] = [
  {
    id: 4001,
    category_id: 'dois-pontos-4',
    question: 'Em qual das alternativas os dois pontos estão sendo usados corretamente antes de uma explicação?',
    explanation: 'Os dois pontos são usados para introduzir uma explicação ou esclarecimento.',
    difficulty: 4,
    options: [
      {
        id: 40001,
        exercise_id: 4001,
        option_text: 'O atraso foi inevitável: houve um acidente na estrada principal.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma explicação para o atraso mencionado.'
      },
      {
        id: 40002,
        exercise_id: 4001,
        option_text: 'Ele não compareceu: pois estava doente.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos antes de conjunção explicativa.'
      },
      {
        id: 40003,
        exercise_id: 4001,
        option_text: 'A explicação: foi dada pelo professor.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 40004,
        exercise_id: 4001,
        option_text: 'Ela justificou: que estava com problemas de saúde.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 40005,
        exercise_id: 4001,
        option_text: 'O motivo: "problemas pessoais" foi aceito pela diretoria.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 4002,
    category_id: 'dois-pontos-4',
    question: 'Identifique a alternativa em que os dois pontos introduzem corretamente uma consequência:',
    explanation: 'Os dois pontos podem ser usados para introduzir uma consequência.',
    difficulty: 4,
    options: [
      {
        id: 40006,
        exercise_id: 4002,
        option_text: 'A chuva foi intensa: as ruas ficaram alagadas e o trânsito parou completamente.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma consequência da chuva intensa.'
      },
      {
        id: 40007,
        exercise_id: 4002,
        option_text: 'Ele estudou muito: por isso passou no exame.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos antes de locução conjuntiva.'
      },
      {
        id: 40008,
        exercise_id: 4002,
        option_text: 'A consequência: foi desastrosa para todos.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 40009,
        exercise_id: 4002,
        option_text: 'Ela percebeu: que suas ações tiveram consequências graves.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 40010,
        exercise_id: 4002,
        option_text: 'O resultado: "desastroso" foi previsto pelos especialistas.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 4003,
    category_id: 'dois-pontos-4',
    question: 'Qual frase apresenta o uso correto dos dois pontos em um texto jurídico?',
    explanation: 'Os dois pontos são usados em textos jurídicos para introduzir citações, artigos ou cláusulas.',
    difficulty: 4,
    options: [
      {
        id: 40011,
        exercise_id: 4003,
        option_text: 'Conforme o artigo 5º da Constituição Federal: "Todos são iguais perante a lei, sem distinção de qualquer natureza."',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma citação de texto legal.'
      },
      {
        id: 40012,
        exercise_id: 4003,
        option_text: 'O juiz determinou: que o réu fosse solto imediatamente.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 40013,
        exercise_id: 4003,
        option_text: 'A sentença: foi proferida ontem à tarde.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 40014,
        exercise_id: 4003,
        option_text: 'O advogado argumentou: sobre a inconstitucionalidade da lei.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 40015,
        exercise_id: 4003,
        option_text: 'O parecer: "favorável" foi emitido pelo promotor.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 4004,
    category_id: 'dois-pontos-4',
    question: 'Em qual opção os dois pontos estão sendo usados adequadamente em um texto científico?',
    explanation: 'Os dois pontos são usados em textos científicos para introduzir definições, explicações ou exemplos.',
    difficulty: 4,
    options: [
      {
        id: 40016,
        exercise_id: 4004,
        option_text: 'O experimento revelou um resultado inesperado: a substância reagiu de forma diferente em temperaturas mais baixas.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma explicação do resultado mencionado.'
      },
      {
        id: 40017,
        exercise_id: 4004,
        option_text: 'Os cientistas concluíram: que a hipótese estava correta.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 40018,
        exercise_id: 4004,
        option_text: 'A pesquisa: foi publicada em uma revista renomada.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 40019,
        exercise_id: 4004,
        option_text: 'Eles analisaram: os dados coletados durante o experimento.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 40020,
        exercise_id: 4004,
        option_text: 'O resultado: "positivo" foi confirmado por outros laboratórios.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 4005,
    category_id: 'dois-pontos-4',
    question: 'Identifique a alternativa em que os dois pontos introduzem corretamente uma conclusão em um texto argumentativo:',
    explanation: 'Os dois pontos são usados em textos argumentativos para introduzir uma conclusão.',
    difficulty: 4,
    options: [
      {
        id: 40021,
        exercise_id: 4005,
        option_text: 'Após analisar todos os argumentos, chegamos a uma conclusão inequívoca: a proposta deve ser rejeitada por falta de viabilidade econômica.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma conclusão após um termo anunciador.'
      },
      {
        id: 40022,
        exercise_id: 4005,
        option_text: 'Portanto: a decisão final cabe ao comitê executivo.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 40023,
        exercise_id: 4005,
        option_text: 'A conclusão: foi baseada em dados estatísticos confiáveis.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 40024,
        exercise_id: 4005,
        option_text: 'O autor concluiu: que o sistema atual é ineficiente.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 40025,
        exercise_id: 4005,
        option_text: 'O argumento final: "insustentável" foi refutado pelos críticos.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 4006,
    category_id: 'dois-pontos-4',
    question: 'Qual das frases apresenta o uso correto dos dois pontos em uma notícia jornalística?',
    explanation: 'Os dois pontos são usados em notícias jornalísticas para introduzir declarações, explicações ou detalhamentos.',
    difficulty: 4,
    options: [
      {
        id: 40026,
        exercise_id: 4006,
        option_text: 'O prefeito fez um anúncio importante: a cidade receberá investimentos para a construção de um novo hospital.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem o conteúdo do anúncio mencionado.'
      },
      {
        id: 40027,
        exercise_id: 4006,
        option_text: 'O porta-voz declarou: que as negociações continuam.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 40028,
        exercise_id: 4006,
        option_text: 'A notícia: foi divulgada ontem à noite.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 40029,
        exercise_id: 4006,
        option_text: 'O jornalista relatou: sobre o acidente na rodovia.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 40030,
        exercise_id: 4006,
        option_text: 'A manchete: "Crise econômica se agrava" estampou a primeira página.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 4007,
    category_id: 'dois-pontos-4',
    question: 'Em qual opção os dois pontos estão sendo usados corretamente em um texto instrutivo?',
    explanation: 'Os dois pontos são usados em textos instrutivos para introduzir orientações, passos ou procedimentos.',
    difficulty: 4,
    options: [
      {
        id: 40031,
        exercise_id: 4007,
        option_text: 'Atenção: desligue o aparelho antes de realizar qualquer manutenção.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma instrução após uma palavra de alerta.'
      },
      {
        id: 40032,
        exercise_id: 4007,
        option_text: 'O manual indica: que a bateria deve ser carregada por 8 horas.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 40033,
        exercise_id: 4007,
        option_text: 'As instruções: estão na última página do manual.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 40034,
        exercise_id: 4007,
        option_text: 'O fabricante recomenda: limpar o filtro mensalmente.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 40035,
        exercise_id: 4007,
        option_text: 'O procedimento: "limpeza do filtro" deve ser realizado mensalmente.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 4008,
    category_id: 'dois-pontos-4',
    question: 'Identifique a alternativa em que os dois pontos introduzem corretamente uma citação em um texto acadêmico:',
    explanation: 'Os dois pontos são usados em textos acadêmicos para introduzir citações diretas.',
    difficulty: 4,
    options: [
      {
        id: 40036,
        exercise_id: 4008,
        option_text: 'Segundo o autor: "A linguagem é um sistema complexo de comunicação que evolui constantemente."',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma citação direta após a referência ao autor.'
      },
      {
        id: 40037,
        exercise_id: 4008,
        option_text: 'O pesquisador afirmou: que os resultados foram inconclusivos.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 40038,
        exercise_id: 4008,
        option_text: 'A citação: foi retirada de um artigo científico.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 40039,
        exercise_id: 4008,
        option_text: 'Ele citou: vários autores em seu trabalho.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 40040,
        exercise_id: 4008,
        option_text: 'A teoria: "relatividade" foi proposta por Einstein.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 4009,
    category_id: 'dois-pontos-4',
    question: 'Qual frase apresenta o uso correto dos dois pontos em um texto publicitário?',
    explanation: 'Os dois pontos são usados em textos publicitários para introduzir informações, vantagens ou características de produtos.',
    difficulty: 4,
    options: [
      {
        id: 40041,
        exercise_id: 4009,
        option_text: 'Novo smartphone: tela de alta resolução, bateria de longa duração e câmera profissional.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem as características do produto mencionado.'
      },
      {
        id: 40042,
        exercise_id: 4009,
        option_text: 'O anúncio informa: que o produto está em promoção.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 40043,
        exercise_id: 4009,
        option_text: 'A oferta: é válida até o final do mês.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 40044,
        exercise_id: 4009,
        option_text: 'A empresa anunciou: sobre o lançamento de um novo produto.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 40045,
        exercise_id: 4009,
        option_text: 'O slogan: "qualidade garantida" aparece em todos os anúncios.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 4010,
    category_id: 'dois-pontos-4',
    question: 'Em qual das opções os dois pontos estão sendo usados adequadamente em um texto descritivo?',
    explanation: 'Os dois pontos são usados em textos descritivos para introduzir detalhamentos ou características.',
    difficulty: 4,
    options: [
      {
        id: 40046,
        exercise_id: 4010,
        option_text: 'A casa tinha um estilo peculiar: paredes de pedra, janelas em arco e um telhado de duas águas.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem um detalhamento das características mencionadas.'
      },
      {
        id: 40047,
        exercise_id: 4010,
        option_text: 'O autor descreveu: que a paisagem era deslumbrante.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 40048,
        exercise_id: 4010,
        option_text: 'A descrição: foi minuciosa e detalhada.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 40049,
        exercise_id: 4010,
        option_text: 'Ele observou: atentamente todos os detalhes do ambiente.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 40050,
        exercise_id: 4010,
        option_text: 'As características: "imponente e majestosa" definiam bem o edifício.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  }
];

// Exercícios do módulo Dois Pontos 5
export const doisPontosExercicio5: Exercise[] = [
  {
    id: 5001,
    category_id: 'dois-pontos-5',
    question: 'Em qual das alternativas os dois pontos estão sendo usados corretamente em um texto dissertativo?',
    explanation: 'Os dois pontos são usados em textos dissertativos para introduzir explicações, exemplificações ou conclusões.',
    difficulty: 5,
    options: [
      {
        id: 50001,
        exercise_id: 5001,
        option_text: 'A questão ambiental exige medidas urgentes: o aquecimento global já mostra seus efeitos devastadores em todo o planeta.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma explicação para a afirmação anterior.'
      },
      {
        id: 50002,
        exercise_id: 5001,
        option_text: 'O autor argumenta: que a educação é fundamental para o desenvolvimento social.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 50003,
        exercise_id: 5001,
        option_text: 'A conclusão: foi baseada em dados estatísticos confiáveis.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 50004,
        exercise_id: 5001,
        option_text: 'Portanto: devemos repensar nossas ações cotidianas.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 50005,
        exercise_id: 5001,
        option_text: 'O argumento principal: "sustentabilidade" foi amplamente discutido.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 5002,
    category_id: 'dois-pontos-5',
    question: 'Identifique a alternativa em que os dois pontos introduzem corretamente uma síntese:',
    explanation: 'Os dois pontos podem ser usados para introduzir uma síntese do que foi exposto anteriormente.',
    difficulty: 5,
    options: [
      {
        id: 50006,
        exercise_id: 5002,
        option_text: 'Após anos de pesquisa, chegamos a uma síntese: o fenômeno é causado pela combinação de fatores ambientais e genéticos.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma síntese após um termo anunciador.'
      },
      {
        id: 50007,
        exercise_id: 5002,
        option_text: 'Em resumo: o projeto foi bem-sucedido.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após locução adverbial dessa forma.'
      },
      {
        id: 50008,
        exercise_id: 5002,
        option_text: 'A síntese: foi apresentada no final do relatório.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 50009,
        exercise_id: 5002,
        option_text: 'O autor sintetizou: que as causas são múltiplas e complexas.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 50010,
        exercise_id: 5002,
        option_text: 'O resumo: "abrangente e claro" facilitou a compreensão do tema.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 5003,
    category_id: 'dois-pontos-5',
    question: 'Qual frase apresenta o uso correto dos dois pontos em um texto filosófico?',
    explanation: 'Os dois pontos são usados em textos filosóficos para introduzir conceitos, definições ou explicações.',
    difficulty: 5,
    options: [
      {
        id: 50011,
        exercise_id: 5003,
        option_text: 'O dilema ético fundamental permanece: como conciliar liberdade individual e responsabilidade coletiva em uma sociedade plural.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma explicação do dilema mencionado.'
      },
      {
        id: 50012,
        exercise_id: 5003,
        option_text: 'O filósofo argumenta: que a verdade é relativa ao contexto histórico.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 50013,
        exercise_id: 5003,
        option_text: 'A teoria: foi desenvolvida no século XVIII.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 50014,
        exercise_id: 5003,
        option_text: 'Ele definiu: sobre o conceito de liberdade em sua obra.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 50015,
        exercise_id: 5003,
        option_text: 'O conceito: "justiça" é central em sua filosofia.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 5004,
    category_id: 'dois-pontos-5',
    question: 'Em qual opção os dois pontos estão sendo usados adequadamente em um texto histórico?',
    explanation: 'Os dois pontos são usados em textos históricos para introduzir explicações, consequências ou citações.',
    difficulty: 5,
    options: [
      {
        id: 50016,
        exercise_id: 5004,
        option_text: 'A Revolução Industrial transformou profundamente a sociedade europeia: surgiu uma nova classe operária, as cidades cresceram rapidamente e as relações de trabalho foram completamente alteradas.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem as consequências da Revolução Industrial.'
      },
      {
        id: 50017,
        exercise_id: 5004,
        option_text: 'O historiador afirma: que o período foi marcado por grandes transformações.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 50018,
        exercise_id: 5004,
        option_text: 'A guerra: durou mais de cem anos.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 50019,
        exercise_id: 5004,
        option_text: 'Ele estudou: os documentos originais da época.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 50020,
        exercise_id: 5004,
        option_text: 'O período: "Idade Média" foi marcado por grandes contrastes sociais.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 5005,
    category_id: 'dois-pontos-5',
    question: 'Identifique a alternativa em que os dois pontos introduzem corretamente uma explicação em um texto técnico:',
    explanation: 'Os dois pontos são usados em textos técnicos para introduzir explicações, definições ou detalhamentos.',
    difficulty: 5,
    options: [
      {
        id: 50021,
        exercise_id: 5005,
        option_text: 'O sistema apresenta uma falha crítica: o processador superaquece quando submetido a cargas de trabalho intensas por períodos prolongados.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma explicação da falha mencionada.'
      },
      {
        id: 50022,
        exercise_id: 5005,
        option_text: 'O manual explica: que o dispositivo deve ser reiniciado após a atualização.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 50023,
        exercise_id: 5005,
        option_text: 'A especificação: foi detalhada no documento técnico.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 50024,
        exercise_id: 5005,
        option_text: 'O técnico verificou: os componentes danificados.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 50025,
        exercise_id: 5005,
        option_text: 'O problema: "superaquecimento" foi identificado durante os testes.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 5006,
    category_id: 'dois-pontos-5',
    question: 'Qual das frases apresenta o uso correto dos dois pontos em um texto literário?',
    explanation: 'Os dois pontos são usados em textos literários para introduzir falas, descrições ou pensamentos.',
    difficulty: 5,
    options: [
      {
        id: 50026,
        exercise_id: 5006,
        option_text: 'Olhou pela janela e viu um cenário desolador: árvores caídas, telhados destruídos e ruas alagadas após a tempestade.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma descrição do cenário mencionado.'
      },
      {
        id: 50027,
        exercise_id: 5006,
        option_text: 'O personagem pensou: que nunca mais voltaria àquele lugar.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 50028,
        exercise_id: 5006,
        option_text: 'A história: começa em uma pequena cidade do interior.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 50029,
        exercise_id: 5006,
        option_text: 'Ela descreveu: os detalhes da paisagem em seu diário.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 50030,
        exercise_id: 5006,
        option_text: 'O protagonista: "solitário e melancólico" caminhava pela praia deserta.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 5007,
    category_id: 'dois-pontos-5',
    question: 'Em qual opção os dois pontos estão sendo usados corretamente em um texto informativo?',
    explanation: 'Os dois pontos são usados em textos informativos para introduzir explicações, exemplos ou detalhamentos.',
    difficulty: 5,
    options: [
      {
        id: 50031,
        exercise_id: 5007,
        option_text: 'A pesquisa revelou um dado preocupante: mais de 70% dos jovens não praticam atividades físicas regularmente.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem um detalhamento do dado mencionado.'
      },
      {
        id: 50032,
        exercise_id: 5007,
        option_text: 'O relatório indica: que houve um aumento nos casos de dengue.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 50033,
        exercise_id: 5007,
        option_text: 'A informação: foi divulgada pelo Ministério da Saúde.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 50034,
        exercise_id: 5007,
        option_text: 'Eles analisaram: os dados coletados na pesquisa.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 50035,
        exercise_id: 5007,
        option_text: 'O tema: "saúde pública" foi abordado no seminário.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 5008,
    category_id: 'dois-pontos-5',
    question: 'Identifique a alternativa em que os dois pontos introduzem corretamente uma conclusão em um texto argumentativo:',
    explanation: 'Os dois pontos são usados em textos argumentativos para introduzir uma conclusão após a apresentação de argumentos.',
    difficulty: 5,
    options: [
      {
        id: 50036,
        exercise_id: 5008,
        option_text: 'Considerando todos os argumentos apresentados, a conclusão é inevitável: precisamos reformular completamente nossa política ambiental.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma conclusão após um termo anunciador.'
      },
      {
        id: 50037,
        exercise_id: 5008,
        option_text: 'Portanto: a decisão deve ser reconsiderada.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 50038,
        exercise_id: 5008,
        option_text: 'A conclusão: foi baseada em evidências científicas sólidas.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 50039,
        exercise_id: 5008,
        option_text: 'O autor concluiu: que o sistema atual é insustentável.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 50040,
        exercise_id: 5008,
        option_text: 'O argumento final: "convincente e bem fundamentado" encerrou o debate.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 5009,
    category_id: 'dois-pontos-5',
    question: 'Qual frase apresenta o uso correto dos dois pontos em um texto jurídico?',
    explanation: 'Os dois pontos são usados em textos jurídicos para introduzir citações de leis, artigos ou explicações.',
    difficulty: 5,
    options: [
      {
        id: 50041,
        exercise_id: 5009,
        option_text: 'O princípio constitucional da presunção de inocência é claro: ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma explicação do princípio mencionado.'
      },
      {
        id: 50042,
        exercise_id: 5009,
        option_text: 'O advogado argumentou: que seu cliente estava em outro local no momento do crime.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 50043,
        exercise_id: 5009,
        option_text: 'A lei: foi promulgada em 2010.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 50044,
        exercise_id: 5009,
        option_text: 'O juiz determinou: sobre a libertação imediata do réu.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 50045,
        exercise_id: 5009,
        option_text: 'O artigo: "inconstitucional" foi revogado pelo Supremo Tribunal Federal.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 5010,
    category_id: 'dois-pontos-5',
    question: 'Em qual das opções os dois pontos estão sendo usados adequadamente em uma citação direta?',
    explanation: 'Os dois pontos são usados para introduzir citações diretas.',
    difficulty: 5,
    options: [
      {
        id: 50046,
        exercise_id: 5010,
        option_text: 'Como afirmou o filósofo Kant: "Age de tal maneira que a máxima da tua vontade possa valer sempre como princípio de uma legislação universal."',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma citação direta após a referência ao autor.'
      },
      {
        id: 50047,
        exercise_id: 5010,
        option_text: 'O autor escreveu: que a liberdade é um direito fundamental.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 50048,
        exercise_id: 5010,
        option_text: 'A citação: foi retirada de um livro clássico.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 50049,
        exercise_id: 5010,
        option_text: 'Ele citou: vários autores em seu trabalho.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 50050,
        exercise_id: 5010,
        option_text: 'A frase: "Penso, logo existo" é atribuída a Descartes.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 5011,
    category_id: 'dois-pontos-5',
    question: 'Qual alternativa apresenta um uso INCORRETO dos dois pontos para enumeração?',
    explanation: 'Os dois pontos são usados para introduzir uma enumeração que foi anunciada por um termo genérico ou numérico, mas não devem ser usados quando a enumeração funciona como complemento direto do verbo sem um termo anunciador explícito.',
    difficulty: 5,
    options: [
      {
        id: 50051,
        exercise_id: 5011,
        option_text: 'As quatro estações do ano são: primavera, verão, outono e inverno.',
        is_correct: false,
        explanation: 'Incorreto (uso correto). Os dois pontos são usados corretamente após um termo anunciador ("são").'
      },
      {
        id: 50052,
        exercise_id: 5011,
        option_text: 'Trouxe tudo o que pedi: livros, cadernos e canetas.',
        is_correct: false,
        explanation: 'Incorreto (uso correto). Os dois pontos são usados corretamente após um termo anunciador ("tudo").'
      },
      {
        id: 50053,
        exercise_id: 5011,
        option_text: 'Meus hobbies incluem: ler, escrever e pintar.',
        is_correct: true,
        explanation: 'Correto (uso incorreto). Geralmente, não se usam dois pontos quando a enumeração funciona como complemento direto do verbo (como "incluir", "ser", "ter") e não há um termo anunciador explícito. Seria melhor: "Meus hobbies incluem ler, escrever e pintar."'
      },
      {
        id: 50054,
        exercise_id: 5011,
        option_text: 'Comprei o seguinte: arroz, feijão e carne.',
        is_correct: false,
        explanation: 'Incorreto (uso correto). A expressão "o seguinte" anuncia a lista, justificando o uso dos dois pontos.'
      },
      {
        id: 50055,
        exercise_id: 5011,
        option_text: 'Existem dois tipos de problemas: os que têm solução e os que não têm.',
        is_correct: false,
        explanation: 'Incorreto (uso correto). Os dois pontos são usados corretamente para introduzir a enumeração dos dois tipos de problemas.'
      }
    ]
  }
];

// Exercícios da prova final de Dois Pontos
export const provaDoisPontos: Exercise[] = [
  {
    id: 6001,
    category_id: 'prova-dois-pontos',
    question: 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente:',
    explanation: 'Os dois pontos são usados para introduzir enumerações, explicações, citações ou falas.',
    difficulty: 5,
    options: [
      {
        id: 60001,
        exercise_id: 6001,
        option_text: 'O diretor anunciou uma novidade importante: a empresa abrirá uma nova filial no próximo mês.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem o conteúdo do anúncio mencionado.'
      },
      {
        id: 60002,
        exercise_id: 6001,
        option_text: 'Ele disse: que viria mais tarde.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60003,
        exercise_id: 6001,
        option_text: 'A resposta: estava no final do livro.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60004,
        exercise_id: 6001,
        option_text: 'Portanto: devemos agir com cautela.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60005,
        exercise_id: 6001,
        option_text: 'Ela comprou: um novo computador.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6002,
    category_id: 'prova-dois-pontos',
    question: 'Em qual alternativa os dois pontos introduzem corretamente uma enumeração?',
    explanation: 'Os dois pontos são usados para introduzir uma enumeração de itens.',
    difficulty: 5,
    options: [
      {
        id: 60006,
        exercise_id: 6002,
        option_text: 'Para a viagem, precisaremos levar: roupas leves, protetor solar, óculos de sol e documentos.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma enumeração de itens após o verbo "levar".'
      },
      {
        id: 60007,
        exercise_id: 6002,
        option_text: 'Os itens: foram listados no quadro.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60008,
        exercise_id: 6002,
        option_text: 'Ela explicou: que precisava de vários materiais.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60009,
        exercise_id: 6002,
        option_text: 'Portanto: canetas, lápis e cadernos são essenciais.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60010,
        exercise_id: 6002,
        option_text: 'Ele comprou: no shopping da cidade.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6003,
    category_id: 'prova-dois-pontos',
    question: 'Qual alternativa apresenta o uso correto dos dois pontos em uma citação?',
    explanation: 'Os dois pontos são usados para introduzir uma citação direta.',
    difficulty: 5,
    options: [
      {
        id: 60011,
        exercise_id: 6003,
        option_text: 'O professor disse: "A prova será na próxima semana."',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma citação direta após o verbo "disse".'
      },
      {
        id: 60012,
        exercise_id: 6003,
        option_text: 'Ele afirmou: que o livro era excelente.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60013,
        exercise_id: 6003,
        option_text: 'A frase: foi escrita por um famoso autor.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60014,
        exercise_id: 6003,
        option_text: 'Segundo o autor: a linguagem é um sistema complexo.',
        is_correct: false,
        explanation: 'Incorreto! Faltam as aspas para indicar a citação direta.'
      },
      {
        id: 60015,
        exercise_id: 6003,
        option_text: 'Ela citou: vários autores em seu trabalho.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6004,
    category_id: 'prova-dois-pontos',
    question: 'Em qual opção os dois pontos introduzem corretamente uma explicação?',
    explanation: 'Os dois pontos são usados para introduzir uma explicação ou esclarecimento.',
    difficulty: 5,
    options: [
      {
        id: 60016,
        exercise_id: 6004,
        option_text: 'O motivo do atraso foi simples: houve um engarrafamento na avenida principal.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma explicação para o motivo mencionado.'
      },
      {
        id: 60017,
        exercise_id: 6004,
        option_text: 'Ele explicou: que o trânsito estava congestionado.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60018,
        exercise_id: 6004,
        option_text: 'A explicação: foi aceita por todos.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60019,
        exercise_id: 6004,
        option_text: 'Portanto: devemos sair mais cedo da próxima vez.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60020,
        exercise_id: 6004,
        option_text: 'Ela justificou: sobre o atraso na entrega.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6005,
    category_id: 'prova-dois-pontos',
    question: 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente em um título:',
    explanation: 'Os dois pontos são usados em títulos para separar o título principal do subtítulo.',
    difficulty: 5,
    options: [
      {
        id: 60021,
        exercise_id: 6005,
        option_text: 'O livro "Gramática: teoria e prática" é excelente para estudantes.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos separam o título principal do subtítulo.'
      },
      {
        id: 60022,
        exercise_id: 6005,
        option_text: 'O título: foi escolhido pelo autor.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60023,
        exercise_id: 6005,
        option_text: 'Ele escreveu: um livro sobre gramática.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 60024,
        exercise_id: 6005,
        option_text: 'O autor afirmou: que o título foi sugestão do editor.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60025,
        exercise_id: 6005,
        option_text: 'Portanto: o título deve ser claro e objetivo.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      }
    ]
  },
  {
    id: 6006,
    category_id: 'prova-dois-pontos',
    question: 'Qual das frases apresenta o uso correto dos dois pontos em um documento oficial?',
    explanation: 'Os dois pontos são usados em documentos oficiais para introduzir o assunto ou o destinatário.',
    difficulty: 5,
    options: [
      {
        id: 60026,
        exercise_id: 6006,
        option_text: 'Assunto: Solicitação de férias para o período de 10 a 20 de janeiro.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados após "Assunto" em documentos oficiais.'
      },
      {
        id: 60027,
        exercise_id: 6006,
        option_text: 'O documento: foi protocolado ontem.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60028,
        exercise_id: 6006,
        option_text: 'Ele solicitou: que o processo fosse agilizado.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60029,
        exercise_id: 6006,
        option_text: 'Portanto: o requerimento deve ser assinado pelo diretor.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60030,
        exercise_id: 6006,
        option_text: 'Ela enviou: um memorando para todos os departamentos.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6007,
    category_id: 'prova-dois-pontos',
    question: 'Em qual opção os dois pontos estão sendo usados corretamente em uma definição?',
    explanation: 'Os dois pontos são usados para introduzir uma definição.',
    difficulty: 5,
    options: [
      {
        id: 60031,
        exercise_id: 6007,
        option_text: 'Metafísica: ramo da filosofia que estuda a natureza fundamental da realidade.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem a definição do termo mencionado.'
      },
      {
        id: 60032,
        exercise_id: 6007,
        option_text: 'O termo: foi definido pelo autor.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60033,
        exercise_id: 6007,
        option_text: 'Ele definiu: que o conceito é complexo.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60034,
        exercise_id: 6007,
        option_text: 'Portanto: a definição deve ser clara.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60035,
        exercise_id: 6007,
        option_text: 'Ela explicou: sobre o significado do termo.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6008,
    category_id: 'prova-dois-pontos',
    question: 'Identifique a alternativa em que os dois pontos introduzem corretamente uma conclusão:',
    explanation: 'Os dois pontos podem ser usados para introduzir uma conclusão após a apresentação de argumentos.',
    difficulty: 5,
    options: [
      {
        id: 60036,
        exercise_id: 6008,
        option_text: 'Após analisar todos os dados, chegamos a uma conclusão: o projeto é viável e deve ser implementado.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma conclusão após um termo anunciador.'
      },
      {
        id: 60037,
        exercise_id: 6008,
        option_text: 'Portanto: devemos agir rapidamente.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60038,
        exercise_id: 6008,
        option_text: 'A conclusão: foi apresentada na reunião.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60039,
        exercise_id: 6008,
        option_text: 'Ele concluiu: que o experimento foi um sucesso.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60040,
        exercise_id: 6008,
        option_text: 'Ela finalizou: com uma breve conclusão.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6009,
    category_id: 'prova-dois-pontos',
    question: 'Qual frase apresenta o uso correto dos dois pontos em um texto instrutivo?',
    explanation: 'Os dois pontos são usados em textos instrutivos para introduzir orientações ou procedimentos.',
    difficulty: 5,
    options: [
      {
        id: 60041,
        exercise_id: 6009,
        option_text: 'Atenção: desligue o aparelho antes de realizar a limpeza.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma instrução após uma palavra de alerta.'
      },
      {
        id: 60042,
        exercise_id: 6009,
        option_text: 'O manual indica: que a bateria deve ser carregada por 8 horas.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60043,
        exercise_id: 6009,
        option_text: 'As instruções: estão na última página.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60044,
        exercise_id: 6009,
        option_text: 'Portanto: siga as orientações com atenção.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60045,
        exercise_id: 6009,
        option_text: 'Ele recomendou: limpar o filtro mensalmente.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6010,
    category_id: 'prova-dois-pontos',
    question: 'Em qual das opções os dois pontos estão sendo usados adequadamente em uma correspondência?',
    explanation: 'Os dois pontos são usados em correspondências para introduzir o vocativo ou o corpo da mensagem.',
    difficulty: 5,
    options: [
      {
        id: 60046,
        exercise_id: 6010,
        option_text: 'Prezado cliente: Informamos que sua encomenda foi despachada hoje.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados após o vocativo em correspondências.'
      },
      {
        id: 60047,
        exercise_id: 6010,
        option_text: 'A carta: foi enviada ontem.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60048,
        exercise_id: 6010,
        option_text: 'Ele escreveu: que está com saudades.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60049,
        exercise_id: 6010,
        option_text: 'Portanto: a mensagem deve ser clara e objetiva.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60050,
        exercise_id: 6010,
        option_text: 'Ela enviou: uma mensagem de agradecimento.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6011,
    category_id: 'prova-dois-pontos',
    question: 'Em qual alternativa os dois pontos estão sendo usados corretamente para introduzir um exemplo?',
    explanation: 'Os dois pontos são usados para introduzir exemplos que ilustram ou complementam uma afirmação anterior.',
    difficulty: 5,
    options: [
      {
        id: 60051,
        exercise_id: 6011,
        option_text: 'Algumas frutas são ricas em vitamina C: laranja, acerola e goiaba.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem exemplos que ilustram a afirmação anterior.'
      },
      {
        id: 60052,
        exercise_id: 6011,
        option_text: 'As frutas: são importantes para a saúde.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60053,
        exercise_id: 6011,
        option_text: 'Ela mencionou: que gosta de frutas cítricas.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60054,
        exercise_id: 6011,
        option_text: 'Portanto: devemos consumir frutas diariamente.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60055,
        exercise_id: 6011,
        option_text: 'Ele comprou: várias frutas no mercado.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6012,
    category_id: 'prova-dois-pontos',
    question: 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente em uma citação longa:',
    explanation: 'Os dois pontos são usados para introduzir citações longas, geralmente em parágrafo separado e com recuo.',
    difficulty: 5,
    options: [
      {
        id: 60056,
        exercise_id: 6012,
        option_text: 'Segundo o autor em seu livro mais recente:\n\n"O desenvolvimento sustentável é essencial para garantir um futuro melhor para as próximas gerações. Devemos repensar nossos hábitos de consumo e buscar alternativas mais ecológicas."',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem adequadamente uma citação longa do autor.'
      },
      {
        id: 60057,
        exercise_id: 6012,
        option_text: 'A citação: foi retirada de um livro famoso.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60058,
        exercise_id: 6012,
        option_text: 'Ele citou: que o livro é muito interessante.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60059,
        exercise_id: 6012,
        option_text: 'Portanto: a citação está correta.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60060,
        exercise_id: 6012,
        option_text: 'Ela mencionou: sobre o conteúdo do livro.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6013,
    category_id: 'prova-dois-pontos',
    question: 'Em qual alternativa os dois pontos estão sendo usados corretamente para introduzir um aposto explicativo?',
    explanation: 'Os dois pontos são usados para introduzir um aposto explicativo que esclarece ou especifica o termo anterior.',
    difficulty: 5,
    options: [
      {
        id: 60061,
        exercise_id: 6013,
        option_text: 'A capital da França: Paris, é conhecida como a Cidade Luz.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem um aposto que especifica "a capital da França".'
      },
      {
        id: 60062,
        exercise_id: 6013,
        option_text: 'A cidade: é muito bonita nesta época do ano.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60063,
        exercise_id: 6013,
        option_text: 'Ele viajou: para a Europa no mês passado.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 60064,
        exercise_id: 6013,
        option_text: 'Portanto: a viagem foi um sucesso.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60065,
        exercise_id: 6013,
        option_text: 'Ela comentou: que gostou muito da viagem.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      }
    ]
  },
  {
    id: 6014,
    category_id: 'prova-dois-pontos',
    question: 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente em um diálogo:',
    explanation: 'Os dois pontos são usados para introduzir a fala de um personagem em diálogos narrativos.',
    difficulty: 5,
    options: [
      {
        id: 60066,
        exercise_id: 6014,
        option_text: 'João olhou para Maria e disse: "Vamos sair hoje à noite?"',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados corretamente para introduzir a fala direta do personagem.'
      },
      {
        id: 60067,
        exercise_id: 6014,
        option_text: 'O diálogo: foi muito interessante no filme.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60068,
        exercise_id: 6014,
        option_text: 'Ela respondeu: que não poderia sair naquela noite.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60069,
        exercise_id: 6014,
        option_text: 'Portanto: o diálogo continuou por horas.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60070,
        exercise_id: 6014,
        option_text: 'Ele mencionou: sobre o assunto da conversa.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6015,
    category_id: 'prova-dois-pontos',
    question: 'Em qual alternativa os dois pontos estão sendo usados corretamente para introduzir uma síntese ou conclusão?',
    explanation: 'Os dois pontos são usados para introduzir uma síntese ou conclusão do que foi dito anteriormente.',
    difficulty: 5,
    options: [
      {
        id: 60071,
        exercise_id: 6015,
        option_text: 'Ela estudou muito, fez todos os exercícios e revisou o conteúdo: o esforço valeu a pena.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma conclusão lógica do que foi dito anteriormente.'
      },
      {
        id: 60072,
        exercise_id: 6015,
        option_text: 'A conclusão: foi apresentada no final do trabalho.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60073,
        exercise_id: 6015,
        option_text: 'Ele concluiu: que o projeto estava completo.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60074,
        exercise_id: 6015,
        option_text: 'Portanto: o trabalho foi finalizado com sucesso.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60075,
        exercise_id: 6015,
        option_text: 'Ela resumiu: os principais pontos da reunião.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6016,
    category_id: 'prova-dois-pontos',
    question: 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente em uma enumeração de itens em linhas separadas:',
    explanation: 'Os dois pontos são usados para introduzir uma enumeração de itens dispostos em linhas separadas, como em listas.',
    difficulty: 5,
    options: [
      {
        id: 60076,
        exercise_id: 6016,
        option_text: 'Para a receita, você precisará dos seguintes ingredientes:\n- 3 ovos\n- 2 xícaras de farinha de trigo\n- 1 xícara de açúcar',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados adequadamente para introduzir uma lista de itens em linhas separadas.'
      },
      {
        id: 60077,
        exercise_id: 6016,
        option_text: 'Os ingredientes: estão todos na despensa.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60078,
        exercise_id: 6016,
        option_text: 'Ela listou: que precisava de vários ingredientes.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60079,
        exercise_id: 6016,
        option_text: 'Portanto: a receita ficou deliciosa.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60080,
        exercise_id: 6016,
        option_text: 'Ele comprou: todos os ingredientes no mercado.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6017,
    category_id: 'prova-dois-pontos',
    question: 'Em qual alternativa os dois pontos estão sendo usados corretamente para introduzir uma fala direta?',
    explanation: 'Os dois pontos são usados para introduzir a fala direta de uma pessoa ou personagem.',
    difficulty: 5,
    options: [
      {
        id: 60081,
        exercise_id: 6017,
        option_text: 'A professora perguntou à turma: "Quem terminou o trabalho de casa?"',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados adequadamente para introduzir a fala direta da professora.'
      },
      {
        id: 60082,
        exercise_id: 6017,
        option_text: 'A pergunta: foi feita pela professora.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60083,
        exercise_id: 6017,
        option_text: 'Ela questionou: se todos haviam terminado o trabalho.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60084,
        exercise_id: 6017,
        option_text: 'Portanto: a professora aguardou as respostas.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60085,
        exercise_id: 6017,
        option_text: 'A aluna respondeu: que havia terminado o trabalho.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      }
    ]
  },
  {
    id: 6018,
    category_id: 'prova-dois-pontos',
    question: 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente em uma lista de instruções:',
    explanation: 'Os dois pontos são usados para introduzir uma sequência de instruções ou etapas a serem seguidas.',
    difficulty: 5,
    options: [
      {
        id: 60086,
        exercise_id: 6018,
        option_text: 'Para instalar o programa, siga estes passos: 1) Baixe o arquivo; 2) Execute o instalador; 3) Siga as instruções na tela.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados adequadamente para introduzir uma lista de instruções numeradas.'
      },
      {
        id: 60087,
        exercise_id: 6018,
        option_text: 'As instruções: estão no manual do usuário.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60088,
        exercise_id: 6018,
        option_text: 'Ele explicou: como instalar o programa.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 60089,
        exercise_id: 6018,
        option_text: 'Portanto: o programa foi instalado com sucesso.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60090,
        exercise_id: 6018,
        option_text: 'O técnico mostrou: o local da instalação.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6019,
    category_id: 'prova-dois-pontos',
    question: 'Em qual alternativa os dois pontos estão sendo usados corretamente para introduzir uma citação de texto literário?',
    explanation: 'Os dois pontos são usados para introduzir citações de textos literários, geralmente acompanhadas de aspas.',
    difficulty: 5,
    options: [
      {
        id: 60091,
        exercise_id: 6019,
        option_text: 'Machado de Assis escreveu em "Dom Casmurro": "A vida não é mais que um sonho; e o sonho, um sonho é."',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados adequadamente para introduzir a citação do texto literário.'
      },
      {
        id: 60092,
        exercise_id: 6019,
        option_text: 'A citação: foi retirada de um livro famoso.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60093,
        exercise_id: 6019,
        option_text: 'O autor mencionou: que a citação era importante.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60094,
        exercise_id: 6019,
        option_text: 'Portanto: a citação foi incluída no trabalho.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60095,
        exercise_id: 6019,
        option_text: 'Ela citou: o trecho do livro.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6020,
    category_id: 'prova-dois-pontos',
    question: 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente em uma enumeração de características:',
    explanation: 'Os dois pontos são usados para introduzir uma enumeração de características ou qualidades que especificam um termo mencionado anteriormente.',
    difficulty: 5,
    options: [
      {
        id: 60096,
        exercise_id: 6020,
        option_text: 'O novo funcionário possui qualidades importantes: pontualidade, responsabilidade e iniciativa.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados adequadamente para introduzir uma enumeração de qualidades.'
      },
      {
        id: 60097,
        exercise_id: 6020,
        option_text: 'As qualidades: foram destacadas pelo chefe.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60098,
        exercise_id: 6020,
        option_text: 'Ele mencionou: que o funcionário era competente.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60099,
        exercise_id: 6020,
        option_text: 'Portanto: o funcionário foi promovido.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60100,
        exercise_id: 6020,
        option_text: 'O chefe elogiou: o desempenho do funcionário.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6021,
    category_id: 'prova-dois-pontos',
    question: 'Em qual alternativa os dois pontos estão sendo usados corretamente para introduzir um esclarecimento?',
    explanation: 'Os dois pontos são usados para introduzir um esclarecimento ou explicação sobre o que foi dito anteriormente.',
    difficulty: 5,
    options: [
      {
        id: 60101,
        exercise_id: 6021,
        option_text: 'A reunião foi adiada: o diretor teve um imprevisto de última hora.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados adequadamente para introduzir o motivo do adiamento da reunião.'
      },
      {
        id: 60102,
        exercise_id: 6021,
        option_text: 'O adiamento: foi comunicado a todos os funcionários.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60103,
        exercise_id: 6021,
        option_text: 'A secretária informou: que a reunião foi adiada.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60104,
        exercise_id: 6021,
        option_text: 'Portanto: todos foram avisados com antecedência.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60105,
        exercise_id: 6021,
        option_text: 'O diretor justificou: o motivo do adiamento.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6022,
    category_id: 'prova-dois-pontos',
    question: 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente em uma relação de causa e consequência:',
    explanation: 'Os dois pontos são usados para indicar uma relação de causa e consequência entre duas orações.',
    difficulty: 5,
    options: [
      {
        id: 60106,
        exercise_id: 6022,
        option_text: 'O trânsito estava caótico: havia um acidente na via principal.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados adequadamente para indicar a relação de causa (acidente) e consequência (trânsito caótico).'
      },
      {
        id: 60107,
        exercise_id: 6022,
        option_text: 'O acidente: causou um grande congestionamento.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60108,
        exercise_id: 6022,
        option_text: 'O motorista contou: que viu o acidente acontecer.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60109,
        exercise_id: 6022,
        option_text: 'Portanto: muitas pessoas chegaram atrasadas.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60110,
        exercise_id: 6022,
        option_text: 'A polícia registrou: a ocorrência do acidente.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6023,
    category_id: 'prova-dois-pontos',
    question: 'Em qual alternativa os dois pontos estão sendo usados corretamente para introduzir uma enumeração de itens em uma lista não ordenada?',
    explanation: 'Os dois pontos são usados para introduzir uma enumeração de itens dispostos em linhas separadas, sem numeração ou marcadores.',
    difficulty: 5,
    options: [
      {
        id: 60111,
        exercise_id: 6023,
        option_text: 'Para a festa, não se esqueça de trazer:\n- Bebidas\n- Salgadinhos\n- Guardanapos',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados adequadamente para introduzir uma lista de itens em linhas separadas.'
      },
      {
        id: 60112,
        exercise_id: 6023,
        option_text: 'Os itens: estão todos na sacola.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60113,
        exercise_id: 6023,
        option_text: 'Ela listou: o que precisava comprar.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      },
      {
        id: 60114,
        exercise_id: 6023,
        option_text: 'Portanto: a lista estava completa.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60115,
        exercise_id: 6023,
        option_text: 'Ele comprou: todos os itens necessários.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6024,
    category_id: 'prova-dois-pontos',
    question: 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente para introduzir uma citação dentro de outra citação:',
    explanation: 'Os dois pontos são usados para introduzir uma citação dentro de outra citação, geralmente quando se cita alguém que está citando outra pessoa.',
    difficulty: 5,
    options: [
      {
        id: 60116,
        exercise_id: 6024,
        option_text: 'O professor explicou: "Como dizia meu avô: \'Quem espera sempre alcança\'."',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados adequadamente para introduzir uma citação dentro de outra citação.'
      },
      {
        id: 60117,
        exercise_id: 6024,
        option_text: 'A citação: foi retirada de um livro antigo.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60118,
        exercise_id: 6024,
        option_text: 'Ele mencionou: que seu avô sempre dizia isso.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60119,
        exercise_id: 6024,
        option_text: 'Portanto: a lição foi aprendida.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60120,
        exercise_id: 6024,
        option_text: 'O avó ensinou: o valor da paciência.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6025,
    category_id: 'prova-dois-pontos',
    question: 'Em qual alternativa os dois pontos estão sendo usados corretamente para introduzir uma fala direta?',
    explanation: 'Os dois pontos são usados para introduzir uma fala direta, geralmente em diálogos ou discursos diretos.',
    difficulty: 5,
    options: [
      {
        id: 60121,
        exercise_id: 6025,
        option_text: 'O professor perguntou: "Quem terminou o trabalho de casa?"',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados adequadamente para introduzir a fala direta do professor.'
      },
      {
        id: 60122,
        exercise_id: 6025,
        option_text: 'A pergunta: foi feita pelo professor.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60123,
        exercise_id: 6025,
        option_text: 'Ele quis saber: se todos tinham feito a tarefa.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60124,
        exercise_id: 6025,
        option_text: 'Portanto: ninguém respondeu.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60125,
        exercise_id: 6025,
        option_text: 'O aluno respondeu: que não tinha feito o trabalho.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      }
    ]
  },
  {
    id: 6026,
    category_id: 'prova-dois-pontos',
    question: 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente para introduzir um aposto explicativo:',
    explanation: 'Os dois pontos são usados para introduzir um aposto explicativo que esclarece ou especifica um termo mencionado anteriormente.',
    difficulty: 5,
    options: [
      {
        id: 60126,
        exercise_id: 6026,
        option_text: 'Há apenas uma solução para o problema: estudar mais.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados adequadamente para introduzir um aposto explicativo que esclarece a solução mencionada.'
      },
      {
        id: 60127,
        exercise_id: 6026,
        option_text: 'A solução: foi encontrada rapidamente.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60128,
        exercise_id: 6026,
        option_text: 'Ela sugeriu: que estudássemos mais.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60129,
        exercise_id: 6026,
        option_text: 'Portanto: todos concordaram com a sugestão.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60130,
        exercise_id: 6026,
        option_text: 'O professor recomendou: mais dedicação aos estudos.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6027,
    category_id: 'prova-dois-pontos',
    question: 'Em qual alternativa os dois pontos são usados corretamente para introduzir uma síntese ou conclusão?',
    explanation: 'Os dois pontos podem ser usados para introduzir uma síntese ou conclusão do que foi dito anteriormente.',
    difficulty: 5,
    options: [
      {
        id: 60131,
        exercise_id: 6027,
        option_text: 'O projeto foi um sucesso: todos os objetivos foram alcançados dentro do prazo e do orçamento previstos.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma conclusão que resume o sucesso mencionado.'
      },
      {
        id: 60132,
        exercise_id: 6027,
        option_text: 'O projeto: foi concluído com sucesso.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60133,
        exercise_id: 6027,
        option_text: 'Eles disseram: que o projeto foi um sucesso.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60134,
        exercise_id: 6027,
        option_text: 'Portanto: devemos comemorar.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60135,
        exercise_id: 6027,
        option_text: 'O relatório mostrou: bons resultados.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6028,
    category_id: 'prova-dois-pontos',
    question: 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente para introduzir um esclarecimento:',
    explanation: 'Os dois pontos são usados para introduzir um esclarecimento ou explicação sobre o que foi dito anteriormente.',
    difficulty: 5,
    options: [
      {
        id: 60136,
        exercise_id: 6028,
        option_text: 'A decisão foi unânime: todos os membros do conselho aprovaram a proposta por unanimidade.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem um esclarecimento sobre a decisão mencionada.'
      },
      {
        id: 60137,
        exercise_id: 6028,
        option_text: 'A decisão: foi tomada rapidamente.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60138,
        exercise_id: 6028,
        option_text: 'Eles declararam: que a decisão foi unânime.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60139,
        exercise_id: 6028,
        option_text: 'Portanto: o projeto foi aprovado.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60140,
        exercise_id: 6028,
        option_text: 'O presidente anunciou: a decisão do conselho.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  },
  {
    id: 6029,
    category_id: 'prova-dois-pontos',
    question: 'Em qual alternativa os dois pontos são usados corretamente para introduzir uma fala direta em um texto narrativo?',
    explanation: 'Os dois pontos são usados para introduzir a fala de um personagem em textos narrativos.',
    difficulty: 5,
    options: [
      {
        id: 60141,
        exercise_id: 6029,
        option_text: 'Ele olhou nos meus olhos e disse: "Confio em você para tomar a decisão certa".',
        is_correct: true,
        explanation: 'Correto! Os dois pontos são usados adequadamente para introduzir a fala direta do personagem.'
      },
      {
        id: 60142,
        exercise_id: 6029,
        option_text: 'Ele: disse que confiava em mim.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do verbo.'
      },
      {
        id: 60143,
        exercise_id: 6029,
        option_text: 'Ele afirmou: que confiava em mim.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60144,
        exercise_id: 6029,
        option_text: 'Portanto: ele me deu total liberdade.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60145,
        exercise_id: 6029,
        option_text: 'Sua confiança: me surpreendeu.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 6030,
    category_id: 'prova-dois-pontos',
    question: 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente para introduzir uma consequência ou resultado:',
    explanation: 'Os dois pontos podem ser usados para introduzir uma consequência ou resultado lógico do que foi dito anteriormente.',
    difficulty: 5,
    options: [
      {
        id: 60146,
        exercise_id: 6030,
        option_text: 'O tempo estava terrível: chovia torrencialmente há três dias consecutivos.',
        is_correct: true,
        explanation: 'Correto! Os dois pontos introduzem uma consequência que exemplifica o tempo terrível mencionado.'
      },
      {
        id: 60147,
        exercise_id: 6030,
        option_text: 'O tempo: estava terrível naquela semana.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
      },
      {
        id: 60148,
        exercise_id: 6030,
        option_text: 'Eles comentaram: que o tempo estava terrível.',
        is_correct: false,
        explanation: 'Incorreto! Em discurso indireto, não se usam dois pontos.'
      },
      {
        id: 60149,
        exercise_id: 6030,
        option_text: 'Portanto: o evento foi adiado.',
        is_correct: false,
        explanation: 'Incorreto! Não se usam dois pontos após conjunção conclusiva.'
      },
      {
        id: 60150,
        exercise_id: 6030,
        option_text: 'A previsão indicou: chuva para toda a região.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa dois pontos após o verbo dessa forma.'
      }
    ]
  }
];

// Funções para usar no lugar do Supabase

// Função para obter exercícios por categoria
export async function getDoisPontosExercises(categoryId: string): Promise<Exercise[]> {
  // Retornar exercícios conforme a categoria solicitada
  switch(categoryId) {
    case 'dois-pontos':
      // Duplicar os exercícios existentes para ter 10 no total
      return duplicateExercises(doisPontosExercicio1, 1, 10);
    case 'dois-pontos-2':
      // Duplicar os exercícios existentes para ter 10 no total
      return duplicateExercises(doisPontosExercicio2, 2, 10);
    case 'dois-pontos-3':
      // Duplicar os exercícios existentes para ter 10 no total
      return duplicateExercises(doisPontosExercicio3, 3, 10);
    case 'dois-pontos-4':
      // Duplicar os exercícios existentes para ter 10 no total
      return duplicateExercises(doisPontosExercicio4, 4, 10);
    case 'dois-pontos-5':
      // Duplicar os exercícios existentes para ter 10 no total
      return duplicateExercises(doisPontosExercicio5, 5, 10);
    case 'prova-dois-pontos':
      // Duplicar os exercícios existentes para ter 30 no total
      return duplicateExercises(provaDoisPontos, 6, 30);
    default:
      return [];
  }
}

// Função auxiliar para duplicar exercícios e garantir que cada módulo tenha o número desejado de exercícios
function duplicateExercises(exercises: Exercise[], moduleNumber: number, targetCount: number): Exercise[] {
  // Se não houver exercícios, retornar array vazio
  if (exercises.length === 0) {
    return [];
  }
  
  // Se já tivermos exercícios suficientes, retornar a quantidade desejada
  if (exercises.length >= targetCount) {
    return exercises.slice(0, targetCount);
  }
  
  // Para a prova final, garantir que temos exatamente 30 questões
  if (moduleNumber === 6) {
    // Se tivermos exatamente 30 questões, retornar todas
    if (exercises.length === targetCount) {
      return exercises;
    }
    
    // Se tivermos mais de 30 questões, retornar apenas as 30 primeiras
    if (exercises.length > targetCount) {
      return exercises.slice(0, targetCount);
    }
    
    // Se tivermos menos de 30 questões, lançar um erro pois não devemos mais chegar aqui
    // já que agora temos exatamente 30 questões no array
    console.error('Erro: O array de provas deve conter exatamente 30 questões.');
    return exercises;
  }

  const result: Exercise[] = [...exercises];
  let currentId = exercises.length > 0 ? Math.max(...exercises.map(ex => ex.id)) + 1 : moduleNumber * 1000 + 1;
  let currentOptionId = exercises.length > 0 ? 
    Math.max(...exercises.flatMap(ex => ex.options.map(opt => opt.id))) + 1 : 
    moduleNumber * 10000 + 1;

  // Continuar adicionando exercícios até atingir o número desejado
  while (result.length < targetCount) {
    // Pegar um exercício existente para usar como base
    const baseExercise = exercises[result.length % exercises.length];
    
    // Criar uma cópia com novos IDs
    const newExercise: Exercise = {
      ...baseExercise,
      id: currentId++,
      question: baseExercise.question,
      options: baseExercise.options.map(option => ({
        ...option,
        id: currentOptionId++,
        exercise_id: currentId - 1,
        option_text: option.option_text
      }))
    };
    
    result.push(newExercise);
  }

  return result;
}

