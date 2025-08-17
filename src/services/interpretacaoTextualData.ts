import { Exercise } from './exerciseService';
import { 
  jornalisticoModulo1Exercicio,
  jornalisticoModulo1Exercicio2,
  jornalisticoModulo1Exercicio3,
  jornalisticoModulo1Exercicio4,
  jornalisticoModulo1Exercicio5
} from './jornalisticoTextosModulo1';
import {
  jornalisticoModulo2Exercicio1,
  jornalisticoModulo2Exercicio2,
  jornalisticoModulo2Exercicio3,
  jornalisticoModulo2Exercicio4,
  jornalisticoModulo2Exercicio5,
  jornalisticoModulo2Exercicio6,
  jornalisticoModulo2Exercicio7,
  jornalisticoModulo2Exercicio8,
  jornalisticoModulo2Exercicio9,
  jornalisticoModulo2Exercicio10
} from './jornalisticoTextosModulo2';
import {
  jornalisticoModulo3Exercicio1,
  jornalisticoModulo3Exercicio2,
  jornalisticoModulo3Exercicio3,
  jornalisticoModulo3Exercicio4,
  jornalisticoModulo3Exercicio5,
  jornalisticoModulo3Exercicio6,
  jornalisticoModulo3Exercicio7,
  jornalisticoModulo3Exercicio8,
  jornalisticoModulo3Exercicio9,
  jornalisticoModulo3Exercicio10
} from './jornalisticoTextosModulo3';
import {
  jornalisticoModulo5Exercicio1,
  jornalisticoModulo5Exercicio2,
  jornalisticoModulo5Exercicio3,
  jornalisticoModulo5Exercicio4,
  jornalisticoModulo5Exercicio5,
  jornalisticoModulo5Exercicio6,
  jornalisticoModulo5Exercicio7,
  jornalisticoModulo5Exercicio8,
  jornalisticoModulo5Exercicio9,
  jornalisticoModulo5Exercicio10
} from './jornalisticoTextosModulo5';

//==============================================================================
//==============================================================================
//                           TEXTOS JORNALÍSTICOS
//==============================================================================
//==============================================================================

// ---------- MÓDULO 1: Notícias e reportagens gerais ----------
// Exercícios do Módulo 1 de Textos Jornalísticos
export const textoJornalisticoExercicio1: Exercise[] = [
  jornalisticoModulo1Exercicio,
  jornalisticoModulo1Exercicio2,
  jornalisticoModulo1Exercicio3,
  jornalisticoModulo1Exercicio4,
  jornalisticoModulo1Exercicio5,
  {
    id: 10001,
    category_id: 'interpretacao-jornalistico',
    question: 'Leia o trecho da notícia a seguir:\n\n"O aumento no preço dos combustíveis, anunciado ontem pela Petrobras, deve afetar diretamente o bolso do consumidor. Segundo especialistas, a alta de 5% para a gasolina e 8% para o diesel será repassada para diversos setores da economia."\n\nQual é o objetivo principal deste texto?',
    explanation: 'Textos jornalísticos geralmente têm como objetivo informar sobre fatos recentes de interesse público.',
    difficulty: 1,
    options: [
      {
        id: 100001,
        exercise_id: 10001,
        option_text: 'Informar sobre o aumento nos preços dos combustíveis e seus possíveis impactos.',
        is_correct: true,
        explanation: 'Correto! O texto apresenta uma informação factual sobre o aumento de preços e suas consequências, sem emitir opinião explícita.'
      },
      {
        id: 100002,
        exercise_id: 10001,
        option_text: 'Criticar a Petrobras pela decisão de aumentar os preços dos combustíveis.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta crítica à Petrobras, apenas informa sobre o aumento.'
      },
      {
        id: 100003,
        exercise_id: 10001,
        option_text: 'Convencer o leitor a economizar combustível devido ao aumento dos preços.',
        is_correct: false,
        explanation: 'Incorreto! O texto não tem objetivo persuasivo de convencer o leitor a economizar.'
      },
      {
        id: 100004,
        exercise_id: 10001,
        option_text: 'Explicar as razões técnicas que levaram a Petrobras a aumentar os preços.',
        is_correct: false,
        explanation: 'Incorreto! O texto não explica as razões que levaram ao aumento dos preços.'
      },
      {
        id: 100005,
        exercise_id: 10001,
        option_text: 'Entrevistar especialistas sobre o mercado de combustíveis no Brasil.',
        is_correct: false,
        explanation: 'Incorreto! Embora cite especialistas, o texto não é uma entrevista e apenas menciona brevemente suas opiniões.'
      }
    ]
  },
  {
    id: 10003,
    category_id: 'interpretacao-jornalistico',
    question: 'Leia a notícia a seguir:\n\n"O governador anunciou hoje um pacote de medidas para estimular o turismo na região. Entre as principais ações estão a redução de impostos para hotéis e restaurantes, a ampliação do aeroporto regional e o lançamento de uma campanha publicitária nacional. De acordo com a secretaria de turismo, a expectativa é aumentar em 30% o fluxo de visitantes nos próximos dois anos."\n\nQual característica do texto jornalístico está presente neste trecho?',
    explanation: 'Os textos jornalísticos possuem características específicas que os distinguem de outros gêneros textuais.',
    difficulty: 1,
    options: [
      {
        id: 100031,
        exercise_id: 10003,
        option_text: 'Apresentação de informações de interesse público com linguagem direta e objetiva.',
        is_correct: true,
        explanation: 'Correto! O texto apresenta as informações de forma direta e objetiva, características fundamentais do texto jornalístico informativo.'
      },
      {
        id: 100032,
        exercise_id: 10003,
        option_text: 'Uso de linguagem poética e figuras de linguagem para emocionar o leitor.',
        is_correct: false,
        explanation: 'Incorreto! O texto não utiliza recursos poéticos ou figuras de linguagem, mantendo o caráter informativo.'
      },
      {
        id: 100033,
        exercise_id: 10003,
        option_text: 'Defesa explícita de um ponto de vista por meio de argumentos persuasivos.',
        is_correct: false,
        explanation: 'Incorreto! O texto não defende um ponto de vista nem apresenta argumentos persuasivos, apenas relata fatos.'
      },
      {
        id: 100034,
        exercise_id: 10003,
        option_text: 'Elaboração de uma narrativa ficcional com personagens e enredo.',
        is_correct: false,
        explanation: 'Incorreto! O texto não contém elementos ficcionais, apenas relata fatos reais.'
      },
      {
        id: 100035,
        exercise_id: 10003,
        option_text: 'Exposição detalhada de conceitos técnicos com linguagem especializada.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta linguagem técnica especializada, mas sim uma linguagem acessível ao público geral.'
      }
    ]
  },
  {
    id: 10004,
    category_id: 'interpretacao-jornalistico',
    question: 'Leia o trecho da reportagem a seguir:\n\n"A cidade de São Paulo registrou, na última semana, o maior congestionamento do ano, com 868 km de vias travadas no horário de pico. O caos no trânsito foi agravado pelas fortes chuvas que atingiram a capital paulista na quinta e sexta-feira. Segundo a Companhia de Engenharia de Tráfego (CET), os principais pontos de lentidão foram as marginais Tietê e Pinheiros, além das avenidas Bandeirantes e 23 de Maio."\n\nQual recurso típico do texto jornalístico está presente neste trecho?',
    explanation: 'Os textos jornalísticos utilizam recursos específicos para transmitir informações de forma clara e precisa.',
    difficulty: 2,
    options: [
      {
        id: 100041,
        exercise_id: 10004,
        option_text: 'Apresentação de dados concretos e citação de fontes oficiais.',
        is_correct: true,
        explanation: 'Correto! O texto apresenta dados precisos (868 km de congestionamento) e cita uma fonte oficial (CET), recursos característicos do jornalismo para conferir credibilidade à informação.'
      },
      {
        id: 100042,
        exercise_id: 10004,
        option_text: 'Uso de primeira pessoa e relato de experiências pessoais do jornalista.',
        is_correct: false,
        explanation: 'Incorreto! O texto não utiliza primeira pessoa nem relata experiências pessoais, mantendo o distanciamento típico do jornalismo informativo.'
      },
      {
        id: 100043,
        exercise_id: 10004,
        option_text: 'Apresentação de diálogos entre os personagens envolvidos na situação.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta diálogos entre personagens, apenas relata os fatos de forma direta.'
      },
      {
        id: 100044,
        exercise_id: 10004,
        option_text: 'Utilização de terminologia técnica complexa inacessível ao leitor comum.',
        is_correct: false,
        explanation: 'Incorreto! O texto utiliza linguagem acessível ao público geral, sem terminologia técnica complexa.'
      },
      {
        id: 100045,
        exercise_id: 10004,
        option_text: 'Expressão de opiniões e juízos de valor do autor sobre o congestionamento.',
        is_correct: false,
        explanation: 'Incorreto! O texto não expressa opiniões ou juízos de valor, mantendo a objetividade característica do texto jornalístico informativo.'
      }
    ]
  },
  {
    id: 10005,
    category_id: 'interpretacao-jornalistico',
    question: 'Analise a seguinte manchete e subtítulo de uma notícia:\n\n"VACINAÇÃO CONTRA A GRIPE COMEÇA HOJE EM TODO O PAÍS\nCampanha prioriza idosos, crianças e profissionais de saúde; meta é imunizar 90 milhões de pessoas até o final de maio"\n\nQual é a função principal deste elemento do texto jornalístico?',
    explanation: 'As manchetes e subtítulos têm funções específicas na estrutura do texto jornalístico.',
    difficulty: 1,
    options: [
      {
        id: 100051,
        exercise_id: 10005,
        option_text: 'Apresentar de forma sintética e atrativa a informação principal e complementar da notícia.',
        is_correct: true,
        explanation: 'Correto! A manchete destaca o fato principal (início da vacinação) de forma direta, e o subtítulo complementa com informações adicionais importantes (público-alvo e meta), cumprindo a função de síntese e atração do leitor.'
      },
      {
        id: 100052,
        exercise_id: 10005,
        option_text: 'Explicar detalhadamente todos os aspectos da campanha de vacinação.',
        is_correct: false,
        explanation: 'Incorreto! Manchetes e subtítulos não têm função de explicação detalhada, mas de síntese. Os detalhes completos estarão no corpo da notícia.'
      },
      {
        id: 100053,
        exercise_id: 10005,
        option_text: 'Convencer o leitor a se vacinar usando argumentos persuasivos.',
        is_correct: false,
        explanation: 'Incorreto! A manchete e o subtítulo não apresentam argumentação persuasiva, apenas informam sobre o fato de forma objetiva.'
      },
      {
        id: 100054,
        exercise_id: 10005,
        option_text: 'Analisar criticamente a estratégia de vacinação do governo.',
        is_correct: false,
        explanation: 'Incorreto! Não há análise crítica na manchete e subtítulo, apenas apresentação objetiva da informação.'
      },
      {
        id: 100055,
        exercise_id: 10005,
        option_text: 'Apresentar estatísticas completas sobre campanhas de vacinação anteriores.',
        is_correct: false,
        explanation: 'Incorreto! A manchete e subtítulo não apresentam estatísticas de campanhas anteriores, apenas informações sobre a campanha atual.'
      }
    ]
  },
  {
    id: 10002,
    category_id: 'interpretacao-jornalistico',
    question: 'Analise o texto:\n\n"Após três anos de seca, o município de Seridó comemora precipitações acima da média em janeiro. Os reservatórios, que estavam em situação crítica com menos de 15% da capacidade, já atingiram 40%, segundo a companhia de abastecimento."\n\nCom base nesse texto jornalístico, qual inferência está correta?',
    explanation: 'A interpretação de textos jornalísticos requer atenção às informações explícitas e capacidade de fazer inferências válidas.',
    difficulty: 1,
    options: [
      {
        id: 100006,
        exercise_id: 10002,
        option_text: 'O município enfrentava problemas de abastecimento de água antes das chuvas recentes.',
        is_correct: true,
        explanation: 'Correto! Pode-se inferir que havia problemas de abastecimento devido à menção da seca de três anos e à situação crítica dos reservatórios.'
      },
      {
        id: 100007,
        exercise_id: 10002,
        option_text: 'Os reservatórios atingiram sua capacidade máxima após as chuvas.',
        is_correct: false,
        explanation: 'Incorreto! O texto informa que os reservatórios atingiram 40% da capacidade, não 100%.'
      },
      {
        id: 100008,
        exercise_id: 10002,
        option_text: 'Janeiro é tradicionalmente o mês mais chuvoso na região.',
        is_correct: false,
        explanation: 'Incorreto! O texto não fornece informações sobre padrões sazonais de chuva na região.'
      },
      {
        id: 100009,
        exercise_id: 10002,
        option_text: 'A seca foi completamente superada com as chuvas de janeiro.',
        is_correct: false,
        explanation: 'Incorreto! O texto não afirma que a seca foi superada completamente, apenas que houve melhoria nos níveis dos reservatórios.'
      },
      {
        id: 100010,
        exercise_id: 10002,
        option_text: 'A companhia de abastecimento foi responsável pelo aumento no volume de água dos reservatórios.',
        is_correct: false,
        explanation: 'Incorreto! A companhia de abastecimento apenas forneceu informações sobre os níveis dos reservatórios, não foi responsável pelo aumento.'
      }
    ]
  }
];

