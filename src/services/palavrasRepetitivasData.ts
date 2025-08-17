import { Exercise } from './exerciseService';

//==============================================================================
//==============================================================================
//                        PALAVRAS REPETITIVAS
//==============================================================================
//==============================================================================

// ---------- MÓDULO 1: Substituição de Palavras Comuns ----------
export const substituicaoPalavrasComunsExercicio: Exercise[] = [
  {
    id: 70001,
    category_id: 'substituicao-palavras-comuns',
    question: 'Qual é a melhor substituição para a palavra "muito" na frase: "O assunto é muito importante para o país"?',
    explanation: 'Evitar o uso excessivo de "muito" torna o texto mais elegante e preciso. Há diversas opções para substituir este intensificador comum.',
    difficulty: 1,
    options: [
      {
        id: 700001,
        exercise_id: 70001,
        option_text: 'extremamente',
        is_correct: true,
        explanation: 'Correto! "Extremamente" substitui "muito" com maior precisão e elegância.'
      },
      {
        id: 700002,
        exercise_id: 70001,
        option_text: 'bastante',
        is_correct: false,
        explanation: '"Bastante" é um bom substituto, mas não é a melhor opção neste contexto formal.'
      },
      {
        id: 700003,
        exercise_id: 70001,
        option_text: 'bem',
        is_correct: false,
        explanation: '"Bem" é informal demais para o contexto da frase.'
      },
      {
        id: 700004,
        exercise_id: 70001,
        option_text: 'realmente',
        is_correct: false,
        explanation: '"Realmente" muda um pouco o sentido da frase, enfatizando a veracidade em vez da intensidade.'
      }
    ]
  },
  {
    id: 70002,
    category_id: 'substituicao-palavras-comuns',
    question: 'Na frase "O candidato fez uma boa apresentação", qual seria a melhor substituição para "boa"?',
    explanation: 'Adjetivos genéricos como "bom/boa" podem ser substituídos por termos mais precisos que transmitem melhor a qualidade específica.',
    difficulty: 1,
    options: [
      {
        id: 700005,
        exercise_id: 70002,
        option_text: 'excelente',
        is_correct: false,
        explanation: '"Excelente" intensifica demais a qualidade original, podendo alterar o sentido.'
      },
      {
        id: 700006,
        exercise_id: 70002,
        option_text: 'consistente',
        is_correct: true,
        explanation: 'Correto! "Consistente" é mais preciso e descreve melhor a qualidade da apresentação.'
      },
      {
        id: 700007,
        exercise_id: 70002,
        option_text: 'legal',
        is_correct: false,
        explanation: '"Legal" é muito informal para o contexto.'
      },
      {
        id: 700008,
        exercise_id: 70002,
        option_text: 'satisfatória',
        is_correct: false,
        explanation: '"Satisfatória" diminui o valor positivo em relação a "boa".'
      }
    ]
  },
  {
    id: 70003,
    category_id: 'substituicao-palavras-comuns',
    question: 'Na frase "As coisas estão difíceis para a economia", qual é a melhor substituição para "coisas"?',
    explanation: 'Palavras genéricas como "coisas" devem ser evitadas em textos formais. Usar termos específicos torna o texto mais preciso e elegante.',
    difficulty: 1,
    options: [
      {
        id: 700009,
        exercise_id: 70003,
        option_text: 'situações',
        is_correct: false,
        explanation: '"Situações" é melhor que "coisas", mas ainda não é a opção mais precisa neste contexto.'
      },
      {
        id: 700010,
        exercise_id: 70003,
        option_text: 'condições',
        is_correct: true,
        explanation: 'Correto! "Condições" é o termo mais adequado para se referir ao estado da economia.'
      },
      {
        id: 700011,
        exercise_id: 70003,
        option_text: 'fatos',
        is_correct: false,
        explanation: '"Fatos" não se encaixa bem neste contexto, pois a frase refere-se a um estado, não a eventos concretos.'
      },
      {
        id: 700012,
        exercise_id: 70003,
        option_text: 'elementos',
        is_correct: false,
        explanation: '"Elementos" não é adequado para se referir ao estado geral da economia.'
      }
    ]
  },
  {
    id: 70004,
    category_id: 'substituicao-palavras-comuns',
    question: 'Qual é a melhor substituição para a palavra "fazer" na frase: "O governo vai fazer uma nova lei sobre o assunto"?',
    explanation: 'O verbo "fazer" é muito genérico e pode ser substituído por opções mais precisas, dependendo do contexto.',
    difficulty: 1,
    options: [
      {
        id: 700013,
        exercise_id: 70004,
        option_text: 'criar',
        is_correct: false,
        explanation: '"Criar" é uma boa opção, mas não é a mais precisa para o contexto legislativo.'
      },
      {
        id: 700014,
        exercise_id: 70004,
        option_text: 'elaborar',
        is_correct: true,
        explanation: 'Correto! "Elaborar" é o termo técnico mais adequado para se referir ao processo de criação de uma lei.'
      },
      {
        id: 700015,
        exercise_id: 70004,
        option_text: 'executar',
        is_correct: false,
        explanation: '"Executar" não é apropriado, pois se refere u00e0 implementação e não u00e0 criação de uma lei.'
      },
      {
        id: 700016,
        exercise_id: 70004,
        option_text: 'produzir',
        is_correct: false,
        explanation: '"Produzir" não é o termo técnico mais adequado para o contexto de criação de leis.'
      }
    ]
  },
  {
    id: 70005,
    category_id: 'substituicao-palavras-comuns',
    question: 'Na frase "Muitas pessoas têm problema com matemática", qual seria a melhor substituição para "muitas"?',
    explanation: 'Quantificadores indefinidos como "muitas" podem ser substituídos por expressões mais precisas ou números, quando possível.',
    difficulty: 1,
    options: [
      {
        id: 700017,
        exercise_id: 70005,
        option_text: 'inúmeras',
        is_correct: true,
        explanation: 'Correto! "Inúmeras" é mais elegante e formal que "muitas".'
      },
      {
        id: 700018,
        exercise_id: 70005,
        option_text: 'bastantes',
        is_correct: false,
        explanation: '"Bastantes" pode não expressar a mesma quantidade que "muitas" e não é a opção mais formal.'
      },
      {
        id: 700019,
        exercise_id: 70005,
        option_text: 'várias',
        is_correct: false,
        explanation: '"Várias" tende a indicar um número menor que "muitas" e não é a melhor substituição.'
      },
      {
        id: 700020,
        exercise_id: 70005,
        option_text: 'diversas',
        is_correct: false,
        explanation: '"Diversas" enfatiza a variedade e não a quantidade, alterando um pouco o sentido original.'
      }
    ]
  },
  {
    id: 70006,
    category_id: 'substituicao-palavras-comuns',
    question: 'Na frase "Preciso resolver essa coisa urgente", qual palavra substitui "coisa" de forma mais precisa e formal, referindo-se a um problema ou assunto?',
    explanation: 'Palavras genéricas como "coisa" devem ser substituídas por termos mais específicos que transmitam melhor o significado pretendido.',
    difficulty: 1,
    options: [
      {
        id: 700021,
        exercise_id: 70006,
        option_text: 'parada',
        is_correct: false,
        explanation: 'Incorreto. "Parada" é uma gíria muito informal e inadequada para contextos formais.'
      },
      {
        id: 700022,
        exercise_id: 70006,
        option_text: 'negócio',
        is_correct: false,
        explanation: 'Incorreto. "Negócio" é vago e informal neste contexto.'
      },
      {
        id: 700023,
        exercise_id: 70006,
        option_text: 'questão',
        is_correct: true,
        explanation: 'Correto! "Questão" é um termo preciso e formal para se referir a um assunto, problema ou matéria a ser resolvida.'
      },
      {
        id: 700024,
        exercise_id: 70006,
        option_text: 'elemento',
        is_correct: false,
        explanation: 'Incorreto. "Elemento" é muito genérico e não se encaixa bem no contexto de "resolver" um problema ou assunto.'
      }
    ]
  },
  {
    id: 70007,
    category_id: 'substituicao-palavras-comuns',
    question: 'A professora fez um trabalho bom com os alunos. Qual adjetivo expressa uma avaliação mais específica, formal e positiva sobre a qualidade do trabalho?',
    explanation: 'Adjetivos genéricos como "bom" podem ser substituídos por termos mais precisos que transmitam melhor a avaliação específica.',
    difficulty: 1,
    options: [
      {
        id: 700025,
        exercise_id: 70007,
        option_text: 'legal',
        is_correct: false,
        explanation: 'Incorreto. "Legal" é um termo informal e vago para expressar qualidade.'
      },
      {
        id: 700026,
        exercise_id: 70007,
        option_text: 'maneiro',
        is_correct: false,
        explanation: 'Incorreto. "Maneiro" é uma gíria e inadequada para uma avaliação formal.'
      },
      {
        id: 700027,
        exercise_id: 70007,
        option_text: 'notável',
        is_correct: true,
        explanation: 'Correto! "Notável" indica que o trabalho se destacou pela qualidade, sendo uma avaliação positiva, específica e formal.'
      },
      {
        id: 700028,
        exercise_id: 70007,
        option_text: 'decente',
        is_correct: false,
        explanation: 'Incorreto. "Decente" sugere algo mediano ou apenas satisfatório, não necessariamente "bom" em termos de qualidade superior.'
      }
    ]
  },
  {
    id: 70008,
    category_id: 'substituicao-palavras-comuns',
    question: 'O desempenho da equipe foi ruim no último jogo. Qual alternativa descreve o desempenho de forma mais formal e com uma nuance negativa apropriada?',
    explanation: 'Adjetivos genéricos como "ruim" podem ser substituídos por termos mais precisos que transmitam melhor a avaliação específica.',
    difficulty: 1,
    options: [
      {
        id: 700029,
        exercise_id: 70008,
        option_text: 'péssimo',
        is_correct: false,
        explanation: 'Incorreto. "Péssimo" intensifica demais o sentido de "ruim" e pode soar informal ou exagerado dependendo do contexto.'
      },
      {
        id: 700030,
        exercise_id: 70008,
        option_text: 'fraco',
        is_correct: false,
        explanation: 'Incorreto. "Fraco" é uma opção, mas "insatisfatório" pode ser mais formal e preciso em avaliações de desempenho.'
      },
      {
        id: 700031,
        exercise_id: 70008,
        option_text: 'insatisfatório',
        is_correct: true,
        explanation: 'Correto! "Insatisfatório" é um termo formal que indica que o desempenho não atendeu às expectativas ou ao padrão desejado, substituindo "ruim" adequadamente.'
      },
      {
        id: 700032,
        exercise_id: 70008,
        option_text: 'medíocre',
        is_correct: false,
        explanation: 'Incorreto. "Medíocre" significa mediano, de baixa qualidade, mas "insatisfatório" foca na falta de atendimento às expectativas, sendo mais comum em avaliações formais.'
      }
    ]
  },
  {
    id: 70009,
    category_id: 'substituicao-palavras-comuns',
    question: 'A empresa construiu um prédio grande no centro da cidade. Qual palavra descreve o tamanho de forma mais elegante, formal ou técnica?',
    explanation: 'Adjetivos genéricos como "grande" podem ser substituídos por termos mais específicos que transmitam melhor a dimensão específica.',
    difficulty: 1,
    options: [
      {
        id: 700033,
        exercise_id: 70009,
        option_text: 'enorme',
        is_correct: false,
        explanation: 'Incorreto. "Enorme" apenas enfatiza o tamanho, sendo tão comum quanto "grande".'
      },
      {
        id: 700034,
        exercise_id: 70009,
        option_text: 'gigante',
        is_correct: false,
        explanation: 'Incorreto. Similar a "enorme", enfatiza o tamanho de forma comum.'
      },
      {
        id: 700035,
        exercise_id: 70009,
        option_text: 'imponente',
        is_correct: true,
        explanation: 'Correto! "Imponente" descreve não apenas o tamanho, mas também a aparência majestosa e grandiosa do prédio, adicionando sofisticação.'
      },
      {
        id: 700036,
        exercise_id: 70009,
        option_text: 'amplo',
        is_correct: false,
        explanation: 'Incorreto. "Amplo" refere-se mais a espaço interno, largura ou abertura, não necessariamente ao tamanho geral do prédio.'
      }
    ]
  },
  {
    id: 70010,
    category_id: 'substituicao-palavras-comuns',
    question: 'Ele mora em um apartamento pequeno. Qual alternativa descreve o tamanho de forma mais neutra, formal ou com uma conotação menos negativa?',
    explanation: 'Adjetivos com conotação negativa como "pequeno" podem ser substituídos por termos mais neutros ou positivos, dependendo do contexto.',
    difficulty: 1,
    options: [
      {
        id: 700037,
        exercise_id: 70010,
        option_text: 'minúsculo',
        is_correct: false,
        explanation: 'Incorreto. "Minúsculo" é um exagero e intensifica a ideia de ser muito pequeno.'
      },
      {
        id: 700038,
        exercise_id: 70010,
        option_text: 'apertado',
        is_correct: false,
        explanation: 'Incorreto. "Apertado" tem uma conotação negativa clara, implicando falta de espaço e desconforto.'
      },
      {
        id: 700039,
        exercise_id: 70010,
        option_text: 'compacto',
        is_correct: true,
        explanation: 'Correto! "Compacto" é um termo neutro, frequentemente usado de forma positiva, sugerindo que o espaço é bem aproveitado apesar de ser pequeno.'
      },
      {
        id: 700040,
        exercise_id: 70010,
        option_text: 'modesto',
        is_correct: false,
        explanation: 'Incorreto. "Modesto" refere-se mais à simplicidade ou falta de luxo do que especificamente ao tamanho físico.'
      }
    ]
  }
];

