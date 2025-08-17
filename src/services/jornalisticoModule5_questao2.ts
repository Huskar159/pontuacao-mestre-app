import { Exercise } from './exerciseService';

// Segunda questão do complemento para o Módulo 5 de Textos Jornalísticos
export const textoJornalisticoExercicio5Questao2: Exercise = {
  id: 10401,
  category_id: 'interpretacao-jornalistico-5',
  question: 'Leia o trecho do editorial de um jornal de grande circulação:\n\n"A decisão do Supremo Tribunal, anunciada ontem, representa um marco histórico para o fortalecimento das instituições democráticas do país. Ao reafirmar a constitucionalidade da lei que estabelece limites à divulgação de pesquisas eleitorais, a Corte fez mais do que dirimir uma controvérsia jurídica: sinalizou claramente seu compromisso com a qualidade do processo eleitoral. Entendemos que, embora a liberdade de expressão seja um pilar fundamental de nossa democracia, ela não pode servir de escudo para a disseminação irresponsável de dados que possam induzir o eleitor ao erro. É tempo de responsabilidade na comunicação política."\n\nQual é o gênero jornalístico do texto acima e qual sua principal característica presente neste trecho?',
  explanation: 'Os gêneros jornalísticos possuem características específicas que os definem e diferenciam entre si.',
  difficulty: 2,
  options: [
    {
      id: 104011,
      exercise_id: 10401,
      option_text: 'Editorial, caracterizado pela expressão explícita da opinião institucional do veículo de comunicação sobre um tema relevante da atualidade.',
      is_correct: true,
      explanation: 'Correto! O texto é um editorial, como indicado no enunciado, e apresenta sua principal característica: a expressão clara da opinião institucional do jornal ("Entendemos que...") sobre um tema atual (decisão recente do Supremo Tribunal), sem assinatura individual e com tom assertivo que representa a posição oficial do veículo de comunicação sobre a questão discutida.'
    },
    {
      id: 104012,
      exercise_id: 10401,
      option_text: 'Notícia, caracterizada pelo relato objetivo e imparcial dos fatos, sem emissão de juízos de valor.',
      is_correct: false,
      explanation: 'Incorreto! O texto não é uma notícia, pois não se limita a relatar os fatos de forma objetiva, mas apresenta explicitamente juízos de valor ("marco histórico", "compromisso com a qualidade") e a opinião do veículo ("Entendemos que...").'
    },
    {
      id: 104013,
      exercise_id: 10401,
      option_text: 'Coluna de opinião, caracterizada pela análise pessoal e assinada por um jornalista específico sobre temas diversos.',
      is_correct: false,
      explanation: 'Incorreto! O texto não é uma coluna de opinião, pois não apresenta marca de autoria individual nem representa a visão pessoal de um colunista específico, mas a posição institucional do jornal.'
    },
    {
      id: 104014,
      exercise_id: 10401,
      option_text: 'Reportagem interpretativa, caracterizada pela contextualização aprofundada dos fatos com dados de background.',
      is_correct: false,
      explanation: 'Incorreto! O texto não é uma reportagem interpretativa, pois não traz contextualização aprofundada nem diversidade de fontes, elementos típicos desse gênero.'
    },
    {
      id: 104015,
      exercise_id: 10401,
      option_text: 'Artigo de análise, caracterizado pela avaliação técnica e especializada sobre as implicações jurídicas da decisão.',
      is_correct: false,
      explanation: 'Incorreto! O texto não é um artigo de análise técnica, pois não apresenta avaliação especializada das implicações jurídicas, mas posicionamento institucional sobre a decisão.'
    }
  ]
};
