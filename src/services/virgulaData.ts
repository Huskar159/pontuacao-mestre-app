import { Exercise } from './exerciseService';

// Exercícios do módulo Vírgula 1
export const virgulaExercicio1: Exercise[] = [
  {
    id: 1001,
    category_id: 'virgula',
    question: 'Qual a principal função da vírgula em uma frase?',
    explanation: 'A vírgula tem a função de separar elementos dentro de uma frase para maior clareza.',
    difficulty: 1,
    options: [
      {
        id: 10001,
        exercise_id: 1001,
        option_text: 'Indicar o final de uma frase.',
        is_correct: false,
        explanation: 'Incorreto. O ponto final indica o fim de uma frase declarativa.'
      },
      {
        id: 10002,
        exercise_id: 1001,
        option_text: 'Separar elementos dentro de uma frase para clareza.',
        is_correct: true,
        explanation: 'Correto. A vírgula organiza a frase, separando termos e orações.'
      },
      {
        id: 10003,
        exercise_id: 1001,
        option_text: 'Substituir o ponto de interrogação.',
        is_correct: false,
        explanation: 'Incorreto. O ponto de interrogação é usado para perguntas diretas.'
      },
      {
        id: 10004,
        exercise_id: 1001,
        option_text: 'Enfatizar uma palavra específica.',
        is_correct: false,
        explanation: 'Incorreto. A ênfase pode ser dada por outros recursos, não primariamente pela vírgula.'
      },
      {
        id: 10005,
        exercise_id: 1001,
        option_text: 'Indicar uma citação direta.',
        is_correct: false,
        explanation: 'Incorreto. As aspas são usadas para citações diretas.'
      }
    ]
  },
  {
    id: 1002,
    category_id: 'virgula',
    question: 'Em qual das frases abaixo a vírgula foi usada para separar itens de uma enumeração?',
    explanation: 'A vírgula é usada para separar itens em uma enumeração ou lista.',
    difficulty: 1,
    options: [
      {
        id: 10006,
        exercise_id: 1002,
        option_text: 'Maria, venha cá!',
        is_correct: false,
        explanation: 'Incorreto. A vírgula aqui isola o vocativo "Maria".'
      },
      {
        id: 10007,
        exercise_id: 1002,
        option_text: 'Comprei pão, leite, queijo e presunto.',
        is_correct: true,
        explanation: 'Correto. A vírgula separa os itens da lista de compras (enumeração).'
      },
      {
        id: 10008,
        exercise_id: 1002,
        option_text: 'Ele estuda muito, mas não passa nas provas.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula separa orações coordenadas adversativas.'
      },
      {
        id: 10009,
        exercise_id: 1002,
        option_text: 'São Paulo, 3 de junho de 2025.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula separa o local da data.'
      },
      {
        id: 10010,
        exercise_id: 1002,
        option_text: 'O menino, assustado, correu para casa.',
        is_correct: false,
        explanation: 'Incorreto. As vírgulas isolam um adjunto adnominal deslocado ou aposto explicativo.'
      }
    ]
  },
  {
    id: 1003,
    category_id: 'virgula',
    question: 'A vírgula é obrigatória para separar o vocativo. Qual frase exemplifica corretamente esse uso?',
    explanation: 'O vocativo deve ser separado do resto da frase por vírgula.',
    difficulty: 1,
    options: [
      {
        id: 10011,
        exercise_id: 1003,
        option_text: 'O professor explicou a matéria calmamente.',
        is_correct: false,
        explanation: 'Incorreto. Não há vocativo nesta frase.'
      },
      {
        id: 10012,
        exercise_id: 1003,
        option_text: 'Crianças, prestem atenção!',
        is_correct: true,
        explanation: 'Correto. "Crianças" é o vocativo e está corretamente isolado por vírgula.'
      },
      {
        id: 10013,
        exercise_id: 1003,
        option_text: 'Gosto de viajar, ler e ouvir música.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula separa itens de uma enumeração.'
      },
      {
        id: 10014,
        exercise_id: 1003,
        option_text: 'Ele chegou, sentou e começou a ler.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula separa orações coordenadas assindéticas.'
      },
      {
        id: 10015,
        exercise_id: 1003,
        option_text: 'Apesar da chuva, fomos ao parque.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula separa uma oração adverbial deslocada.'
      }
    ]
  },
  {
    id: 1004,
    category_id: 'virgula',
    question: 'Em "Brasília, capital do Brasil, é uma cidade planejada", as vírgulas foram usadas para:',
    explanation: 'As vírgulas isolam o aposto explicativo na frase.',
    difficulty: 1,
    options: [
      {
        id: 10016,
        exercise_id: 1004,
        option_text: 'Separar uma enumeração.',
        is_correct: false,
        explanation: 'Incorreto. Não há uma lista de itens sendo enumerada.'
      },
      {
        id: 10017,
        exercise_id: 1004,
        option_text: 'Isolar o vocativo.',
        is_correct: false,
        explanation: 'Incorreto. Não há um chamamento direto a alguém ou algo.'
      },
      {
        id: 10018,
        exercise_id: 1004,
        option_text: 'Isolar o aposto explicativo.',
        is_correct: true,
        explanation: 'Correto. "capital do Brasil" explica o termo anterior, "Brasília".'
      },
      {
        id: 10019,
        exercise_id: 1004,
        option_text: 'Separar orações coordenadas.',
        is_correct: false,
        explanation: 'Incorreto. A estrutura não envolve orações coordenadas separadas por vírgula aqui.'
      },
      {
        id: 10020,
        exercise_id: 1004,
        option_text: 'Indicar a omissão de um termo.',
        is_correct: false,
        explanation: 'Incorreto. Nenhum termo foi omitido e substituído por vírgula.'
      }
    ]
  },
  {
    id: 1005,
    category_id: 'virgula',
    question: 'Qual frase utiliza a vírgula para separar local e data?',
    explanation: 'A vírgula é usada para separar o nome do local da data em correspondências e documentos.',
    difficulty: 1,
    options: [
      {
        id: 10021,
        exercise_id: 1005,
        option_text: 'João, o irmão de Pedro, viajou.',
        is_correct: false,
        explanation: 'Incorreto. As vírgulas isolam o aposto explicativo "o irmão de Pedro".'
      },
      {
        id: 10022,
        exercise_id: 1005,
        option_text: 'Fui ao mercado, à farmácia e ao banco.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula separa itens de uma enumeração.'
      },
      {
        id: 10023,
        exercise_id: 1005,
        option_text: 'Rio de Janeiro, 15 de agosto de 1990.',
        is_correct: true,
        explanation: 'Correto. A vírgula separa o nome do local ("Rio de Janeiro") da data.'
      },
      {
        id: 10024,
        exercise_id: 1005,
        option_text: 'Meu amigo, como você está?',
        is_correct: false,
        explanation: 'Incorreto. A vírgula isola o vocativo "Meu amigo".'
      },
      {
        id: 10025,
        exercise_id: 1005,
        option_text: 'Se chover, não iremos à praia.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula separa a oração subordinada adverbial condicional anteposta.'
      }
    ]
  },
  {
    id: 1006,
    category_id: 'virgula',
    question: 'A vírgula NÃO deve ser usada para separar:',
    explanation: 'A vírgula não deve ser usada para separar o sujeito do predicado na ordem direta.',
    difficulty: 1,
    options: [
      {
        id: 10026,
        exercise_id: 1006,
        option_text: 'O sujeito do predicado.',
        is_correct: true,
        explanation: 'Correto. Não se separa o sujeito do seu predicado por vírgula na ordem direta.'
      },
      {
        id: 10027,
        exercise_id: 1006,
        option_text: 'Itens de uma lista.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula é usada para separar itens de uma enumeração.'
      },
      {
        id: 10028,
        exercise_id: 1006,
        option_text: 'O vocativo.',
        is_correct: false,
        explanation: 'Incorreto. O vocativo deve ser isolado por vírgula(s).'
      },
      {
        id: 10029,
        exercise_id: 1006,
        option_text: 'O aposto explicativo.',
        is_correct: false,
        explanation: 'Incorreto. O aposto explicativo geralmente é isolado por vírgulas.'
      },
      {
        id: 10030,
        exercise_id: 1006,
        option_text: 'Orações coordenadas assindéticas.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula é usada para separar orações coordenadas assindéticas.'
      }
    ]
  },
  {
    id: 1007,
    category_id: 'virgula',
    question: 'Na frase "O sol, astro rei, ilumina nossos dias", a expressão "astro rei" está entre vírgulas porque é um:',
    explanation: 'A expressão "astro rei" está entre vírgulas por ser um aposto explicativo.',
    difficulty: 1,
    options: [
      {
        id: 10031,
        exercise_id: 1007,
        option_text: 'Vocativo.',
        is_correct: false,
        explanation: 'Incorreto. Não é um chamamento.'
      },
      {
        id: 10032,
        exercise_id: 1007,
        option_text: 'Sujeito.',
        is_correct: false,
        explanation: 'Incorreto. O sujeito é "O sol".'
      },
      {
        id: 10033,
        exercise_id: 1007,
        option_text: 'Predicado.',
        is_correct: false,
        explanation: 'Incorreto. O predicado é "ilumina nossos dias".'
      },
      {
        id: 10034,
        exercise_id: 1007,
        option_text: 'Aposto explicativo.',
        is_correct: true,
        explanation: 'Correto. "astro rei" explica quem é o sol.'
      },
      {
        id: 10035,
        exercise_id: 1007,
        option_text: 'Adjunto adverbial.',
        is_correct: false,
        explanation: 'Incorreto. Não indica circunstância (tempo, modo, lugar, etc.).'
      }
    ]
  },
  {
    id: 1008,
    category_id: 'virgula',
    question: 'Qual o uso da vírgula na frase "Ele gosta de futebol; ela, de vôlei"?',
    explanation: 'A vírgula substitui o verbo que foi omitido na segunda oração.',
    difficulty: 1,
    options: [
      {
        id: 10036,
        exercise_id: 1008,
        option_text: 'Separar itens de uma enumeração.',
        is_correct: false,
        explanation: 'Incorreto. Não há uma enumeração de itens simples.'
      },
      {
        id: 10037,
        exercise_id: 1008,
        option_text: 'Isolar um aposto.',
        is_correct: false,
        explanation: 'Incorreto. Não há um termo explicando outro.'
      },
      {
        id: 10038,
        exercise_id: 1008,
        option_text: 'Indicar a omissão de um verbo (zeugma).',
        is_correct: true,
        explanation: 'Correto. A vírgula substitui o verbo "gosta" ("ela [gosta] de vôlei").'
      },
      {
        id: 10039,
        exercise_id: 1008,
        option_text: 'Separar o vocativo.',
        is_correct: false,
        explanation: 'Incorreto. Não há vocativo na segunda parte da frase.'
      },
      {
        id: 10040,
        exercise_id: 1008,
        option_text: 'Separar local e data.',
        is_correct: false,
        explanation: 'Incorreto. A frase não contém indicação de local e data.'
      }
    ]
  },
  {
    id: 1009,
    category_id: 'virgula',
    question: 'Em "Chegamos cedo, mas o portão já estava fechado", a vírgula antes de "mas" é usada para:',
    explanation: 'A vírgula antes de "mas" separa orações coordenadas sindéticas adversativas.',
    difficulty: 1,
    options: [
      {
        id: 10041,
        exercise_id: 1009,
        option_text: 'Separar o sujeito do predicado.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula não está separando sujeito e predicado aqui.'
      },
      {
        id: 10042,
        exercise_id: 1009,
        option_text: 'Isolar um adjunto adverbial deslocado.',
        is_correct: false,
        explanation: 'Incorreto. "mas" introduz uma oração, não é um adjunto adverbial isolado.'
      },
      {
        id: 10043,
        exercise_id: 1009,
        option_text: 'Separar orações coordenadas sindéticas adversativas.',
        is_correct: true,
        explanation: 'Correto. A conjunção "mas" introduz uma oração coordenada adversativa, que geralmente é precedida por vírgula.'
      },
      {
        id: 10044,
        exercise_id: 1009,
        option_text: 'Indicar uma pausa para respiração.',
        is_correct: false,
        explanation: 'Incorreto. Embora possa coincidir com uma pausa, a função gramatical é separar as orações.'
      },
      {
        id: 10045,
        exercise_id: 1009,
        option_text: 'Separar um aposto explicativo.',
        is_correct: false,
        explanation: 'Incorreto. Não há aposto sendo isolado nesta posição.'
      }
    ]
  },
  {
    id: 1010,
    category_id: 'virgula',
    question: 'Qual frase demonstra o uso da vírgula para isolar um adjunto adverbial deslocado (no início da frase)?',
    explanation: 'A vírgula é usada para isolar um adjunto adverbial deslocado no início da frase.',
    difficulty: 1,
    options: [
      {
        id: 10046,
        exercise_id: 1010,
        option_text: 'Os alunos fizeram o trabalho, com muita dedicação.',
        is_correct: false,
        explanation: 'Incorreto. O adjunto adverbial "com muita dedicação" está no final, a vírgula é opcional.'
      },
      {
        id: 10047,
        exercise_id: 1010,
        option_text: 'Com muita dedicação, os alunos fizeram o trabalho.',
        is_correct: true,
        explanation: 'Correto. "Com muita dedicação" é um adjunto adverbial de modo deslocado para o início da frase e separado por vírgula.'
      },
      {
        id: 10048,
        exercise_id: 1010,
        option_text: 'Os alunos, com muita dedicação, fizeram o trabalho.',
        is_correct: false,
        explanation: 'Incorreto. Aqui o adjunto adverbial está intercalado, isolado por duas vírgulas.'
      },
      {
        id: 10049,
        exercise_id: 1010,
        option_text: 'Os alunos fizeram o trabalho com muita dedicação.',
        is_correct: false,
        explanation: 'Incorreto. O adjunto adverbial está na posição padrão (final), sem vírgula.'
      },
      {
        id: 10050,
        exercise_id: 1010,
        option_text: 'Dedicação, os alunos fizeram o trabalho com muita.',
        is_correct: false,
        explanation: 'Incorreto. A frase está mal estruturada e a vírgula não isola um adjunto adverbial.'
      }
    ]
  }
];

