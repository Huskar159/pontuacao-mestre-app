-- Script simplificado para criar opções para os exercícios de Dois Pontos - Exercício 1

-- Primeiro, verificamos se os exercícios existem
DO $$
DECLARE
    exercicio_count integer;
BEGIN
    SELECT COUNT(*) INTO exercicio_count 
    FROM exercises 
    WHERE category_id = 'dois-pontos';
    
    IF exercicio_count = 0 THEN
        RAISE EXCEPTION 'Os exercícios para a categoria dois-pontos ainda não foram criados. Execute primeiro o script dois_pontos_exercicios.sql!';
    END IF;
END $$;

-- Adicionando opções para o primeiro exercício
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'O professor disse: "Amanhã teremos prova."',
    TRUE,
    'Correto! Os dois pontos são usados antes de uma citação direta.'
FROM exercises 
WHERE category_id = 'dois-pontos' 
AND question = 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente:';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Precisamos de vários itens: canetas, lápis e cadernos.',
    TRUE,
    'Correto! Os dois pontos são usados antes de uma enumeração.'
FROM exercises 
WHERE category_id = 'dois-pontos' 
AND question = 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente:';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Concluí: o problema era mais simples do que parecia.',
    TRUE,
    'Correto! Os dois pontos são usados para introduzir uma conclusão.'
FROM exercises 
WHERE category_id = 'dois-pontos' 
AND question = 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente:';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Fui à loja, comprei tudo o que precisava: e voltei para casa.',
    FALSE,
    'Incorreto! Não se usa dois pontos antes de "e" dessa forma.'
FROM exercises 
WHERE category_id = 'dois-pontos' 
AND question = 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente:';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Ele respondeu: que não viria à reunião.',
    FALSE,
    'Incorreto! Não se deve usar dois pontos antes de "que" neste contexto.'
FROM exercises 
WHERE category_id = 'dois-pontos' 
AND question = 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente:';

-- Adicionando opções para o segundo exercício
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Ficou claro: ele não queria participar da atividade.',
    TRUE,
    'Correto! Os dois pontos introduzem uma explicação do que foi mencionado antes.'
FROM exercises 
WHERE category_id = 'dois-pontos' 
AND question = 'Em qual das opções os dois pontos indicam uma explicação?';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'O resultado foi surpreendente: ninguém esperava um desempenho tão bom.',
    TRUE,
    'Correto! Os dois pontos introduzem uma explicação ou esclarecimento.'
FROM exercises 
WHERE category_id = 'dois-pontos' 
AND question = 'Em qual das opções os dois pontos indicam uma explicação?';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'A conclusão é óbvia: precisamos mudar nossa estratégia.',
    TRUE,
    'Correto! Os dois pontos introduzem uma explicação ou conclusão.'
FROM exercises 
WHERE category_id = 'dois-pontos' 
AND question = 'Em qual das opções os dois pontos indicam uma explicação?';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Maria: chegou atrasada para a aula.',
    FALSE,
    'Incorreto! Neste caso, não se usa dois pontos para separar o sujeito do predicado.'
FROM exercises 
WHERE category_id = 'dois-pontos' 
AND question = 'Em qual das opções os dois pontos indicam uma explicação?';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Eles estavam preocupados: por causa da chuva.',
    FALSE,
    'Incorreto! Não se usa dois pontos antes de "por causa" neste contexto.'
FROM exercises 
WHERE category_id = 'dois-pontos' 
AND question = 'Em qual das opções os dois pontos indicam uma explicação?';