//==============================================================================
//==============================================================================
//                            TEXTOS LITERÁRIOS
//==============================================================================
//==============================================================================

// ---------- MÓDULO 1: Contos clássicos e contemporâneos ----------
export const textoLiterarioExercicio1: Exercise[] = [
  {
    id: 30001,
    category_id: 'interpretacao-literario',
    question: 'Leia o trecho do conto:\n\n"O velho sentou-se na varanda e observou o horizonte. As nuvens, pesadas como suas memórias, anunciavam a tempestade. Cinquenta anos naquela casa e ainda se surpreendia com as cores do pôr-do-sol entre as montanhas. Fechou os olhos e pôde ouvir, ainda que distante, a voz de Maria chamando-o para o jantar."\n\nQual elemento literário se destaca neste trecho?',
    explanation: 'Textos literários utilizam recursos estilísticos para criar imagens, sensações e emoções no leitor.',
    difficulty: 2,
    options: [
      {
        id: 300001,
        exercise_id: 30001,
        option_text: 'A construção de uma atmosfera nostálgica através de metáforas e descrições sensoriais.',
        is_correct: true,
        explanation: 'Correto! O texto utiliza metáforas ("nuvens pesadas como suas memórias") e descrições sensoriais (cores, sons) para criar uma atmosfera nostálgica.'
      },
      {
        id: 300002,
        exercise_id: 30001,
        option_text: 'O uso de linguagem técnica para descrever fenômenos meteorológicos.',
        is_correct: false,
        explanation: 'Incorreto! O texto não utiliza linguagem técnica, mas sim figurativa e sensorial.'
      },
      {
        id: 300003,
        exercise_id: 30001,
        option_text: 'A narração objetiva e imparcial dos acontecimentos.',
        is_correct: false,
        explanation: 'Incorreto! A narração não é objetiva, mas carregada de subjetividade e elementos figurativos.'
      },
      {
        id: 300004,
        exercise_id: 30001,
        option_text: 'O diálogo extenso entre personagens como recurso narrativo principal.',
        is_correct: false,
        explanation: 'Incorreto! Não há diálogo no trecho, apenas a menção à voz de Maria sendo lembrada pelo personagem.'
      },
      {
        id: 300005,
        exercise_id: 30001,
        option_text: 'A crítica social explícita às tradições rurais.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta crítica social, apenas retrata uma cena com elementos nostálgicos.'
      }
    ]
  },
  {
    id: 30002,
    category_id: 'interpretacao-literario',
    question: 'Leia o poema:\n\n"Entre o ser e o não ser\nHá o instante suspenso\nOnde a pétala hesita\nAntes de cair.\nNesse vácuo do tempo\nMora toda a poesia."\n\nQual interpretação melhor representa a ideia central do poema?',
    explanation: 'A interpretação de poemas envolve identificar temas, símbolos e o sentido que emerge da construção poética.',
    difficulty: 3,
    options: [
      {
        id: 300006,
        exercise_id: 30002,
        option_text: 'A poesia encontra-se no momento de transição e indecisão, no instante suspenso entre estados.',
        is_correct: true,
        explanation: 'Correto! O poema sugere que a essência da poesia está no momento transitório, no limiar entre estados diferentes.'
      },
      {
        id: 300007,
        exercise_id: 30002,
        option_text: 'A queda inevitável das pétalas simboliza a morte como tema central da poesia.',
        is_correct: false,
        explanation: 'Incorreto! Embora haja uma menção à queda da pétala, o foco está no momento de hesitação, não na queda como símbolo da morte.'
      },
      {
        id: 300008,
        exercise_id: 30002,
        option_text: 'O vácuo representa a falta de sentido da existência humana e da própria poesia.',
        is_correct: false,
        explanation: 'Incorreto! O "vácuo do tempo" não está sendo retratado como ausência de sentido, mas como um espaço pleno onde habita a poesia.'
      },
      {
        id: 300009,
        exercise_id: 30002,
        option_text: 'O poema é uma crítica à indecisão humana diante das escolhas da vida.',
        is_correct: false,
        explanation: 'Incorreto! O poema não apresenta tom crítico em relação à hesitação; pelo contrário, valoriza esse estado.'
      },
      {
        id: 300010,
        exercise_id: 30002,
        option_text: 'A natureza, representada pela pétala, é a única fonte verdadeira de inspiração poética.',
        is_correct: false,
        explanation: 'Incorreto! Embora utilize a pétala como elemento natural, o poema não sugere que a natureza seja a única fonte de inspiração poética.'
      }
    ]
  }
];

// Exercícios com textos argumentativos (versão anterior)
export const textoArgumentativoExercicioAntigo: Exercise[] = [
  {
    id: 40001,
    category_id: 'interpretacao-argumentativo',
    question: 'Leia o trecho do artigo de opinião:\n\n"A redução da maioridade penal não é solução para a criminalidade. Países que adotaram medidas semelhantes não viram diminuição significativa nos índices de violência. Além disso, nossas prisões já superlotadas não oferecem condições de ressocialização. O caminho mais efetivo seria investir em educação, oportunidades de trabalho para jovens e fortalecimento de medidas socioeducativas."\n\nQual é a tese defendida pelo autor?',
    explanation: 'Em textos argumentativos, a tese é a ideia central que o autor defende e busca sustentar com argumentos.',
    difficulty: 2,
    options: [
      {
        id: 400001,
        exercise_id: 40001,
        option_text: 'A redução da maioridade penal não é uma medida eficaz para combater a criminalidade.',
        is_correct: true,
        explanation: 'Correto! Esta é a tese principal defendida pelo autor logo no início do texto e sustentada pelos argumentos seguintes.'
      },
      {
        id: 400002,
        exercise_id: 40001,
        option_text: 'As prisões brasileiras estão superlotadas e não cumprem seu papel ressocializador.',
        is_correct: false,
        explanation: 'Incorreto! Embora este seja um dos argumentos usados, não é a tese principal do texto.'
      },
      {
        id: 400003,
        exercise_id: 40001,
        option_text: 'A educação é a única solução para reduzir a criminalidade entre jovens.',
        is_correct: false,
        explanation: 'Incorreto! O texto menciona a educação como parte da solução, junto com outras medidas, mas não como única solução.'
      },
      {
        id: 400004,
        exercise_id: 40001,
        option_text: 'Países desenvolvidos já comprovaram a ineficácia da redução da maioridade penal.',
        is_correct: false,
        explanation: 'Incorreto! O texto menciona países que adotaram medidas semelhantes, mas não especifica que sejam países desenvolvidos, e este é um argumento, não a tese.'
      },
      {
        id: 400005,
        exercise_id: 40001,
        option_text: 'O sistema socioeducativo atual é suficiente e não precisa de melhorias.',
        is_correct: false,
        explanation: 'Incorreto! O texto defende o fortalecimento das medidas socioeducativas, o que sugere que o sistema atual precisa de melhorias.'
      }
    ]
  },
  {
    id: 40002,
    category_id: 'interpretacao-argumentativo',
    question: 'Analise o texto dissertativo:\n\n"O ensino à distância, apesar de suas limitações, representa um avanço democrático na educação. Primeiramente, permite acesso ao conhecimento em regiões remotas onde universidades presenciais são inexistentes. Além disso, oferece flexibilidade de horários para estudantes que precisam conciliar trabalho e estudo. Por fim, com o avanço das tecnologias interativas, as limitações de interação entre professores e alunos têm sido gradualmente superadas."\n\nQual estratégia argumentativa o autor utiliza predominantemente?',
    explanation: 'As estratégias argumentativas são recursos utilizados para desenvolver e fortalecer uma tese em textos dissertativos.',
    difficulty: 3,
    options: [
      {
        id: 400006,
        exercise_id: 40002,
        option_text: 'Enumeração de argumentos em ordem lógica para sustentar a tese inicial.',
        is_correct: true,
        explanation: 'Correto! O autor apresenta a tese e em seguida enumera três argumentos em sequência lógica, utilizando "primeiramente", "além disso" e "por fim".'
      },
      {
        id: 400007,
        exercise_id: 40002,
        option_text: 'Comparação entre ensino presencial e ensino à distância, destacando vantagens do segundo.',
        is_correct: false,
        explanation: 'Incorreto! Embora mencione o ensino à distância, o texto não estabelece comparação direta com o ensino presencial como principal estratégia.'
      },
      {
        id: 400008,
        exercise_id: 40002,
        option_text: 'Apresentação de exemplos concretos e casos reais de sucesso do ensino à distância.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta exemplos concretos nem casos reais, mas argumentos gerais sobre as vantagens do ensino à distância.'
      },
      {
        id: 400009,
        exercise_id: 40002,
        option_text: 'Uso de argumentos de autoridade, citando especialistas no assunto.',
        is_correct: false,
        explanation: 'Incorreto! O texto não cita especialistas ou autoridades para sustentar seus argumentos.'
      },
      {
        id: 400010,
        exercise_id: 40002,
        option_text: 'Refutação das críticas comuns feitas ao ensino à distância.',
        is_correct: false,
        explanation: 'Incorreto! Embora mencione "limitações" no início, o texto não se dedica a refutar críticas específicas como estratégia principal.'
      }
    ]
  }
];

