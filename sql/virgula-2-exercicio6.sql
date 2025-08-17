-- Exercício 6
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-2',
  'Em qual alternativa a vírgula é usada para isolar um vocativo?',
  'O vocativo é um termo que serve para chamar, invocar ou interpelar alguém no discurso. Ele é sempre isolado por vírgula.',
  2
) RETURNING id;

-- Opções para o Exercício 6
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Por favor, senhor, poderia me ajudar?', true, 'O termo "senhor" é um vocativo, usado para interpelar a pessoa com quem se fala, por isso é isolado por vírgulas.'),
(currval('exercises_id_seq'), 'João, o gerente do banco, ligou hoje cedo.', false, 'Neste caso, "o gerente do banco" é um aposto explicativo, não um vocativo.'),
(currval('exercises_id_seq'), 'Amanhã, se não chover, iremos à praia.', false, 'Aqui, a vírgula isola a oração subordinada adverbial condicional "se não chover".'),
(currval('exercises_id_seq'), 'Ele comprou frutas, verduras e legumes.', false, 'Neste exemplo, a vírgula separa elementos de uma enumeração.');
