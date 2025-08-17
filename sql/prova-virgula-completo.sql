-- Inserir a categoria 'prova-virgula'
INSERT INTO exercise_categories (id, title, description)
SELECT 'prova-virgula', 'Prova Final de Vírgula', 'Avalie seu conhecimento sobre o uso da vírgula na língua portuguesa. É necessário acertar pelo menos 70% das questões para passar.'
WHERE NOT EXISTS (SELECT 1 FROM exercise_categories WHERE id = 'prova-virgula');

-- Exercício 1
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Em qual alternativa a vírgula está sendo usada corretamente para separar orações coordenadas?',
  'A vírgula é usada para separar orações coordenadas assindéticas (sem conjunção) e orações coordenadas sindéticas (com conjunção), exceto quando a conjunção é "e" e as orações têm o mesmo sujeito.',
  2
) RETURNING id;

-- Opções para o Exercício 1
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Ele chegou cedo, organizou os documentos e começou a trabalhar.', true, 'A vírgula está corretamente usada para separar as orações coordenadas assindéticas "Ele chegou cedo" e "organizou os documentos". Não se usa vírgula antes do "e" quando as orações têm o mesmo sujeito.'),
(currval('exercises_id_seq'), 'Ele chegou cedo, organizou os documentos, e começou a trabalhar.', false, 'Não se usa vírgula antes da conjunção "e" quando as orações têm o mesmo sujeito.'),
(currval('exercises_id_seq'), 'Ele chegou cedo organizou os documentos e começou a trabalhar.', false, 'Falta a vírgula para separar as orações coordenadas assindéticas "Ele chegou cedo" e "organizou os documentos".'),
(currval('exercises_id_seq'), 'Ele chegou cedo, e organizou os documentos, e começou a trabalhar.', false, 'Não se usa vírgula antes da conjunção "e" quando as orações têm o mesmo sujeito.');

-- Exercício 2
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Qual alternativa apresenta o uso correto da vírgula para isolar o aposto?',
  'O aposto é um termo que explica, identifica ou especifica outro termo da oração. Ele deve ser isolado por vírgulas.',
  2
) RETURNING id;

-- Opções para o Exercício 2
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Paulo, o melhor aluno da turma, recebeu o prêmio.', true, 'O aposto "o melhor aluno da turma" está corretamente isolado por vírgulas.'),
(currval('exercises_id_seq'), 'Paulo o melhor aluno da turma, recebeu o prêmio.', false, 'Falta a primeira vírgula para isolar o aposto "o melhor aluno da turma".'),
(currval('exercises_id_seq'), 'Paulo, o melhor aluno da turma recebeu o prêmio.', false, 'Falta a segunda vírgula para isolar o aposto "o melhor aluno da turma".'),
(currval('exercises_id_seq'), 'Paulo o melhor aluno da turma recebeu o prêmio.', false, 'Faltam as vírgulas para isolar o aposto "o melhor aluno da turma".');

-- Exercício 3
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Em qual alternativa a vírgula está sendo usada corretamente para isolar o vocativo?',
  'O vocativo é um termo usado para chamar, invocar ou interpelar o interlocutor. Ele deve ser isolado por vírgula.',
  2
) RETURNING id;

-- Opções para o Exercício 3
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Maria, traga-me um copo de água, por favor.', true, 'O vocativo "Maria" está corretamente isolado por vírgula.'),
(currval('exercises_id_seq'), 'Maria traga-me um copo de água, por favor.', false, 'Falta a vírgula após o vocativo "Maria".'),
(currval('exercises_id_seq'), 'Maria, traga-me, um copo de água, por favor.', false, 'A segunda vírgula está incorreta, pois separa o verbo "traga-me" de seu complemento "um copo de água".'),
(currval('exercises_id_seq'), 'Maria traga-me, um copo de água por favor.', false, 'Falta a vírgula após o vocativo "Maria" e a vírgula após "um copo de água" está incorreta.');

-- Exercício 4
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Qual alternativa apresenta o uso correto da vírgula para isolar uma expressão explicativa?',
  'Expressões explicativas como "isto é", "ou seja", "por exemplo", entre outras, devem ser isoladas por vírgulas.',
  2
) RETURNING id;

