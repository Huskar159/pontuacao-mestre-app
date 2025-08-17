-- Exercício 9
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-2',
  'Identifique a alternativa em que a vírgula é usada para separar orações coordenadas assindéticas (sem conjunção):',
  'Orações coordenadas assindéticas são aquelas que não estão ligadas por conjunção. Elas são separadas por vírgula.',
  3
) RETURNING id;

-- Opções para o Exercício 9
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'O sol brilhava, os pássaros cantavam, as crianças brincavam no parque.', true, 'As orações "O sol brilhava", "os pássaros cantavam" e "as crianças brincavam no parque" são coordenadas assindéticas, pois não estão ligadas por conjunções.'),
(currval('exercises_id_seq'), 'Ele estudou muito, mas não passou no exame.', false, 'Neste caso, as orações estão ligadas pela conjunção adversativa "mas", portanto são coordenadas sindéticas.'),
(currval('exercises_id_seq'), 'Quando ele chegou, todos já tinham saído.', false, 'Aqui, a vírgula separa a oração subordinada adverbial temporal "Quando ele chegou" da oração principal.'),
(currval('exercises_id_seq'), 'Maria, traga-me um copo d''água.', false, 'Neste exemplo, a vírgula isola o vocativo "Maria". Não há orações coordenadas.');