// Exercícios do módulo Vírgula 2
export const virgulaExercicio2: Exercise[] = [
  {
    id: 2001,
    category_id: 'virgula-2',
    question: 'Em qual frase a vírgula antes da conjunção "e" está corretamente utilizada por indicar sujeitos diferentes nas orações?',
    explanation: 'A vírgula antes da conjunção "e" pode ser usada quando as orações têm sujeitos diferentes.',
    difficulty: 2,
    options: [
      {
        id: 20001,
        exercise_id: 2001,
        option_text: 'O menino correu e pulou de alegria.',
        is_correct: false,
        explanation: 'Incorreto. O sujeito ("O menino") é o mesmo para ambos os verbos; a vírgula antes de "e" geralmente não é usada aqui.'
      },
      {
        id: 20002,
        exercise_id: 2001,
        option_text: 'O sol nasceu e os pássaros cantaram.',
        is_correct: true,
        explanation: 'Correto. Os sujeitos são diferentes ("O sol" e "os pássaros"), justificando o uso da vírgula antes do "e".'
      },
      {
        id: 20003,
        exercise_id: 2001,
        option_text: 'Ele estudou muito e, passou no exame.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula após o "e" está incorreta; a vírgula antes do "e" não se justifica por sujeitos diferentes aqui (o sujeito é "Ele").'
      },
      {
        id: 20004,
        exercise_id: 2001,
        option_text: 'Comprei pão, e leite.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula antes de "e" não é usada para separar o último item de uma enumeração simples.'
      },
      {
        id: 20005,
        exercise_id: 2001,
        option_text: 'Choveu muito, e fez frio.',
        is_correct: false,
        explanation: 'Incorreto. Embora haja uma vírgula antes do "e", o uso não é obrigatório aqui, pois as orações são curtas e estão relacionadas. A primeira opção com sujeitos claramente diferentes é mais adequada.'
      }
    ]
  },
  {
    id: 2002,
    category_id: 'virgula-2',
    question: 'A vírgula antes de "mas" é geralmente obrigatória para separar orações coordenadas adversativas. Qual frase exemplifica isso?',
    explanation: 'A vírgula antes de "mas" é geralmente obrigatória quando separa orações coordenadas adversativas.',
    difficulty: 2,
    options: [
      {
        id: 20006,
        exercise_id: 2002,
        option_text: 'Ele é inteligente mas preguiçoso.',
        is_correct: false,
        explanation: 'Incorreto. Quando "mas" liga apenas palavras (adjetivos aqui) e não orações, a vírgula não é usada.'
      },
      {
        id: 20007,
        exercise_id: 2002,
        option_text: 'Tentamos de tudo, mas não conseguimos.',
        is_correct: true,
        explanation: 'Correto. A vírgula separa as duas orações coordenadas ligadas pela conjunção adversativa "mas".'
      },
      {
        id: 20008,
        exercise_id: 2002,
        option_text: 'Queria ir, mas, estava cansado.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula após "mas" está incorreta.'
      },
      {
        id: 20009,
        exercise_id: 2002,
        option_text: 'Ele não só estudou, mas também trabalhou.',
        is_correct: false,
        explanation: 'Incorreto. A estrutura "não só... mas também" geralmente não leva vírgula antes do "mas".'
      },
      {
        id: 20010,
        exercise_id: 2002,
        option_text: 'Mas que surpresa agradável!',
        is_correct: false,
        explanation: 'Incorreto. "Mas" aqui tem valor de ênfase, não de conjunção adversativa ligando orações.'
      }
    ]
  },
  {
    id: 2003,
    category_id: 'virgula-2',
    question: 'Qual o uso da vírgula na frase: "Penso, logo existo"?',
    explanation: 'A vírgula é usada para separar orações coordenadas sindéticas conclusivas.',
    difficulty: 2,
    options: [
      {
        id: 20011,
        exercise_id: 2003,
        option_text: 'Separar vocativo.',
        is_correct: false,
        explanation: 'Incorreto. Não há vocativo.'
      },
      {
        id: 20012,
        exercise_id: 2003,
        option_text: 'Isolar aposto.',
        is_correct: false,
        explanation: 'Incorreto. "logo existo" não é um aposto de "Penso".'
      },
      {
        id: 20013,
        exercise_id: 2003,
        option_text: 'Separar orações coordenadas sindéticas conclusivas.',
        is_correct: true,
        explanation: 'Correto. "logo" é uma conjunção conclusiva, e a vírgula a precede separando as orações.'
      },
      {
        id: 20014,
        exercise_id: 2003,
        option_text: 'Indicar omissão de verbo.',
        is_correct: false,
        explanation: 'Incorreto. Nenhum verbo está omitido.'
      },
      {
        id: 20015,
        exercise_id: 2003,
        option_text: 'Separar adjunto adverbial deslocado.',
        is_correct: false,
        explanation: 'Incorreto. "logo" é uma conjunção, não um adjunto adverbial aqui.'
      }
    ]
  },
  {
    id: 2004,
    category_id: 'virgula-2',
    question: 'As expressões explicativas como "isto é", "ou seja", "a saber", "por exemplo" devem ser isoladas por vírgulas. Qual frase aplica corretamente essa regra?',
    explanation: 'Expressões explicativas devem ser isoladas por vírgulas.',
    difficulty: 2,
    options: [
      {
        id: 20016,
        exercise_id: 2004,
        option_text: 'Ele trouxe vários doces, por exemplo brigadeiros e quindins.',
        is_correct: true,
        explanation: 'Correto. A expressão "por exemplo" está corretamente isolada por vírgulas (a segunda vírgula está implícita no ponto final, mas a primeira antes da expressão é crucial).'
      },
      {
        id: 20017,
        exercise_id: 2004,
        option_text: 'Gosto de frutas por exemplo, maçã e banana.',
        is_correct: false,
        explanation: 'Incorreto. Falta a vírgula antes de "por exemplo".'
      },
      {
        id: 20018,
        exercise_id: 2004,
        option_text: 'Precisamos de voluntários ou seja pessoas dispostas a ajudar.',
        is_correct: false,
        explanation: 'Incorreto. Falta a vírgula antes e depois de "ou seja".'
      },
      {
        id: 20019,
        exercise_id: 2004,
        option_text: 'Existem dois tipos isto é o bom e o mau.',
        is_correct: false,
        explanation: 'Incorreto. Falta a vírgula antes e depois de "isto é".'
      },
      {
        id: 20020,
        exercise_id: 2004,
        option_text: 'Alguns animais, a saber: cães e gatos, são domésticos.',
        is_correct: true,
        explanation: 'Correto. A expressão "a saber" está corretamente isolada. O uso dos dois pontos após "a saber" também é comum para introduzir enumerações.'
      }
    ]
  },
  {
    id: 2005,
    category_id: 'virgula-2',
    question: 'Na frase "Estudou muito, portanto, deve passar", a vírgula após "portanto" está:',
    explanation: 'As conjunções conclusivas, quando deslocadas, ficam entre vírgulas.',
    difficulty: 2,
    options: [
      {
        id: 20021,
        exercise_id: 2005,
        option_text: 'Correta, pois isola a conjunção conclusiva intercalada.',
        is_correct: true,
        explanation: 'Correto. Conjunções conclusivas e adversativas, quando deslocadas do início da oração, ficam entre vírgulas.'
      },
      {
        id: 20022,
        exercise_id: 2005,
        option_text: 'Incorreta, pois conjunções nunca são seguidas por vírgula.',
        is_correct: false,
        explanation: 'Incorreto. Conjunções deslocadas ou intercaladas podem ser seguidas por vírgula.'
      },
      {
        id: 20023,
        exercise_id: 2005,
        option_text: 'Correta, pois separa o sujeito do predicado.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula não está separando sujeito e predicado.'
      },
      {
        id: 20024,
        exercise_id: 2005,
        option_text: 'Incorreta, pois "portanto" não exige vírgula.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula antes de "portanto" é necessária, e a vírgula depois é usada quando a conjunção está intercalada ou deslocada.'
      },
      {
        id: 20025,
        exercise_id: 2005,
        option_text: 'Correta, pois indica uma pausa longa.',
        is_correct: false,
        explanation: 'Incorreto. A função da vírgula é sintática, não primariamente de pausa.'
      }
    ]
  },
  {
    id: 2006,
    category_id: 'virgula-2',
    question: 'Qual frase usa a vírgula para separar orações coordenadas assindéticas (sem conjunção)?',
    explanation: 'Orações coordenadas assindéticas são separadas por vírgulas.',
    difficulty: 2,
    options: [
      {
        id: 20026,
        exercise_id: 2006,
        option_text: 'Vim, vi, venci.',
        is_correct: true,
        explanation: 'Correto. As três orações ("Vim", "vi", "venci") são coordenadas e estão ligadas apenas por vírgulas.'
      },
      {
        id: 20027,
        exercise_id: 2006,
        option_text: 'Ele trabalha e estuda.',
        is_correct: false,
        explanation: 'Incorreto. As orações estão ligadas pela conjunção "e".'
      },
      {
        id: 20028,
        exercise_id: 2006,
        option_text: 'Quero ir, mas não posso.',
        is_correct: false,
        explanation: 'Incorreto. As orações estão ligadas pela conjunção "mas".'
      },
      {
        id: 20029,
        exercise_id: 2006,
        option_text: 'Chegue cedo, pois a reunião é importante.',
        is_correct: false,
        explanation: 'Incorreto. As orações estão ligadas pela conjunção "pois".'
      },
      {
        id: 20030,
        exercise_id: 2006,
        option_text: 'O livro, que li ontem, é ótimo.',
        is_correct: false,
        explanation: 'Incorreto. As vírgulas isolam uma oração subordinada adjetiva explicativa.'
      }
    ]
  },
  {
    id: 2007,
    category_id: 'virgula-2',
    question: 'Em "O trabalho exige atenção, dedicação, esforço e, sobretudo, paciência", as vírgulas são usadas para:',
    explanation: 'As vírgulas em enumerações e expressões intercaladas servem a propósitos diferentes.',
    difficulty: 2,
    options: [
      {
        id: 20031,
        exercise_id: 2007,
        option_text: 'Separar itens de uma enumeração e isolar uma expressão explicativa/retificativa.',
        is_correct: true,
        explanation: 'Correto. As primeiras vírgulas separam os substantivos enumerados, e as vírgulas em torno de "sobretudo" isolam essa expressão adverbial intercalada.'
      },
      {
        id: 20032,
        exercise_id: 2007,
        option_text: 'Apenas separar itens de uma enumeração.',
        is_correct: false,
        explanation: 'Incorreto. Há também o isolamento da expressão "sobretudo".'
      },
      {
        id: 20033,
        exercise_id: 2007,
        option_text: 'Apenas isolar uma expressão explicativa.',
        is_correct: false,
        explanation: 'Incorreto. Há também a separação dos itens enumerados.'
      },
      {
        id: 20034,
        exercise_id: 2007,
        option_text: 'Separar orações coordenadas.',
        is_correct: false,
        explanation: 'Incorreto. A estrutura principal é uma enumeração de substantivos.'
      },
      {
        id: 20035,
        exercise_id: 2007,
        option_text: 'Isolar vocativos.',
        is_correct: false,
        explanation: 'Incorreto. Não há vocativos na frase.'
      }
    ]
  },
  {
    id: 2008,
    category_id: 'virgula-2',
    question: 'Quando a conjunção "pois" é explicativa (equivalente a "porque"), ela vem precedida de vírgula. Quando é conclusiva (equivalente a "portanto"), vem após vírgula e, geralmente, seguida por outra. Qual frase usa "pois" como explicativa?',
    explanation: 'A conjunção "pois" tem usos diferentes dependendo de sua posição na frase.',
    difficulty: 2,
    options: [
      {
        id: 20036,
        exercise_id: 2008,
        option_text: 'Estude bastante, pois o exame será difícil.',
        is_correct: true,
        explanation: 'Correto. "pois" aqui introduz a explicação do motivo para estudar bastante, sendo precedido por vírgula.'
      },
      {
        id: 20037,
        exercise_id: 2008,
        option_text: 'Ele se esforçou muito; não foi aprovado, pois.',
        is_correct: false,
        explanation: 'Incorreto. Aqui "pois" está deslocado para o final, com valor conclusivo (ou de confirmação), e deveria vir entre vírgulas ou após ponto e vírgula.'
      },
      {
        id: 20038,
        exercise_id: 2008,
        option_text: 'O time jogou mal; foi derrotado, pois.',
        is_correct: false,
        explanation: 'Incorreto. Similar ao anterior, "pois" é conclusivo e deslocado.'
      },
      {
        id: 20039,
        exercise_id: 2008,
        option_text: 'Não compareceu à reunião; estava doente, pois.',
        is_correct: false,
        explanation: 'Incorreto. Novamente, "pois" conclusivo e deslocado.'
      },
      {
        id: 20040,
        exercise_id: 2008,
        option_text: 'Ele estudou; deve, pois, passar no teste.',
        is_correct: false,
        explanation: 'Incorreto. Aqui "pois" é conclusivo e está intercalado entre vírgulas.'
      }
    ]
  },
  {
    id: 2009,
    category_id: 'virgula-2',
    question: 'Na frase "Trouxe tudo de que precisava: o caderno, que estava sobre a mesa; a caneta, que peguei emprestada; e o livro, que comprei ontem", por que se usa ponto e vírgula?',
    explanation: 'O ponto e vírgula é usado para separar itens de uma enumeração quando estes já possuem vírgulas internas.',
    difficulty: 2,
    options: [
      {
        id: 20041,
        exercise_id: 2009,
        option_text: 'Para separar orações com sujeitos diferentes.',
        is_correct: false,
        explanation: 'Incorreto. O ponto e vírgula não tem essa função primária aqui.'
      },
      {
        id: 20042,
        exercise_id: 2009,
        option_text: 'Para separar itens de uma enumeração que já contêm vírgulas internamente.',
        is_correct: true,
        explanation: 'Correto. Os itens enumerados ("o caderno...", "a caneta...", "o livro...") já possuem vírgulas internas (isolando orações adjetivas), então o ponto e vírgula é usado para maior clareza na separação principal.'
      },
      {
        id: 20043,
        exercise_id: 2009,
        option_text: 'Para indicar uma pausa mais longa que a vírgula.',
        is_correct: false,
        explanation: 'Incorreto. Embora possa indicar uma pausa maior, a função principal aqui é estrutural, devido às vírgulas internas.'
      },
      {
        id: 20044,
        exercise_id: 2009,
        option_text: 'Para substituir a conjunção "e".',
        is_correct: false,
        explanation: 'Incorreto. O "e" ainda está presente antes do último item.'
      },
      {
        id: 20045,
        exercise_id: 2009,
        option_text: 'Para isolar um aposto muito longo.',
        is_correct: false,
        explanation: 'Incorreto. O ponto e vírgula separa os itens principais da enumeração.'
      }
    ]
  },
  {
    id: 2010,
    category_id: 'virgula-2',
    question: 'Qual frase usa a vírgula incorretamente em relação às estruturas coordenadas?',
    explanation: 'Identificar o uso incorreto da vírgula em estruturas coordenadas.',
    difficulty: 2,
    options: [
      {
        id: 20046,
        exercise_id: 2010,
        option_text: 'Ele não veio, nem telefonou.',
        is_correct: false,
        explanation: 'Correto. A vírgula antes de "nem" (conjunção aditiva com valor negativo) é comum.'
      },
      {
        id: 20047,
        exercise_id: 2010,
        option_text: 'Ou você estuda, ou você trabalha.',
        is_correct: false,
        explanation: 'Correto. A vírgula pode ser usada para separar orações introduzidas por conjunções alternativas repetidas ("ou...ou").'
      },
      {
        id: 20048,
        exercise_id: 2010,
        option_text: 'Trabalhou o dia todo, e ainda estava disposto.',
        is_correct: false,
        explanation: 'Correto. A vírgula antes de "e" pode ser usada para dar ênfase ou quando as orações têm certa independência.'
      },
      {
        id: 20049,
        exercise_id: 2010,
        option_text: 'Chegou em casa, e foi dormir.',
        is_correct: true,
        explanation: 'Incorreto. Regra geral, não se usa vírgula antes de "e" quando o sujeito é o mesmo e as ações são sequenciais e curtas.'
      },
      {
        id: 20050,
        exercise_id: 2010,
        option_text: 'Estava cansado, porém continuou a caminhada.',
        is_correct: false,
        explanation: 'Correto. A vírgula antes da conjunção adversativa "porém" está correta.'
      }
    ]
  }
];

