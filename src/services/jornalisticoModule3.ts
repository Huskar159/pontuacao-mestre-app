import { Exercise } from './exerciseService';

// Complemento de exercícios para o Módulo 3 de Textos Jornalísticos
export const textoJornalisticoExercicio3Complemento: Exercise[] = [
  {
    id: 10203,
    category_id: 'interpretacao-jornalistico-3',
    question: 'Analise a seguinte manchete e linha fina:\n\n"BRASIL BATE RECORDE DE EXPORTAÇÕES NO PRIMEIRO TRIMESTRE\nBalança comercial registra superávit de US$ 15 bilhões, maior valor para o período desde o início da série histórica"\n\nQual relação se estabelece entre a manchete e a linha fina neste texto jornalístico?',
    explanation: 'Manchetes e linhas finas (subtítulos) possuem funções específicas e complementares no texto jornalístico.',
    difficulty: 2,
    options: [
      {
        id: 102031,
        exercise_id: 10203,
        option_text: 'A linha fina complementa a manchete, fornecendo dados específicos que comprovam e detalham o recorde mencionado.',
        is_correct: true,
        explanation: 'Correto! A linha fina complementa a informação da manchete ao fornecer dados específicos (superávit de US$ 15 bilhões) e contextualização histórica (maior valor desde o início da série histórica) que confirmam e detalham o recorde mencionado na manchete.'
      },
      {
        id: 102032,
        exercise_id: 10203,
        option_text: 'A linha fina contradiz a manchete, apresentando dados que mostram que não houve recorde real.',
        is_correct: false,
        explanation: 'Incorreto! A linha fina não contradiz a manchete, pelo contrário, a confirma ao apresentar dados que comprovam o recorde mencionado.'
      },
      {
        id: 102033,
        exercise_id: 10203,
        option_text: 'A linha fina apresenta uma opinião editorial sobre o significado do recorde de exportações.',
        is_correct: false,
        explanation: 'Incorreto! A linha fina não apresenta opinião editorial, apenas dados factuais que complementam a informação da manchete.'
      },
      {
        id: 102034,
        exercise_id: 10203,
        option_text: 'A linha fina analisa criticamente as consequências do recorde de exportações para a economia interna.',
        is_correct: false,
        explanation: 'Incorreto! A linha fina não faz análise crítica nem menciona consequências para a economia interna, apenas apresenta dados objetivos.'
      },
      {
        id: 102035,
        exercise_id: 10203,
        option_text: 'A linha fina explica as causas técnicas que levaram ao aumento das exportações.',
        is_correct: false,
        explanation: 'Incorreto! A linha fina não explica as causas do aumento das exportações, apenas confirma o recorde com dados específicos.'
      }
    ]
  },
  {
    id: 10204,
    category_id: 'interpretacao-jornalistico-3',
    question: 'Leia a seguinte manchete:\n\n"VACINA CONTRA DENGUE SERÁ INCLUÍDA NO CALENDÁRIO NACIONAL DE IMUNIZAÇÃO"\n\nQual é o tempo verbal predominante nesta manchete e qual efeito ele produz?',
    explanation: 'As manchetes jornalísticas utilizam recursos linguísticos específicos, incluindo tempos verbais, para produzir determinados efeitos.',
    difficulty: 2,
    options: [
      {
        id: 102041,
        exercise_id: 10204,
        option_text: 'Futuro do presente, indicando uma ação que ainda vai ocorrer, conferindo à notícia o caráter de anúncio ou previsão.',
        is_correct: true,
        explanation: 'Correto! A manchete utiliza o verbo "será" no futuro do presente, indicando uma ação que ainda vai ocorrer. Isso confere à notícia o caráter de anúncio ou informação sobre algo que está previsto para acontecer.'
      },
      {
        id: 102042,
        exercise_id: 10204,
        option_text: 'Presente do indicativo, dando a ideia de que a ação já está ocorrendo no momento atual.',
        is_correct: false,
        explanation: 'Incorreto! A manchete não utiliza o presente do indicativo, mas sim o futuro do presente ("será").'
      },
      {
        id: 102043,
        exercise_id: 10204,
        option_text: 'Pretérito perfeito, indicando uma ação já concluída, conferindo à notícia o caráter de fato consumado.',
        is_correct: false,
        explanation: 'Incorreto! A manchete não utiliza o pretérito perfeito, mas sim o futuro do presente ("será").'
      },
      {
        id: 102044,
        exercise_id: 10204,
        option_text: 'Imperativo, dando à manchete um tom de ordem ou recomendação às autoridades de saúde.',
        is_correct: false,
        explanation: 'Incorreto! A manchete não utiliza o modo imperativo, mas sim o futuro do presente do indicativo ("será").'
      },
      {
        id: 102045,
        exercise_id: 10204,
        option_text: 'Gerúndio, sugerindo uma ação em andamento, ainda não concluída.',
        is_correct: false,
        explanation: 'Incorreto! A manchete não utiliza gerúndio, mas sim o futuro do presente ("será").'
      }
    ]
  },
  {
    id: 10205,
    category_id: 'interpretacao-jornalistico-3',
    question: 'Analise as seguintes manchetes sobre o mesmo fato:\n\n1. "GOVERNO ANUNCIA CORTE DE 15% NOS GASTOS PÚBLICOS"\n2. "EDUCAÇÃO E SAÚDE PERDEM R$ 10 BILHÕES COM MEDIDAS DE AUSTERIDADE"\n3. "AJUSTE FISCAL VISA EQUILÍBRIO DAS CONTAS PÚBLICAS, DIZ MINISTRO"\n\nQual análise sobre estas manchetes está correta?',
    explanation: 'Manchetes sobre o mesmo fato podem apresentar diferentes enfoques, revelando perspectivas distintas sobre a notícia.',
    difficulty: 3,
    options: [
      {
        id: 102051,
        exercise_id: 10205,
        option_text: 'As manchetes enfocam aspectos diferentes do mesmo fato: a primeira é mais neutra e abrangente, a segunda destaca consequências negativas em áreas específicas, e a terceira apresenta a justificativa oficial.',
        is_correct: true,
        explanation: 'Correto! Cada manchete aborda o mesmo fato (corte de gastos) sob perspectivas diferentes: a primeira anuncia o fato de forma mais neutra, a segunda destaca consequências negativas em áreas específicas (educação e saúde), e a terceira apresenta a justificativa oficial para a medida, mostrando como a escolha do enfoque pode influenciar a percepção do leitor.'
      },
      {
        id: 102052,
        exercise_id: 10205,
        option_text: 'As manchetes se contradizem mutuamente, não podendo se referir ao mesmo fato.',
        is_correct: false,
        explanation: 'Incorreto! As manchetes não se contradizem, mas apresentam perspectivas complementares sobre o mesmo fato (corte de gastos públicos).'
      },
      {
        id: 102053,
        exercise_id: 10205,
        option_text: 'As três manchetes são imparciais e apresentam exatamente a mesma informação de forma neutra.',
        is_correct: false,
        explanation: 'Incorreto! As manchetes não apresentam a mesma informação de forma neutra, mas enfocam aspectos diferentes do fato, com perspectivas distintas.'
      },
      {
        id: 102054,
        exercise_id: 10205,
        option_text: 'A primeira e a terceira manchetes são falsas, enquanto apenas a segunda apresenta o fato verdadeiro.',
        is_correct: false,
        explanation: 'Incorreto! Não há elementos que indiquem que alguma das manchetes seja falsa; elas apenas apresentam perspectivas diferentes sobre o mesmo fato.'
      },
      {
        id: 102055,
        exercise_id: 10205,
        option_text: 'As manchetes se referem a três medidas econômicas diferentes e não relacionadas entre si.',
        is_correct: false,
        explanation: 'Incorreto! As manchetes se referem ao mesmo fato (corte de gastos/ajuste fiscal) sob perspectivas diferentes, não a medidas distintas e não relacionadas.'
      }
    ]
  },
  {
    id: 10206,
    category_id: 'interpretacao-jornalistico-3',
    question: 'Observe o seguinte lead de uma notícia:\n\n"Um incêndio de grandes proporções destruiu o Museu Nacional, no Rio de Janeiro, na noite de ontem. O fogo começou por volta das 19h30 e se alastrou rapidamente pelo prédio histórico de 200 anos. Bombeiros de cinco quartéis trabalharam no local, mas não conseguiram evitar a destruição de grande parte do acervo, que incluía cerca de 20 milhões de itens."\n\nQuais elementos informativos essenciais estão presentes neste lead?',
    explanation: 'O lead é o primeiro parágrafo de uma notícia e deve responder às questões fundamentais sobre o fato noticiado.',
    difficulty: 1,
    options: [
      {
        id: 102061,
        exercise_id: 10206,
        option_text: 'O quê (incêndio), onde (Museu Nacional, Rio de Janeiro), quando (noite de ontem, por volta das 19h30), como (fogo se alastrou rapidamente) e consequências (destruição do acervo).',
        is_correct: true,
        explanation: 'Correto! O lead apresenta os elementos informativos essenciais respondendo às perguntas básicas do jornalismo: o quê (incêndio), onde (Museu Nacional, no Rio de Janeiro), quando (na noite de ontem, às 19h30), como (começou e se alastrou rapidamente) e consequências (destruição de grande parte do acervo).'
      },
      {
        id: 102062,
        exercise_id: 10206,
        option_text: 'Apenas a descrição detalhada do que aconteceu, sem mencionar quando ou onde ocorreu o fato.',
        is_correct: false,
        explanation: 'Incorreto! O lead menciona claramente onde (Museu Nacional, no Rio de Janeiro) e quando (na noite de ontem, às 19h30) ocorreu o incêndio.'
      },
      {
        id: 102063,
        exercise_id: 10206,
        option_text: 'Apenas as causas técnicas do incêndio, com análise detalhada da falha que originou o fogo.',
        is_correct: false,
        explanation: 'Incorreto! O lead não menciona as causas técnicas do incêndio, focando apenas no fato em si e suas consequências imediatas.'
      },
      {
        id: 102064,
        exercise_id: 10206,
        option_text: 'Apenas a opinião do jornalista sobre a importância cultural do museu e a perda irreparável.',
        is_correct: false,
        explanation: 'Incorreto! O lead não apresenta opinião do jornalista, mas informações objetivas sobre o fato ocorrido.'
      },
      {
        id: 102065,
        exercise_id: 10206,
        option_text: 'Apenas o histórico completo do Museu Nacional desde sua fundação até o incêndio.',
        is_correct: false,
        explanation: 'Incorreto! O lead não apresenta o histórico completo do museu, apenas menciona brevemente que era um prédio histórico de 200 anos, focando no fato atual (incêndio).'
      }
    ]
  },
  {
    id: 10207,
    category_id: 'interpretacao-jornalistico-3',
    question: 'Leia a seguinte manchete e subtítulo:\n\n"PESQUISA REVELA: 70% DOS JOVENS PREFEREM TRABALHO REMOTO\nEstudo com 2.500 profissionais entre 18 e 35 anos mostra que flexibilidade é mais valorizada que salário"\n\nQual função o subtítulo desempenha em relação à manchete?',
    explanation: 'No texto jornalístico, manchetes e subtítulos têm funções complementares na apresentação da notícia.',
    difficulty: 2,
    options: [
      {
        id: 102071,
        exercise_id: 10207,
        option_text: 'Complementa a manchete, acrescentando informações sobre o tamanho da amostra pesquisada e uma conclusão adicional relevante do estudo.',
        is_correct: true,
        explanation: 'Correto! O subtítulo complementa a manchete ao fornecer informações adicionais importantes: o tamanho da amostra (2.500 profissionais), a faixa etária pesquisada (18 a 35 anos) e uma conclusão adicional do estudo (flexibilidade é mais valorizada que salário).'
      },
      {
        id: 102072,
        exercise_id: 10207,
        option_text: 'Contradiz a manchete, apresentando dados que mostram que a maioria dos jovens prefere trabalho presencial.',
        is_correct: false,
        explanation: 'Incorreto! O subtítulo não contradiz a manchete, mas a complementa e reforça com informações adicionais sobre o mesmo estudo.'
      },
      {
        id: 102073,
        exercise_id: 10207,
        option_text: 'Questiona a credibilidade da pesquisa mencionada na manchete, apontando falhas metodológicas.',
        is_correct: false,
        explanation: 'Incorreto! O subtítulo não questiona a credibilidade da pesquisa, apenas fornece mais detalhes sobre ela, reforçando sua validade ao mencionar o tamanho da amostra.'
      },
      {
        id: 102074,
        exercise_id: 10207,
        option_text: 'Apresenta a opinião do jornal sobre o resultado da pesquisa mencionada na manchete.',
        is_correct: false,
        explanation: 'Incorreto! O subtítulo não apresenta opinião do jornal, mas informações adicionais factuais sobre a pesquisa.'
      },
      {
        id: 102075,
        exercise_id: 10207,
        option_text: 'Explica como os leitores podem participar da pesquisa mencionada na manchete.',
        is_correct: false,
        explanation: 'Incorreto! O subtítulo não contém informações sobre como participar da pesquisa, apenas complementa os resultados já apresentados na manchete.'
      }
    ]
  },
  {
    id: 10208,
    category_id: 'interpretacao-jornalistico-3',
    question: 'Analise a seguinte manchete:\n\n"INFLAÇÃO RECUA PELO TERCEIRO MÊS CONSECUTIVO, MAS ALIMENTOS SEGUEM EM ALTA"\n\nQual recurso linguístico é utilizado nesta manchete e qual seu efeito de sentido?',
    explanation: 'Manchetes jornalísticas utilizam recursos linguísticos específicos para sintetizar informações e produzir determinados efeitos de sentido.',
    difficulty: 2,
    options: [
      {
        id: 102081,
        exercise_id: 10208,
        option_text: 'Conjunção adversativa ("mas"), que estabelece uma relação de oposição, destacando que apesar da notícia positiva sobre a inflação geral, há um aspecto negativo no setor de alimentos.',
        is_correct: true,
        explanation: 'Correto! A manchete utiliza a conjunção adversativa "mas", que estabelece uma relação de oposição entre as duas informações apresentadas, contrapondo a queda da inflação geral (fato positivo) com a alta contínua nos preços dos alimentos (fato negativo), fornecendo assim uma visão mais completa e nuançada da situação econômica.'
      },
      {
        id: 102082,
        exercise_id: 10208,
        option_text: 'Metáfora, ao utilizar os termos "recua" e "alta" para personificar a inflação como um ser que se movimenta.',
        is_correct: false,
        explanation: 'Incorreto! Embora "recua" e "alta" possam sugerir movimento, seu uso para indicar diminuição e aumento de índices econômicos é convencional e não constitui uma metáfora significativa na análise desta manchete. O recurso linguístico mais relevante é a conjunção adversativa.'
      },
      {
        id: 102083,
        exercise_id: 10208,
        option_text: 'Eufemismo, suavizando o impacto negativo do aumento do preço dos alimentos.',
        is_correct: false,
        explanation: 'Incorreto! A manchete não utiliza eufemismo, pelo contrário, apresenta diretamente o fato de que os alimentos seguem em alta, sem suavizar essa informação negativa.'
      },
      {
        id: 102084,
        exercise_id: 10208,
        option_text: 'Hipérbole, exagerando a duração da queda da inflação ao mencionar "terceiro mês consecutivo".',
        is_correct: false,
        explanation: 'Incorreto! Não há hipérbole na manchete; a menção ao "terceiro mês consecutivo" é uma informação factual, não um exagero retórico.'
      },
      {
        id: 102085,
        exercise_id: 10208,
        option_text: 'Pleonasmo, ao repetir desnecessariamente a ideia de queda da inflação.',
        is_correct: false,
        explanation: 'Incorreto! Não há pleonasmo na manchete, pois não ocorre repetição desnecessária de ideias; cada elemento informativo acrescenta dados novos e relevantes.'
      }
    ]
  },
  {
    id: 10209,
    category_id: 'interpretacao-jornalistico-3',
    question: 'Observe as seguintes manchetes sobre o mesmo tema:\n\nJornal A: "NOVO MEDICAMENTO CONTRA CÂNCER MOSTRA RESULTADOS PROMISSORES"\nJornal B: "TESTES COM DROGA EXPERIMENTAL CONTRA CÂNCER AINDA SÃO PRELIMINARES, ALERTAM CIENTISTAS"\n\nCom base na análise dessas manchetes, o que se pode concluir sobre o tratamento da informação?',
    explanation: 'A forma como as manchetes são construídas reflete escolhas editoriais e podem enfatizar diferentes aspectos de um mesmo fato.',
    difficulty: 3,
    options: [
      {
        id: 102091,
        exercise_id: 10209,
        option_text: 'O Jornal A enfatiza o potencial positivo do medicamento, enquanto o Jornal B destaca as limitações da pesquisa, revelando enfoques diferentes sobre o mesmo fato.',
        is_correct: true,
        explanation: 'Correto! As manchetes abordam o mesmo fato (um novo medicamento contra câncer em fase de testes), mas com enfoques diferentes: o Jornal A enfatiza os resultados positivos ("promissores"), transmitindo otimismo, enquanto o Jornal B destaca as limitações da pesquisa ("testes ainda são preliminares"), adotando uma postura mais cautelosa, o que revela como a escolha de palavras e ênfase pode influenciar a percepção do leitor.'
      },
      {
        id: 102092,
        exercise_id: 10209,
        option_text: 'As manchetes apresentam informações contraditórias, indicando que um dos jornais está publicando uma notícia falsa.',
        is_correct: false,
        explanation: 'Incorreto! As manchetes não são necessariamente contraditórias; é possível que os resultados sejam promissores (Jornal A) e, ao mesmo tempo, ainda preliminares (Jornal B). São enfoques diferentes, não informações falsas.'
      },
      {
        id: 102093,
        exercise_id: 10209,
        option_text: 'O Jornal A trata de um medicamento aprovado, enquanto o Jornal B se refere a outro medicamento ainda em fase inicial de testes.',
        is_correct: false,
        explanation: 'Incorreto! Não há elementos que indiquem que as manchetes se referem a medicamentos diferentes; a diferença está no enfoque dado ao mesmo medicamento.'
      },
      {
        id: 102094,
        exercise_id: 10209,
        option_text: 'O Jornal A baseia-se em dados científicos, enquanto o Jornal B apresenta apenas especulações sem base em pesquisas.',
        is_correct: false,
        explanation: 'Incorreto! Não há elementos que indiquem que o Jornal B apresenta especulações; pelo contrário, ele cita cientistas como fonte, o que sugere embasamento em informações científicas.'
      },
      {
        id: 102095,
        exercise_id: 10209,
        option_text: 'O Jornal A publicou sua manchete após a conclusão dos estudos, enquanto o Jornal B publicou durante a fase inicial da pesquisa.',
        is_correct: false,
        explanation: 'Incorreto! Não há elementos que indiquem que as manchetes foram publicadas em momentos diferentes da pesquisa; a diferença está no enfoque editorial dado ao mesmo estágio da pesquisa.'
      }
    ]
  },
  {
    id: 10210,
    category_id: 'interpretacao-jornalistico-3',
    question: 'Leia o seguinte trecho de notícia e identifique qual elemento NÃO está presente no lead:\n\n"Um acidente envolvendo três carros e uma motocicleta na Rodovia BR-101, na altura do km 237, deixou cinco pessoas feridas na manhã desta quarta-feira. O engavetamento ocorreu por volta das 8h30, no sentido sul, próximo ao acesso para o município de Itapema. De acordo com a Polícia Rodoviária Federal, a causa provável foi a pista molhada devido à chuva forte que caía no momento."',
    explanation: 'O lead jornalístico tradicionalmente responde às perguntas básicas sobre o fato noticiado: o quê, quem, quando, onde, como e por quê.',
    difficulty: 2,
    options: [
      {
        id: 102101,
        exercise_id: 10210,
        option_text: 'Informações sobre a identidade específica das vítimas (quem).',
        is_correct: true,
        explanation: 'Correto! O lead não apresenta informações sobre a identidade específica das vítimas, apenas menciona que "cinco pessoas ficaram feridas", sem identificá-las. Todos os outros elementos básicos estão presentes: o quê (acidente/engavetamento), onde (BR-101, km 237, sentido sul, próximo a Itapema), quando (manhã desta quarta-feira, por volta das 8h30), como (envolvendo três carros e uma motocicleta) e por quê (pista molhada devido à chuva forte).'
      },
      {
        id: 102102,
        exercise_id: 10210,
        option_text: 'Informações sobre o local do acidente (onde).',
        is_correct: false,
        explanation: 'Incorreto! O lead contém informações detalhadas sobre o local do acidente: "Rodovia BR-101, na altura do km 237, no sentido sul, próximo ao acesso para o município de Itapema".'
      },
      {
        id: 102103,
        exercise_id: 10210,
        option_text: 'Informações sobre o momento em que ocorreu o acidente (quando).',
        is_correct: false,
        explanation: 'Incorreto! O lead especifica claramente quando ocorreu o acidente: "na manhã desta quarta-feira" e "por volta das 8h30".'
      },
      {
        id: 102104,
        exercise_id: 10210,
        option_text: 'Informações sobre a provável causa do acidente (por quê).',
        is_correct: false,
        explanation: 'Incorreto! O lead apresenta a provável causa do acidente: "a pista molhada devido à chuva forte que caía no momento".'
      },
      {
        id: 102105,
        exercise_id: 10210,
        option_text: 'Informações sobre o tipo de acidente ocorrido (o quê).',
        is_correct: false,
        explanation: 'Incorreto! O lead identifica claramente o tipo de acidente: "acidente envolvendo três carros e uma motocicleta" e "engavetamento".'
      }
    ]
  }
];
