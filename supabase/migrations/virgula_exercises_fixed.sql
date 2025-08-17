-- Primeiro, apagar os exercícios existentes da categoria 'virgula'
DELETE FROM exercise_options WHERE exercise_id IN (SELECT id FROM exercises WHERE category_id = 'virgula');
DELETE FROM exercises WHERE category_id = 'virgula';

-- Atualizar a categoria para identificar claramente como Módulo 1
UPDATE exercise_categories SET title = 'Módulo 1: Vírgula (,)' WHERE id = 'virgula';
-- Se a categoria não existir, criá-la
INSERT INTO exercise_categories (id, title, description)
SELECT 'virgula', 'Módulo 1: Vírgula (,)', 'Exercícios sobre o uso correto da vírgula na língua portuguesa.'
WHERE NOT EXISTS (SELECT 1 FROM exercise_categories WHERE id = 'virgula');

-- Exercício 1
DO $$
DECLARE
  ex1_id INTEGER;
BEGIN
  INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
  ('virgula', 'Identifique a alternativa em que a vírgula está sendo usada corretamente:', 'A vírgula separa elementos de uma enumeração.', 1)
  RETURNING id INTO ex1_id;

  INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation) VALUES
  (ex1_id, 'Comprei, pão queijo, leite e ovos no mercado.', false, 'Incorreta. Não se usa vírgula entre o verbo e seu complemento.'),
  (ex1_id, 'Comprei pão, queijo, leite e ovos no mercado.', true, 'Correta. A vírgula separa os elementos de uma enumeração, exceto o último que é precedido pela conjunção "e".'),
  (ex1_id, 'Comprei pão queijo, leite, e ovos no mercado.', false, 'Incorreta. Falta vírgula entre "pão" e "queijo", e não se usa vírgula antes da conjunção "e" em enumerações simples.'),
  (ex1_id, 'Comprei pão, queijo leite, e ovos no mercado.', false, 'Incorreta. Falta vírgula entre "queijo" e "leite", e não se usa vírgula antes da conjunção "e" em enumerações simples.');
END $$;

-- Exercício 2
DO $$
DECLARE
  ex2_id INTEGER;
BEGIN
  INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
  ('virgula', 'Qual alternativa apresenta o uso correto da vírgula para isolar o aposto?', 'O aposto é um termo que explica ou especifica outro termo da oração e deve ser isolado por vírgulas.', 1)
  RETURNING id INTO ex2_id;

  INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation) VALUES
  (ex2_id, 'Paulo o médico da família, fará a cirurgia amanhã.', false, 'Incorreta. Falta a primeira vírgula para isolar o aposto.'),
  (ex2_id, 'Paulo, o médico da família fará a cirurgia amanhã.', false, 'Incorreta. Falta a segunda vírgula para isolar o aposto.'),
  (ex2_id, 'Paulo, o médico da família, fará a cirurgia amanhã.', true, 'Correta. As vírgulas isolam o aposto "o médico da família", que explica quem é Paulo.'),
  (ex2_id, 'Paulo o médico da família fará a cirurgia amanhã.', false, 'Incorreta. O aposto "o médico da família" não está isolado por vírgulas.');
END $$;

-- Exercício 3
DO $$
DECLARE
  ex3_id INTEGER;
BEGIN
  INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
  ('virgula', 'Identifique a frase em que a vírgula está sendo usada corretamente com o adjunto adverbial:', 'Adjuntos adverbiais deslocados, especialmente no início da frase, devem ser seguidos de vírgula.', 1)
  RETURNING id INTO ex3_id;

  INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation) VALUES
  (ex3_id, 'No próximo domingo iremos todos ao parque.', false, 'Incorreta. Falta a vírgula após o adjunto adverbial deslocado.'),
  (ex3_id, 'Iremos, todos ao parque no próximo domingo.', false, 'Incorreta. Não se usa vírgula entre o verbo e seu complemento.'),
  (ex3_id, 'Iremos todos, ao parque no próximo domingo.', false, 'Incorreta. Não se usa vírgula entre o sujeito composto e o complemento.'),
  (ex3_id, 'No próximo domingo, iremos todos ao parque.', true, 'Correta. A vírgula separa o adjunto adverbial "No próximo domingo" deslocado no início da frase.');
END $$;

-- Exercício 4
DO $$
DECLARE
  ex4_id INTEGER;
BEGIN
  INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
  ('virgula', 'Onde a vírgula está sendo usada INCORRETAMENTE?', 'Não se usa vírgula para separar o sujeito do predicado.', 2)
  RETURNING id INTO ex4_id;

  INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation) VALUES
  (ex4_id, 'Ontem à noite, assisti a um filme interessante.', false, 'Incorreta. A vírgula está corretamente usada após o adjunto adverbial "Ontem à noite".'),
  (ex4_id, 'O aluno, entregou o trabalho no prazo estabelecido.', true, 'Correta identificação do erro. Não se usa vírgula entre o sujeito "O aluno" e o predicado "entregou o trabalho".'),
  (ex4_id, 'João, venha cá imediatamente!', false, 'Incorreta. A vírgula está corretamente usada após o vocativo "João".'),
  (ex4_id, 'Ele disse que, se possível, viria mais cedo.', false, 'Incorreta. As vírgulas estão corretamente isolando a expressão "se possível".');
END $$;

-- Exercício 5
DO $$
DECLARE
  ex5_id INTEGER;