-- Opções para o Exercício 4
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Ele precisa de alimentos saudáveis, isto é, frutas, verduras e legumes.', true, 'A expressão explicativa "isto é" está corretamente isolada por vírgulas.'),
(currval('exercises_id_seq'), 'Ele precisa de alimentos saudáveis isto é, frutas, verduras e legumes.', false, 'Falta a vírgula antes da expressão explicativa "isto é".'),
(currval('exercises_id_seq'), 'Ele precisa de alimentos saudáveis, isto é frutas, verduras e legumes.', false, 'Falta a vírgula depois da expressão explicativa "isto é".'),
(currval('exercises_id_seq'), 'Ele precisa de alimentos saudáveis isto é frutas, verduras e legumes.', false, 'Faltam as vírgulas para isolar a expressão explicativa "isto é".');

-- Exercício 5
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Em qual alternativa a vírgula está sendo usada corretamente para separar adjuntos adverbiais deslocados?',
  'Adjuntos adverbiais deslocados, especialmente os mais longos, devem ser isolados por vírgula.',
  2
) RETURNING id;

-- Opções para o Exercício 5
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'No próximo domingo, iremos todos ao parque.', true, 'O adjunto adverbial "No próximo domingo" está deslocado no início da frase, por isso é isolado por vírgula.'),
(currval('exercises_id_seq'), 'No próximo domingo iremos todos ao parque.', false, 'Falta a vírgula para isolar o adjunto adverbial deslocado "No próximo domingo".'),
(currval('exercises_id_seq'), 'Iremos, no próximo domingo, todos ao parque.', true, 'O adjunto adverbial "no próximo domingo" está deslocado no meio da frase, por isso é isolado por vírgulas.'),
(currval('exercises_id_seq'), 'Iremos todos, no próximo domingo ao parque.', false, 'Falta a segunda vírgula para isolar o adjunto adverbial deslocado "no próximo domingo".');

-- Exercício 6
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Qual alternativa apresenta o uso correto da vírgula para separar elementos de uma enumeração?',
  'Em uma enumeração, os elementos são separados por vírgulas, exceto o último quando precedido por uma conjunção como "e", "ou".',
  2
) RETURNING id;

-- Opções para o Exercício 6
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Comprei pão, leite, manteiga e queijo.', true, 'Os elementos da enumeração estão corretamente separados por vírgulas, e o último elemento não leva vírgula por estar precedido pela conjunção "e".'),
(currval('exercises_id_seq'), 'Comprei pão, leite, manteiga, e queijo.', false, 'Não se usa vírgula antes da conjunção "e" quando ela introduz o último elemento de uma enumeração.'),
(currval('exercises_id_seq'), 'Comprei pão leite manteiga e queijo.', false, 'Faltam as vírgulas para separar os elementos da enumeração.'),
(currval('exercises_id_seq'), 'Comprei, pão, leite, manteiga, e queijo.', false, 'A primeira vírgula está incorreta, pois separa o verbo "comprei" de seu complemento, e não se usa vírgula antes da conjunção "e" quando ela introduz o último elemento de uma enumeração.');

-- Exercício 7
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Em qual alternativa a vírgula está sendo usada corretamente para isolar uma oração subordinada adverbial deslocada?',
  'Orações subordinadas adverbiais deslocadas, especialmente quando antepostas à oração principal, devem ser isoladas por vírgula.',
  3
) RETURNING id;

-- Opções para o Exercício 7
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Quando o professor chegou, os alunos já estavam em sala.', true, 'A oração subordinada adverbial "Quando o professor chegou" está anteposta à oração principal, por isso é isolada por vírgula.'),
(currval('exercises_id_seq'), 'Quando o professor chegou os alunos já estavam em sala.', false, 'Falta a vírgula para isolar a oração subordinada adverbial anteposta "Quando o professor chegou".'),
(currval('exercises_id_seq'), 'Os alunos já estavam em sala, quando o professor chegou.', true, 'Quando a oração subordinada adverbial vem depois da oração principal, o uso da vírgula é opcional, especialmente se a oração for curta.'),
(currval('exercises_id_seq'), 'Os alunos, já estavam em sala quando o professor chegou.', false, 'A vírgula está incorreta, pois separa o sujeito "Os alunos" do predicado "já estavam em sala".');

