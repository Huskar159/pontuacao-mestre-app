import { Exercise } from './exerciseService';

// Exercícios do módulo Vírgula 1
export const virgulaExercicio1: Exercise[] = [
  {
    id: 1001,
    category_id: 'virgula',
    question: 'Em qual das alternativas a vírgula está sendo usada corretamente para separar itens em uma enumeração?',
    explanation: 'A vírgula é usada para separar itens em uma enumeração.',
    difficulty: 1,
    options: [
      {
        id: 10001,
        exercise_id: 1001,
        option_text: 'Comprei pão, leite, manteiga e queijo no mercado.',
        is_correct: true,
        explanation: 'Correto! A vírgula está separando itens em uma enumeração, com o último item precedido pela conjunção "e".'
      },
      {
        id: 10002,
        exercise_id: 1001,
        option_text: 'Comprei, pão leite manteiga e queijo no mercado.',
        is_correct: false,
        explanation: 'Incorreto! A vírgula não deve separar o verbo do seu complemento.'
      },
      {
        id: 10003,
        exercise_id: 1001,
        option_text: 'Comprei pão, leite, manteiga, e queijo no mercado.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa vírgula antes da conjunção "e" que precede o último item da enumeração (a menos que seja uma oração).'
      },
      {
        id: 10004,
        exercise_id: 1001,
        option_text: 'Comprei pão leite, manteiga queijo, no mercado.',
        is_correct: false,
        explanation: 'Incorreto! Faltam vírgulas entre alguns itens da enumeração e há uma vírgula indevida após o último item.'
      },
      {
        id: 10005,
        exercise_id: 1001,
        option_text: 'Comprei, pão, leite, manteiga, queijo, no, mercado.',
        is_correct: false,
        explanation: 'Incorreto! Há vírgulas em excesso, separando elementos que não deveriam ser separados.'
      }
    ]
  },
  {
    id: 1002,
    category_id: 'virgula',
    question: 'Qual alternativa apresenta o uso correto da vírgula para isolar um aposto explicativo?',
    explanation: 'A vírgula é usada para isolar o aposto explicativo, que é uma expressão que explica ou especifica o termo anterior.',
    difficulty: 1,
    options: [
      {
        id: 10006,
        exercise_id: 1002,
        option_text: 'Paulo, meu irmão mais velho, é médico.',
        is_correct: true,
        explanation: 'Correto! As vírgulas estão isolando o aposto explicativo "meu irmão mais velho".'
      },
      {
        id: 10007,
        exercise_id: 1002,
        option_text: 'Paulo meu irmão mais velho, é médico.',
        is_correct: false,
        explanation: 'Incorreto! Falta a primeira vírgula para isolar o aposto explicativo.'
      },
      {
        id: 10008,
        exercise_id: 1002,
        option_text: 'Paulo, meu irmão mais velho é médico.',
        is_correct: false,
        explanation: 'Incorreto! Falta a segunda vírgula para isolar o aposto explicativo.'
      },
      {
        id: 10009,
        exercise_id: 1002,
        option_text: 'Paulo, meu, irmão, mais, velho, é médico.',
        is_correct: false,
        explanation: 'Incorreto! Há vírgulas em excesso, separando elementos que não deveriam ser separados.'
      },
      {
        id: 10010,
        exercise_id: 1002,
        option_text: 'Paulo meu irmão mais velho é médico.',
        is_correct: false,
        explanation: 'Incorreto! Faltam as vírgulas para isolar o aposto explicativo "meu irmão mais velho".'
      }
    ]
  }
];

