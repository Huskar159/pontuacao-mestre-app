-- Script simplificado para criar opções para os exercícios de Dois Pontos - Exercício 2

-- Primeiro, verificamos se os exercícios existem
DO $$
DECLARE
    exercicio_count integer;
BEGIN
    SELECT COUNT(*) INTO exercicio_count 
    FROM exercises 
    WHERE category_id = 'dois-pontos-2';
    
    IF exercicio_count = 0 THEN
        RAISE EXCEPTION 'Os exercícios para a categoria dois-pontos-2 ainda não foram criados. Execute primeiro o script dois_pontos_exercicios.sql!';
    END IF;
END $$;

-- Adicionando opções para o primeiro exercício
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Precisamos dos seguintes materiais: madeira, pregos, cola e lixa.',
    TRUE,
    'Correto! Os dois pontos são usados antes de uma enumeração, após um termo que a anuncia.'
FROM exercises 
WHERE category_id = 'dois-pontos-2' 
AND question = 'Em qual das opções os dois pontos estão sendo usados corretamente em uma enumeração?';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Comprei algumas frutas: maçãs, bananas, uvas e peras.',
    TRUE,
    'Correto! Os dois pontos introduzem uma enumeração de itens.'
FROM exercises 
WHERE category_id = 'dois-pontos-2' 
AND question = 'Em qual das opções os dois pontos estão sendo usados corretamente em uma enumeração?';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Os ingredientes necessários são: farinha, açúcar, ovos e leite.',
    TRUE,
    'Correto! Os dois pontos introduzem uma enumeração após o verbo "são".'
FROM exercises 
WHERE category_id = 'dois-pontos-2' 
AND question = 'Em qual das opções os dois pontos estão sendo usados corretamente em uma enumeração?';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Vários alunos: Carlos, Pedro e Ana foram aprovados.',
    FALSE,
    'Incorreto! Não se deve usar dois pontos para separar elementos que compõem o sujeito.'
FROM exercises 
WHERE category_id = 'dois-pontos-2' 
AND question = 'Em qual das opções os dois pontos estão sendo usados corretamente em uma enumeração?';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Ele foi à: padaria, farmácia e supermercado.',
    FALSE,
    'Incorreto! Não se usa dois pontos após preposição.'
FROM exercises 
WHERE category_id = 'dois-pontos-2' 
AND question = 'Em qual das opções os dois pontos estão sendo usados corretamente em uma enumeração?';

-- Adicionando opções para o segundo exercício
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Segue a lista de participantes: Maria Silva, João Pereira e Ana Souza.',
    TRUE,
    'Correto! Os dois pontos são usados para introduzir uma lista após um termo anunciador.'
FROM exercises 
WHERE category_id = 'dois-pontos-2' 
AND question = 'Identifique a alternativa em que os dois pontos introduzem corretamente uma lista de itens:';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Os itens faltantes são: canetas, papel A4 e grampeador.',
    TRUE,
    'Correto! Os dois pontos introduzem uma lista de itens após o verbo "são".'
FROM exercises 
WHERE category_id = 'dois-pontos-2' 
AND question = 'Identifique a alternativa em que os dois pontos introduzem corretamente uma lista de itens:';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Aviso aos funcionários: a reunião foi adiada para segunda-feira.',
    TRUE,
    'Correto! Os dois pontos podem introduzir uma informação após um termo anunciador.'
FROM exercises 
WHERE category_id = 'dois-pontos-2' 
AND question = 'Identifique a alternativa em que os dois pontos introduzem corretamente uma lista de itens:';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'A empresa: Microsoft, Apple e Google dominam o mercado.',
    FALSE,
    'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado ou elementos dentro do sujeito.'
FROM exercises 
WHERE category_id = 'dois-pontos-2' 
AND question = 'Identifique a alternativa em que os dois pontos introduzem corretamente uma lista de itens:';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Ele pensou em: desistir do projeto.',
    FALSE,
    'Incorreto! Não se usa dois pontos após preposição.'
FROM exercises 
WHERE category_id = 'dois-pontos-2' 
AND question = 'Identifique a alternativa em que os dois pontos introduzem corretamente uma lista de itens:';
