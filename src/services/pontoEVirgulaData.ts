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
  },
  {
    id: 9003,
    category_id: 'ponto-e-virgula-3',
    question: 'Por que o ponto e vírgula é recomendado para separar orações coordenadas extensas?',
    explanation: 'O ponto e vírgula é recomendado para separar orações coordenadas extensas porque oferece uma pausa intermediária entre a vírgula e o ponto final, facilitando a leitura e compreensão de frases longas.',
    difficulty: 3,
    options: [
      {
        id: 90011,
        exercise_id: 9003,
        option_text: 'Porque a vírgula se torna insuficiente para marcar a separação claramente.',
        is_correct: true,
        explanation: 'Correto! Em orações longas, especialmente se já usam vírgulas internamente, o ponto e vírgula oferece uma pausa e separação mais nítidas.'
      },
      {
        id: 90012,
        exercise_id: 9003,
        option_text: 'Porque orações extensas sempre têm sujeitos diferentes.',
        is_correct: false,
        explanation: 'Incorreto! A extensão da oração não determina se o sujeito é diferente.'
      },
      {
        id: 90013,
        exercise_id: 9003,
        option_text: 'Porque é uma regra obrigatória para frases com mais de 15 palavras.',
        is_correct: false,
        explanation: 'Incorreto! Não existe uma regra fixa baseada no número de palavras; é uma questão de clareza e estilo.'
      },
      {
        id: 90014,
        exercise_id: 9003,
        option_text: 'Para substituir o ponto final em parágrafos longos.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula conecta orações dentro da mesma sentença, não substitui o ponto final.'
      },
      {
        id: 90015,
        exercise_id: 9003,
        option_text: 'Para indicar que a segunda oração é menos importante.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não hierarquiza a importância das orações coordenadas.'
      }
    ]
  },
  {
    id: 9004,
    category_id: 'ponto-e-virgula-3',
    question: '"O planejamento estratégico da empresa, que envolveu meses de análise de mercado e projeções financeiras detalhadas, foi finalmente aprovado pela diretoria; agora, o desafio será implementar as ações propostas, garantindo o engajamento de todas as equipes." O ponto e vírgula foi usado aqui para:',
    explanation: 'O ponto e vírgula é usado para separar orações coordenadas extensas, especialmente quando a primeira já contém vírgulas internas.',
    difficulty: 3,
    options: [
      {
        id: 90016,
        exercise_id: 9004,
        option_text: 'Separar uma oração principal de uma subordinada.',
        is_correct: false,
        explanation: 'Incorreto. Ambas são orações coordenadas (ou a segunda é coordenada em relação à principal que contém a subordinada inicial).'
      },
      {
        id: 90017,
        exercise_id: 9004,
        option_text: 'Ligar duas orações coordenadas extensas, sendo que a primeira já contém vírgulas.',
        is_correct: true,
        explanation: 'Correto! As duas partes conectadas pelo ponto e vírgula são longas e a primeira contém uma oração intercalada, justificando o uso do ponto e vírgula para clareza.'
      },
      {
        id: 90018,
        exercise_id: 9004,
        option_text: 'Introduzir uma enumeração complexa.',
        is_correct: false,
        explanation: 'Incorreto. Não há uma enumeração sendo introduzida.'
      },
      {
        id: 90019,
        exercise_id: 9004,
        option_text: 'Indicar a fala de personagens diferentes.',
        is_correct: false,
        explanation: 'Incorreto. Não há indicação de diálogo.'
      },
      {
        id: 90020,
        exercise_id: 9004,
        option_text: 'Corrigir um erro na primeira oração.',
        is_correct: false,
        explanation: 'Incorreto. Não tem função corretiva.'
      }
    ]
  },
  {
    id: 9005,
    category_id: 'ponto-e-virgula-3',
    question: 'Qual frase demonstra o uso adequado do ponto e vírgula para separar orações coordenadas extensas?',
    explanation: 'O ponto e vírgula é adequado para separar orações coordenadas extensas, especialmente quando já contêm vírgulas internas.',
    difficulty: 3,
    options: [
      {
        id: 90021,
        exercise_id: 9005,
        option_text: 'Ele correu; ela andou.',
        is_correct: false,
        explanation: 'Incorreto. As orações são curtas; a vírgula seria suficiente.'
      },
      {
        id: 90022,
        exercise_id: 9005,
        option_text: 'Aquele autor, conhecido por seus romances históricos repletos de detalhes precisos e personagens complexos, lançou um novo livro na semana passada; porém, a crítica especializada, apesar de alguns elogios pontuais, parece não ter recebido a obra com o mesmo entusiasmo de antes.',
        is_correct: true,
        explanation: 'Correto! As duas orações coordenadas, ligadas por \'porém\', são extensas e contêm vírgulas internas, tornando o ponto e vírgula ideal para a separação principal.'
      },
      {
        id: 90023,
        exercise_id: 9005,
        option_text: 'Gosto de viajar; conhecer novos lugares.',
        is_correct: false,
        explanation: 'Incorreto. A segunda parte não é uma oração coordenada completa e extensa.'
      },
      {
        id: 90024,
        exercise_id: 9005,
        option_text: 'Choveu muito; então não saímos.',
        is_correct: false,
        explanation: 'Incorreto. Orações curtas; vírgula antes de \'então\' seria mais comum.'
      },
      {
        id: 90025,
        exercise_id: 9005,
        option_text: 'O filme era longo; e cansativo.',
        is_correct: false,
        explanation: 'Incorreto. Orações curtas ligadas por \'e\'.'
      }
    ]
  },
  {
    id: 9006,
    category_id: 'ponto-e-virgula-3',
    question: 'Na frase "Muitos se esforçam para alcançar o sucesso, buscando incessantemente reconhecimento e bens materiais; poucos, no entanto, percebem que a verdadeira felicidade reside nas coisas simples da vida, como a companhia dos amigos e a paz de espírito", o ponto e vírgula separa:',
    explanation: 'O ponto e vírgula é usado para separar orações coordenadas extensas, especialmente quando já contêm vírgulas internas.',
    difficulty: 3,
    options: [
      {
        id: 90026,
        exercise_id: 9006,
        option_text: 'Uma oração adjetiva explicativa.',
        is_correct: false,
        explanation: 'Incorreto.'
      },
      {
        id: 90027,
        exercise_id: 9006,
        option_text: 'Duas orações coordenadas de considerável extensão, com ideias contrastantes.',
        is_correct: true,
        explanation: 'Correto! As duas orações são longas, apresentam um contraste (muitos vs. poucos) e a segunda contém a intercalação \'no entanto\', justificando o ponto e vírgula.'
      },
      {
        id: 90028,
        exercise_id: 9006,
        option_text: 'Itens de uma enumeração sobre felicidade.',
        is_correct: false,
        explanation: 'Incorreto.'
      },
      {
        id: 90029,
        exercise_id: 9006,
        option_text: 'O sujeito do predicado na segunda oração.',
        is_correct: false,
        explanation: 'Incorreto.'
      },
      {
        id: 90030,
        exercise_id: 9006,
        option_text: 'Uma citação direta.',
        is_correct: false,
        explanation: 'Incorreto.'
      }
    ]
  },
  {
    id: 9007,
    category_id: 'ponto-e-virgula-3',
    question: 'Quando NÃO se deve usar ponto e vírgula para separar orações coordenadas, mesmo que sejam relativamente longas?',
    explanation: 'O ponto e vírgula deve ser usado com critério, mesmo em orações longas.',
    difficulty: 3,
    options: [
      {
        id: 90031,
        exercise_id: 9007,
        option_text: 'Quando as orações já contêm muitas vírgulas.',
        is_correct: false,
        explanation: 'Incorreto. Essa é justamente uma das razões para usar o ponto e vírgula.'
      },
      {
        id: 90032,
        exercise_id: 9007,
        option_text: 'Quando a conexão entre as ideias é muito fraca ou inexistente.',
        is_correct: true,
        explanation: 'Correto! Se as ideias não têm relação clara, é melhor usar ponto final e iniciar uma nova sentença.'
      },
      {
        id: 90033,
        exercise_id: 9007,
        option_text: 'Quando a segunda oração é introduzida por \'mas\' ou \'porém\'.',
        is_correct: false,
        explanation: 'Incorreto. O ponto e vírgula pode ser usado antes dessas conjunções em orações extensas.'
      },
      {
        id: 90034,
        exercise_id: 9007,
        option_text: 'Quando as orações têm sujeitos diferentes.',
        is_correct: false,
        explanation: 'Incorreto. Sujeitos diferentes não impedem o uso do ponto e vírgula.'
      },
      {
        id: 90035,
        exercise_id: 9007,
        option_text: 'Quando a primeira oração é negativa e a segunda afirmativa.',
        is_correct: false,
        explanation: 'Incorreto. O caráter afirmativo/negativo não é critério para usar ou não o ponto e vírgula.'
      }
    ]
  },
  {
    id: 9008,
    category_id: 'ponto-e-virgula-3',
    question: 'Qual alternativa apresenta um uso DISPENSÁVEL ou INCORRETO do ponto e vírgula entre orações coordenadas?',
    explanation: 'O ponto e vírgula tem usos específicos e nem sempre é a melhor escolha para separar orações coordenadas.',
    difficulty: 3,
    options: [
      {
        id: 90036,
        exercise_id: 9008,
        option_text: 'A tecnologia avança rapidamente, transformando nossos hábitos e criando novas profissões; precisamos, portanto, estar sempre aprendendo e nos adaptando a essas mudanças constantes.',
        is_correct: false,
        explanation: 'Incorreto (uso correto). Orações longas, relacionadas, com conectivo conclusivo na segunda.'
      },
      {
        id: 90037,
        exercise_id: 9008,
        option_text: 'Investir em educação é fundamental para o desenvolvimento de um país, pois forma cidadãos críticos e conscientes; além disso, impulsiona a inovação e a competitividade no cenário global.',
        is_correct: false,
        explanation: 'Incorreto (uso correto). Orações extensas, relacionadas, com conectivo aditivo na segunda.'
      },
      {
        id: 90038,
        exercise_id: 9008,
        option_text: 'Ele gosta de ler; ela prefere assistir a filmes.',
        is_correct: true,
        explanation: 'Correto (uso dispensável/incorreto). As orações são curtas e contrastantes; uma vírgula seria suficiente e mais comum (\'Ele gosta de ler, e ela prefere assistir a filmes\' ou \'Ele gosta de ler; ela, de assistir a filmes\'). O ponto e vírgula não está estritamente errado, mas é menos usual aqui do que em orações extensas.'
      },
      {
        id: 90039,
        exercise_id: 9008,
        option_text: 'O projeto original, embora bem-intencionado, mostrou-se inviável financeiramente; por isso, a equipe decidiu reformulá-lo completamente, buscando alternativas mais econômicas.',
        is_correct: false,
        explanation: 'Incorreto (uso correto). Orações longas, relacionadas, com conectivo conclusivo na segunda.'
      },
      {
        id: 90040,
        exercise_id: 9008,
        option_text: 'A preservação do meio ambiente é uma responsabilidade de todos, afetando diretamente a qualidade de vida das futuras gerações; governos, empresas e cidadãos devem, pois, unir esforços para garantir um futuro sustentável.',
        is_correct: false,
        explanation: 'Incorreto (uso correto). Orações longas, relacionadas, com conectivo conclusivo intercalado na segunda.'
      }
    ]
  },
  {
    id: 9009,
    category_id: 'ponto-e-virgula-3',
    question: 'Em textos legislativos ou normativos, o ponto e vírgula é frequentemente usado para separar incisos ou itens de um artigo que detalham diferentes aspectos de uma regra. Exemplo: "São direitos dos trabalhadores urbanos e rurais, além de outros que visem à melhoria de sua condição social: (...) VII - garantia de salário, nunca inferior ao mínimo, para os que percebem remuneração variável; VIII - décimo terceiro salário com base na remuneração integral ou no valor da aposentadoria; (...)" Aqui, o ponto e vírgula separa:',
    explanation: 'O ponto e vírgula tem usos específicos em textos legais e normativos.',
    difficulty: 3,
    options: [
      {
        id: 90041,
        exercise_id: 9009,
        option_text: 'Orações coordenadas muito longas.',
        is_correct: false,
        explanation: 'Incorreto. Embora os itens possam ser longos, a função principal é separar os itens da enumeração legal.'
      },
      {
        id: 90042,
        exercise_id: 9009,
        option_text: 'Diferentes artigos de uma lei.',
        is_correct: false,
        explanation: 'Incorreto. Separa itens (incisos) dentro do mesmo artigo.'
      },
      {
        id: 90043,
        exercise_id: 9009,
        option_text: 'Os diversos itens (incisos) de uma enumeração legal, que podem ser frases completas ou não.',
        is_correct: true,
        explanation: 'Correto. É um uso técnico específico do ponto e vírgula em textos legais para separar subdivisões de um artigo.'
      },
      {
        id: 90044,
        exercise_id: 9009,
        option_text: 'A ementa da lei do seu texto principal.',
        is_correct: false,
        explanation: 'Incorreto.'
      },
      {
        id: 90045,
        exercise_id: 9009,
        option_text: 'Explicações e justificativas da lei.',
        is_correct: false,
        explanation: 'Incorreto.'
      }
    ]
  },
  {
    id: 9010,
    category_id: 'ponto-e-virgula-3',
    question: 'Assinale a opção em que a substituição do ponto e vírgula por vírgula prejudicaria a clareza, devido à extensão das orações coordenadas:',
    explanation: 'O ponto e vírgula é especialmente útil para manter a clareza em orações coordenadas extensas.',
    difficulty: 3,
    options: [
      {
        id: 90046,
        exercise_id: 9010,
        option_text: 'O dia amanheceu chuvoso; o trânsito ficou congestionado.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula seria aceitável aqui, pois as orações não são excessivamente longas.'
      },
      {
        id: 90047,
        exercise_id: 9010,
        option_text: 'Alguns preferem o silêncio da biblioteca, um lugar ideal para concentração e estudo; outros buscam a agitação das cafeterias, onde encontram inspiração no movimento e no burburinho.',
        is_correct: true,
        explanation: 'Correto. As orações são extensas e já contêm vírgulas internas. Substituir o ponto e vírgula por vírgula poderia dificultar a identificação da divisão principal entre as duas ideias contrastantes.'
      },
      {
        id: 90048,
        exercise_id: 9010,
        option_text: 'Ele chegou; sentou-se; esperou.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula é mais comum e clara para separar ações curtas em sequência.'
      },
      {
        id: 90049,
        exercise_id: 9010,
        option_text: 'A peça foi um sucesso; o público aplaudiu de pé.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula seria perfeitamente aceitável.'
      },
      {
        id: 90050,
        exercise_id: 9010,
        option_text: 'Estava cansado; mas feliz.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula antes de \'mas\' é o padrão para orações curtas.'
      }
    ]
  }
];