// ---------- MÓDULO 2: Verbos Comuns ----------
export const verbosComunsExercicio: Exercise[] = [
  {
    id: 71001,
    category_id: 'verbos-comuns',
    question: 'Qual é a melhor substituição para o verbo "ter" na frase: "O Brasil tem muitos recursos naturais"?',
    explanation: 'O verbo "ter" é muito utilizado, mas existem alternativas que enriquecem o texto. A substituição adequada melhora a qualidade da escrita.',
    difficulty: 1,
    options: [
      {
        id: 710001,
        exercise_id: 71001,
        option_text: 'possui',
        is_correct: true,
        explanation: 'Correto! "Possui" é mais formal e adequado para textos escritos.'
      },
      {
        id: 710002,
        exercise_id: 71001,
        option_text: 'conta com',
        is_correct: false,
        explanation: '"Conta com" é uma boa opção, mas não é a mais direta neste contexto.'
      },
      {
        id: 710003,
        exercise_id: 71001,
        option_text: 'detém',
        is_correct: false,
        explanation: '"Detém" implica um controle ativo sobre algo, alterando ligeiramente o sentido da frase.'
      },
      {
        id: 710004,
        exercise_id: 71001,
        option_text: 'contém',
        is_correct: false,
        explanation: '"Contém" não é semanticamente adequado neste contexto.'
      }
    ]
  },
  {
    id: 71002,
    category_id: 'verbos-comuns',
    question: 'Na frase "O presidente falou sobre a crise econômica", qual seria a melhor substituição para "falou"?',
    explanation: 'O verbo "falar" é muito genérico. Existem verbos mais precisos que podem transmitir não apenas a ação de falar, mas também o modo ou a intenção.',
    difficulty: 1,
    options: [
      {
        id: 710005,
        exercise_id: 71002,
        option_text: 'dialogou',
        is_correct: false,
        explanation: '"Dialogou" implica uma conversa de mão dupla, o que não é necessariamente o caso nesta frase.'
      },
      {
        id: 710006,
        exercise_id: 71002,
        option_text: 'discorreu',
        is_correct: true,
        explanation: 'Correto! "Discorrer" significa falar longamente sobre um assunto, sendo mais preciso e formal.'
      },
      {
        id: 710007,
        exercise_id: 71002,
        option_text: 'conversou',
        is_correct: false,
        explanation: '"Conversou" sugere informalidade e reciprocidade, o que pode não ser adequado para um pronunciamento presidencial.'
      },
      {
        id: 710008,
        exercise_id: 71002,
        option_text: 'comentou',
        is_correct: false,
        explanation: '"Comentou" sugere uma menção breve, o que pode diminuir a importância do assunto.'
      }
    ]
  },
  {
    id: 71003,
    category_id: 'verbos-comuns',
    question: 'Qual é a melhor substituição para o verbo "ir" na frase: "Os estudantes vão para a universidade todos os dias"?',
    explanation: 'O verbo "ir" é muito comum e pode ser substituído por verbos que indicam movimento de forma mais precisa ou elegante.',
    difficulty: 1,
    options: [
      {
        id: 710009,
        exercise_id: 71003,
        option_text: 'frequentam',
        is_correct: true,
        explanation: 'Correto! "Frequentar" indica uma ação habitual e contínua, sendo mais preciso para o contexto educacional.'
      },
      {
        id: 710010,
        exercise_id: 71003,
        option_text: 'locomovem-se',
        is_correct: false,
        explanation: '"Locomover-se" enfatiza apenas o deslocamento físico, perdendo a ideia de propósito educacional.'
      },
      {
        id: 710011,
        exercise_id: 71003,
        option_text: 'comparecem',
        is_correct: false,
        explanation: '"Comparecer" sugere uma presença pontual ou formal, não uma rotina diária.'
      },
      {
        id: 710012,
        exercise_id: 71003,
        option_text: 'deslocam-se',
        is_correct: false,
        explanation: '"Deslocar-se" enfoca apenas o movimento físico, similar a "locomover-se".'
      }
    ]
  },
  {
    id: 71004,
    category_id: 'verbos-comuns',
    question: 'Na frase "A empresa está fazendo um novo projeto", qual seria a melhor substituição para "fazendo"?',
    explanation: 'A expressão "estar fazendo" é muito comum, mas pouco precisa. Há verbos que expressam melhor a ação de criar ou desenvolver um projeto.',
    difficulty: 1,
    options: [
      {
        id: 710013,
        exercise_id: 71004,
        option_text: 'implementando',
        is_correct: false,
        explanation: '"Implementar" refere-se mais u00e0 execução de um projeto já concebido, não u00e0 sua criação inicial.'
      },
      {
        id: 710014,
        exercise_id: 71004,
        option_text: 'desenvolvendo',
        is_correct: true,
        explanation: 'Correto! "Desenvolver" é mais preciso para descrever o processo de criação e elaboração de um projeto.'
      },
      {
        id: 710015,
        exercise_id: 71004,
        option_text: 'produzindo',
        is_correct: false,
        explanation: '"Produzir" é mais adequado para bens materiais do que para projetos conceituais.'
      },
      {
        id: 710016,
        exercise_id: 71004,
        option_text: 'executando',
        is_correct: false,
        explanation: '"Executar" sugere a implementação de um plano já existente, não sua criação.'
      }
    ]
  },
  {
    id: 71005,
    category_id: 'verbos-comuns',
    question: 'Qual é a melhor substituição para o verbo "dar" na frase: "O professor deu uma explicação detalhada sobre o tema"?',
    explanation: 'O verbo "dar" é extremamente comum e genérico. Em contextos acadêmicos, existem verbos mais precisos para se referir u00e0 ação de explicar algo.',
    difficulty: 1,
    options: [
      {
        id: 710017,
        exercise_id: 71005,
        option_text: 'forneceu',
        is_correct: false,
        explanation: '"Fornecer" é mais adequado para objetos concretos ou informações factuais, não para uma explicação didática.'
      },
      {
        id: 710018,
        exercise_id: 71005,
        option_text: 'ofereceu',
        is_correct: false,
        explanation: '"Oferecer" sugere algo opcional, o que não é o caso de uma explicação em sala de aula.'
      },
      {
        id: 710019,
        exercise_id: 71005,
        option_text: 'apresentou',
        is_correct: true,
        explanation: 'Correto! "Apresentar" é mais formal e adequado para o contexto acadêmico de uma explicação detalhada.'
      },
      {
        id: 710020,
        exercise_id: 71005,
        option_text: 'concedeu',
        is_correct: false,
        explanation: '"Conceder" implica uma concessão ou permissão, o que não se aplica a uma explicação.'
      }
    ]
  },
  {
    id: 71006,
    category_id: 'verbos-comuns',
    question: 'Na frase "O político vai fazer um discurso amanhã", qual verbo substitui "fazer" de forma mais precisa e formal para o ato de apresentar um discurso?',
    explanation: 'O verbo "fazer" é extremamente genérico e pode ser substituído por alternativas mais específicas que melhor descrevam a ação de apresentar um discurso formal.',
    difficulty: 1,
    options: [
      {
        id: 710021,
        exercise_id: 71006,
        option_text: 'realizar',
        is_correct: false,
        explanation: 'Incorreto. "Realizar" é genérico e pode se aplicar a eventos, mas "proferir" é mais específico para discursos.'
      },
      {
        id: 710022,
        exercise_id: 71006,
        option_text: 'proferir',
        is_correct: true,
        explanation: 'Correto! "Proferir" significa enunciar, dizer em voz alta, sendo o termo técnico e formal para o ato de fazer um discurso.'
      },
      {
        id: 710023,
        exercise_id: 71006,
        option_text: 'executar',
        is_correct: false,
        explanation: 'Incorreto. "Executar" refere-se à realização de uma tarefa ou plano, não especificamente a discursar.'
      },
      {
        id: 710024,
        exercise_id: 71006,
        option_text: 'apresentar',
        is_correct: false,
        explanation: 'Incorreto. "Apresentar" é possível, mas "proferir" é mais específico para o ato formal de discursar.'
      }
    ]
  },
  {
    id: 71007,
    category_id: 'verbos-comuns',
    question: 'Em "Precisamos ir até a sala de reuniões", qual verbo substitui "ir" indicando um movimento mais formal ou direcionado?',
    explanation: 'O verbo "ir" é muito genérico e pode ser substituído por alternativas que indiquem movimento direcionado de forma mais formal.',
    difficulty: 1,
    options: [
      {
        id: 710025,
        exercise_id: 71007,
        option_text: 'andar',
        is_correct: false,
        explanation: 'Incorreto. "Andar" descreve a forma do movimento, não necessariamente o destino ou a formalidade.'
      },
      {
        id: 710026,
        exercise_id: 71007,
        option_text: 'dirigir-se',
        is_correct: true,
        explanation: 'Correto! "Dirigir-se a" indica um movimento direcionado a um local específico, sendo mais formal que "ir".'
      },
      {
        id: 710027,
        exercise_id: 71007,
        option_text: 'mover-se',
        is_correct: false,
        explanation: 'Incorreto. "Mover-se" é muito genérico.'
      },
      {
        id: 710028,
        exercise_id: 71007,
        option_text: 'chegar',
        is_correct: false,
        explanation: 'Incorreto. "Chegar" indica o fim do movimento, a chegada ao destino, não o ato de ir.'
      }
    ]
  },
  {
    id: 71008,
    category_id: 'verbos-comuns',
    question: 'Na frase "Ele teve uma ideia brilhante durante a reunião", qual verbo substitui "ter" de forma mais dinâmica, indicando o surgimento da ideia?',
    explanation: 'O verbo "ter" é muito genérico e pode ser substituído por alternativas que expressem melhor o processo mental de concepção de ideias.',
    difficulty: 1,
    options: [
      {
        id: 710029,
        exercise_id: 71008,
        option_text: 'possuiu',
        is_correct: false,
        explanation: 'Incorreto. "Possuir" tem sentido de posse, não de surgimento de ideia.'
      },
      {
        id: 710030,
        exercise_id: 71008,
        option_text: 'obteve',
        is_correct: false,
        explanation: 'Incorreto. "Obter" sugere esforço para conseguir algo, não o surgimento espontâneo de uma ideia.'
      },
      {
        id: 710031,
        exercise_id: 71008,
        option_text: 'concebeu',
        is_correct: true,
        explanation: 'Correto! "Conceber" significa formar uma ideia na mente, criar mentalmente, sendo mais expressivo que "ter".'
      },
      {
        id: 710032,
        exercise_id: 71008,
        option_text: 'achou',
        is_correct: false,
        explanation: 'Incorreto. "Achar" é informal e sugere encontrar algo perdido, não ter uma ideia.'
      }
    ]
  },
  {
    id: 71009,
    category_id: 'verbos-comuns',
    question: 'Em "O gerente deu informações importantes aos funcionários", qual verbo substitui "dar" de forma mais formal no contexto de transmitir informações?',
    explanation: 'O verbo "dar" é muito genérico e pode ser substituído por alternativas que expressem melhor a ação de transmitir informações de forma formal.',
    difficulty: 1,
    options: [
      {
        id: 710033,
        exercise_id: 71009,
        option_text: 'passou',
        is_correct: false,
        explanation: 'Incorreto. "Passar" é informal neste contexto.'
      },
      {
        id: 710034,
        exercise_id: 71009,
        option_text: 'entregou',
        is_correct: false,
        explanation: 'Incorreto. "Entregar" aplica-se mais a objetos físicos.'
      },
      {
        id: 710035,
        exercise_id: 71009,
        option_text: 'forneceu',
        is_correct: true,
        explanation: 'Correto! "Fornecer" significa prover, disponibilizar, sendo um termo mais formal e adequado para a transmissão de informações.'
      },
      {
        id: 710036,
        exercise_id: 71009,
        option_text: 'contou',
        is_correct: false,
        explanation: 'Incorreto. "Contar" pode ser usado, mas "fornecer" é mais formal e abrangente.'
      }
    ]
  },
  {
    id: 71010,
    category_id: 'verbos-comuns',
    question: 'Na frase "É preciso ver o problema por outro ângulo", qual verbo substitui "ver" com o sentido de analisar ou considerar intelectualmente?',
    explanation: 'O verbo "ver" é frequentemente usado de forma genérica e pode ser substituído por alternativas que expressem melhor a análise intelectual ou consideração cuidadosa.',
    difficulty: 1,
    options: [
      {
        id: 710037,
        exercise_id: 71010,
        option_text: 'olhar',
        is_correct: false,
        explanation: 'Incorreto. "Olhar" refere-se ao ato físico de direcionar a visão.'
      },
      {
        id: 710038,
        exercise_id: 71010,
        option_text: 'enxergar',
        is_correct: false,
        explanation: 'Incorreto. Similar a "olhar", foca na percepção visual.'
      },
      {
        id: 710039,
        exercise_id: 71010,
        option_text: 'analisar',
        is_correct: true,
        explanation: 'Correto! "Analisar" implica examinar detalhadamente, considerar sob diferentes aspectos, o que se encaixa perfeitamente no sentido de "ver" intelectualmente.'
      },
      {
        id: 710040,
        exercise_id: 71010,
        option_text: 'observar',
        is_correct: false,
        explanation: 'Incorreto. "Observar" significa olhar com atenção, mas "analisar" implica um exame mais profundo.'
      }
    ]
  }
];

