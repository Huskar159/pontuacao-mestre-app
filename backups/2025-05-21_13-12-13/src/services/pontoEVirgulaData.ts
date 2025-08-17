import { Exercise } from './exerciseService';

// Exercícios do módulo Ponto e Vírgula 1
export const pontoEVirgulaExercicio1: Exercise[] = [
  {
    id: 7001,
    category_id: 'ponto-e-virgula',
    question: 'Em qual das alternativas o ponto e vírgula está sendo usado corretamente?',
    explanation: 'O ponto e vírgula é usado para separar orações independentes relacionadas entre si.',
    difficulty: 1,
    options: [
      {
        id: 70001,
        exercise_id: 7001,
        option_text: 'Ele estudou muito; conseguiu passar no exame.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando duas orações independentes que têm relação entre si.'
      },
      {
        id: 70002,
        exercise_id: 7001,
        option_text: 'Ele estudou muito, conseguiu passar no exame.',
        is_correct: false,
        explanation: 'Incorreto! Neste caso, seria mais adequado usar ponto e vírgula em vez de vírgula, pois são orações independentes.'
      },
      {
        id: 70003,
        exercise_id: 7001,
        option_text: 'Ele estudou muito; e conseguiu passar no exame.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      },
      {
        id: 70004,
        exercise_id: 7001,
        option_text: 'Ele; estudou muito e conseguiu passar no exame.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 70005,
        exercise_id: 7001,
        option_text: 'Ele estudou muito, porém; não conseguiu passar no exame.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve vir antes da conjunção adversativa, não depois.'
      }
    ]
  },
  {
    id: 7002,
    category_id: 'ponto-e-virgula',
    question: 'Identifique a alternativa em que o ponto e vírgula está sendo usado corretamente para separar itens em uma enumeração:',
    explanation: 'O ponto e vírgula é usado para separar itens em enumerações complexas, especialmente quando os itens já contêm vírgulas.',
    difficulty: 1,
    options: [
      {
        id: 70006,
        exercise_id: 7002,
        option_text: 'Precisamos comprar: maçãs, peras e uvas; cadernos, canetas e lápis; produtos de limpeza e higiene.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando grupos de itens em uma enumeração complexa.'
      },
      {
        id: 70007,
        exercise_id: 7002,
        option_text: 'Precisamos comprar: maçãs; peras; uvas; cadernos; canetas.',
        is_correct: false,
        explanation: 'Incorreto! Para itens simples como estes, deve-se usar vírgula, não ponto e vírgula.'
      },
      {
        id: 70008,
        exercise_id: 7002,
        option_text: 'Precisamos comprar: maçãs, peras, uvas; cadernos, canetas, lápis.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula está sendo usado para separar apenas dois grupos, o que não justifica seu uso neste caso.'
      },
      {
        id: 70009,
        exercise_id: 7002,
        option_text: 'Precisamos; comprar: maçãs, peras, uvas, cadernos, canetas, lápis.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo do seu complemento.'
      },
      {
        id: 70010,
        exercise_id: 7002,
        option_text: 'Precisamos comprar: maçãs, peras e; uvas, cadernos, canetas e lápis.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      }
    ]
  },
  {
    id: 7003,
    category_id: 'ponto-e-virgula',
    question: 'Qual frase apresenta o uso correto do ponto e vírgula?',
    explanation: 'O ponto e vírgula é usado para separar orações independentes relacionadas entre si.',
    difficulty: 1,
    options: [
      {
        id: 70011,
        exercise_id: 7003,
        option_text: 'O céu estava nublado; começou a chover forte.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando duas orações independentes que têm relação entre si.'
      },
      {
        id: 70012,
        exercise_id: 7003,
        option_text: 'O céu; estava nublado e começou a chover forte.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 70013,
        exercise_id: 7003,
        option_text: 'O céu estava nublado, começou; a chover forte.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo do seu complemento.'
      },
      {
        id: 70014,
        exercise_id: 7003,
        option_text: 'O céu estava nublado; e começou a chover forte.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      },
      {
        id: 70015,
        exercise_id: 7003,
        option_text: 'O céu estava nublado, porém; começou a chover forte.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve vir antes da conjunção adversativa, não depois.'
      }
    ]
  },
  {
    id: 7004,
    category_id: 'ponto-e-virgula',
    question: 'Em qual opção o ponto e vírgula está sendo usado adequadamente antes de conjunções adversativas?',
    explanation: 'O ponto e vírgula pode ser usado antes de conjunções adversativas como "mas", "porém", "contudo", etc.',
    difficulty: 1,
    options: [
      {
        id: 70016,
        exercise_id: 7004,
        option_text: 'Tentei ajudá-lo; porém ele recusou minha ajuda.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está sendo usado adequadamente antes da conjunção adversativa "porém".'
      },
      {
        id: 70017,
        exercise_id: 7004,
        option_text: 'Tentei ajudá-lo, porém; ele recusou minha ajuda.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve vir antes da conjunção adversativa, não depois.'
      },
      {
        id: 70018,
        exercise_id: 7004,
        option_text: 'Tentei; ajudá-lo, porém ele recusou minha ajuda.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo do seu complemento.'
      },
      {
        id: 70019,
        exercise_id: 7004,
        option_text: 'Tentei ajudá-lo; e ele recusou minha ajuda.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      },
      {
        id: 70020,
        exercise_id: 7004,
        option_text: 'Tentei ajudá-lo; ele; recusou minha ajuda.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      }
    ]
  },
  {
    id: 7005,
    category_id: 'ponto-e-virgula',
    question: 'Identifique a alternativa em que o ponto e vírgula está sendo usado corretamente em uma enumeração:',
    explanation: 'O ponto e vírgula é usado para separar itens em enumerações complexas, especialmente quando os itens já contêm vírgulas.',
    difficulty: 1,
    options: [
      {
        id: 70021,
        exercise_id: 7005,
        option_text: 'Os participantes vieram de várias cidades: São Paulo, SP; Rio de Janeiro, RJ; Belo Horizonte, MG.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando itens complexos (cidade e estado) em uma enumeração.'
      },
      {
        id: 70022,
        exercise_id: 7005,
        option_text: 'Os participantes vieram de; São Paulo, Rio de Janeiro, Belo Horizonte.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar a preposição do seu complemento.'
      },
      {
        id: 70023,
        exercise_id: 7005,
        option_text: 'Os participantes; vieram de São Paulo, Rio de Janeiro, Belo Horizonte.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 70024,
        exercise_id: 7005,
        option_text: 'Os participantes vieram de São Paulo; Rio de Janeiro; Belo Horizonte.',
        is_correct: false,
        explanation: 'Incorreto! Para itens simples como estes, deve-se usar vírgula, não ponto e vírgula.'
      },
      {
        id: 70025,
        exercise_id: 7005,
        option_text: 'Os participantes vieram de São Paulo, Rio de Janeiro; e Belo Horizonte.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      }
    ]
  },
  {
    id: 7006,
    category_id: 'ponto-e-virgula',
    question: 'Qual das frases apresenta o uso correto do ponto e vírgula para separar orações independentes?',
    explanation: 'O ponto e vírgula é usado para separar orações independentes relacionadas entre si.',
    difficulty: 1,
    options: [
      {
        id: 70026,
        exercise_id: 7006,
        option_text: 'O filme foi excelente; a atuação dos atores surpreendeu a todos.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando duas orações independentes que têm relação entre si.'
      },
      {
        id: 70027,
        exercise_id: 7006,
        option_text: 'O filme; foi excelente e a atuação dos atores surpreendeu a todos.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 70028,
        exercise_id: 7006,
        option_text: 'O filme foi excelente, a atuação; dos atores surpreendeu a todos.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o complemento nominal do seu núcleo.'
      },
      {
        id: 70029,
        exercise_id: 7006,
        option_text: 'O filme foi excelente; e a atuação dos atores surpreendeu a todos.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      },
      {
        id: 70030,
        exercise_id: 7006,
        option_text: 'O filme foi excelente, porém; a atuação dos atores surpreendeu a todos.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve vir antes da conjunção adversativa, não depois.'
      }
    ]
  },
  {
    id: 7007,
    category_id: 'ponto-e-virgula',
    question: 'Em qual opção o ponto e vírgula está sendo usado corretamente em uma lista?',
    explanation: 'O ponto e vírgula é usado para separar itens em listas complexas, especialmente quando os itens já contêm vírgulas.',
    difficulty: 1,
    options: [
      {
        id: 70031,
        exercise_id: 7007,
        option_text: 'Para o projeto, precisamos de: um arquiteto, para o design; um engenheiro, para os cálculos; um mestre de obras, para a execução.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando itens complexos em uma lista.'
      },
      {
        id: 70032,
        exercise_id: 7007,
        option_text: 'Para o projeto; precisamos de: um arquiteto, um engenheiro, um mestre de obras.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar a preposição do seu complemento.'
      },
      {
        id: 70033,
        exercise_id: 7007,
        option_text: 'Para o projeto, precisamos; de: um arquiteto, um engenheiro, um mestre de obras.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo do seu complemento.'
      },
      {
        id: 70034,
        exercise_id: 7007,
        option_text: 'Para o projeto, precisamos de: um arquiteto; um engenheiro; um mestre de obras.',
        is_correct: false,
        explanation: 'Incorreto! Para itens simples como estes, deve-se usar vírgula, não ponto e vírgula.'
      },
      {
        id: 70035,
        exercise_id: 7007,
        option_text: 'Para o projeto, precisamos de: um arquiteto, um engenheiro; e um mestre de obras.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      }
    ]
  },
  {
    id: 7008,
    category_id: 'ponto-e-virgula',
    question: 'Identifique a alternativa em que o ponto e vírgula está sendo usado corretamente antes de expressões explicativas:',
    explanation: 'O ponto e vírgula pode ser usado antes de expressões explicativas como "isto é", "ou seja", "por exemplo", etc.',
    difficulty: 1,
    options: [
      {
        id: 70036,
        exercise_id: 7008,
        option_text: 'Ele precisa melhorar suas habilidades de comunicação; isto é, deve aprender a se expressar com mais clareza.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está sendo usado adequadamente antes da expressão explicativa "isto é".'
      },
      {
        id: 70037,
        exercise_id: 7008,
        option_text: 'Ele precisa melhorar suas habilidades de comunicação, isto é; deve aprender a se expressar com mais clareza.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve vir antes da expressão explicativa, não depois.'
      },
      {
        id: 70038,
        exercise_id: 7008,
        option_text: 'Ele precisa; melhorar suas habilidades de comunicação, isto é, deve aprender a se expressar com mais clareza.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo do seu complemento.'
      },
      {
        id: 70039,
        exercise_id: 7008,
        option_text: 'Ele; precisa melhorar suas habilidades de comunicação, isto é, deve aprender a se expressar com mais clareza.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 70040,
        exercise_id: 7008,
        option_text: 'Ele precisa melhorar suas habilidades de comunicação; e isto é, deve aprender a se expressar com mais clareza.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa conjunção aditiva (e) após ponto e vírgula e antes de expressão explicativa.'
      }
    ]
  },
  {
    id: 7009,
    category_id: 'ponto-e-virgula',
    question: 'Qual frase apresenta o uso correto do ponto e vírgula em uma sequência de orações?',
    explanation: 'O ponto e vírgula é usado para separar orações independentes em uma sequência.',
    difficulty: 1,
    options: [
      {
        id: 70041,
        exercise_id: 7009,
        option_text: 'Acordei cedo; preparei o café; saí para trabalhar.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando orações independentes em uma sequência.'
      },
      {
        id: 70042,
        exercise_id: 7009,
        option_text: 'Acordei; cedo, preparei o café, saí para trabalhar.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo do seu adjunto adverbial.'
      },
      {
        id: 70043,
        exercise_id: 7009,
        option_text: 'Acordei cedo, preparei; o café, saí para trabalhar.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo do seu complemento.'
      },
      {
        id: 70044,
        exercise_id: 7009,
        option_text: 'Acordei cedo; e preparei o café; e saí para trabalhar.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      },
      {
        id: 70045,
        exercise_id: 7009,
        option_text: 'Acordei cedo, preparei o café; saí; para trabalhar.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo da preposição que introduz seu complemento.'
      }
    ]
  },
  {
    id: 7010,
    category_id: 'ponto-e-virgula',
    question: 'Em qual das opções o ponto e vírgula está sendo usado adequadamente em um texto?',
    explanation: 'O ponto e vírgula é usado para separar orações independentes relacionadas entre si ou itens em enumerações complexas.',
    difficulty: 1,
    options: [
      {
        id: 70046,
        exercise_id: 7010,
        option_text: 'A reunião foi produtiva; todos os tópicos foram discutidos; as decisões foram registradas em ata.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando orações independentes em uma sequência.'
      },
      {
        id: 70047,
        exercise_id: 7010,
        option_text: 'A reunião; foi produtiva, todos os tópicos foram discutidos, as decisões foram registradas em ata.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 70048,
        exercise_id: 7010,
        option_text: 'A reunião foi produtiva, todos; os tópicos foram discutidos, as decisões foram registradas em ata.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o adjunto adnominal do seu núcleo.'
      },
      {
        id: 70049,
        exercise_id: 7010,
        option_text: 'A reunião foi produtiva; e todos os tópicos foram discutidos; e as decisões foram registradas em ata.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      },
      {
        id: 70050,
        exercise_id: 7010,
        option_text: 'A reunião foi produtiva, porém; todos os tópicos foram discutidos, e as decisões foram registradas em ata.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve vir antes da conjunção adversativa, não depois.'
      }
    ]
  }
];

// Exercícios do módulo Ponto e Vírgula 2
export const pontoEVirgulaExercicio2: Exercise[] = [
  {
    id: 8001,
    category_id: 'ponto-e-virgula-2',
    question: 'Em qual das alternativas o ponto e vírgula está sendo usado corretamente em um texto dissertativo?',
    explanation: 'O ponto e vírgula é usado para separar orações independentes relacionadas entre si em textos dissertativos.',
    difficulty: 2,
    options: [
      {
        id: 80001,
        exercise_id: 8001,
        option_text: 'A poluição ambiental é um problema global; suas consequências afetam todos os seres vivos do planeta.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando duas orações independentes relacionadas entre si em um texto dissertativo.'
      },
      {
        id: 80002,
        exercise_id: 8001,
        option_text: 'A poluição ambiental; é um problema global que afeta todos os seres vivos do planeta.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 80003,
        exercise_id: 8001,
        option_text: 'A poluição ambiental é um problema global, suas; consequências afetam todos os seres vivos do planeta.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o possessivo do substantivo.'
      },
      {
        id: 80004,
        exercise_id: 8001,
        option_text: 'A poluição ambiental é um problema global; e suas consequências afetam todos os seres vivos do planeta.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      },
      {
        id: 80005,
        exercise_id: 8001,
        option_text: 'A poluição ambiental é um problema global, porém; suas consequências afetam todos os seres vivos do planeta.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve vir antes da conjunção adversativa, não depois.'
      }
    ]
  },
  {
    id: 8002,
    category_id: 'ponto-e-virgula-2',
    question: 'Identifique a alternativa em que o ponto e vírgula está sendo usado corretamente em uma enumeração complexa:',
    explanation: 'O ponto e vírgula é usado para separar itens em enumerações complexas, especialmente quando os itens já contêm vírgulas.',
    difficulty: 2,
    options: [
      {
        id: 80006,
        exercise_id: 8002,
        option_text: 'O relatório apresentou dados de várias regiões: Norte, com 15% de crescimento; Nordeste, com 12%; Centro-Oeste, com 10%.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando itens complexos em uma enumeração.'
      },
      {
        id: 80007,
        exercise_id: 8002,
        option_text: 'O relatório; apresentou dados de várias regiões: Norte, Nordeste e Centro-Oeste.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 80008,
        exercise_id: 8002,
        option_text: 'O relatório apresentou; dados de várias regiões: Norte, Nordeste e Centro-Oeste.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo do seu complemento.'
      },
      {
        id: 80009,
        exercise_id: 8002,
        option_text: 'O relatório apresentou dados de várias regiões: Norte; Nordeste; Centro-Oeste.',
        is_correct: false,
        explanation: 'Incorreto! Para itens simples como estes, deve-se usar vírgula, não ponto e vírgula.'
      },
      {
        id: 80010,
        exercise_id: 8002,
        option_text: 'O relatório apresentou dados de várias regiões: Norte, Nordeste; e Centro-Oeste.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      }
    ]
  },
  {
    id: 8003,
    category_id: 'ponto-e-virgula-2',
    question: 'Em qual das alternativas o ponto e vírgula está sendo usado corretamente para separar ideias contrastantes?',
    explanation: 'O ponto e vírgula pode ser usado para separar ideias contrastantes, especialmente quando não há conjunção adversativa.',
    difficulty: 2,
    options: [
      {
        id: 80011,
        exercise_id: 8003,
        option_text: 'Alguns preferem estudar pela manhã; outros rendem mais à noite.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando ideias contrastantes.'
      },
      {
        id: 80012,
        exercise_id: 8003,
        option_text: 'Alguns; preferem estudar pela manhã, outros rendem mais à noite.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 80013,
        exercise_id: 8003,
        option_text: 'Alguns preferem estudar pela manhã, outros; rendem mais à noite.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve separar as orações, não o sujeito do predicado.'
      },
      {
        id: 80014,
        exercise_id: 8003,
        option_text: 'Alguns preferem estudar pela manhã; e outros rendem mais à noite.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      },
      {
        id: 80015,
        exercise_id: 8003,
        option_text: 'Alguns preferem estudar pela manhã, mas; outros rendem mais à noite.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve vir antes da conjunção adversativa, não depois.'
      }
    ]
  },
  {
    id: 8004,
    category_id: 'ponto-e-virgula-2',
    question: 'Qual alternativa apresenta o uso correto do ponto e vírgula em uma citação bibliográfica?',
    explanation: 'O ponto e vírgula é usado em citações bibliográficas para separar diferentes obras ou autores.',
    difficulty: 2,
    options: [
      {
        id: 80016,
        exercise_id: 8004,
        option_text: 'SILVA, 2010; SOUZA, 2015; OLIVEIRA, 2018.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando diferentes referências bibliográficas.'
      },
      {
        id: 80017,
        exercise_id: 8004,
        option_text: 'SILVA; 2010, SOUZA, 2015, OLIVEIRA, 2018.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o nome do autor do ano da publicação.'
      },
      {
        id: 80018,
        exercise_id: 8004,
        option_text: 'SILVA, 2010, SOUZA; 2015, OLIVEIRA, 2018.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve separar as referências, não o nome do autor do ano.'
      },
      {
        id: 80019,
        exercise_id: 8004,
        option_text: 'SILVA, 2010; e SOUZA, 2015; e OLIVEIRA, 2018.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa conjunção aditiva (e) após ponto e vírgula em citações bibliográficas.'
      },
      {
        id: 80020,
        exercise_id: 8004,
        option_text: 'SILVA, 2010, SOUZA, 2015, OLIVEIRA, 2018;',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve separar as referências, não aparecer ao final da lista.'
      }
    ]
  },
  {
    id: 8005,
    category_id: 'ponto-e-virgula-2',
    question: 'Em qual alternativa o ponto e vírgula está sendo usado corretamente em um texto acadêmico?',
    explanation: 'O ponto e vírgula é usado em textos acadêmicos para separar ideias relacionadas ou itens em enumerações complexas.',
    difficulty: 2,
    options: [
      {
        id: 80021,
        exercise_id: 8005,
        option_text: 'A pesquisa foi realizada em três etapas: coleta de dados, com 100 participantes; análise estatística, com uso de software especializado; interpretação dos resultados, com base na literatura.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando itens complexos em uma enumeração.'
      },
      {
        id: 80022,
        exercise_id: 8005,
        option_text: 'A pesquisa; foi realizada em três etapas: coleta de dados, análise estatística e interpretação dos resultados.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 80023,
        exercise_id: 8005,
        option_text: 'A pesquisa foi; realizada em três etapas: coleta de dados, análise estatística e interpretação dos resultados.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo auxiliar do principal.'
      },
      {
        id: 80024,
        exercise_id: 8005,
        option_text: 'A pesquisa foi realizada em três etapas: coleta de dados; análise estatística; interpretação dos resultados.',
        is_correct: false,
        explanation: 'Incorreto! Para itens simples como estes, deve-se usar vírgula, não ponto e vírgula.'
      },
      {
        id: 80025,
        exercise_id: 8005,
        option_text: 'A pesquisa foi realizada em três etapas: coleta de dados, análise estatística; e interpretação dos resultados.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      }
    ]
  },
  {
    id: 8006,
    category_id: 'ponto-e-virgula-2',
    question: 'Qual alternativa apresenta o uso correto do ponto e vírgula em uma sequência de orações?',
    explanation: 'O ponto e vírgula é usado para separar orações independentes em uma sequência.',
    difficulty: 2,
    options: [
      {
        id: 80026,
        exercise_id: 8006,
        option_text: 'Li o livro; fiz um resumo; apresentei para a turma.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando orações independentes em uma sequência.'
      },
      {
        id: 80027,
        exercise_id: 8006,
        option_text: 'Li; o livro, fiz um resumo, apresentei para a turma.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo do seu complemento.'
      },
      {
        id: 80028,
        exercise_id: 8006,
        option_text: 'Li o livro, fiz; um resumo, apresentei para a turma.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo do seu complemento.'
      },
      {
        id: 80029,
        exercise_id: 8006,
        option_text: 'Li o livro; e fiz um resumo; e apresentei para a turma.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      },
      {
        id: 80030,
        exercise_id: 8006,
        option_text: 'Li o livro, fiz um resumo, apresentei; para a turma.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo da preposição que introduz seu complemento.'
      }
    ]
  },
  {
    id: 8007,
    category_id: 'ponto-e-virgula-2',
    question: 'Em qual alternativa o ponto e vírgula está sendo usado corretamente antes de conjunções explicativas?',
    explanation: 'O ponto e vírgula pode ser usado antes de conjunções explicativas como "isto é", "ou seja", etc.',
    difficulty: 2,
    options: [
      {
        id: 80031,
        exercise_id: 8007,
        option_text: 'O projeto foi cancelado; isto é, não será mais executado.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está sendo usado adequadamente antes da expressão explicativa "isto é".'
      },
      {
        id: 80032,
        exercise_id: 8007,
        option_text: 'O projeto foi cancelado, isto é; não será mais executado.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve vir antes da expressão explicativa, não depois.'
      },
      {
        id: 80033,
        exercise_id: 8007,
        option_text: 'O projeto; foi cancelado, isto é, não será mais executado.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 80034,
        exercise_id: 8007,
        option_text: 'O projeto foi; cancelado, isto é, não será mais executado.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo auxiliar do principal.'
      },
      {
        id: 80035,
        exercise_id: 8007,
        option_text: 'O projeto foi cancelado; e isto é, não será mais executado.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa conjunção aditiva (e) após ponto e vírgula e antes de expressão explicativa.'
      }
    ]
  },
  {
    id: 8008,
    category_id: 'ponto-e-virgula-2',
    question: 'Qual alternativa apresenta o uso correto do ponto e vírgula em um texto técnico?',
    explanation: 'O ponto e vírgula é usado em textos técnicos para separar itens em enumerações complexas ou orações independentes relacionadas.',
    difficulty: 2,
    options: [
      {
        id: 80036,
        exercise_id: 8008,
        option_text: 'O sistema operacional apresentou falhas; o técnico foi chamado para resolver o problema.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando duas orações independentes relacionadas entre si.'
      },
      {
        id: 80037,
        exercise_id: 8008,
        option_text: 'O sistema operacional; apresentou falhas, o técnico foi chamado para resolver o problema.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 80038,
        exercise_id: 8008,
        option_text: 'O sistema operacional apresentou falhas, o técnico; foi chamado para resolver o problema.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve separar as orações, não o sujeito do predicado da segunda oração.'
      },
      {
        id: 80039,
        exercise_id: 8008,
        option_text: 'O sistema operacional apresentou falhas; e o técnico foi chamado para resolver o problema.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      },
      {
        id: 80040,
        exercise_id: 8008,
        option_text: 'O sistema operacional apresentou falhas, porém; o técnico foi chamado para resolver o problema.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve vir antes da conjunção adversativa, não depois.'
      }
    ]
  },
  {
    id: 8009,
    category_id: 'ponto-e-virgula-2',
    question: 'Em qual alternativa o ponto e vírgula está sendo usado corretamente em um texto formal?',
    explanation: 'O ponto e vírgula é usado em textos formais para separar orações independentes relacionadas ou itens em enumerações complexas.',
    difficulty: 2,
    options: [
      {
        id: 80041,
        exercise_id: 8009,
        option_text: 'A reunião foi adiada para a próxima semana; todos os participantes foram notificados da mudança.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando duas orações independentes relacionadas entre si.'
      },
      {
        id: 80042,
        exercise_id: 8009,
        option_text: 'A reunião; foi adiada para a próxima semana, todos os participantes foram notificados da mudança.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 80043,
        exercise_id: 8009,
        option_text: 'A reunião foi adiada para a próxima semana, todos; os participantes foram notificados da mudança.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve separar as orações, não o sujeito do seu determinante.'
      },
      {
        id: 80044,
        exercise_id: 8009,
        option_text: 'A reunião foi adiada para a próxima semana; e todos os participantes foram notificados da mudança.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      },
      {
        id: 80045,
        exercise_id: 8009,
        option_text: 'A reunião foi adiada para a próxima semana, porém; todos os participantes foram notificados da mudança.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve vir antes da conjunção adversativa, não depois.'
      }
    ]
  },
  {
    id: 8010,
    category_id: 'ponto-e-virgula-2',
    question: 'Qual alternativa apresenta o uso correto do ponto e vírgula em uma lista de itens?',
    explanation: 'O ponto e vírgula é usado para separar itens em listas, especialmente quando os itens são longos ou já contêm vírgulas.',
    difficulty: 2,
    options: [
      {
        id: 80046,
        exercise_id: 8010,
        option_text: 'Para a viagem, leve: roupas leves, para o dia; casacos quentes, para a noite; medicamentos básicos, para emergências.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando itens complexos em uma lista.'
      },
      {
        id: 80047,
        exercise_id: 8010,
        option_text: 'Para a viagem; leve: roupas leves, casacos quentes, medicamentos básicos.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar a preposição do seu complemento.'
      },
      {
        id: 80048,
        exercise_id: 8010,
        option_text: 'Para a viagem, leve; roupas leves, casacos quentes, medicamentos básicos.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo do seu complemento.'
      },
      {
        id: 80049,
        exercise_id: 8010,
        option_text: 'Para a viagem, leve: roupas leves; casacos quentes; medicamentos básicos.',
        is_correct: false,
        explanation: 'Incorreto! Para itens simples como estes, deve-se usar vírgula, não ponto e vírgula.'
      },
      {
        id: 80050,
        exercise_id: 8010,
        option_text: 'Para a viagem, leve: roupas leves, casacos quentes; e medicamentos básicos.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      }
    ]
  }
];

// Exercícios do módulo Ponto e Vírgula 3
export const pontoEVirgulaExercicio3: Exercise[] = [
  {
    id: 9001,
    category_id: 'ponto-e-virgula-3',
    question: 'Em qual das alternativas o ponto e vírgula está sendo usado corretamente para separar orações coordenadas extensas?',
    explanation: 'O ponto e vírgula é usado para separar orações coordenadas extensas, especialmente quando já contêm vírgulas internas.',
    difficulty: 3,
    options: [
      {
        id: 90001,
        exercise_id: 9001,
        option_text: 'Os alunos, ansiosos pelo resultado, aguardavam na sala; os professores, reunidos na coordenação, finalizavam as notas do semestre.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando duas orações coordenadas extensas que já contêm vírgulas internas.'
      },
      {
        id: 90002,
        exercise_id: 9001,
        option_text: 'Os alunos; ansiosos pelo resultado, aguardavam na sala, enquanto os professores finalizavam as notas.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do seu aposto.'
      },
      {
        id: 90003,
        exercise_id: 9001,
        option_text: 'Os alunos, ansiosos pelo resultado; aguardavam na sala, enquanto os professores finalizavam as notas.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o aposto do predicado.'
      },
      {
        id: 90004,
        exercise_id: 9001,
        option_text: 'Os alunos, ansiosos pelo resultado, aguardavam na sala; e os professores finalizavam as notas.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      },
      {
        id: 90005,
        exercise_id: 9001,
        option_text: 'Os alunos, ansiosos pelo resultado, aguardavam na sala, porém; os professores finalizavam as notas.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve vir antes da conjunção adversativa, não depois.'
      }
    ]
  },
  {
    id: 9002,
    category_id: 'ponto-e-virgula-3',
    question: 'Identifique a alternativa em que o ponto e vírgula está sendo usado corretamente em um texto jurídico:',
    explanation: 'O ponto e vírgula é frequentemente usado em textos jurídicos para separar itens em enumerações ou artigos de leis.',
    difficulty: 3,
    options: [
      {
        id: 90006,
        exercise_id: 9002,
        option_text: 'Art. 5º São direitos do consumidor: I - a proteção da vida, saúde e segurança; II - a educação para o consumo; III - a informação adequada sobre produtos e serviços.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando itens em uma enumeração de artigos de lei.'
      },
      {
        id: 90007,
        exercise_id: 9002,
        option_text: 'Art. 5º; São direitos do consumidor: I - a proteção da vida, II - a educação, III - a informação.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o número do artigo do seu conteúdo.'
      },
      {
        id: 90008,
        exercise_id: 9002,
        option_text: 'Art. 5º São; direitos do consumidor: I - a proteção da vida, II - a educação, III - a informação.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo do seu complemento.'
      },
      {
        id: 90009,
        exercise_id: 9002,
        option_text: 'Art. 5º São direitos do consumidor: I - a proteção da vida; e II - a educação; e III - a informação.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      },
      {
        id: 90010,
        exercise_id: 9002,
        option_text: 'Art. 5º São direitos do consumidor: I; a proteção da vida, II; a educação, III; a informação.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve vir após o item completo, não entre o número e o conteúdo.'
      }
    ]
  }
];

// Exercícios do módulo Ponto e Vírgula 4
export const pontoEVirgulaExercicio4: Exercise[] = [
  {
    id: 10001,
    category_id: 'ponto-e-virgula-4',
    question: 'Em qual das alternativas o ponto e vírgula está sendo usado corretamente em um texto científico?',
    explanation: 'O ponto e vírgula é usado em textos científicos para separar orações independentes relacionadas ou itens em enumerações complexas.',
    difficulty: 4,
    options: [
      {
        id: 100001,
        exercise_id: 10001,
        option_text: 'O experimento foi realizado em três etapas: coleta de dados, com 50 participantes; análise estatística, usando o software SPSS; interpretação dos resultados, com base na literatura.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando itens complexos em uma enumeração em um texto científico.'
      },
      {
        id: 100002,
        exercise_id: 10001,
        option_text: 'O experimento; foi realizado em três etapas: coleta, análise e interpretação.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 100003,
        exercise_id: 10001,
        option_text: 'O experimento foi; realizado em três etapas: coleta, análise e interpretação.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo auxiliar do principal.'
      },
      {
        id: 100004,
        exercise_id: 10001,
        option_text: 'O experimento foi realizado em três etapas: coleta; análise; interpretação.',
        is_correct: false,
        explanation: 'Incorreto! Para itens simples como estes, deve-se usar vírgula, não ponto e vírgula.'
      },
      {
        id: 100005,
        exercise_id: 10001,
        option_text: 'O experimento foi realizado em três etapas: coleta, análise; e interpretação.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      }
    ]
  },
  {
    id: 10002,
    category_id: 'ponto-e-virgula-4',
    question: 'Identifique a alternativa em que o ponto e vírgula está sendo usado corretamente em uma citação:',
    explanation: 'O ponto e vírgula pode ser usado para separar diferentes citações ou referências.',
    difficulty: 4,
    options: [
      {
        id: 100006,
        exercise_id: 10002,
        option_text: 'Diversos autores abordam o tema: Silva (2010), que analisa o aspecto histórico; Souza (2015), que investiga o aspecto social; Oliveira (2018), que examina o aspecto econômico.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando diferentes citações com suas respectivas explicações.'
      },
      {
        id: 100007,
        exercise_id: 10002,
        option_text: 'Diversos autores; abordam o tema: Silva (2010), Souza (2015) e Oliveira (2018).',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 100008,
        exercise_id: 10002,
        option_text: 'Diversos autores abordam; o tema: Silva (2010), Souza (2015) e Oliveira (2018).',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo do seu complemento.'
      },
      {
        id: 100009,
        exercise_id: 10002,
        option_text: 'Diversos autores abordam o tema: Silva; (2010), Souza; (2015), Oliveira; (2018).',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o nome do autor do ano da publicação.'
      },
      {
        id: 100010,
        exercise_id: 10002,
        option_text: 'Diversos autores abordam o tema: Silva (2010), Souza (2015); e Oliveira (2018).',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      }
    ]
  }
];

// Exercícios do módulo Ponto e Vírgula 5
export const pontoEVirgulaExercicio5: Exercise[] = [
  {
    id: 11001,
    category_id: 'ponto-e-virgula-5',
    question: 'Em qual das alternativas o ponto e vírgula está sendo usado corretamente em um texto literário?',
    explanation: 'O ponto e vírgula é usado em textos literários para criar pausas mais longas que a vírgula, mas menos definitivas que o ponto final.',
    difficulty: 5,
    options: [
      {
        id: 110001,
        exercise_id: 11001,
        option_text: 'A noite caía lentamente sobre a cidade; as luzes começavam a se acender nas janelas dos prédios; o silêncio tomava conta das ruas desertas.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está criando pausas entre orações independentes em uma descrição literária.'
      },
      {
        id: 110002,
        exercise_id: 11001,
        option_text: 'A noite; caía lentamente sobre a cidade, as luzes começavam a se acender, o silêncio tomava conta das ruas.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 110003,
        exercise_id: 11001,
        option_text: 'A noite caía; lentamente sobre a cidade, as luzes começavam a se acender, o silêncio tomava conta das ruas.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo do seu adjunto adverbial.'
      },
      {
        id: 110004,
        exercise_id: 11001,
        option_text: 'A noite caía lentamente sobre a cidade; e as luzes começavam a se acender; e o silêncio tomava conta das ruas.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      },
      {
        id: 110005,
        exercise_id: 11001,
        option_text: 'A noite caía lentamente sobre a cidade, mas; as luzes começavam a se acender nas janelas dos prédios.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve vir antes da conjunção adversativa, não depois.'
      }
    ]
  },
  {
    id: 11002,
    category_id: 'ponto-e-virgula-5',
    question: 'Identifique a alternativa em que o ponto e vírgula está sendo usado corretamente em um texto filosófico:',
    explanation: 'O ponto e vírgula é usado em textos filosóficos para separar ideias complexas ou argumentos relacionados.',
    difficulty: 5,
    options: [
      {
        id: 110006,
        exercise_id: 11002,
        option_text: 'A liberdade é um conceito fundamental na filosofia política; sua definição, contudo, varia conforme a corrente de pensamento; seus limites são objeto de constante debate entre os filósofos.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando ideias complexas relacionadas em um texto filosófico.'
      },
      {
        id: 110007,
        exercise_id: 11002,
        option_text: 'A liberdade; é um conceito fundamental na filosofia política, sua definição varia conforme a corrente de pensamento.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 110008,
        exercise_id: 11002,
        option_text: 'A liberdade é; um conceito fundamental na filosofia política, sua definição varia conforme a corrente de pensamento.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo de ligação do predicativo.'
      },
      {
        id: 110009,
        exercise_id: 11002,
        option_text: 'A liberdade é um conceito fundamental na filosofia política; e sua definição varia conforme a corrente de pensamento.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      },
      {
        id: 110010,
        exercise_id: 11002,
        option_text: 'A liberdade é um conceito fundamental na filosofia política, porém; sua definição varia conforme a corrente de pensamento.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve vir antes da conjunção adversativa, não depois.'
      }
    ]
  }
];

// Exercícios da prova final de Ponto e Vírgula
export const provaPontoEVirgula: Exercise[] = [
  {
    id: 12001,
    category_id: 'prova-ponto-e-virgula',
    question: 'Identifique a alternativa em que o ponto e vírgula está sendo usado corretamente:',
    explanation: 'O ponto e vírgula é usado para separar orações independentes relacionadas entre si ou itens em enumerações complexas.',
    difficulty: 5,
    options: [
      {
        id: 120001,
        exercise_id: 12001,
        option_text: 'O projeto foi finalizado no prazo; a equipe recebeu um bônus pelo desempenho excepcional.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando duas orações independentes relacionadas entre si.'
      },
      {
        id: 120002,
        exercise_id: 12001,
        option_text: 'O projeto; foi finalizado no prazo, a equipe recebeu um bônus.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 120003,
        exercise_id: 12001,
        option_text: 'O projeto foi finalizado; no prazo, a equipe recebeu um bônus.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo do seu adjunto adverbial.'
      },
      {
        id: 120004,
        exercise_id: 12001,
        option_text: 'O projeto foi finalizado no prazo; e a equipe recebeu um bônus.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      },
      {
        id: 120005,
        exercise_id: 12001,
        option_text: 'O projeto foi finalizado no prazo, mas; a equipe não recebeu um bônus.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve vir antes da conjunção adversativa, não depois.'
      }
    ]
  },
  {
    id: 12002,
    category_id: 'prova-ponto-e-virgula',
    question: 'Em qual alternativa o ponto e vírgula está sendo usado corretamente em uma enumeração?',
    explanation: 'O ponto e vírgula é usado para separar itens em enumerações complexas, especialmente quando os itens já contêm vírgulas.',
    difficulty: 5,
    options: [
      {
        id: 120006,
        exercise_id: 12002,
        option_text: 'O relatório inclui dados de: vendas no primeiro trimestre, com aumento de 15%; marketing, com investimento de R$ 500.000,00; recursos humanos, com contratação de 30 novos funcionários.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando itens complexos em uma enumeração.'
      },
      {
        id: 120007,
        exercise_id: 12002,
        option_text: 'O relatório; inclui dados de vendas, marketing e recursos humanos.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 120008,
        exercise_id: 12002,
        option_text: 'O relatório inclui; dados de vendas, marketing e recursos humanos.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo do seu complemento.'
      },
      {
        id: 120009,
        exercise_id: 12002,
        option_text: 'O relatório inclui dados de: vendas; marketing; recursos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Para itens simples como estes, deve-se usar vírgula, não ponto e vírgula.'
      },
      {
        id: 120010,
        exercise_id: 12002,
        option_text: 'O relatório inclui dados de: vendas, marketing; e recursos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      }
    ]
  }
];

// Função para obter exercícios por categoria
export async function getPontoEVirgulaExercises(categoryId: string): Promise<Exercise[]> {
  // Retornar exercícios conforme a categoria solicitada
  switch(categoryId) {
    case 'ponto-e-virgula':
      // Duplicar os exercícios existentes para ter 10 no total
      return duplicateExercises(pontoEVirgulaExercicio1, 1, 10);
    case 'ponto-e-virgula-2':
      // Duplicar os exercícios existentes para ter 10 no total
      return duplicateExercises(pontoEVirgulaExercicio2, 2, 10);
    case 'ponto-e-virgula-3':
      // Duplicar os exercícios existentes para ter 10 no total
      return duplicateExercises(pontoEVirgulaExercicio3, 3, 10);
    case 'ponto-e-virgula-4':
      // Duplicar os exercícios existentes para ter 10 no total
      return duplicateExercises(pontoEVirgulaExercicio4, 4, 10);
    case 'ponto-e-virgula-5':
      // Duplicar os exercícios existentes para ter 10 no total
      return duplicateExercises(pontoEVirgulaExercicio5, 5, 10);
    case 'prova-ponto-e-virgula':
      // Duplicar os exercícios existentes para ter 30 no total
      return duplicateExercises(provaPontoEVirgula, 6, 30);
    default:
      return [];
  }
}

// Função auxiliar para duplicar exercícios e garantir que cada módulo tenha o número desejado de exercícios
function duplicateExercises(exercises: Exercise[], moduleNumber: number, targetCount: number): Exercise[] {
  if (exercises.length >= targetCount) {
    return exercises.slice(0, targetCount);
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
      question: `${baseExercise.question} (Variação ${result.length + 1})`,
      options: baseExercise.options.map(option => ({
        ...option,
        id: currentOptionId++,
        exercise_id: currentId - 1,
        option_text: `${option.option_text} (Variação ${result.length + 1})`
      }))
    };
    
    result.push(newExercise);
  }

  return result;
}
