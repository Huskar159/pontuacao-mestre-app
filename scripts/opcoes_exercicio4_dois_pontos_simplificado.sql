-- Script simplificado para criar opções para os exercícios de Dois Pontos - Exercício 4

-- Primeiro, verificamos se os exercícios existem
DO $$
DECLARE
    exercicio_count integer;
BEGIN
    SELECT COUNT(*) INTO exercicio_count 
    FROM exercises 
    WHERE category_id = 'dois-pontos-4';
    
    IF exercicio_count = 0 THEN
        RAISE EXCEPTION 'Os exercícios para a categoria dois-pontos-4 ainda não foram criados. Execute primeiro o script dois_pontos_exercicios.sql!';
    END IF;
END $$;

-- Adicionando opções para o primeiro exercício
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Chegamos a uma conclusão: precisamos melhorar nossa comunicação interna.',
    TRUE,
    'Correto! Os dois pontos são usados para introduzir explicações.'
FROM exercises 
WHERE category_id = 'dois-pontos-4' 
AND question = 'Em qual das opções os dois pontos introduzem adequadamente uma explicação?';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'A situação é simples: não temos recursos suficientes para o projeto.',
    TRUE,
    'Correto! Os dois pontos introduzem uma explicação sobre uma situação.'
FROM exercises 
WHERE category_id = 'dois-pontos-4' 
AND question = 'Em qual das opções os dois pontos introduzem adequadamente uma explicação?';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'O motivo do atraso ficou claro: houve um problema no sistema.',
    TRUE,
    'Correto! Os dois pontos introduzem uma explicação sobre um fato mencionado.'
FROM exercises 
WHERE category_id = 'dois-pontos-4' 
AND question = 'Em qual das opções os dois pontos introduzem adequadamente uma explicação?';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'A empresa: está passando por dificuldades financeiras.',
    FALSE,
    'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
FROM exercises 
WHERE category_id = 'dois-pontos-4' 
AND question = 'Em qual das opções os dois pontos introduzem adequadamente uma explicação?';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Ela explicou: que não poderia comparecer à reunião.',
    FALSE,
    'Incorreto! Após verbos como "explicar" seguidos de "que", não se usam dois pontos.'
FROM exercises 
WHERE category_id = 'dois-pontos-4' 
AND question = 'Em qual das opções os dois pontos introduzem adequadamente uma explicação?';

-- Adicionando opções para o segundo exercício
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Esclarecemos um ponto importante: o prazo de inscrição não será prorrogado.',
    TRUE,
    'Correto! Os dois pontos são usados para introduzir um esclarecimento.'
FROM exercises 
WHERE category_id = 'dois-pontos-4' 
AND question = 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente antes de um esclarecimento:';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'É necessário deixar claro: essas medidas são temporárias.',
    TRUE,
    'Correto! Os dois pontos introduzem um esclarecimento sobre algo mencionado anteriormente.'
FROM exercises 
WHERE category_id = 'dois-pontos-4' 
AND question = 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente antes de um esclarecimento:';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Uma observação relevante: os documentos devem ser enviados com antecedência.',
    TRUE,
    'Correto! Os dois pontos introduzem um esclarecimento ou observação importante.'
FROM exercises 
WHERE category_id = 'dois-pontos-4' 
AND question = 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente antes de um esclarecimento:';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'O diretor: esclareceu todas as dúvidas dos funcionários.',
    FALSE,
    'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'
FROM exercises 
WHERE category_id = 'dois-pontos-4' 
AND question = 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente antes de um esclarecimento:';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Ficou definido: que as reuniões serão às segundas-feiras.',
    FALSE,
    'Incorreto! Após expressões como "ficou definido" seguidas de "que", não se usam dois pontos.'
FROM exercises 
WHERE category_id = 'dois-pontos-4' 
AND question = 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente antes de um esclarecimento:';
