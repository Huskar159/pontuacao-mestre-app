import { Exercise } from './exerciseService';


// Novos exercícios para o módulo de textos científicos
export const novosExerciciosCientificos: Exercise[] = [
  {
    id: 20003,
    category_id: 'interpretacao-cientifico',
    question: 'Leia o trecho do resumo de um artigo científico:\n\n"O presente estudo investigou a eficácia de diferentes estratégias de ensino no desenvolvimento de habilidades de leitura em crianças disléxicas. Foram selecionados 48 participantes (n=48) com idade entre 8 e 12 anos, divididos aleatoriamente em três grupos: intervenção fonêmica, intervenção visual e grupo controle. Após 16 semanas de intervenção, observou-se melhora significativa no desempenho de leitura nos grupos experimentais em comparação ao grupo controle, com destaque para a intervenção fonêmica."\n\nQue elemento estrutural característico de textos científicos está presente neste trecho?',
    explanation: 'Os artigos científicos seguem uma estrutura padrão com elementos específicos.',
    difficulty: 2,
    options: [
      {
        id: 200031,
        exercise_id: 20003,
        option_text: 'Descrição da metodologia e apresentação dos principais resultados da pesquisa.',
        is_correct: true,
        explanation: 'Correto! O texto descreve a metodologia (número de participantes, grupos, duração) e apresenta os principais resultados obtidos, elementos essenciais de um resumo científico.'
      },
      {
        id: 200032,
        exercise_id: 20003,
        option_text: 'Revisão detalhada da literatura sobre dislexia e métodos de ensino.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta uma revisão da literatura, que seria um elemento típico da introdução, não do resumo.'
      },
      {
        id: 200033,
        exercise_id: 20003,
        option_text: 'Discussão das implicações teóricas e limitações metodológicas do estudo.',
        is_correct: false,
        explanation: 'Incorreto! O texto não discute implicações teóricas nem limitações, elementos que estariam presentes na discussão do artigo, não no resumo.'
      },
      {
        id: 200034,
        exercise_id: 20003,
        option_text: 'Apresentação de tabelas estatísticas detalhadas e gráficos comparativos.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta tabelas ou gráficos, que seriam elementos típicos da seção de resultados de um artigo completo.'
      },
      {
        id: 200035,
        exercise_id: 20003,
        option_text: 'Descrição detalhada dos procedimentos estatísticos utilizados na análise de dados.',
        is_correct: false,
        explanation: 'Incorreto! O texto não descreve em detalhes os procedimentos estatísticos, informação que estaria na seção de métodos de um artigo completo.'
      }
    ]
  },
  {
    id: 20004,
    category_id: 'interpretacao-cientifico',
    question: 'Analise o seguinte trecho de um artigo científico:\n\n"A hipotálamo-hipófise-adrenal (HHA) desempenha papel crucial na resposta ao estresse. Sob estresse agudo, o hipotálamo secreta o hormônio liberador de corticotrofina (CRH), que estimula a hipófise anterior a liberar o hormônio adrenocorticotrópico (ACTH). Este, por sua vez, induz a secreção de glicocorticoides pelo córtex adrenal, principalmente o cortisol em humanos."\n\nQual a função deste trecho em um artigo científico?',
    explanation: 'Os diferentes trechos de um artigo científico cumprem funções específicas na comunicação do conhecimento.',
    difficulty: 3,
    options: [
      {
        id: 200041,
        exercise_id: 20004,
        option_text: 'Apresentar conceitos fundamentais e processos fisiológicos relevantes para a compreensão do estudo.',
        is_correct: true,
        explanation: 'Correto! O trecho explica o funcionamento do eixo HHA e sua relação com o estresse, estabelecendo a base teórica necessária para a compreensão do estudo, o que é característico da fundamentação teórica presente na introdução de artigos científicos.'
      },
      {
        id: 200042,
        exercise_id: 20004,
        option_text: 'Descrever os procedimentos metodológicos utilizados na coleta de dados da pesquisa.',
        is_correct: false,
        explanation: 'Incorreto! O trecho não descreve procedimentos metodológicos ou coleta de dados, mas apresenta informações teóricas sobre o tema.'
      },
      {
        id: 200043,
        exercise_id: 20004,
        option_text: 'Apresentar e analisar estatisticamente os resultados obtidos no estudo.',
        is_correct: false,
        explanation: 'Incorreto! O trecho não apresenta resultados de pesquisa nem análises estatísticas, apenas informações teóricas já estabelecidas.'
      },
      {
        id: 200044,
        exercise_id: 20004,
        option_text: 'Discutir as implicações práticas e teóricas dos resultados encontrados.',
        is_correct: false,
        explanation: 'Incorreto! O trecho não discute implicações de resultados, pois não está apresentando descobertas da pesquisa.'
      },
      {
        id: 200045,
        exercise_id: 20004,
        option_text: 'Sintetizar as principais conclusões do estudo e sugerir pesquisas futuras.',
        is_correct: false,
        explanation: 'Incorreto! O trecho não apresenta conclusões nem sugestões para pesquisas futuras, elementos que estariam na conclusão do artigo.'
      }
    ]
  },
  {
    id: 20005,
    category_id: 'interpretacao-cientifico',
    question: 'Leia o trecho do artigo científico a seguir:\n\n"A amostra foi composta por 120 participantes (63 mulheres e 57 homens), com idade média de 34,8 anos (DP = 7,2). Os critérios de inclusão foram: idade entre 25 e 45 anos, ausência de doenças cardiovasculares prévias e não uso de medicação anti-hipertensiva. Os participantes foram divididos aleatoriamente em grupo experimental (n=60) e grupo controle (n=60). A pressão arterial foi aferida utilizando esfigmomanômetro digital calibrado (modelo XYZ-200, precisAcu Ltd.), com os participantes sentados após 5 minutos de repouso."\n\nEste trecho corresponde a qual seção típica de um artigo científico?',
    explanation: 'Os artigos científicos são organizados em seções padronizadas, cada uma com função específica.',
    difficulty: 2,
    options: [
      {
        id: 200051,
        exercise_id: 20005,
        option_text: 'Metodologia/Métodos, descrevendo participantes e procedimentos da pesquisa.',
        is_correct: true,
        explanation: 'Correto! O trecho descreve detalhadamente a amostra (número, características), critérios de inclusão, divisão em grupos e procedimentos de aferição, elementos típicos da seção de metodologia de um artigo científico.'
      },
      {
        id: 200052,
        exercise_id: 20005,
        option_text: 'Introdução, contextualizando o problema de pesquisa.',
        is_correct: false,
        explanation: 'Incorreto! O trecho não contextualiza um problema de pesquisa nem apresenta fundamentação teórica, elementos típicos de uma introdução.'
      },
      {
        id: 200053,
        exercise_id: 20005,
        option_text: 'Resultados, apresentando os achados principais do estudo.',
        is_correct: false,
        explanation: 'Incorreto! O trecho não apresenta resultados ou achados da pesquisa, apenas descreve como ela foi realizada.'
      },
      {
        id: 200054,
        exercise_id: 20005,
        option_text: 'Discussão, interpretando os resultados à luz da literatura.',
        is_correct: false,
        explanation: 'Incorreto! O trecho não interpreta resultados nem faz comparações com a literatura, elementos típicos de uma discussão.'
      },
      {
        id: 200055,
        exercise_id: 20005,
        option_text: 'Conclusão, sintetizando os principais achados e suas implicações.',
        is_correct: false,
        explanation: 'Incorreto! O trecho não sintetiza achados nem apresenta implicações, elementos típicos de uma conclusão.'
      }
    ]
  }
];

