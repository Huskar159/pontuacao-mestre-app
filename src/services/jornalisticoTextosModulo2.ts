import { Exercise } from './exerciseService';

// Exercícios para o Módulo 2 de Textos Jornalísticos - Entrevistas e Depoimentos

// Questão 1 - Entrevista com especialista
export const jornalisticoModulo2Exercicio1: Exercise = {
  id: 10011,
  category_id: 'interpretacao-jornalistico-2',
  question: 'Leia o trecho da entrevista com um economista:\n\n"Entrevistador: Como o senhor avalia o impacto da nova lei trabalhista no mercado de trabalho?\nEconomista: A reforma trouxe maior flexibilidade nas relações trabalhistas, mas também aumentou a precarização. Dados do IBGE mostram que 40% dos novos empregos criados são sem carteira assinada. Isso representa um desafio para a economia, pois trabalhadores informais têm menos direitos e estabilidade."\n\nQual característica da entrevista jornalística está presente neste trecho?',
  explanation: 'Entrevistas jornalísticas frequentemente buscam a opinião de especialistas para embasar a análise de temas complexos.',
  difficulty: 2,
  options: [
    {
      id: 100111,
      exercise_id: 10011,
      option_text: 'A apresentação de dados estatísticos para embasar a análise do especialista.',
      is_correct: true,
      explanation: 'Correto! O economista utiliza dados do IBGE para fundamentar sua análise sobre o impacto da reforma trabalhista.'
    },
    {
      id: 100112,
      exercise_id: 10011,
      option_text: 'A defesa de um ponto de vista político partidário.',
      is_correct: false,
      explanation: 'Incorreto! O especialista apresenta uma análise técnica, não um posicionamento político.'
    },
    {
      id: 100113,
      exercise_id: 10011,
      option_text: 'A descrição detalhada da vida pessoal do entrevistado.',
      is_correct: false,
      explanation: 'Incorreto! O foco está na análise técnica, não em aspectos pessoais do entrevistado.'
    },
    {
      id: 100114,
      exercise_id: 10011,
      option_text: 'A apresentação de uma narrativa ficcional sobre o tema.',
      is_correct: false,
      explanation: 'Incorreto! O texto é jornalístico, não ficcional, e apresenta análise baseada em dados reais.'
    },
    {
      id: 100115,
      exercise_id: 10011,
      option_text: 'A ausência de contexto para as informações apresentadas.',
      is_correct: false,
      explanation: 'Incorreto! O trecho apresenta contexto adequado para a análise do especialista.'
    }
  ]
};

// Questão 2 - Depoimento de vítima
export const jornalisticoModulo2Exercicio2: Exercise = {
  id: 10012,
  category_id: 'interpretacao-jornalistico-2',
  question: 'Leia o depoimento de uma vítima de enchente:\n\n"A água subiu tão rápido que não deu tempo de salvar quase nada. Perdemos móveis, eletrodomésticos, roupas, documentos. O pior foi ver as fotos da família sendo levadas pela água. Minha filha de 5 anos ainda tem medo quando começa a chover forte", desabafa Maria das Dores, 32 anos, que perdeu sua casa na última enchente.\n\nQual característica do depoimento jornalístico está presente neste trecho?',
  explanation: 'Depoimentos jornalísticos frequentemente apresentam relatos emocionais de pessoas diretamente afetadas pelos fatos noticiados.',
  difficulty: 1,
  options: [
    {
      id: 100121,
      exercise_id: 10012,
      option_text: 'A expressão de sentimentos e perdas pessoais decorrentes do fato noticiado.',
      is_correct: true,
      explanation: 'Correto! O depoimento apresenta claramente o impacto emocional e material sofrido pela vítima.'
    },
    {
      id: 100122,
      exercise_id: 10012,
      option_text: 'A análise técnica das causas da enchente.',
      is_correct: false,
      explanation: 'Incorreto! O foco está no relato pessoal, não em análises técnicas.'
    },
    {
      id: 100123,
      exercise_id: 10012,
      option_text: 'A defesa de políticas públicas de prevenção a desastres.',
      is_correct: false,
      explanation: 'Incorreto! Apesar de relevante, o depoimento não aborda propostas de políticas públicas.'
    },
    {
      id: 100124,
      exercise_id: 10012,
      option_text: 'A descrição imparcial e distanciada dos fatos.',
      is_correct: false,
      explanation: 'Incorreto! O depoimento é carregado de emoção e subjetividade, não sendo imparcial.'
    },
    {
      id: 100125,
      exercise_id: 10012,
      option_text: 'A apresentação de dados estatísticos sobre enchentes na região.',
      is_correct: false,
      explanation: 'Incorreto! O foco está no relato pessoal, não em dados estatísticos.'
    }
  ]
};