// ---------- MÓDULO 3: Conectivos e Transições ----------
export const conectivosTransicaoExercicio: Exercise[] = [
  {
    id: 72001,
    category_id: 'conectivos-transicao',
    question: 'Qual é a melhor substituição para "mas" na frase: "O candidato tinha pouca experiência, mas conseguiu o emprego"?',
    explanation: 'A conjunção adversativa "mas" é muito utilizada, porém existem alternativas que podem tornar o texto mais formal e elegante.',
    difficulty: 1,
    options: [
      {
        id: 720001,
        exercise_id: 72001,
        option_text: 'contudo',
        is_correct: true,
        explanation: 'Correto! "Contudo" é uma conjunção adversativa mais formal que "mas".'
      },
      {
        id: 720002,
        exercise_id: 72001,
        option_text: 'todavia',
        is_correct: false,
        explanation: '"Todavia" é uma boa opção, mas "contudo" é mais comumente utilizada em textos formais contemporâneos.'
      },
      {
        id: 720003,
        exercise_id: 72001,
        option_text: 'entretanto',
        is_correct: false,
        explanation: '"Entretanto" é adequado, mas "contudo" é mais sucinto e flui melhor na frase dada.'
      },
      {
        id: 720004,
        exercise_id: 72001,
        option_text: 'porém',
        is_correct: false,
        explanation: '"Porém" é uma boa opção, mas não representa uma elevação significativa de formalidade em relação a "mas".'
      }
    ]
  },
  {
    id: 72002,
    category_id: 'conectivos-transicao',
    question: 'Na frase "Ele estudou muito, por isso foi aprovado", qual seria a melhor substituição para "por isso"?',
    explanation: 'Expressas conclusivas como "por isso" podem ser substituídas por opções mais formais, enriquecendo o texto.',
    difficulty: 1,
    options: [
      {
        id: 720005,
        exercise_id: 72002,
        option_text: 'em virtude disso',
        is_correct: false,
        explanation: '"Em virtude disso" é formal, mas um pouco longo para este contexto específico.'
      },
      {
        id: 720006,
        exercise_id: 72002,
        option_text: 'portanto',
        is_correct: true,
        explanation: 'Correto! "Portanto" é uma conjunção conclusiva mais formal e direta.'
      },
      {
        id: 720007,
        exercise_id: 72002,
        option_text: 'assim',
        is_correct: false,
        explanation: '"Assim" é uma opção válida, mas não é necessariamente mais formal que "por isso".'
      },
      {
        id: 720008,
        exercise_id: 72002,
        option_text: 'dessa forma',
        is_correct: false,
        explanation: '"Dessa forma" é uma boa opção, mas "portanto" é mais conciso e formal para este contexto.'
      }
    ]
  },
  {
    id: 72003,
    category_id: 'conectivos-transicao',
    question: 'Qual é a melhor substituição para "também" na frase: "O texto argumentativo deve ser claro e também objetivo"?',
    explanation: 'Advs. e conectivos como "também" são comuns, mas há alternativas que podem tornar o texto mais sofisticado.',
    difficulty: 1,
    options: [
      {
        id: 720009,
        exercise_id: 72003,
        option_text: 'igualmente',
        is_correct: true,
        explanation: 'Correto! "Igualmente" é mais formal e elegante que "também".'
      },
      {
        id: 720010,
        exercise_id: 72003,
        option_text: 'além disso',
        is_correct: false,
        explanation: '"Além disso" sugere um acréscimo, enquanto "também" indica uma característica adicional ao mesmo nível da anterior.'
      },
      {
        id: 720011,
        exercise_id: 72003,
        option_text: 'inclusive',
        is_correct: false,
        explanation: '"Inclusive" sugere inclusão ou algo além do esperado, alterando o sentido original.'
      },
      {
        id: 720012,
        exercise_id: 72003,
        option_text: 'ainda',
        is_correct: false,
        explanation: '"Ainda" pode sugerir continuidade temporal ou contraste, não sendo adequado neste contexto.'
      }
    ]
  },
  {
    id: 72004,
    category_id: 'conectivos-transicao',
    question: 'Na frase "Ela não veio para a reunião porque estava doente", qual seria a melhor substituição para "porque"?',
    explanation: 'A conjunção causal "porque" é muito comum na linguagem oral e escrita, mas existem alternativas mais formais.',
    difficulty: 1,
    options: [
      {
        id: 720013,
        exercise_id: 72004,
        option_text: 'pois',
        is_correct: false,
        explanation: '"Pois" é uma boa opção, mas não é significativamente mais formal que "porque".'
      },
      {
        id: 720014,
        exercise_id: 72004,
        option_text: 'uma vez que',
        is_correct: true,
        explanation: 'Correto! "Uma vez que" é uma locução conjuntiva causal mais formal e elegante.'
      },
      {
        id: 720015,
        exercise_id: 72004,
        option_text: 'já que',
        is_correct: false,
        explanation: '"Já que" é mais informal que "uma vez que" e não representa uma elevação significativa de formalidade.'
      },
      {
        id: 720016,
        exercise_id: 72004,
        option_text: 'visto que',
        is_correct: false,
        explanation: '"Visto que" é formal, mas "uma vez que" é mais comum em textos acadêmicos e oficiais.'
      }
    ]
  },
  {
    id: 72005,
    category_id: 'conectivos-transicao',
    question: 'Qual é a melhor substituição para "então" na frase: "Se não há mais questões, então podemos encerrar a sessão"?',
    explanation: 'O conectivo "então" é comum em construções condicionais, mas pode ser substituído por alternativas mais formais.',
    difficulty: 1,
    options: [
      {
        id: 720017,
        exercise_id: 72005,
        option_text: 'logo',
        is_correct: true,
        explanation: 'Correto! "Logo" é uma conjunção conclusiva mais formal e direta que "então".'
      },
      {
        id: 720018,
        exercise_id: 72005,
        option_text: 'daí',
        is_correct: false,
        explanation: '"Daí" é muito informal e coloquial, não sendo adequado para contextos formais.'
      },
      {
        id: 720019,
        exercise_id: 72005,
        option_text: 'consequentemente',
        is_correct: false,
        explanation: '"Consequentemente" é formal, mas um tanto longo e pode deixar a frase carregada neste contexto.'
      },
      {
        id: 720020,
        exercise_id: 72005,
        option_text: 'assim sendo',
        is_correct: false,
        explanation: '"Assim sendo" é formal, mas "logo" é mais conciso e direto para a construção condicional da frase.'
      }
    ]
  },
  {
    id: 72006,
    category_id: 'conectivos-transicao',
    question: 'Para introduzir um argumento que se opõe ao anterior, qual conectivo é mais formal e enfático que "mas"?',
    explanation: 'Conectivos de oposição como "mas" podem ser substituídos por alternativas mais formais e enfáticas para melhorar a qualidade do texto.',
    difficulty: 1,
    options: [
      {
        id: 720021,
        exercise_id: 72006,
        option_text: 'e',
        is_correct: false,
        explanation: 'Incorreto. "E" é um conectivo aditivo, não adversativo.'
      },
      {
        id: 720022,
        exercise_id: 72006,
        option_text: 'pois',
        is_correct: false,
        explanation: 'Incorreto. "Pois" é explicativo ou conclusivo.'
      },
      {
        id: 720023,
        exercise_id: 72006,
        option_text: 'porém',
        is_correct: true,
        explanation: 'Correto! "Porém", assim como "contudo", "entretanto" e "todavia", são alternativas mais formais e enfáticas para expressar oposição, substituindo o "mas".'
      },
      {
        id: 720024,
        exercise_id: 72006,
        option_text: 'assim',
        is_correct: false,
        explanation: 'Incorreto. "Assim" é conclusivo ou exemplificativo.'
      }
    ]
  },
  {
    id: 72007,
    category_id: 'conectivos-transicao',
    question: 'Para adicionar uma ideia ou argumento que reforça o anterior, qual expressão de transição é mais elaborada que "também" ou "além disso"?',
    explanation: 'Expressões de adição como "também" podem ser substituídas por alternativas mais elaboradas e formais para enriquecer o texto.',
    difficulty: 1,
    options: [
      {
        id: 720025,
        exercise_id: 72007,
        option_text: 'ademais',
        is_correct: true,
        explanation: 'Correto! "Ademais" é um conectivo aditivo formal que significa "além disso", "outrossim", sendo uma alternativa mais sofisticada.'
      },
      {
        id: 720026,
        exercise_id: 72007,
        option_text: 'contudo',
        is_correct: false,
        explanation: 'Incorreto. "Contudo" é adversativo (oposição).'
      },
      {
        id: 720027,
        exercise_id: 72007,
        option_text: 'portanto',
        is_correct: false,
        explanation: 'Incorreto. "Portanto" é conclusivo.'
      },
      {
        id: 720028,
        exercise_id: 72007,
        option_text: 'embora',
        is_correct: false,
        explanation: 'Incorreto. "Embora" introduz uma concessão (ideia oposta que não impede a principal).'
      }
    ]
  },
  {
    id: 72008,
    category_id: 'conectivos-transicao',
    question: 'Para indicar uma relação de causa, qual conectivo pode substituir "porque" de forma mais formal, especialmente no início de uma frase ou após ponto final?',
    explanation: 'Conectivos causais como "porque" podem ser substituídos por alternativas mais formais em contextos acadêmicos ou profissionais.',
    difficulty: 1,
    options: [
      {
        id: 720029,
        exercise_id: 72008,
        option_text: 'conquanto',
        is_correct: false,
        explanation: 'Incorreto. "Conquanto" é concessivo (equivale a "embora").'
      },
      {
        id: 720030,
        exercise_id: 72008,
        option_text: 'visto que',
        is_correct: true,
        explanation: 'Correto! "Visto que", assim como "já que", "uma vez que", são locuções conjuntivas causais mais formais que "porque" em certas posições.'
      },
      {
        id: 720031,
        exercise_id: 72008,
        option_text: 'caso',
        is_correct: false,
        explanation: 'Incorreto. "Caso" introduz uma condição.'
      },
      {
        id: 720032,
        exercise_id: 72008,
        option_text: 'conforme',
        is_correct: false,
        explanation: 'Incorreto. "Conforme" introduz uma conformidade.'
      }
    ]
  },
  {
    id: 72009,
    category_id: 'conectivos-transicao',
    question: 'Ao iniciar um parágrafo que apresentará uma consequência do que foi dito anteriormente, qual expressão de transição é mais formal que "então" ou "por isso"?',
    explanation: 'Expressões de conclusão como "então" podem ser substituídas por alternativas mais formais para indicar consequência ou conclusão.',
    difficulty: 1,
    options: [
      {
        id: 720033,
        exercise_id: 72009,
        option_text: 'Em primeiro lugar',
        is_correct: false,
        explanation: 'Incorreto. Introduz o primeiro item de uma sequência.'
      },
      {
        id: 720034,
        exercise_id: 72009,
        option_text: 'Por outro lado',
        is_correct: false,
        explanation: 'Incorreto. Introduz uma oposição ou contraste.'
      },
      {
        id: 720035,
        exercise_id: 72009,
        option_text: 'Nesse sentido',
        is_correct: false,
        explanation: 'Incorreto. Indica uma continuação ou aprofundamento na mesma linha de raciocínio.'
      },
      {
        id: 720036,
        exercise_id: 72009,
        option_text: 'Em virtude disso',
        is_correct: true,
        explanation: 'Correto! "Em virtude disso", "Decorrente disso" ou "Por conseguinte" são formas mais formais de indicar consequência.'
      }
    ]
  },
  {
    id: 72010,
    category_id: 'conectivos-transicao',
    question: 'Para conectar ideias que se complementam ou seguem a mesma linha de raciocínio, qual conectivo demonstra uma ligação lógica mais fluida e formal que simplesmente iniciar uma nova frase?',
    explanation: 'Conectivos de adição são essenciais para criar coesão textual, e escolher os mais adequados pode melhorar significativamente a fluidez do texto.',
    difficulty: 1,
    options: [
      {
        id: 720037,
        exercise_id: 72010,
        option_text: 'Entretanto',
        is_correct: false,
        explanation: 'Incorreto. É um conectivo adversativo.'
      },
      {
        id: 720038,
        exercise_id: 72010,
        option_text: 'Outrossim',
        is_correct: true,
        explanation: 'Correto! "Outrossim" significa "igualmente", "também", "além disso", sendo um conectivo aditivo formal que liga ideias na mesma linha.'
      },
      {
        id: 720039,
        exercise_id: 72010,
        option_text: 'Todavia',
        is_correct: false,
        explanation: 'Incorreto. É um conectivo adversativo.'
      },
      {
        id: 720040,
        exercise_id: 72010,
        option_text: 'Ou seja',
        is_correct: false,
        explanation: 'Incorreto. Introduz uma explicação ou reformulação.'
      }
    ]
  }
];

