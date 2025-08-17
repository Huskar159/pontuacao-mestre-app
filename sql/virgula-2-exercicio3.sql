-- Exercício 3
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-2',
  'Identifique a alternativa em que a vírgula é usada incorretamente:',
  'A vírgula não deve separar o sujeito do predicado, nem o verbo de seus complementos diretos, indiretos ou predicativos.',
  3
) RETURNING id;

-- Opções para o Exercício 3
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'O candidato à presidência, prometeu melhorias na educação.', true, 'A vírgula está incorreta porque separa o sujeito "O candidato à presidência" do verbo "prometeu".'),
(currval('exercises_id_seq'), 'Ontem à noite, fomos ao cinema.', false, 'A vírgula está correta, isolando o adjunto adverbial deslocado "Ontem à noite".'),
(currval('exercises_id_seq'), 'Ele estudou muito, mas não passou no exame.', false, 'A vírgula está correta, separando orações coordenadas ligadas pela conjunção adversativa "mas".'),
(currval('exercises_id_seq'), 'Paulo, que é médico, atendeu a emergência.', false, 'A vírgula está correta, isolando a oração subordinada adjetiva explicativa "que é médico".');
