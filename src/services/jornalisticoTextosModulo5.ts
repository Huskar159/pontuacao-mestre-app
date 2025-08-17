import { Exercise } from './exerciseService';

// Módulo 5: Análise de notícias, artigos de opinião e editoriais

export const jornalisticoModulo5Exercicio1: Exercise = {
  id: 10403,
  category_id: 'interpretacao-jornalistico-5',
  question: 'Leia o trecho de texto jornalístico:\n\n"A Prefeitura de São Paulo anunciou ontem a inauguração de cinco novas estações de bicicletas compartilhadas. Segundo o secretário de Transportes, a iniciativa faz parte do plano de mobilidade urbana e visa reduzir o trânsito e a poluição na região central. As estações estarão disponíveis a partir da próxima semana e poderão ser usadas por moradores e turistas."\n\nQual é a ideia principal do texto jornalístico acima?',
  explanation: 'Textos jornalísticos informativos apresentam uma ideia central que sintetiza o fato noticiado.',
  difficulty: 1,
  options: [
    {
      id: 104011,
      exercise_id: 10403,
      option_text: 'Destacar a importância das bicicletas para o turismo.',
      is_correct: false,
      explanation: 'Incorreto! Embora o texto mencione que as estações poderão ser usadas por turistas, o foco principal não é destacar a importância das bicicletas para o turismo.'
    },
    {
      id: 104012,
      exercise_id: 10403,
      option_text: 'Informar sobre a inauguração de estações de bicicletas compartilhadas pela Prefeitura.',
      is_correct: true,
      explanation: 'Correto! Você identificou corretamente o foco da notícia: a abertura das novas estações de bicicletas. O texto enfatiza o anúncio oficial e os objetivos dessa ação.'
    },
    {
      id: 104013,
      exercise_id: 10403,
      option_text: 'Criticar a política de mobilidade urbana do governo municipal.',
      is_correct: false,
      explanation: 'Incorreto! O texto não contém críticas à política de mobilidade urbana, apenas informa sobre uma ação da prefeitura nessa área.'
    },
    {
      id: 104014,
      exercise_id: 10403,
      option_text: 'Apresentar opiniões de moradores sobre o trânsito.',
      is_correct: false,
      explanation: 'Incorreto! O texto não apresenta opiniões de moradores, apenas menciona que eles poderão usar as estações de bicicletas.'
    },
    {
      id: 104015,
      exercise_id: 10403,
      option_text: 'Convocar a população para participar de um evento ciclístico.',
      is_correct: false,
      explanation: 'Incorreto! O texto não faz nenhum tipo de convocação para evento ciclístico, apenas informa sobre a inauguração das estações de bicicletas.'
    }
  ]
};

export const jornalisticoModulo5Exercicio2: Exercise = {
  id: 10404,
  category_id: 'interpretacao-jornalistico-5',
  question: 'Leia o trecho:\n\n"O índice de desemprego no Brasil caiu para 8,5% em abril, informou o IBGE. Trata-se da menor taxa registrada desde março de 2020, antes do início da pandemia. Economistas apontam que a retomada de setores como serviços e comércio é o principal motivo para a queda."\n\nNesse texto, qual é a função da expressão "antes do início da pandemia"?',
  explanation: 'Expressões temporais em textos jornalísticos podem exercer diferentes funções na construção do sentido da notícia.',
  difficulty: 2,
  options: [
    {
      id: 104016,
      exercise_id: 10404,
      option_text: 'Apresentar opinião dos economistas.',
      is_correct: false,
      explanation: 'Incorreto! A expressão não apresenta a opinião dos economistas, que aparece em outra parte do texto quando se fala sobre os motivos da queda do desemprego.'
    },
    {
      id: 104017,
      exercise_id: 10404,
      option_text: 'Justificar o motivo da queda no desemprego.',
      is_correct: false,
      explanation: 'Incorreto! A expressão não justifica o motivo da queda, apenas estabelece um marco temporal para comparação com a taxa atual.'
    },
    {
      id: 104018,
      exercise_id: 10404,
      option_text: 'Contextualizar temporalmente o dado apresentado.',
      is_correct: true,
      explanation: 'Correto! A expressão serve para situar o leitor no tempo, mostrando que a taxa de desemprego não era tão baixa desde o período pré-pandemia.'
    },
    {
      id: 104019,
      exercise_id: 10404,
      option_text: 'Destacar a credibilidade do IBGE.',
      is_correct: false,
      explanation: 'Incorreto! A expressão não tem relação com a credibilidade do IBGE, apenas contextualiza temporalmente quando foi a última vez que o índice esteve tão baixo.'
    },
    {
      id: 104020,
      exercise_id: 10404,
      option_text: 'Exemplificar outros índices econômicos.',
      is_correct: false,
      explanation: 'Incorreto! A expressão não exemplifica outros índices econômicos, apenas fornece um contexto temporal para o dado do desemprego apresentado.'
    }
  ]
};

