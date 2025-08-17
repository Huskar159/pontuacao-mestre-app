// Este serviço fornece funções para analisar e corrigir textos quanto à pontuação

interface Correction {
  position: { start: number; end: number };
  original: string;
  suggestion: string;
  explanation: string;
  type: 'error' | 'warning' | 'info';
}

// Regras de pontuação para verificação
const punctuationRules: Array<{
  pattern: RegExp;
  test: (match: string, text: string, index: number) => boolean;
  suggestion: (match: string) => string;
  explanation: string;
  type: 'error' | 'warning' | 'info';
}> = [
  // Nova regra para detectar vírgulas entre artigo e substantivo
  {
    pattern: /\b(o|a|os|as|um|uma|uns|umas)\s*,\s*(\w+)\b/gi,
    test: () => true,
    suggestion: (match: string) => match.replace(/\s*,\s*/, ' '),
    explanation: 'Não se deve usar vírgula entre um artigo e o substantivo a que ele se refere.',
    type: 'error'
  },
  // Nova regra para detectar vírgulas entre sujeito e verbo
  {
    pattern: /\b(\w+)\s*,\s*(\b\w{1,5}\b)\s+(\w+)/g,
    test: (match: string, text: string, index: number) => {
      // Verificar se a segunda palavra é provavelmente um verbo (simplificação)
      const words = match.split(/\s*,\s*/); 
      const possibleVerb = words[1]?.trim();
      // Lista simplificada de verbos comuns curtos
      const commonVerbs = ['está', 'tem', 'foi', 'vai', 'vem', 'é', 'era', 'ser', 'ter', 'ir', 'vir', 'dar', 'faz'];
      return commonVerbs.includes(possibleVerb.toLowerCase());
    },
    suggestion: (match: string) => match.replace(/\s*,\s*/, ' '),
    explanation: 'Não se deve usar vírgula entre o sujeito e o verbo da oração.',
    type: 'error'
  },
  // Nova regra para detectar vírgulas excessivas em sequência de palavras
  {
    pattern: /\b(\w+)\s*,\s*(\w+)\s*,\s*(\w+)/g,
    test: (match: string, text: string, index: number) => {
      // Verificar se não é uma enumeração válida (simplificação)
      const words = match.split(/\s*,\s*/); 
      // Conjunções que não devem ser precedidas de vírgula em enumerações simples
      const conjunctions = ['e', 'ou', 'nem'];
      return !conjunctions.includes(words[words.length - 1].toLowerCase());
    },
    suggestion: (match: string) => {
      // Manter apenas a primeira vírgula se for uma enumeração
      const words = match.split(/\s*,\s*/);
      return `${words[0]}, ${words[1]} ${words[2]}`;
    },
    explanation: 'Vírgulas excessivas prejudicam a leitura. Em sequências de palavras, use vírgulas apenas para separar itens de uma enumeração.',
    type: 'error'
  },
  // Nova regra para detectar vírgulas entre verbo e complemento direto
  {
    pattern: /\b(\w+)\s*,\s*(o|a|os|as|um|uma|uns|umas|este|esta|estes|estas|esse|essa|esses|essas|isto|isso|aquilo)\b/gi,
    test: (match: string, text: string, index: number) => {
      // Obter a palavra antes da vírgula
      const beforeComma = match.split(',')[0].trim();
      // Verificar se termina com uma terminação verbal comum
      return /([aeiou]r|ou|am|em|ia|ará|erá|irá)$/i.test(beforeComma);
    },
    suggestion: (match: string) => match.replace(/\s*,\s*/, ' '),
    explanation: 'Não se deve usar vírgula entre o verbo e seu complemento direto.',
    type: 'error'
  },
  // Nova regra para detectar vírgulas entre preposição e seu complemento
  {
    pattern: /\b(em|de|para|por|com|sem|sob|sobre|entre|até|desde|após|perante)\s*,\s*(\w+)/gi,
    test: () => true,
    suggestion: (match: string) => match.replace(/\s*,\s*/, ' '),
    explanation: 'Não se deve usar vírgula entre uma preposição e seu complemento.',
    type: 'error'
  },
  // Nova regra para detectar vírgulas antes de ponto de interrogação
  {
    pattern: /,\s*\?/g,
    test: () => true,
    suggestion: (match: string) => '?',
    explanation: 'Não se deve usar vírgula antes de ponto de interrogação.',
    type: 'error'
  },
  
  {
    pattern: /,\s*e/g,
    test: (match: string, text: string, index: number) => {
      // Verificar se a vírgula antes de "e" é necessária (casos específicos)
      const precedingText = text.substring(0, index);
      // Verificar se estamos em uma enumeração com mais de dois itens
      const isEnumeration = /,.*,/.test(precedingText);
      return !isEnumeration;
    },
    suggestion: (match: string) => match.replace(',', ''),
    explanation: 'Normalmente, não se usa vírgula antes da conjunção "e" em enumerações simples ou para ligar duas orações com o mesmo sujeito.',
    type: 'error'
  },
  {
    pattern: /\s+,/g,
    test: () => true,
    suggestion: (match: string) => match.replace(/\s+,/, ','),
    explanation: 'A vírgula não deve ser precedida de espaço, apenas seguida dele.',
    type: 'error'
  },
  {
    pattern: /,(?!\s)/g,
    test: (match: string, text: string, index: number) => {
      // Ignorar casos como números decimais (ex: 1,5)
      const nextChar = text.charAt(index + 1);
      return !/\d/.test(nextChar);
    },
    suggestion: (match: string) => ', ',
    explanation: 'A vírgula deve ser seguida de espaço.',
    type: 'error'
  },
  {
    pattern: /\b(pois|portanto|contudo|entretanto|mas|porém|todavia)\b(?!\s*[,;:])/g,
    test: () => true,
    suggestion: (match: string) => `, ${match}`,
    explanation: 'Conjunções adversativas e conclusivas geralmente são precedidas de vírgula.',
    type: 'warning'
  },
  {
    pattern: /\b(ou seja|isto é|por exemplo)\b(?!\s*[,:])/g,
    test: () => true,
    suggestion: (match: string) => `${match},`,
    explanation: 'Expressões explicativas como "ou seja", "isto é" e "por exemplo" geralmente são seguidas de vírgula.',
    type: 'warning'
  },
  {
    pattern: /\(\s+/g,
    test: () => true,
    suggestion: (match: string) => '(',
    explanation: 'Não deve haver espaço após o parêntese de abertura.',
    type: 'error'
  },
  {
    pattern: /\s+\)/g,
    test: () => true,
    suggestion: (match: string) => ')',
    explanation: 'Não deve haver espaço antes do parêntese de fechamento.',
    type: 'error'
  },
  {
    pattern: /;\s*[a-z]/g,
    test: () => true,
    suggestion: (match: string) => match.charAt(0) + ' ' + match.charAt(match.length - 1).toUpperCase(),
    explanation: 'Após ponto e vírgula, a palavra seguinte geralmente inicia com letra maiúscula quando se inicia uma nova oração.',
    type: 'warning'
  },
  {
    pattern: /:\s*[A-Z]/g,
    test: (match: string, text: string, index: number) => {
      // Verificar se após os dois pontos há um discurso direto ou citação
      const followingText = text.substring(index + match.length - 1);
      return !/^[A-Z].*[.!?]/.test(followingText);
    },
    suggestion: (match: string) => match.charAt(0) + ' ' + match.charAt(match.length - 1).toLowerCase(),
    explanation: 'Após dois pontos, a palavra seguinte geralmente inicia com letra minúscula, a menos que seja um discurso direto ou citação.',
    type: 'info'
  },
  {
    pattern: /\b(que|qual|quem|onde|como|quando|quanto|cujo|cuja)\b\s+,/g,
    test: () => true,
    suggestion: (match: string) => match.replace(',', ''),
    explanation: 'Não se usa vírgula após pronomes relativos.',
    type: 'error'
  },
  {
    pattern: /[.!?]\s*[a-z]/g,
    test: () => true,
    suggestion: (match: string) => match.charAt(0) + ' ' + match.charAt(match.length - 1).toUpperCase(),
    explanation: 'Após ponto final, ponto de exclamação ou ponto de interrogação, a palavra seguinte deve iniciar com letra maiúscula.',
    type: 'error'
  },
  {
    pattern: /\s+\./g,
    test: () => true,
    suggestion: (match: string) => '.',
    explanation: 'O ponto final não deve ser precedido de espaço.',
    type: 'error'
  },
  {
    pattern: /\s+[!?]/g,
    test: () => true,
    suggestion: (match: string) => match.trim(),
    explanation: 'Sinais de pontuação como ponto de exclamação e ponto de interrogação não devem ser precedidos de espaço.',
    type: 'error'
  }
];

