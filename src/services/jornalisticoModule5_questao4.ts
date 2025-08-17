import { Exercise } from './exerciseService';

// Quarta questão do complemento para o Módulo 5 de Textos Jornalísticos
export const textoJornalisticoExercicio5Questao4: Exercise = {
  id: 10403,
  category_id: 'interpretacao-jornalistico-5',
  question: 'Leia o seguinte trecho de uma notícia:\n\n"Um jovem de 17 anos foi apreendido ontem à noite após invadir uma residência no bairro Jardim das Flores. Segundo informações da Polícia Militar, o adolescente pulou o muro da casa por volta das 22h, quando foi surpreendido pelo proprietário. Houve luta corporal e ambos ficaram feridos. O morador, que não teve a identidade revelada, foi encaminhado ao Hospital Municipal com ferimentos leves. Esta é a quinta ocorrência do tipo registrada no bairro apenas este mês, de acordo com dados da Secretaria de Segurança Pública."\n\nEm sua estrutura e linguagem, o texto acima respeita as características fundamentais do gênero notícia. Qual conjunto de elementos presentes confirma essa classificação?',
  explanation: 'A notícia possui características estruturais e linguísticas específicas que a definem como gênero jornalístico informativo.',
  difficulty: 2,
  options: [
    {
      id: 104031,
      exercise_id: 10403,
      option_text: 'Estrutura que responde às questões fundamentais (o quê, quem, quando, onde, como e por quê), com linguagem direta, objetiva e em terceira pessoa, sem marcas opinativas explícitas.',
      is_correct: true,
      explanation: 'Correto! O texto respeita o formato clássico da notícia ao responder as questões fundamentais: o quê (invasão de residência), quem (jovem de 17 anos), quando (ontem à noite, por volta das 22h), onde (bairro Jardim das Flores), como (pulou o muro, houve luta corporal) e contextualiza com informações adicionais relevantes (quinta ocorrência do tipo). A linguagem é direta, objetiva, em terceira pessoa, sem adjetivações valorativas ou marcas opinativas do autor, características essenciais do gênero notícia.'
    },
    {
      id: 104032,
      exercise_id: 10403,
      option_text: 'Narrativa em primeira pessoa com reflexões pessoais do jornalista sobre a violência urbana e suas causas sociais.',
      is_correct: false,
      explanation: 'Incorreto! O texto não apresenta narrativa em primeira pessoa nem reflexões pessoais do autor sobre as causas da violência, mantendo-se objetivo e impessoal, como é característico da notícia.'
    },
    {
      id: 104033,
      exercise_id: 10403,
      option_text: 'Análise crítica da atuação policial e das políticas de segurança pública, com posicionamentos políticos explícitos.',
      is_correct: false,
      explanation: 'Incorreto! O texto não faz análise crítica da atuação policial nem apresenta posicionamentos políticos, limitando-se a relatar os fatos de forma objetiva.'
    },
    {
      id: 104034,
      exercise_id: 10403,
      option_text: 'Relato cronológico detalhado da vida do adolescente infrator, com elementos biográficos e entrevistas com familiares.',
      is_correct: false,
      explanation: 'Incorreto! O texto não apresenta elementos biográficos do adolescente nem entrevistas com familiares, mantendo-se focado no fato específico da invasão e não na história de vida do envolvido.'
    },
    {
      id: 104035,
      exercise_id: 10403,
      option_text: 'Texto opinativo institucional que defende maior rigor no tratamento de jovens infratores e critica a legislação atual.',
      is_correct: false,
      explanation: 'Incorreto! O texto não expressa opinião institucional nem defende posicionamentos sobre o tratamento de jovens infratores ou sobre a legislação, mantendo-se no campo informativo sem elementos opinativos.'
    }
  ]
};