export const jornalisticoModulo5Exercicio3: Exercise = {
  id: 10405,
  category_id: 'interpretacao-jornalistico-5',
  question: 'Leia o trecho:\n\n"Em entrevista exclusiva, a ministra da Saúde afirmou que o país seguirá vacinando a população contra a gripe mesmo durante o inverno. \'Não podemos descuidar da imunização\', destacou ela. A campanha começa em maio e prevê atingir 80 milhões de pessoas."\n\nO tom predominante do texto é:',
  explanation: 'O tom de um texto jornalístico revela a abordagem e o tratamento dado à informação pelo veículo de comunicação.',
  difficulty: 2,
  options: [
    {
      id: 104021,
      exercise_id: 10405,
      option_text: 'Crítico e analítico.',
      is_correct: false,
      explanation: 'Incorreto! O texto não apresenta análises aprofundadas nem críticas à campanha de vacinação ou às declarações da ministra.'
    },
    {
      id: 104022,
      exercise_id: 10405,
      option_text: 'Humorístico e irônico.',
      is_correct: false,
      explanation: 'Incorreto! Não há elementos de humor ou ironia no texto, que trata de um tema sério de saúde pública.'
    },
    {
      id: 104023,
      exercise_id: 10405,
      option_text: 'Informativo e institucional.',
      is_correct: true,
      explanation: 'Exato! O texto apresenta dados oficiais (entrevista, campanha) e passa uma mensagem institucional, sem críticas ou exageros.'
    },
    {
      id: 104024,
      exercise_id: 10405,
      option_text: 'Poético e descritivo.',
      is_correct: false,
      explanation: 'Incorreto! O texto não utiliza linguagem poética nem se concentra em descrições detalhadas, sendo direto e objetivo.'
    },
    {
      id: 104025,
      exercise_id: 10405,
      option_text: 'Sensacionalista e alarmista.',
      is_correct: false,
      explanation: 'Incorreto! O texto não contém elementos sensacionalistas ou alarmistas, apresentando as informações de forma equilibrada e objetiva.'
    }
  ]
};

export const jornalisticoModulo5Exercicio4: Exercise = {
  id: 10406,
  category_id: 'interpretacao-jornalistico-5',
  question: 'Leia o trecho:\n\n"Relatório divulgado hoje pela ONG Meio Ambiente em Ação revela que, em 2024, a Mata Atlântica perdeu 2% de sua cobertura vegetal. Especialistas alertam para o risco de extinção de espécies endêmicas se o desmatamento não for contido."\n\nQual tipo de recurso informativo o repórter utiliza para dar mais credibilidade à notícia?',
  explanation: 'Repórteres utilizam diferentes recursos para conferir credibilidade às informações apresentadas em textos jornalísticos.',
  difficulty: 2,
  options: [
    {
      id: 104026,
      exercise_id: 10406,
      option_text: 'Citação de dados de uma ONG e menção a especialistas.',
      is_correct: true,
      explanation: 'Correto: o texto remete a informações de uma ONG e ainda traz o alerta de especialistas, aumentando a confiabilidade das informações.'
    },
    {
      id: 104027,
      exercise_id: 10406,
      option_text: 'Uso de linguagem emotiva para sensibilizar o leitor.',
      is_correct: false,
      explanation: 'Incorreto! O texto mantém um tom objetivo, sem recorrer a apelos emocionais para sensibilizar o leitor.'
    },
    {
      id: 104028,
      exercise_id: 10406,
      option_text: 'Apresentação de depoimentos de moradores locais.',
      is_correct: false,
      explanation: 'Incorreto! O texto não apresenta depoimentos de moradores, apenas menciona dados de uma ONG e a opinião de especialistas.'
    },
    {
      id: 104029,
      exercise_id: 10406,
      option_text: 'Entrevista exclusiva com políticos.',
      is_correct: false,
      explanation: 'Incorreto! Não há menção a entrevistas com políticos no texto, apenas referência a uma ONG e especialistas.'
    },
    {
      id: 104030,
      exercise_id: 10406,
      option_text: 'Comparação com outros biomas brasileiros.',
      is_correct: false,
      explanation: 'Incorreto! O texto trata apenas da Mata Atlântica, sem estabelecer comparações com outros biomas brasileiros.'
    }
  ]
};

