-- Inserir a categoria 'virgula-3'
INSERT INTO exercise_categories (id, title, description)
SELECT 'virgula-3', 'Vírgula', 'Exercícios avançados sobre o uso da vírgula na língua portuguesa.'
WHERE NOT EXISTS (SELECT 1 FROM exercise_categories WHERE id = 'virgula-3');

-- Exercício 1
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-3',
  'Qual alternativa apresenta o uso correto da vírgula para separar o adjunto adverbial deslocado?',
  'Adjuntos adverbiais deslocados, especialmente os mais longos, devem ser separados por vírgula.',
  2
) RETURNING id;

-- Opções para o Exercício 1
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Durante a tempestade, todos permaneceram em casa.', true, 'O adjunto adverbial "Durante a tempestade" está deslocado no início da frase, por isso é separado por vírgula.'),
(currval('exercises_id_seq'), 'Todos permaneceram em casa durante a tempestade.', false, 'Neste caso, o adjunto adverbial "durante a tempestade" está na ordem direta, no final da frase, por isso não leva vírgula.'),
(currval('exercises_id_seq'), 'Todos, permaneceram em casa durante a tempestade.', false, 'Esta vírgula está incorreta, pois separa o sujeito "Todos" do verbo "permaneceram".'),
(currval('exercises_id_seq'), 'Todos permaneceram, em casa durante a tempestade.', false, 'Esta vírgula está incorreta, pois separa o verbo "permaneceram" de seu complemento "em casa".');

-- Exercício 2
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-3',
  'Qual alternativa apresenta o uso correto da vírgula para isolar o aposto explicativo?',
  'O aposto explicativo é um termo que explica ou esclarece o termo anterior, e deve ser isolado por vírgulas.',
  2
) RETURNING id;

-- Opções para o Exercício 2
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Paulo Silva, o novo diretor da empresa, fará um pronunciamento hoje.', true, 'O aposto explicativo "o novo diretor da empresa" está corretamente isolado por vírgulas.'),
(currval('exercises_id_seq'), 'O novo diretor da empresa Paulo Silva fará um pronunciamento hoje.', false, 'Faltam as vírgulas para isolar o aposto "o novo diretor da empresa".'),
(currval('exercises_id_seq'), 'Paulo Silva o novo diretor da empresa, fará um pronunciamento hoje.', false, 'Falta a primeira vírgula para isolar o aposto "o novo diretor da empresa".'),
(currval('exercises_id_seq'), 'Paulo Silva, o novo diretor da empresa fará um pronunciamento hoje.', false, 'Falta a segunda vírgula para isolar o aposto "o novo diretor da empresa".');

-- Exercício 3
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-3',
  'Em qual alternativa a vírgula é usada corretamente para separar orações coordenadas?',
  'Orações coordenadas são separadas por vírgula quando não há conjunção ou quando a conjunção é "e" e as orações têm sujeitos diferentes.',
  3
) RETURNING id;

-- Opções para o Exercício 3
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'O sol brilhava, os pássaros cantavam, as crianças brincavam.', true, 'As orações coordenadas "O sol brilhava", "os pássaros cantavam" e "as crianças brincavam" estão corretamente separadas por vírgulas, pois não há conjunção entre elas.'),
(currval('exercises_id_seq'), 'O sol brilhava e, os pássaros cantavam e as crianças brincavam.', false, 'A vírgula após "e" está incorreta, pois não se separa a conjunção "e" da oração que ela introduz.'),
(currval('exercises_id_seq'), 'O sol brilhava, e os pássaros cantavam, e as crianças brincavam.', false, 'Não se usa vírgula antes da conjunção "e" quando ela liga orações coordenadas com o mesmo sujeito.'),
(currval('exercises_id_seq'), 'O sol, brilhava, os pássaros, cantavam, as crianças, brincavam.', false, 'As vírgulas estão incorretas, pois separam os sujeitos de seus respectivos verbos.');

-- Exercício 4
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-3',
  'Qual alternativa apresenta o uso correto da vírgula para isolar expressões explicativas?',
  'Expressões explicativas como "isto é", "ou seja", "por exemplo", entre outras, devem ser isoladas por vírgulas.',
  2
) RETURNING id;

-- Opções para o Exercício 4
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Ele precisa de alimentos saudáveis, isto é, frutas, verduras e legumes.', true, 'A expressão explicativa "isto é" está corretamente isolada por vírgulas.'),
(currval('exercises_id_seq'), 'Ele precisa de alimentos saudáveis isto é, frutas, verduras e legumes.', false, 'Falta a vírgula antes da expressão explicativa "isto é".'),
(currval('exercises_id_seq'), 'Ele precisa de alimentos saudáveis, isto é frutas, verduras e legumes.', false, 'Falta a vírgula depois da expressão explicativa "isto é".'),
(currval('exercises_id_seq'), 'Ele precisa de alimentos saudáveis isto é frutas, verduras e legumes.', false, 'Faltam as vírgulas para isolar a expressão explicativa "isto é".');

-- Exercício 5
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-3',
  'Em qual alternativa a vírgula é usada corretamente antes da conjunção adversativa?',
  'Conjunções adversativas como "mas", "porém", "contudo", "entretanto", entre outras, são geralmente precedidas de vírgula.',
  2
) RETURNING id;

