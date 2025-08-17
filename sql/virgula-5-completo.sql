-- Inserir a categoria 'virgula-5'
INSERT INTO exercise_categories (id, title, description)
SELECT 'virgula-5', 'Vírgula', 'Exercícios complementares sobre o uso da vírgula na língua portuguesa.'
WHERE NOT EXISTS (SELECT 1 FROM exercise_categories WHERE id = 'virgula-5');

-- Exercício 1
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-5',
  'Em qual alternativa a vírgula é usada corretamente para isolar o vocativo?',
  'O vocativo é um termo que serve para chamar, invocar ou interpelar alguém no discurso. Ele é sempre isolado por vírgula.',
  2
) RETURNING id;

-- Opções para o Exercício 1
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Ana, por favor, traga-me um copo de água.', true, 'O vocativo "Ana" está corretamente isolado por vírgula.'),
(currval('exercises_id_seq'), 'Ana por favor, traga-me um copo de água.', false, 'Falta a vírgula após o vocativo "Ana".'),
(currval('exercises_id_seq'), 'Ana, por favor traga-me um copo de água.', false, 'Falta a vírgula após "por favor", que também deve ser isolado por vírgulas.'),
(currval('exercises_id_seq'), 'Ana por favor traga-me um copo de água.', false, 'Faltam as vírgulas após o vocativo "Ana" e para isolar a expressão "por favor".');

-- Exercício 2
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-5',
  'Qual alternativa apresenta o uso correto da vírgula para separar orações coordenadas sindéticas?',
  'Orações coordenadas sindéticas são aquelas ligadas por conjunções. A vírgula é usada antes das conjunções adversativas, conclusivas, explicativas, mas não antes da aditiva "e" (exceto em casos específicos).',
  3
) RETURNING id;

-- Opções para o Exercício 2
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Ele estudou muito, mas não passou no exame.', true, 'A vírgula está corretamente colocada antes da conjunção adversativa "mas".'),
(currval('exercises_id_seq'), 'Ele estudou muito mas, não passou no exame.', false, 'A vírgula está incorretamente colocada após a conjunção "mas", quando deveria estar antes.'),
(currval('exercises_id_seq'), 'Ele estudou muito, e passou no exame.', false, 'Não se usa vírgula antes da conjunção aditiva "e" quando ela liga orações com o mesmo sujeito.'),
(currval('exercises_id_seq'), 'Ele estudou muito e, passou no exame.', false, 'A vírgula está incorretamente colocada após a conjunção "e", separando-a da oração que ela introduz.');

-- Exercício 3
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-5',
  'Em qual alternativa a vírgula é usada corretamente para isolar uma oração intercalada?',
  'Orações intercaladas são aquelas que interrompem a sequência natural da frase, inserindo uma informação adicional. Elas são sempre isoladas por vírgulas.',
  3
) RETURNING id;

-- Opções para o Exercício 3
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'O professor, acredito eu, não virá hoje.', true, 'A oração intercalada "acredito eu" está corretamente isolada por vírgulas.'),
(currval('exercises_id_seq'), 'O professor acredito eu, não virá hoje.', false, 'Falta a primeira vírgula para isolar a oração intercalada "acredito eu".'),
(currval('exercises_id_seq'), 'O professor, acredito eu não virá hoje.', false, 'Falta a segunda vírgula para isolar a oração intercalada "acredito eu".'),
(currval('exercises_id_seq'), 'O professor acredito eu não virá hoje.', false, 'Faltam as vírgulas para isolar a oração intercalada "acredito eu".');

-- Exercício 4
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-5',
  'Qual alternativa apresenta o uso correto da vírgula para isolar um aposto explicativo?',
  'O aposto explicativo é um termo que explica ou esclarece o termo anterior, e deve ser isolado por vírgulas.',
  2
) RETURNING id;

-- Opções para o Exercício 4
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Machado de Assis, grande escritor brasileiro, nasceu no Rio de Janeiro.', true, 'O aposto explicativo "grande escritor brasileiro" está corretamente isolado por vírgulas.'),
(currval('exercises_id_seq'), 'Machado de Assis grande escritor brasileiro, nasceu no Rio de Janeiro.', false, 'Falta a primeira vírgula para isolar o aposto "grande escritor brasileiro".'),
(currval('exercises_id_seq'), 'Machado de Assis, grande escritor brasileiro nasceu no Rio de Janeiro.', false, 'Falta a segunda vírgula para isolar o aposto "grande escritor brasileiro".'),
(currval('exercises_id_seq'), 'Machado de Assis grande escritor brasileiro nasceu no Rio de Janeiro.', false, 'Faltam as vírgulas para isolar o aposto "grande escritor brasileiro".');

-- Exercício 5
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-5',
  'Em qual alternativa a vírgula é usada incorretamente?',
  'A vírgula não deve ser usada para separar o sujeito do predicado, nem o verbo de seus complementos diretos, indiretos ou predicativos.',
  3
) RETURNING id;

-- Opções para o Exercício 5
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'O candidato à presidência, prometeu melhorias na educação.', true, 'A vírgula está incorreta porque separa o sujeito "O candidato à presidência" do verbo "prometeu".'),
(currval('exercises_id_seq'), 'Ontem à noite, fomos ao cinema.', false, 'A vírgula está correta, isolando o adjunto adverbial deslocado "Ontem à noite".'),
(currval('exercises_id_seq'), 'Ele estudou muito, mas não passou no exame.', false, 'A vírgula está correta, separando orações coordenadas ligadas pela conjunção adversativa "mas".'),
(currval('exercises_id_seq'), 'Paulo, que é médico, atendeu a emergência.', false, 'A vírgula está correta, isolando a oração subordinada adjetiva explicativa "que é médico".');

