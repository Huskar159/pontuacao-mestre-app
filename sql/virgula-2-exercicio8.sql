-- Exercício 8
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-2',
  'Em qual alternativa a vírgula é usada para isolar uma expressão explicativa?',
  'Expressões explicativas como "isto é", "ou seja", "por exemplo", "a saber", entre outras, são sempre isoladas por vírgulas.',
  2
) RETURNING id;

-- Opções para o Exercício 8
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Precisamos de alimentos não perecíveis, ou seja, alimentos que não estragam facilmente.', true, 'A expressão explicativa "ou seja" é isolada por vírgulas.'),
(currval('exercises_id_seq'), 'Ele chegou atrasado, pois o trânsito estava congestionado.', false, 'Neste caso, a vírgula separa orações coordenadas ligadas pela conjunção explicativa "pois". Não isola uma expressão explicativa.'),
(currval('exercises_id_seq'), 'Maria, que é médica, atendeu a emergência.', false, 'Aqui, a vírgula isola a oração subordinada adjetiva explicativa "que é médica". Não isola uma expressão explicativa.'),
(currval('exercises_id_seq'), 'No próximo mês, viajaremos para a Europa.', false, 'Neste exemplo, a vírgula isola o adjunto adverbial deslocado "No próximo mês". Não isola uma expressão explicativa.');
