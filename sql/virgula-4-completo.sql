-- Inserir a categoria 'virgula-4'
INSERT INTO exercise_categories (id, title, description)
SELECT 'virgula-4', 'Vírgula', 'Mais exercícios sobre o uso da vírgula em diferentes contextos da língua portuguesa.'
WHERE NOT EXISTS (SELECT 1 FROM exercise_categories WHERE id = 'virgula-4');

-- Exercício 1
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-4',
  'Em qual alternativa a vírgula é usada corretamente para separar orações coordenadas sindéticas adversativas?',
  'Orações coordenadas sindéticas adversativas são aquelas que expressam contraste ou oposição, introduzidas por conjunções como "mas", "porém", "contudo", "todavia", entre outras.',
  2
) RETURNING id;

-- Opções para o Exercício 1
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Estudei bastante, mas não consegui passar no exame.', true, 'A vírgula está corretamente colocada antes da conjunção adversativa "mas", que introduz uma oração coordenada sindética adversativa.'),
(currval('exercises_id_seq'), 'Estudei bastante mas, não consegui passar no exame.', false, 'A vírgula está incorretamente colocada após a conjunção "mas", quando deveria estar antes.'),
(currval('exercises_id_seq'), 'Estudei bastante mas não consegui passar no exame.', false, 'Falta a vírgula antes da conjunção adversativa "mas".'),
(currval('exercises_id_seq'), 'Estudei, bastante, mas não consegui passar no exame.', false, 'As vírgulas estão incorretamente colocadas, separando o verbo "estudei" de seu complemento "bastante".');

-- Exercício 2
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-4',
  'Qual alternativa apresenta o uso correto da vírgula em uma enumeração?',
  'Em uma enumeração, os elementos são separados por vírgulas, exceto o último quando precedido por uma conjunção como "e", "ou".',
  2
) RETURNING id;

-- Opções para o Exercício 2
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Precisamos comprar arroz, feijão, macarrão e óleo.', true, 'Os elementos da enumeração estão corretamente separados por vírgulas, e o último elemento não leva vírgula por estar precedido pela conjunção "e".'),
(currval('exercises_id_seq'), 'Precisamos comprar arroz, feijão, macarrão, e óleo.', false, 'Não se usa vírgula antes da conjunção "e" quando ela introduz o último elemento de uma enumeração.'),
(currval('exercises_id_seq'), 'Precisamos comprar, arroz, feijão, macarrão e óleo.', false, 'A primeira vírgula está incorreta, pois separa o verbo "comprar" de seu complemento.'),
(currval('exercises_id_seq'), 'Precisamos comprar arroz feijão macarrão e óleo.', false, 'Faltam as vírgulas para separar os elementos da enumeração.');

-- Exercício 3
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-4',
  'Em qual alternativa a vírgula é usada corretamente para isolar um aposto?',
  'O aposto é um termo que explica, desenvolve ou resume outro termo da oração, e deve ser isolado por vírgulas.',
  3
) RETURNING id;

-- Opções para o Exercício 3
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Brasília, capital do Brasil, é uma cidade planejada.', true, 'O aposto "capital do Brasil" está corretamente isolado por vírgulas.'),
(currval('exercises_id_seq'), 'Brasília capital do Brasil, é uma cidade planejada.', false, 'Falta a primeira vírgula para isolar o aposto "capital do Brasil".'),
(currval('exercises_id_seq'), 'Brasília, capital do Brasil é uma cidade planejada.', false, 'Falta a segunda vírgula para isolar o aposto "capital do Brasil".'),
(currval('exercises_id_seq'), 'Brasília capital do Brasil é uma cidade planejada.', false, 'Faltam as vírgulas para isolar o aposto "capital do Brasil".');

-- Exercício 4
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-4',
  'Qual alternativa apresenta o uso correto da vírgula para separar orações coordenadas assindéticas?',
  'Orações coordenadas assindéticas são aquelas que não são ligadas por conjunção, e são separadas por vírgula.',
  3
) RETURNING id;