// ---------- MÓDULO 4: Palavras Imprecisas ----------
export const palavrasImprecisasExercicio: Exercise[] = [
  {
    id: 73001,
    category_id: 'palavras-imprecisas',
    question: 'Qual é a melhor substituição para a palavra "coisa" na frase: "A coisa mais importante para o sucesso é a persistência"?',
    explanation: 'Palavras vagas como "coisa" devem ser evitadas em textos formais, sendo substituídas por termos mais precisos.',
    difficulty: 1,
    options: [
      {
        id: 730001,
        exercise_id: 73001,
        option_text: 'qualidade',
        is_correct: true,
        explanation: 'Correto! "Qualidade" é mais precisa e adequada para se referir a uma característica como a persistência.'
      },
      {
        id: 730002,
        exercise_id: 73001,
        option_text: 'elemento',
        is_correct: false,
        explanation: '"Elemento" é melhor que "coisa", mas ainda é um pouco vago neste contexto.'
      },
      {
        id: 730003,
        exercise_id: 73001,
        option_text: 'aspecto',
        is_correct: false,
        explanation: '"Aspecto" é uma boa opção, mas não é tão preciso quanto "qualidade" para este contexto.'
      },
      {
        id: 730004,
        exercise_id: 73001,
        option_text: 'parte',
        is_correct: false,
        explanation: '"Parte" sugere um componente de um todo, o que não se encaixa bem no contexto da frase.'
      }
    ]
  },
  {
    id: 73002,
    category_id: 'palavras-imprecisas',
    question: 'Na frase "O negócio da empresa é muito interessante", qual seria a melhor substituição para "interessante"?',
    explanation: 'Adjetivos vagos como "interessante" podem ser substituídos por termos mais precisos que transmitam melhor a qualidade específica.',
    difficulty: 1,
    options: [
      {
        id: 730005,
        exercise_id: 73002,
        option_text: 'promissor',
        is_correct: true,
        explanation: 'Correto! "Promissor" é mais preciso e transmite uma qualidade específica sobre o potencial do negócio.'
      },
      {
        id: 730006,
        exercise_id: 73002,
        option_text: 'atrativo',
        is_correct: false,
        explanation: '"Atrativo" é melhor que "interessante", mas não transmite o mesmo sentido de potencial futuro que "promissor".'
      },
      {
        id: 730007,
        exercise_id: 73002,
        option_text: 'curioso',
        is_correct: false,
        explanation: '"Curioso" pode ter uma conotação de estranheza, o que não é adequado para um contexto de negócios.'
      },
      {
        id: 730008,
        exercise_id: 73002,
        option_text: 'especial',
        is_correct: false,
        explanation: '"Especial" é ainda um termo vago que não comunica claramente as qualidades do negócio.'
      }
    ]
  },
  {
    id: 73003,
    category_id: 'palavras-imprecisas',
    question: 'Qual é a melhor substituição para "legal" na frase: "O filme que assistimos ontem foi muito legal"?',
    explanation: 'Adjetivos genéricos e informais como "legal" devem ser substituídos por termos mais precisos em textos formais.',
    difficulty: 1,
    options: [
      {
        id: 730009,
        exercise_id: 73003,
        option_text: 'cativante',
        is_correct: true,
        explanation: 'Correto! "Cativante" é mais formal e preciso para descrever um filme que prende a atenção.'
      },
      {
        id: 730010,
        exercise_id: 73003,
        option_text: 'bom',
        is_correct: false,
        explanation: '"Bom" é ainda muito genérico, não sendo uma melhoria significativa em relação a "legal".'
      },
      {
        id: 730011,
        exercise_id: 73003,
        option_text: 'agradável',
        is_correct: false,
        explanation: '"Agradável" é formal, mas pode não capturar o entusiasmo transmitido por "muito legal".'
      },
      {
        id: 730012,
        exercise_id: 73003,
        option_text: 'divertido',
        is_correct: false,
        explanation: '"Divertido" é melhor que "legal", mas é mais adequado para comédias, limitando o gênero do filme.'
      }
    ]
  },
  {
    id: 73004,
    category_id: 'palavras-imprecisas',
    question: 'Na frase "O palestrante falou sobre uma porção de assuntos diferentes", qual seria a melhor substituição para "porção de"?',
    explanation: 'Expressões vagas e coloquiais como "porção de" devem ser substituídas por quantificadores mais precisos ou formais.',
    difficulty: 1,
    options: [
      {
        id: 730013,
        exercise_id: 73004,
        option_text: 'diversos',
        is_correct: true,
        explanation: 'Correto! "Diversos" é mais formal e preciso para indicar variedade, sendo adequado para contextos acadêmicos.'
      },
      {
        id: 730014,
        exercise_id: 73004,
        option_text: 'vários',
        is_correct: false,
        explanation: '"Vários" é melhor que "porção de", mas "diversos" enfatiza melhor a variedade de assuntos.'
      },
      {
        id: 730015,
        exercise_id: 73004,
        option_text: 'muitos',
        is_correct: false,
        explanation: '"Muitos" enfatiza a quantidade, mas não necessariamente a diversidade dos assuntos.'
      },
      {
        id: 730016,
        exercise_id: 73004,
        option_text: 'inúmeros',
        is_correct: false,
        explanation: '"Inúmeros" pode exagerar a quantidade, o que pode não ser fiel u00e0 realidade da palestra.'
      }
    ]
  },
  {
    id: 73005,
    category_id: 'palavras-imprecisas',
    question: 'Qual é a melhor substituição para "ótimo" na frase: "O resultado do experimento foi ótimo"?',
    explanation: 'Adjetivos genéricos como "ótimo" podem ser substituídos por termos mais precisos que indiquem exatamente qual aspecto foi positivo.',
    difficulty: 1,
    options: [
      {
        id: 730017,
        exercise_id: 73005,
        option_text: 'conclusivo',
        is_correct: true,
        explanation: 'Correto! "Conclusivo" é mais preciso em um contexto científico, indicando que o experimento atingiu seu objetivo.'
      },
      {
        id: 730018,
        exercise_id: 73005,
        option_text: 'excelente',
        is_correct: false,
        explanation: '"Excelente" é apenas um sinônimo de "ótimo", não oferecendo maior precisão.'
      },
      {
        id: 730019,
        exercise_id: 73005,
        option_text: 'satisfatório',
        is_correct: false,
        explanation: '"Satisfatório" sugere um resultado apenas aceitável, o que é menos positivo que "ótimo".'
      },
      {
        id: 730020,
        exercise_id: 73005,
        option_text: 'ideal',
        is_correct: false,
        explanation: '"Ideal" sugere perfeição teórica, o que pode ser exagerado para um resultado experimental.'
      }
    ]
  }
];