// Exercícios do módulo Vírgula 2
export const virgulaExercicio2: Exercise[] = [
  {
    id: 2001,
    category_id: 'virgula-2',
    question: 'Em qual alternativa a vírgula está sendo usada corretamente para isolar um adjunto adverbial deslocado?',
    explanation: 'A vírgula é usada para isolar adjuntos adverbiais deslocados, ou seja, que não estão em sua posição usual na frase.',
    difficulty: 2,
    options: [
      {
        id: 20001,
        exercise_id: 2001,
        option_text: 'No próximo domingo, iremos ao parque com as crianças.',
        is_correct: true,
        explanation: 'Correto! A vírgula está isolando o adjunto adverbial "No próximo domingo" que está deslocado no início da frase.'
      },
      {
        id: 20002,
        exercise_id: 2001,
        option_text: 'Iremos, no próximo domingo ao parque com as crianças.',
        is_correct: false,
        explanation: 'Incorreto! Falta a segunda vírgula para isolar o adjunto adverbial intercalado ou a vírgula está mal posicionada.'
      },
      {
        id: 20003,
        exercise_id: 2001,
        option_text: 'Iremos no próximo domingo, ao parque com as crianças.',
        is_correct: false,
        explanation: 'Incorreto! O adjunto adverbial "no próximo domingo" não está deslocado, portanto não precisa de vírgula.'
      },
      {
        id: 20004,
        exercise_id: 2001,
        option_text: 'Iremos no próximo domingo ao parque, com as crianças.',
        is_correct: false,
        explanation: 'Incorreto! O adjunto adverbial "com as crianças" não está deslocado e é curto, portanto não precisa de vírgula.'
      },
      {
        id: 20005,
        exercise_id: 2001,
        option_text: 'No próximo domingo iremos ao parque com as crianças.',
        is_correct: false,
        explanation: 'Incorreto! Falta a vírgula após o adjunto adverbial deslocado "No próximo domingo".'
      }
    ]
  },
  {
    id: 2002,
    category_id: 'virgula-2',
    question: 'Qual alternativa apresenta o uso correto da vírgula para separar orações coordenadas?',
    explanation: 'A vírgula é usada para separar orações coordenadas, especialmente quando não há conjunção entre elas.',
    difficulty: 2,
    options: [
      {
        id: 20006,
        exercise_id: 2002,
        option_text: 'Ele estudou muito, conseguiu passar no exame.',
        is_correct: true,
        explanation: 'Correto! A vírgula está separando duas orações coordenadas assindéticas (sem conjunção).'
      },
      {
        id: 20007,
        exercise_id: 2002,
        option_text: 'Ele estudou muito e, conseguiu passar no exame.',
        is_correct: false,
        explanation: 'Incorreto! Não se usa vírgula após a conjunção "e" neste caso.'
      },
      {
        id: 20008,
        exercise_id: 2002,
        option_text: 'Ele estudou muito conseguiu, passar no exame.',
        is_correct: false,
        explanation: 'Incorreto! A vírgula está mal posicionada, devendo separar as orações coordenadas.'
      },
      {
        id: 20009,
        exercise_id: 2002,
        option_text: 'Ele, estudou muito conseguiu passar no exame.',
        is_correct: false,
        explanation: 'Incorreto! A vírgula está mal posicionada, não devendo separar o sujeito do predicado.'
      },
      {
        id: 20010,
        exercise_id: 2002,
        option_text: 'Ele estudou muito conseguiu passar no exame.',
        is_correct: false,
        explanation: 'Incorreto! Falta a vírgula para separar as orações coordenadas.'
      }
    ]
  }
];