-- Exercício 8
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Qual alternativa apresenta o uso correto da vírgula para isolar uma oração subordinada adjetiva explicativa?',
  'Orações subordinadas adjetivas explicativas devem ser isoladas por vírgulas, pois trazem uma informação adicional, não essencial para a identificação do termo que modificam.',
  3
) RETURNING id;

-- Opções para o Exercício 8
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'O professor, que é muito exigente, aplicou uma prova difícil.', true, 'A oração subordinada adjetiva explicativa "que é muito exigente" está corretamente isolada por vírgulas.'),
(currval('exercises_id_seq'), 'O professor que é muito exigente aplicou uma prova difícil.', false, 'Sem as vírgulas, a oração "que é muito exigente" torna-se uma subordinada adjetiva restritiva, indicando que se trata de um professor específico dentre outros.'),
(currval('exercises_id_seq'), 'O professor, que é muito exigente aplicou uma prova difícil.', false, 'Falta a segunda vírgula para isolar a oração subordinada adjetiva explicativa "que é muito exigente".'),
(currval('exercises_id_seq'), 'O professor que é muito exigente, aplicou uma prova difícil.', false, 'A vírgula está incorreta, pois separa o sujeito "O professor que é muito exigente" do verbo "aplicou".');

-- Exercício 9
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Em qual alternativa a vírgula está sendo usada incorretamente?',
  'A vírgula não deve ser usada para separar o sujeito do predicado, nem o verbo de seus complementos diretos, indiretos ou predicativos.',
  3
) RETURNING id;

-- Opções para o Exercício 9
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'O aluno, respondeu corretamente à pergunta do professor.', true, 'A vírgula está incorreta porque separa o sujeito "O aluno" do verbo "respondeu".'),
(currval('exercises_id_seq'), 'O aluno, que estudou muito, respondeu corretamente à pergunta do professor.', false, 'As vírgulas estão corretas, isolando a oração subordinada adjetiva explicativa "que estudou muito".'),
(currval('exercises_id_seq'), 'Ontem à tarde, o aluno respondeu corretamente à pergunta do professor.', false, 'A vírgula está correta, isolando o adjunto adverbial deslocado "Ontem à tarde".'),
(currval('exercises_id_seq'), 'O aluno respondeu, corretamente, à pergunta do professor.', false, 'As vírgulas estão corretas, isolando o adjunto adverbial "corretamente".');

-- Exercício 10
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Qual alternativa apresenta o uso correto da vírgula para separar orações coordenadas sindéticas adversativas?',
  'Orações coordenadas sindéticas adversativas são aquelas introduzidas por conjunções como "mas", "porém", "contudo", "todavia", entre outras. Essas conjunções devem ser precedidas de vírgula.',
  3
) RETURNING id;

-- Opções para o Exercício 10
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Ele estudou muito, mas não passou no exame.', true, 'A vírgula está corretamente colocada antes da conjunção adversativa "mas".'),
(currval('exercises_id_seq'), 'Ele estudou muito mas, não passou no exame.', false, 'A vírgula está incorretamente colocada após a conjunção "mas", quando deveria estar antes.'),
(currval('exercises_id_seq'), 'Ele estudou muito mas não passou no exame.', false, 'Falta a vírgula antes da conjunção adversativa "mas".'),
(currval('exercises_id_seq'), 'Ele, estudou muito, mas não passou no exame.', false, 'A primeira vírgula está incorreta, pois separa o sujeito "Ele" do verbo "estudou".');

-- Exercício 11
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Em qual alternativa a vírgula é usada corretamente para isolar uma expressão intercalada?',
  'Expressões intercaladas são aquelas que interrompem a sequência natural da frase, inserindo uma informação adicional. Elas são sempre isoladas por vírgulas.',
  3
) RETURNING id;

-- Opções para o Exercício 11
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'A prova, segundo o professor, será muito difícil.', true, 'A expressão intercalada "segundo o professor" está corretamente isolada por vírgulas.'),
(currval('exercises_id_seq'), 'A prova segundo o professor, será muito difícil.', false, 'Falta a primeira vírgula para isolar a expressão intercalada "segundo o professor".'),
(currval('exercises_id_seq'), 'A prova, segundo o professor será muito difícil.', false, 'Falta a segunda vírgula para isolar a expressão intercalada "segundo o professor".'),
(currval('exercises_id_seq'), 'A prova segundo o professor será muito difícil.', false, 'Faltam as vírgulas para isolar a expressão intercalada "segundo o professor".');

