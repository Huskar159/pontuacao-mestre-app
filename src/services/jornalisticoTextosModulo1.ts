import { Exercise } from './exerciseService';

// Exercícios para o Módulo 1 de Textos Jornalísticos

// Questão 1 - Estrutura narrativa
export const jornalisticoModulo1Exercicio: Exercise = {
  id: 10006,
  category_id: 'interpretacao-jornalistico',
  question: 'Leia o seguinte trecho de uma notícia:\n\n"Os moradores do bairro Jardim das Flores realizaram um protesto ontem contra a falta de água que já dura cinco dias. Cerca de 200 pessoas bloquearam a avenida principal por duas horas. A companhia de água informou, em nota, que o abastecimento foi interrompido devido a obras de manutenção na rede e deve ser normalizado até amanhã."\n\nQual é a estrutura narrativa presente neste texto jornalístico?',
  explanation: 'Textos jornalísticos informativos possuem uma estrutura narrativa específica que organiza as informações.',
  difficulty: 1,
  options: [
    {
      id: 100061,
      exercise_id: 10006,
      option_text: 'Apresentação dos fatos principais logo no início, seguida de detalhes complementares.',
      is_correct: true,
      explanation: 'Correto! O texto segue a estrutura típica de notícias jornalísticas, apresentando primeiro os elementos principais (quem, o quê, quando, onde) e depois os detalhes adicionais.'
    },
    {
      id: 100062,
      exercise_id: 10006,
      option_text: 'Desenvolvimento cronológico dos acontecimentos, do início ao fim do protesto.',
      is_correct: false,
      explanation: 'Incorreto! O texto não apresenta uma narrativa cronológica, mas sim organizada pela relevância das informações.'
    },
    {
      id: 100063,
      exercise_id: 10006,
      option_text: 'Descrição detalhada do cenário antes de mencionar o fato principal.',
      is_correct: false,
      explanation: 'Incorreto! O texto começa diretamente com o fato principal (o protesto) sem descrição prévia do cenário.'
    },
    {
      id: 100064,
      exercise_id: 10006,
      option_text: 'Apresentação de opiniões sobre o protesto seguida dos fatos objetivos.',
      is_correct: false,
      explanation: 'Incorreto! O texto é predominantemente informativo e não apresenta opiniões, apenas relata os fatos de forma objetiva.'
    },
    {
      id: 100065,
      exercise_id: 10006,
      option_text: 'Contextualização histórica da região antes de abordar o problema atual.',
      is_correct: false,
      explanation: 'Incorreto! O texto não faz contextualização histórica, focando apenas no evento atual.'
    }
  ]
};

// Questão 2 - Objetividade jornalística
export const jornalisticoModulo1Exercicio2: Exercise = {
  id: 10007,
  category_id: 'interpretacao-jornalistico',
  question: 'Leia o trecho jornalístico a seguir:\n\n"O prefeito anunciou hoje a construção de um novo hospital na região sul da cidade, com previsão de entrega em 18 meses. O investimento será de R$ 12 milhões, oriundos de recursos federais. A unidade terá 50 leitos, sendo 10 de UTI, e atenderá aproximadamente 100 mil pessoas. O secretário de saúde destacou que a obra irá reduzir em 40% o tempo de espera por internação na região."\n\nQual característica do texto jornalístico está mais evidente neste trecho?',
  explanation: 'A objetividade é uma característica fundamental dos textos jornalísticos informativos.',
  difficulty: 1,
  options: [
    {
      id: 100071,
      exercise_id: 10007,
      option_text: 'Apresentação de fatos concretos com dados precisos e fontes específicas.',
      is_correct: true,
      explanation: 'Correto! O texto apresenta informações objetivas como valores, prazos, números de leitos e percentuais, sem opiniões do autor, característica típica do jornalismo informativo.'
    },
    {
      id: 100072,
      exercise_id: 10007,
      option_text: 'Uso de linguagem poética para descrever a importância do hospital.',
      is_correct: false,
      explanation: 'Incorreto! O texto não utiliza linguagem poética, mantendo-se objetivo e factual.'
    },
    {
      id: 100073,
      exercise_id: 10007,
      option_text: 'Crítica à demora na construção de equipamentos de saúde na região.',
      is_correct: false,
      explanation: 'Incorreto! O texto não faz críticas, apenas apresenta informações factuais sobre a obra.'
    },
    {
      id: 100074,
      exercise_id: 10007,
      option_text: 'Narração de uma história pessoal relacionada à falta de hospitais.',
      is_correct: false,
      explanation: 'Incorreto! O texto não apresenta narrativas pessoais, mantendo-se impessoal e objetivo.'
    },
    {
      id: 100075,
      exercise_id: 10007,
      option_text: 'Defesa de um ponto de vista político sobre a gestão da saúde pública.',
      is_correct: false,
      explanation: 'Incorreto! O texto não defende nenhum ponto de vista político, limitando-se a informar sobre a construção do hospital.'
    }
  ]
};

