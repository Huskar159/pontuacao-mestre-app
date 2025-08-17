-- Exercício 2
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-2',
  'Em qual alternativa a vírgula é usada para isolar um adjunto adverbial deslocado?',
  'Adjuntos adverbiais deslocados (fora da ordem direta da frase) geralmente são isolados por vírgulas, especialmente quando são longos ou quando se quer dar ênfase a eles.',
  2
) RETURNING id;

-- Opções para o Exercício 2
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'No final da tarde, os pássaros voltam para seus ninhos.', true, 'O adjunto adverbial "No final da tarde" está deslocado no início da frase, por isso é isolado por vírgula.'),
(currval('exercises_id_seq'), 'O professor disse que a prova será difícil.', false, 'Não há adjunto adverbial deslocado nesta frase.'),
(currval('exercises_id_seq'), 'Ela comprou um vestido novo, elegante e caro.', false, 'Neste caso, a vírgula separa elementos de uma enumeração de adjetivos, não isola adjunto adverbial.'),
(currval('exercises_id_seq'), 'Maria, a nova gerente, chegou hoje.', false, 'Aqui, a vírgula isola o aposto "a nova gerente", não um adjunto adverbial.');