// Questão 3 - Entrevista com testemunha ocular
export const jornalisticoModulo2Exercicio3: Exercise = {
  id: 10013,
  category_id: 'interpretacao-jornalistico-2',
  question: 'Leia o trecho de uma entrevista com uma testemunha de um acidente:\n\n"Eu estava saindo do trabalho por volta das 18h quando ouvi um barulho muito forte. Quando olhei, vi o carro azul atravessar o sinal vermelho em alta velocidade e bater de frente com o ônibus. Foi tudo muito rápido. Corri para ajudar, mas já tinha muita gente no local. Liguei para o resgate imediatamente", relatou Carlos Eduardo, 42 anos, que trabalha em um comércio próximo ao local do acidente.\n\nQual é a principal característica deste tipo de depoimento jornalístico?',
  explanation: 'Depoimentos de testemunhas oculares são valiosos no jornalismo por trazerem relatos em primeira mão sobre acontecimentos importantes.',
  difficulty: 2,
  options: [
    {
      id: 100131,
      exercise_id: 10013,
      option_text: 'O relato detalhado de quem presenciou o fato, com informações sobre o que viu e ouviu.',
      is_correct: true,
      explanation: 'Correto! A testemunha descreve com detalhes o que presenciou, incluindo horário, cores e sequência dos eventos.'
    },
    {
      id: 100132,
      exercise_id: 10013,
      option_text: 'A análise das causas técnicas do acidente.',
      is_correct: false,
      explanation: 'Incorreto! O depoimento não faz análise técnica, apenas relata o que foi presenciado.'
    },
    {
      id: 100133,
      exercise_id: 10013,
      option_text: 'A opinião pessoal sobre quem foi o culpado pelo acidente.',
      is_correct: false,
      explanation: 'Incorreto! A testemunha não emite opinião sobre culpa, apenas relata os fatos que presenciou.'
    },
    {
      id: 100134,
      exercise_id: 10013,
      option_text: 'A descrição de sentimentos e emoções pessoais sobre o ocorrido.',
      is_correct: false,
      explanation: 'Incorreto! O foco está na descrição objetiva dos fatos, não nos sentimentos da testemunha.'
    },
    {
      id: 100135,
      exercise_id: 10013,
      option_text: 'A apresentação de dados estatísticos sobre acidentes no local.',
      is_correct: false,
      explanation: 'Incorreto! O depoimento não menciona estatísticas, apenas o relato pessoal do fato.'
    }
  ]
};