// Novos exercícios para o módulo de textos argumentativos
export const novosExerciciosArgumentativos: Exercise[] = [
  {
    id: 60006,
    category_id: 'interpretacao-argumentativo',
    question: 'Leia o trecho do artigo de opinião:\n\n"A reforma trabalhista, implementada há cinco anos, não cumpriu a promessa de gerar milhões de empregos. Pelo contrário, dados do IBGE mostram que o desemprego estrutural permanece em patamares elevados, enquanto a precarização das condições de trabalho aumentou significativamente. Estes resultados eram previsíveis, pois experiências internacionais semelhantes já haviam demonstrado que a simples flexibilização de direitos não é suficiente para impulsionar a criação de postos de trabalho em um cenário de baixo crescimento econômico."\n\nQual estratégia argumentativa é predominante neste trecho?',
    explanation: 'Textos argumentativos utilizam diferentes estratégias para construir e fortalecer seus argumentos.',
    difficulty: 3,
    options: [
      {
        id: 600061,
        exercise_id: 60006,
        option_text: 'Argumentação baseada em dados estatísticos e exemplos históricos comparativos.',
        is_correct: true,
        explanation: 'Correto! O texto utiliza dados objetivos (IBGE) e experiências internacionais anteriores como evidências para sustentar seu argumento contra a eficácia da reforma trabalhista.'
      },
      {
        id: 600062,
        exercise_id: 60006,
        option_text: 'Argumentação baseada em autoridade e citação de especialistas renomados.',
        is_correct: false,
        explanation: 'Incorreto! O texto não utiliza argumento de autoridade nem cita especialistas específicos para fundamentar sua posição.'
      },
      {
        id: 600063,
        exercise_id: 60006,
        option_text: 'Argumentação baseada em apelo emocional e relatos pessoais.',
        is_correct: false,
        explanation: 'Incorreto! O texto não utiliza apelos emocionais ou relatos pessoais, mantendo-se na esfera da argumentação objetiva com dados.'
      },
      {
        id: 600064,
        exercise_id: 60006,
        option_text: 'Argumentação baseada em princípios morais e valores éticos universais.',
        is_correct: false,
        explanation: 'Incorreto! O texto não recorre a princípios morais ou valores éticos, concentrando-se em aspectos práticos e factuais.'
      },
      {
        id: 600065,
        exercise_id: 60006,
        option_text: 'Argumentação baseada em analogias e metáforas explicativas.',
        is_correct: false,
        explanation: 'Incorreto! O texto não utiliza analogias ou metáforas como estratégia argumentativa principal.'
      }
    ]
  },
  {
    id: 60007,
    category_id: 'interpretacao-argumentativo',
    question: 'Analise o seguinte parágrafo de um texto argumentativo:\n\n"Ora, se admitimos que a educação é um direito fundamental, como está inscrito em nossa Constituição, então devemos necessariamente concluir que o Estado tem a obrigação de garantir acesso universal a um ensino de qualidade. Qualquer política que reduza investimentos nesta área estará, portanto, ferindo um princípio constitucional básico e comprometendo o futuro da nação."\n\nQual tipo de raciocínio lógico é utilizado nesta argumentação?',
    explanation: 'Textos argumentativos utilizam diferentes estruturas lógicas para construir seus argumentos.',
    difficulty: 3,
    options: [
      {
        id: 600071,
        exercise_id: 60007,
        option_text: 'Raciocínio dedutivo, partindo de princípios gerais para conclusões específicas.',
        is_correct: true,
        explanation: 'Correto! O texto parte de um princípio geral (educação como direito constitucional) para chegar a uma conclusão específica (redução de investimentos fere a Constituição), caracterizando o raciocínio dedutivo.'
      },
      {
        id: 600072,
        exercise_id: 60007,
        option_text: 'Raciocínio indutivo, partindo de casos específicos para uma generalização.',
        is_correct: false,
        explanation: 'Incorreto! O texto não parte de casos específicos para chegar a uma generalização, mas faz o caminho inverso.'
      },
      {
        id: 600073,
        exercise_id: 60007,
        option_text: 'Raciocínio por analogia, estabelecendo comparações entre situações semelhantes.',
        is_correct: false,
        explanation: 'Incorreto! O texto não utiliza comparações entre situações semelhantes como estratégia argumentativa.'
      },
      {
        id: 600074,
        exercise_id: 60007,
        option_text: 'Raciocínio causal, estabelecendo relações de causa e efeito entre fenômenos.',
        is_correct: false,
        explanation: 'Incorreto! Embora mencione consequências, o texto não se baseia principalmente em relações causais, mas em um princípio lógico-dedutivo.'
      },
      {
        id: 600075,
        exercise_id: 60007,
        option_text: 'Raciocínio dialético, apresentando tese, antítese e síntese sobre o tema.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta estrutura dialética com contraposição de ideias e síntese final.'
      }
    ]
  },
  {
    id: 60008,
    category_id: 'interpretacao-argumentativo',
    question: 'Leia o trecho da resenha crítica:\n\n"O filme "Parasita" consegue o que poucos cineastas ousam: entrelaça crítica social incisiva com entretenimento de alta qualidade. Bong Joon-ho não subestima a inteligência do espectador ao abordar a desigualdade econômica na Coreia do Sul, utilizando metáforas visuais que dispensam explicações didáticas. A transição fluida entre gêneros - da comédia ao thriller - serve perfeitamente à narrativa, enquanto a direção de arte sublinha as diferenças sociais através do contraste entre os ambientes luxuosos e precários. No entanto, o terceiro ato recorre a soluções narrativas previsíveis que comprometem parcialmente a originalidade da obra."\n\nQual característica essencial de uma resenha crítica está presente neste trecho?',
    explanation: 'As resenhas críticas possuem características específicas que as diferenciam de outros textos argumentativos.',
    difficulty: 2,
    options: [
      {
        id: 600081,
        exercise_id: 60008,
        option_text: 'Avaliação analítica da obra, destacando qualidades e apontando limitações.',
        is_correct: true,
        explanation: 'Correto! O texto avalia positivamente diversos aspectos do filme (crítica social, metáforas visuais, transição entre gêneros), mas também aponta limitações (soluções narrativas previsíveis), demonstrando uma análise equilibrada.'
      },
      {
        id: 600082,
        exercise_id: 60008,
        option_text: 'Descrição objetiva do enredo completo, sem julgamentos de valor.',
        is_correct: false,
        explanation: 'Incorreto! O texto não descreve o enredo completo e está repleto de julgamentos de valor sobre a qualidade do filme.'
      },
      {
        id: 600083,
        exercise_id: 60008,
        option_text: 'Análise técnica detalhada dos aspectos cinematográficos utilizando terminologia especializada.',
        is_correct: false,
        explanation: 'Incorreto! Embora mencione alguns elementos técnicos, o texto não se aprofunda em análises técnicas detalhadas com terminologia especializada.'
      },
      {
        id: 600084,
        exercise_id: 60008,
        option_text: 'Comparação sistemática com outras obras do mesmo diretor ou gênero.',
        is_correct: false,
        explanation: 'Incorreto! O texto não estabelece comparações com outras obras do diretor ou do mesmo gênero.'
      },
      {
        id: 600085,
        exercise_id: 60008,
        option_text: 'Classificação objetiva em um sistema de pontuação ou estrelas.',
        is_correct: false,
        explanation: 'Incorreto! O texto não utiliza sistema de pontuação ou classificação por estrelas para avaliar a obra.'
      }
    ]
  }
];

