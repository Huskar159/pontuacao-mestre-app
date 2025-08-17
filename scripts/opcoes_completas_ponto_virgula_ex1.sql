-- Script para adicionar opções a TODAS as questões do Exercício 1 de Ponto e Vírgula

-- Função para adicionar opções a todos os exercícios da categoria ponto-virgula
DO $$
DECLARE
    exercicio_id INTEGER;
    exercicios_ids INTEGER[];
BEGIN
    -- Obter todos os IDs dos exercícios da categoria ponto-virgula
    SELECT array_agg(id) INTO exercicios_ids
    FROM exercises
    WHERE category_id = 'ponto-virgula'
    ORDER BY id;
    
    -- Para cada exercício, inserir 4 opções
    FOREACH exercicio_id IN ARRAY exercicios_ids
    LOOP
        -- Verificar se já existem opções para este exercício
        IF NOT EXISTS (SELECT 1 FROM exercise_options WHERE exercise_id = exercicio_id) THEN
            -- Se não existirem opções, inserir as opções padrão
            
            -- Questão 1
            INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
            VALUES
            (exercicio_id, 'Ela estudou muito; conseguiu passar no vestibular.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar orações coordenadas que não estão ligadas por conjunção.'),
            (exercicio_id, 'A reunião começou; às nove horas da manhã.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "começou" de seu complemento "às nove horas".'),
            (exercicio_id, 'João; Maria e Pedro foram ao cinema.', FALSE, 'O ponto e vírgula está incorretamente usado em uma enumeração simples, onde deveria haver vírgula.'),
            (exercicio_id, 'Ele saiu de casa portanto; estava atrasado.', FALSE, 'O ponto e vírgula está incorretamente posicionado após a conjunção "portanto".');
        END IF;
    END LOOP;
END $$;

-- Agora vamos criar opções específicas para cada exercício individual do módulo Ponto e Vírgula - Exercício 1
DO $$
DECLARE
    exercicios_ids INTEGER[];