-- Exercício 12
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Qual alternativa apresenta o uso correto da vírgula para separar termos coordenados?',
  'Termos coordenados são aqueles que exercem a mesma função sintática na oração. Eles são separados por vírgula quando não há conjunção entre eles.',
  2
) RETURNING id;

-- Opções para o Exercício 12
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Ele é um homem honesto, trabalhador, responsável.', true, 'Os adjetivos "honesto", "trabalhador" e "responsável" são termos coordenados e estão corretamente separados por vírgulas.'),
(currval('exercises_id_seq'), 'Ele é um homem honesto trabalhador responsável.', false, 'Faltam as vírgulas para separar os adjetivos coordenados "honesto", "trabalhador" e "responsável".'),
(currval('exercises_id_seq'), 'Ele é um homem honesto, trabalhador e, responsável.', false, 'A vírgula após o "e" está incorreta, pois não se usa vírgula após a conjunção "e" quando ela introduz o último termo de uma enumeração.'),
(currval('exercises_id_seq'), 'Ele é um homem, honesto, trabalhador, responsável.', false, 'A primeira vírgula está incorreta, pois separa o predicativo "homem" de seus adjuntos adnominais.');

-- Exercício 13
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Em qual alternativa a vírgula é usada corretamente para isolar uma oração reduzida de gerúndio?',
  'Orações reduzidas de gerúndio, especialmente quando equivalem a orações adverbiais, geralmente são isoladas por vírgula, principalmente quando antepostas à oração principal.',
  3
) RETURNING id;

-- Opções para o Exercício 13
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Terminando a prova, os alunos saíram da sala.', true, 'A oração reduzida de gerúndio "Terminando a prova" está anteposta à oração principal e está corretamente isolada por vírgula.'),
(currval('exercises_id_seq'), 'Terminando a prova os alunos saíram da sala.', false, 'Falta a vírgula para isolar a oração reduzida de gerúndio "Terminando a prova".'),
(currval('exercises_id_seq'), 'Os alunos, terminando a prova saíram da sala.', false, 'Falta a segunda vírgula para isolar a oração reduzida de gerúndio "terminando a prova".'),
(currval('exercises_id_seq'), 'Os alunos saíram da sala, terminando a prova.', true, 'A oração reduzida de gerúndio "terminando a prova" está posposta à oração principal e está corretamente isolada por vírgula.');

-- Exercício 14
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Qual alternativa apresenta o uso correto da vírgula para isolar orações intercaladas?',
  'Orações intercaladas são aquelas que interrompem a sequência natural da frase, inserindo uma informação adicional. Elas são sempre isoladas por vírgulas.',
  3
) RETURNING id;

-- Opções para o Exercício 14
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'O professor, acredito eu, não virá hoje.', true, 'A oração intercalada "acredito eu" está corretamente isolada por vírgulas.'),
(currval('exercises_id_seq'), 'O professor acredito eu, não virá hoje.', false, 'Falta a primeira vírgula para isolar a oração intercalada "acredito eu".'),
(currval('exercises_id_seq'), 'O professor, acredito eu não virá hoje.', false, 'Falta a segunda vírgula para isolar a oração intercalada "acredito eu".'),
(currval('exercises_id_seq'), 'O professor acredito eu não virá hoje.', false, 'Faltam as vírgulas para isolar a oração intercalada "acredito eu".');

-- Exercício 15
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Em qual alternativa a vírgula é usada incorretamente?',
  'A vírgula não deve ser usada para separar o verbo de seus complementos, nem para separar o sujeito do predicado.',
  3
) RETURNING id;

-- Opções para o Exercício 15
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'O professor entregou, as provas corrigidas aos alunos.', true, 'A vírgula está incorreta porque separa o verbo "entregou" de seu complemento direto "as provas corrigidas".'),
(currval('exercises_id_seq'), 'O professor, que é muito exigente, entregou as provas corrigidas aos alunos.', false, 'As vírgulas estão corretas, isolando a oração subordinada adjetiva explicativa "que é muito exigente".'),
(currval('exercises_id_seq'), 'Ontem à tarde, o professor entregou as provas corrigidas aos alunos.', false, 'A vírgula está correta, isolando o adjunto adverbial deslocado "Ontem à tarde".'),
(currval('exercises_id_seq'), 'O professor entregou as provas corrigidas aos alunos, na sala de aula.', false, 'A vírgula está correta, isolando o adjunto adverbial "na sala de aula".');