export const jornalisticoModulo5Exercicio5: Exercise = {
  id: 10407,
  category_id: 'interpretacao-jornalistico-5',
  question: 'Leia o trecho:\n\n"O prefeito anunciou a construção de uma nova linha de metrô que ligará o centro histórico à zona leste. No entanto, críticos do projeto afirmam que o investimento é alto demais para o orçamento municipal. \'É necessária uma reavaliação\', afirmou Mariana Silva, economista."\n\nA palavra "no entanto" exerce qual função nessa passagem?',
  explanation: 'Conectivos em textos jornalísticos exercem funções específicas na articulação das ideias e na construção do sentido.',
  difficulty: 2,
  options: [
    {
      id: 104031,
      exercise_id: 10407,
      option_text: 'Introduzir um exemplo prático.',
      is_correct: false,
      explanation: 'Incorreto! A expressão não introduz um exemplo, mas sim uma ideia contrastante em relação à primeira parte do texto.'
    },
    {
      id: 104032,
      exercise_id: 10407,
      option_text: 'Apresentar contraste entre ideias.',
      is_correct: true,
      explanation: 'Exato! \'No entanto\' articula a oposição entre o anúncio do prefeito e a crítica dos opositores ao projeto.'
    },
    {
      id: 104033,
      exercise_id: 10407,
      option_text: 'Reforçar a opinião do prefeito.',
      is_correct: false,
      explanation: 'Incorreto! A expressão não reforça a opinião do prefeito, mas introduz uma visão contrária à dele.'
    },
    {
      id: 104034,
      exercise_id: 10407,
      option_text: 'Indicar uma conclusão indiscutível.',
      is_correct: false,
      explanation: 'Incorreto! A expressão não indica uma conclusão, mas introduz um ponto de vista divergente sobre o projeto do metrô.'
    },
    {
      id: 104035,
      exercise_id: 10407,
      option_text: 'Sugerir uma solução alternativa.',
      is_correct: false,
      explanation: 'Incorreto! A expressão não sugere uma solução alternativa, apenas introduz uma crítica ao projeto anunciado.'
    }
  ]
};

export const jornalisticoModulo5Exercicio6: Exercise = {
  id: 10408,
  category_id: 'interpretacao-jornalistico-5',
  question: 'Leia o trecho:\n\n"De acordo com estudo do Instituto de Pesquisa Econômica Aplicada (IPEA), o preço dos alimentos subiu 15% no primeiro trimestre de 2025. A alta impacta principalmente as famílias de baixa renda, que já enfrentam dificuldades para equilibrar o orçamento doméstico."\n\nNesse trecho, a expressão "impacta principalmente as famílias de baixa renda" é um exemplo de:',
  explanation: 'Em textos jornalísticos, diferentes tipos de informação podem ser apresentados, desde fatos objetivos até inferências e opiniões.',
  difficulty: 3,
  options: [
    {
      id: 104036,
      exercise_id: 10408,
      option_text: 'Fato objeto de estatística.',
      is_correct: false,
      explanation: 'Incorreto! A expressão não apresenta um dado estatístico específico sobre o impacto nas famílias de baixa renda, mas uma conclusão lógica a partir do dado anterior.'
    },
    {
      id: 104037,
      exercise_id: 10408,
      option_text: 'Opinião sem respaldo de dados.',
      is_correct: false,
      explanation: 'Incorreto! Embora seja uma afirmação interpretativa, ela tem respaldo lógico nos dados apresentados sobre o aumento de preços, não sendo uma opinião sem base.'
    },
    {
      id: 104038,
      exercise_id: 10408,
      option_text: 'Inferência baseada em informação anterior.',
      is_correct: true,
      explanation: 'Correto! O autor infere que a alta de preços prejudica quem tem menos recursos, a partir dos dados do IPEA.'
    },
    {
      id: 104039,
      exercise_id: 10408,
      option_text: 'Citação direta de um representante do IPEA.',
      is_correct: false,
      explanation: 'Incorreto! O texto não indica que essa afirmação seja uma citação direta de alguém do IPEA, apresentando-a como parte da narrativa do jornalista.'
    },
    {
      id: 104040,
      exercise_id: 10408,
      option_text: 'Alusão a pesquisa qualitativa com consumidores.',
      is_correct: false,
      explanation: 'Incorreto! Não há menção a nenhuma pesquisa qualitativa com consumidores que sustente essa afirmação específica.'
    }
  ]
};