// Questão 3 - Pirâmide invertida
export const jornalisticoModulo1Exercicio3: Exercise = {
  id: 10008,
  category_id: 'interpretacao-jornalistico',
  question: 'Leia o seguinte trecho de uma notícia:\n\n"Um incêndio de grandes proporções destruiu um galpão de uma fábrica de móveis na Zona Leste na madrugada desta terça-feira (15). Segundo o Corpo de Bombeiros, o fogo começou por volta das 3h30 e foi controlado apenas às 6h45. Não houve vítimas, mas os prejuízos são estimados em R$ 2 milhões. Cerca de 30 bombeiros trabalharam no local com o apoio de 10 viaturas. A Polícia Civil vai investigar as causas do incêndio, que ainda são desconhecidas. O proprietário do imóvel informou que o galpão estava desocupado no momento do incêndio e que o seguro cobrirá parte dos prejuízos."\n\nQual característica da estrutura de pirâmide invertida está presente neste texto?',
  explanation: 'A pirâmide invertida é uma técnica jornalística que organiza as informações em ordem decrescente de importância.',
  difficulty: 2,
  options: [
    {
      id: 100081,
      exercise_id: 10008,
      option_text: 'As informações mais importantes aparecem no início do texto, seguidas de detalhes complementares.',
      is_correct: true,
      explanation: 'Correto! O texto começa com as informações essenciais (o que aconteceu, onde e quando) e depois apresenta detalhes adicionais, seguindo a estrutura de pirâmide invertida.'
    },
    {
      id: 100082,
      exercise_id: 10008,
      option_text: 'O texto apresenta uma narrativa cronológica dos acontecimentos.',
      is_correct: false,
      explanation: 'Incorreto! O texto não segue uma ordem cronológica, mas sim uma ordem de importância das informações.'
    },
    {
      id: 100083,
      exercise_id: 10008,
      option_text: 'As opiniões do jornalista são destacadas no início do texto.',
      is_correct: false,
      explanation: 'Incorreto! O texto é informativo e não apresenta opiniões do jornalista.'
    },
    {
      id: 100084,
      exercise_id: 10008,
      option_text: 'O texto termina com uma conclusão ou opinião sobre o fato.',
      is_correct: false,
      explanation: 'Incorreto! O texto termina com detalhes adicionais, não com uma conclusão ou opinião.'
    },
    {
      id: 100085,
      exercise_id: 10008,
      option_text: 'O texto é dividido em tópicos de igual importância.',
      is_correct: false,
      explanation: 'Incorreto! O texto apresenta claramente uma hierarquia de informações, das mais para as menos importantes.'
    }
  ]
};