-- Exercício 16
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Qual alternativa apresenta o uso correto da vírgula para separar orações coordenadas sindéticas aditivas?',
  'Orações coordenadas sindéticas aditivas são aquelas introduzidas por conjunções como "e", "nem", entre outras. Geralmente, não se usa vírgula antes da conjunção "e" quando as orações têm o mesmo sujeito.',
  3
) RETURNING id;

-- Opções para o Exercício 16
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Ele chegou em casa e foi direto para o quarto.', true, 'Não se usa vírgula antes da conjunção "e" quando as orações têm o mesmo sujeito.'),
(currval('exercises_id_seq'), 'Ele chegou em casa, e foi direto para o quarto.', false, 'Não se usa vírgula antes da conjunção "e" quando as orações têm o mesmo sujeito.'),
(currval('exercises_id_seq'), 'Ele chegou em casa, foi direto para o quarto.', false, 'Falta a conjunção "e" entre as orações coordenadas.'),
(currval('exercises_id_seq'), 'Ele chegou em casa e, foi direto para o quarto.', false, 'A vírgula está incorretamente colocada após a conjunção "e".');

-- Exercício 17
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Em qual alternativa a vírgula é usada corretamente para isolar uma oração reduzida de infinitivo?',
  'Orações reduzidas de infinitivo, especialmente quando equivalem a orações adverbiais, geralmente são isoladas por vírgula, principalmente quando antepostas à oração principal.',
  3
) RETURNING id;

-- Opções para o Exercício 17
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Ao chegar em casa, ele tomou um banho.', true, 'A oração reduzida de infinitivo "Ao chegar em casa" está anteposta à oração principal e está corretamente isolada por vírgula.'),
(currval('exercises_id_seq'), 'Ao chegar em casa ele tomou um banho.', false, 'Falta a vírgula para isolar a oração reduzida de infinitivo "Ao chegar em casa".'),
(currval('exercises_id_seq'), 'Ele, ao chegar em casa tomou um banho.', false, 'Falta a segunda vírgula para isolar a oração reduzida de infinitivo "ao chegar em casa".'),
(currval('exercises_id_seq'), 'Ele tomou um banho, ao chegar em casa.', true, 'A oração reduzida de infinitivo "ao chegar em casa" está posposta à oração principal e está corretamente isolada por vírgula.');

-- Exercício 18
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Qual alternativa apresenta o uso correto da vírgula para isolar o adjunto adverbial deslocado?',
  'Adjuntos adverbiais deslocados, especialmente os mais longos, devem ser isolados por vírgula.',
  2
) RETURNING id;

-- Opções para o Exercício 18
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Durante a reunião, todos permaneceram em silêncio.', true, 'O adjunto adverbial "Durante a reunião" está deslocado no início da frase, por isso é isolado por vírgula.'),
(currval('exercises_id_seq'), 'Durante a reunião todos permaneceram em silêncio.', false, 'Falta a vírgula para isolar o adjunto adverbial deslocado "Durante a reunião".'),
(currval('exercises_id_seq'), 'Todos, durante a reunião, permaneceram em silêncio.', true, 'O adjunto adverbial "durante a reunião" está deslocado no meio da frase, por isso é isolado por vírgulas.'),
(currval('exercises_id_seq'), 'Todos permaneceram, durante a reunião em silêncio.', false, 'Falta a segunda vírgula para isolar o adjunto adverbial "durante a reunião".');

-- Exercício 19
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Em qual alternativa a vírgula é usada corretamente para separar orações coordenadas assindéticas?',
  'Orações coordenadas assindéticas são aquelas que não são ligadas por conjunções. Elas são separadas por vírgula.',
  2
) RETURNING id;