// Questão 4 - Entrevista com autoridade
export const jornalisticoModulo2Exercicio4: Exercise = {
  id: 10014,
  category_id: 'interpretacao-jornalistico-2',
  question: 'Leia o trecho de uma entrevista com o secretário municipal de saúde:\n\n"Repórter: Como a prefeitura está enfrentando o aumento de casos de dengue neste verão?\nSecretário: Implementamos um plano de contingência que inclui mutirões de limpeza em áreas de risco, contratação de agentes de endemias e campanhas educativas. Só neste mês, visitamos mais de 50 mil imóveis e recolhemos 120 toneladas de materiais que poderiam servir de criadouros. Além disso, estamos com equipes de plantão 24h nos postos de saúde para atender os casos suspeitos."\n\nQual é o principal objetivo desta entrevista jornalística?',
  explanation: 'Entrevistas com autoridades frequentemente buscam esclarecer as ações do poder público sobre questões relevantes para a população.',
  difficulty: 2,
  options: [
    {
      id: 100141,
      exercise_id: 10014,
      option_text: 'Informar a população sobre as medidas adotadas pelo poder público para enfrentar um problema de saúde.',
      is_correct: true,
      explanation: 'Correto! A entrevista tem como principal objetivo informar sobre as ações concretas da prefeitura no combate à dengue.'
    },
    {
      id: 100142,
      exercise_id: 10014,
      option_text: 'Criticar a atuação do poder público no combate à dengue.',
      is_correct: false,
      explanation: 'Incorreto! A entrevista é informativa, não crítica, apresentando as ações realizadas pela prefeitura.'
    },
    {
      id: 100143,
      exercise_id: 10014,
      option_text: 'Apresentar um relato emocional sobre vítimas da doença.',
      is_correct: false,
      explanation: 'Incorreto! O foco está nas ações governamentais, não em relatos emocionais.'
    },
    {
      id: 100144,
      exercise_id: 10014,
      option_text: 'Divulgar dados técnicos sobre a biologia do mosquito transmissor.',
      is_correct: false,
      explanation: 'Incorreto! A entrevista não entra em detalhes técnicos sobre o mosquito, mas nas ações de combate.'
    },
    {
      id: 100145,
      exercise_id: 10014,
      option_text: 'Promover um partido político específico.',
      is_correct: false,
      explanation: 'Incorreto! A entrevista é informativa e não faz propaganda política.'
    }
  ]
};

// Questão 5 - Depoimento de especialista em saúde
export const jornalisticoModulo2Exercicio5: Exercise = {
  id: 10015,
  category_id: 'interpretacao-jornalistico-2',
  question: 'Leia o trecho de uma entrevista com um infectologista:\n\n"A variante Ômicron é significativamente mais transmissível que as cepas anteriores do coronavírus. Nossos estudos mostram que a carga viral no trato respiratório superior é até 70 vezes maior, o que explica a rápida disseminação. No entanto, as evidências iniciais sugerem que pode causar formas menos graves da doença, especialmente em vacinados", explica Dra. Ana Beatriz, pesquisadora do Instituto de Doenças Infecciosas.\n\nQual característica da entrevista com especialista está presente neste trecho?',
  explanation: 'Entrevistas com especialistas em saúde frequentemente trazem informações técnicas baseadas em pesquisas científicas para esclarecer a população sobre questões médicas.',
  difficulty: 3,
  options: [
    {
      id: 100151,
      exercise_id: 10015,
      option_text: 'A apresentação de dados técnicos e conclusões baseadas em evidências científicas.',
      is_correct: true,
      explanation: 'Correto! A especialista apresenta dados específicos (70% maior carga viral) e conclusões baseadas em pesquisas científicas.'
    },
    {
      id: 100152,
      exercise_id: 10015,
      option_text: 'A defesa de um tratamento médico alternativo não comprovado.',
      is_correct: false,
      explanation: 'Incorreto! A entrevista não menciona tratamentos alternativos, apenas informações baseadas em evidências científicas.'
    },
    {
      id: 100153,
      exercise_id: 10015,
      option_text: 'O relato pessoal sobre experiências com pacientes.',
      is_correct: false,
      explanation: 'Incorreto! A especialista não relata experiências pessoais, mas sim dados de pesquisas.'
    },
    {
      id: 100154,
      exercise_id: 10015,
      option_text: 'A crítica às políticas públicas de saúde do governo.',
      is_correct: false,
      explanation: 'Incorreto! O foco está nas informações técnicas, não em críticas políticas.'
    },
    {
      id: 100155,
      exercise_id: 10015,
      option_text: 'A apresentação de uma opinião pessoal sem embasamento científico.',
      is_correct: false,
      explanation: 'Incorreto! Todas as afirmações da especialista são baseadas em evidências científicas e pesquisas.'
    }
  ]
};

