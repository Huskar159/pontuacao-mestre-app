-- Script para criar opções para os exercícios de ponto e vírgula
-- Para cada exercício, criaremos 4 opções: 1 correta e 3 incorretas

-- Para simplificar, vamos criar uma estrutura básica que você pode adaptar 
-- para cada exercício específico com conteúdos reais:

-- Função auxiliar para inserção das opções
DO $$
DECLARE
    exercicio_id INTEGER;
    exercicios_ids INTEGER[];
    i INTEGER;
BEGIN
    -- Obter todos os IDs dos exercícios de ponto e vírgula
    SELECT array_agg(id) INTO exercicios_ids
    FROM exercises
    WHERE category_id LIKE 'ponto-virgula%';
    
    -- Para cada exercício, inserir 4 opções
    FOREACH exercicio_id IN ARRAY exercicios_ids
    LOOP
        -- Opção correta
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES (
            exercicio_id,
            'Os alunos estudaram bastante; portanto, foram aprovados no exame.',
            TRUE,
            'Esta opção usa o ponto e vírgula corretamente antes da conjunção conclusiva "portanto".'
        );
        
        -- Opção incorreta 1
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES (
            exercicio_id,
            'Os alunos estudaram; bastante, portanto foram aprovados no exame.',
            FALSE,
            'O ponto e vírgula está incorretamente posicionado, separando o advérbio "bastante" do verbo "estudaram".'
        );
        
        -- Opção incorreta 2
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES (
            exercicio_id,
            'Os alunos; estudaram bastante, portanto foram aprovados no exame.',
            FALSE,
            'O ponto e vírgula está incorretamente posicionado, separando o sujeito "Os alunos" do verbo "estudaram".'
        );
        
        -- Opção incorreta 3
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES (
            exercicio_id,
            'Os alunos estudaram bastante, portanto; foram aprovados no exame.',
            FALSE,
            'O ponto e vírgula está incorretamente posicionado após a conjunção "portanto".'
        );
    END LOOP;
END $$;

-- Observação: Este script cria opções genéricas para todos os exercícios
-- Em um ambiente real, você precisaria:
-- 1. Criar opções específicas para cada exercício
-- 2. Garantir que a opção correta realmente demonstre o uso correto do ponto e vírgula
-- 3. Garantir que as opções incorretas demonstrem erros comuns no uso do ponto e vírgula

-- Alternativamente, você pode inserir manualmente as opções para cada exercício
-- usando o formato:
/*
INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
VALUES
-- Para o exercício 1
(1, 'Opção correta', TRUE, 'Explicação da opção correta'),
(1, 'Opção incorreta 1', FALSE, 'Explicação do erro 1'),
(1, 'Opção incorreta 2', FALSE, 'Explicação do erro 2'),
(1, 'Opção incorreta 3', FALSE, 'Explicação do erro 3'),

-- Para o exercício 2
(2, 'Opção correta', TRUE, 'Explicação da opção correta'),
(2, 'Opção incorreta 1', FALSE, 'Explicação do erro 1'),
(2, 'Opção incorreta 2', FALSE, 'Explicação do erro 2'),
(2, 'Opção incorreta 3', FALSE, 'Explicação do erro 3'),

-- E assim por diante
*/