// Exercícios do módulo Vírgula 3
export const virgulaExercicio3: Exercise[] = [
  {
    id: 3001,
    category_id: 'virgula-3',
    question: 'Em qual alternativa a vírgula está sendo usada corretamente para isolar expressões explicativas?',
    explanation: 'A vírgula é usada para isolar expressões explicativas como "isto é", "ou seja", "por exemplo", etc.',
    difficulty: 3,
    options: [
      {
        id: 30001,
        exercise_id: 3001,
        option_text: 'Precisamos de alimentos não perecíveis, ou seja, alimentos que não estragam facilmente.',
        is_correct: true,
        explanation: 'Correto! A vírgula está isolando a expressão explicativa "ou seja".'
      },
      {
        id: 30002,
        exercise_id: 3001,
        option_text: 'Precisamos de alimentos não perecíveis ou seja, alimentos que não estragam facilmente.',
        is_correct: false,
        explanation: 'Incorreto! Falta a primeira vírgula antes da expressão explicativa "ou seja".'
      },
      {
        id: 30003,
        exercise_id: 3001,
        option_text: 'Precisamos de alimentos não perecíveis, ou seja alimentos que não estragam facilmente.',
        is_correct: false,
        explanation: 'Incorreto! Falta a segunda vírgula após a expressão explicativa "ou seja".'
      },
      {
        id: 30004,
        exercise_id: 3001,
        option_text: 'Precisamos, de alimentos não perecíveis ou seja, alimentos que não estragam facilmente.',
        is_correct: false,
        explanation: 'Incorreto! A primeira vírgula está mal posicionada e falta a vírgula antes de "ou seja".'
      },
      {
        id: 30005,
        exercise_id: 3001,
        option_text: 'Precisamos de alimentos, não perecíveis, ou seja, alimentos que não estragam facilmente.',
        is_correct: false,
        explanation: 'Incorreto! Há uma vírgula indevida separando "alimentos" de "não perecíveis".'
      }
    ]
  },
  {
    id: 3002,
    category_id: 'virgula-3',
    question: 'Qual alternativa apresenta o uso correto da vírgula para isolar orações subordinadas adjetivas explicativas?',
    explanation: 'A vírgula é usada para isolar orações subordinadas adjetivas explicativas, que acrescentam uma informação adicional sobre o termo que modificam.',
    difficulty: 3,
    options: [
      {
        id: 30006,
        exercise_id: 3002,
        option_text: 'Os livros, que estavam sobre a mesa, foram doados à biblioteca.',
        is_correct: true,
        explanation: 'Correto! As vírgulas estão isolando a oração subordinada adjetiva explicativa "que estavam sobre a mesa".'
      },
      {
        id: 30007,
        exercise_id: 3002,
        option_text: 'Os livros que estavam sobre a mesa, foram doados à biblioteca.',
        is_correct: false,
        explanation: 'Incorreto! Se a oração é explicativa, deve ser isolada por vírgulas. Se é restritiva, não deve ter vírgulas.'
      },
      {
        id: 30008,
        exercise_id: 3002,
        option_text: 'Os livros, que estavam sobre a mesa foram doados à biblioteca.',
        is_correct: false,
        explanation: 'Incorreto! Falta a segunda vírgula para isolar a oração subordinada adjetiva explicativa.'
      },
      {
        id: 30009,
        exercise_id: 3002,
        option_text: 'Os livros que, estavam sobre a mesa, foram doados à biblioteca.',
        is_correct: false,
        explanation: 'Incorreto! A primeira vírgula está mal posicionada, devendo vir antes do pronome relativo "que".'
      },
      {
        id: 30010,
        exercise_id: 3002,
        option_text: 'Os livros que estavam sobre a mesa foram doados à biblioteca.',
        is_correct: false,
        explanation: 'Incorreto! Neste caso, a oração está sendo usada como restritiva, o que muda o sentido da frase (apenas os livros que estavam sobre a mesa foram doados).'
      }
    ]
  }
];