// Exercícios com infográficos e textos multimodais
export const textoMultimodalExercicio1: Exercise[] = [
  {
    id: 50001,
    category_id: 'interpretacao-multimodal',
    question: 'Considere o seguinte infográfico descrito:\n\n[O infográfico mostra o consumo médio de água por pessoa em diferentes países. Brasil: 150L/dia; Estados Unidos: 300L/dia; Alemanha: 120L/dia; Etiópia: 15L/dia. Ao lado, há um gráfico de barras mostrando a distribuição do uso doméstico: 45% no banho, 25% na descarga, 15% na lavagem de roupas, 10% na cozinha e 5% para beber/outros.]\n\nCom base nas informações apresentadas, qual conclusão NÃO pode ser inferida?',
    explanation: 'A interpretação de infográficos envolve análise de dados visuais e textuais para extrair informações e fazer inferências adequadas.',
    difficulty: 2,
    options: [
      {
        id: 500001,
        exercise_id: 50001,
        option_text: 'A disponibilidade de água é distribuída de forma igualitária entre os países analisados.',
        is_correct: true,
        explanation: 'Correto! Esta conclusão NÃO pode ser inferida do infográfico, que mostra apenas o consumo médio e não a disponibilidade de água em cada país.'
      },
      {
        id: 500002,
        exercise_id: 50001,
        option_text: 'Há grande disparidade no consumo médio de água entre países desenvolvidos e em desenvolvimento.',
        is_correct: false,
        explanation: 'Incorreto! Esta conclusão PODE ser inferida ao comparar os dados dos EUA e Alemanha (países desenvolvidos) com a Etiópia (país em desenvolvimento).'
      },
      {
        id: 500003,
        exercise_id: 50001,
        option_text: 'O banho representa a atividade doméstica que mais consome água no dia a dia.',
        is_correct: false,
        explanation: 'Incorreto! Esta conclusão PODE ser inferida do gráfico de barras, que mostra que 45% do consumo doméstico é no banho.'
      },
      {
        id: 500004,
        exercise_id: 50001,
        option_text: 'Um americano consome, em média, 20 vezes mais água do que um etíope.',
        is_correct: false,
        explanation: 'Incorreto! Esta conclusão PODE ser calculada a partir dos dados: 300L ÷ 15L = 20 vezes.'
      },
      {
        id: 500005,
        exercise_id: 50001,
        option_text: 'Economizar água no banho e na descarga teria maior impacto na redução do consumo doméstico.',
        is_correct: false,
        explanation: 'Incorreto! Esta conclusão PODE ser inferida, já que o gráfico mostra que banho (45%) e descarga (25%) somam 70% do consumo doméstico.'
      }
    ]
  },
  {
    id: 50002,
    category_id: 'interpretacao-multimodal',
    question: 'Analise a descrição da postagem em rede social:\n\n[A imagem mostra uma balança desequilibrada. No lado mais alto, há livros, um diploma e símbolos de conhecimento. No lado mais baixo e pesado, um smartphone com ícones de redes sociais. Acima da imagem, há o título "Sociedade atual". Abaixo, está escrito "O conhecimento nunca esteve tão disponível e tão ignorado".]\n\nQual é a crítica social representada nesta postagem multimodal?',
    explanation: 'Textos multimodais combinam elementos verbais e não-verbais para construir significados. A interpretação requer análise da relação entre esses elementos.',
    difficulty: 2,
    options: [
      {
        id: 500006,
        exercise_id: 50002,
        option_text: 'A sociedade atual valoriza mais o entretenimento digital do que o conhecimento formal, apesar da maior disponibilidade de informação.',
        is_correct: true,
        explanation: 'Correto! A balança desequilibrada simboliza essa valorização desigual, com o lado das redes sociais pesando mais que o lado do conhecimento formal.'
      },
      {
        id: 500007,
        exercise_id: 50002,
        option_text: 'Os livros e diplomas tornaram-se obsoletos diante da revolução digital e das novas formas de aprendizagem.',
        is_correct: false,
        explanation: 'Incorreto! A postagem não sugere que o conhecimento tradicional esteja obsoleto, mas sim que está sendo desvalorizado.'
      },
      {
        id: 500008,
        exercise_id: 50002,
        option_text: 'As redes sociais são a principal causa do fracasso educacional na sociedade contemporânea.',
        is_correct: false,
        explanation: 'Incorreto! A postagem critica a preferência social, mas não estabelece uma relação causal direta com o fracasso educacional.'
      },
      {
        id: 500009,
        exercise_id: 50002,
        option_text: 'O conhecimento formal pesa mais na vida profissional do que as habilidades digitais.',
        is_correct: false,
        explanation: 'Incorreto! A imagem mostra justamente o contrário: o lado do conhecimento formal está mais leve na balança.'
      },
      {
        id: 500010,
        exercise_id: 50002,
        option_text: 'A tecnologia trouxe mais benefícios que prejuízos para a educação contemporânea.',
        is_correct: false,
        explanation: 'Incorreto! A postagem apresenta uma visão crítica da preferência pelas redes sociais em detrimento do conhecimento, não uma visão positiva da tecnologia na educação.'
      }
    ]
  }
];

// ---------- MÓDULO 2: Entrevistas e depoimentos jornalísticos ----------
// Exercícios do Módulo 2 de Textos Jornalísticos
export const textoJornalisticoExercicio2: Exercise[] = [
  jornalisticoModulo2Exercicio1,
  jornalisticoModulo2Exercicio2,
  jornalisticoModulo2Exercicio3,
  jornalisticoModulo2Exercicio4,
  jornalisticoModulo2Exercicio5,
  jornalisticoModulo2Exercicio6,
  jornalisticoModulo2Exercicio7,
  jornalisticoModulo2Exercicio8,
  jornalisticoModulo2Exercicio9,
  jornalisticoModulo2Exercicio10
];

// ---------- MÓDULO 3: Manchetes e leads de notícias ----------
// Exercícios do Módulo 3 de Textos Jornalísticos
export const textoJornalisticoExercicio3: Exercise[] = [
  jornalisticoModulo3Exercicio1,
  jornalisticoModulo3Exercicio2,
  jornalisticoModulo3Exercicio3,
  jornalisticoModulo3Exercicio4,
  jornalisticoModulo3Exercicio5,
  jornalisticoModulo3Exercicio6,
  jornalisticoModulo3Exercicio7,
  jornalisticoModulo3Exercicio8,
  jornalisticoModulo3Exercicio9,
  jornalisticoModulo3Exercicio10
];

// Exercícios com textos jornalísticos - Módulo 4
export const textoJornalisticoExercicio4: Exercise[] = [
  {
    id: 10301,
    category_id: 'interpretacao-jornalistico-4',
    question: 'Leia o trecho de uma reportagem especial:\n\n"Após seis meses de investigação, nossa equipe teve acesso a documentos confidenciais que revelam como grandes empresas de tecnologia burlam a legislação tributária brasileira. Em parceria com especialistas em direito tributário, analisamos mais de 200 transações financeiras realizadas entre 2018 e 2022. Os documentos mostram que essas empresas utilizam uma complexa rede de subsidiárias em paraísos fiscais para evitar o pagamento de bilhões em impostos."\n\nQual característica principal de uma reportagem investigativa está presente neste trecho?',
    explanation: 'As reportagens investigativas têm características específicas que as diferenciam de outros gêneros jornalísticos.',
    difficulty: 3,
    options: [
      {
        id: 103001,
        exercise_id: 10301,
        option_text: 'A investigação aprofundada e prolongada realizada pelo jornalista para revelar informações de interesse público não facilmente acessíveis.',
        is_correct: true,
        explanation: 'Correto! O texto evidencia uma investigação de seis meses, acesso a documentos confidenciais e análise detalhada de transações, características típicas do jornalismo investigativo.'
      },
      {
        id: 103002,
        exercise_id: 10301,
        option_text: 'A divulgação de opiniões pessoais do jornalista sobre o tema tratado na reportagem.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta opiniões pessoais do jornalista, mas fatos e dados obtidos durante a investigação.'
      },
      {
        id: 103003,
        exercise_id: 10301,
        option_text: 'A cobertura em tempo real dos acontecimentos relacionados às empresas de tecnologia.',
        is_correct: false,
        explanation: 'Incorreto! O texto não indica uma cobertura em tempo real, mas uma investigação que durou seis meses e revela informações após análise detalhada.'
      },
      {
        id: 103004,
        exercise_id: 10301,
        option_text: 'O relato objetivo de um fato ocorrido recentemente, sem análise ou interpretação.',
        is_correct: false,
        explanation: 'Incorreto! O texto não se limita a relatar um fato recente, mas apresenta o resultado de uma investigação aprofundada sobre práticas que ocorrem há anos.'
      },
      {
        id: 103005,
        exercise_id: 10301,
        option_text: 'A transcrição literal dos documentos confidenciais citados na reportagem.',
        is_correct: false,
        explanation: 'Incorreto! O texto menciona documentos confidenciais, mas não os transcreve literalmente; apresenta uma análise feita pelos jornalistas com base nesses documentos.'
      }
    ]
  },
  {
    id: 10302,
    category_id: 'interpretacao-jornalistico-4',
    question: 'Analise o trecho a seguir, extraído de uma reportagem especial sobre desmatamento:\n\n"Na região norte do estado, o desmatamento avançou 43% nos últimos dois anos, segundo levantamento exclusivo realizado por nossa equipe. Para chegar a esse número, cruzamos dados de satélite com registros oficiais de autorizações de desmate e entrevistamos mais de 30 moradores locais. O resultado mostra que grande parte da derrubada ocorre em áreas de preservação permanente, onde o desmatamento é proibido por lei."\n\nO que diferencia esta reportagem especial de uma notícia cotidiana sobre desmatamento?',
    explanation: 'Reportagens especiais se diferenciam de notícias cotidianas por diversos aspectos relacionados à profundidade, tempo e recursos dedicados ao tema.',
    difficulty: 3,
    options: [
      {
        id: 103006,
        exercise_id: 10302,
        option_text: 'O uso de múltiplas fontes e métodos de apuração para abordar o tema com maior profundidade.',
        is_correct: true,
        explanation: 'Correto! A reportagem utiliza dados de satélite, registros oficiais e entrevistas com moradores locais, demonstrando uma apuração mais ampla e profunda do que uma notícia cotidiana.'
      },
      {
        id: 103007,
        exercise_id: 10302,
        option_text: 'O foco exclusivo na divulgação de dados percentuais sobre o desmatamento.',
        is_correct: false,
        explanation: 'Incorreto! Embora a reportagem apresente o dado de 43% de aumento no desmatamento, ela vai além disso, analisando onde ocorre e utilizando múltiplas fontes.'
      },
      {
        id: 103008,
        exercise_id: 10302,
        option_text: 'A ausência de informações factuais, privilegiando opiniões e especulações.',
        is_correct: false,
        explanation: 'Incorreto! A reportagem é rica em informações factuais (dados de satélite, registros oficiais) e não privilegia opiniões ou especulações.'
      },
      {
        id: 103009,
        exercise_id: 10302,
        option_text: 'A publicação em tempo real, logo após os eventos de desmatamento ocorrerem.',
        is_correct: false,
        explanation: 'Incorreto! A reportagem não indica publicação em tempo real, mas uma análise que considerou dados dos últimos dois anos e exigiu tempo para apuração.'
      },
      {
        id: 103010,
        exercise_id: 10302,
        option_text: 'A divulgação apenas de depoimentos de autoridades governamentais sobre o problema.',
        is_correct: false,
        explanation: 'Incorreto! A reportagem não se limita a depoimentos de autoridades; menciona diferentes fontes como dados de satélite, registros oficiais e entrevistas com moradores locais.'
      }
    ]
  }
];

