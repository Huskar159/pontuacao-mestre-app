import { Exercise } from './exerciseService';

// Módulo 3: Interpretação de manchetes e leads de notícias

export const jornalisticoModulo3Exercicio1: Exercise = {
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
};

export const jornalisticoModulo3Exercicio2: Exercise = {
  id: 10202,
  category_id: 'interpretacao-jornalistico-3',
  question: 'Leia a seguinte manchete:\n\n"REAJUSTE DO COMBUSTÍVEL PODE CHEGAR A 10%, DIZ ASSOCIAÇÃO"\n\nCom base apenas nesta manchete, qual informação pode ser considerada um fato e não uma possibilidade?',
  explanation: 'A interpretação de manchetes requer a distinção entre fatos estabelecidos e possibilidades indicadas.',
  difficulty: 2,
  options: [
    {
      id: 102006,
      exercise_id: 10202,
      option_text: 'A existência de uma declaração por parte de uma associação sobre o reajuste.',
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
};

export const jornalisticoModulo3Exercicio3: Exercise = {
  id: 10203,
  category_id: 'interpretacao-jornalistico-3',
  question: 'Leia a seguinte manchete e lead:\n\n"NOVO ESTUDO REVELA BENEFÍCIOS DO CHOCOLATE AMARGO PARA O CORAÇÃO\n\nPesquisadores da Universidade Federal descobriram que o consumo diário de 30g de chocolate com pelo menos 70% de cacau pode reduzir em até 15% o risco de doenças cardiovasculares. O estudo acompanhou 2.500 voluntários durante cinco anos."\n\nQual é a função principal do lead nesta notícia?',
  explanation: 'O lead tem funções específicas na estrutura da notícia, complementando a manchete.',
  difficulty: 1,
  options: [
    {
      id: 102011,
      exercise_id: 10203,
      option_text: 'Detalhar a pesquisa mencionada na manchete, especificando a quantidade de chocolate, o percentual de cacau, o número de participantes e a duração do estudo.',
      is_correct: true,
      explanation: 'Correto! O lead fornece detalhes específicos sobre a pesquisa que não estavam na manchete, como quantidade recomendada, percentual de cacau, número de participantes e duração do estudo.'
    },
    {
      id: 102012,
      exercise_id: 10203,
      option_text: 'Contradizer a manchete, mostrando que o chocolate não é tão benéfico quanto sugerido inicialmente.',
      is_correct: false,
      explanation: 'Incorreto! O lead não contradiz a manchete, mas reforça e detalha os benefícios mencionados.'
    },
    {
      id: 102013,
      exercise_id: 10203,
      option_text: 'Apresentar a opinião do jornal sobre o consumo de chocolate e seus benefícios para a saúde.',
      is_correct: false,
      explanation: 'Incorreto! O lead não apresenta opinião, mas fatos objetivos sobre a pesquisa realizada.'
    },
    {
      id: 102014,
      exercise_id: 10203,
      option_text: 'Alertar sobre os riscos do consumo excessivo de chocolate, mesmo o amargo.',
      is_correct: false,
      explanation: 'Incorreto! O lead não menciona riscos do consumo excessivo, apenas os benefícios do consumo moderado.'
    },
    {
      id: 102015,
      exercise_id: 10203,
      option_text: 'Promover a Universidade Federal como instituição de pesquisa de excelência.',
      is_correct: false,
      explanation: 'Incorreto! Embora mencione a universidade, o foco do lead é a pesquisa e seus resultados, não a promoção da instituição.'
    }
  ]
};

export const jornalisticoModulo3Exercicio4: Exercise = {
  id: 10204,
  category_id: 'interpretacao-jornalistico-3',
  question: 'Analise a seguinte manchete:\n\n"DESEMPREGO CAI PELO TERCEIRO MÊS CONSECUTIVO, APONTA IBGE"\n\nQual elemento jornalístico está presente nesta manchete que aumenta sua credibilidade?',
  explanation: 'Manchetes jornalísticas utilizam diferentes elementos para transmitir credibilidade às informações.',
  difficulty: 2,
  options: [
    {
      id: 102016,
      exercise_id: 10204,
      option_text: 'A citação de uma fonte oficial e reconhecida (IBGE) como origem da informação.',
      is_correct: true,
      explanation: 'Correto! A menção ao IBGE, um órgão oficial de estatísticas, confere credibilidade à informação sobre a queda do desemprego.'
    },
    {
      id: 102017,
      exercise_id: 10204,
      option_text: 'O uso de letras maiúsculas para destacar a importância da notícia.',
      is_correct: false,
      explanation: 'Incorreto! O uso de letras maiúsculas é apenas um recurso visual comum em manchetes, não um elemento que confere credibilidade.'
    },
    {
      id: 102018,
      exercise_id: 10204,
      option_text: 'A ausência de dados percentuais específicos sobre a queda do desemprego.',
      is_correct: false,
      explanation: 'Incorreto! A ausência de dados específicos não aumenta a credibilidade; pelo contrário, dados precisos tenderiam a reforçá-la.'
    },
    {
      id: 102019,
      exercise_id: 10204,
      option_text: 'O tom otimista usado para descrever a situação econômica do país.',
      is_correct: false,
      explanation: 'Incorreto! A manchete não apresenta tom otimista, apenas relata um fato de forma objetiva.'
    },
    {
      id: 102020,
      exercise_id: 10204,
      option_text: 'A brevidade da manchete, que facilita a memorização pelo leitor.',
      is_correct: false,
      explanation: 'Incorreto! A brevidade é uma característica comum das manchetes, mas não está relacionada à credibilidade da informação.'
    }
  ]
};

export const jornalisticoModulo3Exercicio5: Exercise = {
  id: 10205,
  category_id: 'interpretacao-jornalistico-3',
  question: 'Leia a seguinte manchete e lead:\n\n"APÓS TEMPORAL, CIDADE DECRETA ESTADO DE CALAMIDADE\n\nA prefeitura de Porto Feliz decretou estado de calamidade pública após o temporal que atingiu a cidade na noite de ontem. Segundo a Defesa Civil, mais de 200 famílias estão desalojadas e 15 bairros seguem sem energia elétrica. Não há registro de vítimas fatais."\n\nQual informação presente no lead não está explícita ou implícita na manchete?',
  explanation: 'O lead frequentemente traz informações adicionais que não estão presentes na manchete.',
  difficulty: 2,
  options: [
    {
      id: 102021,
      exercise_id: 10205,
      option_text: 'A ausência de vítimas fatais no temporal.',
      is_correct: true,
      explanation: 'Correto! A manchete não menciona nada sobre vítimas, sendo esta uma informação nova e relevante trazida apenas no lead.'
    },
    {
      id: 102022,
      exercise_id: 10205,
      option_text: 'A ocorrência de um temporal na cidade.',
      is_correct: false,
      explanation: 'Incorreto! A manchete já menciona explicitamente o temporal ("APÓS TEMPORAL").'
    },
    {
      id: 102023,
      exercise_id: 10205,
      option_text: 'A decretação de estado de calamidade.',
      is_correct: false,
      explanation: 'Incorreto! A manchete já informa que a cidade decretou estado de calamidade.'
    },
    {
      id: 102024,
      exercise_id: 10205,
      option_text: 'O envolvimento da prefeitura na tomada de decisão.',
      is_correct: false,
      explanation: 'Incorreto! Embora a manchete não mencione explicitamente a prefeitura, está implícito que é a administração municipal que decreta estado de calamidade.'
    },
    {
      id: 102025,
      exercise_id: 10205,
      option_text: 'O momento em que ocorreu o temporal.',
      is_correct: false,
      explanation: 'Incorreto! Embora a manchete não especifique quando ocorreu o temporal, não é uma informação tão relevante quanto a ausência de vítimas fatais.'
    }
  ]
};

export const jornalisticoModulo3Exercicio6: Exercise = {
  id: 10206,
  category_id: 'interpretacao-jornalistico-3',
  question: 'Observe a seguinte manchete:\n\n"INFLAÇÃO RECUA PELA PRIMEIRA VEZ NO ANO, MAS ALIMENTOS SEGUEM EM ALTA"\n\nQual recurso linguístico é utilizado nesta manchete para apresentar duas informações contrastantes?',
  explanation: 'Manchetes frequentemente utilizam recursos linguísticos específicos para transmitir informações de forma concisa e impactante.',
  difficulty: 1,
  options: [
    {
      id: 102026,
      exercise_id: 10206,
      option_text: 'O uso da conjunção adversativa "mas", que estabelece uma relação de oposição entre as duas informações.',
      is_correct: true,
      explanation: 'Correto! A conjunção "mas" estabelece uma relação de oposição entre a queda da inflação geral e a alta contínua dos preços dos alimentos.'
    },
    {
      id: 102027,
      exercise_id: 10206,
      option_text: 'O uso de verbos no presente do indicativo ("recua" e "seguem"), que indicam ações simultâneas.',
      is_correct: false,
      explanation: 'Incorreto! Embora os verbos estejam no presente, isso não estabelece o contraste; é a conjunção "mas" que cumpre essa função.'
    },
    {
      id: 102028,
      exercise_id: 10206,
      option_text: 'A utilização de termos técnicos econômicos para conferir precisão à informação.',
      is_correct: false,
      explanation: 'Incorreto! Não há termos técnicos específicos que estabeleçam contraste; "inflação" e "alimentos" são termos comuns.'
    },
    {
      id: 102029,
      exercise_id: 10206,
      option_text: 'O emprego de vírgula para separar informações de natureza diferente.',
      is_correct: false,
      explanation: 'Incorreto! A vírgula sozinha não estabelece contraste; ela apenas separa as orações que são conectadas pela conjunção "mas".'
    },
    {
      id: 102030,
      exercise_id: 10206,
      option_text: 'A estrutura em tópicos, que apresenta primeiro a notícia positiva e depois a negativa.',
      is_correct: false,
      explanation: 'Incorreto! A manchete não está estruturada em tópicos, mas em uma única frase com duas informações contrastantes.'
    }
  ]
};

export const jornalisticoModulo3Exercicio7: Exercise = {
  id: 10207,
  category_id: 'interpretacao-jornalistico-3',
  question: 'Leia a seguinte manchete e lead:\n\n"BRASIL CONQUISTA MEDALHA DE OURO INÉDITA NO VÔLEI DE PRAIA\n\nA dupla brasileira formada por Ana e Carolina venceu ontem a final olímpica contra as americanas por 2 sets a 0, com parciais de 21-18 e 21-16. Esta é a primeira medalha de ouro do Brasil na modalidade feminina de vôlei de praia em Jogos Olímpicos."\n\nQual informação do lead esclarece o significado do termo "inédita" usado na manchete?',
  explanation: 'O lead frequentemente esclarece ou detalha termos usados na manchete.',
  difficulty: 2,
  options: [
    {
      id: 102031,
      exercise_id: 10207,
      option_text: '"Esta é a primeira medalha de ouro do Brasil na modalidade feminina de vôlei de praia em Jogos Olímpicos."',
      is_correct: true,
      explanation: 'Correto! Esta frase explica que a medalha é "inédita" porque é a primeira vez que o Brasil conquista o ouro no vôlei de praia feminino olímpico.'
    },
    {
      id: 102032,
      exercise_id: 10207,
      option_text: '"A dupla brasileira formada por Ana e Carolina venceu ontem a final olímpica."',
      is_correct: false,
      explanation: 'Incorreto! Esta informação apenas identifica as atletas, não explica por que a medalha é inédita.'
    },
    {
      id: 102033,
      exercise_id: 10207,
      option_text: '"...venceu ontem a final olímpica contra as americanas por 2 sets a 0."',
      is_correct: false,
      explanation: 'Incorreto! Esta informação detalha o placar da partida, não explica o caráter inédito da conquista.'
    },
    {
      id: 102034,
      exercise_id: 10207,
      option_text: '"...com parciais de 21-18 e 21-16."',
      is_correct: false,
      explanation: 'Incorreto! As parciais dos sets são detalhes do jogo, não explicam por que a medalha é inédita.'
    },
    {
      id: 102035,
      exercise_id: 10207,
      option_text: 'Nenhuma informação do lead esclarece o termo "inédita".',
      is_correct: false,
      explanation: 'Incorreto! O lead claramente explica que é a primeira medalha de ouro do Brasil na modalidade feminina, o que esclarece o termo "inédita".'
    }
  ]
};

export const jornalisticoModulo3Exercicio8: Exercise = {
  id: 10208,
  category_id: 'interpretacao-jornalistico-3',
  question: 'Analise a seguinte manchete:\n\n"CIENTISTAS DESCOBREM NOVO MÉTODO PARA DETECTAR CÂNCER PRECOCEMENTE, AFIRMA REVISTA"\n\nQual aspecto desta manchete indica que o jornal está se baseando em informação de terceiros?',
  explanation: 'Manchetes jornalísticas frequentemente indicam a fonte da informação para atribuir responsabilidade e credibilidade.',
  difficulty: 1,
  options: [
    {
      id: 102036,
      exercise_id: 10208,
      option_text: 'A expressão "afirma revista" ao final da manchete, que atribui a informação a outra publicação.',
      is_correct: true,
      explanation: 'Correto! A expressão "afirma revista" indica que o jornal está reproduzindo uma informação publicada por outra fonte, não sendo responsável direto pela apuração.'
    },
    {
      id: 102037,
      exercise_id: 10208,
      option_text: 'O uso do termo "cientistas", que generaliza os responsáveis pela descoberta.',
      is_correct: false,
      explanation: 'Incorreto! Embora "cientistas" seja um termo genérico, ele se refere aos autores da descoberta, não à fonte da informação para o jornal.'
    },
    {
      id: 102038,
      exercise_id: 10208,
      option_text: 'A menção ao câncer, um tema que requer conhecimento especializado.',
      is_correct: false,
      explanation: 'Incorreto! A menção ao câncer não indica por si só que a informação vem de terceiros, apenas define o tema da notícia.'
    },
    {
      id: 102039,
      exercise_id: 10208,
      option_text: 'O uso do verbo "descobrem" no presente, indicando que a informação é recente.',
      is_correct: false,
      explanation: 'Incorreto! O tempo verbal não indica a fonte da informação, apenas sua temporalidade.'
    },
    {
      id: 102040,
      exercise_id: 10208,
      option_text: 'A palavra "novo", que sugere comparação com métodos anteriores.',
      is_correct: false,
      explanation: 'Incorreto! O adjetivo "novo" qualifica o método, não indica a fonte da informação.'
    }
  ]
};

export const jornalisticoModulo3Exercicio9: Exercise = {
  id: 10209,
  category_id: 'interpretacao-jornalistico-3',
  question: 'Leia a seguinte manchete e lead:\n\n"GOVERNO ANUNCIA PACOTE DE MEDIDAS PARA PEQUENAS EMPRESAS\n\nO Ministério da Economia divulgou ontem um conjunto de medidas para estimular pequenos negócios. Entre as principais ações estão a redução de impostos para microempreendedores, a simplificação do processo de abertura de empresas e uma linha de crédito com juros reduzidos. Segundo o ministro, a expectativa é gerar 500 mil novos empregos em 12 meses."\n\nQual é a principal função do lead neste texto jornalístico?',
  explanation: 'O lead tem funções específicas na estrutura da notícia, complementando a manchete com informações essenciais.',
  difficulty: 2,
  options: [
    {
      id: 102041,
      exercise_id: 10209,
      option_text: 'Especificar quais são as medidas anunciadas e apresentar a estimativa de impacto econômico.',
      is_correct: true,
      explanation: 'Correto! O lead detalha as três principais medidas do pacote (redução de impostos, simplificação burocrática e linha de crédito) e informa a expectativa de geração de empregos.'
    },
    {
      id: 102042,
      exercise_id: 10209,
      option_text: 'Criticar a eficácia das medidas anunciadas pelo governo.',
      is_correct: false,
      explanation: 'Incorreto! O lead não apresenta críticas às medidas, apenas as descreve objetivamente.'
    },
    {
      id: 102043,
      exercise_id: 10209,
      option_text: 'Comparar o novo pacote com medidas anteriores tomadas pelo governo.',
      is_correct: false,
      explanation: 'Incorreto! O lead não faz comparação com medidas anteriores.'
    },
    {
      id: 102044,
      exercise_id: 10209,
      option_text: 'Explicar as razões políticas que levaram o governo a anunciar o pacote.',
      is_correct: false,
      explanation: 'Incorreto! O lead não aborda as motivações políticas por trás do anúncio.'
    },
    {
      id: 102045,
      exercise_id: 10209,
      option_text: 'Apresentar opiniões de especialistas sobre a viabilidade das medidas.',
      is_correct: false,
      explanation: 'Incorreto! O lead não traz opiniões de especialistas, apenas a expectativa oficial do ministro.'
    }
  ]
};

export const jornalisticoModulo3Exercicio10: Exercise = {
  id: 10210,
  category_id: 'interpretacao-jornalistico-3',
  question: 'Observe a seguinte manchete:\n\n"PESQUISA APONTA: 70% DOS JOVENS PREFEREM TRABALHO REMOTO"\n\nQual elemento desta manchete confere maior objetividade e precisão à informação?',
  explanation: 'Manchetes jornalísticas podem utilizar diferentes recursos para conferir objetividade e precisão às informações.',
  difficulty: 1,
  options: [
    {
      id: 102046,
      exercise_id: 10210,
      option_text: 'A apresentação do dado estatístico específico (70%).',
      is_correct: true,
      explanation: 'Correto! O percentual exato (70%) confere precisão à informação, tornando-a mais objetiva e mensurável.'
    },
    {
      id: 102047,
      exercise_id: 10210,
      option_text: 'O uso do termo genérico "jovens" sem especificar a faixa etária.',
      is_correct: false,
      explanation: 'Incorreto! A falta de especificação da faixa etária dos "jovens" reduz a precisão da informação, não a aumenta.'
    },
    {
      id: 102048,
      exercise_id: 10210,
      option_text: 'A utilização do verbo "preferem" que indica uma opinião subjetiva.',
      is_correct: false,
      explanation: 'Incorreto! Embora "preferem" indique uma escolha, o dado estatístico torna essa preferência mensurável e objetiva.'
    },
    {
      id: 102049,
      exercise_id: 10210,
      option_text: 'O uso dos dois pontos após "PESQUISA APONTA".',
      is_correct: false,
      explanation: 'Incorreto! Os dois pontos são apenas um recurso de pontuação para introduzir o resultado da pesquisa, não conferem objetividade por si só.'
    },
    {
      id: 102050,
      exercise_id: 10210,
      option_text: 'A ausência de menção à instituição que realizou a pesquisa.',
      is_correct: false,
      explanation: 'Incorreto! A falta de identificação da fonte da pesquisa na verdade reduz a credibilidade e precisão da informação.'
    }
  ]
};