BEGIN
  INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
  ('virgula', 'Qual alternativa apresenta o uso correto da vírgula com expressão explicativa?', 'Expressões explicativas como "ou seja", "isto é", "por exemplo" devem ser isoladas por vírgulas.', 2)
  RETURNING id INTO ex5_id;

  INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation) VALUES
  (ex5_id, 'Os livros ou seja, o material didático, serão distribuídos amanhã.', false, 'Incorreta. Falta a primeira vírgula antes da expressão explicativa.'),
  (ex5_id, 'Os livros, ou seja o material didático, serão distribuídos amanhã.', false, 'Incorreta. Falta a vírgula após a expressão explicativa "ou seja".'),
  (ex5_id, 'Os livros, ou seja, o material didático serão distribuídos amanhã.', false, 'Incorreta. Falta a segunda vírgula para fechar a expressão explicativa.'),
  (ex5_id, 'Os livros, ou seja, o material didático, serão distribuídos amanhã.', true, 'Correta. As vírgulas isolam a expressão explicativa "ou seja".');
END $$;

-- Exercício 6
DO $$
DECLARE
  ex6_id INTEGER;
BEGIN
  INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
  ('virgula', 'Qual frase apresenta o uso correto da vírgula com vocativo?', 'O vocativo é um termo usado para chamar, invocar ou interpelar alguém e deve ser separado por vírgula.', 1)
  RETURNING id INTO ex6_id;

  INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation) VALUES
  (ex6_id, 'Maria venha jantar agora!', false, 'Incorreta. Falta a vírgula após o vocativo "Maria".'),
  (ex6_id, 'Venha, Maria jantar agora!', false, 'Incorreta. A vírgula está no lugar errado. Deveria estar após "Maria".'),
  (ex6_id, 'Maria, venha jantar agora!', true, 'Correta. A vírgula separa o vocativo "Maria" do resto da frase.'),
  (ex6_id, 'Venha Maria, jantar agora!', false, 'Incorreta. A vírgula está no lugar errado. Deveria estar após "Maria".');
END $$;

-- Exercício 7
DO $$
DECLARE
  ex7_id INTEGER;
BEGIN
  INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
  ('virgula', 'Na frase "Sim, eu concordo com você", a vírgula é usada para:', 'Palavras de afirmação, negação ou dúvida no início da frase devem ser seguidas de vírgula.', 2)
  RETURNING id INTO ex7_id;

  INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation) VALUES
  (ex7_id, 'Separar o sujeito do predicado', false, 'Incorreta. A vírgula não está separando sujeito e predicado, mas sim a palavra de afirmação.'),
  (ex7_id, 'Indicar uma pausa estilística', false, 'Incorreta. Embora a vírgula indique uma pausa, sua função específica é separar a palavra de afirmação.'),
  (ex7_id, 'Separar palavra de afirmação', true, 'Correta. A vírgula separa a palavra de afirmação "Sim" do resto da frase.'),
  (ex7_id, 'Separar termos coordenados', false, 'Incorreta. Não há termos coordenados sendo separados pela vírgula.');
END $$;

-- Exercício 8
DO $$
DECLARE
  ex8_id INTEGER;
BEGIN
  INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
  ('virgula', 'Na frase "Ele estudou muito, portanto merece passar", a vírgula é usada para:', 'A vírgula é usada para separar orações coordenadas, especialmente quando ligadas por conjunções conclusivas como "portanto".', 2)
  RETURNING id INTO ex8_id;

  INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation) VALUES
  (ex8_id, 'Indicar uma enumeração', false, 'Incorreta. Não há enumeração na frase.'),
  (ex8_id, 'Isolar um aposto', false, 'Incorreta. Não há aposto na frase.'),
  (ex8_id, 'Separar o sujeito do predicado', false, 'Incorreta. A vírgula não está separando sujeito e predicado, mas sim orações coordenadas.'),
  (ex8_id, 'Separar orações coordenadas', true, 'Correta. A vírgula separa as orações coordenadas ligadas pela conjunção conclusiva "portanto".');
END $$;

-- Exercício 9
DO $$
DECLARE
  ex9_id INTEGER;
BEGIN
  INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
  ('virgula', 'Onde a vírgula é obrigatória?', 'A vírgula é obrigatória para isolar o aposto.', 3)
  RETURNING id INTO ex9_id;

  INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation) VALUES
  (ex9_id, 'Amanhã vou ao cinema.', false, 'Incorreta. Não há necessidade de vírgula nesta frase.'),
  (ex9_id, 'Lisboa, capital de Portugal, é uma cidade histórica.', true, 'Correta. As vírgulas são obrigatórias para isolar o aposto "capital de Portugal".'),
  (ex9_id, 'Ele disse que viria hoje.', false, 'Incorreta. Não há necessidade de vírgula nesta frase.'),
  (ex9_id, 'Comprei um livro novo.', false, 'Incorreta. Não há necessidade de vírgula nesta frase.');
END $$;

-- Exercício 10
DO $$
DECLARE
  ex10_id INTEGER;
BEGIN
  INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
  ('virgula', 'Qual alternativa apresenta o uso correto da vírgula em orações subordinadas adverbiais?', 'Orações subordinadas adverbiais, especialmente quando antepostas à oração principal, devem ser seguidas de vírgula.', 3)
  RETURNING id INTO ex10_id;

  INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation) VALUES
  (ex10_id, 'Quando o professor chegou todos os alunos se levantaram.', false, 'Incorreta. Falta a vírgula após a oração subordinada adverbial.'),
  (ex10_id, 'Todos os alunos, se levantaram quando o professor chegou.', false, 'Incorreta. Não se usa vírgula entre o sujeito e o predicado.'),
  (ex10_id, 'Quando o professor chegou, todos os alunos se levantaram.', true, 'Correta. A vírgula separa a oração subordinada adverbial temporal "Quando o professor chegou" da oração principal.'),
  (ex10_id, 'Todos os alunos se levantaram, quando o professor chegou.', false, 'Incorreta. Não se usa vírgula quando a oração subordinada adverbial vem depois da oração principal.');
END $$;