// Questão 6 - Entrevista com artista
export const jornalisticoModulo2Exercicio6: Exercise = {
  id: 10016,
  category_id: 'interpretacao-jornalistico-2',
  question: 'Leia o trecho de uma entrevista com uma cantora:\n\n"Meu novo álbum fala sobre resiliência e superação. Cada música conta uma história de como é preciso cair e levantar, errar e recomeçar. A faixa-título, \'Renascida\', foi escrita em um momento muito difícil da minha vida, quando achei que não conseguiria mais cantar por causa dos problemas nas cordas vocais. Foi um período de muito aprendizado e autoconhecimento", revela a cantora em entrevista exclusiva.\n\nQual característica da entrevista com personalidades artísticas está presente neste trecho?',
  explanation: 'Entrevistas com artistas frequentemente exploram o processo criativo e as experiências pessoais que influenciam seu trabalho.',
  difficulty: 2,
  options: [
    {
      id: 100161,
      exercise_id: 10016,
      option_text: 'A conexão entre a vida pessoal do artista e sua obra artística.',
      is_correct: true,
      explanation: 'Correto! A cantora relaciona diretamente suas experiências pessoais com as músicas do novo álbum.'
    },
    {
      id: 100162,
      exercise_id: 10016,
      option_text: 'A análise técnica das composições musicais do álbum.',
      is_correct: false,
      explanation: 'Incorreto! A entrevista não entra em detalhes técnicos sobre as composições.'
    },
    {
      id: 100163,
      exercise_id: 10016,
      option_text: 'A divulgação de dados sobre vendas e posições em paradas musicais.',
      is_correct: false,
      explanation: 'Incorreto! O foco está no aspecto artístico e pessoal, não em números de vendas.'
    },
    {
      id: 100164,
      exercise_id: 10016,
      option_text: 'A crítica especializada sobre o trabalho do artista.',
      is_correct: false,
      explanation: 'Incorreto! O trecho apresenta a fala da própria artista, não uma crítica externa.'
    },
    {
      id: 100165,
      exercise_id: 10016,
      option_text: 'A descrição detalhada da rotina de estúdio de gravação.',
      is_correct: false,
      explanation: 'Incorreto! A entrevista não menciona detalhes técnicos da gravação.'
    }
  ]
};

// Questão 7 - Depoimento de empreendedor
export const jornalisticoModulo2Exercicio7: Exercise = {
  id: 10017,
  category_id: 'interpretacao-jornalistico-2',
  question: 'Leia o depoimento de uma empreendedora:\n\n"Comecei a fazer bolos caseiros para complementar a renda da família. No início, vendia apenas para vizinhos e amigos. Depois criei uma página no Instagram para divulgar meus trabalhos e o negócio cresceu muito. Hoje, três anos depois, tenho uma loja física, quatro funcionários e atendo encomendas de toda a cidade. O segredo foi investir em qualidade, criatividade e nunca deixar de acreditar no meu potencial", conta Ana Lúcia, 38 anos, dona da Doces Sonhos.\n\nQual é o principal objetivo deste depoimento jornalístico?',
  explanation: 'Depoimentos de empreendedores frequentemente buscam inspirar outros leitores mostrando histórias de superação e sucesso nos negócios.',
  difficulty: 2,
  options: [
    {
      id: 100171,
      exercise_id: 10017,
      option_text: 'Mostrar uma história de superação e sucesso no empreendedorismo.',
      is_correct: true,
      explanation: 'Correto! O depoimento apresenta uma trajetória de crescimento, desde o início modesto até o sucesso atual do negócio.'
    },
    {
      id: 100172,
      exercise_id: 10017,
      option_text: 'Divulgar os produtos e serviços da empresa Doces Sonhos.',
      is_correct: false,
      explanation: 'Incorreto! O foco está na trajetória da empreendedora, não na divulgação específica dos produtos.'
    },
    {
      id: 100173,
      exercise_id: 10017,
      option_text: 'Criticar a falta de apoio governamental para pequenos negócios.',
      is_correct: false,
      explanation: 'Incorreto! A empreendedora não faz críticas, apenas compartilha sua experiência positiva.'
    },
    {
      id: 100174,
      exercise_id: 10017,
      option_text: 'Apresentar estatísticas sobre o mercado de confeitaria no Brasil.',
      is_correct: false,
      explanation: 'Incorreto! O depoimento é pessoal e não menciona dados do setor.'
    },
    {
      id: 100175,
      exercise_id: 10017,
      option_text: 'Ensinar receitas de bolos caseiros para os leitores.',
      is_correct: false,
      explanation: 'Incorreto! O foco está na trajetória empreendedora, não em ensinar receitas.'
    }
  ]
};