// Exercícios com textos jornalísticos - Módulo 5
export const textoJornalisticoExercicio5: Exercise[] = [
  jornalisticoModulo5Exercicio1,
  jornalisticoModulo5Exercicio2,
  jornalisticoModulo5Exercicio3,
  jornalisticoModulo5Exercicio4,
  jornalisticoModulo5Exercicio5,
  jornalisticoModulo5Exercicio6,
  jornalisticoModulo5Exercicio7,
  jornalisticoModulo5Exercicio8,
  jornalisticoModulo5Exercicio9,
  jornalisticoModulo5Exercicio10
];

// Exercícios com textos técnicos e científicos - Módulo 2
export const textoCientificoExercicio2: Exercise[] = [
  {
    id: 20101,
    category_id: 'interpretacao-cientifico-2',
    question: 'Leia o trecho do manual técnico a seguir:\n\n"PROCEDIMENTO DE CALIBRAÇÃO:\n1. Antes de iniciar, certifique-se de que o aparelho esteja completamente desligado e desconectado da fonte de energia.\n2. Retire a tampa traseira utilizando uma chave Phillips n°3.\n3. Localize o potenciômetro de ajuste (componente azul) no canto superior direito da placa.\n4. Gire o potenciômetro lentamente no sentido horário até atingir a marca de 0.45V no multitester.\n5. Recoloque a tampa e aperte os parafusos com torque máximo de 2Nm."\n\nQual é a característica principal deste tipo de texto técnico?',
    explanation: 'Manuais técnicos possuem características específicas que os diferenciam de outros tipos de textos.',
    difficulty: 2,
    options: [
      {
        id: 201001,
        exercise_id: 20101,
        option_text: 'A apresentação de instruções sequenciais claras e objetivas para a execução de um procedimento específico.',
        is_correct: true,
        explanation: 'Correto! O texto apresenta instruções numeradas em sequência, com linguagem clara e direta, característica típica de manuais técnicos.'
      },
      {
        id: 201002,
        exercise_id: 20101,
        option_text: 'O uso de linguagem figurada e metafórica para explicar o processo de calibração.',
        is_correct: false,
        explanation: 'Incorreto! O texto utiliza linguagem denotativa e precisa, sem figuras de linguagem ou metafóras.'
      },
      {
        id: 201003,
        exercise_id: 20101,
        option_text: 'A defesa de um ponto de vista sobre a melhor forma de calibrar o aparelho.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta opinião ou argumentação, apenas instruções objetivas.'
      },
      {
        id: 201004,
        exercise_id: 20101,
        option_text: 'A descrição detalhada da história e desenvolvimento do aparelho.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta informações históricas ou sobre o desenvolvimento do aparelho, apenas instruções de uso.'
      },
      {
        id: 201005,
        exercise_id: 20101,
        option_text: 'A narração de uma experiência pessoal com o uso do equipamento.',
        is_correct: false,
        explanation: 'Incorreto! Não há narratiógio pessoal ou relato de experiência, apenas instruções técnicas objetivas.'
      }
    ]
  }
];

// Exercícios com textos literários - Módulo 2 (Poemas líricos e sonetos)
export const textoLiterarioExercicio2: Exercise[] = [
  {
    id: 30101,
    category_id: 'interpretacao-literario-2',
    question: 'Leia o poema a seguir:\n\n"No meio do caminho tinha uma pedra\ntinha uma pedra no meio do caminho\ntinha uma pedra\nno meio do caminho tinha uma pedra.\n\nNunca me esquecerei desse acontecimento\nna vida de minhas retinas tão fatigadas.\nNunca me esquecerei que no meio do caminho\ntinha uma pedra\ntinha uma pedra no meio do caminho\nno meio do caminho tinha uma pedra."\n\n(Carlos Drummond de Andrade)\n\nQual recurso estilístico é predominante neste poema?',
    explanation: 'Poemas líricos utilizam diversos recursos estilísticos para transmitir sentimentos e sensações.',
    difficulty: 2,
    options: [
      {
        id: 301001,
        exercise_id: 30101,
        option_text: 'Repetição, criando um efeito de circularidade e obstinação.',
        is_correct: true,
        explanation: 'Correto! O poema usa intensamente a repetição da frase "tinha uma pedra no meio do caminho" e suas variações, criando um efeito de circularidade que reforça a ideia de obstinação e de obstáculo permanente.'
      },
      {
        id: 301002,
        exercise_id: 30101,
        option_text: 'Metafórica, comparando explicitamente a pedra a um sentimento.',
        is_correct: false,
        explanation: 'Incorreto! Embora a pedra possa ser interpretada metaforicamente como um obstáculo, o poema não estabelece uma comparação explícita com sentimentos. O recurso predominante é a repetição.'
      },
      {
        id: 301003,
        exercise_id: 30101,
        option_text: 'Enjambement, quebrando os versos para criar suspense.',
        is_correct: false,
        explanation: 'Incorreto! Embora haja quebras de versos no poema, o enjambement não é o recurso predominante; a repetição é mais marcante e estruturante no texto.'
      },
      {
        id: 301004,
        exercise_id: 30101,
        option_text: 'Aliteracão, repetindo sons consonantais para criar musicalidade.',
        is_correct: false,
        explanation: 'Incorreto! Embora o poema tenha certa sonoridade, não há uma repetição intencional de sons consonantais específicos. O recurso predominante é a repetição de palavras e frases.'
      },
      {
        id: 301005,
        exercise_id: 30101,
        option_text: 'Antitese, contrastando ideias opostas ao longo do poema.',
        is_correct: false,
        explanation: 'Incorreto! O poema não apresenta contraste entre ideias opostas. A estrutura é baseada na repetição de uma mesma ideia, reforçando-a.'
      }
    ]
  },
  {
    id: 30102,
    category_id: 'interpretacao-literario-2',
    question: 'Leia o soneto a seguir:\n\n"Amor é fogo que arde sem se ver;\né ferida que dói e não se sente;\né um contentamento descontente;\né dor que desatina sem doer;\n\né um não querer mais que bem querer;\né solitário andar por entre a gente;\né nunca contentar-se de contente;\né cuidar que se ganha em se perder;\n\né querer estar preso por vontade;\né servir a quem vence, o vencedor;\né ter com quem nos mata lealdade.\n\nMas como causar pode seu favor\nnos corações humanos amizade,\nse tão contrário a si é o mesmo Amor?"\n\n(Camões)\n\nQual a principal característica deste soneto que exemplifica o estilo de Camões?',
    explanation: 'Os sonetos seguem estruturas formais específicas e frequentemente utilizam figuras de linguagem para construir suas ideias.',
    difficulty: 3,
    options: [
      {
        id: 301006,
        exercise_id: 30102,
        option_text: 'O uso de paradoxos para expressar a natureza contraditória do amor.',
        is_correct: true,
        explanation: 'Correto! O soneto de Camões é construído a partir de paradoxos ("arde sem se ver", "dói e não se sente", "contentamento descontente") que expressam a natureza contraditória e complexa do sentimento amoroso.'
      },
      {
        id: 301007,
        exercise_id: 30102,
        option_text: 'O uso de narrativa linear descrevendo cronologicamente uma história de amor.',
        is_correct: false,
        explanation: 'Incorreto! O soneto não apresenta uma narrativa linear ou cronológica, mas sim uma sequência de definições paradóxicas do amor.'
      },
      {
        id: 301008,
        exercise_id: 30102,
        option_text: 'A linguagem coloquial e simples, evitando metafóras complexas.',
        is_correct: false,
        explanation: 'Incorreto! O soneto utiliza linguagem elaborada e recursos estilísticos sofisticados, especialmente metafóras e paradoxos, característica do estilo de Camões.'
      },
      {
        id: 301009,
        exercise_id: 30102,
        option_text: 'O foco em descrições da natureza como alegoria dos sentimentos.',
        is_correct: false,
        explanation: 'Incorreto! O soneto não faz descrições da natureza; ele se concentra diretamente na definição do amor através de paradoxos e antiteses.'
      },
      {
        id: 301010,
        exercise_id: 30102,
        option_text: 'A ausência de rimas e métrica regular, privilegiando o verso livre.',
        is_correct: false,
        explanation: 'Incorreto! Como todo soneto clássico, o poema de Camões segue uma estrutura formal rígida, com métrica regular (decassílabos) e esquema de rimas definido.'
      }
    ]
  }
];