// Exercícios do módulo Vírgula 4
export const virgulaExercicio4: Exercise[] = [
  {
    id: 4001,
    category_id: 'virgula-4',
    question: 'Em qual alternativa a vírgula está sendo usada corretamente para marcar a elipse (omissão) de um verbo?',
    explanation: 'A vírgula é usada para marcar a elipse (omissão) de um verbo que já foi mencionado anteriormente na frase.',
    difficulty: 4,
    options: [
      {
        id: 40001,
        exercise_id: 4001,
        option_text: 'João gosta de futebol; Pedro, de basquete.',
        is_correct: true,
        explanation: 'Correto! A vírgula está marcando a elipse do verbo "gosta" na segunda oração.'
      },
      {
        id: 40002,
        exercise_id: 4001,
        option_text: 'João gosta de futebol; Pedro de basquete.',
        is_correct: false,
        explanation: 'Incorreto! Falta a vírgula para marcar a elipse do verbo "gosta" na segunda oração.'
      },
      {
        id: 40003,
        exercise_id: 4001,
        option_text: 'João, gosta de futebol; Pedro, de basquete.',
        is_correct: false,
        explanation: 'Incorreto! Há uma vírgula indevida separando o sujeito "João" do verbo "gosta".'
      },
      {
        id: 40004,
        exercise_id: 4001,
        option_text: 'João gosta, de futebol; Pedro, de basquete.',
        is_correct: false,
        explanation: 'Incorreto! Há uma vírgula indevida separando o verbo "gosta" do seu complemento.'
      },
      {
        id: 40005,
        exercise_id: 4001,
        option_text: 'João gosta de futebol, Pedro de basquete.',
        is_correct: false,
        explanation: 'Incorreto! Falta um ponto e vírgula para separar as orações e falta a vírgula para marcar a elipse do verbo.'
      }
    ]
  },
  {
    id: 4002,
    category_id: 'virgula-4',
    question: 'Qual alternativa apresenta o uso correto da vírgula em orações subordinadas adverbiais?',
    explanation: 'A vírgula é usada para separar orações subordinadas adverbiais, especialmente quando estas vêm antes da oração principal.',
    difficulty: 4,
    options: [
      {
        id: 40006,
        exercise_id: 4002,
        option_text: 'Quando o professor chegou, os alunos já estavam em sala.',
        is_correct: true,
        explanation: 'Correto! A vírgula está separando a oração subordinada adverbial temporal "Quando o professor chegou" da oração principal.'
      },
      {
        id: 40007,
        exercise_id: 4002,
        option_text: 'Quando o professor chegou os alunos já estavam em sala.',
        is_correct: false,
        explanation: 'Incorreto! Falta a vírgula para separar a oração subordinada adverbial da oração principal.'
      },
      {
        id: 40008,
        exercise_id: 4002,
        option_text: 'Os alunos já estavam em sala, quando o professor chegou.',
        is_correct: false,
        explanation: 'Incorreto! Quando a oração subordinada adverbial vem depois da oração principal e é curta, a vírgula é opcional, mas não incorreta.'
      },
      {
        id: 40009,
        exercise_id: 4002,
        option_text: 'Quando, o professor chegou, os alunos já estavam em sala.',
        is_correct: false,
        explanation: 'Incorreto! Há uma vírgula indevida separando a conjunção "Quando" do resto da oração subordinada.'
      },
      {
        id: 40010,
        exercise_id: 4002,
        option_text: 'Os alunos, já estavam em sala quando o professor chegou.',
        is_correct: false,
        explanation: 'Incorreto! Há uma vírgula indevida separando o sujeito "Os alunos" do predicado.'
      }
    ]
  }
];