// Função principal que verifica o texto e retorna as correções sugeridas
export async function checkPunctuation(text: string): Promise<Correction[]> {
  // Simulando uma operação assíncrona (como se estivesse consultando uma API)
  return new Promise((resolve) => {
    setTimeout(() => {
      const corrections: Correction[] = [];

      // Detectar vírgulas excessivas (mais de 30% das palavras)
      const words = text.split(/\s+/).filter(word => word.length > 0);
      const commas = text.match(/,/g) || [];
      
      if (words.length > 3 && commas.length > 0) {
        const commaRatio = commas.length / words.length;
        
        if (commaRatio > 0.3) { // Se mais de 30% das palavras são seguidas por vírgula
          corrections.push({
            position: { start: 0, end: text.length },
            original: text,
            suggestion: text, // Sugestão geral, não específica
            explanation: 'Há um uso excessivo de vírgulas neste texto. As vírgulas devem ser usadas principalmente para separar itens em enumerações, marcar intercalações ou separar orações.',
            type: 'error'
          });
        }
      }

      // Aplicar cada regra ao texto
      punctuationRules.forEach(rule => {
        // Redefinir lastIndex para permitir múltiplas execuções da mesma expressão regular
        rule.pattern.lastIndex = 0;
        
        let match;
        while ((match = rule.pattern.exec(text)) !== null) {
          const matchedText = match[0];
          const startIndex = match.index;
          const endIndex = startIndex + matchedText.length;
          
          // Verificar se a regra se aplica a este caso específico
          if (rule.test(matchedText, text, startIndex)) {
            const suggestion = rule.suggestion(matchedText);
            
            corrections.push({
              position: { start: startIndex, end: endIndex },
              original: matchedText,
              suggestion,
              explanation: rule.explanation,
              type: rule.type
            });
          }
        }
      });

      // Identificar orações longas sem vírgulas (sugestão de melhoria)
      const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
      sentences.forEach(sentence => {
        if (sentence.length > 100 && !/,/.test(sentence)) {
          const startIndex = text.indexOf(sentence);
          corrections.push({
            position: { start: startIndex, end: startIndex + sentence.length },
            original: sentence,
            suggestion: sentence, // Sem sugestão específica, apenas um alerta
            explanation: 'Esta é uma oração longa sem vírgulas. Considere dividir o pensamento com pontuação adequada para melhorar a legibilidade.',
            type: 'info'
          });
        }
      });

      resolve(corrections);
    }, 300); // Reduzido o atraso para melhorar a experiência do usuário
  });
}

// Função para verificar o uso de pontuação específica
export function checkSpecificPunctuation(text: string, punctuationType: 'comma' | 'semicolon' | 'colon' | 'parentheses'): Correction[] {
  const corrections: Correction[] = [];
  
  // Implementar verificações específicas com base no tipo de pontuação
  // Isso permitiria verificações mais detalhadas para cada tipo de pontuação
  
  return corrections;
}

// Função para sugerir melhorias estilísticas
export function suggestStyleImprovements(text: string): Correction[] {
  const corrections: Correction[] = [];
  
  // Identificar padrões estilísticos que poderiam ser melhorados
  // Ex: uso excessivo de certos conectivos, sentenças muito curtas em sequência, etc.
  
  return corrections;
}