// Exercícios com textos literários - Módulo 3 (Crônicas literárias)
export const textoLiterarioExercicio3: Exercise[] = [
  {
    id: 30201,
    category_id: 'interpretacao-literario-3',
    question: 'Leia o trecho da crônica a seguir:\n\n"Eu estava ali parado, o pão na mão direita, a faca suspensa no ar. Olhava para a manteiga Quiétude, brilhando no prato. Manteiga Quiétude. Qué bonito nome. Quiétude: uma state of being quiet, calm or still. Sossego, repouso, tranquilidade. Isso eu estou lendo agora no Webster, mas na hora eu não consultei dicionário nenhum. Eu só pensei: mas que bonito nome. E estava ali parado, admirado, quando a manteiga comeou a brilhar mais ainda. Quiétude, dizia a embalagem em letras vermelhas, sobre fundo azul e branco."\n\n(Fernando Sabino)\n\nQual característica da crônica literária está evidenciada nesse trecho?',
    explanation: 'Crônicas literárias são textos breves que abordam situações cotidianas com um olhar subjetivo e reflexivo.',
    difficulty: 2,
    options: [
      {
        id: 302001,
        exercise_id: 30201,
        option_text: 'A transformação de um elemento cotidiano banal em motivo para reflexão e contemplação.',
        is_correct: true,
        explanation: 'Correto! A crônica transforma o simples ato de passar manteiga no pão em um momento contemplativo, em que o narrador se encanta com o nome do produto, caracterizando a crônica literária que valoriza o olhar diferenciado sobre o cotidiano.'
      },
      {
        id: 302002,
        exercise_id: 30201,
        option_text: 'A análise objetiva e distanciada de um fenômeno social complexo.',
        is_correct: false,
        explanation: 'Incorreto! A crônica não apresenta análise objetiva ou distanciada, pelo contrário, mostra o envolvimento subjetivo do narrador com o objeto banal do cotidiano.'
      },
      {
        id: 302003,
        exercise_id: 30201,
        option_text: 'O uso de linguagem técnica e especializada para descrever um fenômeno científico.',
        is_correct: false,
        explanation: 'Incorreto! A linguagem utilizada é coloquial e poética, não técnica ou científica, embora haja uma consulta ao dicionário, isso é feito de forma casual e pessoal.'
      },
      {
        id: 302004,
        exercise_id: 30201,
        option_text: 'A construção de uma narrativa épica com avanços temporais significativos.',
        is_correct: false,
        explanation: 'Incorreto! A crônica retrata um momento pontual e breve, sem avanços temporais significativos, focando no instante da contemplação.'
      },
      {
        id: 302005,
        exercise_id: 30201,
        option_text: 'A descrição detalhada de paisagens naturais como pano de fundo para a ação.',
        is_correct: false,
        explanation: 'Incorreto! Não há descrição de paisagens naturais; o foco está no ambiente doméstico e no objeto cotidiano (a manteiga).'
      }
    ]
  }
];

// Exercícios com textos literários - Módulo 4 (Fragmentos de romances)
export const textoLiterarioExercicio4: Exercise[] = [
  {
    id: 30301,
    category_id: 'interpretacao-literario-4',
    question: 'Leia o trecho do romance a seguir:\n\n"Capitão Rodrigo Cambrá a Santa Fé numa tarde de ventania, montado num cavalo baixeiro.\nAlto e forte, de cabelos castanhos compridos, tinha um olhar claro e movimentos rápidos. Quando falava, sua voz era tão ressoante que fazia vibrar os vidros das janelas.\nApeou na frente da venda do Nicolau, amarrou o pingo no tronco do cinamomo que havia junto ao portão, e entrou arrastando as esporas, fazendo a madeira do assoalho zangar debaixo de suas botas. Bateu na copa do balcão com a palma da mão e gritou:\n- Ó de casa!"\n\n(Erico Veríssimo, "O Tempo e o Vento")\n\nComo o autor constrói a caracterização da personagem neste fragmento de romance?',
    explanation: 'Os romances utilizam diversos recursos para construção e apresentação de personagens.',
    difficulty: 2,
    options: [
      {
        id: 303001,
        exercise_id: 30301,
        option_text: 'Através da descrição física e das ações, enfatizando traços que sugerem sua personalidade forte e arrogante.',
        is_correct: true,
        explanation: 'Correto! O autor descreve características físicas ("alto e forte", "cabelos castanhos compridos", "olhar claro") e ações ("entrou arrastando as esporas", "bateu na copa", "gritou") que revelam uma personalidade imponente e provocadora.'
      },
      {
        id: 303002,
        exercise_id: 30301,
        option_text: 'Privilegiando o monólogo interior, revelando os pensamentos mais íntimos do personagem.',
        is_correct: false,
        explanation: 'Incorreto! O trecho não apresenta monólogo interior nem acesso aos pensamentos do personagem, focando na descrição externa e nas ações.'
      },
      {
        id: 303003,
        exercise_id: 30301,
        option_text: 'Através dos diálogos longos com outros personagens, que revelam suas motivações.',
        is_correct: false,
        explanation: 'Incorreto! Não há diálogos longos no trecho, apenas uma fala breve ("Ó de casa!") que não revela motivações profundas.'
      },
      {
        id: 303004,
        exercise_id: 30301,
        option_text: 'Focando no passado da personagem, narrando sua história de vida em detalhes.',
        is_correct: false,
        explanation: 'Incorreto! O trecho não menciona o passado do personagem nem sua história de vida anterior à chegada à cidade.'
      },
      {
        id: 303005,
        exercise_id: 30301,
        option_text: 'Por meio da descrição detalhada do ambiente e da paisagem, ignorando o personagem.',
        is_correct: false,
        explanation: 'Incorreto! Embora mencione brevemente o ambiente (a venda, o cinamomo), o foco principal é o personagem, não a paisagem ou o ambiente.'
      }
    ]
  }
];

// Exercícios com textos literários - Módulo 5 (Textos dramáticos e peças teatrais)
export const textoLiterarioExercicio5: Exercise[] = [
  {
    id: 30401,
    category_id: 'interpretacao-literario-5',
    question: 'Leia o trecho da peça teatral a seguir:\n\n"HAMLET - Ser ou não ser, essa é que é a questão: será mais nobre sofrer na alma as pedradas e flechadas do destino feroz, ou pegar em armas contra um mar de atribulações e, combatendo-o, dar-lhe fim? Morrer... dormir; não mais. Dizer que assim findam o sofrimento e as mil dores naturais a que a carne é sujeita - é a conclusão que devemos buscar com ardência. Morrer... dormir. Dormir... talvez sonhar - eis o problema: pois os sonhos que possam vir no sono da morte, quando tenhamos escapado a toda confusão terrena, nos obrigam a refletir. É essa a hesitação que torna a desgraça tão duradoura."\n\n(Shakespeare, "Hamlet")\n\nQual característica marcante do texto dramático está presente neste trecho?',
    explanation: 'Textos dramáticos possuem características específicas que os diferenciam de outros gêneros literários.',
    difficulty: 3,
    options: [
      {
        id: 304001,
        exercise_id: 30401,
        option_text: 'O monólogo, no qual a personagem expressa seus conflitos internos, inquietações e dilevas existenciais.',
        is_correct: true,
        explanation: 'Correto! O trecho apresenta o famoso monólogo de Hamlet, no qual a personagem expressa seu dilema existencial entre a vida e a morte, revelando suas dúvidas e reflexões mais profundas.'
      },
      {
        id: 304002,
        exercise_id: 30401,
        option_text: 'A narração em terceira pessoa, que descreve objetivamente as ações e sentimentos das personagens.',
        is_correct: false,
        explanation: 'Incorreto! Não há narração em terceira pessoa; trata-se de um monólogo em primeira pessoa, característico do texto dramático.'
      },
      {
        id: 304003,
        exercise_id: 30401,
        option_text: 'O diálogo rápido entre várias personagens, produzindo dinamismo na cena.',
        is_correct: false,
        explanation: 'Incorreto! O trecho é um monólogo de Hamlet, não há diálogo com outras personagens.'
      },
      {
        id: 304004,
        exercise_id: 30401,
        option_text: 'A descrição detalhada do ambiente e dos cenários onde a ação se desenvolve.',
        is_correct: false,
        explanation: 'Incorreto! O trecho não contém descrições de ambiente ou cenário, concentrando-se nas palavras e reflexões do personagem.'
      },
      {
        id: 304005,
        exercise_id: 30401,
        option_text: 'A linguagem simples e coloquial, evitando figuras de linguagem ou expressões poéticas.',
        is_correct: false,
        explanation: 'Incorreto! A linguagem utilizada é elaborada, poética e rica em figuras de linguagem, como metafóras ("pegar em armas contra um mar de atribulações") e antiteses ("ser ou não ser").'
      }
    ]
  },
  {
    id: 30402,
    category_id: 'interpretacao-literario-5',
    question: 'Leia o trecho da peça teatral a seguir:\n\n"(Rubrica: Zulmira está diante do túmulo do marido. Olha para os lados. Tem o rosto afogueado. Está excitada.)\n\nZULMIRA - Tuninho! (baixo e com maior intensidade) Tuninho!... (múda de tom) Escuta, Tuninho... Você não está dormindo, está morto. Quem dorme é um vivo e você é um morto. (numa especie de histeria) Até as mãos cruzadas que puseram em você não são suas, são mãos postas, artificiais! (Zulmira tem um riso entrecortado e baixo) Está ouvindo, Tuninho?"\n\n(Nelson Rodrigues, "A Falecida")\n\nQual a função dos elementos entre parênteses neste texto dramático?',
    explanation: 'Os textos dramáticos apresentam elementos específicos que orientam sua encenação.',
    difficulty: 3,
    options: [
      {
        id: 304006,
        exercise_id: 30402,
        option_text: 'São rubricas que orientam a atuação, descrevendo gestos, expressões e aspectos ceníficos que não são evidentes nas falas.',
        is_correct: true,
        explanation: 'Correto! Os trechos entre parênteses são rubricas, elementos característicos do texto teatral que fornecem instruções para a atuação, indicando expressões, gestos, tons de voz e movimentação cênica que não poderiam ser inferidos apenas pelo diálogo.'
      },
      {
        id: 304007,
        exercise_id: 30402,
        option_text: 'São comentários do narrador, que interrompe a cena para contextualizar o leitor.',
        is_correct: false,
        explanation: 'Incorreto! Não há narrador no texto dramático; as rubricas não são comentários narrativos, mas instruções cênicas para a representação teatral.'
      },
      {
        id: 304008,
        exercise_id: 30402,
        option_text: 'São pensamentos da personagem Zulmira que não são verbalizados na cena.',
        is_correct: false,
        explanation: 'Incorreto! Os trechos não representam pensamentos da personagem, mas orientações para a encenação, direcionadas aos atores e diretor.'
      },
      {
        id: 304009,
        exercise_id: 30402,
        option_text: 'São falas de um personagem oculto que observa a cena.',
        is_correct: false,
        explanation: 'Incorreto! Não são falas de nenhum personagem, mas indicações técnicas para a montagem da peça.'
      },
      {
        id: 304010,
        exercise_id: 30402,
        option_text: 'São notas de rodapé inseridas pelo editor do texto para esclarecer termos obscuros.',
        is_correct: false,
        explanation: 'Incorreto! Não são notas editoriais, mas elementos constitutivos do próprio texto dramático, escritos pelo autor como parte integrante da obra.'
      }
    ]
  }
];

//==============================================================================
//==============================================================================
//                         TEXTOS ARGUMENTATIVOS
//==============================================================================
//==============================================================================

