import { Exercise } from './exerciseService';

// Questões adicionais para a prova final de Parênteses (parte 2)
export const additionalProvaParenteses2: Exercise[] = [
  {
    id: 7516,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente em uma expressão matemática?',
    explanation: 'Os parênteses são usados em expressões matemáticas para determinar a ordem das operações.',
    difficulty: 5,
    options: [
      {
        id: 75076,
        exercise_id: 7516,
        option_text: 'O resultado de (4 + 3) × 2 é diferente de 4 + (3 × 2).',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para alterar a ordem das operações matemáticas.'
      },
      {
        id: 75077,
        exercise_id: 7516,
        option_text: 'O resultado de (4 + 3 × 2) é diferente de 4 + (3) × 2.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses não estão sendo usados de forma eficaz para alterar a ordem das operações.'
      },
      {
        id: 75078,
        exercise_id: 7516,
        option_text: 'O resultado de (4 + 3 × 2 é diferente de 4 + 3) × 2.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses não estão sendo fechados e abertos de forma adequada.'
      },
      {
        id: 75079,
        exercise_id: 7516,
        option_text: 'O resultado de 4 + 3) × 2 é diferente de (4 + 3 × 2.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão sendo usados de forma incorreta, com fechamento antes da abertura.'
      },
      {
        id: 75080,
        exercise_id: 7516,
        option_text: 'O resultado de 4 + 3 × 2 é diferente de 4 + 3 × 2.',
        is_correct: false,
        explanation: 'Incorreto! Não há uso de parênteses para alterar a ordem das operações.'
      }
    ]
  },
  {
    id: 7517,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar um resultado?',
    explanation: 'Os parênteses podem ser usados para indicar o resultado de um cálculo ou de uma ação.',
    difficulty: 5,
    options: [
      {
        id: 75081,
        exercise_id: 7517,
        option_text: 'A equipe venceu o campeonato com uma pontuação impressionante (98 pontos).',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar o resultado da pontuação.'
      },
      {
        id: 75082,
        exercise_id: 7517,
        option_text: 'A equipe (venceu o campeonato com uma pontuação impressionante 98 pontos).',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão englobando tanto a ação quanto o resultado.'
      },
      {
        id: 75083,
        exercise_id: 7517,
        option_text: 'A equipe venceu o campeonato com uma pontuação impressionante(98 pontos).',
        is_correct: false,
        explanation: 'Incorreto! Falta um espaço antes do parêntese de abertura.'
      },
      {
        id: 75084,
        exercise_id: 7517,
        option_text: '(98 pontos) a equipe venceu o campeonato com uma pontuação impressionante.',
        is_correct: false,
        explanation: 'Incorreto! O resultado deve vir após a informação a que se refere, não antes.'
      },
      {
        id: 75085,
        exercise_id: 7517,
        option_text: 'A equipe venceu o campeonato com uma pontuação impressionante - 98 pontos.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7518,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma medida?',
    explanation: 'Os parênteses podem ser usados para especificar medidas ou dimensões.',
    difficulty: 5,
    options: [
      {
        id: 75086,
        exercise_id: 7518,
        option_text: 'A nova ponte tem um comprimento impressionante (2,5 km) e conecta as duas margens do rio.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para especificar a medida do comprimento da ponte.'
      },
      {
        id: 75087,
        exercise_id: 7518,
        option_text: 'A nova ponte (tem um comprimento impressionante 2,5 km) e conecta as duas margens do rio.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão englobando tanto a afirmação quanto a medida.'
      },
      {
        id: 75088,
        exercise_id: 7518,
        option_text: 'A nova ponte tem um comprimento impressionante(2,5 km)e conecta as duas margens do rio.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75089,
        exercise_id: 7518,
        option_text: '(2,5 km) a nova ponte tem um comprimento impressionante e conecta as duas margens do rio.',
        is_correct: false,
        explanation: 'Incorreto! A medida deve vir após a informação a que se refere, não antes.'
      },
      {
        id: 75090,
        exercise_id: 7518,
        option_text: 'A nova ponte tem um comprimento impressionante - 2,5 km - e conecta as duas margens do rio.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7519,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para incluir uma observação irônica?',
    explanation: 'Os parênteses podem ser usados para incluir comentários irônicos ou críticos.',
    difficulty: 5,
    options: [
      {
        id: 75091,
        exercise_id: 7519,
        option_text: 'O novo software (que promete ser revolucionário, como todos os outros) será lançado no próximo mês.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para incluir uma observação irônica sobre o software.'
      },
      {
        id: 75092,
        exercise_id: 7519,
        option_text: 'O novo (software que promete ser revolucionário, como todos os outros) será lançado no próximo mês.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão englobando tanto o sujeito quanto a observação.'
      },
      {
        id: 75093,
        exercise_id: 7519,
        option_text: 'O novo software(que promete ser revolucionário, como todos os outros)será lançado no próximo mês.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75094,
        exercise_id: 7519,
        option_text: '(Que promete ser revolucionário, como todos os outros) o novo software será lançado no próximo mês.',
        is_correct: false,
        explanation: 'Incorreto! A observação deve vir após a informação a que se refere, não antes.'
      },
      {
        id: 75095,
        exercise_id: 7519,
        option_text: 'O novo software - que promete ser revolucionário, como todos os outros - será lançado no próximo mês.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7520,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma fonte em um texto acadêmico?',
    explanation: 'Os parênteses são usados em textos acadêmicos para indicar a fonte de uma informação ou citação.',
    difficulty: 5,
    options: [
      {
        id: 75096,
        exercise_id: 7520,
        option_text: 'A teoria da relatividade mudou nossa compreensão do universo (Einstein, 1915).',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar o autor e o ano da fonte.'
      },
      {
        id: 75097,
        exercise_id: 7520,
        option_text: 'A (teoria da relatividade mudou nossa compreensão do universo Einstein, 1915).',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão englobando tanto a afirmação quanto a fonte.'
      },
      {
        id: 75098,
        exercise_id: 7520,
        option_text: 'A teoria da relatividade mudou nossa compreensão do universo(Einstein, 1915).',
        is_correct: false,
        explanation: 'Incorreto! Falta um espaço antes do parêntese de abertura.'
      },
      {
        id: 75099,
        exercise_id: 7520,
        option_text: '(Einstein, 1915) a teoria da relatividade mudou nossa compreensão do universo.',
        is_correct: false,
        explanation: 'Incorreto! A fonte deve vir após a informação a que se refere, não antes.'
      },
      {
        id: 75100,
        exercise_id: 7520,
        option_text: 'A teoria da relatividade mudou nossa compreensão do universo - Einstein, 1915.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  }
];
