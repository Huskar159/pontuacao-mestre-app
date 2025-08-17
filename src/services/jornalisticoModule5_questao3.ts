import { Exercise } from './exerciseService';

// Terceira questão do complemento para o Módulo 5 de Textos Jornalísticos
export const textoJornalisticoExercicio5Questao3: Exercise = {
  id: 10402,
  category_id: 'interpretacao-jornalistico-5',
  question: 'Analise o seguinte trecho de uma crônica jornalística:\n\n"Quinta-feira, 7h30 da manhã. O trem que parte da estação Guaianases está, como sempre, lotado. Entre empurrões e suspiros resignados, os passageiros se equilibram como podem. Dona Joana, 62 anos, agarra-se à barra de sustentação com uma mão e segura sua marmita com a outra. Trabalha como diarista há mais de três décadas e conhece essa rotina como a palma de sua mão. 'A gente se acostuma, mas não devia', diz ela, com um sorriso cansado que carrega a sabedoria de quem já viu muita coisa nessa vida. O trem segue seu trajeto, indiferente às pequenas histórias que carrega."\n\nQual característica do texto acima o identifica como uma crônica jornalística?',
  explanation: 'A crônica jornalística possui características específicas que a diferenciam de outros gêneros textuais do jornalismo.',
  difficulty: 2,
  options: [
    {
      id: 104021,
      exercise_id: 10402,
      option_text: 'Narrativa que parte de um fato cotidiano aparentemente banal (viagem de trem) para uma reflexão mais ampla sobre a vida urbana, com linguagem que mescla observação jornalística e elementos literários.',
      is_correct: true,
      explanation: 'Correto! O texto exemplifica perfeitamente a crônica jornalística ao transformar uma cena cotidiana (o trem lotado) em objeto de observação sensível, humanizando a situação através do personagem de Dona Joana, utilizando linguagem que mescla o registro factual do jornalismo ("Quinta-feira, 7h30", "estação Guaianases") com recursos literários (metáforas, adjetivação subjetiva, diálogo), além de sugerir uma reflexão mais ampla sobre a naturalização das dificuldades urbanas.'
    },
    {
      id: 104022,
      exercise_id: 10402,
      option_text: 'Relato objetivo e imparcial dos problemas do transporte público, com dados estatísticos sobre superlotação.',
      is_correct: false,
      explanation: 'Incorreto! O texto não apresenta relato objetivo nem dados estatísticos, elementos típicos da notícia, mas uma narrativa subjetiva que humaniza a situação através de um personagem específico.'
    },
    {
      id: 104023,
      exercise_id: 10402,
      option_text: 'Denúncia investigativa sobre as condições precárias do sistema ferroviário, com diversas fontes oficiais.',
      is_correct: false,
      explanation: 'Incorreto! O texto não tem caráter investigativo nem apresenta fontes oficiais, elementos típicos da reportagem investigativa. Ele apenas retrata uma situação cotidiana sem tom de denúncia formal.'
    },
    {
      id: 104024,
      exercise_id: 10402,
      option_text: 'Análise técnica especializada sobre a mobilidade urbana, com propostas de soluções para o problema.',
      is_correct: false,
      explanation: 'Incorreto! O texto não apresenta análise técnica nem propostas de soluções, elementos típicos dos artigos de análise, mas uma observação sensível de uma situação cotidiana.'
    },
    {
      id: 104025,
      exercise_id: 10402,
      option_text: 'Editorial que expressa a posição oficial do jornal sobre a crise nos transportes públicos.',
      is_correct: false,
      explanation: 'Incorreto! O texto não representa a posição institucional de um veículo de comunicação nem tem tom assertivo sobre políticas públicas, características do editorial. Trata-se de uma narrativa sensível sobre uma cena cotidiana.'
    }
  ]
};
