-- Inserir a categoria 'virgula-2'
INSERT INTO exercise_categories (id, title, description)
SELECT 'virgula-2', 'Vírgula', 'Mais exercícios sobre o uso da vírgula na língua portuguesa.'
WHERE NOT EXISTS (SELECT 1 FROM exercise_categories WHERE id = 'virgula-2');

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