// ---------- MÓDULO 1: Artigos de opinião ----------
export const textoArgumentativoExercicio1: Exercise[] = [
  {
    id: 60001,
    category_id: 'interpretacao-argumentativo',
    question: 'Leia o trecho do artigo de opinião a seguir:\n\n"A escassez de água é um problema global que exige ação imediata. Não podemos mais nos dar ao luxo de descartar milhares de litros por dia em práticas agrícolas ultrapassadas e indústrias poluidoras. O debate sobre esse tema não é sobre escolher entre economia e meio ambiente, mas sobre como garantir a sobrevivência a longo prazo de ambos. Ignorar essa questão não é apenas irresponsável, é impraticável."\n\nQue característica principal de um texto argumentativo está presente neste trecho?',
    explanation: 'Textos argumentativos apresentam características específicas que visam convencer ou persuadir o leitor.',
    difficulty: 2,
    options: [
      {
        id: 600001,
        exercise_id: 60001,
        option_text: 'A defesa de um ponto de vista por meio de argumentos organizados logicamente para convencer o leitor.',
        is_correct: true,
        explanation: 'Correto! O autor apresenta claramente seu ponto de vista sobre a escassez de água e utiliza argumentos lógicos para defender sua posição e convencer o leitor da necessidade de ação.'
      },
      {
        id: 600002,
        exercise_id: 60001,
        option_text: 'A descrição objetiva e imparcial de um fenômeno natural sem expressão de opiniões.',
        is_correct: false,
        explanation: 'Incorreto! O texto não é uma descrição imparcial, mas claramente expressa opiniões e julgamentos de valor com termos como "irresponsável" e "impraticável".'
      },
      {
        id: 600003,
        exercise_id: 60001,
        option_text: 'A narração de eventos relacionados à escassez de água em ordem cronológica.',
        is_correct: false,
        explanation: 'Incorreto! O texto não narra eventos em ordem cronológica, mas apresenta uma situação atual e argumenta sobre sua importância.'
      },
      {
        id: 600004,
        exercise_id: 60001,
        option_text: 'A explicação didática sobre o ciclo da água e fenômenos físicos relacionados.',
        is_correct: false,
        explanation: 'Incorreto! O texto não explica processos ou fenômenos naturais, mas defende um posicionamento sobre como lidar com um problema ambiental.'
      },
      {
        id: 600005,
        exercise_id: 60001,
        option_text: 'O relato de uma experiência pessoal com a falta de água em determinada região.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta relatos de experiências pessoais, mas aborda o tema de forma mais ampla e conceitual.'
      }
    ]
  },
  {
    id: 60002,
    category_id: 'interpretacao-argumentativo',
    question: 'Analise o seguinte trecho de um artigo de opinião:\n\n"Embora muitos defendam que o ensino remoto democratizou o acesso à educação, as evidências apontam para o contrário. O fosso digital entre os estudantes de diferentes classes sociais nunca foi tão evidente. Enquanto alguns disfrutam de conexões estáveis e computadores modernos, milhares se aglomeram ao redor de um único smartphone com conexão intermitente. Portanto, é equivocado afirmar que vivemos uma revolução democrática na educação digital."\n\nQual estratégia argumentativa é principalmente utilizada pelo autor neste trecho?',
    explanation: 'Textos argumentativos utilizam diferentes estratégias para construir e fortalecer seus argumentos.',
    difficulty: 3,
    options: [
      {
        id: 600006,
        exercise_id: 60002,
        option_text: 'Contra-argumentação: apresenta primeiro a tese contrária para depois refutá-la com argumentos e evidências.',
        is_correct: true,
        explanation: 'Correto! O autor inicia mencionando uma tese contrária ("ensino remoto democratizou o acesso") para em seguida apresentar argumentos que a contradizem, demonstrando o fosso digital existente, concluindo com a refutação da tese inicial.'
      },
      {
        id: 600007,
        exercise_id: 60002,
        option_text: 'Argumento de autoridade: baseia sua argumentação citando opiniões de especialistas reconhecidos na área.',
        is_correct: false,
        explanation: 'Incorreto! O texto não cita especialistas ou autoridades no assunto para fundamentar sua posição.'
      },
      {
        id: 600008,
        exercise_id: 60002,
        option_text: 'Generalização: utiliza casos isolados para fazer afirmações sobre toda a realidade educacional.',
        is_correct: false,
        explanation: 'Incorreto! O autor não utiliza casos isolados para generalizar, mas apresenta um contraste entre diferentes realidades sociais no contexto educacional.'
      },
      {
        id: 600009,
        exercise_id: 60002,
        option_text: 'Apelo emocional: busca sensibilizar o leitor através de linguagem comovente e dramática.',
        is_correct: false,
        explanation: 'Incorreto! Embora mencione uma situação social preocupante, o texto mantém um tom mais analítico do que emocional, focando em contrastes sociais objetivos.'
      },
      {
        id: 600010,
        exercise_id: 60002,
        option_text: 'Comparação histórica: analisa como a educação evoluiu ao longo das décadas para justificar sua posição.',
        is_correct: false,
        explanation: 'Incorreto! O texto não faz comparações históricas ou analisa a evolução da educação ao longo do tempo.'
      }
    ]
  }
];

// ---------- MÓDULO 2: Editoriais ----------
export const textoArgumentativoExercicio2: Exercise[] = [
  {
    id: 60101,
    category_id: 'interpretacao-argumentativo-2',
    question: 'Leia o trecho do editorial a seguir:\n\n"A reforma tributária em discussão no Congresso é um passo fundamental para a modernização do país. A simplificação do sistema atual, notoriamente complexo e ineficiente, pode representar um avanço significativo para a economia nacional. Contudo, é imperativo que os parlamentares não cedam às pressões de setores específicos que buscam privilégios em detrimento do interesse coletivo. O momento exige coragem política e visão de longo prazo."\n\nQual característica típica de editoriais está mais evidente neste trecho?',
    explanation: 'Editoriais são textos argumentativos que expressam a opinião oficial de um veículo de comunicação sobre temas relevantes.',
    difficulty: 2,
    options: [
      {
        id: 601001,
        exercise_id: 60101,
        option_text: 'A expressão de um posicionamento institucional sobre um tema de interesse público, buscando orientar a opinião dos leitores.',
        is_correct: true,
        explanation: 'Correto! O texto expressa claramente o posicionamento do veículo sobre a reforma tributária, defendendo a simplificação do sistema e alertando contra interesses setoriais, características típicas de editoriais.'
      },
      {
        id: 601002,
        exercise_id: 60101,
        option_text: 'A divulgação imparcial de notícias recentes sobre a tramitação da reforma tributária.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta uma divulgação imparcial de notícias, mas sim um posicionamento claro sobre o tema, com palavras que expressam opinião como "fundamental", "imperativo" e "coragem política".'
      },
      {
        id: 601003,
        exercise_id: 60101,
        option_text: 'A análise técnica detalhada dos mecanismos tributários propostos na reforma.',
        is_correct: false,
        explanation: 'Incorreto! O texto não faz uma análise técnica detalhada da reforma, mas oferece uma visão geral com posicionamento claro sobre o tema.'
      },
      {
        id: 601004,
        exercise_id: 60101,
        option_text: 'A entrevista com especialistas em direito tributário sobre os impactos da reforma.',
        is_correct: false,
        explanation: 'Incorreto! O texto não é uma entrevista, não há falas diretas de especialistas ou perguntas e respostas.'
      },
      {
        id: 601005,
        exercise_id: 60101,
        option_text: 'O relato cronológico das etapas de tramitação da reforma no Congresso.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta um relato cronológico ou histórico da tramitação da reforma, mas uma opinião sobre sua importância atual.'
      }
    ]
  },
  {
    id: 60102,
    category_id: 'interpretacao-argumentativo-2',
    question: 'Analise o seguinte trecho de editorial:\n\n"A política de cotas nas universidades públicas completa agora uma década de implementação. Os dados mostram resultados inequívocos: aumento da diversidade no ambiente acadêmico, desempenho satisfatório dos cotistas e maior mobilidade social para grupos historicamente marginalizados. É hora de avaliar avanços, corrigir distorções e reafirmar o compromisso com a inclusão educacional, resistindo às recorrentes tentativas de desqualificar essa importante política afirmativa."\n\nQual dos recursos abaixo é mais utilizado pelo editorial para construir sua argumentação?',
    explanation: 'Editoriais utilizam diversos recursos argumentativos para defender seu posicionamento institucional.',
    difficulty: 3,
    options: [
      {
        id: 601006,
        exercise_id: 60102,
        option_text: 'Dados e evidências para apoiar uma conclusão e direcionar a opinião do público sobre uma política pública.',
        is_correct: true,
        explanation: 'Correto! O editorial utiliza dados objetivos ("resultados inequívocos", menciona aumento da diversidade e desempenho satisfatório) para fundamentar sua argumentação a favor da manutenção da política de cotas.'
      },
      {
        id: 601007,
        exercise_id: 60102,
        option_text: 'Apelo emocional com histórias comoventes de estudantes cotistas.',
        is_correct: false,
        explanation: 'Incorreto! O texto não utiliza histórias pessoais ou narrativas emocionais para sensibilizar o leitor.'
      },
      {
        id: 601008,
        exercise_id: 60102,
        option_text: 'Comparação entre o sistema educacional brasileiro e modelos internacionais de sucesso.',
        is_correct: false,
        explanation: 'Incorreto! O editorial não faz comparações com sistemas educacionais de outros países.'
      },
      {
        id: 601009,
        exercise_id: 60102,
        option_text: 'Citações de autoridades acadêmicas e especialistas em educação inclusiva.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta citações diretas ou indiretas de especialistas ou autoridades no assunto.'
      },
      {
        id: 601010,
        exercise_id: 60102,
        option_text: 'Uso de ironia e sarcasmo para criticar os opositores às cotas universitárias.',
        is_correct: false,
        explanation: 'Incorreto! O editorial mantém um tom formal e direto, sem utilizar ironia ou sarcasmo em sua argumentação.'
      }
    ]
  }
];

