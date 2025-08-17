-- Exercício 1
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-2',
  'Identifique a alternativa em que a vírgula é usada para separar orações coordenadas:',
  'A vírgula é usada para separar orações coordenadas quando elas têm sujeitos diferentes ou quando a conjunção "e" está ausente.',
  2
) RETURNING id;

-- Opções para o Exercício 1
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Ele chegou, sentou-se e começou a ler.', true, 'Nesta frase, a vírgula separa as orações coordenadas "Ele chegou" e "sentou-se", que têm o mesmo sujeito mas não estão ligadas por conjunção.'),
(currval('exercises_id_seq'), 'João, o médico da família, fará a cirurgia.', false, 'Neste caso, a vírgula isola o aposto "o médico da família", não separa orações coordenadas.'),
(currval('exercises_id_seq'), 'Comprei pão, leite e manteiga no mercado.', false, 'Aqui, a vírgula separa elementos de uma enumeração, não orações coordenadas.'),
(currval('exercises_id_seq'), 'Quando ele chegou, todos já tinham saído.', false, 'Neste exemplo, a vírgula separa a oração subordinada adverbial "Quando ele chegou" da oração principal.');
