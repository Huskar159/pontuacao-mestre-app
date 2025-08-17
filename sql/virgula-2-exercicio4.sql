-- Exercício 4
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-2',
  'Em qual alternativa a vírgula é usada para isolar uma oração subordinada adjetiva explicativa?',
  'Orações subordinadas adjetivas explicativas são isoladas por vírgulas porque trazem uma informação adicional, não essencial para a identificação do termo que modificam.',
  3
) RETURNING id;

-- Opções para o Exercício 4
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'São Paulo, que é a maior cidade do Brasil, enfrenta problemas de mobilidade.', true, 'A oração "que é a maior cidade do Brasil" é uma subordinada adjetiva explicativa, pois traz uma informação adicional sobre São Paulo, que já está identificado.'),
(currval('exercises_id_seq'), 'O livro que comprei ontem é muito interessante.', false, 'Neste caso, a oração "que comprei ontem" é uma subordinada adjetiva restritiva, pois restringe o sentido de "livro", especificando qual livro. Por isso, não leva vírgulas.'),
(currval('exercises_id_seq'), 'Quando cheguei em casa, todos já estavam dormindo.', false, 'Aqui, a vírgula separa uma oração subordinada adverbial temporal, não uma adjetiva explicativa.'),
(currval('exercises_id_seq'), 'Ele estudou muito, porém não conseguiu passar.', false, 'Neste exemplo, a vírgula separa orações coordenadas ligadas pela conjunção adversativa "porém".');