-- Opções para o Exercício 4
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'O sol brilhava, os pássaros cantavam, as crianças brincavam no parque.', true, 'As orações coordenadas assindéticas estão corretamente separadas por vírgulas.'),
(currval('exercises_id_seq'), 'O sol brilhava os pássaros cantavam as crianças brincavam no parque.', false, 'Faltam as vírgulas para separar as orações coordenadas assindéticas.'),
(currval('exercises_id_seq'), 'O sol, brilhava, os pássaros, cantavam, as crianças, brincavam no parque.', false, 'As vírgulas estão incorretamente colocadas, separando os sujeitos de seus respectivos verbos.'),
(currval('exercises_id_seq'), 'O sol brilhava, e os pássaros cantavam, e as crianças brincavam no parque.', false, 'As orações são coordenadas sindéticas (ligadas pela conjunção "e"), não assindéticas.');

-- Exercício 5
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-4',
  'Em qual alternativa a vírgula é usada corretamente para isolar uma expressão explicativa?',
  'Expressões explicativas como "isto é", "ou seja", "por exemplo", entre outras, devem ser isoladas por vírgulas.',
  2
) RETURNING id;

-- Opções para o Exercício 5
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Ele precisa de alimentos não perecíveis, isto é, alimentos que não estragam facilmente.', true, 'A expressão explicativa "isto é" está corretamente isolada por vírgulas.'),
(currval('exercises_id_seq'), 'Ele precisa de alimentos não perecíveis isto é, alimentos que não estragam facilmente.', false, 'Falta a vírgula antes da expressão explicativa "isto é".'),
(currval('exercises_id_seq'), 'Ele precisa de alimentos não perecíveis, isto é alimentos que não estragam facilmente.', false, 'Falta a vírgula depois da expressão explicativa "isto é".'),
(currval('exercises_id_seq'), 'Ele precisa de alimentos não perecíveis isto é alimentos que não estragam facilmente.', false, 'Faltam as vírgulas para isolar a expressão explicativa "isto é".');

-- Exercício 6
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-4',
  'Qual alternativa apresenta o uso correto da vírgula para isolar uma oração subordinada adverbial deslocada?',
  'Orações subordinadas adverbiais deslocadas, especialmente quando antepostas à oração principal, devem ser isoladas por vírgula.',
  3
) RETURNING id;

-- Opções para o Exercício 6
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Quando o professor chegou, todos os alunos se levantaram.', true, 'A oração subordinada adverbial "Quando o professor chegou" está corretamente isolada por vírgula.'),
(currval('exercises_id_seq'), 'Quando o professor chegou todos os alunos se levantaram.', false, 'Falta a vírgula para isolar a oração subordinada adverbial "Quando o professor chegou".'),
(currval('exercises_id_seq'), 'Todos os alunos se levantaram, quando o professor chegou.', false, 'Quando a oração subordinada adverbial vem depois da oração principal, geralmente não se usa vírgula.'),
(currval('exercises_id_seq'), 'Quando, o professor chegou, todos os alunos se levantaram.', false, 'A primeira vírgula está incorreta, pois separa a conjunção "Quando" do restante da oração subordinada.');

-- Exercício 7
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-4',
  'Em qual alternativa a vírgula é usada corretamente para isolar um adjunto adverbial deslocado?',
  'Adjuntos adverbiais deslocados, especialmente os mais longos, devem ser isolados por vírgula.',
  2
) RETURNING id;

-- Opções para o Exercício 7
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'No final da tarde, os pássaros voltam para seus ninhos.', true, 'O adjunto adverbial "No final da tarde" está deslocado no início da frase, por isso é isolado por vírgula.'),
(currval('exercises_id_seq'), 'No final da tarde os pássaros voltam para seus ninhos.', false, 'Falta a vírgula para isolar o adjunto adverbial deslocado "No final da tarde".'),
(currval('exercises_id_seq'), 'Os pássaros, no final da tarde, voltam para seus ninhos.', true, 'O adjunto adverbial "no final da tarde" está deslocado no meio da frase, por isso é isolado por vírgulas.'),
(currval('exercises_id_seq'), 'Os pássaros voltam, para seus ninhos no final da tarde.', false, 'A vírgula está incorreta, pois separa o verbo "voltam" de seu complemento "para seus ninhos".');

