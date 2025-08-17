import { Exercise } from './exerciseService';

//==============================================================================
//==============================================================================
//                        CONCLUSÕES DE REDAÇÃO
//==============================================================================
//==============================================================================

// ---------- MÓDULO 5: Conclusões de Redação ----------
export const conclusoesRedacaoExercicio: Exercise[] = [
  {
    id: 77001,
    category_id: 'conclusoes-redacao',
    question: 'Qual das seguintes expressões é mais adequada para iniciar o parágrafo conclusivo de uma redação dissertativa-argumentativa?',
    explanation: 'O parágrafo conclusivo deve retomar de forma sintética os principais pontos abordados e apresentar um fechamento coerente.',
    difficulty: 2,
    options: [
      {
        id: 770001,
        exercise_id: 77001,
        option_text: 'Diante do exposto',
        is_correct: true,
        explanation: 'Correto! "Diante do exposto" é uma expressão formal que indica que a conclusão está baseada nos argumentos anteriormente apresentados.'
      },
      {
        id: 770002,
        exercise_id: 77001,
        option_text: 'Como dito anteriormente',
        is_correct: false,
        explanation: '"Como dito anteriormente" é uma expressão que geralmente introduz uma repetição ou ênfase, não sendo ideal para iniciar uma conclusão.'
      },
      {
        id: 770003,
        exercise_id: 77001,
        option_text: 'Apesar disso',
        is_correct: false,
        explanation: '"Apesar disso" é usado para introduzir uma ressalva ou contraste, não sendo adequado para iniciar uma conclusão que deve sintetizar os argumentos.'
      },
      {
        id: 770004,
        exercise_id: 77001,
        option_text: 'Primeiramente',
        is_correct: false,
        explanation: '"Primeiramente" é usado para iniciar uma sequência ou enumerar pontos, não sendo adequado para um parágrafo conclusivo.'
      }
    ]
  },
  {
    id: 77002,
    category_id: 'conclusoes-redacao',
    question: 'Qual expressão é mais adequada para apresentar uma proposta de intervenção na conclusão de uma redação?',
    explanation: 'Uma boa conclusão de redação dissertativa-argumentativa geralmente inclui uma proposta de intervenção para o problema discutido.',
    difficulty: 2,
    options: [
      {
        id: 770005,
        exercise_id: 77002,
        option_text: 'Conclui-se, portanto',
        is_correct: false,
        explanation: '"Conclui-se, portanto" é uma expressão que indica a finalização do raciocínio, não sendo específica para introduzir uma proposta de intervenção.'
      },
      {
        id: 770006,
        exercise_id: 77002,
        option_text: 'Torna-se imperativo, assim',
        is_correct: true,
        explanation: 'Correto! "Torna-se imperativo, assim" é uma expressão que enfatiza a necessidade e a importância da proposta de intervenção que será apresentada.'
      },
      {
        id: 770007,
        exercise_id: 77002,
        option_text: 'Em virtude dos fatos mencionados',
        is_correct: false,
        explanation: '"Em virtude dos fatos mencionados" é uma expressão que estabelece uma relação com os argumentos anteriores, mas não é específica para introduzir uma proposta de intervenção.'
      },
      {
        id: 770008,
        exercise_id: 77002,
        option_text: 'Indubitavelmente',
        is_correct: false,
        explanation: '"Indubitavelmente" é um advérbio que expressa certeza, mas não é adequado para introduzir uma proposta de intervenção.'
      }
    ]
  },
  {
    id: 77003,
    category_id: 'conclusoes-redacao',
    question: 'Qual das seguintes frases representa a melhor forma de concluir uma redação dissertativa-argumentativa?',
    explanation: 'A frase final de uma redação deve ser impactante e deixar uma impressão duradoura, além de estar alinhada com a tese defendida.',
    difficulty: 2,
    options: [
      {
        id: 770009,
        exercise_id: 77003,
        option_text: 'Espera-se que as questões levantadas sejam solucionadas em breve.',
        is_correct: false,
        explanation: 'Esta frase é vaga e não apresenta uma conclusão contundente, além de usar voz passiva, o que enfraquece o argumento final.'
      },
      {
        id: 770010,
        exercise_id: 77003,
        option_text: 'Portanto, é imperativo que a sociedade se mobilize para enfrentar esse desafio com determinação e responsabilidade.',
        is_correct: true,
        explanation: 'Correto! Esta frase apresenta uma conclusão forte, com um chamado à ação claro e assertivo, alinhado com o formato dissertativo-argumentativo.'
      },
      {
        id: 770011,
        exercise_id: 77003,
        option_text: 'Como foi dito anteriormente, o problema é complexo e merece atenção.',
        is_correct: false,
        explanation: 'Esta frase é repetitiva e não acrescenta informações novas ou uma conclusão significativa ao texto.'
      },
      {
        id: 770012,
        exercise_id: 77003,
        option_text: 'Existem muitas opiniões diferentes sobre esse tema controverso.',
        is_correct: false,
        explanation: 'Esta frase é genérica e não toma posição, sendo inadequada para a conclusão de um texto argumentativo.'
      }
    ]
  },
  {
    id: 77004,
    category_id: 'conclusoes-redacao',
    question: 'Qual estratégia é mais eficaz para uma conclusão em redação dissertativa-argumentativa?',
    explanation: 'A conclusão deve sintetizar os argumentos principais e apresentar um desfecho que reforce a tese defendida ao longo do texto.',
    difficulty: 2,
    options: [
      {
        id: 770013,
        exercise_id: 77004,
        option_text: 'Introduzir um novo argumento não mencionado anteriormente',
        is_correct: false,
        explanation: 'Introduzir novos argumentos na conclusão não é recomendado, pois não há espaço para desenvolvê-los adequadamente.'
      },
      {
        id: 770014,
        exercise_id: 77004,
        option_text: 'Retomar a tese e sintetizar os argumentos principais',
        is_correct: true,
        explanation: 'Correto! Retomar a tese e sintetizar os argumentos principais é a estratégia mais eficaz para uma conclusão coesa e coerente.'
      },
      {
        id: 770015,
        exercise_id: 77004,
        option_text: 'Citar uma autoridade no assunto para dar credibilidade',
        is_correct: false,
        explanation: 'Embora citar autoridades possa ser útil no desenvolvimento, na conclusão é mais importante sintetizar os argumentos já apresentados e finalizar o raciocínio.'
      },
      {
        id: 770016,
        exercise_id: 77004,
        option_text: 'Fazer perguntas retóricas para o leitor refletir',
        is_correct: false,
        explanation: 'Perguntas retóricas podem enfraquecer a assertividade da conclusão, que deve apresentar posicionamentos claros e não questionamentos.'
      }
    ]
  },
  {
    id: 77005,
    category_id: 'conclusoes-redacao',
    question: 'Qual das seguintes expressões é mais adequada para conectar a síntese dos argumentos à proposta de intervenção na conclusão?',
    explanation: 'Na conclusão, é importante estabelecer uma conexão lógica entre os argumentos apresentados e a proposta de intervenção sugerida.',
    difficulty: 2,
    options: [
      {
        id: 770017,
        exercise_id: 77005,
        option_text: 'Embora existam dificuldades',
        is_correct: false,
        explanation: '"Embora existam dificuldades" introduz uma concessão, o que pode enfraquecer a força da proposta de intervenção na conclusão.'
      },
      {
        id: 770018,
        exercise_id: 77005,
        option_text: 'Independentemente dos argumentos',
        is_correct: false,
        explanation: '"Independentemente dos argumentos" sugere que a proposta não tem relação com os argumentos apresentados, o que compromete a coerência do texto.'
      },
      {
        id: 770019,
        exercise_id: 77005,
        option_text: 'Partindo dessas constatações',
        is_correct: true,
        explanation: 'Correto! "Partindo dessas constatações" estabelece uma conexão lógica clara entre os argumentos apresentados e a proposta de intervenção que se seguirá.'
      },
      {
        id: 770020,
        exercise_id: 77005,
        option_text: 'Além disso',
        is_correct: false,
        explanation: '"Além disso" é usado para adicionar informações, não sendo a melhor opção para estabelecer uma relação de consequência entre argumentos e proposta.'
      }
    ]
  },
  {
    id: 77006,
    category_id: 'conclusoes-redacao',
    question: 'Para iniciar o parágrafo final de uma redação, qual expressão é mais formal e adequada para indicar a conclusão do raciocínio, em vez de "Para concluir..."?',
    explanation: 'A escolha adequada de conectivos é essencial para uma conclusão coesa e formal.',
    difficulty: 2,
    options: [
      {
        id: 770021,
        exercise_id: 77006,
        option_text: 'E aí...',
        is_correct: false,
        explanation: 'Incorreto. Extremamente informal e inadequado para uma conclusão.'
      },
      {
        id: 770022,
        exercise_id: 77006,
        option_text: 'Fechando a conta...',
        is_correct: false,
        explanation: 'Incorreto. Expressão coloquial e inadequada.'
      },
      {
        id: 770023,
        exercise_id: 77006,
        option_text: 'Em suma...',
        is_correct: true,
        explanation: 'Correto. "Em suma", "Em síntese" ou "Dessarte" são expressões concisas e formais para introduzir a conclusão, resumindo os pontos principais.'
      },
      {
        id: 770024,
        exercise_id: 77006,
        option_text: 'No final das contas...',
        is_correct: false,
        explanation: 'Incorreto. Expressão coloquial.'
      }
    ]
  },
  {
    id: 77007,
    category_id: 'conclusoes-redacao',
    question: 'Qual conectivo conclusivo oferece uma alternativa mais sofisticada a "Portanto..." ou "Logo..."?',
    explanation: 'A variedade de conectivos enriquece o texto e demonstra domínio da língua.',
    difficulty: 2,
    options: [
      {
        id: 770025,
        exercise_id: 77007,
        option_text: 'Assim sendo...',
        is_correct: false,
        explanation: 'Incorreto. É uma alternativa válida, mas "Destarte" ou "Por conseguinte" podem soar mais formais/eruditos.'
      },
      {
        id: 770026,
        exercise_id: 77007,
        option_text: 'Então...',
        is_correct: false,
        explanation: 'Incorreto. Geralmente considerado menos formal.'
      },
      {
        id: 770027,
        exercise_id: 77007,
        option_text: 'Por conseguinte...',
        is_correct: true,
        explanation: 'Correto. "Por conseguinte" e "Destarte" são conectivos conclusivos formais que indicam uma consequência lógica do que foi exposto.'
      },
      {
        id: 770028,
        exercise_id: 77007,
        option_text: 'Daí...',
        is_correct: false,
        explanation: 'Incorreto. Informal.'
      }
    ]
  },
  {
    id: 77008,
    category_id: 'conclusoes-redacao',
    question: 'Para reafirmar a tese ou ideia principal na conclusão, qual expressão demonstra maior convicção do que "Podemos ver que..."?',
    explanation: 'A reafirmação da tese na conclusão deve ser feita com convicção e clareza.',
    difficulty: 2,
    options: [
      {
        id: 770029,
        exercise_id: 77008,
        option_text: 'Fica claro, portanto, que...',
        is_correct: true,
        explanation: 'Correto. Expressões como "Fica claro, portanto, que...", "Evidencia-se, pois, que..." ou "Depreende-se, assim, que..." reforçam a conclusão de forma assertiva e formal.'
      },
      {
        id: 770030,
        exercise_id: 77008,
        option_text: 'Parece que...',
        is_correct: false,
        explanation: 'Incorreto. Expressa incerteza.'
      },
      {
        id: 770031,
        exercise_id: 77008,
        option_text: 'A gente conclui que...',
        is_correct: false,
        explanation: 'Incorreto. Uso de "a gente" é inadequado na norma culta escrita.'
      },
      {
        id: 770032,
        exercise_id: 77008,
        option_text: 'Talvez seja certo que...',
        is_correct: false,
        explanation: 'Incorreto. Expressa dúvida.'
      }
    ]
  },
  {
    id: 77009,
    category_id: 'conclusoes-redacao',
    question: 'Qual expressão pode ser usada na conclusão para apresentar uma reflexão final ou uma perspectiva futura, de forma mais elaborada que "Pensando no futuro..."?',
    explanation: 'A projeção para o futuro é um recurso valioso para encerrar o texto com perspectiva.',
    difficulty: 2,
    options: [
      {
        id: 770033,
        exercise_id: 77009,
        option_text: 'Daqui pra frente...',
        is_correct: false,
        explanation: 'Incorreto. Informal.'
      },
      {
        id: 770034,
        exercise_id: 77009,
        option_text: 'Olhando adiante...',
        is_correct: false,
        explanation: 'Incorreto. Informal.'
      },
      {
        id: 770035,
        exercise_id: 77009,
        option_text: 'Prospectivamente...',
        is_correct: true,
        explanation: 'Correto. "Prospectivamente" ou "Em perspectiva futura" são formas mais formais e elaboradas para introduzir uma reflexão sobre desdobramentos ou o futuro.'
      },
      {
        id: 770036,
        exercise_id: 77009,
        option_text: 'O que vier...',
        is_correct: false,
        explanation: 'Incorreto. Vago e informal.'
      }
    ]
  },
  {
    id: 77010,
    category_id: 'conclusoes-redacao',
    question: 'Qual das seguintes expressões é MENOS recomendada para finalizar uma redação formal, por ser considerada clichê ou pouco original?',
    explanation: 'A originalidade na conclusão é tão importante quanto em qualquer outra parte do texto.',
    difficulty: 2,
    options: [
      {
        id: 770037,
        exercise_id: 77010,
        option_text: 'Diante do exposto...',
        is_correct: false,
        explanation: 'Incorreto. Embora comum, ainda é aceitável em muitos contextos formais.'
      },
      {
        id: 770038,
        exercise_id: 77010,
        option_text: 'Infere-se, portanto, que...',
        is_correct: false,
        explanation: 'Incorreto. É uma expressão adequada e formal.'
      },
      {
        id: 770039,
        exercise_id: 77010,
        option_text: 'Com isso, concluímos nossa análise.',
        is_correct: true,
        explanation: 'Correto. Frases como esta ou "E assim terminamos" são consideradas por muitos como pouco criativas, redundantes ou fracas para finalizar um texto argumentativo.'
      },
      {
        id: 770040,
        exercise_id: 77010,
        option_text: 'Em última análise...',
        is_correct: false,
        explanation: 'Incorreto. Expressão válida para introduzir a consideração final.'
      }
    ]
  }
];