// Exercícios do módulo Ponto e Vírgula 4
export const pontoEVirgulaExercicio4: Exercise[] = [
  {
    id: 10001,
    category_id: 'ponto-e-virgula-4',
    question: 'Por que o ponto e vírgula é usado em enumerações complexas?',
    explanation: 'O ponto e vírgula é usado em enumerações complexas para separar itens que já contêm vírgulas internamente, melhorando a clareza da leitura.',
    difficulty: 4,
    options: [
      {
        id: 100001,
        exercise_id: 10001,
        option_text: 'Para substituir a vírgula em qualquer tipo de lista.',
        is_correct: false,
        explanation: 'Incorreto. Em listas simples, a vírgula é o padrão.'
      },
      {
        id: 100002,
        exercise_id: 10001,
        option_text: 'Para separar itens que já contêm vírgulas internamente, evitando ambiguidade.',
        is_correct: true,
        explanation: 'Correto. O ponto e vírgula funciona como um separador de nível superior quando os itens já usam vírgulas.'
      },
      {
        id: 100003,
        exercise_id: 10001,
        option_text: 'Para indicar que a enumeração é muito longa.',
        is_correct: false,
        explanation: 'Incorreto. O comprimento em si não é o fator determinante, mas sim a complexidade interna dos itens.'
      },
      {
        id: 100004,
        exercise_id: 10001,
        option_text: 'Para dar mais ênfase a cada item da lista.',
        is_correct: false,
        explanation: 'Incorreto. A função principal é a clareza estrutural.'
      },
      {
        id: 100005,
        exercise_id: 10001,
        option_text: 'Para separar itens que são orações completas.',
        is_correct: true,
        explanation: 'Correto. Quando os itens de uma lista são orações (especialmente se já tiverem vírgulas), o ponto e vírgula é adequado para separá-los.'
      }
    ]
  },
  {
    id: 10002,
    category_id: 'ponto-e-virgula-4',
    question: 'Qual frase utiliza corretamente o ponto e vírgula para separar itens de uma enumeração que contêm apostos explicativos?',
    explanation: 'O ponto e vírgula deve ser usado para separar itens de enumeração que já contêm vírgulas internas, como em apostos explicativos.',
    difficulty: 4,
    options: [
      {
        id: 100006,
        exercise_id: 10002,
        option_text: 'Convidamos: João; o vizinho, Maria; a prima, e Carlos; o colega.',
        is_correct: false,
        explanation: 'Incorreto. A estrutura está confusa. Seria melhor: \'...João, o vizinho; Maria, a prima; e Carlos, o colega.\''
      },
      {
        id: 100007,
        exercise_id: 10002,
        option_text: 'Participaram da reunião: Ana Silva, diretora de marketing; Paulo Costa, gerente financeiro; e Sofia Lima, coordenadora de RH.',
        is_correct: true,
        explanation: 'Correto. Cada item da lista é composto pelo nome e cargo (aposto), separados por vírgula. O ponto e vírgula separa esses conjuntos.'
      },
      {
        id: 100008,
        exercise_id: 10002,
        option_text: 'Comprei frutas; maçãs, bananas, laranjas; e legumes; alface, tomate, cenoura.',
        is_correct: false,
        explanation: 'Incorreto. A estrutura está mal organizada com ponto e vírgula.'
      },
      {
        id: 100009,
        exercise_id: 10002,
        option_text: 'Os palestrantes foram: Dr. Alves; médico renomado, Dra. Bentes; advogada experiente.',
        is_correct: false,
        explanation: 'Incorreto. Faltam vírgulas nos apostos e a separação principal deveria ser ponto e vírgula.'
      },
      {
        id: 100010,
        exercise_id: 10002,
        option_text: 'Ingredientes necessários; ovos, farinha, açúcar; leite, manteiga, chocolate.',
        is_correct: false,
        explanation: 'Incorreto. A pontuação está inadequada para uma lista.'
      }
    ]
  },
  {
    id: 10003,
    category_id: 'ponto-e-virgula-4',
    question: '\"A viagem incluiu visitas a vários locais históricos: o Coliseu, em Roma, palco de gladiadores; a Acrópole, em Atenas, berço da democracia; e as Pirâmides de Gizé, no Egito, maravilhas do mundo antigo.\" O ponto e vírgula separa:',
    explanation: 'O ponto e vírgula é usado para separar itens em enumerações complexas, especialmente quando os itens já contêm vírgulas internamente.',
    difficulty: 4,
    options: [
      {
        id: 100011,
        exercise_id: 10003,
        option_text: 'As cidades visitadas (Roma; Atenas; Egito).',
        is_correct: false,
        explanation: 'Incorreto. Separa os itens completos da enumeração.'
      },
      {
        id: 100012,
        exercise_id: 10003,
        option_text: 'Os itens principais da enumeração, cada um contendo o local e uma breve descrição com vírgula interna.',
        is_correct: true,
        explanation: 'Correto. Cada item (Coliseu..., Acrópole..., Pirâmides...) já usa vírgula, então o ponto e vírgula organiza a lista principal.'
      },
      {
        id: 100013,
        exercise_id: 10003,
        option_text: 'Orações coordenadas extensas.',
        is_correct: false,
        explanation: 'Incorreto. É uma enumeração após dois pontos, não orações coordenadas independentes.'
      },
      {
        id: 100014,
        exercise_id: 10003,
        option_text: 'Apostos explicativos dos locais.',
        is_correct: false,
        explanation: 'Incorreto. O ponto e vírgula separa os itens inteiros, não apenas os apostos.'
      },
      {
        id: 100015,
        exercise_id: 10003,
        option_text: 'Países e suas respectivas atrações.',
        is_correct: false,
        explanation: 'Incorreto. A separação é por item da lista (local histórico + descrição).'
      }
    ]
  },
  {
    id: 10004,
    category_id: 'ponto-e-virgula-4',
    question: 'Em qual alternativa o ponto e vírgula NÃO é necessário ou está incorreto na enumeração?',
    explanation: 'O ponto e vírgula é necessário em enumerações complexas, mas pode ser desnecessário ou incorreto em listas simples.',
    difficulty: 4,
    options: [
      {
        id: 100016,
        exercise_id: 10004,
        option_text: 'O cardápio oferecia: entrada, sopa de legumes; prato principal, filé com fritas; sobremesa, pudim de leite.',
        is_correct: false,
        explanation: 'Incorreto (uso correto). Os itens são frases nominais curtas, mas o ponto e vírgula organiza bem as categorias.'
      },
      {
        id: 100017,
        exercise_id: 10004,
        option_text: 'Levei na mala: roupas; sapatos; produtos de higiene; livros.',
        is_correct: true,
        explanation: 'Correto (uso incorreto/desnecessário). São itens simples; a vírgula seria suficiente e mais adequada (\'...roupas, sapatos, produtos...\').'
      },
      {
        id: 100018,
        exercise_id: 10004,
        option_text: 'Os objetivos do projeto são: aumentar as vendas em 10%, o que exige esforço da equipe comercial; reduzir os custos operacionais em 5%, otimizando processos internos; e melhorar a satisfação do cliente, investindo em treinamento.',
        is_correct: false,
        explanation: 'Incorreto (uso correto). Os itens são orações ou frases longas que já contêm vírgulas, justificando o ponto e vírgula.'
      },
      {
        id: 100019,
        exercise_id: 10004,
        option_text: 'A comissão era composta por: Dr. João Santos, representando a diretoria; Sra. Maria Oliveira, porta-voz dos funcionários; e Sr. Carlos Pereira, consultor externo.',
        is_correct: false,
        explanation: 'Incorreto (uso correto). Itens com apostos, separados por ponto e vírgula.'
      },
      {
        id: 100020,
        exercise_id: 10004,
        option_text: 'Para a receita, você precisará de: 2 xícaras de farinha de trigo, peneirada; 1 xícara de açúcar refinado; 3 ovos inteiros, levemente batidos; 1/2 xícara de leite integral.',
        is_correct: false,
        explanation: 'Incorreto (uso correto). Os itens da lista contêm informações adicionais separadas por vírgula, tornando o ponto e vírgula útil para a clareza da enumeração principal.'
      }
    ]
  },
  {
    id: 10005,
    category_id: 'ponto-e-virgula-4',
    question: '\"Distribuíram-se as tarefas: João ficou responsável pela pesquisa de mercado; Maria, pela análise da concorrência; Pedro, pelo desenvolvimento do protótipo.\" O ponto e vírgula é usado aqui para:',
    explanation: 'O ponto e vírgula é usado para separar itens em enumerações onde cada item é uma oração com verbo elíptico (omissão de verbo).',
    difficulty: 4,
    options: [
      {
        id: 100021,
        exercise_id: 10005,
        option_text: 'Separar orações coordenadas adversativas.',
        is_correct: false,
        explanation: 'Incorreto. Não há sentido adversativo.'
      },
      {
        id: 100022,
        exercise_id: 10005,
        option_text: 'Separar os itens de uma enumeração onde cada item é uma oração com verbo elíptico (omissão de \'ficou responsável\').',
        is_correct: true,
        explanation: 'Correto. Cada item descreve a tarefa de uma pessoa, e o verbo é omitido nas partes seguintes, justificando o ponto e vírgula para separar essas estruturas.'
      },
      {
        id: 100023,
        exercise_id: 10005,
        option_text: 'Indicar uma pausa longa antes de cada nome.',
        is_correct: false,
        explanation: 'Incorreto. A função é estrutural.'
      },
      {
        id: 100024,
        exercise_id: 10005,
        option_text: 'Substituir a conjunção \'e\'.',
        is_correct: false,
        explanation: 'Incorreto. O \'e\' poderia ser usado antes do último item, mas o ponto e vírgula separa todos os itens.'
      },
      {
        id: 100025,
        exercise_id: 10005,
        option_text: 'Isolar os nomes das pessoas.',
        is_correct: false,
        explanation: 'Incorreto. Separa as atribuições completas.'
      }
    ]
  },
  {
    id: 10006,
    category_id: 'ponto-e-virgula-4',
    question: 'Em listas verticais (como em tópicos), o ponto e vírgula pode ser usado ao final de cada item, exceto o último, que termina com ponto final. Qual exemplo segue essa regra?',
    explanation: 'Em listas verticais, o ponto e vírgula pode ser usado para separar itens, especialmente em contextos formais ou jurídicos.',
    difficulty: 4,
    options: [
      {
        id: 100026,
        exercise_id: 10006,
        option_text: 'Itens a comprar;\nPão;\nLeite;\nOvos.',
        is_correct: false,
        explanation: 'Incorreto. A pontuação está no lugar errado (deveria ser ao final do texto do item).'
      },
      {
        id: 100027,
        exercise_id: 10006,
        option_text: 'Considerandos:\n\n• A necessidade de urgência;\n• Os recursos disponíveis;\n• O impacto esperado.',
        is_correct: true,
        explanation: 'Correto. É um formato comum em documentos formais, onde cada item (exceto o último) termina com ponto e vírgula.'
      },
      {
        id: 100028,
        exercise_id: 10006,
        option_text: 'Tarefas:\n\n• Pesquisar,\n• Analisar,\n• Escrever.',
        is_correct: false,
        explanation: 'Incorreto. Usa vírgula em vez de ponto e vírgula.'
      },
      {
        id: 100029,
        exercise_id: 10006,
        option_text: 'Objetivos.\n• Aumentar vendas;\n• Reduzir custos;\n• Melhorar qualidade.',
        is_correct: false,
        explanation: 'Incorreto. A pontuação está no início e o último item deveria ter ponto final.'
      },
      {
        id: 100030,
        exercise_id: 10006,
        option_text: 'Participantes:\n\n• Ana.\n• Bruno.\n• Carla.',
        is_correct: false,
        explanation: 'Incorreto. Listas simples de nomes geralmente não usam ponto e vírgula no final de cada item.'
      }
    ]
  },
  {
    id: 10007,
    category_id: 'ponto-e-virgula-4',
    question: '\"O debate abordou temas polêmicos: legalização do aborto, um assunto que divide opiniões há décadas; reforma política, necessária mas de difícil consenso; e sistema tributário, complexo e cheio de distorções.\" O ponto e vírgula é essencial aqui porque:',
    explanation: 'O ponto e vírgula é essencial em enumerações complexas para manter a clareza e evitar ambiguidades.',
    difficulty: 4,
    options: [
      {
        id: 100031,
        exercise_id: 10007,
        option_text: 'Os temas são polêmicos.',
        is_correct: false,
        explanation: 'Incorreto. A natureza do tema não dita a pontuação.'
      },
      {
        id: 100032,
        exercise_id: 10007,
        option_text: 'Cada item da enumeração é seguido por uma longa explicação ou aposto que já utiliza vírgulas.',
        is_correct: true,
        explanation: 'Correto. A complexidade interna de cada item (tema + descrição com vírgula) torna o ponto e vírgula necessário para a clareza da estrutura enumerativa principal.'
      },
      {
        id: 100033,
        exercise_id: 10007,
        option_text: 'A enumeração é introduzida por dois pontos.',
        is_correct: false,
        explanation: 'Incorreto. A introdução por dois pontos é comum, mas não é a razão para usar ponto e vírgula nos itens.'
      },
      {
        id: 100034,
        exercise_id: 10007,
        option_text: 'O autor quer criar suspense.',
        is_correct: false,
        explanation: 'Incorreto. A função é de clareza.'
      },
      {
        id: 100035,
        exercise_id: 10007,
        option_text: 'A lista tem exatamente três itens.',
        is_correct: false,
        explanation: 'Incorreto. O número de itens não determina o uso do ponto e vírgula.'
      }
    ]
  },
  {
    id: 10008,
    category_id: 'ponto-e-virgula-4',
    question: 'Qual a pontuação adequada para a seguinte enumeração: \"Os candidatos devem apresentar os seguintes documentos: cópia autenticada do RG; cópia autenticada do CPF; comprovante de residência, emitido nos últimos três meses; e certificado de conclusão do ensino médio\"?',
    explanation: 'O ponto e vírgula é usado para separar itens em enumerações complexas, especialmente quando os itens já contêm vírgulas internamente.',
    difficulty: 4,
    options: [
      {
        id: 100036,
        exercise_id: 10008,
        option_text: 'Usar apenas vírgulas entre todos os itens.',
        is_correct: false,
        explanation: 'Incorreto. O item \'comprovante de residência\' já contém uma vírgula interna, o que pode gerar confusão se apenas vírgulas forem usadas.'
      },
      {
        id: 100037,
        exercise_id: 10008,
        option_text: 'Usar ponto e vírgula entre todos os itens, inclusive antes do \'e\'.',
        is_correct: true,
        explanation: 'Correto. Dado que um dos itens (\'comprovante de residência, emitido...\') já usa vírgula, usar ponto e vírgula para separar todos os itens principais aumenta a clareza. O ponto e vírgula antes do \'e\' no último item é opcional, mas aceitável neste estilo.'
      },
      {
        id: 100038,
        exercise_id: 10008,
        option_text: 'Usar vírgulas, exceto antes do \'comprovante de residência\', onde se usaria ponto e vírgula.',
        is_correct: false,
        explanation: 'Incorreto. A pontuação deve ser consistente na separação dos itens principais.'
      },
      {
        id: 100039,
        exercise_id: 10008,
        option_text: 'Usar dois pontos após cada item.',
        is_correct: false,
        explanation: 'Incorreto. Dois pontos não separam itens de uma lista.'
      },
      {
        id: 100040,
        exercise_id: 10008,
        option_text: 'Não usar pontuação entre os itens.',
        is_correct: false,
        explanation: 'Incorreto. A pontuação é necessária para a clareza.'
      }
    ]
  },
  {
    id: 10009,
    category_id: 'ponto-e-virgula-4',
    question: 'Em qual das alternativas o uso do ponto e vírgula está INCORRETO?',
    explanation: 'O ponto e vírgula deve ser usado com critério para manter a clareza e evitar ambiguidades.',
    difficulty: 4,
    options: [
      {
        id: 100041,
        exercise_id: 10009,
        option_text: 'A empresa tem filiais em várias cidades: São Paulo, a maior metrópole do país; Rio de Janeiro, conhecida como Cidade Maravilhosa; e Belo Horizonte, capital mineira.',
        is_correct: false,
        explanation: 'Correto. O ponto e vírgula separa adequadamente itens com vírgulas internas.'
      },
      {
        id: 100042,
        exercise_id: 10009,
        option_text: 'Os principais pontos turísticos da cidade são: o museu, que fica no centro; o parque, ideal para caminhadas; e o mirante, de onde se tem uma vista deslumbrante.',
        is_correct: false,
        explanation: 'Correto. A pontuação está correta, separando itens com vírgulas internas.'
      },
      {
        id: 100043,
        exercise_id: 10009,
        option_text: 'Para o churrasco, precisamos comprar: carnes; linguiça; pão de alho; e farofa; queijo coalho; e refrigerante.',
        is_correct: true,
        explanation: 'Incorreto. O ponto e vírgula está sendo usado em excesso. Como os itens são simples, vírgulas seriam suficientes.'
      },
      {
        id: 100044,
        exercise_id: 10009,
        option_text: 'A reunião contou com a presença de: João, diretor financeiro; Maria, coordenadora de RH; e Carlos, gerente de projetos.',
        is_correct: false,
        explanation: 'Correto. O ponto e vírgula separa adequadamente itens que já contêm vírgulas.'
      },
      {
        id: 100045,
        exercise_id: 10009,
        option_text: 'As disciplinas do semestre incluem: Português, com foco em redação; Matemática, incluindo álgebra e geometria; e História, com ênfase no século XX.',
        is_correct: false,
        explanation: 'Correto. A pontuação está adequada para os itens complexos.'
      }
    ]
  },
  {
    id: 10010,
    category_id: 'ponto-e-virgula-4',
    question: 'Complete a frase com a pontuação adequada: "Os principais benefícios do projeto são: a redução de custos operacionais \\_\\_\\_\\_\\_ o aumento da produtividade \\_\\_\\_\\_\\_ a melhoria na qualidade dos serviços \\_\\_\\_\\_\\_ o fortalecimento da imagem institucional."',
    explanation: 'Em enumerações complexas, o ponto e vírgula é usado para separar itens que já contenham vírgulas internamente.',
    difficulty: 4,
    options: [
      {
        id: 100046,
        exercise_id: 10010,
        option_text: 'vírgula (,) / vírgula (,) / e',
        is_correct: false,
        explanation: 'Incorreto. A enumeração é longa e complexa, justificando o uso de ponto e vírgula.'
      },
      {
        id: 100047,
        exercise_id: 10010,
        option_text: 'ponto e vírgula (;) / ponto e vírgula (;) / e',
        is_correct: true,
        explanation: 'Correto. O ponto e vírgula é adequado para separar itens longos em uma enumeração, mesmo que não contenham vírgulas internas, quando se deseja maior clareza e ênfase.'
      },
      {
        id: 100048,
        exercise_id: 10010,
        option_text: 'ponto (.) / ponto (.) / e',
        is_correct: false,
        explanation: 'Incorreto. O ponto final não é adequado para separar itens de uma mesma enumeração.'
      },
      {
        id: 100049,
        exercise_id: 10010,
        option_text: 'dois pontos (:) / dois pontos (:) / e',
        is_correct: false,
        explanation: 'Incorreto. Dois pontos não são usados para separar itens de uma enumeração.'
      },
      {
        id: 100050,
        exercise_id: 10010,
        option_text: 'nenhuma pontuação / nenhuma pontuação / e',
        is_correct: false,
        explanation: 'Incorreto. A ausência de pontuação prejudica a clareza da enumeração.'
      }
    ]
  }
];