export const jornalisticoModulo5Exercicio7: Exercise = {
  id: 10409,
  category_id: 'interpretacao-jornalistico-5',
  question: 'Leia o trecho:\n\n"Segundo o Ministério da Educação, as inscrições para o Exame Nacional do Ensino Médio (ENEM) começam no dia 10 de maio e vão até o dia 21 de maio. A taxa de inscrição é de R$ 88, mas estudantes de baixa renda podem solicitar isenção."\n\nQual é o público-alvo implícito no texto?',
  explanation: 'Textos jornalísticos frequentemente são direcionados a públicos específicos, que podem ser identificados por elementos implícitos e explícitos no texto.',
  difficulty: 2,
  options: [
    {
      id: 104041,
      exercise_id: 10409,
      option_text: 'Apenas estudantes de baixa renda.',
      is_correct: false,
      explanation: 'Incorreto! Embora os estudantes de baixa renda sejam mencionados especificamente em relação à isenção, o texto se dirige a todos os possíveis candidatos ao ENEM.'
    },
    {
      id: 104042,
      exercise_id: 10409,
      option_text: 'Professores de escolas públicas.',
      is_correct: false,
      explanation: 'Incorreto! O texto não contém informações direcionadas especificamente a professores, mas a potenciais candidatos ao exame.'
    },
    {
      id: 104043,
      exercise_id: 10409,
      option_text: 'Candidatos ao ENEM, especialmente aqueles em situação econômica mais desfavorecida.',
      is_correct: true,
      explanation: 'Isso mesmo! Embora o texto informe datas e taxas para todos, há ênfase na isenção para estudantes de baixa renda, o que aponta o público-alvo principal.'
    },
    {
      id: 104044,
      exercise_id: 10409,
      option_text: 'Organizadores do ENEM.',
      is_correct: false,
      explanation: 'Incorreto! O texto não é dirigido aos organizadores do exame, mas sim aos potenciais candidatos.'
    },
    {
      id: 104045,
      exercise_id: 10409,
      option_text: 'Políticos envolvidos na Educação.',
      is_correct: false,
      explanation: 'Incorreto! Não há indícios de que o texto seja direcionado a políticos, mas sim a estudantes interessados em prestar o ENEM.'
    }
  ]
};

export const jornalisticoModulo5Exercicio8: Exercise = {
  id: 10410,
  category_id: 'interpretacao-jornalistico-5',
  question: 'Leia o trecho:\n\n"Uma reportagem especial investigou as causas do aumento dos preços dos combustíveis no Brasil. Os repórteres entrevistaram representantes de refinarias, economistas e motoristas de aplicativo para entender as diferentes perspectivas do problema."\n\nQual procedimento jornalístico mencionado no texto reforça a objetividade da matéria?',
  explanation: 'A objetividade jornalística é construída por meio de procedimentos específicos que buscam conferir equilíbrio e imparcialidade à cobertura.',
  difficulty: 2,
  options: [
    {
      id: 104046,
      exercise_id: 10410,
      option_text: 'O uso de linguagem coloquial.',
      is_correct: false,
      explanation: 'Incorreto! Não há menção ao uso de linguagem coloquial no texto, nem esse seria um fator que necessariamente contribui para a objetividade jornalística.'
    },
    {
      id: 104047,
      exercise_id: 10410,
      option_text: 'A entrevista apenas com motoristas de aplicativo.',
      is_correct: false,
      explanation: 'Incorreto! O texto menciona que foram entrevistados representantes de refinarias, economistas e motoristas de aplicativo, não apenas os últimos.'
    },
    {
      id: 104048,
      exercise_id: 10410,
      option_text: 'A diversificação de fontes consultadas.',
      is_correct: true,
      explanation: 'Correto! Ao ouvir diferentes setores (refinarias, economistas, motoristas), a reportagem busca equilíbrio e imparcialidade.'
    },
    {
      id: 104049,
      exercise_id: 10410,
      option_text: 'A opinião pessoal do repórter sobre o assunto.',
      is_correct: false,
      explanation: 'Incorreto! Não há menção à opinião pessoal do repórter no texto, o que inclusive iria contra o princípio de objetividade jornalística.'
    },
    {
      id: 104050,
      exercise_id: 10410,
      option_text: 'A ausência de dados estatísticos.',
      is_correct: false,
      explanation: 'Incorreto! A ausência de dados estatísticos não contribui para a objetividade; pelo contrário, dados concretos geralmente reforçam a credibilidade e objetividade de uma reportagem.'
    }
  ]
};