// ---------- MÓDULO 5: Redução de Redundâncias ----------
export const reducaoRedundanciasExercicio: Exercise[] = [
  {
    id: 74001,
    category_id: 'reducao-redundancias',
    question: 'Qual expressão contém redundância e deve ser corrigida?',
    explanation: 'Redundâncias são expressões que repetem a mesma ideia de formas diferentes, tornando o texto verboso e menos elegante.',
    difficulty: 1,
    options: [
      {
        id: 740001,
        exercise_id: 74001,
        option_text: 'Subir para cima',
        is_correct: true,
        explanation: 'Correto! "Subir para cima" é redundante, pois "subir" já implica movimento para cima. O correto seria apenas "subir".'
      },
      {
        id: 740002,
        exercise_id: 74001,
        option_text: 'Entrar na sala',
        is_correct: false,
        explanation: '"Entrar na sala" não é redundante, pois especifica o local de entrada.'
      },
      {
        id: 740003,
        exercise_id: 74001,
        option_text: 'Planejar o futuro',
        is_correct: false,
        explanation: '"Planejar o futuro" não é redundante, pois o planejamento pode se referir a diferentes períodos temporais.'
      },
      {
        id: 740004,
        exercise_id: 74001,
        option_text: 'Concluir o trabalho',
        is_correct: false,
        explanation: '"Concluir o trabalho" não é redundante, pois especifica o que está sendo concluído.'
      }
    ]
  },
  {
    id: 74002,
    category_id: 'reducao-redundancias',
    question: 'Qual das seguintes frases contém uma redundância?',
    explanation: 'Identificar redundâncias é essencial para evitar a repetição de ideias e tornar o texto mais conciso.',
    difficulty: 1,
    options: [
      {
        id: 740005,
        exercise_id: 74002,
        option_text: 'Ele apresentou um fato verdadeiro sobre o caso.',
        is_correct: true,
        explanation: 'Correto! "Fato verdadeiro" é redundante, pois um fato, por definição, é verdadeiro. Bastaria dizer "Ele apresentou um fato sobre o caso".'
      },
      {
        id: 740006,
        exercise_id: 74002,
        option_text: 'A reunião foi adiada para a próxima semana.',
        is_correct: false,
        explanation: 'Esta frase não contém redundância, pois especifica quando a reunião foi adiada.'
      },
      {
        id: 740007,
        exercise_id: 74002,
        option_text: 'Os resultados foram melhores que o esperado.',
        is_correct: false,
        explanation: 'Esta frase não contém redundância, pois compara os resultados com uma expectativa.'
      },
      {
        id: 740008,
        exercise_id: 74002,
        option_text: 'Precisamos revisar o documento com atenção.',
        is_correct: false,
        explanation: 'Esta frase não contém redundância, pois "com atenção" especifica como a revisão deve ser feita.'
      }
    ]
  },
  {
    id: 74003,
    category_id: 'reducao-redundancias',
    question: 'Identifique a expressão que contém pleonasmo vicioso (redundância desnecessária):',
    explanation: 'Pleonasmos viciosos são redundâncias desnecessárias que prejudicam a clareza e concisão do texto.',
    difficulty: 1,
    options: [
      {
        id: 740009,
        exercise_id: 74003,
        option_text: 'Há anos atrás, a empresa era menor.',
        is_correct: true,
        explanation: 'Correto! "Há anos atrás" é redundante, pois "há anos" já indica tempo passado. O correto seria "Há anos" ou "Anos atrás".'
      },
      {
        id: 740010,
        exercise_id: 74003,
        option_text: 'A experiência durou duas horas completas.',
        is_correct: false,
        explanation: 'Esta frase não contém redundância, pois "completas" enfatiza que as duas horas foram integrais, sem interrupções.'
      },
      {
        id: 740011,
        exercise_id: 74003,
        option_text: 'Ele concordou com todas as propostas.',
        is_correct: false,
        explanation: 'Esta frase não contém redundância, pois informa sobre quais propostas houve concordância.'
      },
      {
        id: 740012,
        exercise_id: 74003,
        option_text: 'O artigo cita várias referências bibliográficas.',
        is_correct: false,
        explanation: 'Esta frase não contém redundância, pois "várias" quantifica as referências citadas.'
      }
    ]
  },
  {
    id: 74004,
    category_id: 'reducao-redundancias',
    question: 'Qual das seguintes expressões NÃO apresenta redundância?',
    explanation: 'Identificar expressões não redundantes é tão importante quanto reconhecer as redundantes.',
    difficulty: 1,
    options: [
      {
        id: 740013,
        exercise_id: 74004,
        option_text: 'Entrar para dentro',
        is_correct: false,
        explanation: 'Esta expressão é redundante, pois "entrar" já significa "ir para dentro".'
      },
      {
        id: 740014,
        exercise_id: 74004,
        option_text: 'Monopólio exclusivo',
        is_correct: false,
        explanation: 'Esta expressão é redundante, pois "monopólio" já significa "exclusividade de venda ou exploração".'
      },
      {
        id: 740015,
        exercise_id: 74004,
        option_text: 'Planejar antecipadamente',
        is_correct: false,
        explanation: 'Esta expressão é redundante, pois "planejar" já implica fazer algo antecipadamente.'
      },
      {
        id: 740016,
        exercise_id: 74004,
        option_text: 'Repetir novamente o experimento',
        is_correct: true,
        explanation: 'Correto! "Repetir novamente" é um exemplo clássico de redundância, pois "repetir" já significa "fazer novamente".'
      }
    ]
  },
  {
    id: 74005,
    category_id: 'reducao-redundancias',
    question: 'Identifique a frase que utiliza uma expressão redundante:',
    explanation: 'Expressões redundantes adicionam palavras desnecessárias ao texto, prejudicando sua clareza e objetividade.',
    difficulty: 1,
    options: [
      {
        id: 740017,
        exercise_id: 74005,
        option_text: 'Ele viu o acidente com seus próprios olhos.',
        is_correct: true,
        explanation: 'Correto! "Com seus próprios olhos" é redundante, pois se ele viu, obviamente foi com os olhos dele. Bastaria dizer "Ele viu o acidente".'
      },
      {
        id: 740018,
        exercise_id: 74005,
        option_text: 'A empresa exporta produtos para o exterior.',
        is_correct: false,
        explanation: 'Esta frase não é redundante! "Exportar" significa enviar produtos para o exterior, portanto há redundância. O correto seria apenas "A empresa exporta produtos".'
      },
      {
        id: 740019,
        exercise_id: 74005,
        option_text: 'Precisamos retroceder alguns passos.',
        is_correct: false,
        explanation: 'Esta frase não contém redundância, pois "alguns passos" quantifica o retrocesso.'
      },
      {
        id: 740020,
        exercise_id: 74005,
        option_text: 'O time avançou para as quartas de final.',
        is_correct: false,
        explanation: 'Esta frase não contém redundância, pois especifica para qual etapa o time avançou.'
      }
    ]
  }
];