// Exercícios do módulo Ponto e Vírgula 5
export const pontoEVirgulaExercicio5: Exercise[] = [
  {
    id: 11001,
    category_id: 'ponto-e-virgula-5',
    question: 'Em qual situação o ponto e vírgula pode ser usado para separar orações coordenadas curtas, mas com forte contraste ou paralelismo?',
    explanation: 'O ponto e vírgula pode ser usado estilisticamente para separar orações coordenadas curtas que apresentam contraste ou paralelismo marcante.',
    difficulty: 5,
    options: [
      {
        id: 110001,
        exercise_id: 11001,
        option_text: 'Ele chegou; sentou-se; comeu.',
        is_correct: false,
        explanation: 'Incorreto. Vírgulas são mais comuns para ações sequenciais curtas.'
      },
      {
        id: 110002,
        exercise_id: 11001,
        option_text: 'Uns riem; outros choram.',
        is_correct: true,
        explanation: 'Correto. O ponto e vírgula enfatiza o contraste entre as duas orações curtas e paralelas.'
      },
      {
        id: 110003,
        exercise_id: 11001,
        option_text: 'Gosto de maçã; e de pera.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula (ou nada) antes de "e" é o padrão.'
      },
      {
        id: 110004,
        exercise_id: 11001,
        option_text: 'O céu está nublado; vai chover.',
        is_correct: false,
        explanation: 'Incorreto. A relação é mais de causa/consequência; vírgula ou dois pontos seriam alternativas.'
      },
      {
        id: 110005,
        exercise_id: 11001,
        option_text: 'Quero ir; mas não posso.',
        is_correct: false,
        explanation: 'Incorreto. Vírgula antes de "mas" é suficiente para orações curtas.'
      }
    ]
  },
  {
    id: 11002,
    category_id: 'ponto-e-virgula-5',
    question: 'O ponto e vírgula pode ser usado para separar considerandos ou justificativas em documentos formais (leis, decretos, atas). Qual exemplo ilustra isso?',
    explanation: 'Em documentos formais, o ponto e vírgula é usado para separar itens em enumerações de considerandos ou justificativas.',
    difficulty: 5,
    options: [
      {
        id: 110006,
        exercise_id: 11002,
        option_text: 'Considerando a chuva; a reunião foi cancelada.',
        is_correct: false,
        explanation: 'Incorreto. A estrutura está inadequada.'
      },
      {
        id: 110007,
        exercise_id: 11002,
        option_text: 'Considerando: a importância do tema; a urgência da decisão; a necessidade de consenso; resolve-se aprovar a proposta.',
        is_correct: true,
        explanation: 'Correto. O ponto e vírgula separa os diferentes "considerandos" listados antes da resolução final.'
      },
      {
        id: 110008,
        exercise_id: 11002,
        option_text: 'A ata registrou; presença de todos; aprovação da pauta; discussão dos itens.',
        is_correct: false,
        explanation: 'Incorreto. A pontuação está inadequada para registrar itens de uma ata.'
      },
      {
        id: 110009,
        exercise_id: 11002,
        option_text: 'Justificativa; o projeto é viável; trará benefícios; tem apoio da comunidade.',
        is_correct: false,
        explanation: 'Incorreto. A estrutura e pontuação estão confusas.'
      },
      {
        id: 110010,
        exercise_id: 11002,
        option_text: 'Ele faltou; porque estava doente.',
        is_correct: false,
        explanation: 'Incorreto. A segunda oração é subordinada causal.'
      }
    ]
  },
  {
    id: 11003,
    category_id: 'ponto-e-virgula-5',
    question: 'Em índices remissivos ou bibliografias, o ponto e vírgula pode separar diferentes informações sobre a mesma entrada. Exemplo:',
    explanation: 'Em índices e referências, o ponto e vírgula é usado para separar diferentes elementos de uma mesma entrada.',
    difficulty: 5,
    options: [
      {
        id: 110011,
        exercise_id: 11003,
        option_text: 'Vírgula; usos da, 25; regras, 30; exceções, 35.',
        is_correct: true,
        explanation: 'Correto. O ponto e vírgula separa as diferentes subentradas (usos, regras, exceções) e seus respectivos números de página, relacionadas à entrada principal "Vírgula".'
      },
      {
        id: 110012,
        exercise_id: 11003,
        option_text: 'Machado de Assis; Dom Casmurro; Memórias Póstumas.',
        is_correct: false,
        explanation: 'Incorreto. A separação entre autor e obras ou entre obras geralmente usa outra pontuação (vírgula, ponto final).'
      },
      {
        id: 110013,
        exercise_id: 11003,
        option_text: 'Brasil; história; descobrimento; independência; república.',
        is_correct: false,
        explanation: 'Incorreto. A estrutura não é típica de índice ou bibliografia com ponto e vírgula dessa forma.'
      },
      {
        id: 110014,
        exercise_id: 11003,
        option_text: 'Ver; página 10; capítulo 2; nota 5.',
        is_correct: false,
        explanation: 'Incorreto. A pontuação está inadequada.'
      },
      {
        id: 110015,
        exercise_id: 11003,
        option_text: 'Autor; Título; Editora; Ano.',
        is_correct: false,
        explanation: 'Incorreto. Em fichas catalográficas, outros separadores são usados.'
      }
    ]
  },
  {
    id: 11004,
    category_id: 'ponto-e-virgula-5',
    question: 'Qual frase usa o ponto e vírgula para separar orações que, embora pudessem ser ligadas por vírgula, ganham mais clareza ou ênfase com o ponto e vírgula devido a uma leve complexidade interna?',
    explanation: 'O ponto e vírgula pode ser usado para dar mais clareza ou ênfase a orações que já apresentam alguma complexidade interna.',
    difficulty: 5,
    options: [
      {
        id: 110016,
        exercise_id: 11004,
        option_text: 'O homem propõe; Deus dispõe.',
        is_correct: true,
        explanation: 'Correto. O ponto e vírgula aqui, embora a vírgula fosse possível, realça o paralelismo e o contraste entre as duas máximas curtas.'
      },
      {
        id: 110017,
        exercise_id: 11004,
        option_text: 'Comprei pão; leite; ovos.',
        is_correct: false,
        explanation: 'Incorreto. Vírgula é o padrão para itens simples.'
      },
      {
        id: 110018,
        exercise_id: 11004,
        option_text: 'Ele estudou muito; e foi aprovado.',
        is_correct: false,
        explanation: 'Incorreto. Vírgula (ou nada) antes de "e" é o padrão.'
      },
      {
        id: 110019,
        exercise_id: 11004,
        option_text: 'A casa, que era azul; foi pintada de verde.',
        is_correct: false,
        explanation: 'Incorreto. O ponto e vírgula não se encaixa dentro da oração principal dessa forma.'
      },
      {
        id: 110020,
        exercise_id: 11004,
        option_text: 'Se chover; não sairemos.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula separa a oração adverbial anteposta.'
      }
    ]
  },
  {
    id: 11005,
    category_id: 'ponto-e-virgula-5',
    question: 'O ponto e vírgula pode ser usado estilisticamente para criar um ritmo específico ou uma pausa mais marcada entre ideias relacionadas. Qual exemplo sugere esse uso estilístico?',
    explanation: 'O uso estilístico do ponto e vírgula pode criar ritmo e ênfase em textos literários e descritivos.',
    difficulty: 5,
    options: [
      {
        id: 110021,
        exercise_id: 11005,
        option_text: 'Era uma noite escura; a chuva caía sem parar; o vento uivava lá fora.',
        is_correct: true,
        explanation: 'Correto. O uso do ponto e vírgula entre as orações curtas que descrevem a cena cria um ritmo pausado e descritivo, mais enfático que o uso de vírgulas.'
      },
      {
        id: 110022,
        exercise_id: 11005,
        option_text: 'Ele comeu; bebeu; dormiu.',
        is_correct: false,
        explanation: 'Incorreto. Vírgulas são mais naturais para ações sequenciais.'
      },
      {
        id: 110023,
        exercise_id: 11005,
        option_text: 'Ingredientes; 2 ovos; 1 xícara de farinha; 1/2 xícara de açúcar.',
        is_correct: false,
        explanation: 'Incorreto. Pontuação inadequada para lista de ingredientes.'
      },
      {
        id: 110024,
        exercise_id: 11005,
        option_text: 'Paris; a cidade luz.',
        is_correct: false,
        explanation: 'Incorreto. Seria "Paris, a cidade luz."'
      },
      {
        id: 110025,
        exercise_id: 11005,
        option_text: 'Atenção; prova difícil.',
        is_correct: false,
        explanation: 'Incorreto. Estrutura telegráfica que não ilustra o uso estilístico do ponto e vírgula entre orações.'
      }
    ]
  },
  {
    id: 11006,
    category_id: 'ponto-e-virgula-5',
    question: 'Em qual contexto o ponto e vírgula é frequentemente considerado um sinal de pontuação mais formal ou erudito?',
    explanation: 'O ponto e vírgula é mais comum em contextos formais e acadêmicos, onde a complexidade das ideias exige maior precisão na pontuação.',
    difficulty: 5,
    options: [
      {
        id: 110026,
        exercise_id: 11006,
        option_text: 'Em mensagens de texto e redes sociais.',
        is_correct: false,
        explanation: 'Incorreto. Nesses meios, a pontuação tende a ser mais informal e simplificada.'
      },
      {
        id: 110027,
        exercise_id: 11006,
        option_text: 'Na separação de orações coordenadas longas e complexas em textos acadêmicos ou literários.',
        is_correct: true,
        explanation: 'Correto. O uso cuidadoso do ponto e vírgula para estruturar frases complexas é mais comum na escrita formal e literária.'
      },
      {
        id: 110028,
        exercise_id: 11006,
        option_text: 'Em diálogos de histórias em quadrinhos.',
        is_correct: false,
        explanation: 'Incorreto. A linguagem tende a ser mais direta.'
      },
      {
        id: 110029,
        exercise_id: 11006,
        option_text: 'Para separar itens de listas de compras.',
        is_correct: false,
        explanation: 'Incorreto. Usa-se vírgula.'
      },
      {
        id: 110030,
        exercise_id: 11006,
        option_text: 'Em manchetes de jornais.',
        is_correct: false,
        explanation: 'Incorreto. Manchetes usam linguagem concisa, raramente empregando ponto e vírgula.'
      }
    ]
  },
  {
    id: 11007,
    category_id: 'ponto-e-virgula-5',
    question: '"Amar é fogo que arde sem se ver; é ferida que dói e não se sente; é um contentamento descontente; é dor que desatina sem doer." (Camões). O ponto e vírgula aqui é usado para:',
    explanation: 'Na poesia de Camões, o ponto e vírgula é usado para criar um ritmo e separar as diferentes definições metafóricas de "amar".',
    difficulty: 5,
    options: [
      {
        id: 110031,
        exercise_id: 11007,
        option_text: 'Separar os diferentes versos do poema.',
        is_correct: false,
        explanation: 'Incorreto. A quebra de linha separa os versos.'
      },
      {
        id: 110032,
        exercise_id: 11007,
        option_text: 'Separar as diferentes definições metafóricas de "amar", que formam uma enumeração de orações com estrutura paralela.',
        is_correct: true,
        explanation: 'Correto. Cada "é..." constitui um item da enumeração que define o amor, e o ponto e vírgula os separa, mantendo o ritmo e a estrutura.'
      },
      {
        id: 110033,
        exercise_id: 11007,
        option_text: 'Indicar a fala do eu lírico.',
        is_correct: false,
        explanation: 'Incorreto.'
      },
      {
        id: 110034,
        exercise_id: 11007,
        option_text: 'Introduzir exemplos de amor.',
        is_correct: false,
        explanation: 'Incorreto. São definições, não exemplos.'
      },
      {
        id: 110035,
        exercise_id: 11007,
        option_text: 'Separar orações adversativas.',
        is_correct: false,
        explanation: 'Incorreto. Não há sentido adversativo predominante.'
      }
    ]
  },
  {
    id: 11008,
    category_id: 'ponto-e-virgula-5',
    question: 'Qual alternativa mostra um uso inadequado ou estranho do ponto e vírgula em um contexto específico?',
    explanation: 'O ponto e vírgula tem usos específicos e deve ser empregado de acordo com as regras gramaticais.',
    difficulty: 5,
    options: [
      {
        id: 110036,
        exercise_id: 11008,
        option_text: 'Art. 5º Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade, nos termos seguintes: I - homens e mulheres são iguais em direitos e obrigações, nos termos desta Constituição; II - ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei; (...)',
        is_correct: false,
        explanation: 'Incorreto (uso adequado). Separação de incisos legais.'
      },
      {
        id: 110037,
        exercise_id: 11008,
        option_text: 'Ele disse; "Voltarei amanhã."',
        is_correct: true,
        explanation: 'Correto (uso inadequado). Para introduzir citação direta, usa-se dois pontos.'
      },
      {
        id: 110038,
        exercise_id: 11008,
        option_text: 'A palestra abordou: neurociência, com foco na memória; psicologia cognitiva, explorando a tomada de decisão; e inteligência artificial, discutindo aprendizado de máquina.',
        is_correct: false,
        explanation: 'Incorreto (uso adequado). Enumeração complexa.'
      },
      {
        id: 110039,
        exercise_id: 11008,
        option_text: 'Uns investem na bolsa; outros preferem imóveis.',
        is_correct: false,
        explanation: 'Incorreto (uso adequado). Contraste entre orações paralelas.'
      },
      {
        id: 110040,
        exercise_id: 11008,
        option_text: 'Chegou; viu; partiu.',
        is_correct: false,
        explanation: 'Incorreto (uso adequado, embora menos comum que vírgula). Uso estilístico para enfatizar ações sequenciais.'
      }
    ]
  },
  {
    id: 11009,
    category_id: 'ponto-e-virgula-5',
    question: 'O ponto e vírgula pode, em casos raros, separar elementos coordenados dentro de uma mesma oração para evitar ambiguidade, quando esses elementos já são complexos. Exemplo:',
    explanation: 'O ponto e vírgula pode ser usado para evitar ambiguidade em orações complexas com elementos coordenados.',
    difficulty: 5,
    options: [
      {
        id: 110041,
        exercise_id: 11009,
        option_text: 'Dedicou o livro a seus pais; a seus mestres, que sempre o apoiaram; e a seus amigos.',
        is_correct: true,
        explanation: 'Correto. O ponto e vírgula aqui evita ambiguidade na enumeração, especialmente porque o segundo item já contém uma oração adjetiva com vírgula.'
      },
      {
        id: 110042,
        exercise_id: 11009,
        option_text: 'Gosto de sorvete; de chocolate; de creme; de morango.',
        is_correct: false,
        explanation: 'Incorreto. Vírgulas são suficientes para separar itens simples.'
      },
      {
        id: 110043,
        exercise_id: 11009,
        option_text: 'Ele comprou; um carro novo; uma casa na praia; um barco.',
        is_correct: false,
        explanation: 'Incorreto. A estrutura está inadequada; vírgulas seriam suficientes.'
      },
      {
        id: 110044,
        exercise_id: 11009,
        option_text: 'A bandeira é verde; amarela; azul; branca.',
        is_correct: false,
        explanation: 'Incorreto. Vírgulas são suficientes para separar as cores.'
      },
      {
        id: 110045,
        exercise_id: 11009,
        option_text: 'Estudou matemática; física; química.',
        is_correct: false,
        explanation: 'Incorreto. Vírgulas são suficientes para separar disciplinas.'
      }
    ]
  },
  {
    id: 11010,
    category_id: 'ponto-e-virgula-5',
    question: 'Assinale o caso em que o ponto e vírgula NÃO seria uma opção recomendável, mesmo considerando usos especiais ou estilísticos:',
    explanation: 'O ponto e vírgula tem usos específicos e não deve ser empregado em todas as situações.',
    difficulty: 5,
    options: [
      {
        id: 110046,
        exercise_id: 11010,
        option_text: 'Separar orações coordenadas muito longas e com vírgulas internas.',
        is_correct: false,
        explanation: 'Incorreto. É um uso recomendável.'
      },
      {
        id: 110047,
        exercise_id: 11010,
        option_text: 'Separar itens de uma enumeração complexa, onde os itens contêm vírgulas.',
        is_correct: false,
        explanation: 'Incorreto. É um uso recomendável.'
      },
      {
        id: 110048,
        exercise_id: 11010,
        option_text: 'Conectar orações curtas com forte contraste: "Dia; noite."',
        is_correct: false,
        explanation: 'Incorreto. É um uso estilístico possível (embora raro).'
      },
      {
        id: 110049,
        exercise_id: 11010,
        option_text: 'Separar o sujeito do predicado.',
        is_correct: true,
        explanation: 'Correto. Nunca se deve usar ponto e vírgula (nem vírgula) para separar o sujeito do seu predicado na ordem direta.'
      },
      {
        id: 110050,
        exercise_id: 11010,
        option_text: 'Separar itens (incisos) em textos legais.',
        is_correct: false,
        explanation: 'Incorreto. É um uso técnico comum e recomendável.'
      }
    ]
  },
  {
    id: 11011,
    category_id: 'ponto-e-virgula-5',
    question: 'Em qual das alternativas o ponto e vírgula está sendo usado corretamente em um texto literário?',
    explanation: 'O ponto e vírgula é usado em textos literários para criar pausas mais longas que a vírgula, mas menos definitivas que o ponto final.',
    difficulty: 5,
    options: [
      {
        id: 110051,
        exercise_id: 11011,
        option_text: 'A noite caía lentamente sobre a cidade; as luzes começavam a se acender nas janelas dos prédios; o silêncio tomava conta das ruas desertas.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está criando pausas entre orações independentes em uma descrição literária.'
      },
      {
        id: 110052,
        exercise_id: 11011,
        option_text: 'A noite; caía lentamente sobre a cidade, as luzes começavam a se acender, o silêncio tomava conta das ruas.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 110053,
        exercise_id: 11011,
        option_text: 'A noite caía; lentamente sobre a cidade, as luzes começavam a se acender, o silêncio tomava conta das ruas.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo do seu adjunto adverbial.'
      },
      {
        id: 110054,
        exercise_id: 11011,
        option_text: 'A noite caía lentamente sobre a cidade; e as luzes começavam a se acender; e o silêncio tomava conta das ruas.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      },
      {
        id: 110055,
        exercise_id: 11011,
        option_text: 'A noite caía lentamente sobre a cidade, mas; as luzes começavam a se acender nas janelas dos prédios.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula deve vir antes da conjunção adversativa, não depois.'
      }
    ]
  },
  {
    id: 11012,
    category_id: 'ponto-e-virgula-5',
    question: 'Identifique a alternativa em que o ponto e vírgula está sendo usado corretamente em um texto filosófico:',
    explanation: 'O ponto e vírgula é usado em textos filosóficos para separar ideias complexas ou argumentos relacionados.',
    difficulty: 5,
    options: [
      {
        id: 110056,
        exercise_id: 11012,
        option_text: 'A liberdade é um conceito fundamental na filosofia política; sua definição, contudo, varia conforme a corrente de pensamento; seus limites são objeto de constante debate entre os filósofos.',
        is_correct: true,
        explanation: 'Correto! O ponto e vírgula está separando ideias complexas relacionadas em um texto filosófico.'
      },
      {
        id: 110057,
        exercise_id: 11012,
        option_text: 'A liberdade; é um conceito fundamental na filosofia política, sua definição varia conforme a corrente de pensamento.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o sujeito do predicado.'
      },
      {
        id: 110058,
        exercise_id: 11012,
        option_text: 'A liberdade é; um conceito fundamental na filosofia política, sua definição varia conforme a corrente de pensamento.',
        is_correct: false,
        explanation: 'Incorreto! O ponto e vírgula não deve separar o verbo de ligação do predicativo.'
      },
      {
        id: 110059,
        exercise_id: 11012,
        option_text: 'A liberdade é um conceito fundamental na filosofia política; e sua definição varia conforme a corrente de pensamento.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa ponto e vírgula antes de conjunção aditiva (e).'
      },
      {
        id: 110060,
        exercise_id: 11012,
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

