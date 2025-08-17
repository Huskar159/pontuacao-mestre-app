-- Primeiro, apagar os exercícios existentes da categoria 'ponto-virgula' (caso existam)
DELETE FROM exercise_options WHERE exercise_id IN (SELECT id FROM exercises WHERE category_id = 'ponto-virgula');
DELETE FROM exercises WHERE category_id = 'ponto-virgula';

-- Criar a categoria para Ponto e Vírgula
INSERT INTO exercise_categories (id, title, description)
SELECT 'ponto-virgula', 'Ponto e Vírgula (;)', 'Exercícios sobre o uso correto do ponto e vírgula na língua portuguesa.'
WHERE NOT EXISTS (SELECT 1 FROM exercise_categories WHERE id = 'ponto-virgula');

-- Exercício 1
DO $$
DECLARE
  ex1_id INTEGER;
BEGIN
  INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
  ('ponto-virgula', 'Qual alternativa apresenta o uso correto do ponto e vírgula para separar orações coordenadas extensas?', 'O ponto e vírgula é usado para separar orações coordenadas extensas, especialmente quando não há conjunção entre elas.', 1)
  RETURNING id INTO ex1_id;

  INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation) VALUES
  (ex1_id, 'Uns foram para a praia, outros preferiram ficar em casa.', false, 'Incorreta. Como as orações são curtas, a vírgula é suficiente para separá-las.'),
  (ex1_id, 'Uns foram para a praia; outros preferiram ficar em casa.', true, 'Correta. O ponto e vírgula separa adequadamente as duas orações coordenadas que não têm conjunção entre elas.'),
  (ex1_id, 'Uns foram para a praia e outros preferiram ficar em casa.', false, 'Incorreta. A conjunção "e" elimina a necessidade do ponto e vírgula.'),
  (ex1_id, 'Uns foram para a praia. Outros preferiram ficar em casa.', false, 'Incorreta. O ponto final cria duas frases independentes, perdendo a relação de coordenação.');
END $$;

-- Exercício 2
DO $$
DECLARE
  ex2_id INTEGER;
BEGIN
  INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
  ('ponto-virgula', 'Em qual das alternativas o ponto e vírgula está sendo usado corretamente em uma enumeração complexa?', 'O ponto e vírgula é usado para separar itens em enumerações quando os itens já contêm vírgulas internamente.', 1)
  RETURNING id INTO ex2_id;

  INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation) VALUES
  (ex2_id, 'No shopping comprei: camisa, azul; calça, preta; e sapatos, marrom.', false, 'Incorreta. O uso do ponto e vírgula está inadequado, pois os itens não são complexos o suficiente.'),
  (ex2_id, 'Art. 1º. São direitos do consumidor: proteção à vida, saúde; educação para consumo; informação adequada.', false, 'Incorreta. O primeiro ponto e vírgula está mal posicionado, separando "vida" de "saúde" que fazem parte do mesmo item.'),
  (ex2_id, 'Art. 1º. São direitos do consumidor: I - proteção à vida; II - educação para o consumo; III - informação adequada.', true, 'Correta. O ponto e vírgula separa corretamente os itens enumerados com numeração romana.'),
  (ex2_id, 'Comparecerem à reunião: João, diretor; Maria, gerente, Pedro, supervisor.', false, 'Incorreta. Falta ponto e vírgula entre "gerente" e "Pedro".');
END $$;

-- Exercício 3
DO $$
DECLARE
  ex3_id INTEGER;
BEGIN
  INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
  ('ponto-virgula', 'Identifique a alternativa em que o ponto e vírgula é usado para introduzir uma explicação ou conclusão:', 'O ponto e vírgula pode ser usado antes de conjunções conclusivas ou explicativas para dar mais ênfase à conexão.', 2)
  RETURNING id INTO ex3_id;

  INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation) VALUES
  (ex3_id, 'O céu está nublado; portanto, vai chover.', true, 'Correta. O ponto e vírgula antecede a conjunção conclusiva "portanto", reforçando a relação entre os fatos.'),
  (ex3_id, 'O céu está nublado, portanto, vai chover.', false, 'Incorreta. O uso da vírgula não enfatiza suficientemente a relação conclusiva.'),
  (ex3_id, 'O céu está nublado; vai chover.', false, 'Incorreta. Falta a conjunção conclusiva ou explicativa após o ponto e vírgula.'),
  (ex3_id, 'O céu está nublado. Portanto, vai chover.', false, 'Incorreta. O ponto final separa demais as orações, enfraquecendo a relação de conclusão.');
END $$;