-- Opções para o Exercício 19
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Cheguei em casa, tomei banho, jantei.', true, 'As orações coordenadas assindéticas "Cheguei em casa", "tomei banho" e "jantei" estão corretamente separadas por vírgulas.'),
(currval('exercises_id_seq'), 'Cheguei em casa tomei banho jantei.', false, 'Faltam as vírgulas para separar as orações coordenadas assindéticas "Cheguei em casa", "tomei banho" e "jantei".'),
(currval('exercises_id_seq'), 'Cheguei em casa, tomei banho e, jantei.', false, 'A vírgula após o "e" está incorreta, pois não se usa vírgula após a conjunção "e" quando ela introduz a última oração.'),
(currval('exercises_id_seq'), 'Cheguei, em casa, tomei, banho, jantei.', false, 'As vírgulas após "Cheguei" e "tomei" estão incorretas, pois separam os verbos de seus complementos.');

-- Exercício 20
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Qual alternativa apresenta o uso correto da vírgula para isolar uma oração subordinada adverbial concessiva?',
  'Orações subordinadas adverbiais concessivas são aquelas introduzidas por conjunções como "embora", "ainda que", "mesmo que", entre outras. Quando antepostas à oração principal, devem ser isoladas por vírgula.',
  3
) RETURNING id;

-- Opções para o Exercício 20
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Embora estivesse cansado, ele foi trabalhar.', true, 'A oração subordinada adverbial concessiva "Embora estivesse cansado" está anteposta à oração principal e está corretamente isolada por vírgula.'),
(currval('exercises_id_seq'), 'Embora estivesse cansado ele foi trabalhar.', false, 'Falta a vírgula para isolar a oração subordinada adverbial concessiva "Embora estivesse cansado".'),
(currval('exercises_id_seq'), 'Ele foi trabalhar, embora estivesse cansado.', true, 'A oração subordinada adverbial concessiva "embora estivesse cansado" está posposta à oração principal e está corretamente isolada por vírgula.'),
(currval('exercises_id_seq'), 'Ele, embora estivesse cansado foi trabalhar.', false, 'Falta a segunda vírgula para isolar a oração subordinada adverbial concessiva "embora estivesse cansado".');

-- Exercício 21
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Em qual alternativa a vírgula é usada corretamente para isolar uma oração subordinada adjetiva explicativa?',
  'Orações subordinadas adjetivas explicativas são aquelas que acrescentam uma informação adicional ao termo que modificam, sem restringir seu sentido. Elas devem ser isoladas por vírgulas.',
  3
) RETURNING id;

-- Opções para o Exercício 21
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Os alunos, que estudaram para a prova, foram aprovados.', true, 'A oração subordinada adjetiva explicativa "que estudaram para a prova" está corretamente isolada por vírgulas.'),
(currval('exercises_id_seq'), 'Os alunos que estudaram para a prova foram aprovados.', false, 'Sem as vírgulas, a oração "que estudaram para a prova" torna-se uma subordinada adjetiva restritiva, indicando que apenas alguns alunos foram aprovados.'),
(currval('exercises_id_seq'), 'Os alunos, que estudaram para a prova foram aprovados.', false, 'Falta a segunda vírgula para isolar a oração subordinada adjetiva explicativa.'),
(currval('exercises_id_seq'), 'Os alunos que estudaram para a prova, foram aprovados.', false, 'A vírgula está incorreta, pois separa o sujeito "Os alunos que estudaram para a prova" do verbo "foram".');

-- Exercício 22
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Qual alternativa apresenta o uso correto da vírgula para isolar expressões corretivas?',
  'Expressões corretivas como "isto é", "ou melhor", "aliás", "ou seja", entre outras, devem ser isoladas por vírgulas.',
  2
) RETURNING id;

-- Opções para o Exercício 22
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Vou comprar um carro novo, ou melhor, uma moto.', true, 'A expressão corretiva "ou melhor" está corretamente isolada por vírgulas.'),
(currval('exercises_id_seq'), 'Vou comprar um carro novo ou melhor, uma moto.', false, 'Falta a primeira vírgula para isolar a expressão corretiva "ou melhor".'),
(currval('exercises_id_seq'), 'Vou comprar um carro novo, ou melhor uma moto.', false, 'Falta a segunda vírgula para isolar a expressão corretiva "ou melhor".'),
(currval('exercises_id_seq'), 'Vou comprar um carro novo ou melhor uma moto.', false, 'Faltam as vírgulas para isolar a expressão corretiva "ou melhor".');

-- Exercício 23
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Em qual alternativa a vírgula é usada corretamente para separar orações coordenadas sindéticas conclusivas?',
  'Orações coordenadas sindéticas conclusivas são aquelas introduzidas por conjunções como "logo", "portanto", "por isso", entre outras. Essas conjunções geralmente são precedidas de vírgula.',
  3
) RETURNING id;