// Exercícios do módulo Vírgula 5
export const virgulaExercicio5: Exercise[] = [
  {
    id: 5001,
    category_id: 'virgula-5',
    question: 'Em qual alternativa a vírgula está sendo usada corretamente para isolar conjunções adversativas?',
    explanation: 'A vírgula é usada para isolar conjunções adversativas como "porém", "contudo", "entretanto", etc., quando estas aparecem no meio da frase.',
    difficulty: 5,
    options: [
      {
        id: 50001,
        exercise_id: 5001,
        option_text: 'Ele queria viajar, porém, não tinha dinheiro suficiente.',
        is_correct: true,
        explanation: 'Correto! As vírgulas estão isolando a conjunção adversativa "porém".'
      },
      {
        id: 50002,
        exercise_id: 5001,
        option_text: 'Ele queria viajar porém, não tinha dinheiro suficiente.',
        is_correct: false,
        explanation: 'Incorreto! Falta a primeira vírgula antes da conjunção adversativa "porém".'
      },
      {
        id: 50003,
        exercise_id: 5001,
        option_text: 'Ele queria viajar, porém não tinha dinheiro suficiente.',
        is_correct: false,
        explanation: 'Incorreto! Falta a segunda vírgula após a conjunção adversativa "porém", embora esta seja uma forma aceita em alguns contextos.'
      },
      {
        id: 50004,
        exercise_id: 5001,
        option_text: 'Ele, queria viajar, porém, não tinha dinheiro suficiente.',
        is_correct: false,
        explanation: 'Incorreto! Há uma vírgula indevida separando o sujeito "Ele" do verbo "queria".'
      },
      {
        id: 50005,
        exercise_id: 5001,
        option_text: 'Ele queria viajar porém não tinha dinheiro suficiente.',
        is_correct: false,
        explanation: 'Incorreto! Faltam as vírgulas para isolar a conjunção adversativa "porém".'
      }
    ]
  },
  {
    id: 5002,
    category_id: 'virgula-5',
    question: 'Qual alternativa apresenta o uso correto da vírgula em orações intercaladas?',
    explanation: 'A vírgula é usada para isolar orações intercaladas, que interrompem a sequência natural da frase.',
    difficulty: 5,
    options: [
      {
        id: 50006,
        exercise_id: 5002,
        option_text: 'O candidato, é importante ressaltar, apresentou propostas inovadoras.',
        is_correct: true,
        explanation: 'Correto! As vírgulas estão isolando a oração intercalada "é importante ressaltar".'
      },
      {
        id: 50007,
        exercise_id: 5002,
        option_text: 'O candidato é importante ressaltar, apresentou propostas inovadoras.',
        is_correct: false,
        explanation: 'Incorreto! Falta a primeira vírgula para isolar a oração intercalada.'
      },
      {
        id: 50008,
        exercise_id: 5002,
        option_text: 'O candidato, é importante ressaltar apresentou propostas inovadoras.',
        is_correct: false,
        explanation: 'Incorreto! Falta a segunda vírgula para isolar a oração intercalada.'
      },
      {
        id: 50009,
        exercise_id: 5002,
        option_text: 'O candidato, é, importante, ressaltar, apresentou propostas inovadoras.',
        is_correct: false,
        explanation: 'Incorreto! Há vírgulas em excesso, separando elementos que não deveriam ser separados.'
      },
      {
        id: 50010,
        exercise_id: 5002,
        option_text: 'O candidato é importante ressaltar apresentou propostas inovadoras.',
        is_correct: false,
        explanation: 'Incorreto! Faltam as vírgulas para isolar a oração intercalada "é importante ressaltar".'
      }
    ]
  }
];