-- Exercício 8
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-4',
  'Qual alternativa apresenta o uso correto da vírgula para isolar uma oração subordinada adjetiva explicativa?',
  'Orações subordinadas adjetivas explicativas devem ser isoladas por vírgulas, pois trazem uma informação adicional, não essencial para a identificação do termo que modificam.',
  3
) RETURNING id;

-- Opções para o Exercício 8
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'O livro, que está sobre a mesa, pertence ao professor.', true, 'A oração subordinada adjetiva explicativa "que está sobre a mesa" está corretamente isolada por vírgulas.'),
(currval('exercises_id_seq'), 'O livro que está sobre a mesa pertence ao professor.', false, 'Neste caso, a oração "que está sobre a mesa" é uma subordinada adjetiva restritiva, pois restringe o sentido de "livro", especificando qual livro. Por isso, não leva vírgulas.'),
(currval('exercises_id_seq'), 'O livro, que está sobre a mesa pertence ao professor.', false, 'Falta a segunda vírgula para isolar a oração subordinada adjetiva explicativa "que está sobre a mesa".'),
(currval('exercises_id_seq'), 'O livro que está sobre a mesa, pertence ao professor.', false, 'A vírgula está incorreta, pois separa o sujeito "O livro que está sobre a mesa" do verbo "pertence".');

-- Exercício 9
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-4',
  'Em qual alternativa a vírgula é usada corretamente para separar termos de mesma função sintática?',
  'Termos de mesma função sintática, quando não ligados por conjunção, devem ser separados por vírgula.',
  2
) RETURNING id;

-- Opções para o Exercício 9
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Ele é um homem honesto, trabalhador, dedicado.', true, 'Os adjetivos "honesto", "trabalhador" e "dedicado" têm a mesma função sintática (predicativo do sujeito) e estão corretamente separados por vírgulas.'),
(currval('exercises_id_seq'), 'Ele é um homem honesto trabalhador dedicado.', false, 'Faltam as vírgulas para separar os adjetivos "honesto", "trabalhador" e "dedicado", que têm a mesma função sintática.'),
(currval('exercises_id_seq'), 'Ele, é um homem honesto, trabalhador, dedicado.', false, 'A primeira vírgula está incorreta, pois separa o sujeito "Ele" do verbo "é".'),
(currval('exercises_id_seq'), 'Ele é, um homem honesto, trabalhador, dedicado.', false, 'A primeira vírgula está incorreta, pois separa o verbo "é" de seu predicativo "um homem honesto, trabalhador, dedicado".');

-- Exercício 10
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-4',
  'Qual alternativa apresenta o uso correto da vírgula para marcar a elipse (omissão) de um verbo?',
  'A vírgula pode ser usada para marcar a elipse (omissão) de um verbo que já foi mencionado anteriormente na frase.',
  3
) RETURNING id;

-- Opções para o Exercício 10
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'João estuda inglês; Maria, francês.', true, 'A vírgula após "Maria" marca a elipse do verbo "estuda", que foi mencionado na primeira oração.'),
(currval('exercises_id_seq'), 'João estuda inglês; Maria francês.', false, 'Falta a vírgula após "Maria" para marcar a elipse do verbo "estuda".'),
(currval('exercises_id_seq'), 'João, estuda inglês; Maria, francês.', false, 'A primeira vírgula está incorreta, pois separa o sujeito "João" do verbo "estuda".'),
(currval('exercises_id_seq'), 'João estuda, inglês; Maria, francês.', false, 'A primeira vírgula está incorreta, pois separa o verbo "estuda" de seu complemento "inglês".');