-- Opções para o Exercício 23
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Ele estudou muito, portanto será aprovado.', true, 'A vírgula está corretamente colocada antes da conjunção conclusiva "portanto".'),
(currval('exercises_id_seq'), 'Ele estudou muito portanto, será aprovado.', false, 'A vírgula está incorretamente colocada após a conjunção "portanto", quando deveria estar antes.'),
(currval('exercises_id_seq'), 'Ele estudou muito portanto será aprovado.', false, 'Falta a vírgula antes da conjunção conclusiva "portanto".'),
(currval('exercises_id_seq'), 'Ele, estudou muito, portanto será aprovado.', false, 'A primeira vírgula está incorreta, pois separa o sujeito "Ele" do verbo "estudou".');

-- Exercício 24
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Qual alternativa apresenta o uso correto da vírgula para isolar uma oração subordinada adverbial causal?',
  'Orações subordinadas adverbiais causais são aquelas introduzidas por conjunções como "porque", "pois", "como" (no sentido de causa), entre outras. Quando antepostas à oração principal, devem ser isoladas por vírgula.',
  3
) RETURNING id;

-- Opções para o Exercício 24
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Como estava doente, não foi à aula.', true, 'A oração subordinada adverbial causal "Como estava doente" está anteposta à oração principal e está corretamente isolada por vírgula.'),
(currval('exercises_id_seq'), 'Como estava doente não foi à aula.', false, 'Falta a vírgula para isolar a oração subordinada adverbial causal "Como estava doente".'),
(currval('exercises_id_seq'), 'Não foi à aula, porque estava doente.', true, 'A oração subordinada adverbial causal "porque estava doente" está posposta à oração principal e está corretamente isolada por vírgula.'),
(currval('exercises_id_seq'), 'Não foi à aula porque, estava doente.', false, 'A vírgula está incorretamente colocada após a conjunção "porque", separando-a do restante da oração.');

-- Exercício 25
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Em qual alternativa a vírgula é usada corretamente para isolar uma oração reduzida de particípio?',
  'Orações reduzidas de particípio, especialmente quando equivalem a orações adverbiais, geralmente são isoladas por vírgula, principalmente quando antepostas à oração principal.',
  3
) RETURNING id;

-- Opções para o Exercício 25
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Terminada a prova, os alunos saíram da sala.', true, 'A oração reduzida de particípio "Terminada a prova" está anteposta à oração principal e está corretamente isolada por vírgula.'),
(currval('exercises_id_seq'), 'Terminada a prova os alunos saíram da sala.', false, 'Falta a vírgula para isolar a oração reduzida de particípio "Terminada a prova".'),
(currval('exercises_id_seq'), 'Os alunos, terminada a prova, saíram da sala.', true, 'A oração reduzida de particípio "terminada a prova" está intercalada e está corretamente isolada por vírgulas.'),
(currval('exercises_id_seq'), 'Os alunos, terminada a prova saíram da sala.', false, 'Falta a segunda vírgula para isolar a oração reduzida de particípio "terminada a prova".');

-- Exercício 26
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Qual alternativa apresenta o uso correto da vírgula para separar orações coordenadas sindéticas alternativas?',
  'Orações coordenadas sindéticas alternativas são aquelas introduzidas por conjunções como "ou", "ora...ora", "quer...quer", entre outras. Geralmente, usa-se vírgula antes dessas conjunções quando elas não são repetidas.',
  3
) RETURNING id;

-- Opções para o Exercício 26
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Você vai ao cinema, ou prefere ficar em casa?', true, 'A vírgula está corretamente colocada antes da conjunção alternativa "ou".'),
(currval('exercises_id_seq'), 'Você vai ao cinema ou, prefere ficar em casa?', false, 'A vírgula está incorretamente colocada após a conjunção "ou", quando deveria estar antes.'),
(currval('exercises_id_seq'), 'Ora ele estuda, ora ele trabalha.', true, 'Quando a conjunção alternativa é repetida ("ora...ora"), não se usa vírgula antes da primeira ocorrência, mas usa-se vírgula antes da segunda.'),
(currval('exercises_id_seq'), 'Ora, ele estuda, ora, ele trabalha.', false, 'As vírgulas após as conjunções "ora" estão incorretas.');

