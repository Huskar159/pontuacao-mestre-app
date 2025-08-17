-- Script para criar exercícios de ponto e vírgula no Supabase

-- 1. Inserir categorias para os exercícios de ponto e vírgula apenas se elas não existirem
INSERT INTO exercise_categories (id, title, description)
SELECT 'ponto-virgula', 'Ponto e Vírgula - Exercício 1', 'Introdução ao uso do ponto e vírgula na língua portuguesa.'
WHERE NOT EXISTS (SELECT 1 FROM exercise_categories WHERE id = 'ponto-virgula');

INSERT INTO exercise_categories (id, title, description)
SELECT 'ponto-virgula-2', 'Ponto e Vírgula - Exercício 2', 'Usos avançados do ponto e vírgula em estruturas coordenadas e termos explicativos.'
WHERE NOT EXISTS (SELECT 1 FROM exercise_categories WHERE id = 'ponto-virgula-2');

INSERT INTO exercise_categories (id, title, description)
SELECT 'ponto-virgula-3', 'Ponto e Vírgula - Exercício 3', 'Uso do ponto e vírgula para separar orações coordenadas extensas.'
WHERE NOT EXISTS (SELECT 1 FROM exercise_categories WHERE id = 'ponto-virgula-3');

INSERT INTO exercise_categories (id, title, description)
SELECT 'ponto-virgula-4', 'Ponto e Vírgula - Exercício 4', 'Uso do ponto e vírgula em enumerações complexas.'
WHERE NOT EXISTS (SELECT 1 FROM exercise_categories WHERE id = 'ponto-virgula-4');

INSERT INTO exercise_categories (id, title, description)
SELECT 'ponto-virgula-5', 'Ponto e Vírgula - Exercício 5', 'Casos especiais do uso do ponto e vírgula em diferentes contextos.'
WHERE NOT EXISTS (SELECT 1 FROM exercise_categories WHERE id = 'ponto-virgula-5');

INSERT INTO exercise_categories (id, title, description)
SELECT 'prova-ponto-virgula', 'Prova Final de Ponto e Vírgula', 'Avalie seu conhecimento sobre o uso do ponto e vírgula na língua portuguesa.'
WHERE NOT EXISTS (SELECT 1 FROM exercise_categories WHERE id = 'prova-ponto-virgula');

-- 2. Verificar se já existem exercícios para a categoria 'ponto-virgula' antes de inserir
DO $$
DECLARE
    count_exercises INTEGER;
BEGIN
    SELECT COUNT(*) INTO count_exercises FROM exercises WHERE category_id = 'ponto-virgula';
    
    -- Só inserir se não existirem exercícios para esta categoria
    IF count_exercises = 0 THEN
        -- Inserir exercícios para a categoria 'ponto-virgula' (Exercício 1)
        INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
        ('ponto-virgula', 'Identifique a alternativa em que o ponto e vírgula está sendo usado corretamente:', 'O ponto e vírgula é usado para separar orações coordenadas não unidas por conjunção, especialmente quando são extensas.', 1),
        ('ponto-virgula', 'Em qual das opções o ponto e vírgula está sendo usado para separar itens em uma enumeração complexa?', 'O ponto e vírgula é usado para separar itens em uma enumeração quando os itens já contêm vírgulas.', 1),
        ('ponto-virgula', 'Qual alternativa apresenta o uso correto do ponto e vírgula entre orações coordenadas?', 'O ponto e vírgula é usado entre orações coordenadas não unidas por conjunção.', 1),
        ('ponto-virgula', 'Identifique a opção em que o ponto e vírgula está sendo usado para introduzir uma explicação:', 'O ponto e vírgula pode ser usado antes de expressões explicativas como "isto é", "ou seja", "a saber".', 1),
        ('ponto-virgula', 'Em qual frase o ponto e vírgula está sendo usado corretamente para separar orações com sujeitos diferentes?', 'O ponto e vírgula é usado para separar orações coordenadas com sujeitos diferentes.', 1),
        ('ponto-virgula', 'Qual alternativa apresenta o uso correto do ponto e vírgula em uma lista com itens complexos?', 'O ponto e vírgula é usado para separar itens em uma lista quando esses itens são complexos ou já contêm vírgulas.', 1),
        ('ponto-virgula', 'Identifique a frase em que o ponto e vírgula está sendo usado corretamente antes de conjunções adversativas:', 'O ponto e vírgula é usado antes de conjunções adversativas como "mas", "porém", "contudo", "entretanto".', 1),
        ('ponto-virgula', 'Em qual das opções o ponto e vírgula está sendo usado corretamente para separar considerandos em documentos oficiais?', 'Em documentos oficiais, o ponto e vírgula é usado para separar considerandos ou justificativas.', 1),
        ('ponto-virgula', 'Qual alternativa apresenta o uso correto do ponto e vírgula em citações?', 'O ponto e vírgula é usado para separar diferentes citações ou referências.', 1),
        ('ponto-virgula', 'Identifique a opção em que o ponto e vírgula está sendo usado corretamente em uma enumeração:', 'O ponto e vírgula é usado para separar itens em uma enumeração, especialmente quando são longos ou já contêm vírgulas.', 1);
    END IF;