-- Exercício 6
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-5',
  'Qual alternativa apresenta o uso correto da vírgula para separar elementos de uma enumeração?',
  'Em uma enumeração, os elementos são separados por vírgulas, exceto o último quando precedido por uma conjunção como "e", "ou".',
  2
) RETURNING id;

-- Opções para o Exercício 6
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Ele gosta de ler, escrever, desenhar e pintar.', true, 'Os elementos da enumeração estão corretamente separados por vírgulas, e o último elemento não leva vírgula por estar precedido pela conjunção "e".'),
(currval('exercises_id_seq'), 'Ele gosta de ler, escrever, desenhar, e pintar.', false, 'Não se usa vírgula antes da conjunção "e" quando ela introduz o último elemento de uma enumeração.'),
(currval('exercises_id_seq'), 'Ele gosta de, ler, escrever, desenhar e pintar.', false, 'A primeira vírgula está incorreta, pois separa a preposição "de" de seu complemento.'),
(currval('exercises_id_seq'), 'Ele gosta de ler escrever desenhar e pintar.', false, 'Faltam as vírgulas para separar os elementos da enumeração.');

-- Exercício 7
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-5',
  'Em qual alternativa a vírgula é usada corretamente para isolar um adjunto adverbial deslocado?',
  'Adjuntos adverbiais deslocados, especialmente os mais longos, devem ser isolados por vírgula.',
  2
) RETURNING id;

-- Opções para o Exercício 7
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Durante a reunião, todos permaneceram em silêncio.', true, 'O adjunto adverbial "Durante a reunião" está deslocado no início da frase, por isso é isolado por vírgula.'),
(currval('exercises_id_seq'), 'Durante a reunião todos permaneceram em silêncio.', false, 'Falta a vírgula para isolar o adjunto adverbial deslocado "Durante a reunião".'),
(currval('exercises_id_seq'), 'Todos, durante a reunião, permaneceram em silêncio.', true, 'O adjunto adverbial "durante a reunião" está deslocado no meio da frase, por isso é isolado por vírgulas.'),
(currval('exercises_id_seq'), 'Todos permaneceram, durante a reunião em silêncio.', false, 'A vírgula está incorreta, pois separa o verbo "permaneceram" de seu complemento "em silêncio".');

-- Exercício 8
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-5',
  'Qual alternativa apresenta o uso correto da vírgula para isolar uma expressão explicativa?',
  'Expressões explicativas como "isto é", "ou seja", "por exemplo", entre outras, devem ser isoladas por vírgulas.',
  2
) RETURNING id;

-- Opções para o Exercício 8
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Ele precisa de alimentos saudáveis, ou seja, frutas, verduras e legumes.', true, 'A expressão explicativa "ou seja" está corretamente isolada por vírgulas.'),
(currval('exercises_id_seq'), 'Ele precisa de alimentos saudáveis ou seja, frutas, verduras e legumes.', false, 'Falta a vírgula antes da expressão explicativa "ou seja".'),
(currval('exercises_id_seq'), 'Ele precisa de alimentos saudáveis, ou seja frutas, verduras e legumes.', false, 'Falta a vírgula depois da expressão explicativa "ou seja".'),
(currval('exercises_id_seq'), 'Ele precisa de alimentos saudáveis ou seja frutas, verduras e legumes.', false, 'Faltam as vírgulas para isolar a expressão explicativa "ou seja".');

-- Exercício 9
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-5',
  'Em qual alternativa a vírgula é usada corretamente para isolar uma oração subordinada adverbial anteposta à principal?',
  'Orações subordinadas adverbiais antepostas à oração principal são geralmente separadas por vírgula.',
  3
) RETURNING id;

-- Opções para o Exercício 9
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Se chover, não iremos à praia.', true, 'A oração subordinada adverbial condicional "Se chover" está corretamente separada da oração principal por vírgula.'),
(currval('exercises_id_seq'), 'Se chover não iremos à praia.', false, 'Falta a vírgula para separar a oração subordinada adverbial condicional "Se chover" da oração principal.'),
(currval('exercises_id_seq'), 'Não iremos à praia, se chover.', false, 'Quando a oração subordinada adverbial vem depois da oração principal, geralmente não se usa vírgula.'),
(currval('exercises_id_seq'), 'Se, chover, não iremos à praia.', false, 'A primeira vírgula está incorreta, pois separa a conjunção "Se" do restante da oração subordinada.');

-- Exercício 10
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-5',
  'Qual alternativa apresenta o uso correto da vírgula para isolar uma oração subordinada adjetiva explicativa?',
  'Orações subordinadas adjetivas explicativas devem ser isoladas por vírgulas, pois trazem uma informação adicional, não essencial para a identificação do termo que modificam.',
  3
) RETURNING id;

-- Opções para o Exercício 10
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Meu irmão, que mora em São Paulo, virá nos visitar.', true, 'A oração subordinada adjetiva explicativa "que mora em São Paulo" está corretamente isolada por vírgulas.'),
(currval('exercises_id_seq'), 'Meu irmão que mora em São Paulo virá nos visitar.', false, 'Neste caso, a oração "que mora em São Paulo" é uma subordinada adjetiva restritiva, pois restringe o sentido de "irmão", especificando qual irmão. Por isso, não leva vírgulas.'),
(currval('exercises_id_seq'), 'Meu irmão, que mora em São Paulo virá nos visitar.', false, 'Falta a segunda vírgula para isolar a oração subordinada adjetiva explicativa "que mora em São Paulo".'),
(currval('exercises_id_seq'), 'Meu irmão que mora em São Paulo, virá nos visitar.', false, 'A vírgula está incorreta, pois separa o sujeito "Meu irmão que mora em São Paulo" do verbo "virá".');
