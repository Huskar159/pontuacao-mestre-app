import { Exercise } from './exerciseService';

// Complemento de exercícios para o Módulo 2 de Textos Jornalísticos
export const textoJornalisticoExercicio2Complemento: Exercise[] = [
  {
    id: 10103,
    category_id: 'interpretacao-jornalistico-2',
    question: 'Leia o trecho da entrevista:\n\n"Entrevistador: Na sua opinião, quais são os maiores desafios da educação pública brasileira atualmente?\nEntrevistada: O principal desafio continua sendo a desigualdade. Temos escolas de excelência e escolas extremamente precárias funcionando no mesmo sistema. Além disso, a valorização do professor é fundamental. Não adianta falar em tecnologia, em método, se o profissional da educação não tem condições dignas de trabalho e salário compatível com sua importância social."\n\nComo se caracteriza a resposta da entrevistada?',
    explanation: 'As entrevistas jornalísticas apresentam diferentes tipos de resposta que podem ser analisadas quanto à sua estrutura e conteúdo.',
    difficulty: 2,
    options: [
      {
        id: 101031,
        exercise_id: 10103,
        option_text: 'Resposta analítica que identifica problemas específicos e estabelece relações entre diferentes aspectos do tema.',
        is_correct: true,
        explanation: 'Correto! A entrevistada analisa a situação educacional identificando problemas específicos (desigualdade, desvalorização do professor) e estabelece relações entre eles, demonstrando uma visão analítica do tema.'
      },
      {
        id: 101032,
        exercise_id: 10103,
        option_text: 'Resposta evasiva que evita abordar diretamente os problemas da educação pública.',
        is_correct: false,
        explanation: 'Incorreto! A resposta não é evasiva, pelo contrário, aborda diretamente os problemas da educação pública brasileira.'
      },
      {
        id: 101033,
        exercise_id: 10103,
        option_text: 'Resposta técnica com uso predominante de terminologia especializada e dados estatísticos.',
        is_correct: false,
        explanation: 'Incorreto! A resposta não utiliza terminologia técnica especializada nem apresenta dados estatísticos, mantendo uma linguagem acessível.'
      },
      {
        id: 101034,
        exercise_id: 10103,
        option_text: 'Resposta emotiva baseada apenas em experiências pessoais da entrevistada.',
        is_correct: false,
        explanation: 'Incorreto! A resposta não é predominantemente emotiva nem se baseia em experiências pessoais, mas em uma análise objetiva dos problemas educacionais.'
      },
      {
        id: 101035,
        exercise_id: 10103,
        option_text: 'Resposta promocional que visa destacar as conquistas do sistema educacional.',
        is_correct: false,
        explanation: 'Incorreto! A resposta não tem caráter promocional nem destaca conquistas, mas aponta problemas e desafios do sistema educacional.'
      }
    ]
  },
  {
    id: 10104,
    category_id: 'interpretacao-jornalistico-2',
    question: 'Analise o trecho da entrevista jornalística:\n\n"Entrevistador: O senhor foi acusado de superfaturamento na compra de respiradores durante a pandemia. Como responde a essas acusações?\nEntrevistado: Olha, isso é um absurdo. Estão querendo me atacar politicamente. Se você olhar minha trajetória de 20 anos na vida pública, verá que sempre fui um defensor da ética. Além disso, essas denúncias surgem justamente no momento em que lidero as pesquisas para o próximo pleito."\n\nQual estratégia o entrevistado utiliza em sua resposta?',
    explanation: 'Em entrevistas jornalísticas, especialmente sobre temas polêmicos, os entrevistados utilizam diferentes estratégias discursivas.',
    difficulty: 2,
    options: [
      {
        id: 101041,
        exercise_id: 10104,
        option_text: 'Desvia o foco da acusação específica para sua reputação geral e sugere motivação política para as denúncias.',
        is_correct: true,
        explanation: 'Correto! O entrevistado não responde diretamente à acusação sobre o superfaturamento, mas desvia o foco para sua reputação geral ("20 anos na vida pública") e sugere motivação política para as denúncias ("querendo me atacar politicamente", "justamente no momento em que lidero as pesquisas").'
      },
      {
        id: 101042,
        exercise_id: 10104,
        option_text: 'Apresenta dados e documentos que comprovam a legalidade da compra dos respiradores.',
        is_correct: false,
        explanation: 'Incorreto! O entrevistado não apresenta dados ou documentos que comprovem a legalidade da compra.'
      },
      {
        id: 101043,
        exercise_id: 10104,
        option_text: 'Assume parcialmente o erro e propõe medidas para evitar problemas semelhantes no futuro.',
        is_correct: false,
        explanation: 'Incorreto! O entrevistado não assume nenhum erro nem propõe medidas preventivas para o futuro.'
      },
      {
        id: 101044,
        exercise_id: 10104,
        option_text: 'Analisa tecnicamente o processo de compra de respiradores durante a pandemia.',
        is_correct: false,
        explanation: 'Incorreto! O entrevistado não faz análise técnica do processo de compra dos respiradores.'
      },
      {
        id: 101045,
        exercise_id: 10104,
        option_text: 'Reconhece as falhas administrativas e se dispõe a colaborar com as investigações.',
        is_correct: false,
        explanation: 'Incorreto! O entrevistado não reconhece falhas nem menciona disposição para colaborar com investigações.'
      }
    ]
  },
  {
    id: 10105,
    category_id: 'interpretacao-jornalistico-2',
    question: 'Leia o trecho do depoimento jornalístico:\n\n"Eu trabalhava no 12º andar quando começou o incêndio. No início, achamos que era apenas um exercício de evacuação, mas logo o cheiro de fumaça invadiu o corredor. Descemos pelas escadas porque os elevadores foram desativados. O que mais me impressionou foi a calma das pessoas, todos ajudando uns aos outros. Um colega carregou nas costas uma senhora que não conseguia descer os degraus. Foi assustador, mas também vi o melhor das pessoas naquele momento", relatou Carlos Mendes, funcionário da empresa atingida pelo incêndio na última quinta-feira.',
    explanation: 'Depoimentos jornalísticos apresentam características específicas que os diferenciam de outros formatos.',
    difficulty: 2,
    options: [
      {
        id: 101051,
        exercise_id: 10105,
        option_text: 'Narrativa em primeira pessoa de uma testemunha ocular que vivenciou diretamente o acontecimento noticiado.',
        is_correct: true,
        explanation: 'Correto! O texto apresenta um relato em primeira pessoa ("Eu trabalhava", "achamos", "descemos") de alguém que presenciou e vivenciou diretamente o evento noticiado, característica fundamental do depoimento jornalístico.'
      },
      {
        id: 101052,
        exercise_id: 10105,
        option_text: 'Análise técnica das causas do incêndio e dos procedimentos de segurança do edifício.',
        is_correct: false,
        explanation: 'Incorreto! O depoimento não apresenta análise técnica das causas do incêndio nem dos procedimentos de segurança, apenas relata a experiência pessoal.'
      },
      {
        id: 101053,
        exercise_id: 10105,
        option_text: 'Comunicado oficial da empresa sobre os danos materiais e as medidas adotadas após o incêndio.',
        is_correct: false,
        explanation: 'Incorreto! O texto não é um comunicado oficial da empresa, mas o relato pessoal de um funcionário.'
      },
      {
        id: 101054,
        exercise_id: 10105,
        option_text: 'Entrevista estruturada com perguntas e respostas sobre o incidente.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta estrutura de entrevista com perguntas e respostas, mas um depoimento contínuo.'
      },
      {
        id: 101055,
        exercise_id: 10105,
        option_text: 'Reportagem investigativa sobre falhas de segurança que causaram o incêndio.',
        is_correct: false,
        explanation: 'Incorreto! O texto não é uma reportagem investigativa sobre as causas do incêndio, mas um depoimento pessoal sobre a experiência vivida.'
      }
    ]
  },
  {
    id: 10106,
    category_id: 'interpretacao-jornalistico-2',
    question: 'Leia o trecho da entrevista:\n\n"Entrevistador: Como surgiu a ideia para seu novo romance?\nEscritor: Foi durante uma viagem ao Nordeste. Visitei uma comunidade no interior de Pernambuco que preserva tradições centenárias. Conversei com os moradores mais antigos e fiquei fascinado com as histórias que eles contavam, especialmente sobre um período de seca extrema nos anos 60. Percebi que havia ali um universo rico que merecia ser retratado na literatura. Comecei a tomar notas e, quando voltei para casa, já tinha o esqueleto da narrativa."\n\nQual é o principal valor deste tipo de entrevista para o jornalismo cultural?',
    explanation: 'As entrevistas jornalísticas podem ter diferentes propósitos e valores, dependendo do contexto e da editoria em que se inserem.',
    difficulty: 2,
    options: [
      {
        id: 101061,
        exercise_id: 10106,
        option_text: 'Revelar o processo criativo e as inspirações por trás de uma obra artística.',
        is_correct: true,
        explanation: 'Correto! A entrevista revela o processo criativo do escritor, mostrando como a viagem e o contato com a comunidade serviram de inspiração para o romance, aspecto valorizado no jornalismo cultural.'
      },
      {
        id: 101062,
        exercise_id: 10106,
        option_text: 'Promover o turismo na região nordestina mencionada pelo escritor.',
        is_correct: false,
        explanation: 'Incorreto! Embora a região seja mencionada, o foco da entrevista não é promover o turismo, mas revelar o processo criativo do escritor.'
      },
      {
        id: 101063,
        exercise_id: 10106,
        option_text: 'Denunciar as condições sociais precárias do Nordeste brasileiro.',
        is_correct: false,
        explanation: 'Incorreto! A entrevista não tem caráter de denúncia social, mas de revelação do processo criativo artístico.'
      },
      {
        id: 101064,
        exercise_id: 10106,
        option_text: 'Analisar tecnicamente a estrutura narrativa do novo romance.',
        is_correct: false,
        explanation: 'Incorreto! A entrevista não analisa tecnicamente a estrutura do romance, apenas menciona como surgiu a inspiração para a obra.'
      },
      {
        id: 101065,
        exercise_id: 10106,
        option_text: 'Comparar o novo romance com obras anteriores do mesmo autor.',
        is_correct: false,
        explanation: 'Incorreto! A entrevista não faz comparação com obras anteriores do autor, apenas aborda a inspiração para a obra atual.'
      }
    ]
  },
  {
    id: 10107,
    category_id: 'interpretacao-jornalistico-2',
    question: 'Observe o trecho de um depoimento em uma reportagem sobre um desastre natural:\n\n"Perdi tudo em questão de minutos. A água subiu tão rápido que mal tivemos tempo de sair de casa. Consegui salvar apenas meus documentos e meu cachorro. Moro aqui há 30 anos e nunca vi nada parecido. A correnteza levou meu carro e destruiu completamente o primeiro andar da minha casa. Estou abrigado na casa da minha filha, mas muitos vizinhos não têm para onde ir", conta João Silva, de 67 anos, morador do bairro Ribeirinha.\n\nQual é a função principal deste depoimento na construção da reportagem?',
    explanation: 'Depoimentos pessoais cumprem funções específicas na estrutura de uma reportagem jornalística.',
    difficulty: 2,
    options: [
      {
        id: 101071,
        exercise_id: 10107,
        option_text: 'Humanizar a cobertura, mostrando os impactos reais do desastre na vida das pessoas afetadas.',
        is_correct: true,
        explanation: 'Correto! O depoimento traz a dimensão humana da tragédia, mostrando como o desastre afetou concretamente a vida de uma pessoa, o que humaniza a cobertura e aproxima o leitor da realidade dos atingidos.'
      },
      {
        id: 101072,
        exercise_id: 10107,
        option_text: 'Explicar tecnicamente as causas da enchente e os fatores que contribuíram para o desastre.',
        is_correct: false,
        explanation: 'Incorreto! O depoimento não aborda as causas técnicas da enchente, apenas relata a experiência pessoal do morador.'
      },
      {
        id: 101073,
        exercise_id: 10107,
        option_text: 'Analisar criticamente a atuação das autoridades durante o desastre.',
        is_correct: false,
        explanation: 'Incorreto! O depoimento não analisa a atuação das autoridades, focando apenas na experiência pessoal do entrevistado.'
      },
      {
        id: 101074,
        exercise_id: 10107,
        option_text: 'Apresentar estatísticas sobre os danos materiais causados pela enchente.',
        is_correct: false,
        explanation: 'Incorreto! O depoimento não apresenta estatísticas gerais sobre os danos, apenas relata os prejuízos pessoais do entrevistado.'
      },
      {
        id: 101075,
        exercise_id: 10107,
        option_text: 'Divulgar as medidas oficiais de reconstrução anunciadas pelo governo.',
        is_correct: false,
        explanation: 'Incorreto! O depoimento não menciona medidas oficiais de reconstrução, apenas a situação atual do entrevistado e de seus vizinhos.'
      }
    ]
  },
  {
    id: 10108,
    category_id: 'interpretacao-jornalistico-2',
    question: 'Leia o trecho da entrevista:\n\n"Entrevistador: Qual é o maior desafio na implementação do projeto?\nEntrevistada: O maior desafio é conciliar o desenvolvimento econômico com a preservação ambiental.\nEntrevistador: Pode explicar melhor?\nEntrevistada: Claro. Por um lado, precisamos garantir o crescimento econômico da região, gerando empregos e renda. Por outro, temos uma área de preservação ambiental que precisa ser protegida. Nossa equipe trabalha justamente para encontrar esse equilíbrio, desenvolvendo soluções que minimizem os impactos ambientais sem comprometer o desenvolvimento."\n\nQual técnica jornalística o entrevistador utilizou na segunda pergunta?',
    explanation: 'Entrevistadores utilizam diferentes técnicas para conduzir entrevistas e obter informações mais completas e esclarecedoras.',
    difficulty: 2,
    options: [
      {
        id: 101081,
        exercise_id: 10108,
        option_text: 'Pergunta de aprofundamento, solicitando mais detalhes sobre uma resposta inicial considerada vaga ou genérica.',
        is_correct: true,
        explanation: 'Correto! O entrevistador pediu um aprofundamento ("Pode explicar melhor?") após receber uma resposta inicial genérica, técnica comum em entrevistas para obter informações mais detalhadas e concretas.'
      },
      {
        id: 101082,
        exercise_id: 10108,
        option_text: 'Pergunta confrontativa, questionando a veracidade da resposta da entrevistada.',
        is_correct: false,
        explanation: 'Incorreto! A pergunta não questiona a veracidade da resposta anterior nem confronta a entrevistada, apenas solicita mais detalhes.'
      },
      {
        id: 101083,
        exercise_id: 10108,
        option_text: 'Pergunta sugestiva, induzindo a entrevistada a uma resposta específica.',
        is_correct: false,
        explanation: 'Incorreto! A pergunta não sugere ou induz a entrevistada a uma resposta específica, deixando-a livre para elaborar sua explicação.'
      },
      {
        id: 101084,
        exercise_id: 10108,
        option_text: 'Pergunta hipotética, propondo um cenário fictício para a entrevistada analisar.',
        is_correct: false,
        explanation: 'Incorreto! A pergunta não propõe um cenário hipotético, apenas solicita esclarecimento sobre a resposta já dada.'
      },
      {
        id: 101085,
        exercise_id: 10108,
        option_text: 'Pergunta comparativa, pedindo para a entrevistada comparar diferentes projetos.',
        is_correct: false,
        explanation: 'Incorreto! A pergunta não solicita comparação entre projetos ou situações diferentes, apenas mais detalhes sobre o mesmo tópico.'
      }
    ]
  },
  {
    id: 10109,
    category_id: 'interpretacao-jornalistico-2',
    question: 'Analise o trecho de uma entrevista jornalística:\n\n"Entrevistador: Os números mostram que sua gestão reduziu o déficit habitacional em apenas 5%, muito abaixo dos 20% prometidos durante a campanha. Como o senhor explica essa diferença?\nEntrevistado: Precisamos contextualizar esses dados. Primeiro, enfrentamos a maior crise econômica das últimas décadas, que reduziu significativamente os recursos disponíveis. Segundo, herdamos projetos mal elaborados que precisaram ser revistos. E terceiro, priorizamos a qualidade das habitações em vez de simplesmente atingir metas numéricas."\n\nQual abordagem o entrevistador utilizou nesta pergunta?',
    explanation: 'As entrevistas jornalísticas podem apresentar diferentes abordagens, dependendo do assunto e do objetivo da entrevista.',
    difficulty: 3,
    options: [
      {
        id: 101091,
        exercise_id: 10109,
        option_text: 'Abordagem investigativa, confrontando o entrevistado com dados que contradizem promessas anteriores.',
        is_correct: true,
        explanation: 'Correto! O entrevistador utiliza uma abordagem investigativa ao confrontar o entrevistado com dados concretos (redução de apenas 5%) que contradizem promessas de campanha (20%), cobrando explicações sobre a diferença.'
      },
      {
        id: 101092,
        exercise_id: 10109,
        option_text: 'Abordagem colaborativa, oferecendo ao entrevistado oportunidade de explicar seus projetos habitacionais.',
        is_correct: false,
        explanation: 'Incorreto! A pergunta não tem caráter colaborativo, mas confrontativo, ao apontar diretamente para uma falha no cumprimento de promessas.'
      },
      {
        id: 101093,
        exercise_id: 10109,
        option_text: 'Abordagem educativa, pedindo ao entrevistado que explique os conceitos de déficit habitacional.',
        is_correct: false,
        explanation: 'Incorreto! A pergunta não busca explicações conceituais sobre déficit habitacional, mas justificativas para resultados abaixo do prometido.'
      },
      {
        id: 101094,
        exercise_id: 10109,
        option_text: 'Abordagem opinativa, solicitando que o entrevistado avalie políticas habitacionais de gestões anteriores.',
        is_correct: false,
        explanation: 'Incorreto! A pergunta não pede avaliação de gestões anteriores, mas explicações sobre os resultados da gestão atual do entrevistado.'
      },
      {
        id: 101095,
        exercise_id: 10109,
        option_text: 'Abordagem prospectiva, questionando sobre planos futuros para habitação.',
        is_correct: false,
        explanation: 'Incorreto! A pergunta não é prospectiva nem aborda planos futuros, mas confronta o entrevistado sobre resultados passados e atuais.'
      }
    ]
  },
  {
    id: 10110,
    category_id: 'interpretacao-jornalistico-2',
    question: 'Leia o trecho do depoimento jornalístico:\n\n"Foi um momento de pânico. Estávamos todos na plateia quando ouvimos um estrondo e o teto começou a desabar. Meu primeiro instinto foi proteger minha filha. Joguei-me sobre ela enquanto as pessoas corriam em direção às saídas. Lembro-me do barulho ensurdecedor e da poeira que dificultava a respiração. Conseguimos sair por uma saída lateral e só então percebi que havia me ferido no braço", relatou Ana Soares, uma das espectadoras presentes no teatro quando parte da estrutura cedeu na noite de ontem.\n\nQual característica da linguagem deste depoimento contribui para sua força narrativa?',
    explanation: 'Depoimentos jornalísticos utilizam recursos de linguagem específicos que contribuem para sua expressividade e impacto.',
    difficulty: 2,
    options: [
      {
        id: 101101,
        exercise_id: 10110,
        option_text: 'Uso de detalhes sensoriais e sequência cronológica que reconstituem vividamente a experiência.',
        is_correct: true,
        explanation: 'Correto! O depoimento utiliza detalhes sensoriais (estrondo, barulho ensurdecedor, poeira que dificultava a respiração) e apresenta os eventos em sequência cronológica, o que reconstitui vividamente a experiência para o leitor.'
      },
      {
        id: 101102,
        exercise_id: 10110,
        option_text: 'Análise técnica das causas estruturais que levaram ao desabamento do teto.',
        is_correct: false,
        explanation: 'Incorreto! O depoimento não apresenta análise técnica das causas do desabamento, apenas relata a experiência vivida pela depoente.'
      },
      {
        id: 101103,
        exercise_id: 10110,
        option_text: 'Linguagem formal e objetiva, típica de laudos periciais sobre acidentes.',
        is_correct: false,
        explanation: 'Incorreto! O depoimento não utiliza linguagem formal e técnica de laudos, mas linguagem mais subjetiva e vivencial.'
      },
      {
        id: 101104,
        exercise_id: 10110,
        option_text: 'Uso predominante de termos técnicos da engenharia civil para descrever o acidente.',
        is_correct: false,
        explanation: 'Incorreto! O depoimento não utiliza termos técnicos de engenharia, mas linguagem comum para descrever a experiência pessoal.'
      },
      {
        id: 101105,
        exercise_id: 10110,
        option_text: 'Avaliação estatística dos danos materiais e humanos causados pelo acidente.',
        is_correct: false,
        explanation: 'Incorreto! O depoimento não apresenta avaliação estatística de danos, apenas o relato pessoal da experiência da depoente.'
      }
    ]
  }
];
