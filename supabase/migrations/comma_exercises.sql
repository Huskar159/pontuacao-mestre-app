-- Insert 10 exercises for commas
-- Exercise 1: Separating elements in a series
INSERT INTO public.exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula',
  'Qual das frases abaixo usa corretamente a vírgula para separar elementos de uma enumeração?',
  'A vírgula é usada para separar elementos em uma enumeração (lista de itens). O último item geralmente é precedido por "e" ou "ou" sem vírgula.',
  1
);

INSERT INTO public.exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
  (currval('exercises_id_seq'), 'Comprei pão leite ovos e manteiga.', false, 'Faltam as vírgulas para separar os elementos da lista.'),
  (currval('exercises_id_seq'), 'Comprei pão, leite, ovos, e manteiga.', false, 'Não se usa vírgula antes da conjunção "e" que antecede o último elemento da enumeração (a menos que haja um motivo específico para isso).'),
  (currval('exercises_id_seq'), 'Comprei, pão, leite, ovos e manteiga.', false, 'Não se coloca vírgula após o verbo neste caso.'),
  (currval('exercises_id_seq'), 'Comprei pão, leite, ovos e manteiga.', true, 'A vírgula separa os elementos da enumeração, exceto o último que é precedido por "e".');

-- Exercise 2: Isolating the appositive
INSERT INTO public.exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula',
  'Identifique a opção em que a vírgula é usada corretamente para isolar o aposto:',
  'O aposto é uma expressão que explica, identifica ou especifica o termo anterior. Ele deve ser isolado por vírgulas.',
  1
);

INSERT INTO public.exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
  (currval('exercises_id_seq'), 'Paulo o médico da família fará a cirurgia.', false, 'Faltam as vírgulas para isolar o aposto "o médico da família".'),
  (currval('exercises_id_seq'), 'Paulo, o médico da família, fará a cirurgia.', true, 'O aposto "o médico da família" está corretamente isolado por vírgulas.'),
  (currval('exercises_id_seq'), 'Paulo o médico da família, fará a cirurgia.', false, 'O aposto deve ser isolado com vírgulas no início e no fim.'),
  (currval('exercises_id_seq'), 'Paulo, o médico, da família fará a cirurgia.', false, 'As vírgulas estão posicionadas incorretamente, separando "o médico" de "da família", que juntos formam o aposto.');

-- Exercise 3: Adjuntos adverbiais deslocados
INSERT INTO public.exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula',
  'Qual frase utiliza corretamente a vírgula com adjuntos adverbiais deslocados?',
  'Quando um adjunto adverbial (expressão que indica circunstância) está deslocado, ou seja, não está em sua posição habitual (após o verbo), deve-se utilizar vírgula.',
  2
);

INSERT INTO public.exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
  (currval('exercises_id_seq'), 'No final do ano as vendas aumentaram significativamente.', false, 'Falta a vírgula após o adjunto adverbial deslocado "No final do ano".'),
  (currval('exercises_id_seq'), 'No final do ano, as vendas aumentaram, significativamente.', false, 'A segunda vírgula é desnecessária, pois "significativamente" está em sua posição natural.'),
  (currval('exercises_id_seq'), 'No final do ano, as vendas aumentaram significativamente.', true, 'A vírgula está corretamente posicionada após o adjunto adverbial deslocado "No final do ano".'),
  (currval('exercises_id_seq'), 'As vendas, no final do ano aumentaram significativamente.', false, 'A vírgula separa incorretamente o sujeito "As vendas" do restante da oração.');

-- Exercise 4: Separating independent clauses
INSERT INTO public.exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula',
  'Em qual alternativa a vírgula está separando corretamente orações coordenadas?',
  'A vírgula é usada para separar orações coordenadas (orações independentes ligadas por conjunções como e, mas, ou, etc).',
  2
);

INSERT INTO public.exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
  (currval('exercises_id_seq'), 'Ele chegou cedo, e conseguiu um bom lugar.', true, 'A vírgula separa corretamente as duas orações coordenadas.'),
  (currval('exercises_id_seq'), 'Ele chegou cedo e, conseguiu um bom lugar.', false, 'A vírgula está posicionada incorretamente, separando a conjunção "e" da segunda oração.'),
  (currval('exercises_id_seq'), 'Ele chegou, cedo e conseguiu um bom lugar.', false, 'A vírgula separa incorretamente o verbo "chegou" de seu complemento "cedo".'),
  (currval('exercises_id_seq'), 'Ele, chegou cedo e conseguiu um bom lugar.', false, 'A vírgula separa incorretamente o sujeito "Ele" do verbo "chegou".');

-- Exercise 5: Vocative
INSERT INTO public.exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula',
  'Qual das frases usa corretamente a vírgula para isolar o vocativo?',
  'O vocativo é um termo utilizado para chamar, invocar ou interpelar o interlocutor. Ele deve ser separado do resto da frase por vírgula.',
  2
);

INSERT INTO public.exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
  (currval('exercises_id_seq'), 'Maria traga-me um copo de água.', false, 'Falta a vírgula após o vocativo "Maria".'),
  (currval('exercises_id_seq'), 'Maria, traga-me um copo de água.', true, 'A vírgula isola corretamente o vocativo "Maria".'),
  (currval('exercises_id_seq'), 'Maria traga-me, um copo de água.', false, 'A vírgula está posicionada incorretamente, separando o verbo "traga-me" de seu complemento.'),
  (currval('exercises_id_seq'), 'Maria, traga, me um copo de água.', false, 'A segunda vírgula é incorreta, separando o verbo de seu complemento.');