// ---------- MÓDULO 6: Expressões Argumentativas ----------
export const expressoesArgumentativasExercicio: Exercise[] = [
  {
    id: 76001,
    category_id: 'expressoes-argumentativas',
    question: 'Para introduzir um ponto de vista ou argumento de forma assertiva, qual expressão é mais formal e direta que "Eu acho que..."?',
    explanation: 'Expressões que denotam opinião pessoal podem ser substituídas por formulações mais assertivas que apresentam o argumento como uma verdade incontestável.',
    difficulty: 1,
    options: [
      {
        id: 760001,
        exercise_id: 76001,
        option_text: 'Na minha opinião...',
        is_correct: false,
        explanation: 'Incorreto. Embora comum, ainda mantém um tom pessoal. "É inegável que" é mais assertivo.'
      },
      {
        id: 760002,
        exercise_id: 76001,
        option_text: 'Parece que...',
        is_correct: false,
        explanation: 'Incorreto. Expressa incerteza ou aparência, o oposto de assertividade.'
      },
      {
        id: 760003,
        exercise_id: 76001,
        option_text: 'É inegável que...',
        is_correct: true,
        explanation: 'Correto. Esta expressão introduz o argumento como um fato difícil de contestar, conferindo-lhe força e formalidade.'
      },
      {
        id: 760004,
        exercise_id: 76001,
        option_text: 'Talvez...',
        is_correct: false,
        explanation: 'Incorreto. Expressa dúvida, não assertividade.'
      }
    ]
  },
  {
    id: 76002,
    category_id: 'expressoes-argumentativas',
    question: 'Ao apresentar um exemplo para sustentar um argumento, qual expressão é mais formal que "Por exemplo..."?',
    explanation: 'A apresentação de exemplos pode ser feita de forma mais elaborada, demonstrando maior domínio da linguagem formal.',
    difficulty: 1,
    options: [
      {
        id: 760005,
        exercise_id: 76002,
        option_text: 'Tipo assim...',
        is_correct: false,
        explanation: 'Incorreto. É uma gíria extremamente informal.'
      },
      {
        id: 760006,
        exercise_id: 76002,
        option_text: 'Como...',
        is_correct: false,
        explanation: 'Incorreto. "Como" pode introduzir exemplos, mas "Ilustrativamente" é mais formal.'
      },
      {
        id: 760007,
        exercise_id: 76002,
        option_text: 'Ilustrativamente...',
        is_correct: true,
        explanation: 'Correto. "Ilustrativamente" ou "A título de exemplo" são formas mais formais e elaboradas para introduzir uma exemplificação que sustenta o argumento.'
      },
      {
        id: 760008,
        exercise_id: 76002,
        option_text: 'Que nem...',
        is_correct: false,
        explanation: 'Incorreto. É uma expressão coloquial e comparativa.'
      }
    ]
  },
  {
    id: 76003,
    category_id: 'expressoes-argumentativas',
    question: 'Para enfatizar a importância de um argumento ou ponto, qual expressão é mais sofisticada que "É muito importante..."?',
    explanation: 'A ênfase em argumentos pode ser feita de forma mais elaborada, demonstrando maior domínio da língua formal.',
    difficulty: 1,
    options: [
      {
        id: 760009,
        exercise_id: 76003,
        option_text: 'É legal que...',
        is_correct: false,
        explanation: 'Incorreto. Informal e vago.'
      },
      {
        id: 760010,
        exercise_id: 76003,
        option_text: 'É fundamental ressaltar que...',
        is_correct: true,
        explanation: 'Correto. "Fundamental ressaltar" ou "Cumpre salientar" são expressões formais que destacam a relevância do ponto a ser apresentado.'
      },
      {
        id: 760011,
        exercise_id: 76003,
        option_text: 'É bom lembrar que...',
        is_correct: false,
        explanation: 'Incorreto. Tom informal e menos enfático.'
      },
      {
        id: 760012,
        exercise_id: 76003,
        option_text: 'É chave que...',
        is_correct: false,
        explanation: 'Incorreto. "Chave" como adjetivo neste sentido é mais informal ou jargão.'
      }
    ]
  },
  {
    id: 76004,
    category_id: 'expressoes-argumentativas',
    question: 'Ao concordar com um ponto de vista, mas introduzindo uma ressalva, qual expressão conecta melhor as ideias que "Concordo, mas..."?',
    explanation: 'A concordância parcial pode ser expressa de forma mais elaborada, demonstrando maior sofisticação na argumentação.',
    difficulty: 1,
    options: [
      {
        id: 760013,
        exercise_id: 76004,
        option_text: 'Sim, porém...',
        is_correct: false,
        explanation: 'Incorreto. Similar a "Concordo, mas", não adiciona sofisticação.'
      },
      {
        id: 760014,
        exercise_id: 76004,
        option_text: 'Embora se reconheça que..., cumpre ponderar que...',
        is_correct: true,
        explanation: 'Correto. Esta estrutura concessiva ("Embora se reconheça...") seguida da ressalva ("cumpre ponderar que...") é formal e articula a concordância parcial de forma elaborada.'
      },
      {
        id: 760015,
        exercise_id: 76004,
        option_text: 'Beleza, só que...',
        is_correct: false,
        explanation: 'Incorreto. Extremamente informal.'
      },
      {
        id: 760016,
        exercise_id: 76004,
        option_text: 'De fato, entretanto...',
        is_correct: false,
        explanation: 'Incorreto. É uma opção válida, mas a estrutura com "Embora" é mais complexa e articulada para a situação.'
      }
    ]
  },
  {
    id: 76005,
    category_id: 'expressoes-argumentativas',
    question: 'Para indicar que um argumento é baseado em fontes ou evidências, qual expressão é mais formal que "Como vimos antes..." ou "Segundo Fulano..."?',
    explanation: 'A referência a fontes e evidências pode ser feita de forma mais elaborada em textos acadêmicos e formais.',
    difficulty: 1,
    options: [
      {
        id: 760017,
        exercise_id: 76005,
        option_text: 'Olhando o que passou...',
        is_correct: false,
        explanation: 'Incorreto. Informal e vago.'
      },
      {
        id: 760018,
        exercise_id: 76005,
        option_text: 'Conforme mencionado alhures...',
        is_correct: true,
        explanation: 'Correto. "Alhures" significa "em outro lugar" (no texto ou na obra), sendo uma forma erudita de se referir a informações já apresentadas.'
      },
      {
        id: 760019,
        exercise_id: 76005,
        option_text: 'O Zé falou que...',
        is_correct: false,
        explanation: 'Incorreto. Extremamente informal e impreciso.'
      },
      {
        id: 760020,
        exercise_id: 76005,
        option_text: 'Baseado no que li...',
        is_correct: false,
        explanation: 'Incorreto. Pessoal e informal.'
      }
    ]
  },
  {
    id: 76006,
    category_id: 'expressoes-argumentativas',
    question: 'Para apresentar uma conclusão lógica, qual expressão é mais formal que "Então..." ou "Por isso..."?',
    explanation: 'A apresentação de conclusões pode ser feita de forma mais elaborada, demonstrando maior sofisticação na argumentação.',
    difficulty: 1,
    options: [
      {
        id: 760021,
        exercise_id: 76006,
        option_text: 'Aí...',
        is_correct: false,
        explanation: 'Incorreto. Muito informal e coloquial.'
      },
      {
        id: 760022,
        exercise_id: 76006,
        option_text: 'Logo...',
        is_correct: true,
        explanation: 'Correto. "Logo", "Portanto" ou "Dessa forma" são conectivos conclusivos mais formais e adequados para textos acadêmicos e profissionais.'
      },
      {
        id: 760023,
        exercise_id: 76006,
        option_text: 'Tipo...',
        is_correct: false,
        explanation: 'Incorreto. Gíria inadequada para textos formais.'
      },
      {
        id: 760024,
        exercise_id: 76006,
        option_text: 'Daí...',
        is_correct: false,
        explanation: 'Incorreto. Informal e pouco adequado para textos formais.'
      }
    ]
  },
  {
    id: 76007,
    category_id: 'expressoes-argumentativas',
    question: 'Para expressar dúvida ou incerteza de forma sofisticada, qual expressão é mais adequada que "Acho que..."?',
    explanation: 'A expressão de dúvida pode ser feita de forma mais elaborada em contextos formais.',
    difficulty: 1,
    options: [
      {
        id: 760025,
        exercise_id: 76007,
        option_text: 'Sei lá...',
        is_correct: false,
        explanation: 'Incorreto. Extremamente informal e inadequado.'
      },
      {
        id: 760026,
        exercise_id: 76007,
        option_text: 'É possível que...',
        is_correct: true,
        explanation: 'Correto. "É possível que", "Cabe ponderar se" ou "Há indícios de que" são formas mais elaboradas de expressar dúvida ou possibilidade.'
      },
      {
        id: 760027,
        exercise_id: 76007,
        option_text: 'Acho que...',
        is_correct: false,
        explanation: 'Incorreto. Muito vago e informal.'
      },
      {
        id: 760028,
        exercise_id: 76007,
        option_text: 'De repente...',
        is_correct: false,
        explanation: 'Incorreto. Coloquial e impreciso.'
      }
    ]
  },
  {
    id: 76008,
    category_id: 'expressoes-argumentativas',
    question: 'Para contrapor ideias de forma sofisticada, qual expressão é mais adequada que "Mas..."?',
    explanation: 'A oposição de ideias pode ser feita de forma mais elaborada em textos formais.',
    difficulty: 1,
    options: [
      {
        id: 760029,
        exercise_id: 76008,
        option_text: 'Só que...',
        is_correct: false,
        explanation: 'Incorreto. Muito informal.'
      },
      {
        id: 760030,
        exercise_id: 76008,
        option_text: 'No entanto...',
        is_correct: true,
        explanation: 'Correto. "No entanto", "Contudo" ou "Todavia" são formas mais sofisticadas de contrapor ideias em textos formais.'
      },
      {
        id: 760031,
        exercise_id: 76008,
        option_text: 'Tipo...',
        is_correct: false,
        explanation: 'Incorreto. Gíria inadequada.'
      },
      {
        id: 760032,
        exercise_id: 76008,
        option_text: 'Aí...',
        is_correct: false,
        explanation: 'Incorreto. Informal e vago.'
      }
    ]
  },
  {
    id: 76009,
    category_id: 'expressoes-argumentativas',
    question: 'Para introduzir uma explicação, qual expressão é mais formal que "Porque..."?',
    explanation: 'A apresentação de explicações pode ser feita de forma mais elaborada em contextos formais.',
    difficulty: 1,
    options: [
      {
        id: 760033,
        exercise_id: 76009,
        option_text: 'Tipo assim...',
        is_correct: false,
        explanation: 'Incorreto. Muito informal.'
      },
      {
        id: 760034,
        exercise_id: 76009,
        option_text: 'Visto que...',
        is_correct: true,
        explanation: 'Correto. "Visto que", "Uma vez que" ou "Tendo em vista que" são formas mais formais de introduzir uma explicação.'
      },
      {
        id: 760035,
        exercise_id: 76009,
        option_text: 'Por causa que...',
        is_correct: false,
        explanation: 'Incorreto. Construção coloquial e incorreta.'
      },
      {
        id: 760036,
        exercise_id: 76009,
        option_text: 'Tipo...',
        is_correct: false,
        explanation: 'Incorreto. Gíria inadequada.'
      }
    ]
  },
  {
    id: 76010,
    category_id: 'expressoes-argumentativas',
    question: 'Para finalizar um argumento de forma impactante, qual expressão é mais adequada que "É isso"?',
    explanation: 'A finalização de argumentos pode ser feita de forma mais elaborada e impactante.',
    difficulty: 1,
    options: [
      {
        id: 760037,
        exercise_id: 76010,
        option_text: 'É isso aí...',
        is_correct: false,
        explanation: 'Incorreto. Muito informal.'
      },
      {
        id: 760038,
        exercise_id: 76010,
        option_text: 'Em síntese...',
        is_correct: true,
        explanation: 'Correto. "Em síntese", "Em resumo" ou "Portanto" são formas mais formais e impactantes de finalizar um argumento.'
      },
      {
        id: 760039,
        exercise_id: 76010,
        option_text: 'Pronto...',
        is_correct: false,
        explanation: 'Incorreto. Informal e pouco adequado.'
      },
      {
        id: 760040,
        exercise_id: 76010,
        option_text: 'Acabou...',
        is_correct: false,
        explanation: 'Incorreto. Informal e pouco adequado para textos formais.'
      }
    ]
  }
];