// Questão 8 - Entrevista com atleta
export const jornalisticoModulo2Exercicio8: Exercise = {
  id: 10018,
  category_id: 'interpretacao-jornalistico-2',
  question: 'Leia o trecho de uma entrevista com um atleta olímpico:\n\n"Treino sete horas por dia, seis dias por semana. São muitas renúncias, mas cada gota de suor vale a pena quando você sobe no pódio. A medalha de ouro em Tóquio foi a realização de um sonho de infância. Meus pais se sacrificaram muito para me levar aos treinos quando criança. Essa vitória é deles também", emociona-se o atleta.\n\nQual característica da entrevista com atletas está presente neste trecho?',
  explanation: 'Entrevistas com atletas frequentemente destacam a dedicação, superação e o aspecto emocional por trás das conquistas esportivas.',
  difficulty: 2,
  options: [
    {
      id: 100181,
      exercise_id: 10018,
      option_text: 'A ênfase no esforço, dedicação e apoio familiar por trás do sucesso esportivo.',
      is_correct: true,
      explanation: 'Correto! O atleta destaca o treinamento intenso, as renúncias e o apoio dos pais como elementos fundamentais para sua conquista.'
    },
    {
      id: 100182,
      exercise_id: 10018,
      option_text: 'A descrição detalhada da técnica esportiva utilizada nas competições.',
      is_correct: false,
      explanation: 'Incorreto! O foco não está nos aspectos técnicos do esporte, mas sim na jornada e no aspecto humano.'
    },
    {
      id: 100183,
      exercise_id: 10018,
      option_text: 'A crítica às condições de treinamento oferecidas pelo país.',
      is_correct: false,
      explanation: 'Incorreto! O atleta não faz críticas, mas sim agradece o apoio recebido.'
    },
    {
      id: 100184,
      exercise_id: 10018,
      option_text: 'A comparação com outros atletas da mesma modalidade.',
      is_correct: false,
      explanation: 'Incorreto! O atleta fala sobre sua própria trajetória, sem comparar-se a outros.'
    },
    {
      id: 100185,
      exercise_id: 10018,
      option_text: 'A descrição da rotina de patrocínios e contratos publicitários.',
      is_correct: false,
      explanation: 'Incorreto! O foco está no aspecto esportivo e emocional, não nos aspectos financeiros da carreira.'
    }
  ]
};

