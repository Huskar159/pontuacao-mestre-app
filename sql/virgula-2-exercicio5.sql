-- Exercício 5
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-2',
  'Identifique a alternativa em que a vírgula é usada para separar termos de mesma função sintática:',
  'A vírgula é usada para separar termos de mesma função sintática (sujeitos, objetos, adjuntos, etc.) quando não estão unidos por conjunção.',
  2
) RETURNING id;

-- Opções para o Exercício 5
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Precisamos de canetas, lápis, borrachas para a escola.', true, 'A vírgula separa os termos "canetas", "lápis", "borrachas", que são objetos indiretos do verbo "precisamos" (complementos do verbo "precisar de").'),
(currval('exercises_id_seq'), 'O professor, muito irritado, cancelou a aula.', false, 'Neste caso, a vírgula isola o adjunto adnominal "muito irritado", que funciona como um aposto.'),
(currval('exercises_id_seq'), 'Quando ele saiu, começou a chover.', false, 'Aqui, a vírgula separa a oração subordinada adverbial temporal "Quando ele saiu" da oração principal.'),
(currval('exercises_id_seq'), 'Maria, traga-me um copo d''água.', false, 'Neste exemplo, a vírgula isola o vocativo "Maria".');