// Novos exercícios para o módulo de textos literários
export const novosExerciciosLiterarios: Exercise[] = [
  {
    id: 30006,
    category_id: 'interpretacao-literario',
    question: 'Leia o trecho do conto:\n\n"Quando acordou, o dinossauro ainda estava lá."\n\n(Augusto Monterroso, "O Dinossauro")\n\nEste microconto, considerado um dos mais curtos da literatura mundial, ilustra qual característica essencial do gênero conto?',
    explanation: 'Os contos possuem características específicas que os diferenciam de outros gêneros literários.',
    difficulty: 2,
    options: [
      {
        id: 300061,
        exercise_id: 30006,
        option_text: 'A capacidade de sugestão e a economia narrativa, deixando muito da história para a interpretação do leitor.',
        is_correct: true,
        explanation: 'Correto! O microconto demonstra extrema economia narrativa, contando uma história com apenas uma frase e deixando ao leitor a tarefa de imaginar todo o contexto e as implicações da presença do dinossauro.'
      },
      {
        id: 300062,
        exercise_id: 30006,
        option_text: 'O desenvolvimento detalhado de personagens complexos e suas motivações psicológicas.',
        is_correct: false,
        explanation: 'Incorreto! O microconto não desenvolve detalhadamente personagens nem suas motivações psicológicas, devido à sua extrema brevidade.'
      },
      {
        id: 300063,
        exercise_id: 30006,
        option_text: 'A construção elaborada de um cenário histórico com precisão de detalhes.',
        is_correct: false,
        explanation: 'Incorreto! O microconto não desenvolve um cenário histórico detalhado, focando apenas em um único momento.'
      },
      {
        id: 300064,
        exercise_id: 30006,
        option_text: 'A presença de múltiplos narradores e perspectivas sobre o mesmo evento.',
        is_correct: false,
        explanation: 'Incorreto! O microconto utiliza apenas um narrador em terceira pessoa e uma única perspectiva.'
      },
      {
        id: 300065,
        exercise_id: 30006,
        option_text: 'O uso extensivo de diálogos para desenvolver a trama narrativa.',
        is_correct: false,
        explanation: 'Incorreto! O microconto não contém nenhum diálogo entre personagens.'
      }
    ]
  },
  {
    id: 30007,
    category_id: 'interpretacao-literario',
    question: 'Leia o poema:\n\n"No meio do caminho tinha uma pedra\ntinha uma pedra no meio do caminho\ntinha uma pedra\nno meio do caminho tinha uma pedra.\n\nNunca me esquecerei desse acontecimento\nna vida de minhas retinas tão fatigadas.\nNunca me esquecerei que no meio do caminho\ntinha uma pedra\ntinha uma pedra no meio do caminho\nno meio do caminho tinha uma pedra."\n\n(Carlos Drummond de Andrade, "No meio do caminho")\n\nQual recurso poético é mais evidente neste poema?',
    explanation: 'Os poemas utilizam diversos recursos estilísticos para produzir efeitos expressivos.',
    difficulty: 2,
    options: [
      {
        id: 300071,
        exercise_id: 30007,
        option_text: 'Repetição, criando um efeito de obstáculo insuperável e fixação na memória.',
        is_correct: true,
        explanation: 'Correto! O poema utiliza a repetição intensiva das expressões "no meio do caminho" e "tinha uma pedra" para criar o efeito de algo obstrutivo, persistente e inesquecível, espelhando o sentido do próprio poema.'
      },
      {
        id: 300072,
        exercise_id: 30007,
        option_text: 'Metáforas complexas, comparando a pedra a diferentes elementos da natureza.',
        is_correct: false,
        explanation: 'Incorreto! O poema não desenvolve metáforas comparando a pedra a elementos naturais, embora a pedra em si possa ser interpretada como uma metáfora.'
      },
      {
        id: 300073,
        exercise_id: 30007,
        option_text: 'Sonoridade rica, com aliterações e assonâncias elaboradas.',
        is_correct: false,
        explanation: 'Incorreto! Embora haja certa musicalidade pela repetição, o poema não explora de forma elaborada aliterações ou assonâncias como recurso principal.'
      },
      {
        id: 300074,
        exercise_id: 30007,
        option_text: 'Descrições visuais detalhadas, criando imagens vívidas e coloridas.',
        is_correct: false,
        explanation: 'Incorreto! O poema é minimalista em suas descrições, sem oferecer detalhes visuais além da menção à pedra e ao caminho.'
      },
      {
        id: 300075,
        exercise_id: 30007,
        option_text: 'Personificação, atribuindo características humanas à pedra.',
        is_correct: false,
        explanation: 'Incorreto! O poema não atribui características humanas à pedra, não utilizando o recurso da personificação.'
      }
    ]
  },
  {
    id: 30008,
    category_id: 'interpretacao-literario',
    question: 'Leia o trecho da crônica:\n\n"Eu estava ali parado há mais de meia hora, e aquela gente que passava já estava me irritando. Eram cinco horas da tarde, e eu não via meu amigo chegar. Tanta gente, e Rodrigo não aparecia. Ele combinou comigo às quatro e meia. No relógio da praça, os ponteiros avançavam. Eu estava impaciente. Meus dedos tamborilavam no braço do banco. Foi quando eu a vi. Ela atravessou a praça, distraída, os longos cabelos castanhos balançando nos ombros. Vestia uma saia branca e blusa estampada. Meu coração disparou."\n\n(Adaptado)\n\nQual característica da crônica literária está evidente neste trecho?',
    explanation: 'A crônica literária possui características específicas que a diferenciam de outros gêneros narrativos.',
    difficulty: 2,
    options: [
      {
        id: 300081,
        exercise_id: 30008,
        option_text: 'Narrativa de um momento cotidiano com linguagem simples e dimensão subjetiva.',
        is_correct: true,
        explanation: 'Correto! O texto narra uma situação cotidiana (espera por um amigo em uma praça) com linguagem acessível e incorpora a subjetividade do narrador (sua impaciência e depois sua reação emocional ao ver a moça), características típicas da crônica literária.'
      },
      {
        id: 300082,
        exercise_id: 30008,
        option_text: 'Análise profunda de questões filosóficas universais com linguagem erudita.',
        is_correct: false,
        explanation: 'Incorreto! O texto não desenvolve análises filosóficas profundas nem utiliza linguagem particularmente erudita.'
      },
      {
        id: 300083,
        exercise_id: 30008,
        option_text: 'Relato histórico de eventos significativos com precisão cronológica.',
        is_correct: false,
        explanation: 'Incorreto! O texto não relata eventos históricos significativos, mas uma situação cotidiana e pessoal.'
      },
      {
        id: 300084,
        exercise_id: 30008,
        option_text: 'Construção de uma trama complexa com múltiplos personagens interligados.',
        is_correct: false,
        explanation: 'Incorreto! O texto apresenta uma situação simples com poucos personagens, sem desenvolver uma trama complexa.'
      },
      {
        id: 300085,
        exercise_id: 30008,
        option_text: 'Descrição técnica e objetiva de um ambiente urbano com linguagem jornalística.',
        is_correct: false,
        explanation: 'Incorreto! O texto não faz uma descrição técnica e objetiva do ambiente, mas sim uma narrativa subjetiva com a perspectiva do narrador.'
      }
    ]
  }
];