// ---------- MÓDULO 3: Dissertações argumentativas ----------
export const textoArgumentativoExercicio3: Exercise[] = [
  {
    id: 60201,
    category_id: 'interpretacao-argumentativo-3',
    question: 'Leia o trecho de dissertação argumentativa a seguir:\n\n"O crescimento desenfreado das redes sociais alterou profundamente as relações humanas no século XXI. Se por um lado essas plataformas ampliam possibilidades de comunicação e democratizam o acesso à informação, por outro, promovem o isolamento real e a superexposição da vida privada. Além disso, os algoritmos que determinam o conteúdo visualizado tendem a criar as chamadas ‘bolhas’, onde os usuários são expostos apenas a opiniões que corroboram suas próprias visões de mundo. Tal fenômeno contribui para a polarização e dificulta o diálogo construtivo na sociedade contemporânea."\n\nQual estrutura argumentativa é predominante neste trecho de dissertação?',
    explanation: 'Dissertações argumentativas apresentam estruturas específicas para desenvolver a defesa de um ponto de vista.',
    difficulty: 3,
    options: [
      {
        id: 602001,
        exercise_id: 60201,
        option_text: 'Tese e antitese, apresentando aspectos positivos e negativos do tema antes de chegar a uma síntese.',
        is_correct: true,
        explanation: 'Correto! O texto apresenta primeiro uma tese (redes sociais ampliam comunicação e democratizam informação) e depois uma antítese (promovem isolamento e criam bolhas), concluindo com uma síntese sobre os efeitos negativos para o diálogo social.'
      },
      {
        id: 602002,
        exercise_id: 60201,
        option_text: 'Introdução, desenvolvimento e conclusão claramente delimitados.',
        is_correct: false,
        explanation: 'Incorreto! Embora essa seja uma estrutura comum em dissertações completas, no trecho não há uma divisão clara dessas três partes; trata-se apenas de um fragmento que utiliza principalmente a estrutura de tese e antítese.'
      },
      {
        id: 602003,
        exercise_id: 60201,
        option_text: 'Argumentação exclusivamente por exemplos concretos de usuários de redes sociais.',
        is_correct: false,
        explanation: 'Incorreto! O texto não utiliza exemplos concretos ou casos específicos, mas apresenta uma reflexão mais abstrata e conceitual sobre o tema.'
      },
      {
        id: 602004,
        exercise_id: 60201,
        option_text: 'Narração cronológica da evolução das redes sociais.',
        is_correct: false,
        explanation: 'Incorreto! Não há uma narração cronológica ou histórica sobre a evolução das redes sociais no texto.'
      },
      {
        id: 602005,
        exercise_id: 60201,
        option_text: 'Uso exclusivo de perguntas retóricas para questionar o papel das redes sociais.',
        is_correct: false,
        explanation: 'Incorreto! O texto não utiliza perguntas retóricas como estratégia argumentativa.'
      }
    ]
  },
  {
    id: 60202,
    category_id: 'interpretacao-argumentativo-3',
    question: 'Examine o trecho de dissertação argumentativa abaixo:\n\n"A produção de alimentos orgânicos, embora frequentemente criticada por seu preço elevado e menor produtividade por hectare, representa uma alternativa viável para a agricultura contemporânea. Primeiramente, o uso reduzido de agrotóxicos diminui significativamente os impactos ambientais negativos, preservando a biodiversidade e a qualidade do solo. Em segundo lugar, estudos recentes da Universidade de Washington demonstram que alimentos cultivados organicamente contêm maior concentração de nutrientes e antioxidantes, beneficiando a saúde do consumidor. Por fim, o crescimento do mercado orgânico tem estimulado pequenos produtores, contribuindo para a agricultura familiar e economias locais."\n\nComo se caracteriza a organização dos argumentos neste texto dissertativo?',
    explanation: 'A organização dos argumentos é um elemento fundamental na estruturação de textos dissertativo-argumentativos.',
    difficulty: 3,
    options: [
      {
        id: 602006,
        exercise_id: 60202,
        option_text: 'Enumeração de argumentos em sequência lógica, com uso de marcadores textuais de ordenação ("primeiramente", "em segundo lugar", "por fim").',
        is_correct: true,
        explanation: 'Correto! O texto apresenta uma estrutura clara de enumeração de argumentos, utilizando marcadores textuais explícitos ("primeiramente", "em segundo lugar", "por fim") para organizar os argumentos em uma sequência lógica.'
      },
      {
        id: 602007,
        exercise_id: 60202,
        option_text: 'Comparação direta entre agricultura orgânica e convencional, apresentando vantagens e desvantagens de forma equilibrada.',
        is_correct: false,
        explanation: 'Incorreto! Embora mencione brevemente algumas críticas à agricultura orgânica na introdução, o texto não desenvolve uma comparação equilibrada, mas foca nos aspectos positivos da produção orgânica.'
      },
      {
        id: 602008,
        exercise_id: 60202,
        option_text: 'Estrutura de problema-solução, identificando problemas da agricultura tradicional e propondo soluções orgânicas.',
        is_correct: false,
        explanation: 'Incorreto! O texto não segue uma estrutura de problema-solução; ele apresenta diretamente argumentos a favor da agricultura orgânica sem detalhar problemas específicos da agricultura tradicional.'
      },
      {
        id: 602009,
        exercise_id: 60202,
        option_text: 'Argumentação por autoridade, baseando-se exclusivamente em citações de especialistas e estudos científicos.',
        is_correct: false,
        explanation: 'Incorreto! Embora mencione um estudo da Universidade de Washington, o texto não se baseia exclusivamente em argumentos de autoridade, utilizando também argumentos lógicos sobre impactos ambientais e econômicos.'
      },
      {
        id: 602010,
        exercise_id: 60202,
        option_text: 'Construção em pirâmide invertida, iniciando pelo argumento mais importante e seguindo para os de menor relevância.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta uma hierarquia clara de importância entre os argumentos, mas sim uma sequência lógica de pontos diferentes e complementares.'
      }
    ]
  }
];

// ---------- MÓDULO 4: Cartas argumentativas e manifestos ----------
export const textoArgumentativoExercicio4: Exercise[] = [
  {
    id: 60301,
    category_id: 'interpretacao-argumentativo-4',
    question: 'Leia o trecho da carta argumentativa a seguir:\n\n"Excelentíssimo Senhor Prefeito,\n\nDirijo-me respeitosamente a Vossa Excelência para manifestar profunda preocupação com o fechamento da única biblioteca pública do bairro Esperança. Como morador e professor da rede municipal, posso atestar a importância vital deste espaço cultural para nossa comunidade. A biblioteca atende mensalmente mais de 500 estudantes que não dispõem de recursos para adquirir livros. Além disso, o acervo de 15 mil volumes, construído ao longo de três décadas, representa um patrimônio inestimável para a formação dos nossos jovens."\n\nQuais elementos característicos de uma carta argumentativa estão presentes neste trecho?',
    explanation: 'Cartas argumentativas possuem características formais específicas e desenvolvem argumentos para convencer um destinatário.',
    difficulty: 2,
    options: [
      {
        id: 603001,
        exercise_id: 60301,
        option_text: 'Vocativo formal direcionado a uma autoridade, linguagem respeitosa e apresentação de argumentos objetivos com dados concretos.',
        is_correct: true,
        explanation: 'Correto! O texto apresenta um vocativo formal ("Excelentíssimo Senhor Prefeito"), utiliza linguagem respeitosa ("Dirijo-me respeitosamente a Vossa Excelência") e apresenta argumentos objetivos com dados concretos ("atende mensalmente mais de 500 estudantes", "acervo de 15 mil volumes").'
      },
      {
        id: 603002,
        exercise_id: 60301,
        option_text: 'Linguagem informal e coloquial para estabelecer proximidade com o destinatário.',
        is_correct: false,
        explanation: 'Incorreto! A carta utiliza linguagem formal e respeitosa, adequada ao destinatário que é uma autoridade, sem expressões coloquiais.'
      },
      {
        id: 603003,
        exercise_id: 60301,
        option_text: 'Uso de ameaças veládicas e tom imperativo para pressionar a autoridade.',
        is_correct: false,
        explanation: 'Incorreto! Não há ameaças ou tom imperativo no texto, que mantém uma abordagem respeitosa e argumentativa.'
      },
      {
        id: 603004,
        exercise_id: 60301,
        option_text: 'Narração de eventos ficcionais para sensibilizar emocionalmente o destinatário.',
        is_correct: false,
        explanation: 'Incorreto! A carta apresenta fatos concretos e dados objetivos, não eventos ficcionais.'
      },
      {
        id: 603005,
        exercise_id: 60301,
        option_text: 'Divisão do texto em tópicos numerados e sublinhados para facilitar a leitura.',
        is_correct: false,
        explanation: 'Incorreto! O texto não está dividido em tópicos numerados, mas apresenta um parágrafo contínuo com argumentação fluida.'
      }
    ]
  },
  {
    id: 60302,
    category_id: 'interpretacao-argumentativo-4',
    question: 'Analise o trecho do manifesto a seguir:\n\n"Nós, artistas, educadores e defensores da cultura, unidos em um só propósito, declaramos nossa postura intransigente contra o desmonte das políticas culturais no país. Basta de cortes orçamentários! Basta de fechamento de espaços culturais! Exigimos o restabelecimento imediato dos fundos de incentivo à cultura e a reconstrução de uma política nacional que reconheça nas artes um pilar fundamental da nossa identidade e democracia. Não recuaremos um passo sequer na defesa desse direito coletivo!"\n\nQuais características discursivas típicas de um manifesto são evidentes neste trecho?',
    explanation: 'Manifestos são textos argumentativos com características particulares, geralmente com tom contundente e que representam posições coletivas.',
    difficulty: 3,
    options: [
      {
        id: 603006,
        exercise_id: 60302,
        option_text: 'Tom enfatico, uso de imperativos, linguagem mobilizadora, representação de um coletivo e reivindicações diretas.',
        is_correct: true,
        explanation: 'Correto! O texto apresenta tom enfático ("Não recuaremos um passo sequer"), uso de imperativos ("Basta!", "Exigimos"), linguagem mobilizadora, fala em nome de um coletivo ("Nós, artistas, educadores e defensores da cultura") e apresenta reivindicações diretas ("restabelecimento imediato dos fundos").'
      },
      {
        id: 603007,
        exercise_id: 60302,
        option_text: 'Linguagem técnica e neutra, analisando objetivamente a situação das políticas culturais.',
        is_correct: false,
        explanation: 'Incorreto! O texto não utiliza linguagem técnica ou neutra, mas sim enfática e emotiva, com posicionamento claro.'
      },
      {
        id: 603008,
        exercise_id: 60302,
        option_text: 'Narrativa descritiva e detalhada da história das políticas culturais no país.',
        is_correct: false,
        explanation: 'Incorreto! O manifesto não apresenta uma narrativa histórica das políticas culturais, mas uma posição atual e reivindicações imediatas.'
      },
      {
        id: 603009,
        exercise_id: 60302,
        option_text: 'Argumentação baseada exclusivamente em dados estatísticos sobre investimentos em cultura.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta dados estatísticos, baseando-se em reivindicações diretas e apelos emocionais.'
      },
      {
        id: 603010,
        exercise_id: 60302,
        option_text: 'Diálogo conciliatório propondo soluções negociadas entre artistas e governo.',
        is_correct: false,
        explanation: 'Incorreto! O manifesto não apresenta tom conciliatório ou proposta de negociação, mas postura firme de reivindicação ("postura intransigente", "não recuaremos").'
      }
    ]
  }
];

