$file = "c:\Users\LinkBiz\Downloads\PONT\src\services\parentesesData.ts"
$content = Get-Content -Path $file -Raw

# Identificando o padrão da seção da prova final de parênteses
$pattern = '(?s)(// Exercícios da prova final de Parênteses\s*export const provaParenteses: Exercise\[\] = \[).*?(\];)'

# Novo conteúdo para substituir (com 30 questões)
$newContent = @'
// Exercícios da prova final de Parênteses
export const provaParenteses: Exercise[] = [
  {
    id: 7501,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para inserir uma informação adicional?',
    explanation: 'Os parênteses são usados para inserir informações adicionais ou explicativas que não são essenciais para a compreensão da frase principal.',
    difficulty: 5,
    options: [
      {
        id: 75001,
        exercise_id: 7501,
        option_text: 'O presidente (eleito em outubro do ano passado) anunciou novas medidas econômicas ontem.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para inserir uma informação adicional sobre o presidente.'
      },
      {
        id: 75002,
        exercise_id: 7501,
        option_text: 'O presidente eleito (em outubro do ano passado anunciou) novas medidas econômicas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão separando incorretamente elementos da frase que deveriam permanecer unidos.'
      },
      {
        id: 75003,
        exercise_id: 7501,
        option_text: 'O (presidente eleito em outubro do ano passado) anunciou novas medidas econômicas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando todo o sujeito, não apenas a informação adicional.'
      },
      {
        id: 75004,
        exercise_id: 7501,
        option_text: 'O presidente eleito em outubro do ano passado (anunciou novas medidas) econômicas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando parte do predicado, não uma informação adicional.'
      },
      {
        id: 75005,
        exercise_id: 7501,
        option_text: '(O presidente) eleito em outubro do ano passado anunciou novas medidas econômicas ontem.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando apenas parte do sujeito, não uma informação adicional.'
      }
    ]
  },
  {
    id: 7502,
    category_id: 'prova-parenteses',
    question: 'Qual alternativa utiliza os parênteses corretamente para indicar uma sigla?',
    explanation: 'Os parênteses são usados para apresentar siglas após o nome completo da entidade ou termo.',
    difficulty: 5,
    options: [
      {
        id: 75006,
        exercise_id: 7502,
        option_text: 'A Organização Mundial da Saúde (OMS) emitiu um alerta sobre a nova doença.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para introduzir a sigla após o nome completo.'
      },
      {
        id: 75007,
        exercise_id: 7502,
        option_text: 'A (Organização Mundial da Saúde) OMS emitiu um alerta sobre a nova doença.',
        is_correct: false,
        explanation: 'Incorreto! A sigla deveria estar dentro dos parênteses, não fora.'
      },
      {
        id: 75008,
        exercise_id: 7502,
        option_text: 'A Organização Mundial da Saúde(OMS)emitiu um alerta sobre a nova doença.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75009,
        exercise_id: 7502,
        option_text: 'A (OMS) Organização Mundial da Saúde emitiu um alerta sobre a nova doença.',
        is_correct: false,
        explanation: 'Incorreto! A sigla deve vir depois do nome completo, não antes.'
      },
      {
        id: 75010,
        exercise_id: 7502,
        option_text: 'A Organização Mundial da Saúde - OMS - emitiu um alerta sobre a nova doença.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7503,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma data?',
    explanation: 'Os parênteses são frequentemente usados para indicar datas que complementam a informação principal.',
    difficulty: 5,
    options: [
      {
        id: 75011,
        exercise_id: 7503,
        option_text: 'A Declaração Universal dos Direitos Humanos (1948) é um documento marco na história dos direitos humanos.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar o ano da Declaração.'
      },
      {
        id: 75012,
        exercise_id: 7503,
        option_text: 'A Declaração (Universal dos Direitos Humanos 1948) é um documento marco na história dos direitos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão incluindo parte do nome oficial junto com a data.'
      },
      {
        id: 75013,
        exercise_id: 7503,
        option_text: 'A Declaração Universal dos Direitos Humanos(1948)é um documento marco na história dos direitos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75014,
        exercise_id: 7503,
        option_text: 'A (Declaração Universal dos Direitos Humanos 1948) é um documento marco na história dos direitos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão isolando todo o sujeito junto com a data.'
      },
      {
        id: 75015,
        exercise_id: 7503,
        option_text: 'A Declaração Universal dos Direitos Humanos - 1948 - é um documento marco na história dos direitos humanos.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7504,
    category_id: 'prova-parenteses',
    question: 'Qual alternativa utiliza os parênteses corretamente para fornecer uma tradução?',
    explanation: 'Os parênteses podem ser usados para fornecer a tradução de uma palavra ou expressão em outro idioma.',
    difficulty: 5,
    options: [
      {
        id: 75016,
        exercise_id: 7504,
        option_text: 'O termo "deadline" (prazo final) é muito utilizado no ambiente corporativo.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para fornecer a tradução do termo estrangeiro.'
      },
      {
        id: 75017,
        exercise_id: 7504,
        option_text: 'O termo ("deadline" prazo final) é muito utilizado no ambiente corporativo.',
        is_correct: false,
        explanation: 'Incorreto! A tradução deve vir entre parênteses após o termo estrangeiro.'
      },
      {
        id: 75018,
        exercise_id: 7504,
        option_text: 'O termo "deadline"(prazo final)é muito utilizado no ambiente corporativo.',
        is_correct: false,
        explanation: 'Incorreto! Faltam espaços antes e depois dos parênteses.'
      },
      {
        id: 75019,
        exercise_id: 7504,
        option_text: 'O termo ("deadline") prazo final é muito utilizado no ambiente corporativo.',
        is_correct: false,
        explanation: 'Incorreto! A tradução deve estar dentro dos parênteses, não o termo estrangeiro.'
      },
      {
        id: 75020,
        exercise_id: 7504,
        option_text: 'O termo "deadline" - prazo final - é muito utilizado no ambiente corporativo.',
        is_correct: false,
        explanation: 'Incorreto! Embora o travessão possa ser usado para destacar informações, a questão pede especificamente o uso de parênteses.'
      }
    ]
  },
  {
    id: 7505,
    category_id: 'prova-parenteses',
    question: 'Em qual alternativa os parênteses estão sendo usados corretamente para indicar uma possibilidade alternativa?',
    explanation: 'Os parênteses podem ser usados para indicar uma possibilidade alternativa ou uma opção.',
    difficulty: 5,
    options: [
      {
        id: 75021,
        exercise_id: 7505,
        option_text: 'O(a) candidato(a) deve apresentar seu documento de identidade no dia da prova.',
        is_correct: true,
        explanation: 'Correto! Os parênteses estão sendo usados adequadamente para indicar a possibilidade de gênero masculino ou feminino.'
      },
      {
        id: 75022,
        exercise_id: 7505,
        option_text: 'O (a) candidato (a) deve apresentar seu documento de identidade no dia da prova.',
        is_correct: false,
        explanation: 'Incorreto! Não deve haver espaço entre o artigo e a letra entre parênteses.'
      },
      {
        id: 75023,
        exercise_id: 7505,
        option_text: '(O)a candidat(o)a deve apresentar seu documento de identidade no dia da prova.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão posicionados incorretamente, isolando letras que não representam alternativas.'
      },
      {
        id: 75024,
        exercise_id: 7505,
        option_text: 'O(a candidato)(a) deve apresentar seu documento de identidade no dia da prova.',
        is_correct: false,
        explanation: 'Incorreto! Os parênteses estão mal posicionados, separando incorretamente as palavras.'
      },
      {
        id: 75025,
        exercise_id: 7505,
        option_text: 'O/a candidato/a deve apresentar seu documento de identidade no dia da prova.',
        is_correct: false,
        explanation: 'Incorreto! Embora a barra possa ser usada para indicar alternativas, a questão pede especificamente o uso de parênteses.'
      }
    ]
  }
];
'@

# Arquivo temporário para a primeira parte do script
$output = $content -replace $pattern, $newContent

# Salvando o conteúdo atualizado de volta no arquivo
Set-Content -Path $file -Value $output -Encoding UTF8