END $$;

-- 3. Verificar se já existem exercícios para a categoria 'ponto-virgula-2' antes de inserir
DO $$
DECLARE
    count_exercises INTEGER;
BEGIN
    SELECT COUNT(*) INTO count_exercises FROM exercises WHERE category_id = 'ponto-virgula-2';
    
    -- Só inserir se não existirem exercícios para esta categoria
    IF count_exercises = 0 THEN
        -- Inserir exercícios para a categoria 'ponto-virgula-2' (Exercício 2)
        INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
        ('ponto-virgula-2', 'Qual alternativa apresenta o uso correto do ponto e vírgula para separar orações coordenadas sem conjunção?', 'O ponto e vírgula é usado para separar orações coordenadas não unidas por conjunção.', 2),
        ('ponto-virgula-2', 'Em qual das opções o ponto e vírgula está sendo usado corretamente antes de conjunções conclusivas?', 'O ponto e vírgula é usado antes de conjunções conclusivas como "logo", "portanto", "por isso".', 2),
        ('ponto-virgula-2', 'Identifique a frase em que o ponto e vírgula está sendo usado corretamente em uma enumeração complexa:', 'O ponto e vírgula é usado para separar itens em uma enumeração quando os itens já contêm vírgulas.', 2),
        ('ponto-virgula-2', 'Qual alternativa apresenta o uso correto do ponto e vírgula antes de expressões explicativas?', 'O ponto e vírgula pode ser usado antes de expressões explicativas como "isto é", "ou seja", "a saber".', 2),
        ('ponto-virgula-2', 'Em qual frase o ponto e vírgula está sendo usado corretamente para separar orações com relação de causa e consequência?', 'O ponto e vírgula é usado para separar orações com relação de causa e consequência quando não há conjunção.', 2),
        ('ponto-virgula-2', 'Identifique a opção em que o ponto e vírgula está sendo usado corretamente em um texto jurídico:', 'Em textos jurídicos, o ponto e vírgula é usado para separar itens em uma enumeração ou considerandos.', 2),
        ('ponto-virgula-2', 'Qual alternativa apresenta o uso correto do ponto e vírgula em uma lista de definições?', 'O ponto e vírgula é usado para separar diferentes definições em uma lista.', 2),
        ('ponto-virgula-2', 'Em qual das opções o ponto e vírgula está sendo usado corretamente para separar orações coordenadas extensas?', 'O ponto e vírgula é usado para separar orações coordenadas extensas, mesmo quando há conjunção.', 2),
        ('ponto-virgula-2', 'Identifique a frase em que o ponto e vírgula está sendo usado corretamente antes de "porém":', 'O ponto e vírgula é usado antes de conjunções adversativas como "porém".', 2),
        ('ponto-virgula-2', 'Qual alternativa apresenta o uso correto do ponto e vírgula em uma sequência de frases curtas relacionadas?', 'O ponto e vírgula é usado para separar frases curtas relacionadas entre si.', 2);
    END IF;
END $$;

-- 4. Verificar se já existem exercícios para a categoria 'ponto-virgula-3' antes de inserir
DO $$
DECLARE
    count_exercises INTEGER;