// Questão 9 - Depoimento de vítima de violência
export const jornalisticoModulo2Exercicio9: Exercise = {
  id: 10019,
  category_id: 'interpretacao-jornalistico-2',
  question: 'Leia o depoimento de uma vítima de violência doméstica:\n\n"Por muito tempo me calei com medo, achando que a culpa era minha. Ele me dizia que ninguém ia acreditar em mim. Quando consegui denunciar, foi a primeira vez que me senti livre. Quero que outras mulheres na mesma situação saibam que não estão sozinhas e que existe ajuda", relata Maria (nome fictício), 34 anos, que preferiu não se identificar.\n\nQual é a importância deste tipo de depoimento no jornalismo?',
  explanation: 'Depoimentos de vítimas de violência doméstica são importantes para dar voz a quem sofreu, conscientizar a sociedade e encorajar outras vítimas a buscarem ajuda.',
  difficulty: 3,
  options: [
    {
      id: 100191,
      exercise_id: 10019,
      option_text: 'Dar visibilidade ao problema e encorajar outras vítimas a buscarem ajuda.',
      is_correct: true,
      explanation: 'Correto! O depoimento cumpre um papel social importante ao quebrar o silêncio sobre a violência doméstica e mostrar que há saída.'
    },
    {
      id: 100192,
      exercise_id: 10019,
      option_text: 'Expor detalhes da vida íntima da vítima para chamar atenção.',
      is_correct: false,
      explanation: 'Incorreto! O depoimento é dado de forma responsável, preservando a identidade da vítima e focando na mensagem de superação.'
    },
    {
      id: 100193,
      exercise_id: 10019,
      option_text: 'Culpar as vítimas pela situação de violência que vivenciaram.',
      is_correct: false,
      explanation: 'Incorreto! O depoimento não responsabiliza a vítima, pelo contrário, mostra que a culpa nunca é dela.'
    },
    {
      id: 100194,
      exercise_id: 10019,
      option_text: 'Promover vingança contra os agressores.',
      is_correct: false,
      explanation: 'Incorreto! O foco está na superação e no apoio, não na vingança.'
    },
    {
      id: 100195,
      exercise_id: 10019,
      option_text: 'Banalizar a violência doméstica como algo comum.',
      is_correct: false,
      explanation: 'Incorreto! O depoimento alerta sobre a gravidade do problema, não o banaliza.'
    }
  ]
};

// Questão 10 - Entrevista com professor universitário
export const jornalisticoModulo2Exercicio10: Exercise = {
  id: 10020,
  category_id: 'interpretacao-jornalistico-2',
  question: 'Leia o trecho de uma entrevista com um professor universitário:\n\n"A educação a distância veio para ficar, mas não substitui completamente o ensino presencial. Nossas pesquisas mostram que os alunos aprendem melhor quando há interação direta com professores e colegas. No entanto, o modelo híbrido, que combina momentos presenciais e online, tem se mostrado bastante promissor, especialmente para alunos que trabalham e estudam", analisa o professor Dr. Carlos Mendes, da Faculdade de Educação.\n\nQual característica da entrevista com acadêmicos está presente neste trecho?',
  explanation: 'Entrevistas com acadêmicos frequentemente apresentam análises baseadas em pesquisas científicas sobre temas relevantes para a sociedade.',
  difficulty: 3,
  options: [
    {
      id: 100201,
      exercise_id: 10020,
      option_text: 'A apresentação de conclusões baseadas em pesquisas acadêmicas sobre o tema.',
      is_correct: true,
      explanation: 'Correto! O professor apresenta uma análise fundamentada em pesquisas sobre educação, característica típica de entrevistas com acadêmicos.'
    },
    {
      id: 100202,
      exercise_id: 10020,
      option_text: 'A defesa de opiniões pessoais sem embasamento científico.',
      is_correct: false,
      explanation: 'Incorreto! O professor se baseia em pesquisas, não em opiniões sem fundamento.'
    },
    {
      id: 100203,
      exercise_id: 10020,
      option_text: 'A descrição detalhada da rotina de trabalho na universidade.',
      is_correct: false,
      explanation: 'Incorreto! O foco está na análise do tema, não na rotina de trabalho.'
    },
    {
      id: 100204,
      exercise_id: 10020,
      option_text: 'A crítica pessoal a colegas de profissão.',
      is_correct: false,
      explanation: 'Incorreto! A entrevista é construtiva e não faz críticas pessoais.'
    },
    {
      id: 100205,
      exercise_id: 10020,
      option_text: 'A promoção de um curso ou instituição específica.',
      is_correct: false,
      explanation: 'Incorreto! Apesar de mencionar sua instituição, o foco está na análise do tema, não em promoção.'
    }
  ]
};