// ---------- MÓDULO 5: Resenhas críticas e ensaios ----------
export const textoArgumentativoExercicio5: Exercise[] = [
  {
    id: 60401,
    category_id: 'interpretacao-argumentativo-5',
    question: 'Leia o trecho da resenha crítica a seguir:\n\n"O filme "Parasita", de Bong Joon-ho, vencedor do Oscar de melhor filme em 2020, transcende a simples categorização de thriller social. Em sua engenhosa construção narrativa, o diretor sul-coreano entrelaça gêneros cinematográficos para criar uma potênte alusão às disparidades sociais contemporâneas. A transição da comédia para o horror reflete a brutal realidade da desigualdade econômica, enquanto a direção de arte impecavelmente contrasta dois mundos que, embora fisicamente próximos, são abissalmente distantes em oportunidades. Apesar do desfecho com algumas soluções convencionais, a obra permanece um marco no cinema mundial pela sua original abordagem metafórica da luta de classes."\n\nQuais elementos característicos de uma resenha crítica estão presentes neste trecho?',
    explanation: 'Resenhas críticas são textos argumentativos que avaliam obras artísticas ou intelectuais, combinando descrição e julgamento de valor.',
    difficulty: 3,
    options: [
      {
        id: 604001,
        exercise_id: 60401,
        option_text: 'Analise crítica que avalia aspectos da obra, contextualização, julgamento de valor e indicação de pontos fortes e fracos.',
        is_correct: true,
        explanation: 'Correto! O texto analisa aspectos da obra ("engenhosa construção narrativa", "direção de arte impecável"), contextualiza ("vencedor do Oscar"), apresenta julgamento de valor ("transcende a simples categorização") e aponta tanto qualidades quanto limitações ("desfecho com algumas soluções convencionais").'
      },
      {
        id: 604002,
        exercise_id: 60401,
        option_text: 'Resumo detalhado do enredo do filme, descrevendo todas as cenas principais.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta um resumo detalhado do enredo ou descreve cenas específicas, mas analisa aspectos estéticos e temáticos da obra.'
      },
      {
        id: 604003,
        exercise_id: 60401,
        option_text: 'Biografia completa do diretor Bong Joon-ho e histórico de seus filmes anteriores.',
        is_correct: false,
        explanation: 'Incorreto! A resenha não apresenta biografia do diretor ou histórico de seus trabalhos anteriores, apenas menciona seu nome e nacionalidade.'
      },
      {
        id: 604004,
        exercise_id: 60401,
        option_text: 'Informações técnicas sobre o filme, como orçamento, bilheteria e ficha técnica completa.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta informações técnicas sobre produção, orçamento ou bilheteria, focando nos aspectos estéticos e temáticos.'
      },
      {
        id: 604005,
        exercise_id: 60401,
        option_text: 'Entrevista com o elenco do filme comentando suas experiências durante as filmagens.',
        is_correct: false,
        explanation: 'Incorreto! A resenha não contém entrevistas com o elenco ou qualquer informação sobre as experiências de filmagem.'
      }
    ]
  },
  {
    id: 60402,
    category_id: 'interpretacao-argumentativo-5',
    question: 'Leia o trecho do ensaio a seguir:\n\n"A inteligência artificial não representa apenas uma revolução tecnológica, mas um divisor de águas filosófico que nos obriga a repensar a própria condição humana. Quando máquinas começam a replicar capacidades antes consideradas exclusivamente humanas – criatividade, intuição, compreensão de contextos sociais complexos – as fronteiras que definiam nossa especificidade como espécie se tornam nebulosas. Não é sem razão que filósofos contemporâneos como Nick Bostrom e Yuval Noah Harari têm alertado para as implicações existenciais do avanço da IA. A questão central talvez não seja se as máquinas vão nos superar, mas o que definirá o "humano" quando muitas de nossas características distintivas puderem ser algoritmicamente replicadas."\n\nQuais características de um ensaio filosófico estão presentes neste trecho?',
    explanation: 'Ensaios são textos argumentativos que desenvolvem reflexões autorais sobre temas complexos, geralmente combinando conhecimentos de diferentes áreas.',
    difficulty: 3,
    options: [
      {
        id: 604006,
        exercise_id: 60402,
        option_text: 'Reflexão aprofundada sobre questões complexas, abordagem interdisciplinar e questionamentos filosóficos fundamentais.',
        is_correct: true,
        explanation: 'Correto! O texto desenvolve uma reflexão aprofundada sobre a IA, conecta tecnologia com filosofia (abordagem interdisciplinar), cita pensadores contemporâneos e levanta questionamentos filosóficos fundamentais sobre a condição humana.'
      },
      {
        id: 604007,
        exercise_id: 60402,
        option_text: 'Apresentação objetiva e imparcial de fatos científicos sobre a inteligência artificial.',
        is_correct: false,
        explanation: 'Incorreto! O texto não se limita a apresentar fatos científicos de forma objetiva e imparcial, mas desenvolve uma reflexão subjetiva sobre implicações filosóficas da IA.'
      },
      {
        id: 604008,
        exercise_id: 60402,
        option_text: 'Manual prático com instruções para lidar com desafios éticos da inteligência artificial.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta instruções práticas ou recomendações concretas, mas desenvolve um questionamento teórico e conceitual.'
      },
      {
        id: 604009,
        exercise_id: 60402,
        option_text: 'Relato cronológico da evolução da inteligência artificial nos últimos anos.',
        is_correct: false,
        explanation: 'Incorreto! O ensaio não apresenta uma narrativa histórica ou cronológica do desenvolvimento da IA.'
      },
      {
        id: 604010,
        exercise_id: 60402,
        option_text: 'Reportagem jornalistica sobre avances tecnológicos recentes em inteligência artificial.',
        is_correct: false,
        explanation: 'Incorreto! O texto não tem características de reportagem jornalistica, como apuração de fatos, entrevistas ou notícias recentes, mas sim de uma reflexão filosófica mais ampla e atemporal.'
      }
    ]
  }
];

// Função para embaralhar um array (algoritmo de Fisher-Yates)
function shuffleArray<T>(array: T[]): T[] {
  // Cria uma cópia do array para não modificar o original
  const shuffled = [...array];
  
  // Algoritmo de embaralhamento
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

// Função para embaralhar as opções de um exercício
function randomizeExerciseOptions(exercise: Exercise): Exercise {
  // Cria uma cópia do exercício
  const randomizedExercise = { ...exercise };
  
  // Embaralha as opções
  randomizedExercise.options = shuffleArray(exercise.options);
  
  return randomizedExercise;
}

// Função para obter exercícios de interpretação textual por categoria
export async function getInterpretacaoTextualExercises(categoryId: string): Promise<Exercise[]> {
  let exercises: Exercise[] = [];
  
  // Retornar exercícios conforme a categoria solicitada
  switch(categoryId) {
    case 'interpretacao-jornalistico':
      exercises = duplicateExercises(textoJornalisticoExercicio1, 1, 10);
      break;
    case 'interpretacao-jornalistico-2':
      exercises = duplicateExercises(textoJornalisticoExercicio2, 2, 10);
      break;
    case 'interpretacao-jornalistico-3':
      exercises = duplicateExercises(textoJornalisticoExercicio3, 3, 10);
      break;
    case 'interpretacao-jornalistico-4':
      exercises = duplicateExercises(textoJornalisticoExercicio4, 4, 10);
      break;
    case 'interpretacao-jornalistico-5':
      exercises = duplicateExercises(textoJornalisticoExercicio5, 5, 10);
      break;
    case 'interpretacao-literario':
      exercises = duplicateExercises(textoLiterarioExercicio1, 10, 10);
      break;
    case 'interpretacao-literario-2':
      exercises = duplicateExercises(textoLiterarioExercicio2, 11, 10);
      break;
    case 'interpretacao-literario-3':
      exercises = duplicateExercises(textoLiterarioExercicio3, 12, 10);
      break;
    case 'interpretacao-literario-4':
      exercises = duplicateExercises(textoLiterarioExercicio4, 13, 10);
      break;
    case 'interpretacao-literario-5':
      exercises = duplicateExercises(textoLiterarioExercicio5, 14, 10);
      break;
    case 'interpretacao-argumentativo':
      exercises = duplicateExercises(textoArgumentativoExercicio1, 15, 10);
      break;
    case 'interpretacao-argumentativo-2':
      exercises = duplicateExercises(textoArgumentativoExercicio2, 16, 10);
      break;
    case 'interpretacao-argumentativo-3':
      exercises = duplicateExercises(textoArgumentativoExercicio3, 17, 10);
      break;
    case 'interpretacao-argumentativo-4':
      exercises = duplicateExercises(textoArgumentativoExercicio4, 18, 10);
      break;
    case 'interpretacao-argumentativo-5':
      exercises = duplicateExercises(textoArgumentativoExercicio5, 19, 10);
      break;
    default:
      return [];
  }
  
  // Aleatoriza as opções de cada exercício
  return exercises.map(exercise => randomizeExerciseOptions(exercise));
}

// Função auxiliar para criar variações de exercícios e garantir que cada módulo tenha o número desejado
function duplicateExercises(exercises: Exercise[], moduleNumber: number, targetCount: number): Exercise[] {
  // Se já temos exercícios suficientes, simplesmente retornar a quantidade desejada
  if (exercises.length >= targetCount) {
    return exercises.slice(0, targetCount);
  }

  console.log(`Módulo ${moduleNumber}: Precisamos criar variações. Temos ${exercises.length} exercícios originais, precisamos de ${targetCount}.`);
  
  // Copiar os exercícios originais para o resultado
  const result: Exercise[] = [...exercises];
  
  // Gerar novos IDs para os exercícios criados
  let currentId = exercises.length > 0 ? Math.max(...exercises.map(ex => ex.id)) + 1 : moduleNumber * 10000 + 1;
  let currentOptionId = exercises.length > 0 ? 
    Math.max(...exercises.flatMap(ex => ex.options.map(opt => opt.id))) + 1 : 
    moduleNumber * 100000 + 1;

  // Lista de prefixos para criar variações nas questões e evitar duplicatas exatas
  const variacoesPrefixos = [
    "Analise atentamente:",
    "Considere o seguinte trecho:",
    "Observe com atenção:",
    "Reflita sobre este texto:",
    "Avalie o conteúdo a seguir:",
    "Examine este fragmento:",
    "Leia com atenção o texto:",
    "Interprete o seguinte excerto:",
    "Estude o trecho apresentado:",
    "Pondere sobre o seguinte texto:"
  ];

  // Índice para controlar qual variação usar
  let variacaoIndex = 0;
  
  // Continuar adicionando exercícios até atingir o número desejado
  while (result.length < targetCount) {
    // Pegar um exercício existente para usar como base
    const baseExercise = exercises[result.length % exercises.length];
    
    // Extrair o conteúdo principal da questão (após qualquer instrução inicial)
    let questionContent = baseExercise.question;
    const originalPrefixes = [
      "Leia o trecho", "Analise o texto", "Observe", "Considere", "Avalie", "Examine"
    ];
    
    // Remover prefixos comuns para extrair apenas o conteúdo principal
    for (const prefix of originalPrefixes) {
      if (questionContent.includes(prefix)) {
        const index = questionContent.indexOf(prefix);
        const endIndex = questionContent.indexOf("\n\n", index);
        if (endIndex > index) {
          questionContent = questionContent.substring(endIndex + 2);
          break;
        }
      }
    }
    
    // Criar uma cópia com novos IDs e uma variação na questão
    const prefixo = variacoesPrefixos[variacaoIndex % variacoesPrefixos.length];
    variacaoIndex++;
    
    const newExercise: Exercise = {
      ...baseExercise,
      id: currentId++,
      question: `${prefixo}\n\n${questionContent}`,
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
