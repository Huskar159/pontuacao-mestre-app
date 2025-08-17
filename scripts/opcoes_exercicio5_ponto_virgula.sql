-- Script para adicionar opções a TODAS as questões do Exercício 5 de Ponto e Vírgula

-- Função para criar opções específicas para cada questão do Exercício 5
DO $$
DECLARE
    exercicios_ids INTEGER[];
BEGIN
    -- Obter todos os IDs dos exercícios da categoria ponto-virgula-5
    SELECT array(
        SELECT id 
        FROM exercises 
        WHERE category_id = 'ponto-virgula-5' 
        ORDER BY id
    ) INTO exercicios_ids;
    
    -- Checar se temos exercícios para trabalhar
    IF array_length(exercicios_ids, 1) IS NULL THEN
        RAISE NOTICE 'Nenhum exercício encontrado para a categoria ponto-virgula-5';
        RETURN;
    END IF;
    
    -- Para cada exercício, adicionar opções específicas
    
    -- Questão 1 - Casos especiais
    IF array_length(exercicios_ids, 1) >= 1 THEN
        -- Apagar opções existentes do primeiro exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[1];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[1], 'A tese está finalizada; no entanto, ainda precisamos revisar as referências bibliográficas.', TRUE, 'O ponto e vírgula está sendo usado corretamente antes da locução conjuntiva adversativa "no entanto".'),
        (exercicios_ids[1], 'A tese; está finalizada, no entanto, ainda precisamos revisar as referências bibliográficas.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "A tese" do verbo "está".'),
        (exercicios_ids[1], 'A tese está finalizada, no entanto; ainda precisamos revisar as referências bibliográficas.', FALSE, 'O ponto e vírgula está incorretamente posicionado após a locução conjuntiva "no entanto".'),
        (exercicios_ids[1], 'A tese está; finalizada, no entanto, ainda precisamos revisar as referências bibliográficas.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "está" de seu predicativo "finalizada".');
    END IF;
    
    -- Questão 2
    IF array_length(exercicios_ids, 1) >= 2 THEN
        -- Apagar opções existentes do segundo exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[2];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[2], 'Alguns autores defendem o uso frequente do ponto e vírgula; outros, porém, acreditam que ele deve ser usado com moderação.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar orações contrastantes.'),
        (exercicios_ids[2], 'Alguns autores; defendem o uso frequente do ponto e vírgula, outros, porém, acreditam que ele deve ser usado com moderação.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "Alguns autores" do verbo "defendem".'),
        (exercicios_ids[2], 'Alguns autores defendem o uso frequente do ponto e vírgula, outros; porém, acreditam que ele deve ser usado com moderação.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "outros" da conjunção "porém".'),
        (exercicios_ids[2], 'Alguns autores defendem; o uso frequente do ponto e vírgula, outros, porém, acreditam que ele deve ser usado com moderação.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "defendem" de seu objeto direto.');
    END IF;
    
    -- Questão 3
    IF array_length(exercicios_ids, 1) >= 3 THEN
        -- Apagar opções existentes do terceiro exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[3];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[3], 'A lei estabelece três exigências para o caso: primeira, que o documento seja autenticado; segunda, que contenha todas as assinaturas necessárias; terceira, que seja registrado em cartório.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar itens em uma enumeração onde cada item é extenso.'),
        (exercicios_ids[3], 'A lei estabelece três exigências para o caso: primeira; que o documento seja autenticado, segunda, que contenha todas as assinaturas necessárias, terceira, que seja registrado em cartório.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "primeira" da explicação que a segue.'),
        (exercicios_ids[3], 'A lei; estabelece três exigências para o caso: primeira, que o documento seja autenticado, segunda, que contenha todas as assinaturas necessárias, terceira, que seja registrado em cartório.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "A lei" do verbo "estabelece".'),
        (exercicios_ids[3], 'A lei estabelece três exigências para o caso: primeira, que o documento seja autenticado, segunda, que contenha todas as assinaturas necessárias, terceira; que seja registrado em cartório.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando apenas o último item "terceira" de sua explicação, quando deveria ser usado após cada item completo.');
    END IF;
    
    -- Questão 4
    IF array_length(exercicios_ids, 1) >= 4 THEN
        -- Apagar opções existentes do quarto exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[4];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[4], 'O filósofo escreveu: "A vida é breve; a arte é longa; a oportunidade, fugaz; a experiência, perigosa; o julgamento, difícil."', TRUE, 'O ponto e vírgula está sendo usado corretamente dentro de uma citação para separar frases curtas e relacionadas.'),
        (exercicios_ids[4], 'O filósofo escreveu; "A vida é breve, a arte é longa, a oportunidade, fugaz, a experiência, perigosa, o julgamento, difícil."', FALSE, 'O ponto e vírgula está incorretamente posicionado após o verbo "escreveu".'),
        (exercicios_ids[4], 'O filósofo escreveu: "A vida; é breve, a arte é longa, a oportunidade, fugaz, a experiência, perigosa, o julgamento, difícil."', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "A vida" do verbo "é".'),
        (exercicios_ids[4], 'O filósofo escreveu: "A vida é breve, a arte é longa, a oportunidade; fugaz, a experiência, perigosa, o julgamento, difícil."', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "a oportunidade" de "fugaz".');
    END IF;
    
    -- Questão 5
    IF array_length(exercicios_ids, 1) >= 5 THEN
        -- Apagar opções existentes do quinto exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[5];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[5], 'Considerando: que o réu é primário; que confessou o crime; que reparou o dano causado; decide-se pela redução da pena.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar os considerandos em um texto jurídico.'),
        (exercicios_ids[5], 'Considerando; que o réu é primário, que confessou o crime, que reparou o dano causado, decide-se pela redução da pena.', FALSE, 'O ponto e vírgula está incorretamente posicionado após "Considerando".'),
        (exercicios_ids[5], 'Considerando: que o réu é primário, que confessou o crime, que reparou o dano causado; decide-se; pela redução da pena.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "decide-se" de seu complemento "pela redução da pena".'),
        (exercicios_ids[5], 'Considerando: que o réu; é primário, que confessou o crime, que reparou o dano causado, decide-se pela redução da pena.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "o réu" do verbo "é".');
    END IF;
    
    -- Adicione mais questões conforme necessário (até 10)
    
    -- Questão 6
    IF array_length(exercicios_ids, 1) >= 6 THEN
        -- Apagar opções existentes do sexto exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[6];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[6], 'O documento contém: nome completo; data de nascimento; nacionalidade; profissão; endereço residencial.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar itens em uma lista simples.'),
        (exercicios_ids[6], 'O documento; contém: nome completo, data de nascimento, nacionalidade, profissão, endereço residencial.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "O documento" do verbo "contém".'),
        (exercicios_ids[6], 'O documento contém: nome; completo, data de nascimento, nacionalidade, profissão, endereço residencial.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "nome" de "completo".'),
        (exercicios_ids[6], 'O documento contém: nome completo, data; de nascimento, nacionalidade, profissão, endereço residencial.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "data" de "de nascimento".');
    END IF;
    
    -- Questão 7
    IF array_length(exercicios_ids, 1) >= 7 THEN
        -- Apagar opções existentes do sétimo exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[7];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[7], 'A decisão foi tomada; consequentemente, todas as etapas do projeto serão revistas.', TRUE, 'O ponto e vírgula está sendo usado corretamente antes do advérbio "consequentemente".'),
        (exercicios_ids[7], 'A decisão; foi tomada, consequentemente, todas as etapas do projeto serão revistas.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "A decisão" do verbo "foi".'),
        (exercicios_ids[7], 'A decisão foi tomada, consequentemente; todas as etapas do projeto serão revistas.', FALSE, 'O ponto e vírgula está incorretamente posicionado após o advérbio "consequentemente".'),
        (exercicios_ids[7], 'A decisão foi tomada, consequentemente, todas; as etapas do projeto serão revistas.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o adjetivo "todas" de "as etapas".');
    END IF;
    
    -- Questão 8
    IF array_length(exercicios_ids, 1) >= 8 THEN
        -- Apagar opções existentes do oitavo exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[8];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[8], 'As regras são as seguintes: primeira, manter a calma; segunda, seguir o protocolo; terceira, comunicar à equipe de emergência.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar itens numerados em uma enumeração.'),
        (exercicios_ids[8], 'As regras; são as seguintes: primeira, manter a calma, segunda, seguir o protocolo, terceira, comunicar à equipe de emergência.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "As regras" do verbo "são".'),
        (exercicios_ids[8], 'As regras são as seguintes: primeira; manter a calma, segunda, seguir o protocolo, terceira, comunicar à equipe de emergência.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "primeira" de "manter a calma".'),
        (exercicios_ids[8], 'As regras são as seguintes: primeira, manter a calma, segunda, seguir o protocolo, terceira; comunicar à equipe de emergência.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando apenas o último item "terceira" de sua ação, quando deveria ser usado após cada item completo.');
    END IF;
    
    -- Questão 9
    IF array_length(exercicios_ids, 1) >= 9 THEN
        -- Apagar opções existentes do nono exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[9];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[9], 'A reunião começou às 9h; durou aproximadamente duas horas; produziu resultados importantes.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar orações independentes e relacionadas.'),
        (exercicios_ids[9], 'A reunião; começou às 9h, durou aproximadamente duas horas, produziu resultados importantes.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "A reunião" do verbo "começou".'),
        (exercicios_ids[9], 'A reunião começou às 9h, durou; aproximadamente duas horas, produziu resultados importantes.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "durou" de seu complemento "aproximadamente duas horas".'),
        (exercicios_ids[9], 'A reunião começou às 9h, durou aproximadamente duas horas, produziu; resultados importantes.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "produziu" de seu objeto direto "resultados importantes".');
    END IF;
    
    -- Questão 10
    IF array_length(exercicios_ids, 1) >= 10 THEN
        -- Apagar opções existentes do décimo exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[10];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[10], 'O projeto será executado em três fases: planejamento, de janeiro a março; implementação, de abril a agosto; avaliação, de setembro a dezembro.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar itens em uma enumeração onde cada item contém detalhes temporais.'),
        (exercicios_ids[10], 'O projeto; será executado em três fases: planejamento, de janeiro a março, implementação, de abril a agosto, avaliação, de setembro a dezembro.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "O projeto" do verbo "será".'),
        (exercicios_ids[10], 'O projeto será executado em três fases: planejamento; de janeiro a março, implementação, de abril a agosto, avaliação, de setembro a dezembro.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "planejamento" de "de janeiro a março".'),
        (exercicios_ids[10], 'O projeto será executado em três fases: planejamento, de janeiro a março, implementação, de abril a agosto, avaliação; de setembro a dezembro.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "avaliação" de "de setembro a dezembro".');
    END IF;
END $$;
