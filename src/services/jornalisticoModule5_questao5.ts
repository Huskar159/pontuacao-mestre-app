import { Exercise } from './exerciseService';

// Quinta questão do complemento para o Módulo 5 de Textos Jornalísticos
export const textoJornalisticoExercicio5Questao5: Exercise = {
  id: 10404,
  category_id: 'interpretacao-jornalistico-5',
  question: 'Analise o trecho a seguir, publicado na seção de opinião de um jornal:\n\n"A recente decisão do governo de flexibilizar as regras de proteção ambiental representa um retrocesso histórico na política de preservação de nossos biomas. Ignorando evidências científicas sólidas e cedendo à pressão de setores econômicos específicos, o decreto assinado na última terça-feira abre caminho para o que pode se tornar o maior desastre ambiental das últimas décadas. É preciso que a sociedade civil se mobilize rapidamente para reverter essa medida antes que os danos sejam irreparáveis."\n\nEste texto pertence a qual gênero jornalístico e apresenta quais características principais?',
  explanation: 'Os textos opinativos no jornalismo apresentam características específicas que os diferenciam dos textos informativos.',
  difficulty: 2,
  options: [
    {
      id: 104041,
      exercise_id: 10404,
      option_text: 'Artigo de opinião, caracterizado pela defesa explícita de uma posição pessoal do autor sobre um tema da atualidade, com uso de argumentos e marcas valorativas claras.',
      is_correct: true,
      explanation: 'Correto! O texto é um artigo de opinião, publicado na seção específica do jornal, que apresenta características fundamentais deste gênero: posicionamento explícito do autor ("representa um retrocesso histórico", "abre caminho para o maior desastre ambiental"), juízos de valor claros, argumentação para defender seu ponto de vista (menciona evidências científicas ignoradas), e um chamado à ação ("é preciso que a sociedade civil se mobilize"), expressando claramente a opinião pessoal do articulista sobre um tema atual.'
    },
    {
      id: 104042,
      exercise_id: 10404,
      option_text: 'Notícia, caracterizada pelo relato objetivo e imparcial dos fatos, sem emissão de juízos de valor.',
      is_correct: false,
      explanation: 'Incorreto! O texto não é uma notícia, pois não apresenta relato objetivo e imparcial dos fatos. Ao contrário, contém juízos de valor ("retrocesso histórico", "desastre ambiental") e posicionamento explícito do autor, características incompatíveis com o gênero notícia.'
    },
    {
      id: 104043,
      exercise_id: 10404,
      option_text: 'Editorial, caracterizado por expressar a opinião institucional do veículo de comunicação, sem assinatura individual.',
      is_correct: false,
      explanation: 'Incorreto! Embora seja um texto opinativo, não se trata de um editorial, pois está publicado na seção de opinião (onde normalmente se publicam artigos assinados) e não representa necessariamente a posição institucional do jornal, mas a opinião individual de um articulista.'
    },
    {
      id: 104044,
      exercise_id: 10404,
      option_text: 'Reportagem investigativa, caracterizada pela apuração aprofundada e apresentação de provas documentais.',
      is_correct: false,
      explanation: 'Incorreto! O texto não apresenta elementos de apuração jornalística, fontes diversificadas ou documentos comprobatórios, características essenciais da reportagem investigativa. Trata-se de um texto argumentativo e opinativo.'
    },
    {
      id: 104045,
      exercise_id: 10404,
      option_text: 'Nota informativa, caracterizada pela brevidade e concisão na apresentação de um fato recente.',
      is_correct: false,
      explanation: 'Incorreto! O texto não é uma nota informativa, pois não se limita a apresentar brevemente um fato, mas desenvolve argumentos e expressa opinião clara sobre uma decisão governamental, características de um artigo opinativo.'
    }
  ]
};