// Questão 4 - Fonte jornalística
export const jornalisticoModulo1Exercicio4: Exercise = {
  id: 10009,
  category_id: 'interpretacao-jornalistico',
  question: 'Leia o trecho de uma reportagem:\n\n"De acordo com dados inéditos do Instituto Brasileiro de Geografia e Estatística (IBGE), a taxa de desemprego no país caiu para 8,5% no trimestre encerrado em abril, o menor patamar desde 2015. O número de desempregados recuou para 9,1 milhões, uma redução de 15,6% em relação ao mesmo período do ano passado. O levantamento, divulgado hoje, mostra ainda que o rendimento médio real do trabalhador foi estimado em R$ 2.890, alta de 5,2% em 12 meses."\n\nQual é a importância da citação da fonte no texto jornalístico acima?',
  explanation: 'A citação de fontes confiáveis é essencial para a credibilidade do texto jornalístico.',
  difficulty: 1,
  options: [
    {
      id: 100091,
      exercise_id: 10009,
      option_text: 'Confere credibilidade às informações apresentadas, indicando a origem dos dados.',
      is_correct: true,
      explanation: 'Correto! A citação do IBGE como fonte confere confiabilidade aos dados apresentados, mostrando que as informações têm base em pesquisa séria e reconhecida.'
    },
    {
      id: 100092,
      exercise_id: 10009,
      option_text: 'Preenche espaço no texto quando não há informações suficientes.',
      is_correct: false,
      explanation: 'Incorreto! As fontes não são usadas para preencher espaço, mas sim para embasar as informações apresentadas.'
    },
    {
      id: 100093,
      exercise_id: 10009,
      option_text: 'Torna o texto mais difícil de ser compreendido pelo leitor comum.',
      is_correct: false,
      explanation: 'Incorreto! As fontes, quando bem utilizadas, não dificultam a compreensão, pelo contrário, dão mais clareza sobre a origem das informações.'
    },
    {
      id: 100094,
      exercise_id: 10009,
      option_text: 'Serve apenas para cumprir exigências legais do jornalismo.',
      is_correct: false,
      explanation: 'Incorreto! A citação de fontes vai além de uma mera exigência legal; é um princípio ético fundamental do jornalismo.'
    },
    {
      id: 100095,
      exercise_id: 10009,
      option_text: 'Tem a função de promover a instituição citada na reportagem.',
      is_correct: false,
      explanation: 'Incorreto! A citação da fonte não tem caráter promocional, mas sim informativo e de comprovação dos fatos apresentados.'
    }
  ]
};

// Questão 5 - Manchete e lead
export const jornalisticoModulo1Exercicio5: Exercise = {
  id: 10010,
  category_id: 'interpretacao-jornalistico',
  question: 'Leia a seguinte manchete e o primeiro parágrafo (lead) de uma notícia:\n\n"Chuva forte causa deslizamentos e deixa milhares sem energia no Rio\n\nPelo menos cinco pessoas morreram e outras dez estão desaparecidas após fortes chuvas que atingiram a região serrana do Rio de Janeiro nas últimas 24 horas. De acordo com a Defesa Civil, os municípios mais afetados foram Petrópolis, Teresópolis e Nova Friburgo, onde ocorreram diversos deslizamentos de terra. Cerca de 50 mil consumidores ficaram sem energia elétrica, e o trânsito está interditado em várias rodovias da região."\n\nQual característica do lead jornalístico está presente neste trecho?',
  explanation: 'O lead é o primeiro parágrafo da notícia e deve conter as informações mais importantes, respondendo às perguntas básicas do jornalismo.',
  difficulty: 2,
  options: [
    {
      id: 100101,
      exercise_id: 10010,
      option_text: 'Apresenta as informações mais relevantes respondendo às perguntas: o quê, onde, quando e consequências.',
      is_correct: true,
      explanation: 'Correto! O lead responde claramente: o quê (mortes e desaparecimentos por causa das chuvas), onde (região serrana do Rio), quando (últimas 24 horas) e as principais consequências (pessoas sem energia e trânsito interditado).'
    },
    {
      id: 100102,
      exercise_id: 10010,
      option_text: 'Inicia com uma descrição detalhada das condições climáticas.',
      is_correct: false,
      explanation: 'Incorreto! O lead não começa com descrições climáticas, mas sim com as informações mais impactantes sobre as consequências das chuvas.'
    },
    {
      id: 100103,
      exercise_id: 10010,
      option_text: 'Apresenta primeiro os números oficiais de vítimas e depois contextualiza a situação.',
      is_correct: false,
      explanation: 'Incorreto! Embora mencione números, o lead não começa com eles, mas sim com o fato principal (mortes e desaparecimentos).'
    },
    {
      id: 100104,
      exercise_id: 10010,
      option_text: 'Destaque para opiniões de especialistas sobre o fenômeno climático.',
      is_correct: false,
      explanation: 'Incorreto! O lead não apresenta opiniões de especialistas, apenas fatos objetivos sobre a situação.'
    },
    {
      id: 100105,
      exercise_id: 10010,
      option_text: 'Narração cronológica dos eventos desde o início das chuvas.',
      is_correct: false,
      explanation: 'Incorreto! O lead não segue uma ordem cronológica, mas sim uma ordem de importância das informações.'
    }
  ]
};