-- Exercise 6: Not separating subject from verb
INSERT INTO public.exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula',
  'Em qual alternativa a vírgula é usada INCORRETAMENTE, separando sujeito e verbo?',
  'Não se deve usar vírgula para separar o sujeito do predicado (verbo e seus complementos).',
  3
);

INSERT INTO public.exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
  (currval('exercises_id_seq'), 'Os alunos, apresentaram o trabalho ontem.', true, 'A vírgula separa incorretamente o sujeito "Os alunos" do verbo "apresentaram".'),
  (currval('exercises_id_seq'), 'Os alunos que estudaram muito, apresentaram o trabalho ontem.', false, 'A vírgula está correta, pois separa a oração subordinada adjetiva explicativa "que estudaram muito" do resto da oração principal.'),
  (currval('exercises_id_seq'), 'Os alunos, que estudaram muito, apresentaram o trabalho ontem.', false, 'As vírgulas estão corretas, isolando a oração subordinada adjetiva explicativa "que estudaram muito".'),
  (currval('exercises_id_seq'), 'Os alunos apresentaram o trabalho, ontem.', false, 'A vírgula está incorreta por outro motivo: separa o verbo de seu adjunto adverbial "ontem" que está em posição natural.');

-- Exercise 7: Separating adverbial clauses
INSERT INTO public.exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula',
  'Identifique a alternativa em que a vírgula separa corretamente uma oração subordinada adverbial:',
  'A vírgula é usada para separar orações subordinadas adverbiais, especialmente quando estas antecedem a oração principal.',
  3
);

INSERT INTO public.exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
  (currval('exercises_id_seq'), 'Quando chove as ruas ficam alagadas.', false, 'Falta a vírgula após a oração subordinada adverbial temporal "Quando chove".'),
  (currval('exercises_id_seq'), 'Quando chove, as ruas ficam alagadas.', true, 'A vírgula separa corretamente a oração subordinada adverbial "Quando chove" da oração principal.'),
  (currval('exercises_id_seq'), 'As ruas ficam, alagadas quando chove.', false, 'A vírgula separa incorretamente o verbo "ficam" de seu predicativo "alagadas".'),
  (currval('exercises_id_seq'), 'As ruas, ficam alagadas quando chove.', false, 'A vírgula separa incorretamente o sujeito "As ruas" do verbo "ficam".');

-- Exercise 8: Isolating intercalated expressions
INSERT INTO public.exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula',
  'Qual alternativa emprega corretamente as vírgulas para isolar expressões intercaladas?',
  'Expressões intercaladas (como "por exemplo", "aliás", "no entanto", etc.) devem ser isoladas por vírgulas.',
  2
);

INSERT INTO public.exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
  (currval('exercises_id_seq'), 'Ele vai no entanto precisar de ajuda financeira.', false, 'Faltam as vírgulas para isolar a expressão intercalada "no entanto".'),
  (currval('exercises_id_seq'), 'Ele vai, no entanto precisar de ajuda financeira.', false, 'Falta a segunda vírgula para fechar o isolamento da expressão "no entanto".'),
  (currval('exercises_id_seq'), 'Ele vai, no entanto, precisar de ajuda financeira.', true, 'As vírgulas isolam corretamente a expressão intercalada "no entanto".'),
  (currval('exercises_id_seq'), 'Ele, vai no entanto, precisar de ajuda financeira.', false, 'As vírgulas estão posicionadas incorretamente, a primeira separando o sujeito do verbo.');

-- Exercise 9: Dates
INSERT INTO public.exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula',
  'Em qual alternativa a vírgula é usada corretamente em datas?',
  'Em datas, usa-se a vírgula para separar o nome da cidade do nome do estado, assim como para separar o dia do mês do ano.',
  1
);

INSERT INTO public.exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
  (currval('exercises_id_seq'), 'São Paulo 25 de Janeiro de 2023.', false, 'Faltam vírgulas após "São Paulo" e "25 de Janeiro".'),
  (currval('exercises_id_seq'), 'São Paulo, 25 de Janeiro, de 2023.', false, 'A segunda vírgula está incorretamente posicionada, separando a preposição "de" do ano.'),
  (currval('exercises_id_seq'), 'São Paulo, 25 de Janeiro de 2023.', true, 'A vírgula está posicionada corretamente, separando o local da data.'),
  (currval('exercises_id_seq'), 'São Paulo, 25, de Janeiro de 2023.', false, 'A segunda vírgula está posicionada incorretamente, separando o dia "25" da preposição "de".');

-- Exercise 10: Direct speech
INSERT INTO public.exercises (category_id, question, explanation, difficulty)
VALUES (
  'virgula',
  'Identifique a alternativa em que a vírgula é usada corretamente no discurso direto:',
  'A vírgula é usada para separar o discurso direto do verbo dicendi (verbo que indica fala, como dizer, afirmar, responder, etc).',
  2
);

INSERT INTO public.exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
  (currval('exercises_id_seq'), 'O professor disse "A prova será difícil."', false, 'Falta a vírgula após o verbo dicendi "disse".'),
  (currval('exercises_id_seq'), 'O professor, disse "A prova será difícil."', false, 'A vírgula está posicionada incorretamente, separando o sujeito "O professor" do verbo "disse".'),
  (currval('exercises_id_seq'), 'O professor disse, "A prova será difícil."', true, 'A vírgula está posicionada corretamente, separando o verbo dicendi "disse" do discurso direto.'),
  (currval('exercises_id_seq'), '"A prova será difícil" disse o professor.', false, 'Falta a vírgula após o discurso direto, antes do verbo "disse".');
