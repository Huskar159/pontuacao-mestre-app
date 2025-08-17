-- Exercício 10
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-2',
  'Em qual alternativa a vírgula é usada para isolar uma oração intercalada?',
  'Orações intercaladas são aquelas que interrompem a sequência natural da frase, inserindo uma informação adicional. Elas são sempre isoladas por vírgulas.',
  3
) RETURNING id;

-- Opções para o Exercício 10
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'O professor, penso eu, não virá hoje.', true, 'A oração "penso eu" é uma oração intercalada, pois interrompe a sequência natural da frase "O professor não virá hoje".'),
(currval('exercises_id_seq'), 'Ele disse que, se pudesse, viajaria nas férias.', false, 'Neste caso, a vírgula isola a oração subordinada adverbial condicional "se pudesse". Não é uma oração intercalada.'),
(currval('exercises_id_seq'), 'João, o médico da família, fará a cirurgia.', false, 'Aqui, a vírgula isola o aposto "o médico da família". Não é uma oração intercalada.'),
(currval('exercises_id_seq'), 'Quando ele chegou, todos já tinham saído.', false, 'Neste exemplo, a vírgula separa a oração subordinada adverbial temporal "Quando ele chegou" da oração principal. Não é uma oração intercalada.');