// Exercícios do módulo Vírgula 3
export const virgulaExercicio3: Exercise[] = [
  {
    id: 3001,
    category_id: 'virgula-3',
    question: 'Qual frase contém um aposto explicativo corretamente isolado por vírgulas?',
    explanation: 'O aposto explicativo deve ser isolado por vírgulas para adicionar informações sobre um termo anterior.',
    difficulty: 3,
    options: [
      {
        id: 30001,
        exercise_id: 3001,
        option_text: 'O rio Amazonas, o maior do mundo em volume de água é fascinante.',
        is_correct: false,
        explanation: 'Incorreto. Falta a segunda vírgula após "água" para isolar o aposto.'
      },
      {
        id: 30002,
        exercise_id: 3001,
        option_text: 'Machado de Assis, grande escritor brasileiro, nasceu no Rio de Janeiro.',
        is_correct: true,
        explanation: 'Correto. "grande escritor brasileiro" é um aposto que explica "Machado de Assis" e está entre vírgulas.'
      },
      {
        id: 30003,
        exercise_id: 3001,
        option_text: 'Meu irmão, Pedro, viajou ontem.',
        is_correct: false,
        explanation: 'Incorreto. Embora esteja pontuado corretamente, a primeira opção já demonstra o uso correto do aposto explicativo.'
      },
      {
        id: 30004,
        exercise_id: 3001,
        option_text: 'A Lua, satélite natural da Terra reflete a luz do Sol.',
        is_correct: false,
        explanation: 'Incorreto. Falta a vírgula após "Terra" para isolar o aposto.'
      },
      {
        id: 30005,
        exercise_id: 3001,
        option_text: 'Gosto de frutas, banana, maçã, laranja.',
        is_correct: false,
        explanation: 'Incorreto. As vírgulas separam itens de uma enumeração, não um aposto explicativo.'
      }
    ]
  },
  {
    id: 3002,
    category_id: 'virgula-3',
    question: 'Em qual das alternativas o termo destacado NÃO é um aposto explicativo?',
    explanation: 'Identificar quando um termo não funciona como aposto explicativo na frase.',
    difficulty: 3,
    options: [
      {
        id: 30006,
        exercise_id: 3002,
        option_text: 'O cão, melhor amigo do homem, é leal.',
        is_correct: false,
        explanation: 'Incorreto. "melhor amigo do homem" é um aposto que explica "O cão".'
      },
      {
        id: 30007,
        exercise_id: 3002,
        option_text: 'Comprei vários itens: pão, leite, ovos.',
        is_correct: true,
        explanation: 'Correto. "pão, leite, ovos" é um aposto enumerativo, não um aposto explicativo isolado por vírgulas.'
      },
      {
        id: 30008,
        exercise_id: 3002,
        option_text: 'Pelé, o rei do futebol, encantou o mundo.',
        is_correct: false,
        explanation: 'Incorreto. "o rei do futebol" é um aposto que explica "Pelé".'
      },
      {
        id: 30009,
        exercise_id: 3002,
        option_text: 'A biologia, ciência que estuda a vida, é complexa.',
        is_correct: false,
        explanation: 'Incorreto. "ciência que estuda a vida" é um aposto que explica "A biologia".'
      },
      {
        id: 30010,
        exercise_id: 3002,
        option_text: 'São Paulo, a maior cidade do Brasil, nunca para.',
        is_correct: false,
        explanation: 'Incorreto. "a maior cidade do Brasil" é um aposto que explica "São Paulo".'
      }
    ]
  },
  {
    id: 3003,
    category_id: 'virgula-3',
    question: 'Assinale a frase em que a vírgula isola um aposto, e não um vocativo.',
    explanation: 'Diferenciar o uso da vírgula para isolar aposto de seu uso com vocativo.',
    difficulty: 3,
    options: [
      {
        id: 30011,
        exercise_id: 3003,
        option_text: 'Ó Deus, ajudai-me!',
        is_correct: false,
        explanation: 'Incorreto. "Ó Deus" é um vocativo (chamamento).'
      },
      {
        id: 30012,
        exercise_id: 3003,
        option_text: 'Colegas, vamos começar a reunião.',
        is_correct: false,
        explanation: 'Incorreto. "Colegas" é um vocativo.'
      },
      {
        id: 30013,
        exercise_id: 3003,
        option_text: 'O relatório, documento essencial, foi entregue.',
        is_correct: true,
        explanation: 'Correto. "documento essencial" explica o que é "O relatório", sendo um aposto.'
      },
      {
        id: 30014,
        exercise_id: 3003,
        option_text: 'Responda, Carlos, por favor.',
        is_correct: false,
        explanation: 'Incorreto. "Carlos" é um vocativo.'
      },
      {
        id: 30015,
        exercise_id: 3003,
        option_text: 'Amigo, que bom te ver!',
        is_correct: false,
        explanation: 'Incorreto. "Amigo" é um vocativo.'
      }
    ]
  },
  {
    id: 3004,
    category_id: 'virgula-3',
    question: 'Na frase "D. Pedro I, proclamador da Independência, teve um papel crucial na história", a expressão "proclamador da Independência" funciona como:',
    explanation: 'Identificar a função sintática do termo entre vírgulas na frase.',
    difficulty: 3,
    options: [
      {
        id: 30016,
        exercise_id: 3004,
        option_text: 'Sujeito da oração.',
        is_correct: false,
        explanation: 'Incorreto. O sujeito é "D. Pedro I".'
      },
      {
        id: 30017,
        exercise_id: 3004,
        option_text: 'Vocativo.',
        is_correct: false,
        explanation: 'Incorreto. Não é um chamamento.'
      },
      {
        id: 30018,
        exercise_id: 3004,
        option_text: 'Aposto explicativo.',
        is_correct: true,
        explanation: 'Correto. Explica uma característica ou título de "D. Pedro I".'
      },
      {
        id: 30019,
        exercise_id: 3004,
        option_text: 'Predicativo do sujeito.',
        is_correct: false,
        explanation: 'Incorreto. Não está ligado ao sujeito por um verbo de ligação.'
      },
      {
        id: 30020,
        exercise_id: 3004,
        option_text: 'Adjunto adverbial.',
        is_correct: false,
        explanation: 'Incorreto. Não indica uma circunstância da ação verbal.'
      }
    ]
  },
  {
    id: 3005,
    category_id: 'virgula-3',
    question: 'Qual frase utiliza corretamente as vírgulas para isolar uma expressão explicativa como "isto é" ou "ou seja"?',
    explanation: 'Expressões explicativas devem ser corretamente isoladas por vírgulas.',
    difficulty: 3,
    options: [
      {
        id: 30021,
        exercise_id: 3005,
        option_text: 'Ele é poliglota, ou seja fala várias línguas.',
        is_correct: false,
        explanation: 'Incorreto. Falta a vírgula após "ou seja".'
      },
      {
        id: 30022,
        exercise_id: 3005,
        option_text: 'Precisamos de uma solução, isto é, um plano de ação.',
        is_correct: true,
        explanation: 'Correto. A expressão "isto é" está corretamente isolada por vírgulas.'
      },
      {
        id: 30023,
        exercise_id: 3005,
        option_text: 'Existem dois caminhos a saber o da direita e o da esquerda.',
        is_correct: false,
        explanation: 'Incorreto. Falta a vírgula antes e depois de "a saber".'
      },
      {
        id: 30024,
        exercise_id: 3005,
        option_text: 'Comprei o necessário por exemplo, comida e bebida.',
        is_correct: false,
        explanation: 'Incorreto. Falta a vírgula antes de "por exemplo".'
      },
      {
        id: 30025,
        exercise_id: 3005,
        option_text: 'Ela visitou muitos países, como por exemplo, França e Itália.',
        is_correct: false,
        explanation: 'Incorreto. A expressão "como por exemplo" geralmente não é usada; prefira "por exemplo" com vírgulas.'
      }
    ]
  },
  {
    id: 3006,
    category_id: 'virgula-3',
    question: 'Identifique a frase em que o termo entre vírgulas NÃO funciona como aposto explicativo.',
    explanation: 'Reconhecer quando um termo entre vírgulas não é um aposto explicativo.',
    difficulty: 3,
    options: [
      {
        id: 30026,
        exercise_id: 3006,
        option_text: 'O livro, que estava na estante, caiu.',
        is_correct: true,
        explanation: 'Correto. "que estava na estante" é uma oração subordinada adjetiva explicativa, não um aposto nominal.'
      },
      {
        id: 30027,
        exercise_id: 3006,
        option_text: 'Júpiter, o maior planeta do sistema solar, tem muitas luas.',
        is_correct: false,
        explanation: 'Incorreto. "o maior planeta do sistema solar" é um aposto explicativo.'
      },
      {
        id: 30028,
        exercise_id: 3006,
        option_text: 'Meu pai, engenheiro aposentado, adora pescar.',
        is_correct: false,
        explanation: 'Incorreto. "engenheiro aposentado" é um aposto explicativo.'
      },
      {
        id: 30029,
        exercise_id: 3006,
        option_text: 'A Terra, nosso lar, precisa de cuidados.',
        is_correct: false,
        explanation: 'Incorreto. "nosso lar" é um aposto explicativo.'
      },
      {
        id: 30030,
        exercise_id: 3006,
        option_text: 'Marta, a aluna mais dedicada, tirou nota máxima.',
        is_correct: false,
        explanation: 'Incorreto. "a aluna mais dedicada" é um aposto explicativo.'
      }
    ]
  },
  {
    id: 3007,
    category_id: 'virgula-3',
    question: 'Qual a pontuação correta para o aposto no final da frase?',
    explanation: 'Identificar a pontuação adequada para um aposto no final da oração.',
    difficulty: 3,
    options: [
      {
        id: 30031,
        exercise_id: 3007,
        option_text: 'Conheci Joana, a irmã do meu amigo.',
        is_correct: true,
        explanation: 'Correto. O aposto "a irmã do meu amigo" vem no final, precedido por vírgula.'
      },
      {
        id: 30032,
        exercise_id: 3007,
        option_text: 'Conheci Joana a irmã do meu amigo.',
        is_correct: false,
        explanation: 'Incorreto. Falta a vírgula antes do aposto.'
      },
      {
        id: 30033,
        exercise_id: 3007,
        option_text: 'Conheci Joana: a irmã do meu amigo.',
        is_correct: false,
        explanation: 'Incorreto. Dois pontos são usados para apostos enumerativos, não para um aposto explicativo simples.'
      },
      {
        id: 30034,
        exercise_id: 3007,
        option_text: 'Conheci Joana - a irmã do meu amigo.',
        is_correct: false,
        explanation: 'Incorreto. O travessão pode ser usado, mas a vírgula é mais comum e preferível aqui.'
      },
      {
        id: 30035,
        exercise_id: 3007,
        option_text: 'Conheci, Joana, a irmã do meu amigo.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula antes de "Joana" está incorreta.'
      }
    ]
  },
  {
    id: 3008,
    category_id: 'virgula-3',
    question: '"O carro, um modelo antigo, ainda funciona bem." Nesta frase, o aposto "um modelo antigo" está:',
    explanation: 'Identificar a posição do aposto na estrutura da frase.',
    difficulty: 3,
    options: [
      {
        id: 30036,
        exercise_id: 3008,
        option_text: 'No início da frase.',
        is_correct: false,
        explanation: 'Incorreto. O aposto está no meio.'
      },
      {
        id: 30037,
        exercise_id: 3008,
        option_text: 'No final da frase.',
        is_correct: false,
        explanation: 'Incorreto. O aposto está no meio.'
      },
      {
        id: 30038,
        exercise_id: 3008,
        option_text: 'Intercalado na frase, isolado por vírgulas.',
        is_correct: true,
        explanation: 'Correto. O aposto está entre o sujeito e o predicado, corretamente isolado por duas vírgulas.'
      },
      {
        id: 30039,
        exercise_id: 3008,
        option_text: 'Ligado ao sujeito sem vírgulas.',
        is_correct: false,
        explanation: 'Incorreto. O aposto explicativo intercalado requer vírgulas.'
      },
      {
        id: 30040,
        exercise_id: 3008,
        option_text: 'Separado por ponto e vírgula.',
        is_correct: false,
        explanation: 'Incorreto. Ponto e vírgula não é usado para isolar este tipo de aposto.'
      }
    ]
  },
  {
    id: 3009,
    category_id: 'virgula-3',
    question: 'Em qual alternativa a expressão entre vírgulas NÃO é um aposto?',
    explanation: 'Identificar quando um termo entre vírgulas não é um aposto explicativo.',
    difficulty: 3,
    options: [
      {
        id: 30041,
        exercise_id: 3009,
        option_text: 'O atleta, exausto, desistiu da prova.',
        is_correct: true,
        explanation: 'Correto. "Exausto" é um predicativo do sujeito deslocado, não um aposto.'
      },
      {
        id: 30042,
        exercise_id: 3009,
        option_text: 'O Nilo, rio africano famoso, é vital para o Egito.',
        is_correct: false,
        explanation: 'Incorreto. "rio africano famoso" é um aposto explicativo.'
      },
      {
        id: 30043,
        exercise_id: 3009,
        option_text: 'Fernando Pessoa, poeta português, escreveu "Mensagem".',
        is_correct: false,
        explanation: 'Incorreto. "poeta português" é um aposto explicativo.'
      },
      {
        id: 30044,
        exercise_id: 3009,
        option_text: 'Aquele prédio, o mais alto da cidade, será demolido.',
        is_correct: false,
        explanation: 'Incorreto. "o mais alto da cidade" é um aposto explicativo.'
      },
      {
        id: 30045,
        exercise_id: 3009,
        option_text: 'Comprei um presente para Maria, minha prima.',
        is_correct: false,
        explanation: 'Incorreto. "minha prima" é um aposto que especifica quem é Maria.'
      }
    ]
  },
  {
    id: 3010,
    category_id: 'virgula-3',
    question: 'Assinale a opção que usa corretamente a vírgula com a expressão explicativa "a saber".',
    explanation: 'Expressões explicativas como "a saber" devem ser corretamente pontuadas.',
    difficulty: 3,
    options: [
      {
        id: 30046,
        exercise_id: 3010,
        option_text: 'Ele tem dois objetivos a saber, passar no concurso e viajar.',
        is_correct: false,
        explanation: 'Incorreto. Falta a vírgula antes de "a saber".'
      },
      {
        id: 30047,
        exercise_id: 3010,
        option_text: 'Ele tem dois objetivos, a saber passar no concurso e viajar.',
        is_correct: false,
        explanation: 'Incorreto. Falta a vírgula ou dois pontos depois de "a saber".'
      },
      {
        id: 30048,
        exercise_id: 3010,
        option_text: 'Ele tem dois objetivos, a saber: passar no concurso e viajar.',
        is_correct: true,
        explanation: 'Correto. A expressão "a saber" está isolada por vírgula antes e seguida por dois pontos para introduzir a enumeração explicativa.'
      },
      {
        id: 30049,
        exercise_id: 3010,
        option_text: 'Ele tem dois objetivos a saber: passar no concurso e viajar.',
        is_correct: false,
        explanation: 'Incorreto. Falta a vírgula antes de "a saber".'
      },
      {
        id: 30050,
        exercise_id: 3010,
        option_text: 'Ele tem, dois objetivos, a saber, passar no concurso e viajar.',
        is_correct: false,
        explanation: 'Incorreto. As vírgulas em torno de "dois objetivos" estão incorretas.'
      }
    ]
  },
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
    question: 'Qual frase utiliza corretamente a vírgula para separar orações coordenadas ligadas pela conjunção "e" com sujeitos diferentes?',
    explanation: 'A vírgula é usada antes da conjunção "e" quando as orações coordenadas têm sujeitos diferentes.',
    difficulty: 3,
    options: [
      {
        id: 40001,
        exercise_id: 4001,
        option_text: 'O professor explicou a matéria e os alunos fizeram perguntas.',
        is_correct: true,
        explanation: 'Correto. Os sujeitos são diferentes ("O professor" e "os alunos"), justificando a vírgula antes do "e".'
      },
      {
        id: 40002,
        exercise_id: 4001,
        option_text: 'Ele levantou e saiu da sala.',
        is_correct: false,
        explanation: 'Incorreto. O sujeito é o mesmo ("Ele"), geralmente não se usa vírgula antes do "e" neste caso.'
      },
      {
        id: 40003,
        exercise_id: 4001,
        option_text: 'A chuva caiu forte e, o vento soprou com intensidade.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula após o "e" está incorreta.'
      },
      {
        id: 40004,
        exercise_id: 4001,
        option_text: 'Compramos frutas e legumes.',
        is_correct: false,
        explanation: 'Incorreto. "e" liga termos da mesma função (objetos diretos), não orações com sujeitos diferentes.'
      },
      {
        id: 40005,
        exercise_id: 4001,
        option_text: 'O cão latiu, e correu atrás do gato.',
        is_correct: false,
        explanation: 'Incorreto. O sujeito é o mesmo ("O cão").'
      }
    ]
  },
  {
    id: 4002,
    category_id: 'virgula-4',
    question: 'Em "Ele queria viajar, mas não tinha dinheiro", a vírgula antes de "mas" indica que a segunda oração é:',
    explanation: 'A vírgula antes de "mas" separa orações coordenadas sindéticas adversativas.',
    difficulty: 3,
    options: [
      {
        id: 40006,
        exercise_id: 4002,
        option_text: 'Uma oração explicativa.',
        is_correct: false,
        explanation: 'Incorreto. Não é uma explicação, mas uma oposição.'
      },
      {
        id: 40007,
        exercise_id: 4002,
        option_text: 'Uma oração coordenada sindética adversativa.',
        is_correct: true,
        explanation: 'Correto. "mas" introduz uma ideia oposta (adversativa) e a vírgula separa as duas orações.'
      },
      {
        id: 40008,
        exercise_id: 4002,
        option_text: 'Um aposto explicativo.',
        is_correct: false,
        explanation: 'Incorreto. Não é um aposto, é uma oração coordenada.'
      },
      {
        id: 40009,
        exercise_id: 4002,
        option_text: 'Uma oração subordinada adjetiva.',
        is_correct: false,
        explanation: 'Incorreto. Não há pronome relativo ou termo que caracterize uma subordinação.'
      },
      {
        id: 40010,
        exercise_id: 4002,
        option_text: 'Um adjunto adverbial.',
        is_correct: false,
        explanation: 'Incorreto. É uma oração completa, não um adjunto.'
      }
    ]
  },
  {
    id: 4003,
    category_id: 'virgula-4',
    question: 'Qual frase apresenta uma intercalação (termo ou oração inserida) corretamente isolada por vírgulas?',
    explanation: 'Intercalações devem ser corretamente isoladas por vírgulas para melhor clareza do texto.',
    difficulty: 3,
    options: [
      {
        id: 40011,
        exercise_id: 4003,
        option_text: 'O livro, sem dúvida é muito interessante.',
        is_correct: false,
        explanation: 'Incorreto. Falta a vírgula após "dúvida" para isolar a expressão intercalada.'
      },
      {
        id: 40012,
        exercise_id: 4003,
        option_text: 'Os políticos, em geral, buscam o poder.',
        is_correct: true,
        explanation: 'Correto. A expressão adverbial "em geral" está intercalada e corretamente isolada por vírgulas.'
      },
      {
        id: 40013,
        exercise_id: 4003,
        option_text: 'Ele disse que, viria mais tarde.',
        is_correct: false,
        explanation: 'Incorreto. Não se usa vírgula entre a conjunção integrante "que" e a oração subordinada.'
      },
      {
        id: 40014,
        exercise_id: 4003,
        option_text: 'A casa, onde nasci foi vendida.',
        is_correct: false,
        explanation: 'Incorreto. Falta a vírgula após "nasci" para isolar a oração adjetiva explicativa intercalada.'
      },
      {
        id: 40015,
        exercise_id: 4003,
        option_text: 'Todos, exceto João foram à festa.',
        is_correct: false,
        explanation: 'Incorreto. Falta a vírgula após "João" para isolar a expressão "exceto João".'
      }
    ]
  },
  {
    id: 4004,
    category_id: 'virgula-4',
    question: 'Na frase "Estude, pois a prova está chegando", a vírgula antes de "pois" indica que a segunda oração é:',
    explanation: 'A vírgula antes de "pois" separa orações coordenadas explicativas.',
    difficulty: 3,
    options: [
      {
        id: 40016,
        exercise_id: 4004,
        option_text: 'Coordenada sindética aditiva.',
        is_correct: false,
        explanation: 'Incorreto. "pois" não expressa adição aqui.'
      },
      {
        id: 40017,
        exercise_id: 4004,
        option_text: 'Coordenada sindética adversativa.',
        is_correct: false,
        explanation: 'Incorreto. "pois" não expressa oposição.'
      },
      {
        id: 40018,
        exercise_id: 4004,
        option_text: 'Coordenada sindética explicativa.',
        is_correct: true,
        explanation: 'Correto. "pois" introduz uma explicação para a ordem dada na primeira oração.'
      },
      {
        id: 40019,
        exercise_id: 4004,
        option_text: 'Coordenada sindética conclusiva.',
        is_correct: false,
        explanation: 'Incorreto. Para ser conclusiva, "pois" viria posposto ao verbo e entre vírgulas.'
      },
      {
        id: 40020,
        exercise_id: 4004,
        option_text: 'Coordenada assindética.',
        is_correct: false,
        explanation: 'Incorreto. Há a conjunção "pois".'
      }
    ]
  },
  {
    id: 4005,
    category_id: 'virgula-4',
    question: '"O diretor, creio eu, tomará a decisão correta." A expressão "creio eu" está entre vírgulas porque é:',
    explanation: 'Expressões intercaladas devem ser isoladas por vírgulas para melhor clareza do texto.',
    difficulty: 3,
    options: [
      {
        id: 40021,
        exercise_id: 4005,
        option_text: 'Um vocativo.',
        is_correct: false,
        explanation: 'Incorreto. Não é um chamamento.'
      },
      {
        id: 40022,
        exercise_id: 4005,
        option_text: 'Um aposto.',
        is_correct: false,
        explanation: 'Incorreto. Não explica "O diretor".'
      },
      {
        id: 40023,
        exercise_id: 4005,
        option_text: 'Uma oração intercalada.',
        is_correct: true,
        explanation: 'Correto. É uma oração (com verbo "crer") inserida na oração principal, expressando opinião.'
      },
      {
        id: 40024,
        exercise_id: 4005,
        option_text: 'Um adjunto adverbial.',
        is_correct: false,
        explanation: 'Incorreto. É uma estrutura oracional.'
      },
      {
        id: 40025,
        exercise_id: 4005,
        option_text: 'Um sujeito deslocado.',
        is_correct: false,
        explanation: 'Incorreto. Não é o sujeito da oração principal.'
      }
    ]
  },
  {
    id: 4006,
    category_id: 'virgula-4',
    question: 'Qual o uso correto da vírgula em orações coordenadas alternativas ("ou...ou", "ora...ora")?',
    explanation: 'Orações coordenadas alternativas devem ser corretamente pontuadas para indicar a alternância entre as ações.',
    difficulty: 3,
    options: [
      {
        id: 40026,
        exercise_id: 4006,
        option_text: 'Ora ele estuda ora ele trabalha.',
        is_correct: false,
        explanation: 'Incorreto. Falta a vírgula antes da segunda ocorrência da conjunção alternativa.'
      },
      {
        id: 40027,
        exercise_id: 4006,
        option_text: 'Ou chove, ou faz sol.',
        is_correct: true,
        explanation: 'Correto. A vírgula é usada para separar as orações coordenadas alternativas.'
      },
      {
        id: 40028,
        exercise_id: 4006,
        option_text: 'Quer ele queira, quer não ele virá.',
        is_correct: false,
        explanation: 'Incorreto. Falta a vírgula antes da segunda ocorrência de "quer".'
      },
      {
        id: 40029,
        exercise_id: 4006,
        option_text: 'Seja rico, seja pobre todos são iguais.',
        is_correct: false,
        explanation: 'Incorreto. Falta a vírgula antes da segunda ocorrência de "seja" e antes de "todos".'
      },
      {
        id: 40030,
        exercise_id: 4006,
        option_text: 'Ele estuda, ou trabalha.',
        is_correct: false,
        explanation: 'Incorreto. Quando "ou" não é repetido e tem valor de exclusão simples, a vírgula geralmente não é usada.'
      }
    ]
  },
  {
    id: 4007,
    category_id: 'virgula-4',
    question: '"Ele não compareceu à reunião; estava doente, pois." O uso do ponto e vírgula e das vírgulas com "pois" indica que a conjunção tem valor:',
    explanation: 'O valor semântico de "pois" varia conforme sua posição na oração e a pontuação utilizada.',
    difficulty: 3,
    options: [
      {
        id: 40031,
        exercise_id: 4007,
        option_text: 'Explicativo.',
        is_correct: false,
        explanation: 'Incorreto. A posição posposta e entre vírgulas (ou após ponto e vírgula) caracteriza o valor conclusivo.'
      },
      {
        id: 40032,
        exercise_id: 4007,
        option_text: 'Conclusivo.',
        is_correct: true,
        explanation: 'Correto. "pois" posposto ao verbo e isolado por pontuação indica conclusão (equivalente a "portanto").'
      },
      {
        id: 40033,
        exercise_id: 4007,
        option_text: 'Adversativo.',
        is_correct: false,
        explanation: 'Incorreto. Não indica oposição.'
      },
      {
        id: 40034,
        exercise_id: 4007,
        option_text: 'Aditivo.',
        is_correct: false,
        explanation: 'Incorreto. Não indica adição.'
      },
      {
        id: 40035,
        exercise_id: 4007,
        option_text: 'Alternativo.',
        is_correct: false,
        explanation: 'Incorreto. Não indica alternância.'
      }
    ]
  },
  {
    id: 4008,
    category_id: 'virgula-4',
    question: 'Em qual frase a intercalação NÃO está corretamente pontuada?',
    explanation: 'Identificar a frase em que a intercalação não está corretamente isolada por vírgulas.',
    difficulty: 3,
    options: [
      {
        id: 40036,
        exercise_id: 4008,
        option_text: 'A verdade, disse ele, sempre aparece.',
        is_correct: false,
        explanation: 'Incorreto. A oração intercalada "disse ele" está corretamente entre vírgulas.'
      },
      {
        id: 40037,
        exercise_id: 4008,
        option_text: 'Os resultados, infelizmente, não foram bons.',
        is_correct: false,
        explanation: 'Incorreto. O advérbio intercalado "infelizmente" está corretamente entre vírgulas.'
      },
      {
        id: 40038,
        exercise_id: 4008,
        option_text: 'Este livro, embora seja longo, vale a pena.',
        is_correct: false,
        explanation: 'Incorreto. A oração adverbial concessiva intercalada "embora seja longo" está corretamente entre vírgulas.'
      },
      {
        id: 40039,
        exercise_id: 4008,
        option_text: 'O homem que é mortal, deve aproveitar a vida.',
        is_correct: true,
        explanation: 'Correto (mal pontuada). A oração "que é mortal" é adjetiva restritiva, definindo qual homem. Orações restritivas não são isoladas por vírgulas.'
      },
      {
        id: 40040,
        exercise_id: 4008,
        option_text: 'Maria, minha querida amiga, chegou.',
        is_correct: false,
        explanation: 'Incorreto. O aposto intercalado "minha querida amiga" está corretamente entre vírgulas.'
      }
    ]
  },
  {
    id: 4009,
    category_id: 'virgula-4',
    question: '"Trabalhou muito, logo merece descanso." A vírgula antes de "logo" separa orações coordenadas sindéticas:',
    explanation: 'A vírgula antes de "logo" indica uma relação de consequência entre as orações.',
    difficulty: 3,
    options: [
      {
        id: 40041,
        exercise_id: 4009,
        option_text: 'Explicativas.',
        is_correct: false,
        explanation: 'Incorreto. "logo" indica consequência/conclusão, não explicação.'
      },
      {
        id: 40042,
        exercise_id: 4009,
        option_text: 'Adversativas.',
        is_correct: false,
        explanation: 'Incorreto. "logo" não indica oposição.'
      },
      {
        id: 40043,
        exercise_id: 4009,
        option_text: 'Conclusivas.',
        is_correct: true,
        explanation: 'Correto. "logo" é uma conjunção conclusiva.'
      },
      {
        id: 40044,
        exercise_id: 4009,
        option_text: 'Aditivas.',
        is_correct: false,
        explanation: 'Incorreto. "logo" não indica adição.'
      },
      {
        id: 40045,
        exercise_id: 4009,
        option_text: 'Alternativas.',
        is_correct: false,
        explanation: 'Incorreto. "logo" não indica alternância.'
      }
    ]
  },
  {
    id: 4010,
    category_id: 'virgula-4',
    question: 'Qual frase usa a vírgula corretamente para isolar um adjunto adverbial intercalado?',
    explanation: 'Adjuntos adverbiais intercalados devem ser corretamente isolados por vírgulas.',
    difficulty: 3,
    options: [
      {
        id: 40046,
        exercise_id: 4010,
        option_text: 'Ele chegou, ontem, atrasado.',
        is_correct: true,
        explanation: 'Correto. O adjunto adverbial de tempo "ontem" está intercalado e isolado por vírgulas.'
      },
      {
        id: 40047,
        exercise_id: 4010,
        option_text: 'O menino, correu rapidamente.',
        is_correct: false,
        explanation: 'Incorreto. Não se separa sujeito ("O menino") do predicado ("correu rapidamente") por vírgula.'
      },
      {
        id: 40048,
        exercise_id: 4010,
        option_text: 'Nós, fomos ao cinema no sábado.',
        is_correct: false,
        explanation: 'Incorreto. Não se separa sujeito ("Nós") do predicado ("fomos ao cinema no sábado") por vírgula.'
      },
      {
        id: 40049,
        exercise_id: 4010,
        option_text: 'A reunião, será amanhã de manhã.',
        is_correct: false,
        explanation: 'Incorreto. Não se separa sujeito ("A reunião") do predicado ("será amanhã de manhã") por vírgula.'
      },
      {
        id: 40050,
        exercise_id: 4010,
        option_text: 'Ela saiu, com pressa, da sala.',
        is_correct: true,
        explanation: 'Correto. O adjunto adverbial de modo "com pressa" está intercalado e isolado por vírgulas.'
      }
    ]
  },
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
  },
  {
    id: 5003,
    category_id: 'virgula-5',
    question: 'Em qual frase a vírgula é usada para indicar a elipse (omissão) de um verbo?',
    explanation: 'A vírgula pode ser usada para indicar a omissão de um verbo que já apareceu anteriormente na oração.',
    difficulty: 5,
    options: [
      {
        id: 50011,
        exercise_id: 5003,
        option_text: 'Ele prefere cinema; eu, teatro.',
        is_correct: true,
        explanation: 'Correto. A vírgula substitui o verbo "prefiro" (eu [prefiro] teatro).'
      },
      {
        id: 50012,
        exercise_id: 5003,
        option_text: 'Maria, venha jantar!',
        is_correct: false,
        explanation: 'Incorreto. A vírgula isola o vocativo "Maria".'
      },
      {
        id: 50013,
        exercise_id: 5003,
        option_text: 'Comprei livros, cadernos e canetas.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula separa itens de uma enumeração.'
      },
      {
        id: 50014,
        exercise_id: 5003,
        option_text: 'O menino, embora cansado, continuou.',
        is_correct: false,
        explanation: 'Incorreto. As vírgulas isolam uma oração concessiva intercalada.'
      },
      {
        id: 50015,
        exercise_id: 5003,
        option_text: 'São Paulo, 3 de junho de 2025.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula separa local e data.'
      }
    ]
  },
  {
    id: 5004,
    category_id: 'virgula-5',
    question: 'A vírgula pode ser usada para separar pleonasmos viciosos intencionais ou enfatizar repetições. Qual frase exemplifica isso?',
    explanation: 'A vírgula pode ser usada estilisticamente para dar ênfase a repetições intencionais ou pleonasmos.',
    difficulty: 5,
    options: [
      {
        id: 50016,
        exercise_id: 5004,
        option_text: 'Vi com meus próprios olhos a cena.',
        is_correct: true,
        explanation: 'Correto. A expressão "com meus próprios olhos" é pleonástica e poderia ser destacada com vírgulas para ênfase.'
      },
      {
        id: 50017,
        exercise_id: 5004,
        option_text: 'Subir para cima.',
        is_correct: false,
        explanation: 'Incorreto. Isso é um pleonasmo vicioso comum, mas não mostra o uso de vírgula.'
      },
      {
        id: 50018,
        exercise_id: 5004,
        option_text: 'Ele chegou, sentou, comeu.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula separa orações coordenadas assindéticas.'
      },
      {
        id: 50019,
        exercise_id: 5004,
        option_text: 'A casa, grande e espaçosa, era confortável.',
        is_correct: false,
        explanation: 'Incorreto. As vírgulas isolam um adjunto adnominal, não um pleonasmo.'
      },
      {
        id: 50020,
        exercise_id: 5004,
        option_text: 'Mar azul, céu azul, tudo azul.',
        is_correct: true,
        explanation: 'Correto. A repetição de "azul" é separada por vírgulas para dar ritmo e ênfase.'
      }
    ]
  },
  {
    id: 5005,
    category_id: 'virgula-5',
    question: 'Em provérbios ou frases de efeito, a vírgula pode marcar uma pausa rítmica ou separar ideias contrastantes. Qual alternativa exemplifica isso?',
    explanation: 'A vírgula em provérbios frequentemente marca uma pausa rítmica ou separa ideias contrastantes.',
    difficulty: 5,
    options: [
      {
        id: 50021,
        exercise_id: 5005,
        option_text: 'Casa de ferreiro, espeto de pau.',
        is_correct: true,
        explanation: 'Correto. A vírgula separa as duas partes contrastantes do provérbio.'
      },
      {
        id: 50022,
        exercise_id: 5005,
        option_text: 'Quem espera sempre alcança.',
        is_correct: false,
        explanation: 'Incorreto. Não há vírgula necessária neste provérbio.'
      },
      {
        id: 50023,
        exercise_id: 5005,
        option_text: 'Água mole em pedra dura, tanto bate até que fura.',
        is_correct: true,
        explanation: 'Correto. A vírgula separa a primeira parte da segunda, criando ritmo.'
      },
      {
        id: 50024,
        exercise_id: 5005,
        option_text: 'Devagar se vai ao longe.',
        is_correct: false,
        explanation: 'Incorreto. Não há vírgula necessária.'
      },
      {
        id: 50025,
        exercise_id: 5005,
        option_text: 'Mais vale um pássaro na mão, do que dois voando.',
        is_correct: true,
        explanation: 'Correto. A vírgula separa as duas partes da comparação/contraste.'
      }
    ]
  },
  {
    id: 5006,
    category_id: 'virgula-5',
    question: 'Qual o uso da vírgula na frase "Sim, eu aceito o convite"?',
    explanation: 'A vírgula é usada para separar palavras de afirmação/negação no início da frase.',
    difficulty: 5,
    options: [
      {
        id: 50026,
        exercise_id: 5006,
        option_text: 'Separar vocativo.',
        is_correct: false,
        explanation: 'Incorreto. "Sim" não é vocativo.'
      },
      {
        id: 50027,
        exercise_id: 5006,
        option_text: 'Isolar aposto.',
        is_correct: false,
        explanation: 'Incorreto. "Sim" não é aposto.'
      },
      {
        id: 50028,
        exercise_id: 5006,
        option_text: 'Separar palavras de afirmação/negação (sim, não) no início da frase.',
        is_correct: true,
        explanation: 'Correto. Palavras como "sim" e "não", quando iniciam a resposta, são separadas por vírgula.'
      },
      {
        id: 50029,
        exercise_id: 5006,
        option_text: 'Indicar elipse do verbo.',
        is_correct: false,
        explanation: 'Incorreto. Nenhum verbo está omitido.'
      },
      {
        id: 50030,
        exercise_id: 5006,
        option_text: 'Separar adjunto adverbial.',
        is_correct: false,
        explanation: 'Incorreto. "Sim" funciona como uma partícula de afirmação.'
      }
    ]
  },
  {
    id: 5007,
    category_id: 'virgula-5',
    question: 'Em "Rua da Consolação, 1000", a vírgula separa:',
    explanation: 'Em endereços, a vírgula é usada para separar o nome do logradouro do número do imóvel.',
    difficulty: 5,
    options: [
      {
        id: 50031,
        exercise_id: 5007,
        option_text: 'Local e data.',
        is_correct: false,
        explanation: 'Incorreto. Não é local e data.'
      },
      {
        id: 50032,
        exercise_id: 5007,
        option_text: 'Vocativo e restante da frase.',
        is_correct: false,
        explanation: 'Incorreto. Não há vocativo.'
      },
      {
        id: 50033,
        exercise_id: 5007,
        option_text: 'O nome do logradouro do número.',
        is_correct: true,
        explanation: 'Correto. Em endereços, usa-se vírgula para separar o nome da rua/avenida do número do imóvel.'
      },
      {
        id: 50034,
        exercise_id: 5007,
        option_text: 'Aposto explicativo.',
        is_correct: false,
        explanation: 'Incorreto. O número não explica o nome da rua.'
      },
      {
        id: 50035,
        exercise_id: 5007,
        option_text: 'Orações coordenadas.',
        is_correct: false,
        explanation: 'Incorreto. Não são orações.'
      }
    ]
  },
  {
    id: 5008,
    category_id: 'virgula-5',
    question: 'Na frase "O problema, Pedro, é que não temos tempo", as vírgulas isolam:',
    explanation: 'As vírgulas são usadas para isolar o vocativo intercalado na frase.',
    difficulty: 5,
    options: [
      {
        id: 50036,
        exercise_id: 5008,
        option_text: 'Um aposto.',
        is_correct: false,
        explanation: 'Incorreto. "Pedro" não explica "O problema".'
      },
      {
        id: 50037,
        exercise_id: 5008,
        option_text: 'Um vocativo intercalado.',
        is_correct: true,
        explanation: 'Correto. "Pedro" é a pessoa a quem se dirige a fala, intercalado na frase.'
      },
      {
        id: 50038,
        exercise_id: 5008,
        option_text: 'Uma oração intercalada.',
        is_correct: false,
        explanation: 'Incorreto. "Pedro" é um substantivo (nome), não uma oração.'
      },
      {
        id: 50039,
        exercise_id: 5008,
        option_text: 'Um adjunto adverbial.',
        is_correct: false,
        explanation: 'Incorreto. "Pedro" não indica circunstância.'
      },
      {
        id: 50040,
        exercise_id: 5008,
        option_text: 'O sujeito da oração.',
        is_correct: false,
        explanation: 'Incorreto. O sujeito é "O problema".'
      }
    ]
  },
  {
    id: 5009,
    category_id: 'virgula-5',
    question: 'Qual frase usa a vírgula para separar o nome de uma obra do seu autor?',
    explanation: 'A vírgula pode ser usada para separar o título de uma obra do nome do autor, embora não seja a forma mais comum.',
    difficulty: 5,
    options: [
      {
        id: 50041,
        exercise_id: 5009,
        option_text: 'Li "Dom Casmurro", Machado de Assis.',
        is_correct: true,
        explanation: 'Correto. Embora não seja a forma mais padrão, a vírgula pode ser usada para separar título e autor.'
      },
      {
        id: 50042,
        exercise_id: 5009,
        option_text: 'Machado de Assis, escreveu "Dom Casmurbo".',
        is_correct: false,
        explanation: 'Incorreto. A vírgula separa o sujeito do predicado, o que está incorreto.'
      },
      {
        id: 50043,
        exercise_id: 5009,
        option_text: '"Dom Casmurro" - Machado de Assis.',
        is_correct: false,
        explanation: 'Incorreto. O travessão é uma alternativa, mas a questão pede vírgula.'
      },
      {
        id: 50044,
        exercise_id: 5009,
        option_text: '"Dom Casmurro" (Machado de Assis).',
        is_correct: false,
        explanation: 'Incorreto. Usa parênteses, não vírgula.'
      },
      {
        id: 50045,
        exercise_id: 5009,
        option_text: 'O livro "Dom Casmurro", é de Machado de Assis.',
        is_correct: false,
        explanation: 'Incorreto. A vírgula após o título está incorreta.'
      }
    ]
  },
  {
    id: 5010,
    category_id: 'virgula-5',
    question: 'Em assinaturas de cartas ou documentos, como "Atenciosamente, João Silva", a vírgula separa:',
    explanation: 'Em assinaturas de correspondência, a vírgula separa a expressão de cortesia (despedida) da assinatura (nome).',
    difficulty: 5,
    options: [
      {
        id: 50046,
        exercise_id: 5010,
        option_text: 'O vocativo da despedida.',
        is_correct: false,
        explanation: 'Incorreto. Não há vocativo na assinatura.'
      },
      {
        id: 50047,
        exercise_id: 5010,
        option_text: 'A fórmula de despedida do nome do remetente.',
        is_correct: true,
        explanation: 'Correto. A vírgula separa a expressão de cortesia (despedida) da assinatura (nome).'
      },
      {
        id: 50048,
        exercise_id: 5010,
        option_text: 'Local e data.',
        is_correct: false,
        explanation: 'Incorreto. Local e data vêm antes da assinatura, não são separados por vírgula.'
      },
      {
        id: 50049,
        exercise_id: 5010,
        option_text: 'Aposto e termo principal.',
        is_correct: false,
        explanation: 'Incorreto. Não há aposto na assinatura.'
      },
      {
        id: 50050,
        exercise_id: 5010,
        option_text: 'Sujeito e predicado.',
        is_correct: false,
        explanation: 'Incorreto. A assinatura não é uma oração com sujeito e predicado.'
      }
    ]
  }
];

// Função para obter exercícios por categoria
export async function getVirgulaExercises(categoryId: string): Promise<Exercise[]> {
  // Retornar exercícios conforme a categoria solicitada
  switch(categoryId) {
    case 'virgula':
      return [...virgulaExercicio1];
    case 'virgula-2':
      return [...virgulaExercicio2];
    case 'virgula-3':
      return [...virgulaExercicio3];
    case 'virgula-4':
      return [...virgulaExercicio4];
    case 'virgula-5':
      return [...virgulaExercicio5];
    default:
      return [];
  }
}
