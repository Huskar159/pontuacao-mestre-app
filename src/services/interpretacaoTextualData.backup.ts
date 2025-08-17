import { Exercise } from './exerciseService';

// Exercícios com textos jornalísticos
export const textoJornalisticoExercicio1: Exercise[] = [
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

// Exercícios com textos técnicos e científicos
export const textoCientificoExercicio1: Exercise[] = [
  {
    id: 20001,
    category_id: 'interpretacao-cientifico',
    question: 'Leia o trecho do artigo científico:\n\n"A análise de 75 estudos realizados entre 2010 e 2023 demonstrou que há forte correlação entre o uso prolongado de telas por crianças menores de 5 anos e atrasos no desenvolvimento da linguagem. Os pesquisadores identificaram que crianças expostas a mais de 2 horas diárias de telas apresentavam um vocabulário 23% menor em comparação com o grupo controle."\n\nQual é a conclusão central apresentada neste texto científico?',
    explanation: 'Textos científicos apresentam conclusões baseadas em metodologias e evidências específicas.',
    difficulty: 2,
    options: [
      {
        id: 200001,
        exercise_id: 20001,
        option_text: 'O uso prolongado de telas está associado a atrasos no desenvolvimento da linguagem em crianças pequenas.',
        is_correct: true,
        explanation: 'Correto! O texto estabelece uma correlação entre o tempo de exposição às telas e o desenvolvimento linguístico reduzido.'
      },
      {
        id: 200002,
        exercise_id: 20001,
        option_text: 'Crianças menores de 5 anos não devem ter nenhum acesso a telas.',
        is_correct: false,
        explanation: 'Incorreto! O texto não faz essa recomendação absoluta, apenas demonstra a correlação entre uso prolongado e atrasos.'
      },
      {
        id: 200003,
        exercise_id: 20001,
        option_text: 'O grupo controle da pesquisa não teve exposição a nenhum tipo de tela.',
        is_correct: false,
        explanation: 'Incorreto! O texto não especifica que o grupo controle não teve exposição a telas, apenas que serviu como base de comparação.'
      },
      {
        id: 200004,
        exercise_id: 20001,
        option_text: 'Estudos realizados antes de 2010 chegavam a conclusões diferentes sobre o tema.',
        is_correct: false,
        explanation: 'Incorreto! O texto não faz menção a estudos anteriores a 2010 nem suas conclusões.'
      },
      {
        id: 200005,
        exercise_id: 20001,
        option_text: 'O tempo ideal de exposição às telas é de 2 horas diárias para crianças.',
        is_correct: false,
        explanation: 'Incorreto! O texto não estabelece um tempo ideal, apenas menciona que mais de 2 horas está associado a problemas de desenvolvimento.'
      }
    ]
  },
  {
    id: 20002,
    category_id: 'interpretacao-cientifico',
    question: 'Analise o texto técnico:\n\n"O efeito fotovoltaico, princípio fundamental das células solares, ocorre quando fótons provenientes da luz solar atingem materiais semicondutores, geralmente silício dopado. Esse impacto causa a liberação de elétrons, que são então capturados, gerando corrente elétrica contínua."\n\nQual é o propósito principal deste trecho?',
    explanation: 'Textos técnicos frequentemente têm como objetivo explicar processos, fenômenos ou funcionamento de sistemas específicos.',
    difficulty: 2,
    options: [
      {
        id: 200006,
        exercise_id: 20002,
        option_text: 'Explicar o princípio básico de funcionamento das células solares.',
        is_correct: true,
        explanation: 'Correto! O texto tem como propósito explicar como ocorre o efeito fotovoltaico nas células solares.'
      },
      {
        id: 200007,
        exercise_id: 20002,
        option_text: 'Comparar diferentes tipos de células solares disponíveis no mercado.',
        is_correct: false,
        explanation: 'Incorreto! O texto não menciona nem compara tipos diferentes de células solares.'
      },
      {
        id: 200008,
        exercise_id: 20002,
        option_text: 'Persuadir o leitor sobre as vantagens da energia solar frente a outras fontes.',
        is_correct: false,
        explanation: 'Incorreto! O texto não tem caráter persuasivo nem compara a energia solar com outras fontes.'
      },
      {
        id: 200009,
        exercise_id: 20002,
        option_text: 'Apresentar dados estatísticos sobre a eficiência das células solares.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta dados estatísticos nem discute a eficiência das células solares.'
      },
      {
        id: 200010,
        exercise_id: 20002,
        option_text: 'Descrever a evolução histórica da tecnologia fotovoltaica.',
        is_correct: false,
        explanation: 'Incorreto! O texto não aborda aspectos históricos do desenvolvimento da tecnologia fotovoltaica.'
      }
    ]
  }
];

// Exercícios com textos literários - Módulo 1 (Contos clássicos e contemporâneos)
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

// Exercícios com textos jornalísticos - Módulo 2
export const textoJornalisticoExercicio2: Exercise[] = [
  {
    id: 10101,
    category_id: 'interpretacao-jornalistico-2',
    question: 'Leia o trecho da entrevista a seguir:\n\n"Entrevistador: Como o senhor avalia o impacto das novas tecnologias no jornalismo atual?\nEntrevistado: O jornalismo vive uma transformação profunda. Por um lado, as redes sociais e tecnologias digitais democratizaram o acesso à informação, mas por outro, criaram um ambiente onde as notícias falsas proliferam. Os veículos tradicionais precisam reinventar seus modelos de negócio sem abrir mão da credibilidade."\n\nQual característica da entrevista jornalística está evidenciada no texto?',
    explanation: 'As entrevistas jornalísticas têm como característica apresentar a fala direta do entrevistado sobre um tema de interesse público.',
    difficulty: 2,
    options: [
      {
        id: 101001,
        exercise_id: 10101,
        option_text: 'A apresentação da opinião de um especialista sobre um tema atual e relevante.',
        is_correct: true,
        explanation: 'Correto! A entrevista traz a opinião direta de um especialista (entrevistado) sobre a transformação do jornalismo frente às novas tecnologias.'
      },
      {
        id: 101002,
        exercise_id: 10101,
        option_text: 'O uso de linguagem técnica e inacessível ao público geral.',
        is_correct: false,
        explanation: 'Incorreto! A linguagem usada pelo entrevistado é clara e acessível, não apresentando termos técnicos que dificultariam a compreensão.'
      },
      {
        id: 101003,
        exercise_id: 10101,
        option_text: 'A apresentação de múltiplos pontos de vista sobre o mesmo tema.',
        is_correct: false,
        explanation: 'Incorreto! A entrevista apresenta apenas a visão do entrevistado, não trazendo múltiplas perspectivas.'
      },
      {
        id: 101004,
        exercise_id: 10101,
        option_text: 'A narração cronológica de eventos relacionados ao tema.',
        is_correct: false,
        explanation: 'Incorreto! Não há narração cronológica de eventos, mas sim a apresentação da opinião do entrevistado sobre o tema.'
      },
      {
        id: 101005,
        exercise_id: 10101,
        option_text: 'A utilização de estatísticas e dados quantitativos para embasar as afirmações.',
        is_correct: false,
        explanation: 'Incorreto! A fala do entrevistado não apresenta estatísticas ou dados quantitativos, baseando-se em considerações qualitativas.'
      }
    ]
  },
  {
    id: 10102,
    category_id: 'interpretacao-jornalistico-2',
    question: 'Leia o seguinte trecho de um depoimento jornalístico:\n\n"Quando vi a água subindo, não pensei duas vezes. Peguei meus documentos, algumas roupas e saí correndo com minha família. Deixamos tudo para trás. Foi desesperador ver nossa casa sendo engolida pela enchente, mas graças a Deus estamos todos bem. Agora estamos no abrigo municipal e esperamos poder reconstruir nossas vidas", conta Maria Silva, moradora do bairro Ribeirão.\n\nQual é a principal característica deste texto jornalístico?',
    explanation: 'Depoimentos jornalísticos apresentam relatos pessoais de testemunhas ou pessoas diretamente afetadas por eventos noticiados.',
    difficulty: 2,
    options: [
      {
        id: 101006,
        exercise_id: 10102,
        option_text: 'O relato em primeira pessoa de alguém diretamente afetado pelo evento noticiado.',
        is_correct: true,
        explanation: 'Correto! O texto apresenta o depoimento em primeira pessoa de uma vítima da enchente, relatando sua experiência pessoal.'
      },
      {
        id: 101007,
        exercise_id: 10102,
        option_text: 'A análise técnica das causas da enchente por um especialista.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta análise técnica, mas sim um relato pessoal e emocional de uma vítima.'
      },
      {
        id: 101008,
        exercise_id: 10102,
        option_text: 'O posicionamento crítico do jornalista sobre a gestão de desastres naturais.',
        is_correct: false,
        explanation: 'Incorreto! Não há posicionamento crítico do jornalista, apenas o relato da vítima sem interpretações.'
      },
      {
        id: 101009,
        exercise_id: 10102,
        option_text: 'A descrição imparcial e distanciada dos fatos ocorridos durante a enchente.',
        is_correct: false,
        explanation: 'Incorreto! O texto não é imparcial nem distanciado, mas carregado de emoção e subjetividade da pessoa afetada.'
      },
      {
        id: 101010,
        exercise_id: 10102,
        option_text: 'A divulgação de medidas oficiais tomadas pelo governo para conter as enchentes.',
        is_correct: false,
        explanation: 'Incorreto! O texto não menciona medidas governamentais para conter enchentes, apenas relata a experiência pessoal da vítima.'
      }
    ]
  }
];

// Exercícios com textos jornalísticos - Módulo 3
export const textoJornalisticoExercicio3: Exercise[] = [
  {
    id: 10201,
    category_id: 'interpretacao-jornalistico-3',
    question: 'Analise a seguinte manchete e lead:\n\n"VACINAÇÃO CONTRA GRIPE COMEÇA HOJE PARA IDOSOS\n\nA campanha de vacinação contra a gripe terá início hoje em todo o país, priorizando pessoas acima de 60 anos. Segundo o Ministério da Saúde, a meta é imunizar 90% deste grupo até o final do mês."\n\nQual é a relação entre a manchete e o lead nesta notícia?',
    explanation: 'A manchete destaca a informação principal, enquanto o lead a complementa com detalhes essenciais.',
    difficulty: 2,
    options: [
      {
        id: 102001,
        exercise_id: 10201,
        option_text: 'O lead amplia a informação da manchete, acrescentando dados sobre a meta da campanha e seu prazo.',
        is_correct: true,
        explanation: 'Correto! O lead complementa a manchete trazendo informações adicionais como a meta de 90% de vacinação e o prazo até o final do mês.'
      },
      {
        id: 102002,
        exercise_id: 10201,
        option_text: 'O lead contradiz a manchete ao mencionar que a campanha não é exclusiva para idosos.',
        is_correct: false,
        explanation: 'Incorreto! O lead não contradiz a manchete, apenas complementa a informação, reforçando que idosos são prioritários.'
      },
      {
        id: 102003,
        exercise_id: 10201,
        option_text: 'A manchete é mais abrangente que o lead, que foca apenas nos detalhes burocráticos da campanha.',
        is_correct: false,
        explanation: 'Incorreto! O lead não se limita a aspectos burocráticos, mas traz informações essenciais que ampliam o entendimento da notícia.'
      },
      {
        id: 102004,
        exercise_id: 10201,
        option_text: 'O lead e a manchete transmitem exatamente as mesmas informações, sem acréscimos.',
        is_correct: false,
        explanation: 'Incorreto! O lead traz informações adicionais não presentes na manchete, como a meta de vacinação e o prazo.'
      },
      {
        id: 102005,
        exercise_id: 10201,
        option_text: 'A manchete apresenta a opinião do jornal, enquanto o lead traz os fatos objetivos.',
        is_correct: false,
        explanation: 'Incorreto! A manchete não expressa opinião, mas comunica o fato principal de forma objetiva, assim como o lead.'
      }
    ]
  },
  {
    id: 10202,
    category_id: 'interpretacao-jornalistico-3',
    question: 'Leia a seguinte manchete:\n\n"REAJUSTE DO COMBUSTÍVEL PODE CHEGAR A 10%, DIZ ASSOCIAÇÃO"\n\nCom base apenas nesta manchete, qual informação pode ser considerada um fato e não uma possibilidade?',
    explanation: 'A interpretação de manchetes requer a distinção entre fatos estabelecidos e possibilidades indicadas.',
    difficulty: 2,
    options: [
      {
        id: 102006,
        exercise_id: 10202,
        option_text: 'A existencia de uma declaração por parte de uma associação sobre o reajuste.',
        is_correct: true,
        explanation: 'Correto! O único fato afirmado com certeza na manchete é que uma associação fez uma declaração sobre o possível reajuste.'
      },
      {
        id: 102007,
        exercise_id: 10202,
        option_text: 'O aumento do combustível será de exatamente 10%.',
        is_correct: false,
        explanation: 'Incorreto! A manchete indica que o aumento "pode chegar a 10%", o que expressa uma possibilidade, não um fato confirmado.'
      },
      {
        id: 102008,
        exercise_id: 10202,
        option_text: 'O reajuste já foi aprovado e será implementado em breve.',
        is_correct: false,
        explanation: 'Incorreto! A manchete não afirma que o reajuste foi aprovado, apenas menciona a possibilidade dele ocorrer.'
      },
      {
        id: 102009,
        exercise_id: 10202,
        option_text: 'O preço dos combustíveis aumentará nos próximos dias.',
        is_correct: false,
        explanation: 'Incorreto! A manchete não fornece informação sobre quando o possível aumento ocorreria.'
      },
      {
        id: 102010,
        exercise_id: 10202,
        option_text: 'A associação é responsável por determinar o percentual de aumento.',
        is_correct: false,
        explanation: 'Incorreto! A manchete indica apenas que a associação fez uma declaração, não que ela tem autoridade para determinar o aumento.'
      }
    ]
  }
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
  {
    id: 10401,
    category_id: 'interpretacao-jornalistico-5',
    question: 'Leia o trecho do artigo jornalístico a seguir:\n\n"A atual política educacional do país parece ignorar as lições básicas de países que alcançaram excelência em seus sistemas educacionais. Enquanto nessas nações a valorização do professor é pilar fundamental, aqui assistimos à precarização das condições de trabalho docente e à desvalorização contínua da carreira. Não há reforma educacional que prospere sem enfrentar essa questão central."\n\nQual característica de um artigo jornalístico está mais evidente neste trecho?',
    explanation: 'Artigos jornalísticos possuem características que os distinguem de outros gêneros jornalísticos, como notícias e reportagens.',
    difficulty: 3,
    options: [
      {
        id: 104001,
        exercise_id: 10401,
        option_text: 'A apresentação de opinião e posicionamento crítico sobre um tema de interesse público.',
        is_correct: true,
        explanation: 'Correto! O trecho apresenta claramente um posicionamento crítico sobre a política educacional, caracterizando o texto como um artigo jornalístico que expressa opinião.'
      },
      {
        id: 104002,
        exercise_id: 10401,
        option_text: 'A descrição objetiva e imparcial dos fatos relacionados à educação.',
        is_correct: false,
        explanation: 'Incorreto! O texto não é objetivo nem imparcial, mas expressa claramente a opinião do autor sobre a política educacional.'
      },
      {
        id: 104003,
        exercise_id: 10401,
        option_text: 'O relato detalhado de uma investigação sobre problemas no sistema educacional.',
        is_correct: false,
        explanation: 'Incorreto! Não há indicação de investigação jornalística no texto, que se caracteriza como um artigo de opinião.'
      },
      {
        id: 104004,
        exercise_id: 10401,
        option_text: 'A entrevista com especialistas em educação de diversos países.',
        is_correct: false,
        explanation: 'Incorreto! Não há entrevista no texto; ele apresenta a visão do próprio autor sobre o tema.'
      },
      {
        id: 104005,
        exercise_id: 10401,
        option_text: 'A divulgação de dados estatísticos sobre a educação brasileira.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta dados estatísticos, mas uma análise crítica baseada na percepção do autor.'
      }
    ]
  },
  {
    id: 10402,
    category_id: 'interpretacao-jornalistico-5',
    question: 'Leia o trecho de um editorial:\n\n"Este jornal tem defendido consistentemente a necessidade de uma reforma tributária que simplifique o atual sistema e reduza a carga sobre o setor produtivo. O projeto que tramita atualmente no Congresso, embora imperfeito, representa um avanço significativo nessa direção e merece apoio. As críticas de certos setores, embora compreensíveis, não justificam o abandono de uma proposta que beneficiará o país como um todo."\n\nQual elemento característico de um editorial está presente neste trecho?',
    explanation: 'Editoriais são textos que expressam a opinião oficial do veículo de comunicação sobre temas relevantes.',
    difficulty: 3,
    options: [
      {
        id: 104006,
        exercise_id: 10402,
        option_text: 'A expressão do posicionamento institucional do veículo de comunicação sobre um tema de interesse público.',
        is_correct: true,
        explanation: 'Correto! O texto expressa claramente o posicionamento do jornal ("Este jornal tem defendido...") sobre a reforma tributária, característica fundamental de um editorial.'
      },
      {
        id: 104007,
        exercise_id: 10402,
        option_text: 'A apresentação de diferentes pontos de vista sobre a reforma tributária, sem tomar partido.',
        is_correct: false,
        explanation: 'Incorreto! O texto claramente toma partido a favor da reforma tributária, não apresentando de forma equilibrada diferentes pontos de vista.'
      },
      {
        id: 104008,
        exercise_id: 10402,
        option_text: 'O relato detalhado dos trâmites legislativos do projeto de reforma tributária.',
        is_correct: false,
        explanation: 'Incorreto! O texto não detalha os trâmites legislativos, apenas menciona que o projeto tramita no Congresso.'
      },
      {
        id: 104009,
        exercise_id: 10402,
        option_text: 'A assinatura do autor, identificando o responsável pelas opiniões expressas.',
        is_correct: false,
        explanation: 'Incorreto! Editoriais tipicamente não são assinados, já que expressam a opinião do veículo como instituição, não de um autor específico.'
      },
      {
        id: 104010,
        exercise_id: 10402,
        option_text: 'A descrição neutra dos impactos da reforma tributária na economia.',
        is_correct: false,
        explanation: 'Incorreto! O texto não é neutro, mas claramente defende a reforma tributária como benefício para o país.'
      }
    ]
  }
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

// Exercícios com textos técnicos e científicos - Módulo 3
export const textoCientificoExercicio3: Exercise[] = [
  {
    id: 20201,
    category_id: 'interpretacao-cientifico-3',
    question: 'Leia o trecho do relatório de pesquisa a seguir:\n\n"RESULTADOS E DISCUSSÃO\nOs dados coletados revelaram uma correlação significativa (p<0.01) entre o nível de atividade física e os biomarcadores inflamatórios analisados. Observou-se que os participantes do grupo A, que praticavam pelo menos 150 minutos de atividade moderada por semana, apresentaram níveis de proteína C-reativa 32% menores em comparação com os participantes do grupo B, que eram sedentários (Tabela 3). Este resultado corrobora os achados de Silva et al. (2019), que identificaram reduções similares em marcadores inflamatórios após a implementação de um programa de exercícios."\n\nQual é a característica principal deste trecho de relatório científico?',
    explanation: 'Relatórios científicos possuem características específicas em suas seções, especialmente na apresentação e discussão de resultados.',
    difficulty: 3,
    options: [
      {
        id: 202001,
        exercise_id: 20201,
        option_text: 'A apresentação objetiva de dados quantitativos seguida de interpretação e comparação com estudos anteriores.',
        is_correct: true,
        explanation: 'Correto! O texto apresenta dados objetivos (p<0.01, redução de 32%), interpreta esses dados e os compara com pesquisas anteriores (Silva et al., 2019).'
      },
      {
        id: 202002,
        exercise_id: 20201,
        option_text: 'A narração cronológica das etapas de realização da pesquisa.',
        is_correct: false,
        explanation: 'Incorreto! O texto não narra cronologicamente as etapas da pesquisa, mas apresenta e discute seus resultados.'
      },
      {
        id: 202003,
        exercise_id: 20201,
        option_text: 'A apresentação de instruções sobre como conduzir pesquisas similares.',
        is_correct: false,
        explanation: 'Incorreto! O texto não fornece instruções metodológicas, mas apresenta resultados e sua interpretação.'
      },
      {
        id: 202004,
        exercise_id: 20201,
        option_text: 'A defesa de um ponto de vista pessoal sobre os benefícios da atividade física.',
        is_correct: false,
        explanation: 'Incorreto! O texto não expressa opiniões pessoais, mas apresenta dados de pesquisa de forma imparcial e técnica.'
      },
      {
        id: 202005,
        exercise_id: 20201,
        option_text: 'A divulgação de informações de saúde para o público geral.',
        is_correct: false,
        explanation: 'Incorreto! O texto não é destinado ao público geral, mas apresenta resultados técnicos para um público especializado em um formato científico.'
      }
    ]
  },
  {
    id: 20202,
    category_id: 'interpretacao-cientifico-3',
    question: 'Analise o seguinte trecho de um estudo de caso empresarial:\n\n"Contexto: A empresa XYZ, fabricante de eletrodomésticos, enfrentava queda nas vendas de 15% ao ano e perda de market share para concorrentes importados.\n\nIntervenção: Em 2022, implementou-se uma estratégia de reposicionamento de marca focada em sustentabilidade e economia de energia, além de redesenho de produtos com novas funcionalidades.\n\nResultados: Nos 12 meses seguintes, as vendas cresceram 23%. Pesquisas com consumidores revelaram aumento de 40% na percepção positiva da marca. O NPS (Net Promoter Score) subiu de 32 para 67 pontos."\n\nQual é a principal função deste texto no contexto empresarial?',
    explanation: 'Estudos de caso empresariais são textos técnicos com objetivos e estruturas específicas.',
    difficulty: 3,
    options: [
      {
        id: 202006,
        exercise_id: 20202,
        option_text: 'Documentar um problema empresarial, a solução implementada e os resultados obtidos, servindo como referência para situações similares.',
        is_correct: true,
        explanation: 'Correto! O estudo de caso apresenta claramente um problema (queda nas vendas), a intervenção realizada (reposicionamento de marca) e os resultados obtidos (aumento nas vendas e na percepção positiva), servindo como exemplo para outras empresas.'
      },
      {
        id: 202007,
        exercise_id: 20202,
        option_text: 'Fazer propaganda dos eletrodomésticos da empresa XYZ para potenciais consumidores.',
        is_correct: false,
        explanation: 'Incorreto! O texto não é publicitário, mas técnico e analítico, voltado para o ambiente empresarial/acadêmico.'
      },
      {
        id: 202008,
        exercise_id: 20202,
        option_text: 'Fornecer instruções passo a passo sobre como conduzir um reposicionamento de marca.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta instruções detalhadas, apenas descreve o que foi feito e os resultados obtidos.'
      },
      {
        id: 202009,
        exercise_id: 20202,
        option_text: 'Narrar cronologicamente a história da empresa XYZ desde sua fundação até o presente.',
        is_correct: false,
        explanation: 'Incorreto! O texto não é uma narração histórica completa da empresa, mas foca em um período específico e em uma intervenção estratégica.'
      },
      {
        id: 202010,
        exercise_id: 20202,
        option_text: 'Oferecer entretenimento e curiosidades sobre o mercado de eletrodomésticos.',
        is_correct: false,
        explanation: 'Incorreto! O texto não tem função de entretenimento, mas de documentação técnica e profissional de uma experiência empresarial.'
      }
    ]
  }
];

// Exercícios com textos técnicos e científicos - Módulo 4
export const textoCientificoExercicio4: Exercise[] = [
  {
    id: 20301,
    category_id: 'interpretacao-cientifico-4',
    question: 'Leia o trecho do artigo de divulgação científica a seguir:\n\n"Um novo estudo publicado na revista Science revela que o planeta está esquentando mais rápido do que o previsto. Segundo os pesquisadores, que analisaram dados de temperatura dos oceanos nos últimos 50 anos, o aquecimento está ocorrendo 40% mais rápido do que as projeções anteriores indicavam. Mas o que isso significa na prática? Para entender melhor, imagine uma panela com água no fogo: quando esquenta demais, a água evapora e pode transbordar. No caso dos oceanos, o aquecimento está causando o degelo polar e a expansão térmica da água, elevando o nível do mar globalmente."\n\nQual característica típica de um texto de divulgação científica está presente no trecho?',
    explanation: 'Textos de divulgação científica apresentam características específicas que os diferenciam de artigos científicos acadêmicos.',
    difficulty: 2,
    options: [
      {
        id: 203001,
        exercise_id: 20301,
        option_text: 'O uso de analogias e linguagem acessível para explicar conceitos científicos complexos ao público leigo.',
        is_correct: true,
        explanation: 'Correto! O texto usa a analogia da "panela com água no fogo" para explicar o fenômeno do aquecimento dos oceanos de forma acessível ao público não especializado.'
      },
      {
        id: 203002,
        exercise_id: 20301,
        option_text: 'A apresentação detalhada da metodologia utilizada pelos pesquisadores.',
        is_correct: false,
        explanation: 'Incorreto! O texto não detalha a metodologia da pesquisa, apenas menciona brevemente que "pesquisadores analisaram dados de temperatura".'
      },
      {
        id: 203003,
        exercise_id: 20301,
        option_text: 'A linguagem extremamente técnica e o uso de jãrgão científico sem explicações.',
        is_correct: false,
        explanation: 'Incorreto! O texto evita linguagem técnica e jãrgão científico complexo, buscando clareza e acessibilidade.'
      },
      {
        id: 203004,
        exercise_id: 20301,
        option_text: 'A inclusão de tabelas e gráficos estatísticos detalhados.',
        is_correct: false,
        explanation: 'Incorreto! Não há tabelas ou gráficos estatísticos no texto, que se concentra na explicação narrativa dos fenômenos.'
      },
      {
        id: 203005,
        exercise_id: 20301,
        option_text: 'A citação completa das referências bibliográficas seguindo normas acadêmicas.',
        is_correct: false,
        explanation: 'Incorreto! O texto menciona apenas que o estudo foi publicado na revista Science, sem seguir as normas de citação acadêmica completa, típicas de artigos científicos.'
      }
    ]
  },
  {
    id: 20302,
    category_id: 'interpretacao-cientifico-4',
    question: 'Analise o seguinte trecho de uma matéria de divulgação científica sobre inteligência artificial:\n\n"Os algoritmos de inteligência artificial estão cada vez mais presentes em nosso dia a dia, desde os feeds das redes sociais até os diagnósticos médicos. Mas você sabe como eles funcionam? Em termos simples, esses sistemas aprendem reconhecendo padrões em grandes conjuntos de dados. É como se o computador aprendesse por exemplos, assim como uma criança que aprende a identificar cachorros depois de ver várias fotos de diferentes raças. A diferença é que os algoritmos de IA podem analisar milhões de exemplos em segundos, identificando padrões que passariam despercebidos aos olhos humanos."\n\nQual é o principal objetivo deste texto?',
    explanation: 'Textos de divulgação científica têm objetivos específicos relacionados à forma como abordam temas científicos.',
    difficulty: 2,
    options: [
      {
        id: 203006,
        exercise_id: 20302,
        option_text: 'Explicar um conceito científico-tecnológico complexo para um público não especializado.',
        is_correct: true,
        explanation: 'Correto! O texto busca tornar compreensível o funcionamento de algoritmos de IA para leitores sem conhecimento técnico, usando linguagem acessível e analogias simples.'
      },
      {
        id: 203007,
        exercise_id: 20302,
        option_text: 'Discutir detalhadamente a implementação técnica de algoritmos de aprendizado de máquina.',
        is_correct: false,
        explanation: 'Incorreto! O texto não fornece detalhes técnicos de implementação, mas uma visão geral simplificada do conceito.'
      },
      {
        id: 203008,
        exercise_id: 20302,
        option_text: 'Criticar o uso excessivo de inteligência artificial em diversos setores da sociedade.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta críticas ao uso da IA, apenas explica como ela funciona de forma objetiva.'
      },
      {
        id: 203009,
        exercise_id: 20302,
        option_text: 'Apresentar os resultados de uma pesquisa específica sobre algoritmos de inteligência artificial.',
        is_correct: false,
        explanation: 'Incorreto! O texto não relata uma pesquisa específica com seus resultados, mas explica o conceito geral de algoritmos de IA.'
      },
      {
        id: 203010,
        exercise_id: 20302,
        option_text: 'Fornecer um tutorial passo a passo para desenvolvedores criarem sistemas de IA.',
        is_correct: false,
        explanation: 'Incorreto! O texto não é um tutorial técnico para desenvolvedores, mas uma explicação conceitual para um público amplo.'
      }
    ]
  }
];

// Exercícios com textos técnicos e científicos - Módulo 5
export const textoCientificoExercicio5: Exercise[] = [
  {
    id: 20401,
    category_id: 'interpretacao-cientifico-5',
    question: 'Leia o trecho da bula de medicamento a seguir:\n\n"INDICAÇÕES\nEste medicamento é indicado para tratamento de infecções bacterianas causadas por germes sensíveis à ação da amoxicilina.\n\nCONTRAINDICAÇÕES\nEste medicamento não deve ser administrado a pacientes com história de hipersensibilidade a penicilinas, cefalosporinas ou a qualquer componente da fórmula.\n\nADVERTÊNCIAS E PRECAUÇÕES\nO tratamento com antibióticos altera a flora bacteriana normal do cólon, permitindo o crescimento excessivo de microorganismos não suscetíveis. Informe ao seu médico sobre quaisquer medicamentos que esteja usando, antes do início ou durante o tratamento."\n\nQual é a principal finalidade deste tipo de texto?',
    explanation: 'Bulas de medicamentos têm funções e formatos específicos determinados por regulamentações.',
    difficulty: 2,
    options: [
      {
        id: 204001,
        exercise_id: 20401,
        option_text: 'Informar o paciente e profissionais de saúde sobre as características do medicamento, indicando seu uso adequado e possíveis riscos.',
        is_correct: true,
        explanation: 'Correto! A bula tem como função principal fornecer informações técnicas essenciais sobre o medicamento, como indicações, contraindicações e advertências para uso seguro.'
      },
      {
        id: 204002,
        exercise_id: 20401,
        option_text: 'Fazer propaganda das qualidades do medicamento para aumentar suas vendas.',
        is_correct: false,
        explanation: 'Incorreto! A bula não tem função publicitária, mas informativa e regulatória, com foco na segurança e uso adequado do medicamento.'
      },
      {
        id: 204003,
        exercise_id: 20401,
        option_text: 'Ensinar aos estudantes de medicina sobre patógenos e antibióticos.',
        is_correct: false,
        explanation: 'Incorreto! Embora a bula contenha informações técnicas, seu objetivo principal não é educacional para estudantes, mas informativo para pacientes e profissionais que utilizarão o medicamento.'
      },
      {
        id: 204004,
        exercise_id: 20401,
        option_text: 'Narrar a descoberta e desenvolvimento da amoxicilina ao longo da história.',
        is_correct: false,
        explanation: 'Incorreto! Bulas não contêm narrativas históricas sobre o desenvolvimento do medicamento, mas informações práticas para seu uso seguro.'
      },
      {
        id: 204005,
        exercise_id: 20401,
        option_text: 'Comparar a eficácia da amoxicilina com outros antibióticos disponíveis no mercado.',
        is_correct: false,
        explanation: 'Incorreto! Bulas geralmente não comparam medicamentos entre si, mas focam nas informações específicas sobre o próprio medicamento.'
      }
    ]
  },
  {
    id: 20402,
    category_id: 'interpretacao-cientifico-5',
    question: 'Analise o seguinte trecho de instruções técnicas de segurança:\n\n"PROCEDIMENTOS DE SEGURANÇA PARA PRODUTOS QUÍMICOS\n\n1. ARMAZENAMENTO\n- Mantenha produtos químicos em área ventilada, longe de fontes de calor.\n- Produtos incompatíveis devem ser armazenados separadamente (consulte a tabela de compatibilidade).\n- Todo recipiente deve estar claramente identificado com símbolos de risco.\n\n2. MANIPULAÇÃO\n- Utilize sempre equipamentos de proteção individual (EPI): luvas, óculos e máscara de proteção respiratória.\n- Em caso de derramamento, isole a área e siga o procedimento de contenção conforme a FISPQ do produto."\n\nQual é a característica predominante neste texto?',
    explanation: 'Textos de instruções técnicas de segurança têm características de linguagem e estrutura específicas.',
    difficulty: 2,
    options: [
      {
        id: 204006,
        exercise_id: 20402,
        option_text: 'O uso de linguagem direta e imperativa, com orientações objetivas para garantir a segurança durante o manuseio de produtos perigosos.',
        is_correct: true,
        explanation: 'Correto! O texto utiliza linguagem imperativa ("Mantenha", "Utilize") e apresenta instruções diretas e objetivas para garantir a segurança na manipulação de produtos químicos.'
      },
      {
        id: 204007,
        exercise_id: 20402,
        option_text: 'O uso de linguagem técnica complexa, inacessível para leigos na área química.',
        is_correct: false,
        explanation: 'Incorreto! Embora utilize alguns termos técnicos, a linguagem é relativamente acessível e direta, com instruções claras que podem ser compreendidas mesmo por pessoas com conhecimento básico.'
      },
      {
        id: 204008,
        exercise_id: 20402,
        option_text: 'A apresentação detalhada das propriedades químicas de cada produto.',
        is_correct: false,
        explanation: 'Incorreto! O texto não descreve propriedades químicas específicas, mas foca em procedimentos de segurança aplicáveis a produtos químicos em geral.'
      },
      {
        id: 204009,
        exercise_id: 20402,
        option_text: 'A narração de acidentes ocorridos com produtos químicos para alertar sobre os riscos.',
        is_correct: false,
        explanation: 'Incorreto! O texto não narra acidentes ou casos reais, mas apresenta procedimentos preventivos para evitar acidentes.'
      },
      {
        id: 204010,
        exercise_id: 20402,
        option_text: 'A argumentação sobre a importância do uso de produtos químicos na indústria moderna.',
        is_correct: false,
        explanation: 'Incorreto! O texto não apresenta argumentação sobre a importância dos produtos químicos, mas instruções objetivas de segurança para seu manuseio.'
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

// ==== TEXTOS ARGUMENTATIVOS (5 módulos) ====
// Exercícios com textos argumentativos - Módulo 1 (Artigos de opinião)
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

// Exercícios com textos argumentativos - Módulo 2 (Editoriais)
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

// Exercícios com textos argumentativos - Módulo 3 (Dissertações argumentativas)
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

// Exercícios com textos argumentativos - Módulo 4 (Cartas argumentativas e manifestos)
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

// Exercícios com textos argumentativos - Módulo 5 (Resenhas críticas e ensaios)
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

// Função para obter exercícios de interpretação textual por categoria
export async function getInterpretacaoTextualExercises(categoryId: string): Promise<Exercise[]> {
  // Retornar exercícios conforme a categoria solicitada
  switch(categoryId) {
    case 'interpretacao-jornalistico':
      return duplicateExercises(textoJornalisticoExercicio1, 1, 10);
    case 'interpretacao-jornalistico-2':
      return duplicateExercises(textoJornalisticoExercicio2, 2, 10);
    case 'interpretacao-jornalistico-3':
      return duplicateExercises(textoJornalisticoExercicio3, 3, 10);
    case 'interpretacao-jornalistico-4':
      return duplicateExercises(textoJornalisticoExercicio4, 4, 10);
    case 'interpretacao-jornalistico-5':
      return duplicateExercises(textoJornalisticoExercicio5, 5, 10);
    case 'interpretacao-cientifico':
      return duplicateExercises(textoCientificoExercicio1, 3, 10);
    case 'interpretacao-cientifico-2':
      return duplicateExercises(textoCientificoExercicio2, 6, 10);
    case 'interpretacao-cientifico-3':
      return duplicateExercises(textoCientificoExercicio3, 7, 10);
    case 'interpretacao-cientifico-4':
      return duplicateExercises(textoCientificoExercicio4, 8, 10);
    case 'interpretacao-cientifico-5':
      return duplicateExercises(textoCientificoExercicio5, 9, 10);
    case 'interpretacao-literario':
      return duplicateExercises(textoLiterarioExercicio1, 10, 10);
    case 'interpretacao-literario-2':
      return duplicateExercises(textoLiterarioExercicio2, 11, 10);
    case 'interpretacao-literario-3':
      return duplicateExercises(textoLiterarioExercicio3, 12, 10);
    case 'interpretacao-literario-4':
      return duplicateExercises(textoLiterarioExercicio4, 13, 10);
    case 'interpretacao-literario-5':
      return duplicateExercises(textoLiterarioExercicio5, 14, 10);
    case 'interpretacao-argumentativo':
      return duplicateExercises(textoArgumentativoExercicio1, 15, 10);
    case 'interpretacao-argumentativo-2':
      return duplicateExercises(textoArgumentativoExercicio2, 16, 10);
    case 'interpretacao-argumentativo-3':
      return duplicateExercises(textoArgumentativoExercicio3, 17, 10);
    case 'interpretacao-argumentativo-4':
      return duplicateExercises(textoArgumentativoExercicio4, 18, 10);
    case 'interpretacao-argumentativo-5':
      return duplicateExercises(textoArgumentativoExercicio5, 19, 10);
    default:
      return [];
  }
}

// Função auxiliar para duplicar exercícios e garantir que cada módulo tenha o número desejado de exercícios
function duplicateExercises(exercises: Exercise[], moduleNumber: number, targetCount: number): Exercise[] {
  if (exercises.length >= targetCount) {
    return exercises.slice(0, targetCount);
  }

  const result: Exercise[] = [...exercises];
  let currentId = exercises.length > 0 ? Math.max(...exercises.map(ex => ex.id)) + 1 : moduleNumber * 10000 + 1;
  let currentOptionId = exercises.length > 0 ? 
    Math.max(...exercises.flatMap(ex => ex.options.map(opt => opt.id))) + 1 : 
    moduleNumber * 100000 + 1;

  // Continuar adicionando exercícios até atingir o número desejado
  while (result.length < targetCount) {
    // Pegar um exercício existente para usar como base
    const baseExercise = exercises[result.length % exercises.length];
    
    // Criar uma cópia com novos IDs
    const newExercise: Exercise = {
      ...baseExercise,
      id: currentId++,
      question: `${baseExercise.question} (Variação ${result.length + 1})`,
      options: baseExercise.options.map(option => ({
        ...option,
        id: currentOptionId++,
        exercise_id: currentId - 1,
        option_text: `${option.option_text} (Variação ${result.length + 1})`
      }))
    };
    
    result.push(newExercise);
  }

  return result;
}