-- Exercício 4
DO $$
DECLARE
  ex4_id INTEGER;
BEGIN
  INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
  ('ponto-virgula', 'Qual alternativa apresenta o uso correto do ponto e vírgula em uma citação?', 'Em citações de textos jurídicos ou formais, o ponto e vírgula pode separar artigos, parágrafos ou alíneas.', 2)
  RETURNING id INTO ex4_id;

  INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation) VALUES
  (ex4_id, 'Conforme o artigo 5º; todos são iguais perante a lei.', false, 'Incorreta. Não se usa ponto e vírgula entre o número do artigo e seu conteúdo.'),
  (ex4_id, 'Art. 5º: Todos são iguais perante a lei; sem distinção de qualquer natureza.', true, 'Correta. O ponto e vírgula separa adequadamente duas partes importantes do artigo.'),
  (ex4_id, 'Art. 5º, Todos são iguais perante a lei; sem distinção de qualquer natureza.', false, 'Incorreta. Usa-se dois pontos, não vírgula, após o número do artigo.'),
  (ex4_id, 'Art. 5º. Todos são iguais perante a lei, sem distinção de qualquer natureza.', false, 'Incorreta. O uso da vírgula não é adequado para separar partes importantes de um artigo legal.');
END $$;

-- Exercício 5
DO $$
DECLARE
  ex5_id INTEGER;
BEGIN
  INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
  ('ponto-virgula', 'Em qual caso o uso do ponto e vírgula está incorreto?', 'O ponto e vírgula não deve ser usado para separar sujeito e predicado ou elementos essenciais da oração.', 2)
  RETURNING id INTO ex5_id;

  INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation) VALUES
  (ex5_id, 'O professor ensinou a lição; os alunos prestaram atenção.', false, 'Correta. O ponto e vírgula separa adequadamente duas orações independentes.'),
  (ex5_id, 'O professor; ensinou a lição aos alunos.', true, 'Incorreta. Não se deve usar ponto e vírgula entre o sujeito "O professor" e o predicado "ensinou a lição".'),
  (ex5_id, 'Estudei muito; porém, não passei na prova.', false, 'Correta. O ponto e vírgula antes da conjunção adversativa "porém" está adequado.'),
  (ex5_id, 'De um lado, os otimistas; de outro, os pessimistas.', false, 'Correta. O ponto e vírgula separa adequadamente elementos paralelos em contraste.');
END $$;

-- Exercício 6
DO $$
DECLARE
  ex6_id INTEGER;
BEGIN
  INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
  ('ponto-virgula', 'Identifique a alternativa em que o ponto e vírgula é usado corretamente em uma enumeração detalhada:', 'O ponto e vírgula é usado para separar itens de enumerações quando estes já contêm vírgulas.', 2)
  RETURNING id INTO ex6_id;

  INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation) VALUES
  (ex6_id, 'Precisamos dos seguintes materiais: cadernos, para anotações; lápis, para desenhos; e canetas, para escrita permanente.', true, 'Correta. O ponto e vírgula separa adequadamente itens que já contêm vírgulas internas.'),
  (ex6_id, 'Precisamos dos seguintes materiais: cadernos; lápis; e canetas.', false, 'Incorreta. Como os itens são simples, sem vírgulas internas, deveriam ser separados por vírgulas, não por pontos e vírgulas.'),
  (ex6_id, 'Precisamos dos seguintes materiais; cadernos, lápis e canetas.', false, 'Incorreta. O ponto e vírgula está mal posicionado, separando a introdução da própria enumeração.'),
  (ex6_id, 'Precisamos dos seguintes materiais: cadernos, para anotações, lápis, para desenhos, e canetas, para escrita permanente.', false, 'Incorreta. Sem pontos e vírgulas para separar os itens complexos, o texto fica confuso.');
END $$;

-- Exercício 7
DO $$
DECLARE
  ex7_id INTEGER;
BEGIN
  INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
  ('ponto-virgula', 'Em qual alternativa o ponto e vírgula separa orações com sentido completo mas relacionadas entre si?', 'O ponto e vírgula é usado para separar orações independentes que têm relação semântica entre si.', 3)
  RETURNING id INTO ex7_id;

  INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation) VALUES
  (ex7_id, 'A empresa fez uma boa proposta; aceitei imediatamente.', true, 'Correta. O ponto e vírgula separa duas orações independentes mas semanticamente relacionadas.'),
  (ex7_id, 'A empresa fez uma boa proposta e aceitei imediatamente.', false, 'Incorreta. A conjunção "e" já estabelece a ligação entre as orações, tornando desnecessário o ponto e vírgula.'),
  (ex7_id, 'A empresa; fez uma boa proposta.', false, 'Incorreta. Não se deve separar sujeito e predicado com ponto e vírgula.'),
  (ex7_id, 'A empresa fez. Uma boa proposta aceitei.', false, 'Incorreta. O uso do ponto está inadequado, criando frases incompletas.');
