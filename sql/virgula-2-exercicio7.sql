-- Exercício 7
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula-2',
  'Identifique a alternativa em que a vírgula é usada para marcar a elipse (omissão) de um verbo:',
  'A vírgula pode ser usada para marcar a elipse (omissão) de um verbo que já foi mencionado anteriormente na frase, evitando sua repetição.',
  3
) RETURNING id;

-- Opções para o Exercício 7
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'João gosta de futebol; Maria, de vôlei.', true, 'Na segunda oração, o verbo "gosta" está elíptico (omitido) e a vírgula marca essa elipse: "Maria [gosta] de vôlei".'),
(currval('exercises_id_seq'), 'Ele saiu cedo, mas voltou tarde.', false, 'Neste caso, a vírgula separa orações coordenadas ligadas pela conjunção adversativa "mas". Não há elipse de verbo.'),
(currval('exercises_id_seq'), 'O professor, muito paciente, explicou novamente.', false, 'Aqui, a vírgula isola o adjunto adnominal "muito paciente". Não há elipse de verbo.'),
(currval('exercises_id_seq'), 'Quando chegamos, a festa já havia começado.', false, 'Neste exemplo, a vírgula separa a oração subordinada adverbial temporal "Quando chegamos" da oração principal. Não há elipse de verbo.');
