-- Script alternativo para criar opções para o Exercício 1 - Dois Pontos
-- Este script usa uma abordagem direta com CTE para selecionar os IDs corretos

WITH exercicios AS (
  SELECT id, question, ROW_NUMBER() OVER (ORDER BY created_at) as num
  FROM exercises 
  WHERE category_id = 'dois-pontos'
  ORDER BY created_at
)

-- Inserir opções para a questão 1
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
  (SELECT id FROM exercicios WHERE num = 1),
  'O professor disse: "Amanhã teremos prova."',
  TRUE,
  'Correto! Os dois pontos são usados antes de uma citação direta.'
UNION ALL
SELECT 
  (SELECT id FROM exercicios WHERE num = 1),
  'Precisamos de vários itens: canetas, lápis e cadernos.',
  TRUE,
  'Correto! Os dois pontos são usados antes de uma enumeração.'
UNION ALL
SELECT 
  (SELECT id FROM exercicios WHERE num = 1),
  'Concluí: o problema era mais simples do que parecia.',
  TRUE,
  'Correto! Os dois pontos são usados para introduzir uma conclusão.'
UNION ALL
SELECT 
  (SELECT id FROM exercicios WHERE num = 1),
  'Fui à loja, comprei tudo o que precisava: e voltei para casa.',
  FALSE,
  'Incorreto! Não se usa dois pontos antes de "e" dessa forma.'
UNION ALL
SELECT 
  (SELECT id FROM exercicios WHERE num = 1),
  'Ele respondeu: que não viria à reunião.',
  FALSE,
  'Incorreto! Não se deve usar dois pontos antes de "que" neste contexto.';

-- Inserir opções para a questão 2
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
  (SELECT id FROM exercicios WHERE num = 2),
  'Ficou claro: ele não queria participar da atividade.',
  TRUE,
  'Correto! Os dois pontos introduzem uma explicação do que foi mencionado antes.'
UNION ALL
SELECT 
  (SELECT id FROM exercicios WHERE num = 2),
  'O resultado foi surpreendente: ninguém esperava um desempenho tão bom.',
  TRUE,
  'Correto! Os dois pontos introduzem uma explicação ou esclarecimento.'
UNION ALL
SELECT 
  (SELECT id FROM exercicios WHERE num = 2),
  'A conclusão é óbvia: precisamos mudar nossa estratégia.',
  TRUE,
  'Correto! Os dois pontos introduzem uma explicação ou conclusão.'
UNION ALL
SELECT 
  (SELECT id FROM exercicios WHERE num = 2),
  'Maria: chegou atrasada para a aula.',
  FALSE,
  'Incorreto! Neste caso, não se usa dois pontos para separar o sujeito do predicado.'
UNION ALL
SELECT 
  (SELECT id FROM exercicios WHERE num = 2),
  'Eles estavam preocupados: por causa da chuva.',
  FALSE,
  'Incorreto! Não se usa dois pontos antes de "por causa" neste contexto.';

-- Continue o mesmo padrão para as questões 3-10...