export const jornalisticoModulo5Exercicio9: Exercise = {
  id: 10411,
  category_id: 'interpretacao-jornalistico-5',
  question: 'Leia o trecho:\n\n"O jornal publicou editorial defendendo a importância da preservação do Pantanal. Segundo o veículo, políticas públicas mais rigorosas são urgentes para evitar a destruição desse bioma."\n\nComo você caracteriza o tipo textual do trecho "Segundo o veículo, políticas públicas mais rigorosas são urgentes"?',
  explanation: 'Os diferentes tipos de texto jornalístico possuem características específicas que os distinguem entre si.',
  difficulty: 3,
  options: [
    {
      id: 104051,
      exercise_id: 10411,
      option_text: 'Matéria de capa.',
      is_correct: false,
      explanation: 'Incorreto! O texto não indica que se trata de uma matéria de capa, apenas menciona um editorial publicado pelo jornal.'
    },
    {
      id: 104052,
      exercise_id: 10411,
      option_text: 'Editorial de opinião.',
      is_correct: true,
      explanation: 'Exatamente. Um editorial expressa o posicionamento institucional do veículo e defende uma ideia, neste caso, maior rigor nas políticas públicas.'
    },
    {
      id: 104053,
      exercise_id: 10411,
      option_text: 'Notícia de informação bruta.',
      is_correct: false,
      explanation: 'Incorreto! O trecho representa uma tomada de posição do jornal, não uma simples notícia informativa.'
    },
    {
      id: 104054,
      exercise_id: 10411,
      option_text: 'Entrevista jornalística.',
      is_correct: false,
      explanation: 'Incorreto! Não há formato de perguntas e respostas ou indicação de entrevista no texto.'
    },
    {
      id: 104055,
      exercise_id: 10411,
      option_text: 'Reportagem investigativa.',
      is_correct: false,
      explanation: 'Incorreto! O texto não indica uma investigação jornalística, mas sim a expressão de um posicionamento editorial do veículo.'
    }
  ]
};

export const jornalisticoModulo5Exercicio10: Exercise = {
  id: 10412,
  category_id: 'interpretacao-jornalistico-5',
  question: 'Leia o trecho:\n\n"Em reportagem publicada online, o portal Ambiente+ mencionou que a última década foi a mais quente já registrada e que as mudanças climáticas aceleram a queima de combustíveis fósseis. A matéria incluiu infográficos e gráficos interativos para demonstrar a evolução das temperaturas."\n\nQual é a principal vantagem, segundo o texto, do uso de infográficos e gráficos interativos em reportagens jornalísticas?',
  explanation: 'Recursos visuais como infográficos e gráficos interativos são cada vez mais utilizados no jornalismo digital e cumprem funções específicas.',
  difficulty: 2,
  options: [
    {
      id: 104056,
      exercise_id: 10412,
      option_text: 'Aumentar o tempo de permanência do leitor na página.',
      is_correct: false,
      explanation: 'Incorreto! O texto não menciona aumento do tempo de permanência na página como objetivo dos recursos visuais.'
    },
    {
      id: 104057,
      exercise_id: 10412,
      option_text: 'Substituir completamente o texto escrito.',
      is_correct: false,
      explanation: 'Incorreto! O texto não sugere que os infográficos substituam o conteúdo textual, mas que o complementem visualmente.'
    },
    {
      id: 104058,
      exercise_id: 10412,
      option_text: 'Demonstrar visualmente dados complexos, tornando-os mais acessíveis.',
      is_correct: true,
      explanation: 'Isso! A inclusão de elementos visuais ajuda o leitor a entender rapidamente fatos estatísticos, como a evolução das temperaturas.'
    },
    {
      id: 104059,
      exercise_id: 10412,
      option_text: 'Destacar apenas a opinião do jornalista.',
      is_correct: false,
      explanation: 'Incorreto! Os infográficos não servem para destacar opiniões, mas para visualizar dados objetivos.'
    },
    {
      id: 104060,
      exercise_id: 10412,
      option_text: 'Reduzir a necessidade de fontes especializadas.',
      is_correct: false,
      explanation: 'Incorreto! O uso de recursos visuais não elimina a necessidade de fontes especializadas para dar credibilidade à reportagem.'
    }
  ]
};