BEGIN
    SELECT COUNT(*) INTO count_exercises FROM exercises WHERE category_id = 'ponto-virgula-3';
    
    -- Só inserir se não existirem exercícios para esta categoria
    IF count_exercises = 0 THEN
        -- Inserir exercícios para a categoria 'ponto-virgula-3' (Exercício 3)
        INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
        ('ponto-virgula-3', 'Identifique a alternativa em que o ponto e vírgula está sendo usado corretamente para separar orações coordenadas extensas:', 'O ponto e vírgula é usado para separar orações coordenadas extensas, especialmente quando já contêm vírgulas.', 3),
        ('ponto-virgula-3', 'Em qual das opções o ponto e vírgula está sendo usado corretamente antes de "portanto"?', 'O ponto e vírgula é usado antes de conjunções conclusivas como "portanto".', 3),
        ('ponto-virgula-3', 'Qual alternativa apresenta o uso correto do ponto e vírgula em um período composto por coordenação?', 'O ponto e vírgula é usado para separar orações em um período composto por coordenação quando não há conjunção.', 3),
        ('ponto-virgula-3', 'Identifique a frase em que o ponto e vírgula está sendo usado corretamente para separar orações com sujeitos diferentes:', 'O ponto e vírgula é usado para separar orações coordenadas com sujeitos diferentes.', 3),
        ('ponto-virgula-3', 'Em qual frase o ponto e vírgula está sendo usado corretamente em uma enumeração com explicações?', 'O ponto e vírgula é usado para separar itens em uma enumeração quando esses itens contêm explicações.', 3),
        ('ponto-virgula-3', 'Qual alternativa apresenta o uso correto do ponto e vírgula antes de "entretanto"?', 'O ponto e vírgula é usado antes de conjunções adversativas como "entretanto".', 3),
        ('ponto-virgula-3', 'Identifique a opção em que o ponto e vírgula está sendo usado corretamente em um texto científico:', 'Em textos científicos, o ponto e vírgula é usado para separar diferentes aspectos de um mesmo tema.', 3),
        ('ponto-virgula-3', 'Em qual das opções o ponto e vírgula está sendo usado corretamente para separar orações com verbos diferentes?', 'O ponto e vírgula é usado para separar orações coordenadas com verbos diferentes.', 3),
        ('ponto-virgula-3', 'Qual alternativa apresenta o uso correto do ponto e vírgula em uma sequência de orações independentes?', 'O ponto e vírgula é usado para separar orações independentes relacionadas pelo sentido.', 3),
        ('ponto-virgula-3', 'Identifique a frase em que o ponto e vírgula está sendo usado corretamente antes de "ou seja":', 'O ponto e vírgula pode ser usado antes de expressões explicativas como "ou seja".', 3);
    END IF;
END $$;

-- 5. Verificar se já existem exercícios para a categoria 'ponto-virgula-4' antes de inserir
DO $$
DECLARE
    count_exercises INTEGER;
BEGIN
    SELECT COUNT(*) INTO count_exercises FROM exercises WHERE category_id = 'ponto-virgula-4';
    
    -- Só inserir se não existirem exercícios para esta categoria
    IF count_exercises = 0 THEN
        -- Inserir exercícios para a categoria 'ponto-virgula-4' (Exercício 4)
        INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
        ('ponto-virgula-4', 'Em qual alternativa o ponto e vírgula está sendo usado corretamente em uma enumeração complexa?', 'O ponto e vírgula é usado para separar itens em uma enumeração complexa, especialmente quando os itens já contêm vírgulas.', 4),
        ('ponto-virgula-4', 'Identifique a opção em que o ponto e vírgula está sendo usado corretamente para separar itens de uma lista técnica:', 'Em listas técnicas, o ponto e vírgula é usado para separar itens, especialmente quando são complexos.', 4),
        ('ponto-virgula-4', 'Qual alternativa apresenta o uso correto do ponto e vírgula em uma enumeração de definições?', 'O ponto e vírgula é usado para separar definições em uma enumeração.', 4),
        ('ponto-virgula-4', 'Em qual das opções o ponto e vírgula está sendo usado corretamente para separar itens em uma lista bibliográfica?', 'Em listas bibliográficas, o ponto e vírgula é usado para separar diferentes referências.', 4),
        ('ponto-virgula-4', 'Identifique a frase em que o ponto e vírgula está sendo usado corretamente em uma enumeração de exemplos:', 'O ponto e vírgula é usado para separar exemplos em uma enumeração, especialmente quando são extensos.', 4),
        ('ponto-virgula-4', 'Qual alternativa apresenta o uso correto do ponto e vírgula em uma lista de ingredientes?', 'Em listas de ingredientes complexas, o ponto e vírgula é usado para separar grupos de ingredientes.', 4),
        ('ponto-virgula-4', 'Em qual frase o ponto e vírgula está sendo usado corretamente para separar itens em uma enumeração com subdivisões?', 'O ponto e vírgula é usado para separar itens em uma enumeração quando esses itens contêm subdivisões.', 4),
        ('ponto-virgula-4', 'Identifique a opção em que o ponto e vírgula está sendo usado corretamente em uma lista de procedimentos:', 'Em listas de procedimentos, o ponto e vírgula é usado para separar etapas complexas.', 4),
        ('ponto-virgula-4', 'Qual alternativa apresenta o uso correto do ponto e vírgula em uma enumeração de características?', 'O ponto e vírgula é usado para separar características em uma enumeração, especialmente quando são detalhadas.', 4),
        ('ponto-virgula-4', 'Em qual das opções o ponto e vírgula está sendo usado corretamente para separar itens em uma lista de especificações técnicas?', 'Em listas de especificações técnicas, o ponto e vírgula é usado para separar diferentes especificações.', 4);
    END IF;
END $$;
