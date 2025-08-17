-- Script simplificado para criar opções para os exercícios de Dois Pontos - Exercício 3

-- Primeiro, verificamos se os exercícios existem
DO $$
DECLARE
    exercicio_count integer;
BEGIN
    SELECT COUNT(*) INTO exercicio_count 
    FROM exercises 
    WHERE category_id = 'dois-pontos-3';
    
    IF exercicio_count = 0 THEN
        RAISE EXCEPTION 'Os exercícios para a categoria dois-pontos-3 ainda não foram criados. Execute primeiro o script dois_pontos_exercicios.sql!';
    END IF;
END $$;

-- Adicionando opções para o primeiro exercício
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'O professor afirmou: "A prova será na próxima semana."',
    TRUE,
    'Correto! Os dois pontos são usados antes de uma citação direta, especialmente após verbos dicendi (verbos de dizer).'
FROM exercises 
WHERE category_id = 'dois-pontos-3' 
AND question = 'Identifique a frase em que os dois pontos estão sendo usados corretamente antes de uma citação direta:';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Suas últimas palavras foram: "Voltarei em breve."',
    TRUE,
    'Correto! Os dois pontos introduzem uma citação direta.'
FROM exercises 
WHERE category_id = 'dois-pontos-3' 
AND question = 'Identifique a frase em que os dois pontos estão sendo usados corretamente antes de uma citação direta:';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'O aviso na porta dizia: "Fechado para almoço. Voltamos às 14h."',
    TRUE,
    'Correto! Os dois pontos introduzem uma citação de um texto escrito.'
FROM exercises 
WHERE category_id = 'dois-pontos-3' 
AND question = 'Identifique a frase em que os dois pontos estão sendo usados corretamente antes de uma citação direta:';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Ele disse: que viria mais tarde.',
    FALSE,
    'Incorreto! Após verbos dicendi seguidos de "que", não se usam dois pontos, mas vírgula ou nada.'
FROM exercises 
WHERE category_id = 'dois-pontos-3' 
AND question = 'Identifique a frase em que os dois pontos estão sendo usados corretamente antes de uma citação direta:';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'A notícia: "O presidente renunciou" surpreendeu a todos.',
    FALSE,
    'Incorreto! Não se deve usar dois pontos entre o sujeito e o resto da oração.'
FROM exercises 
WHERE category_id = 'dois-pontos-3' 
AND question = 'Identifique a frase em que os dois pontos estão sendo usados corretamente antes de uma citação direta:';

-- Adicionando opções para o segundo exercício
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'João exclamou: "Conseguimos!"',
    TRUE,
    'Correto! Os dois pontos são usados para introduzir falas de personagens.'
FROM exercises 
WHERE category_id = 'dois-pontos-3' 
AND question = 'Em qual alternativa os dois pontos introduzem adequadamente uma fala de personagem?';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'A mãe perguntou: "Onde você estava?"',
    TRUE,
    'Correto! Os dois pontos introduzem a fala de um personagem em narrativas.'
FROM exercises 
WHERE category_id = 'dois-pontos-3' 
AND question = 'Em qual alternativa os dois pontos introduzem adequadamente uma fala de personagem?';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Maria suspirou e disse: "Estou cansada."',
    TRUE,
    'Correto! Os dois pontos introduzem a fala de um personagem após um verbo de elocução.'
FROM exercises 
WHERE category_id = 'dois-pontos-3' 
AND question = 'Em qual alternativa os dois pontos introduzem adequadamente uma fala de personagem?';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'O garoto: "Quero chocolate" insistia sem parar.',
    FALSE,
    'Incorreto! Falta um verbo de elocução antes dos dois pontos.'
FROM exercises 
WHERE category_id = 'dois-pontos-3' 
AND question = 'Em qual alternativa os dois pontos introduzem adequadamente uma fala de personagem?';

INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
SELECT 
    id,
    'Ana disse: que estava com fome.',
    FALSE,
    'Incorreto! Após verbos dicendi seguidos de "que", não se usam dois pontos.'
FROM exercises 
WHERE category_id = 'dois-pontos-3' 
AND question = 'Em qual alternativa os dois pontos introduzem adequadamente uma fala de personagem?';
