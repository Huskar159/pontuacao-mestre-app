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

// Exercícios com textos literários
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

// Exercícios com textos argumentativos
export const textoArgumentativoExercicio1: Exercise[] = [
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

// Função para obter exercícios de interpretação textual por categoria
export async function getInterpretacaoTextualExercises(categoryId: string): Promise<Exercise[]> {
  // Retornar exercícios conforme a categoria solicitada
  switch(categoryId) {
    case 'interpretacao-jornalistico':
      return duplicateExercises(textoJornalisticoExercicio1, 1, 50);
    case 'interpretacao-cientifico':
      return duplicateExercises(textoCientificoExercicio1, 2, 50);
    case 'interpretacao-literario':
      return duplicateExercises(textoLiterarioExercicio1, 3, 50);
    case 'interpretacao-argumentativo':
      return duplicateExercises(textoArgumentativoExercicio1, 4, 50);
    case 'interpretacao-multimodal':
      return duplicateExercises(textoMultimodalExercicio1, 5, 50);
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
