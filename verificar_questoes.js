// Script para verificar quantas questões existem na prova final de parênteses
const fs = require('fs');
const path = require('path');

// Caminho para o arquivo parentesesData.ts
const filePath = path.join(__dirname, 'src', 'services', 'parentesesData.ts');

// Ler o conteúdo do arquivo
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  // Encontrar o início do array provaParenteses
  const startProva = data.indexOf('export const provaParenteses: Exercise[] = [');
  if (startProva === -1) {
    console.error('Array provaParenteses não encontrado');
    return;
  }

  // Encontrar o fim do array (o próximo '];')
  const endProva = data.indexOf('];', startProva);
  if (endProva === -1) {
    console.error('Fim do array provaParenteses não encontrado');
    return;
  }

  // Extrair o conteúdo do array
  const provaContent = data.substring(startProva, endProva + 2);
  
  // Contar quantas ocorrências de 'id:' existem no array
  const questionCount = (provaContent.match(/id: 75\d\d,/g) || []).length;
  
  console.log(`Total de questões na prova final de parênteses: ${questionCount}`);
  
  // Verificar se as questões têm a categoria correta
  const categoryIdMatches = provaContent.match(/category_id: 'prova-parenteses'/g) || [];
  console.log(`Total de questões com category_id 'prova-parenteses': ${categoryIdMatches.length}`);
});