// ---------- MÓDULO 7: Prova Final ----------
export const provaFinalPalavrasRepetitivasExercicio: Exercise[] = [
  {
    id: 75001,
    category_id: 'prova-final-palavras-repetitivas',
    question: 'Qual é a melhor substituição para a palavra "grande" na frase: "A empresa fez um grande investimento em tecnologia"?',
    explanation: 'Adjetivos genéricos como "grande" podem ser substituídos por termos mais precisos que transmitam melhor a dimensão específica.',
    difficulty: 2,
    options: [
      {
        id: 750001,
        exercise_id: 75001,
        option_text: 'vultoso',
        is_correct: true,
        explanation: 'Correto! "Vultoso" é mais preciso e formal para descrever um investimento de valor elevado.'
      },
      {
        id: 750002,
        exercise_id: 75001,
        option_text: 'imenso',
        is_correct: false,
        explanation: '"Imenso" é mais enfático que "grande", mas ainda é genérico e pode soar exagerado.'
      },
      {
        id: 750003,
        exercise_id: 75001,
        option_text: 'considerável',
        is_correct: false,
        explanation: '"Considerável" é uma boa opção, mas menos específica que "vultoso" para contextos financeiros.'
      },
      {
        id: 750004,
        exercise_id: 75001,
        option_text: 'notável',
        is_correct: false,
        explanation: '"Notável" enfatiza mais a qualidade ou relevância do que o tamanho ou valor do investimento.'
      }
    ]
  },
  {
    id: 75002,
    category_id: 'prova-final-palavras-repetitivas',
    question: 'Qual das seguintes frases contém uma redundância que deve ser eliminada?',
    explanation: 'Redundâncias prejudicam a concisão e clareza do texto, devendo ser identificadas e eliminadas.',
    difficulty: 2,
    options: [
      {
        id: 750005,
        exercise_id: 75002,
        option_text: 'O diretor acabou de inaugurar uma nova filial.',
        is_correct: true,
        explanation: 'Correto! "Inaugurar uma nova filial" é redundante, pois algo que é inaugurado é necessariamente novo. Bastaria dizer "inaugurar uma filial".'
      },
      {
        id: 750006,
        exercise_id: 75002,
        option_text: 'Você pode escolher entre três opções diferentes.',
        is_correct: false,
        explanation: 'Esta frase não é redundante, pois "diferentes" enfatiza que as opções são distintas entre si, o que nem sempre é óbvio.'
      },
      {
        id: 750007,
        exercise_id: 75002,
        option_text: 'A equipe vai se reunir mensalmente.',
        is_correct: false,
        explanation: 'Esta frase não contém redundância, pois especifica a frequência das reuniões.'
      },
      {
        id: 750008,
        exercise_id: 75002,
        option_text: 'O projeto será concluído em dezembro.',
        is_correct: false,
        explanation: 'Esta frase não contém redundância, pois especifica quando o projeto será concluído.'
      }
    ]
  },
  {
    id: 75003,
    category_id: 'prova-final-palavras-repetitivas',
    question: 'Qual é a melhor substituição para o verbo "colocar" na frase: "O professor colocou muitas questões na prova"?',
    explanation: 'Verbos genéricos como "colocar" podem ser substituídos por verbos mais precisos que transmitam melhor a ação específica.',
    difficulty: 2,
    options: [
      {
        id: 750009,
        exercise_id: 75003,
        option_text: 'inseriu',
        is_correct: false,
        explanation: '"Inserir" é mais adequado para a inclusão de itens específicos em um contexto já existente, não para a elaboração de uma prova.'
      },
      {
        id: 750010,
        exercise_id: 75003,
        option_text: 'incluiu',
        is_correct: false,
        explanation: '"Incluir" é melhor que "colocar", mas ainda não é o termo mais preciso para o contexto de elaboração de provas.'
      },
      {
        id: 750011,
        exercise_id: 75003,
        option_text: 'elaborou',
        is_correct: true,
        explanation: 'Correto! "Elaborar" é o termo técnico mais adequado para se referir u00e0 criação de questões em uma prova.'
      },
      {
        id: 750012,
        exercise_id: 75003,
        option_text: 'adicionou',
        is_correct: false,
        explanation: '"Adicionar" sugere acrescentar algo a um conjunto já existente, não sendo o mais adequado para a criação inicial de uma prova.'
      }
    ]
  },
  {
    id: 75004,
    category_id: 'prova-final-palavras-repetitivas',
    question: 'Na frase "A reunião foi cancelada, mas ninguém avisou a equipe", qual seria a melhor substituição para "mas"?',
    explanation: 'Conjunções adversativas como "mas" podem ser substituídas por opções mais formais em textos escritos.',
    difficulty: 2,
    options: [
      {
        id: 750013,
        exercise_id: 75004,
        option_text: 'contudo',
        is_correct: false,
        explanation: '"Contudo" é formal, mas "no entanto" é mais enfático para destacar a contradição entre o cancelamento e a falta de aviso.'
      },
      {
        id: 750014,
        exercise_id: 75004,
        option_text: 'no entanto',
        is_correct: true,
        explanation: 'Correto! "No entanto" é mais formal e enfático, destacando melhor a contradição na situação descrita.'
      },
      {
        id: 750015,
        exercise_id: 75004,
        option_text: 'porém',
        is_correct: false,
        explanation: '"Porém" é adequado, mas não representa uma elevação significativa de formalidade em relação a "mas".'
      },
      {
        id: 750016,
        exercise_id: 75004,
        option_text: 'todavia',
        is_correct: false,
        explanation: '"Todavia" é formal, mas menos comum no uso cotidiano que "no entanto", podendo soar artificial neste contexto.'
      }
    ]
  },
  {
    id: 75005,
    category_id: 'prova-final-palavras-repetitivas',
    question: 'Qual das seguintes expressões contém redundância?',
    explanation: 'Identificar redundâncias é fundamental para evitar a repetição desnecessária de ideias no texto.',
    difficulty: 2,
    options: [
      {
        id: 750017,
        exercise_id: 75005,
        option_text: 'Continuar persistindo',
        is_correct: true,
        explanation: 'Correto! "Continuar persistindo" é redundante, pois persistir já implica continuidade. Bastaria dizer "persistir" ou "continuar".'
      },
      {
        id: 750018,
        exercise_id: 75005,
        option_text: 'Planejamento estratégico',
        is_correct: false,
        explanation: 'Esta expressão não é redundante, pois "estratégico" especifica o tipo de planejamento.'
      },
      {
        id: 750019,
        exercise_id: 75005,
        option_text: 'Medidas preventivas',
        is_correct: false,
        explanation: 'Esta expressão não é redundante, pois "preventivas" especifica o tipo de medidas.'
      },
      {
        id: 750020,
        exercise_id: 75005,
        option_text: 'Avanços progressivos',
        is_correct: false,
        explanation: 'Esta expressão não é redundante, pois os avanços podem ser abruptos ou progressivos, sendo este um qualificador relevante.'
      }
    ]
  },
  {
    id: 75006,
    category_id: 'prova-final-palavras-repetitivas',
    question: 'Qual é a melhor substituição para a palavra "coisa" na frase: "A primeira coisa a fazer é verificar os dados"?',
    explanation: 'Palavras vagas como "coisa" devem ser substituídas por termos mais precisos em textos formais.',
    difficulty: 2,
    options: [
      {
        id: 750021,
        exercise_id: 75006,
        option_text: 'tarefa',
        is_correct: false,
        explanation: '"Tarefa" é uma boa opção, mas não é a mais adequada para o contexto de uma sequência de ações.'
      },
      {
        id: 750022,
        exercise_id: 75006,
        option_text: 'ação',
        is_correct: false,
        explanation: '"Ação" é melhor que "coisa", mas ainda não é a opção mais precisa neste contexto.'
      },
      {
        id: 750023,
        exercise_id: 75006,
        option_text: 'etapa',
        is_correct: true,
        explanation: 'Correto! "Etapa" é mais precisa para se referir a um passo dentro de um processo ou sequência.'
      },
      {
        id: 750024,
        exercise_id: 75006,
        option_text: 'medida',
        is_correct: false,
        explanation: '"Medida" sugere uma ação tomada em resposta a um problema, o que não é necessariamente o caso nesta frase.'
      }
    ]
  },
  {
    id: 75007,
    category_id: 'prova-final-palavras-repetitivas',
    question: 'Na frase "A pesquisa mostrou resultados positivos", qual seria a melhor substituição para "positivos"?',
    explanation: 'Adjetivos vagos como "positivo" podem ser substituídos por termos mais precisos que indiquem exatamente qual aspecto foi satisfatório.',
    difficulty: 2,
    options: [
      {
        id: 750025,
        exercise_id: 75007,
        option_text: 'favoráveis',
        is_correct: false,
        explanation: '"Favoráveis" é similar a "positivos" e não oferece maior precisão.'
      },
      {
        id: 750026,
        exercise_id: 75007,
        option_text: 'animadores',
        is_correct: false,
        explanation: '"Animadores" adiciona uma conotação emocional que pode não ser apropriada para um contexto científico.'
      },
      {
        id: 750027,
        exercise_id: 75007,
        option_text: 'satisfatórios',
        is_correct: false,
        explanation: '"Satisfatórios" indica apenas que os resultados atingiram o mínimo esperado, sem destacar sua relevância.'
      },
      {
        id: 750028,
        exercise_id: 75007,
        option_text: 'promissores',
        is_correct: true,
        explanation: 'Correto! "Promissores" é mais preciso, indicando que os resultados não só foram bons, mas sugerem desenvolvimento futuro.'
      }
    ]
  },
  {
    id: 75008,
    category_id: 'prova-final-palavras-repetitivas',
    question: 'Qual das seguintes expressões NÃO contém redundância?',
    explanation: 'Identificar expressões não redundantes é importante para distinguir entre repetições desnecessárias e qualificadores válidos.',
    difficulty: 2,
    options: [
      {
        id: 750029,
        exercise_id: 75008,
        option_text: 'Surpresa inesperada',
        is_correct: false,
        explanation: 'Esta expressão é redundante, pois uma surpresa é, por definição, inesperada.'
      },
      {
        id: 750030,
        exercise_id: 75008,
        option_text: 'Certeza absoluta',
        is_correct: false,
        explanation: 'Esta expressão é redundante, pois a certeza já implica ser absoluta.'
      },
      {
        id: 750031,
        exercise_id: 75008,
        option_text: 'Erro evitável',
        is_correct: true,
        explanation: 'Correto! Esta expressão não é redundante, pois "evitável" qualifica o tipo de erro, já que existem erros inevitáveis.'
      },
      {
        id: 750032,
        exercise_id: 75008,
        option_text: 'Planejar antecipadamente',
        is_correct: false,
        explanation: 'Esta expressão é redundante, pois planejar já significa fazer algo antecipadamente.'
      }
    ]
  },
  {
    id: 75009,
    category_id: 'prova-final-palavras-repetitivas',
    question: 'Qual é a melhor substituição para o conectivo "então" na frase: "Ele estudou muito, então passou no exame"?',
    explanation: 'Conectivos conclusivos como "então" podem ser substituídos por opções mais formais em textos acadêmicos.',
    difficulty: 2,
    options: [
      {
        id: 750033,
        exercise_id: 75009,
        option_text: 'logo',
        is_correct: false,
        explanation: '"Logo" é formal, mas não é a opção mais precisa para estabelecer uma relação de causa e consequência neste contexto.'
      },
      {
        id: 750034,
        exercise_id: 75009,
        option_text: 'consequentemente',
        is_correct: true,
        explanation: 'Correto! "Consequentemente" é mais formal e preciso para estabelecer uma relação de causa e consequência.'
      },
      {
        id: 750035,
        exercise_id: 75009,
        option_text: 'por isso',
        is_correct: false,
        explanation: '"Por isso" é adequado, mas não representa uma elevação significativa de formalidade em relação a "então".'
      },
      {
        id: 750036,
        exercise_id: 75009,
        option_text: 'assim',
        is_correct: false,
        explanation: '"Assim" pode ser ambiguo, podendo indicar modo ou consequência, não sendo a opção mais precisa.'
      }
    ]
  },
  {
    id: 75010,
    category_id: 'prova-final-palavras-repetitivas',
    question: 'Qual é a melhor substituição para o verbo "pegar" na frase: "O aluno pegou o livro na biblioteca"?',
    explanation: 'Verbos coloquiais como "pegar" podem ser substituídos por verbos mais precisos e formais em textos escritos.',
    difficulty: 2,
    options: [
      {
        id: 750037,
        exercise_id: 75010,
        option_text: 'obteve',
        is_correct: false,
        explanation: '"Obter" sugere adquirir algo permanentemente, o que não é o caso de um empréstimo em biblioteca.'
      },
      {
        id: 750038,
        exercise_id: 75010,
        option_text: 'retirou',
        is_correct: true,
        explanation: 'Correto! "Retirar" é o termo técnico mais adequado para se referir ao empréstimo de livros em biblioteca.'
      },
      {
        id: 750039,
        exercise_id: 75010,
        option_text: 'adquiriu',
        is_correct: false,
        explanation: '"Adquirir" sugere compra ou posse permanente, não sendo adequado para um empréstimo temporário.'
      },
      {
        id: 750040,
        exercise_id: 75010,
        option_text: 'coletou',
        is_correct: false,
        explanation: '"Coletar" sugere reunir múltiplos itens, não sendo adequado para a ação de pegar um único livro.'
      }
    ]
  },
  {
    id: 75011,
    category_id: 'prova-final-palavras-repetitivas',
    question: 'Qual é a melhor substituição para a palavra "bonito" na frase: "O jardim da casa é muito bonito"?',
    explanation: 'Adjetivos genéricos como "bonito" podem ser substituídos por termos mais precisos que descrevam melhor a qualidade específica.',
    difficulty: 2,
    options: [
      {
        id: 750041,
        exercise_id: 75011,
        option_text: 'deslumbrante',
        is_correct: true,
        explanation: 'Correto! "Deslumbrante" é mais descritivo e específico para se referir a um jardim visualmente impressionante.'
      },
      {
        id: 750042,
        exercise_id: 75011,
        option_text: 'agradável',
        is_correct: false,
        explanation: '"Agradável" sugere mais uma sensação ou experiência do que uma qualidade visual.'
      },
      {
        id: 750043,
        exercise_id: 75011,
        option_text: 'atraente',
        is_correct: false,
        explanation: '"Atraente" é melhor que "bonito", mas menos específico que "deslumbrante" para descrever um jardim.'
      },
      {
        id: 750044,
        exercise_id: 75011,
        option_text: 'lindo',
        is_correct: false,
        explanation: '"Lindo" é apenas um sinônimo mais enfático de "bonito", sem adicionar precisão descritiva.'
      }
    ]
  },
  {
    id: 75012,
    category_id: 'prova-final-palavras-repetitivas',
    question: 'Qual expressão abaixo contém redundância?',
    explanation: 'Redundâncias devem ser evitadas em textos formais para garantir concisão e clareza.',
    difficulty: 2,
    options: [
      {
        id: 750045,
        exercise_id: 75012,
        option_text: 'Progredir gradualmente',
        is_correct: false,
        explanation: 'Esta expressão não é redundante, pois é possível progredir de forma abrupta ou gradual.'
      },
      {
        id: 750046,
        exercise_id: 75012,
        option_text: 'Gritar alto',
        is_correct: true,
        explanation: 'Correto! "Gritar alto" é redundante, pois gritar já implica produzir um som alto. Bastaria dizer "gritar".'
      },
      {
        id: 750047,
        exercise_id: 75012,
        option_text: 'Convidado especial',
        is_correct: false,
        explanation: 'Esta expressão não é redundante, pois "especial" qualifica o tipo de convidado, diferenciando-o de convidados comuns.'
      },
      {
        id: 750048,
        exercise_id: 75012,
        option_text: 'Resultado final',
        is_correct: false,
        explanation: 'Esta expressão não é redundante, pois podem existir resultados parciais ou preliminares, sendo importante especificar que se trata do resultado final.'
      }
    ]
  },
  {
    id: 75013,
    category_id: 'prova-final-palavras-repetitivas',
    question: 'Qual é a melhor substituição para "fez" na frase: "O cientista fez uma descoberta importante"?',
    explanation: 'O verbo "fazer" é muito genérico e pode ser substituído por verbos mais precisos que transmitam melhor a ação específica.',
    difficulty: 2,
    options: [
      {
        id: 750049,
        exercise_id: 75013,
        option_text: 'realizou',
        is_correct: false,
        explanation: '"Realizar" é melhor que "fazer", mas ainda não é o termo mais preciso para o contexto científico.'
      },
      {
        id: 750050,
        exercise_id: 75013,
        option_text: 'alcançou',
        is_correct: false,
        explanation: '"Alcançar" sugere atingir um objetivo, mas não captura bem o ato de descobrir algo novo.'
      },
      {
        id: 750051,
        exercise_id: 75013,
        option_text: 'efetuou',
        is_correct: false,
        explanation: '"Efetuar" é mais adequado para a execução de tarefas planejadas, não para descobertas.'
      },
      {
        id: 750052,
        exercise_id: 75013,
        option_text: 'obteve',
        is_correct: true,
        explanation: 'Correto! "Obter" é mais preciso para se referir a conquistar ou conseguir algo como resultado de um esforço, como uma descoberta científica.'
      }
    ]
  },
  {
    id: 75014,
    category_id: 'prova-final-palavras-repetitivas',
    question: 'Na frase "Os alunos finalmente entenderam o assunto", qual seria a melhor substituição para "entenderam"?',
    explanation: 'Verbos comuns como "entender" podem ser substituídos por verbos mais precisos que indiquem o grau ou tipo de compreensão.',
    difficulty: 2,
    options: [
      {
        id: 750053,
        exercise_id: 75014,
        option_text: 'assimilaram',
        is_correct: true,
        explanation: 'Correto! "Assimilar" sugere uma compreensão mais profunda e integração do conhecimento.'
      },
      {
        id: 750054,
        exercise_id: 75014,
        option_text: 'captaram',
        is_correct: false,
        explanation: '"Captar" sugere uma compreensão mais superficial ou parcial do que "assimilar".'
      },
      {
        id: 750055,
        exercise_id: 75014,
        option_text: 'perceberam',
        is_correct: false,
        explanation: '"Perceber" sugere mais o ato de notar algo do que compreender profundamente.'
      },
      {
        id: 750056,
        exercise_id: 75014,
        option_text: 'notaram',
        is_correct: false,
        explanation: '"Notar" é ainda mais superficial que "perceber", indicando apenas o reconhecimento da existência de algo.'
      }
    ]
  },
  {
    id: 75015,
    category_id: 'prova-final-palavras-repetitivas',
    question: 'Qual é a melhor substituição para a expressão "de forma rápida" na frase: "O problema foi resolvido de forma rápida"?',
    explanation: 'Expressões adverbiais podem frequentemente ser substituídas por advérbios únicos, tornando o texto mais conciso.',
    difficulty: 2,
    options: [
      {
        id: 750057,
        exercise_id: 75015,
        option_text: 'rapidamente',
        is_correct: true,
        explanation: 'Correto! "Rapidamente" é mais conciso que "de forma rápida", mantendo o mesmo significado.'
      },
      {
        id: 750058,
        exercise_id: 75015,
        option_text: 'de modo célere',
        is_correct: false,
        explanation: '"De modo célere" é mais formal, mas ainda é uma locução adverbial, não sendo mais concisa que a expressão original.'
      },
      {
        id: 750059,
        exercise_id: 75015,
        option_text: 'sem demora',
        is_correct: false,
        explanation: '"Sem demora" é uma locução adverbial assim como "de forma rápida", não oferecendo maior concisão.'
      },
      {
        id: 750060,
        exercise_id: 75015,
        option_text: 'velozmente',
        is_correct: false,
        explanation: '"Velozmente" é conciso, mas altera ligeiramente o sentido, já que "velocidade" e "rapidez" têm nuanças diferentes.'
      }
    ]
  },
  {
    id: 75016,
    category_id: 'prova-final-palavras-repetitivas',
    question: 'Na frase "A empresa tomou uma decisão importante naquele momento", qual é a melhor substituição para "tomou uma decisão"?',
    explanation: 'Expressões verbais complexas podem muitas vezes ser substituídas por um único verbo, tornando o texto mais direto.',
    difficulty: 2,
    options: [
      {
        id: 750061,
        exercise_id: 75016,
        option_text: 'definiu',
        is_correct: false,
        explanation: '"Definir" não transmite necessariamente o mesmo sentido de deliberação que "tomar uma decisão".'
      },
      {
        id: 750062,
        exercise_id: 75016,
        option_text: 'determinou',
        is_correct: false,
        explanation: '"Determinar" sugere imposição ou estabelecimento de regras, mais que uma decisão deliberativa.'
      },
      {
        id: 750063,
        exercise_id: 75016,
        option_text: 'decidiu',
        is_correct: true,
        explanation: 'Correto! "Decidiu" é mais conciso que "tomou uma decisão" e transmite exatamente o mesmo significado.'
      },
      {
        id: 750064,
        exercise_id: 75016,
        option_text: 'escolheu',
        is_correct: false,
        explanation: '"Escolher" enfatiza a seleção entre opções, não capturando todo o processo deliberativo de uma decisão.'
      }
    ]
  },
  {
    id: 75017,
    category_id: 'prova-final-palavras-repetitivas',
    question: 'Qual das seguintes frases contém uma redundância?',
    explanation: 'Identificar e corrigir redundâncias é fundamental para tornar o texto mais claro e objetivo.',
    difficulty: 2,
    options: [
      {
        id: 750065,
        exercise_id: 75017,
        option_text: 'Ele voltou a repetir o mesmo erro.',
        is_correct: true,
        explanation: 'Correto! "Voltou a repetir" é redundante, pois "repetir" já significa "fazer novamente". Bastaria dizer "Ele repetiu o mesmo erro".'
      },
      {
        id: 750066,
        exercise_id: 75017,
        option_text: 'A empresa decidiu expandir seus negócios.',
        is_correct: false,
        explanation: 'Esta frase não contém redundância, pois todos os termos são necessários para transmitir a mensagem completa.'
      },
      {
        id: 750067,
        exercise_id: 75017,
        option_text: 'A reunião foi remarcada para amanhã.',
        is_correct: false,
        explanation: 'Esta frase não contém redundância, pois "remarcada" indica que houve uma mudança de data e "para amanhã" especifica a nova data.'
      },
      {
        id: 750068,
        exercise_id: 75017,
        option_text: 'Precisamos monitorar constantemente a situação.',
        is_correct: false,
        explanation: 'Esta frase não contém redundância, pois "constantemente" especifica a frequência do monitoramento.'
      }
    ]
  },
  {
    id: 75018,
    category_id: 'prova-final-palavras-repetitivas',
    question: 'Qual é a melhor substituição para a palavra "bom" na frase: "Ele é um bom profissional"?',
    explanation: 'Adjetivos genéricos como "bom" podem ser substituídos por termos mais precisos que descrevam melhor as qualidades específicas.',
    difficulty: 2,
    options: [
      {
        id: 750069,
        exercise_id: 75018,
        option_text: 'competente',
        is_correct: true,
        explanation: 'Correto! "Competente" é mais preciso, indicando habilidade e capacidade profissional.'
      },
      {
        id: 750070,
        exercise_id: 75018,
        option_text: 'excelente',
        is_correct: false,
        explanation: '"Excelente" é mais intenso que "bom", alterando o grau de qualificação, não apenas a precisão.'
      },
      {
        id: 750071,
        exercise_id: 75018,
        option_text: 'adequado',
        is_correct: false,
        explanation: '"Adequado" sugere apenas conformidade com o mínimo esperado, sendo menos positivo que "bom".'
      },
      {
        id: 750072,
        exercise_id: 75018,
        option_text: 'ótimo',
        is_correct: false,
        explanation: '"Ótimo" é mais intenso que "bom", alterando o grau de qualificação, não apenas a precisão.'
      }
    ]
  },
  {
    id: 75019,
    category_id: 'prova-final-palavras-repetitivas',
    question: 'Qual é a melhor substituição para "atualmente" na frase: "Atualmente, muitas empresas investem em tecnologia"?',
    explanation: 'Advérbios temporais como "atualmente" podem ser substituídos por expressões mais precisas ou formais.',
    difficulty: 2,
    options: [
      {
        id: 750073,
        exercise_id: 75019,
        option_text: 'nos dias atuais',
        is_correct: false,
        explanation: '"Nos dias atuais" é uma locução mais longa que "atualmente", não oferecendo maior concisão ou precisão.'
      },
      {
        id: 750074,
        exercise_id: 75019,
        option_text: 'hoje em dia',
        is_correct: false,
        explanation: '"Hoje em dia" é uma expressão coloquial, não sendo mais formal que "atualmente".'
      },
      {
        id: 750075,
        exercise_id: 75019,
        option_text: 'contemporaneamente',
        is_correct: true,
        explanation: 'Correto! "Contemporaneamente" é mais formal e preciso que "atualmente", sendo adequado para textos acadêmicos ou oficiais.'
      },
      {
        id: 750076,
        exercise_id: 75019,
        option_text: 'no momento',
        is_correct: false,
        explanation: '"No momento" sugere um período mais breve e específico que "atualmente", alterando sutilmente o sentido temporal.'
      }
    ]
  },
  {
    id: 75020,
    category_id: 'prova-final-palavras-repetitivas',
    question: 'Qual das seguintes expressões contém pleonasmo vicioso?',
    explanation: 'Pleonasmos viciosos são redundâncias desnecessárias que prejudicam a clareza e elegancia do texto.',
    difficulty: 2,
    options: [
      {
        id: 750077,
        exercise_id: 75020,
        option_text: 'Encarar de frente',
        is_correct: true,
        explanation: 'Correto! "Encarar de frente" é redundante, pois "encarar" já significa "olhar de frente". Bastaria dizer "encarar".'
      },
      {
        id: 750078,
        exercise_id: 75020,
        option_text: 'Colaborar mutuamente',
        is_correct: false,
        explanation: 'Esta expressão não é redundante, pois é possível colaborar de maneira unilateral, sendo válido especificar que a colaboração é mútua.'
      },
      {
        id: 750079,
        exercise_id: 75020,
        option_text: 'Certeza absoluta',
        is_correct: false,
        explanation: 'Esta expressão é redundante, pois a certeza já implica ser absoluta. No entanto, há uma opção mais claramente redundante entre as alternativas.'
      },
      {
        id: 750080,
        exercise_id: 75020,
        option_text: 'Planejamento futuro',
        is_correct: false,
        explanation: 'Esta expressão é redundante, pois planejamento já é voltado para o futuro. No entanto, há uma opção mais claramente redundante entre as alternativas.'
      }
    ]
  }
];