// Exercícios da prova final de Vírgula
export const provaVirgula: Exercise[] = [
  {
    id: 6001,
    category_id: 'prova-virgula',
    question: 'Identifique a alternativa em que a vírgula está sendo usada corretamente:',
    explanation: 'A vírgula tem diversos usos na língua portuguesa, como separar elementos em uma enumeração, isolar expressões explicativas, etc.',
    difficulty: 5,
    options: [
      {
        id: 60001,
        exercise_id: 6001,
        option_text: 'Os alunos, cansados da longa viagem, foram direto para o hotel.',
        is_correct: true,
        explanation: 'Correto! As vírgulas estão isolando o aposto explicativo "cansados da longa viagem".'
      },
      {
        id: 60002,
        exercise_id: 6001,
        option_text: 'Os alunos, foram direto para o hotel.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar vírgula para separar o sujeito do predicado.'
      },
      {
        id: 60003,
        exercise_id: 6001,
        option_text: 'Os alunos foram, direto para o hotel.',
        is_correct: false,
        explanation: 'Incorreto! Não se deve usar vírgula para separar o verbo do seu complemento.'
      },
      {
        id: 60004,
        exercise_id: 6001,
        option_text: 'Os, alunos, cansados, da, longa, viagem, foram, direto, para, o, hotel.',
        is_correct: false,
        explanation: 'Incorreto! Há vírgulas em excesso, separando elementos que não deveriam ser separados.'
      },
      {
        id: 60005,
        exercise_id: 6001,
        option_text: 'Os alunos cansados da longa viagem foram direto para o hotel.',
        is_correct: false,
        explanation: 'Incorreto! Faltam as vírgulas para isolar o aposto explicativo "cansados da longa viagem".'
      }
    ]
  },
  {
    id: 6002,
    category_id: 'prova-virgula',
    question: 'Em qual alternativa a vírgula está sendo usada corretamente em uma enumeração?',
    explanation: 'A vírgula é usada para separar itens em uma enumeração.',
    difficulty: 5,
    options: [
      {
        id: 60006,
        exercise_id: 6002,
        option_text: 'Para a viagem, precisamos de passagens, hospedagem, alimentação e transporte local.',
        is_correct: true,
        explanation: 'Correto! As vírgulas estão separando itens em uma enumeração, com o último item precedido pela conjunção "e".'
      },
      {
        id: 60007,
        exercise_id: 6002,
        option_text: 'Para a viagem precisamos, de passagens, hospedagem, alimentação e transporte local.',
        is_correct: false,
        explanation: 'Incorreto! Há uma vírgula indevida separando o verbo "precisamos" do seu complemento.'
      },
      {
        id: 60008,
        exercise_id: 6002,
        option_text: 'Para a viagem, precisamos de passagens hospedagem, alimentação, e transporte local.',
        is_correct: false,
        explanation: 'Incorreto! Falta uma vírgula após "passagens" e há uma vírgula indevida antes da conjunção "e".'
      },
      {
        id: 60009,
        exercise_id: 6002,
        option_text: 'Para, a viagem, precisamos de passagens, hospedagem, alimentação e transporte local.',
        is_correct: false,
        explanation: 'Incorreto! Há uma vírgula indevida separando a preposição "Para" do seu complemento.'
      },
      {
        id: 60010,
        exercise_id: 6002,
        option_text: 'Para a viagem precisamos de passagens hospedagem alimentação e transporte local.',
        is_correct: false,
        explanation: 'Incorreto! Faltam as vírgulas para separar os itens da enumeração.'
      }
    ]
  }
];

// Função para obter exercícios por categoria
export async function getVirgulaExercises(categoryId: string): Promise<Exercise[]> {
  // Retornar exercícios conforme a categoria solicitada
  switch(categoryId) {
    case 'virgula':
      // Duplicar os exercícios existentes para ter 10 no total
      return duplicateExercises(virgulaExercicio1, 1, 10);
    case 'virgula-2':
      // Duplicar os exercícios existentes para ter 10 no total
      return duplicateExercises(virgulaExercicio2, 2, 10);
    case 'virgula-3':
      // Duplicar os exercícios existentes para ter 10 no total
      return duplicateExercises(virgulaExercicio3, 3, 10);
    case 'virgula-4':
      // Duplicar os exercícios existentes para ter 10 no total
      return duplicateExercises(virgulaExercicio4, 4, 10);
    case 'virgula-5':
      // Duplicar os exercícios existentes para ter 10 no total
      return duplicateExercises(virgulaExercicio5, 5, 10);
    case 'prova-virgula':
      // Duplicar os exercícios existentes para ter 30 no total
      return duplicateExercises(provaVirgula, 6, 30);
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
  let currentId = exercises.length > 0 ? Math.max(...exercises.map(ex => ex.id)) + 1 : moduleNumber * 1000 + 1;
  let currentOptionId = exercises.length > 0 ? 
    Math.max(...exercises.flatMap(ex => ex.options.map(opt => opt.id))) + 1 : 
    moduleNumber * 10000 + 1;

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
