import { Exercise } from './exerciseService';

// Oitava questão do complemento para o Módulo 5 de Textos Jornalísticos
export const textoJornalisticoExercicio5Questao8: Exercise = {
  id: 10407,
  category_id: 'interpretacao-jornalistico-5',
  question: 'Analise o seguinte trecho de uma entrevista publicada em uma revista semanal:\n\nJornalista: O senhor afirmou recentemente que a reforma tributária aprovada não atende às necessidades do país. Poderia explicar melhor essa posição?\n\nEntrevistado: O texto aprovado mantém privilégios setoriais e não simplifica efetivamente o sistema. Veja, criamos um IVA dual, com inúmeras exceções, quando a experiência internacional mostra que sistemas mais simplificados são mais eficientes. O setor produtivo continuará gastando milhões com burocracia fiscal.\n\nJornalista: Mas não houve avanços em relação ao sistema atual?\n\nEntrevistado: Claro que houve, seria desonesto negar. A unificação de cinco tributos em dois já representa um avanço. O problema é que ficamos no meio do caminho, quando poderíamos ter feito uma reforma mais profunda.\n\nJornalista: O senhor teria votado contra, então?\n\nEntrevistado: Não, votaria a favor mesmo assim. O texto tem méritos, apesar das limitações. É um passo intermediário que pode ser aperfeiçoado no futuro.\n\nQual característica do gênero entrevista jornalística está corretamente aplicada neste trecho?',
  explanation: 'A entrevista jornalística possui características específicas que a definem como gênero.',
  difficulty: 2,
  options: [
    {
      id: 104071,
      exercise_id: 10407,
      option_text: 'Diálogo estruturado em perguntas e respostas, com o jornalista conduzindo a conversa através de questionamentos que aprofundam o tema e exploram possíveis contradições nas posições do entrevistado.',
      is_correct: true,
      explanation: 'Correto! O texto exemplifica perfeitamente a entrevista jornalística ao apresentar um diálogo estruturado em formato de perguntas e respostas, com o jornalista conduzindo ativamente a conversa. As perguntas não são apenas formalidades, mas buscam aprofundar o tema ("Poderia explicar melhor essa posição?"), exploram contradições aparentes ("Mas não houve avanços...?") e testam a coerência do entrevistado ("O senhor teria votado contra, então?"), características essenciais de uma entrevista jornalística bem conduzida.'
    },
    {
      id: 104072,
      exercise_id: 10407,
      option_text: 'Relato em terceira pessoa das declarações do entrevistado, com o jornalista resumindo e interpretando as respostas para o leitor.',
      is_correct: false,
      explanation: 'Incorreto! O texto não apresenta relato em terceira pessoa nem interpretações do jornalista, mas transcrição direta do diálogo em formato de perguntas e respostas, preservando a fala do entrevistado em primeira pessoa.'
    },
    {
      id: 104073,
      exercise_id: 10407,
      option_text: 'Perguntas longas e complexas que demonstram o conhecimento técnico do jornalista, ocupando mais espaço que as respostas do entrevistado.',
      is_correct: false,
      explanation: 'Incorreto! As perguntas do jornalista são concisas e diretas, não ocupam mais espaço que as respostas e não buscam demonstrar conhecimento técnico do jornalista, mas obter informações e posicionamentos do entrevistado.'
    },
    {
      id: 104074,
      exercise_id: 10407,
      option_text: 'Debate entre jornalista e entrevistado, com ambos defendendo posições contrárias sobre o tema da reforma tributária.',
      is_correct: false,
      explanation: 'Incorreto! O texto não apresenta formato de debate nem mostra o jornalista defendendo posições próprias. O jornalista mantém o papel de questionador, sem expressar suas opiniões pessoais sobre a reforma tributária.'
    },
    {
      id: 104075,
      exercise_id: 10407,
      option_text: 'Série de perguntas padronizadas, preparadas previamente e aplicadas sem adaptações às respostas anteriores do entrevistado.',
      is_correct: false,
      explanation: 'Incorreto! As perguntas não parecem padronizadas ou aplicadas rigidamente, mas adaptadas ao fluxo da conversa, com o jornalista reagindo às respostas anteriores ("Mas não houve avanços...?", "O senhor teria votado contra, então?"), demonstrando escuta ativa.'
    }
  ]
};