END $$;

-- Exercício 8
DO $$
DECLARE
  ex8_id INTEGER;
BEGIN
  INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
  ('ponto-virgula', 'Qual alternativa mostra o uso correto do ponto e vírgula em texto jurídico?', 'Em textos jurídicos, o ponto e vírgula é usado para separar parágrafos, incisos e alíneas.', 3)
  RETURNING id INTO ex8_id;

  INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation) VALUES
  (ex8_id, 'São objetivos fundamentais da República: I - construir uma sociedade livre; II - garantir o desenvolvimento; III - erradicar a pobreza.', true, 'Correta. O ponto e vírgula separa adequadamente os incisos de um artigo constitucional.'),
  (ex8_id, 'São objetivos fundamentais da República: I - construir uma sociedade livre, II - garantir o desenvolvimento, III - erradicar a pobreza.', false, 'Incorreta. Incisos devem ser separados por ponto e vírgula, não por vírgula.'),
  (ex8_id, 'São objetivos fundamentais da República; I - construir uma sociedade livre; II - garantir o desenvolvimento; III - erradicar a pobreza.', false, 'Incorreta. Após "República" deve-se usar dois pontos, não ponto e vírgula.'),
  (ex8_id, 'São objetivos fundamentais da República: I - construir uma sociedade livre. II - garantir o desenvolvimento. III - erradicar a pobreza.', false, 'Incorreta. Incisos devem ser separados por ponto e vírgula, não por ponto final.');
END $$;

-- Exercício 9
DO $$
DECLARE
  ex9_id INTEGER;
BEGIN
  INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
  ('ponto-virgula', 'Identifique a alternativa em que o ponto e vírgula é usado corretamente antes de conjunção adversativa:', 'O ponto e vírgula pode anteceder conjunções adversativas como "mas", "porém", "contudo" para enfatizar o contraste.', 3)
  RETURNING id INTO ex9_id;

  INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation) VALUES
  (ex9_id, 'Tentei avisar a todos; porém, ninguém me escutou.', true, 'Correta. O ponto e vírgula é adequado antes da conjunção adversativa "porém".'),
  (ex9_id, 'Tentei avisar a todos, porém, ninguém me escutou.', false, 'Incorreta. Quando há forte contraste, o uso da vírgula é menos enfático que o ponto e vírgula.'),
  (ex9_id, 'Tentei avisar a todos; e ninguém me escutou.', false, 'Incorreta. Antes da conjunção aditiva "e" geralmente não se usa ponto e vírgula, a menos que as orações sejam muito extensas.'),
  (ex9_id, 'Tentei avisar; a todos porém ninguém me escutou.', false, 'Incorreta. A pontuação está totalmente inadequada, separando o verbo de seu complemento.');
END $$;

-- Exercício 10
DO $$
DECLARE
  ex10_id INTEGER;
BEGIN
  INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
  ('ponto-virgula', 'Qual das seguintes sentenças usa o ponto e vírgula para separar partes de um período que já contém vírgulas internas?', 'O ponto e vírgula é usado para evitar ambiguidade em períodos onde já existem muitas vírgulas.', 3)
  RETURNING id INTO ex10_id;

  INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation) VALUES
  (ex10_id, 'O jogador, segundo o treinador, está recuperado; mas, conforme orientação médica, não jogará amanhã.', true, 'Correta. O ponto e vírgula separa as duas partes principais do período, cada uma já contendo vírgulas internas.'),
  (ex10_id, 'O jogador, segundo o treinador, está recuperado, mas, conforme orientação médica, não jogará amanhã.', false, 'Incorreta. Sem o ponto e vírgula, o período fica com muitas vírgulas, prejudicando a clareza.'),
  (ex10_id, 'O jogador; segundo o treinador, está recuperado; mas, conforme orientação médica, não jogará amanhã.', false, 'Incorreta. O primeiro ponto e vírgula está mal posicionado, separando o sujeito de seu aposto.'),
  (ex10_id, 'O jogador segundo o treinador está recuperado; mas conforme orientação médica não jogará amanhã.', false, 'Incorreta. Faltam vírgulas para isolar os apostos "segundo o treinador" e "conforme orientação médica".');
END $$;
