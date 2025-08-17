import { Exercise } from './exerciseService';

// Questões adicionais para a prova final de Parênteses (25 questões adicionais)
export const additionalProvaParenteses: Exercise[] = [
  {
    id: 7506,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma citação?',
    explanation: 'Os parênteses podem ser usados para indicar a fonte de uma citação.',
    difficulty: 5,
    options: [
      {
        id: 75026,
        exercise_id: 7506,
        option_text: '"A educação é a arma mais poderosa que você pode usar para mudar o mundo" (Nelson Mandela).',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar o autor da citação.'
      },
      {
        id: 75027,
        exercise_id: 7506,
        option_text: '"A educação é a arma mais poderosa que você pode usar para mudar o mundo (Nelson Mandela)".',
        is_correct: false,
        explanation: 'Incorreto! As aspas deveriam fechar antes dos parênteses, não depois.'
      },
      {
        id: 75028,
        exercise_id: 7506,
        option_text: '(Nelson Mandela) "A educação é a arma mais poderosa que você pode usar para mudar o mundo".',
        is_correct: false,
        explanation: 'Incorreto! O autor deve vir depois da citação, não antes.'
      },
      {
        id: 75029,
        exercise_id: 7506,
        option_text: '"A educação é a arma mais poderosa que você pode usar para mudar o mundo"(Nelson Mandela).',
        is_correct: false,
        explanation: 'Incorreto! Falta um espaço entre as aspas de fechamento e o parêntese de abertura.'
      },
      {
        id: 75030,
        exercise_id: 7506,
        option_text: '"A educação é a arma mais poderosa que você pode usar para mudar o mundo" - Nelson Mandela.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para indicar o autor, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7507,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma referência bibliográfica?',
    explanation: 'Os parênteses são frequentemente usados em citações bibliográficas para indicar o autor e o ano da publicação.',
    difficulty: 5,
    options: [
      {
        id: 75031,
        exercise_id: 7507,
        option_text: 'De acordo com Silva (2019), a alfabetização digital deve começar nos primeiros anos escolares.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar o ano da publicação após o nome do autor.'
      },
      {
        id: 75032,
        exercise_id: 7507,
        option_text: 'De acordo com (Silva 2019), a alfabetização digital deve começar nos primeiros anos escolares.',
        is_correct: false,
        explanation: 'Incorreto! O nome do autor deve ficar fora dos parênteses quando está integrado à frase.'
      },
      {
        id: 75033,
        exercise_id: 7507,
        option_text: 'De acordo com Silva(2019), a alfabetização digital deve começar nos primeiros anos escolares.',
        is_correct: false,
        explanation: 'Incorreto! Falta um espaço entre o nome do autor e o parêntese de abertura.'
      },
      {
        id: 75034,
        exercise_id: 7507,
        option_text: 'De acordo com (Silva, 2019), a alfabetização digital deve começar nos primeiros anos escolares.',
        is_correct: false,
        explanation: 'Incorreto! O nome do autor deve ficar fora dos parênteses quando está integrado à frase.'
      },
      {
        id: 75035,
        exercise_id: 7507,
        option_text: 'De acordo com Silva - 2019 - a alfabetização digital deve começar nos primeiros anos escolares.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7508,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar um período histórico?',
    explanation: 'Os parênteses podem ser usados para indicar períodos históricos após o nome do evento ou da época.',
    difficulty: 5,
    options: [
      {
        id: 75036,
        exercise_id: 7508,
        option_text: 'A Segunda Guerra Mundial (1939-1945) foi um dos conflitos mais devastadores da história.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar o período em que ocorreu a Segunda Guerra Mundial.'
      },
      {
        id: 75037,
        exercise_id: 7508,
        option_text: 'A (Segunda Guerra Mundial 1939-1945) foi um dos conflitos mais devastadores da história.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão englobando tanto o nome do evento quanto o período.'
      },
      {
        id: 75038,
        exercise_id: 7508,
        option_text: 'A Segunda Guerra Mundial(1939-1945)foi um dos conflitos mais devastadores da história.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75039,
        exercise_id: 7508,
        option_text: 'A (1939-1945) Segunda Guerra Mundial foi um dos conflitos mais devastadores da história.',
        is_correct: false,
        explanation: 'Incorreto! O período deve vir após o nome do evento, não antes.'
      },
      {
        id: 75040,
        exercise_id: 7508,
        option_text: 'A Segunda Guerra Mundial - 1939-1945 - foi um dos conflitos mais devastadores da história.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7509,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar um exemplo?',
    explanation: 'Os parênteses podem ser usados para introduzir exemplos que ilustram uma afirmação.',
    difficulty: 5,
    options: [
      {
        id: 75041,
        exercise_id: 7509,
        option_text: 'Diversas frutas cítricas (laranja, limão, tangerina) são ricas em vitamina C.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para introduzir exemplos de frutas cítricas.'
      },
      {
        id: 75042,
        exercise_id: 7509,
        option_text: 'Diversas (frutas cítricas laranja, limão, tangerina) são ricas em vitamina C.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão englobando tanto o termo quanto os exemplos.'
      },
      {
        id: 75043,
        exercise_id: 7509,
        option_text: 'Diversas frutas cítricas(laranja, limão, tangerina)são ricas em vitamina C.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75044,
        exercise_id: 7509,
        option_text: '(Laranja, limão, tangerina) diversas frutas cítricas são ricas em vitamina C.',
        is_correct: false,
        explanation: 'Incorreto! Os exemplos devem vir após o termo a que se referem, não antes.'
      },
      {
        id: 75045,
        exercise_id: 7509,
        option_text: 'Diversas frutas cítricas - laranja, limão, tangerina - são ricas em vitamina C.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7510,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma nota explicativa?',
    explanation: 'Os parênteses podem ser usados para inserir notas explicativas que complementam a informação principal.',
    difficulty: 5,
    options: [
      {
        id: 75046,
        exercise_id: 7510,
        option_text: 'A insulina (hormônio produzido pelo pâncreas) é essencial para o controle da glicose no sangue.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para inserir uma nota explicativa sobre a insulina.'
      },
      {
        id: 75047,
        exercise_id: 7510,
        option_text: 'A (insulina hormônio produzido pelo pâncreas) é essencial para o controle da glicose no sangue.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão englobando tanto o termo quanto a explicação.'
      },
      {
        id: 75048,
        exercise_id: 7510,
        option_text: 'A insulina(hormônio produzido pelo pâncreas)é essencial para o controle da glicose no sangue.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75049,
        exercise_id: 7510,
        option_text: '(Hormônio produzido pelo pâncreas) a insulina é essencial para o controle da glicose no sangue.',
        is_correct: false,
        explanation: 'Incorreto! A nota explicativa deve vir após o termo a que se refere, não antes.'
      },
      {
        id: 75050,
        exercise_id: 7510,
        option_text: 'A insulina - hormônio produzido pelo pâncreas - é essencial para o controle da glicose no sangue.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7511,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma informação opcional?',
    explanation: 'Os parênteses podem ser usados para indicar uma informação que pode ou não ser incluída.',
    difficulty: 5,
    options: [
      {
        id: 75051,
        exercise_id: 7511,
        option_text: 'Por favor, inclua seu endereço de e-mail (e telefone) no formulário de inscrição.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar uma informação opcional a ser incluída no formulário.'
      },
      {
        id: 75052,
        exercise_id: 7511,
        option_text: 'Por favor, (inclua seu endereço de e-mail e telefone) no formulário de inscrição.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão englobando tanto a ação quanto as informações.'
      },
      {
        id: 75053,
        exercise_id: 7511,
        option_text: 'Por favor, inclua seu endereço de e-mail(e telefone)no formulário de inscrição.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75054,
        exercise_id: 7511,
        option_text: '(E telefone) por favor, inclua seu endereço de e-mail no formulário de inscrição.',
        is_correct: false,
        explanation: 'Incorreto! A informação opcional deve vir após o termo a que se refere, não antes da frase.'
      },
      {
        id: 75055,
        exercise_id: 7511,
        option_text: 'Por favor, inclua seu endereço de e-mail - e telefone - no formulário de inscrição.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7512,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar um comentário do autor?',
    explanation: 'Os parênteses podem ser usados para inserir comentários pessoais do autor que não fazem parte direta do texto.',
    difficulty: 5,
    options: [
      {
        id: 75056,
        exercise_id: 7512,
        option_text: 'O político afirmou que reduzirá os impostos (algo que duvido que aconteça) já no próximo ano.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para inserir um comentário pessoal do autor.'
      },
      {
        id: 75057,
        exercise_id: 7512,
        option_text: 'O político (afirmou que reduzirá os impostos algo que duvido que aconteça) já no próximo ano.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão englobando tanto a declaração quanto o comentário.'
      },
      {
        id: 75058,
        exercise_id: 7512,
        option_text: 'O político afirmou que reduzirá os impostos(algo que duvido que aconteça)já no próximo ano.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75059,
        exercise_id: 7512,
        option_text: '(Algo que duvido que aconteça) o político afirmou que reduzirá os impostos já no próximo ano.',
        is_correct: false,
        explanation: 'Incorreto! O comentário deve vir após a informação a que se refere, não antes da frase.'
      },
      {
        id: 75060,
        exercise_id: 7512,
        option_text: 'O político afirmou que reduzirá os impostos - algo que duvido que aconteça - já no próximo ano.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7513,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma definição?',
    explanation: 'Os parênteses podem ser usados para inserir definições de termos técnicos ou pouco conhecidos.',
    difficulty: 5,
    options: [
      {
        id: 75061,
        exercise_id: 7513,
        option_text: 'A fotossíntese (processo pelo qual as plantas produzem seu próprio alimento) ocorre principalmente nas folhas.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para inserir a definição de fotossíntese.'
      },
      {
        id: 75062,
        exercise_id: 7513,
        option_text: 'A (fotossíntese processo pelo qual as plantas produzem seu próprio alimento) ocorre principalmente nas folhas.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão englobando tanto o termo quanto a definição.'
      },
      {
        id: 75063,
        exercise_id: 7513,
        option_text: 'A fotossíntese(processo pelo qual as plantas produzem seu próprio alimento)ocorre principalmente nas folhas.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75064,
        exercise_id: 7513,
        option_text: '(Processo pelo qual as plantas produzem seu próprio alimento) a fotossíntese ocorre principalmente nas folhas.',
        is_correct: false,
        explanation: 'Incorreto! A definição deve vir após o termo a que se refere, não antes.'
      },
      {
        id: 75065,
        exercise_id: 7513,
        option_text: 'A fotossíntese - processo pelo qual as plantas produzem seu próprio alimento - ocorre principalmente nas folhas.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7514,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma observação?',
    explanation: 'Os parênteses podem ser usados para inserir observações que complementam a informação principal.',
    difficulty: 5,
    options: [
      {
        id: 75066,
        exercise_id: 7514,
        option_text: 'A reunião será realizada na próxima sexta-feira (é importante não se atrasar) às 15h.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para inserir uma observação importante.'
      },
      {
        id: 75067,
        exercise_id: 7514,
        option_text: 'A (reunião será realizada na próxima sexta-feira é importante não se atrasar) às 15h.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão englobando tanto a informação principal quanto a observação.'
      },
      {
        id: 75068,
        exercise_id: 7514,
        option_text: 'A reunião será realizada na próxima sexta-feira(é importante não se atrasar)às 15h.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75069,
        exercise_id: 7514,
        option_text: '(É importante não se atrasar) a reunião será realizada na próxima sexta-feira às 15h.',
        is_correct: false,
        explanation: 'Incorreto! A observação deve vir em um contexto apropriado, não no início da frase.'
      },
      {
        id: 75070,
        exercise_id: 7514,
        option_text: 'A reunião será realizada na próxima sexta-feira - é importante não se atrasar - às 15h.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7515,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma especificação?',
    explanation: 'Os parênteses podem ser usados para especificar ou detalhar algo mencionado anteriormente.',
    difficulty: 5,
    options: [
      {
        id: 75071,
        exercise_id: 7515,
        option_text: 'Traga os documentos necessários (RG, CPF e comprovante de residência) para a entrevista.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para especificar quais são os documentos necessários.'
      },
      {
        id: 75072,
        exercise_id: 7515,
        option_text: 'Traga os (documentos necessários RG, CPF e comprovante de residência) para a entrevista.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão englobando tanto o termo quanto a especificação.'
      },
      {
        id: 75073,
        exercise_id: 7515,
        option_text: 'Traga os documentos necessários(RG, CPF e comprovante de residência)para a entrevista.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75074,
        exercise_id: 7515,
        option_text: '(RG, CPF e comprovante de residência) traga os documentos necessários para a entrevista.',
        is_correct: false,
        explanation: 'Incorreto! A especificação deve vir após o termo a que se refere, não antes.'
      },
      {
        id: 75075,
        exercise_id: 7515,
        option_text: 'Traga os documentos necessários - RG, CPF e comprovante de residência - para a entrevista.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  }
];