-- Opções para o Exercício 5
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Ele estudou muito, mas não conseguiu passar no exame.', true, 'A vírgula está corretamente colocada antes da conjunção adversativa "mas".'),
(currval('exercises_id_seq'), 'Ele estudou muito mas, não conseguiu passar no exame.', false, 'A vírgula está incorretamente colocada após a conjunção "mas", quando deveria estar antes.'),
(currval('exercises_id_seq'), 'Ele estudou muito mas não conseguiu passar no exame.', false, 'Falta a vírgula antes da conjunção adversativa "mas".'),
(currval('exercises_id_seq'), 'Ele, estudou muito, mas não conseguiu passar no exame.', false, 'A primeira vírgula está incorreta, pois separa o sujeito "Ele" do verbo "estudou".');

-- Exercício 6
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-3',
  'Qual alternativa apresenta o uso correto da vírgula para isolar o vocativo?',
  'O vocativo é um termo usado para chamar ou interpelar alguém, e deve ser isolado por vírgula.',
  2
) RETURNING id;

-- Opções para o Exercício 6
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Maria, traga-me um copo de água, por favor.', true, 'O vocativo "Maria" está corretamente isolado por vírgula.'),
(currval('exercises_id_seq'), 'Maria traga-me um copo de água, por favor.', false, 'Falta a vírgula após o vocativo "Maria".'),
(currval('exercises_id_seq'), 'Maria, traga-me, um copo de água, por favor.', false, 'A segunda vírgula está incorreta, pois separa o verbo "traga-me" de seu complemento "um copo de água".'),
(currval('exercises_id_seq'), 'Maria traga-me um copo de água por favor.', false, 'Faltam as vírgulas após o vocativo "Maria" e para isolar a expressão "por favor".');

-- Exercício 7
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-3',
  'Em qual alternativa a vírgula é usada corretamente para separar elementos de uma enumeração?',
  'Elementos de uma enumeração devem ser separados por vírgula quando não estão ligados por conjunção.',
  2
) RETURNING id;

-- Opções para o Exercício 7
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Comprei pão, leite, manteiga e queijo.', true, 'Os elementos da enumeração "pão", "leite", "manteiga" estão corretamente separados por vírgulas, e o último elemento "queijo" está ligado pela conjunção "e", por isso não leva vírgula antes.'),
(currval('exercises_id_seq'), 'Comprei pão, leite, manteiga, e queijo.', false, 'Não se usa vírgula antes da conjunção "e" quando ela liga o último elemento de uma enumeração.'),
(currval('exercises_id_seq'), 'Comprei, pão, leite, manteiga e queijo.', false, 'A primeira vírgula está incorreta, pois separa o verbo "comprei" de seu complemento.'),
(currval('exercises_id_seq'), 'Comprei pão leite manteiga e queijo.', false, 'Faltam as vírgulas para separar os elementos da enumeração "pão", "leite" e "manteiga".');

-- Exercício 8
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-3',
  'Qual alternativa apresenta o uso correto da vírgula para isolar uma oração subordinada adverbial anteposta à principal?',
  'Orações subordinadas adverbiais antepostas à oração principal são geralmente separadas por vírgula.',
  3
) RETURNING id;

-- Opções para o Exercício 8
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Quando o professor chegou, todos os alunos se levantaram.', true, 'A oração subordinada adverbial "Quando o professor chegou" está corretamente separada da oração principal por vírgula.'),
(currval('exercises_id_seq'), 'Quando o professor chegou todos os alunos se levantaram.', false, 'Falta a vírgula para separar a oração subordinada adverbial "Quando o professor chegou" da oração principal.'),
(currval('exercises_id_seq'), 'Todos os alunos se levantaram, quando o professor chegou.', false, 'Quando a oração subordinada adverbial vem depois da oração principal, geralmente não se usa vírgula.'),
(currval('exercises_id_seq'), 'Quando, o professor chegou, todos os alunos se levantaram.', false, 'A primeira vírgula está incorreta, pois separa a conjunção "Quando" do restante da oração subordinada.');

-- Exercício 9
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-3',
  'Em qual alternativa a vírgula é usada corretamente para isolar uma oração subordinada adjetiva explicativa?',
  'Orações subordinadas adjetivas explicativas devem ser isoladas por vírgulas, pois trazem uma informação adicional, não essencial para a identificação do termo que modificam.',
  3
) RETURNING id;

-- Opções para o Exercício 9
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'O livro, que está sobre a mesa, pertence ao professor.', true, 'A oração subordinada adjetiva explicativa "que está sobre a mesa" está corretamente isolada por vírgulas.'),
(currval('exercises_id_seq'), 'O livro que está sobre a mesa pertence ao professor.', false, 'Neste caso, a oração "que está sobre a mesa" é uma subordinada adjetiva restritiva, pois restringe o sentido de "livro", especificando qual livro. Por isso, não leva vírgulas.'),
(currval('exercises_id_seq'), 'O livro, que está sobre a mesa pertence ao professor.', false, 'Falta a segunda vírgula para isolar a oração subordinada adjetiva explicativa "que está sobre a mesa".'),
(currval('exercises_id_seq'), 'O livro que está sobre a mesa, pertence ao professor.', false, 'A vírgula está incorreta, pois separa o sujeito "O livro que está sobre a mesa" do verbo "pertence".');

-- Exercício 10
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-3',
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