-- Exercício 27
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Em qual alternativa a vírgula é usada corretamente para isolar um adjunto adverbial deslocado?',
  'Adjuntos adverbiais deslocados, especialmente os mais longos, devem ser isolados por vírgula.',
  2
) RETURNING id;

-- Opções para o Exercício 27
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Na próxima semana, iremos visitar nossos pais.', true, 'O adjunto adverbial "Na próxima semana" está deslocado no início da frase, por isso é isolado por vírgula.'),
(currval('exercises_id_seq'), 'Na próxima semana iremos visitar nossos pais.', false, 'Falta a vírgula para isolar o adjunto adverbial deslocado "Na próxima semana".'),
(currval('exercises_id_seq'), 'Iremos, na próxima semana, visitar nossos pais.', true, 'O adjunto adverbial "na próxima semana" está deslocado no meio da frase, por isso é isolado por vírgulas.'),
(currval('exercises_id_seq'), 'Iremos visitar, na próxima semana nossos pais.', false, 'Falta a segunda vírgula para isolar o adjunto adverbial "na próxima semana".');

-- Exercício 28
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Qual alternativa apresenta o uso correto da vírgula para isolar uma expressão de retificação?',
  'Expressões de retificação como "isto é", "ou melhor", "ou seja", "aliás", entre outras, devem ser isoladas por vírgulas.',
  2
) RETURNING id;

-- Opções para o Exercício 28
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Ele comprou um carro, aliás, uma caminhonete.', true, 'A expressão de retificação "aliás" está corretamente isolada por vírgulas.'),
(currval('exercises_id_seq'), 'Ele comprou um carro aliás, uma caminhonete.', false, 'Falta a primeira vírgula para isolar a expressão de retificação "aliás".'),
(currval('exercises_id_seq'), 'Ele comprou um carro, aliás uma caminhonete.', false, 'Falta a segunda vírgula para isolar a expressão de retificação "aliás".'),
(currval('exercises_id_seq'), 'Ele comprou um carro aliás uma caminhonete.', false, 'Faltam as vírgulas para isolar a expressão de retificação "aliás".');

-- Exercício 29
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Em qual alternativa a vírgula é usada corretamente para separar elementos de uma enumeração?',
  'Em uma enumeração, os elementos são separados por vírgulas, exceto o último quando precedido por uma conjunção como "e", "ou".',
  2
) RETURNING id;

-- Opções para o Exercício 29
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Comprei arroz, feijão, açúcar e café.', true, 'Os elementos da enumeração estão corretamente separados por vírgulas, e o último elemento não leva vírgula por estar precedido pela conjunção "e".'),
(currval('exercises_id_seq'), 'Comprei arroz, feijão, açúcar, e café.', false, 'Não se usa vírgula antes da conjunção "e" quando ela introduz o último elemento de uma enumeração.'),
(currval('exercises_id_seq'), 'Comprei arroz feijão açúcar e café.', false, 'Faltam as vírgulas para separar os elementos da enumeração.'),
(currval('exercises_id_seq'), 'Comprei, arroz, feijão, açúcar e café.', false, 'A primeira vírgula está incorreta, pois separa o verbo "comprei" de seu complemento.');

-- Exercício 30
INSERT INTO exercises (category_id, question, explanation, difficulty)
VALUES (
  'prova-virgula',
  'Qual alternativa apresenta o uso correto da vírgula para isolar o vocativo?',
  'O vocativo é um termo usado para chamar, invocar ou interpelar o interlocutor. Ele deve ser isolado por vírgula.',
  2
) RETURNING id;

-- Opções para o Exercício 30
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES 
(currval('exercises_id_seq'), 'Paulo, venha jantar.', true, 'O vocativo "Paulo" está corretamente isolado por vírgula.'),
(currval('exercises_id_seq'), 'Paulo venha jantar.', false, 'Falta a vírgula após o vocativo "Paulo".'),
(currval('exercises_id_seq'), 'Venha jantar, Paulo.', true, 'O vocativo "Paulo" está corretamente isolado por vírgula.'),
(currval('exercises_id_seq'), 'Venha, Paulo jantar.', false, 'A vírgula está incorretamente colocada após o verbo "Venha", separando-o de seu complemento "jantar".');
