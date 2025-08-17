import { Exercise } from './exerciseService';

// Complemento de exercícios para o Módulo 1 de Textos Jornalísticos
export const textoJornalisticoExercicio1Complemento: Exercise[] = [
  {
    id: 10006,
    category_id: 'interpretacao-jornalistico',
    question: 'Leia o trecho da notícia:\n\n"A nova variante do vírus, identificada pela primeira vez no mês passado, já foi detectada em 15 países. Segundo a Organização Mundial da Saúde, ainda não há evidências de que ela cause sintomas mais graves, mas sua capacidade de transmissão parece ser 30% maior que a variante anterior. Especialistas recomendam reforçar medidas de proteção."\n\nQual é a principal característica da linguagem utilizada neste texto jornalístico?',
    explanation: 'A linguagem jornalística apresenta características específicas que se adaptam à sua função informativa.',
    difficulty: 2,
    options: [
      {
        id: 100061,
        exercise_id: 10006,
        option_text: 'Objetividade e clareza, utilizando linguagem direta e apresentando dados concretos.',
        is_correct: true,
        explanation: 'Correto! O texto utiliza linguagem objetiva e clara, apresentando informações factuais e dados precisos (15 países, 30% maior transmissão), sem adjetivações ou posicionamentos pessoais.'
      },
      {
        id: 100062,
        exercise_id: 10006,
        option_text: 'Linguagem poética com uso intenso de metáforas e comparações.',
        is_correct: false,
        explanation: 'Incorreto! O texto não utiliza recursos poéticos como metáforas ou comparações, mantendo-se objetivo e factual.'
      },
      {
        id: 100063,
        exercise_id: 10006,
        option_text: 'Linguagem técnica especializada, inacessível ao público geral.',
        is_correct: false,
        explanation: 'Incorreto! Embora trate de um tema científico, o texto utiliza linguagem acessível ao público geral, sem terminologia excessivamente técnica.'
      },
      {
        id: 100064,
        exercise_id: 10006,
        option_text: 'Tom alarmista e sensacionalista, com exageros para captar a atenção.',
        is_correct: false,
        explanation: 'Incorreto! O texto mantém um tom equilibrado, sem recursos sensacionalistas ou alarmistas, apresentando os fatos de forma objetiva.'
      },
      {
        id: 100065,
        exercise_id: 10006,
        option_text: 'Argumentação persuasiva visando convencer o leitor de um ponto de vista.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta estrutura argumentativa nem tenta persuadir o leitor, apenas informa sobre os fatos.'
      }
    ]
  },
  {
    id: 10007,
    category_id: 'interpretacao-jornalistico',
    question: 'Analise a estrutura do seguinte texto jornalístico:\n\n"CHUVAS CAUSAM DESLIZAMENTOS E DEIXAM 15 FAMÍLIAS DESALOJADAS\n\nTemporal que atingiu a região sul do estado na noite de ontem provocou deslizamentos em três bairros da cidade de Mirante. Segundo a Defesa Civil, 15 famílias foram retiradas de suas casas preventivamente e estão abrigadas em uma escola municipal. O prefeito decretou estado de emergência e solicitou ajuda do governo estadual."\n\nQual técnica de construção textual é utilizada neste texto jornalístico?',
    explanation: 'Os textos jornalísticos utilizam técnicas específicas de estruturação para organizar a informação.',
    difficulty: 2,
    options: [
      {
        id: 100071,
        exercise_id: 10007,
        option_text: 'Pirâmide invertida, apresentando as informações mais importantes no início e os detalhes complementares na sequência.',
        is_correct: true,
        explanation: 'Correto! O texto segue a estrutura de pirâmide invertida, típica do jornalismo, com a informação principal (deslizamentos e famílias desalojadas) no título e primeiro parágrafo, seguida de informações complementares em ordem decrescente de importância.'
      },
      {
        id: 100072,
        exercise_id: 10007,
        option_text: 'Narrativa cronológica, relatando os eventos na ordem em que ocorreram ao longo do tempo.',
        is_correct: false,
        explanation: 'Incorreto! O texto não segue uma ordem cronológica dos acontecimentos, mas organiza as informações por relevância, começando pelo fato principal.'
      },
      {
        id: 100073,
        exercise_id: 10007,
        option_text: 'Estrutura dissertativa, com introdução, desenvolvimento e conclusão do tema.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta estrutura dissertativa com argumentação, mas uma estrutura informativa organizada por relevância dos fatos.'
      },
      {
        id: 100074,
        exercise_id: 10007,
        option_text: 'Técnica de suspense, ocultando informações importantes para revelar apenas no final.',
        is_correct: false,
        explanation: 'Incorreto! O texto jornalístico não utiliza técnicas de suspense, pelo contrário, apresenta as informações principais logo no início.'
      },
      {
        id: 100075,
        exercise_id: 10007,
        option_text: 'Estrutura circular, começando e terminando com a mesma informação para reforçá-la.',
        is_correct: false,
        explanation: 'Incorreto! O texto não utiliza estrutura circular, mas apresenta informações diferentes e complementares ao longo de sua extensão.'
      }
    ]
  },
  {
    id: 10008,
    category_id: 'interpretacao-jornalistico',
    question: 'Leia o trecho da reportagem:\n\n"A cidade registrou ontem o dia mais quente do ano, com termômetros marcando 39,5°C na estação meteorológica central. De acordo com climatologistas do Instituto Nacional de Meteorologia, o calor extremo é resultado da combinação de uma massa de ar quente estacionária e do fenômeno de ilha de calor urbana, intensificado pela falta de áreas verdes na região central."\n\nQual elemento fundamental do texto jornalístico está presente neste trecho?',
    explanation: 'Textos jornalísticos informativos possuem elementos específicos que garantem sua credibilidade e completude.',
    difficulty: 1,
    options: [
      {
        id: 100081,
        exercise_id: 10008,
        option_text: 'Fundamentação da informação com dados precisos e citação de fontes especializadas.',
        is_correct: true,
        explanation: 'Correto! O texto apresenta dados precisos (39,5°C) e cita uma fonte especializada (climatologistas do Instituto Nacional de Meteorologia) para fundamentar a informação, elementos essenciais para a credibilidade jornalística.'
      },
      {
        id: 100082,
        exercise_id: 10008,
        option_text: 'Uso de primeira pessoa e relato de experiências pessoais do jornalista.',
        is_correct: false,
        explanation: 'Incorreto! O texto não utiliza primeira pessoa nem relata experiências pessoais, mantendo o distanciamento típico do jornalismo informativo.'
      },
      {
        id: 100083,
        exercise_id: 10008,
        option_text: 'Expressão de opiniões e juízos de valor sobre o fenômeno climático.',
        is_correct: false,
        explanation: 'Incorreto! O texto não expressa opiniões ou juízos de valor, mantendo-se objetivo na apresentação dos fatos.'
      },
      {
        id: 100084,
        exercise_id: 10008,
        option_text: 'Uso de recursos literários como personificação e metáforas elaboradas.',
        is_correct: false,
        explanation: 'Incorreto! O texto não utiliza recursos literários como personificação ou metáforas, mantendo a linguagem objetiva e direta.'
      },
      {
        id: 100085,
        exercise_id: 10008,
        option_text: 'Diálogos entre personagens envolvidos na situação climática.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta diálogos entre personagens, apenas relato objetivo dos fatos e explicações de especialistas.'
      }
    ]
  },
  {
    id: 10009,
    category_id: 'interpretacao-jornalistico',
    question: 'Observe o seguinte lead de uma notícia:\n\n"Um incêndio de grandes proporções destruiu três galpões industriais na zona leste da capital na madrugada desta terça-feira. Vinte equipes do Corpo de Bombeiros trabalharam por mais de cinco horas para controlar as chamas. Não houve vítimas, mas os prejuízos são estimados em R$ 7 milhões."\n\nQual função este trecho cumpre na estrutura da notícia?',
    explanation: 'O lead é um elemento estrutural importante do texto jornalístico, com função específica.',
    difficulty: 1,
    options: [
      {
        id: 100091,
        exercise_id: 10009,
        option_text: 'Resumir as informações essenciais da notícia respondendo às perguntas básicas: o quê, quem, quando, onde, como e por quê.',
        is_correct: true,
        explanation: 'Correto! O lead apresenta resumidamente o fato principal (incêndio/o quê), o local (zona leste da capital/onde), o momento (madrugada desta terça-feira/quando), a dimensão (três galpões/como) e as consequências (sem vítimas, prejuízos de R$ 7 milhões/por quê), cumprindo sua função de síntese informativa.'
      },
      {
        id: 100092,
        exercise_id: 10009,
        option_text: 'Analisar criticamente as causas e consequências do incêndio sob uma perspectiva editorial.',
        is_correct: false,
        explanation: 'Incorreto! O lead não apresenta análise crítica ou opinião editorial, apenas informa objetivamente sobre o acontecimento.'
      },
      {
        id: 100093,
        exercise_id: 10009,
        option_text: 'Detalhar tecnicamente os procedimentos utilizados pelos bombeiros no combate ao incêndio.',
        is_correct: false,
        explanation: 'Incorreto! O lead não detalha tecnicamente os procedimentos de combate ao incêndio, apenas menciona informações gerais sobre a ação dos bombeiros.'
      },
      {
        id: 100094,
        exercise_id: 10009,
        option_text: 'Contextualizar historicamente a ocorrência de incêndios industriais na região.',
        is_correct: false,
        explanation: 'Incorreto! O lead não fornece contextualização histórica sobre incêndios anteriores, focando apenas no evento atual.'
      },
      {
        id: 100095,
        exercise_id: 10009,
        option_text: 'Apresentar depoimentos emocionais dos proprietários e funcionários afetados.',
        is_correct: false,
        explanation: 'Incorreto! O lead não inclui depoimentos de pessoas afetadas, mantendo-se objetivo na apresentação dos fatos principais.'
      }
    ]
  },
  {
    id: 10010,
    category_id: 'interpretacao-jornalistico',
    question: 'Leia o trecho da reportagem:\n\n"Após quatro meses de investigação, a reportagem teve acesso a documentos que mostram irregularidades na contratação de empresas para a reforma de escolas municipais. Planilhas, e-mails e contratos revelam que houve direcionamento em pelo menos três licitações realizadas entre 2022 e 2023. O esquema envolveria servidores do alto escalão da secretaria de educação e empresários do setor de construção civil."\n\nQual característica específica do jornalismo está evidenciada neste texto?',
    explanation: 'O jornalismo possui diferentes funções sociais, entre elas a fiscalização do poder público.',
    difficulty: 3,
    options: [
      {
        id: 100101,
        exercise_id: 10010,
        option_text: 'Função investigativa e fiscalizadora, apurando e revelando possíveis irregularidades em ações públicas.',
        is_correct: true,
        explanation: 'Correto! O texto exemplifica o papel investigativo e fiscalizador do jornalismo (muitas vezes chamado de "cão de guarda" da democracia), que apura e revela possíveis irregularidades na administração pública.'
      },
      {
        id: 100102,
        exercise_id: 10010,
        option_text: 'Função educativa, explicando didaticamente o processo de licitação pública.',
        is_correct: false,
        explanation: 'Incorreto! O texto não tem função educativa ou didática sobre licitações, mas investigativa sobre irregularidades.'
      },
      {
        id: 100103,
        exercise_id: 10010,
        option_text: 'Função de entretenimento, apresentando uma narrativa envolvente sobre conflitos institucionais.',
        is_correct: false,
        explanation: 'Incorreto! O texto não tem função de entretenimento, mas de informar sobre uma investigação jornalística de interesse público.'
      },
      {
        id: 100104,
        exercise_id: 10010,
        option_text: 'Função publicitária, promovendo o trabalho da secretaria de educação municipal.',
        is_correct: false,
        explanation: 'Incorreto! O texto não tem função publicitária ou promocional, pelo contrário, revela possíveis irregularidades na secretaria.'
      },
      {
        id: 100105,
        exercise_id: 10010,
        option_text: 'Função cultural, preservando a memória histórica das instituições públicas.',
        is_correct: false,
        explanation: 'Incorreto! O texto não tem função de preservação cultural ou histórica, mas de denúncia de possíveis irregularidades atuais.'
      }
    ]
  }
];