BEGIN
    -- Obter todos os IDs dos exercícios da categoria ponto-virgula em ordem
    SELECT array_agg(id) INTO exercicios_ids
    FROM exercises
    WHERE category_id = 'ponto-virgula'
    ORDER BY id;
    
    -- Se temos pelo menos 2 exercícios, adicionamos opções para o segundo
    IF array_length(exercicios_ids, 1) >= 2 THEN
        -- Apagar opções existentes do segundo exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[2];
        
        -- Questão 2 - Enumeração complexa
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[2], 'Comprei vários itens: maçãs, peras e uvas frescas; pão, queijo e presunto; refrigerantes e sucos.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar itens em uma enumeração complexa onde os itens já contêm vírgulas.'),
        (exercicios_ids[2], 'Comprei vários itens: maçãs; peras e uvas frescas, pão, queijo e presunto, refrigerantes e sucos.', FALSE, 'O ponto e vírgula está sendo usado incorretamente dentro de um grupo de itens simples.'),
        (exercicios_ids[2], 'Comprei vários itens; maçãs, peras e uvas frescas, pão, queijo e presunto, refrigerantes e sucos.', FALSE, 'O ponto e vírgula está sendo usado incorretamente após "itens", onde deveria haver dois pontos.'),
        (exercicios_ids[2], 'Comprei vários itens: maçãs, peras e uvas frescas, pão; queijo e presunto, refrigerantes e sucos.', FALSE, 'O ponto e vírgula está sendo usado incorretamente no meio de um grupo de itens.');
    END IF;
    
    -- Se temos pelo menos 3 exercícios, adicionamos opções para o terceiro
    IF array_length(exercicios_ids, 1) >= 3 THEN
        -- Apagar opções existentes do terceiro exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[3];
        
        -- Questão 3 - Orações coordenadas
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[3], 'O tempo passou rápido; ninguém percebeu a mudança.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar orações coordenadas sem conjunção.'),
        (exercicios_ids[3], 'O tempo; passou rápido, ninguém percebeu a mudança.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "O tempo" do verbo "passou".'),
        (exercicios_ids[3], 'O tempo passou rápido, ninguém; percebeu a mudança.', FALSE, 'O ponto e vírgula está incorretamente posicionado após "ninguém".'),
        (exercicios_ids[3], 'O tempo passou; rápido, ninguém percebeu a mudança.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "passou" de seu complemento "rápido".');
    END IF;
    
    -- Se temos pelo menos 4 exercícios, adicionamos opções para o quarto
    IF array_length(exercicios_ids, 1) >= 4 THEN
        -- Apagar opções existentes do quarto exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[4];
        
        -- Questão 4 - Expressões explicativas
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[4], 'O problema é grave; isto é, precisamos agir imediatamente.', TRUE, 'O ponto e vírgula está sendo usado corretamente antes da expressão explicativa "isto é".'),
        (exercicios_ids[4], 'O problema é; grave, isto é, precisamos agir imediatamente.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "é" de seu predicativo "grave".'),
        (exercicios_ids[4], 'O problema é grave, isto; é, precisamos agir imediatamente.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "isto" de "é".'),
        (exercicios_ids[4], 'O problema é grave, isto é; precisamos agir imediatamente.', FALSE, 'O ponto e vírgula está incorretamente posicionado após a expressão "isto é".');
    END IF;
    
    -- Se temos pelo menos 5 exercícios, adicionamos opções para o quinto
    IF array_length(exercicios_ids, 1) >= 5 THEN
        -- Apagar opções existentes do quinto exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[5];
        
        -- Questão 5 - Citações
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[5], 'O autor afirmou: "A vida é breve"; essa é uma verdade universal.', TRUE, 'O ponto e vírgula está sendo usado corretamente após o fechamento das aspas da citação.'),
        (exercicios_ids[5], 'O autor afirmou: "A vida; é breve", essa é uma verdade universal.', FALSE, 'O ponto e vírgula está incorretamente posicionado dentro da citação, separando o sujeito "A vida" do verbo "é".'),
        (exercicios_ids[5], 'O autor; afirmou: "A vida é breve", essa é uma verdade universal.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "O autor" do verbo "afirmou".'),
        (exercicios_ids[5], 'O autor afirmou: "A vida é breve", essa; é uma verdade universal.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o pronome demonstrativo "essa" do verbo "é".');
    END IF;
    
    -- Se temos pelo menos 6 exercícios, adicionamos opções para o sexto
    IF array_length(exercicios_ids, 1) >= 6 THEN
        -- Apagar opções existentes do sexto exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[6];
        
        -- Questão 6 - Antes de conjunções adversativas
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[6], 'Todos saíram cedo; porém, ninguém chegou ao destino no horário marcado.', TRUE, 'O ponto e vírgula está sendo usado corretamente antes da conjunção adversativa "porém".'),
        (exercicios_ids[6], 'Todos; saíram cedo, porém, ninguém chegou ao destino no horário marcado.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "Todos" do verbo "saíram".'),
        (exercicios_ids[6], 'Todos saíram cedo, porém; ninguém chegou ao destino no horário marcado.', FALSE, 'O ponto e vírgula está incorretamente posicionado após a conjunção "porém".'),
        (exercicios_ids[6], 'Todos saíram cedo, porém, ninguém; chegou ao destino no horário marcado.', FALSE, 'O ponto e vírgula está incorretamente posicionado após "ninguém".');
    END IF;
    
    -- Se temos pelo menos 7 exercícios, adicionamos opções para o sétimo
    IF array_length(exercicios_ids, 1) >= 7 THEN
        -- Apagar opções existentes do sétimo exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[7];
        
        -- Questão 7 - Antes de conjunções conclusivas
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[7], 'O prazo está acabando; portanto, precisamos concluir o trabalho hoje.', TRUE, 'O ponto e vírgula está sendo usado corretamente antes da conjunção conclusiva "portanto".'),
        (exercicios_ids[7], 'O prazo; está acabando, portanto, precisamos concluir o trabalho hoje.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "O prazo" do verbo "está".'),
        (exercicios_ids[7], 'O prazo está acabando, portanto; precisamos concluir o trabalho hoje.', FALSE, 'O ponto e vírgula está incorretamente posicionado após a conjunção "portanto".'),
        (exercicios_ids[7], 'O prazo está acabando, portanto, precisamos; concluir o trabalho hoje.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "precisamos" de seu complemento "concluir".');
    END IF;
    
    -- Se temos pelo menos 8 exercícios, adicionamos opções para o oitavo
    IF array_length(exercicios_ids, 1) >= 8 THEN
        -- Apagar opções existentes do oitavo exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[8];
        
        -- Questão 8 - Listas bibliográficas
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[8], 'As referências incluem: SILVA, João. A arte da pontuação, 2020; OLIVEIRA, Maria. Gramática prática, 2019; SANTOS, Pedro. Escrita criativa, 2021.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar itens em uma lista bibliográfica.'),
        (exercicios_ids[8], 'As referências incluem: SILVA, João; A arte da pontuação, 2020, OLIVEIRA, Maria, Gramática prática, 2019, SANTOS, Pedro, Escrita criativa, 2021.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o autor do título da obra.'),
        (exercicios_ids[8], 'As referências; incluem: SILVA, João. A arte da pontuação, 2020, OLIVEIRA, Maria. Gramática prática, 2019, SANTOS, Pedro. Escrita criativa, 2021.', FALSE, 'O ponto e vírgula está incorretamente posicionado após "referências".'),
        (exercicios_ids[8], 'As referências incluem: SILVA, João. A arte da pontuação, 2020, OLIVEIRA, Maria. Gramática prática; 2019, SANTOS, Pedro. Escrita criativa, 2021.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o título da obra do ano de publicação.');
    END IF;
    
    -- Se temos pelo menos 9 exercícios, adicionamos opções para o nono
    IF array_length(exercicios_ids, 1) >= 9 THEN
        -- Apagar opções existentes do nono exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[9];
        
        -- Questão 9 - Em documentos legais
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[9], 'Considerando: que o prazo expirou; que o documento não foi apresentado; que as testemunhas não compareceram; decide-se pelo arquivamento do processo.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar considerandos em um documento legal.'),
        (exercicios_ids[9], 'Considerando: que o prazo; expirou, que o documento não foi apresentado, que as testemunhas não compareceram, decide-se pelo arquivamento do processo.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "o prazo" do verbo "expirou".'),
        (exercicios_ids[9], 'Considerando; que o prazo expirou, que o documento não foi apresentado, que as testemunhas não compareceram, decide-se pelo arquivamento do processo.', FALSE, 'O ponto e vírgula está incorretamente posicionado após "Considerando".'),
        (exercicios_ids[9], 'Considerando: que o prazo expirou, que o documento não foi apresentado, que as testemunhas não compareceram; decide-se; pelo arquivamento do processo.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "decide-se" de seu complemento "pelo arquivamento".');
    END IF;
    
    -- Se temos pelo menos 10 exercícios, adicionamos opções para o décimo
    IF array_length(exercicios_ids, 1) >= 10 THEN
        -- Apagar opções existentes do décimo exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[10];
        
        -- Questão 10 - Uso variado do ponto e vírgula
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[10], 'Terminei o relatório; enviei-o por e-mail; agora, posso descansar.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar orações coordenadas que apresentam uma sequência de ações.'),
        (exercicios_ids[10], 'Terminei; o relatório, enviei-o por e-mail, agora, posso descansar.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "Terminei" de seu objeto direto "o relatório".'),
        (exercicios_ids[10], 'Terminei o relatório, enviei-o; por e-mail, agora, posso descansar.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "enviei-o" de seu complemento "por e-mail".'),
        (exercicios_ids[10], 'Terminei o relatório, enviei-o por e-mail, agora; posso descansar.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o advérbio "agora" do resto da oração.');
    END IF;
END $$;
