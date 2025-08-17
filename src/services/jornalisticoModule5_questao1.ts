import { Exercise } from './exerciseService';

// Primeira questão do complemento para o Módulo 5 de Textos Jornalísticos
export const textoJornalisticoExercicio5Questao1: Exercise = {
  id: 10400,
  category_id: 'interpretacao-jornalistico-5',
  question: 'Leia o trecho da reportagem sobre conflitos internacionais:\n\n"O cessar-fogo anunciado ontem foi rompido após apenas seis horas, com bombardeios registrados em áreas residenciais da capital. Segundo o porta-voz do governo, os ataques foram resposta a 'provocações armadas' do outro lado. No entanto, observadores independentes da ONU afirmam não ter registrado qualquer atividade hostil que justificasse a retomada dos bombardeios. Na semana passada, um relatório da organização Human Rights Watch já havia alertado para o uso de 'narrativas fabricadas' para justificar violações do direito internacional humanitário na região."\n\nQual característica do jornalismo internacional está mais evidenciada neste trecho?',
  explanation: 'O jornalismo internacional possui características específicas, sobretudo quando aborda conflitos entre nações.',
  difficulty: 3,
  options: [
    {
      id: 104001,
      exercise_id: 10400,
      option_text: 'Apresentação de diferentes versões para o mesmo fato, contrapondo fontes oficiais e independentes para oferecer uma visão mais abrangente do conflito.',
      is_correct: true,
      explanation: 'Correto! O texto apresenta explicitamente versões conflitantes dos mesmos fatos: a versão oficial do porta-voz do governo ("resposta a provocações armadas") e a versão dos observadores independentes da ONU ("não ter registrado qualquer atividade hostil"), além de agregar contexto com o relatório da Human Rights Watch sobre "narrativas fabricadas", demonstrando o esforço jornalístico para apresentar múltiplas perspectivas sobre o conflito.'
    },
    {
      id: 104002,
      exercise_id: 10400,
      option_text: 'Análise profunda das causas históricas e culturais que levaram ao atual conflito na região.',
      is_correct: false,
      explanation: 'Incorreto! O trecho não apresenta análise das causas históricas ou culturais do conflito, limitando-se a relatar os fatos recentes e as diferentes versões sobre eles.'
    },
    {
      id: 104003,
      exercise_id: 10400,
      option_text: 'Posicionamento editorial explícito do veículo de comunicação sobre qual lado tem razão no conflito.',
      is_correct: false,
      explanation: 'Incorreto! O texto não apresenta posicionamento editorial explícito, mantendo a objetividade ao apresentar diferentes versões e fontes.'
    },
    {
      id: 104004,
      exercise_id: 10400,
      option_text: 'Cobertura baseada exclusivamente em fontes oficiais governamentais para garantir precisão factual.',
      is_correct: false,
      explanation: 'Incorreto! O texto claramente não se baseia apenas em fontes oficiais, mas contrasta a versão oficial com fontes independentes (ONU e Human Rights Watch).'
    },
    {
      id: 104005,
      exercise_id: 10400,
      option_text: 'Foco nos aspectos emocionais do conflito, com depoimentos de vítimas civis dos bombardeios.',
      is_correct: false,
      explanation: 'Incorreto! O texto não apresenta depoimentos de vítimas nem enfatiza aspectos emocionais, concentrando-se nas informações factuais e institucionais sobre o conflito.'
    }
  ]
};
