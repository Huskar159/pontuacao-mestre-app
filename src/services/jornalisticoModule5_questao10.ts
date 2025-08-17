import { Exercise } from './exerciseService';

// Décima questão do complemento para o Módulo 5 de Textos Jornalísticos
export const textoJornalisticoExercicio5Questao10: Exercise = {
  id: 10409,
  category_id: 'interpretacao-jornalistico-5',
  question: 'Leia o trecho a seguir, publicado em um blog de tecnologia:\n\n"Testei durante uma semana o novo smartphone XYZ, lançado ontem no mercado brasileiro. Com preço sugerido de R$ 3.999, o aparelho promete revolucionar o mercado com sua câmera de 108 MP e bateria que, segundo o fabricante, dura até dois dias. Mas será que entrega o que promete? Nas minhas experiências diárias, a bateria não passou de 36 horas com uso moderado — bom, mas abaixo do anunciado. A câmera impressiona em condições ideais de luminosidade, mas decepciona à noite, com fotos granuladas e sem definição. A interface do sistema está mais fluida que a geração anterior, mas ainda apresenta travamentos ocasionais em aplicativos pesados. Considerando o preço elevado, esperava mais do aparelho, especialmente no departamento fotográfico noturno."\n\nQual gênero jornalístico está representado neste texto e qual sua principal característica presente?',
  explanation: 'O jornalismo contemporâneo apresenta diversos gêneros textuais, cada um com características específicas.',
  difficulty: 2,
  options: [
    {
      id: 104091,
      exercise_id: 10409,
      option_text: 'Resenha crítica/review, caracterizada pela avaliação pessoal do autor sobre um produto após testá-lo diretamente, combinando informações objetivas com juízos de valor explícitos baseados na experiência de uso.',
      is_correct: true,
      explanation: 'Correto! O texto é uma resenha crítica (ou review), gênero muito comum no jornalismo especializado em tecnologia, que apresenta como característica principal a avaliação pessoal do autor após testar diretamente o produto ("Testei durante uma semana"). Ele combina informações factuais objetivas (preço, especificações) com juízos de valor explícitos baseados na experiência de uso ("impressiona", "decepciona", "esperava mais"), oferecendo ao leitor uma análise crítica do produto que vai além das informações oficiais do fabricante.'
    },
    {
      id: 104092,
      exercise_id: 10409,
      option_text: 'Notícia objetiva, caracterizada pelo relato imparcial e factual do lançamento do smartphone, sem elementos opinativos.',
      is_correct: false,
      explanation: 'Incorreto! O texto não é uma notícia objetiva, pois não se limita a relatar fatos de forma imparcial, mas apresenta claramente a opinião pessoal do autor sobre o produto testado, com juízos de valor explícitos ("decepciona", "esperava mais").'
    },
    {
      id: 104093,
      exercise_id: 10409,
      option_text: 'Release publicitário, caracterizado pela apresentação exclusivamente positiva do produto, destacando apenas suas qualidades para promover vendas.',
      is_correct: false,
      explanation: 'Incorreto! O texto não é um release publicitário, pois apresenta críticas claras ao produto (duração da bateria abaixo do anunciado, baixa qualidade em fotos noturnas, travamentos) e expressa decepção com alguns aspectos, o que seria incompatível com o propósito promocional de um release.'
    },
    {
      id: 104094,
      exercise_id: 10409,
      option_text: 'Artigo científico, caracterizado pela análise técnica detalhada e metodológica do funcionamento interno do aparelho.',
      is_correct: false,
      explanation: 'Incorreto! O texto não é um artigo científico, pois não apresenta análise técnica detalhada com metodologia científica rigorosa, mas relato de experiência pessoal de uso cotidiano do produto e impressões subjetivas do autor.'
    },
    {
      id: 104095,
      exercise_id: 10409,
      option_text: 'Editorial tecnológico, caracterizado por representar a opinião oficial da publicação sobre tendências do mercado de smartphones.',
      is_correct: false,
      explanation: 'Incorreto! O texto não é um editorial, pois não representa a posição institucional de uma publicação sobre um tema amplo, mas a experiência e avaliação pessoal do autor sobre um produto específico que ele testou individualmente.'
    }
  ]
};
