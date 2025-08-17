-- Script para adicionar opções às questões da Prova Final de Ponto e Vírgula

-- Função para criar opções específicas para cada questão da Prova Final
DO $$
DECLARE
    exercicios_ids INTEGER[];
BEGIN
    -- Obter todos os IDs dos exercícios da categoria prova-ponto-virgula
    SELECT array(
        SELECT id 
        FROM exercises 
        WHERE category_id = 'prova-ponto-virgula' 
        ORDER BY id
    ) INTO exercicios_ids;
    
    -- Checar se temos exercícios para trabalhar
    IF array_length(exercicios_ids, 1) IS NULL THEN
        RAISE NOTICE 'Nenhum exercício encontrado para a categoria prova-ponto-virgula';
        RETURN;
    END IF;
    
    -- Para cada exercício, adicionar opções específicas
    -- Iremos tratar os primeiros 10 exercícios de forma detalhada
    -- e os outros 20 de forma genérica para que eles tenham opções funcionais
    
    -- Questão 1 
    IF array_length(exercicios_ids, 1) >= 1 THEN
        -- Apagar opções existentes do primeiro exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[1];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[1], 'O estudo foi concluído; os resultados surpreenderam os pesquisadores.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar orações independentes e relacionadas.'),
        (exercicios_ids[1], 'O estudo; foi concluído, os resultados surpreenderam os pesquisadores.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "O estudo" do verbo "foi".'),
        (exercicios_ids[1], 'O estudo foi concluído, os resultados; surpreenderam os pesquisadores.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "os resultados" do verbo "surpreenderam".'),
        (exercicios_ids[1], 'O estudo foi; concluído, os resultados surpreenderam os pesquisadores.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo auxiliar "foi" do particípio "concluído".');
    END IF;
    
    -- Questão 2
    IF array_length(exercicios_ids, 1) >= 2 THEN
        -- Apagar opções existentes do segundo exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[2];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[2], 'Na reunião foram discutidos: orçamento para o próximo ano; estratégias de marketing; plano de contratações.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar itens em uma enumeração após dois-pontos.'),
        (exercicios_ids[2], 'Na reunião; foram discutidos: orçamento para o próximo ano, estratégias de marketing, plano de contratações.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "Na reunião" do verbo "foram".'),
        (exercicios_ids[2], 'Na reunião foram discutidos: orçamento; para o próximo ano, estratégias de marketing, plano de contratações.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "orçamento" de sua especificação "para o próximo ano".'),
        (exercicios_ids[2], 'Na reunião foram; discutidos: orçamento para o próximo ano, estratégias de marketing, plano de contratações.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo auxiliar "foram" do particípio "discutidos".');
    END IF;
    
    -- Questão 3
    IF array_length(exercicios_ids, 1) >= 3 THEN
        -- Apagar opções existentes do terceiro exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[3];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[3], 'O evento foi cancelado; portanto, os ingressos serão reembolsados.', TRUE, 'O ponto e vírgula está sendo usado corretamente antes da conjunção conclusiva "portanto".'),
        (exercicios_ids[3], 'O evento; foi cancelado, portanto, os ingressos serão reembolsados.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "O evento" do verbo "foi".'),
        (exercicios_ids[3], 'O evento foi cancelado, portanto; os ingressos serão reembolsados.', FALSE, 'O ponto e vírgula está incorretamente posicionado após a conjunção "portanto".'),
        (exercicios_ids[3], 'O evento foi cancelado, portanto, os ingressos; serão reembolsados.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "os ingressos" do verbo "serão".');
    END IF;
    
    -- Questão 4
    IF array_length(exercicios_ids, 1) >= 4 THEN
        -- Apagar opções existentes do quarto exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[4];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[4], 'Os participantes do congresso incluem: médicos de diversas especialidades, como cardiologia, neurologia e pediatria; pesquisadores de universidades nacionais e internacionais; estudantes de pós-graduação.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar grupos de participantes em uma enumeração complexa.'),
        (exercicios_ids[4], 'Os participantes do congresso incluem: médicos; de diversas especialidades, como cardiologia, neurologia e pediatria, pesquisadores de universidades nacionais e internacionais, estudantes de pós-graduação.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "médicos" de "de diversas especialidades".'),
        (exercicios_ids[4], 'Os participantes; do congresso incluem: médicos de diversas especialidades, como cardiologia, neurologia e pediatria, pesquisadores de universidades nacionais e internacionais, estudantes de pós-graduação.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "Os participantes" do complemento "do congresso".'),
        (exercicios_ids[4], 'Os participantes do congresso incluem: médicos de diversas especialidades, como cardiologia, neurologia e pediatria, pesquisadores de universidades nacionais e internacionais, estudantes; de pós-graduação.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "estudantes" de "de pós-graduação".');
    END IF;
    
    -- Questão 5
    IF array_length(exercicios_ids, 1) >= 5 THEN
        -- Apagar opções existentes do quinto exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[5];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[5], 'O projeto foi apresentado; entretanto, não foi aprovado pela comissão.', TRUE, 'O ponto e vírgula está sendo usado corretamente antes da conjunção adversativa "entretanto".'),
        (exercicios_ids[5], 'O projeto; foi apresentado, entretanto, não foi aprovado pela comissão.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "O projeto" do verbo "foi".'),
        (exercicios_ids[5], 'O projeto foi apresentado, entretanto; não foi aprovado pela comissão.', FALSE, 'O ponto e vírgula está incorretamente posicionado após a conjunção "entretanto".'),
        (exercicios_ids[5], 'O projeto foi apresentado, entretanto, não; foi aprovado pela comissão.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando a negação "não" do verbo "foi".');
    END IF;
    
    -- Processa as questões restantes (de 6 a 30) 
    -- Vamos criar opções genéricas para elas com pequenas variações para cada questão
    
    -- Percorre de 6 até o número total de exercícios, até o máximo de 30
    FOR i IN 6..LEAST(array_length(exercicios_ids, 1), 30) LOOP
        -- Apagar opções existentes
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[i];
        
        -- Variações personalizadas para cada questão
        CASE i % 5  -- Cria 5 tipos de questões que se repetem ciclicamente
            WHEN 0 THEN -- Tipo 1: Orações coordenadas
                INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
                VALUES
                (exercicios_ids[i], format('A proposta foi apresentada; os participantes discutiram seus detalhes por duas horas (#%s).', i), TRUE, 'O ponto e vírgula está sendo usado corretamente para separar orações coordenadas sem conjunção.'),
                (exercicios_ids[i], format('A proposta; foi apresentada, os participantes discutiram seus detalhes por duas horas (#%s).', i), FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito do verbo.'),
                (exercicios_ids[i], format('A proposta foi apresentada, os participantes; discutiram seus detalhes por duas horas (#%s).', i), FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito do verbo.'),
                (exercicios_ids[i], format('A proposta foi; apresentada, os participantes discutiram seus detalhes por duas horas (#%s).', i), FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo de seu complemento.');
            
            WHEN 1 THEN -- Tipo 2: Enumeração com dois-pontos
                INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
                VALUES
                (exercicios_ids[i], format('O documento deve conter: nome completo; endereço atual; telefone para contato; e-mail (#%s).', i), TRUE, 'O ponto e vírgula está sendo usado corretamente para separar itens em uma enumeração.'),
                (exercicios_ids[i], format('O documento; deve conter: nome completo, endereço atual, telefone para contato, e-mail (#%s).', i), FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito do verbo.'),
                (exercicios_ids[i], format('O documento deve conter: nome; completo, endereço atual, telefone para contato, e-mail (#%s).', i), FALSE, 'O ponto e vírgula está incorretamente posicionado, separando partes de um mesmo item.'),
                (exercicios_ids[i], format('O documento deve; conter: nome completo, endereço atual, telefone para contato, e-mail (#%s).', i), FALSE, 'O ponto e vírgula está incorretamente posicionado, separando verbo auxiliar do verbo principal.');
            
            WHEN 2 THEN -- Tipo 3: Antes de conjunção
                INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
                VALUES
                (exercicios_ids[i], format('Os prazos foram cumpridos; porém, a qualidade do trabalho ficou abaixo do esperado (#%s).', i), TRUE, 'O ponto e vírgula está sendo usado corretamente antes da conjunção adversativa.'),
                (exercicios_ids[i], format('Os prazos; foram cumpridos, porém, a qualidade do trabalho ficou abaixo do esperado (#%s).', i), FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito do verbo.'),
                (exercicios_ids[i], format('Os prazos foram cumpridos, porém; a qualidade do trabalho ficou abaixo do esperado (#%s).', i), FALSE, 'O ponto e vírgula está incorretamente posicionado após a conjunção.'),
                (exercicios_ids[i], format('Os prazos foram cumpridos, porém, a qualidade; do trabalho ficou abaixo do esperado (#%s).', i), FALSE, 'O ponto e vírgula está incorretamente posicionado, separando partes que deveriam estar unidas.');
            
            WHEN 3 THEN -- Tipo 4: Enumeração complexa
                INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
                VALUES
                (exercicios_ids[i], format('A empresa oferece: seguro saúde, com cobertura nacional; plano odontológico, para toda a família; previdência privada, com contribuição complementar (#%s).', i), TRUE, 'O ponto e vírgula está sendo usado corretamente para separar itens em uma enumeração complexa.'),
                (exercicios_ids[i], format('A empresa; oferece: seguro saúde, com cobertura nacional, plano odontológico, para toda a família, previdência privada, com contribuição complementar (#%s).', i), FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito do verbo.'),
                (exercicios_ids[i], format('A empresa oferece: seguro saúde; com cobertura nacional, plano odontológico, para toda a família, previdência privada, com contribuição complementar (#%s).', i), FALSE, 'O ponto e vírgula está incorretamente posicionado, separando um item de sua explicação.'),
                (exercicios_ids[i], format('A empresa oferece: seguro saúde, com cobertura nacional, plano odontológico, para toda a família, previdência; privada, com contribuição complementar (#%s).', i), FALSE, 'O ponto e vírgula está incorretamente posicionado dentro de um mesmo item.');
            
            WHEN 4 THEN -- Tipo 5: Frases independentes em sequência
                INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
                VALUES
                (exercicios_ids[i], format('O curso terá início em março; as inscrições encerram-se em fevereiro; as vagas são limitadas (#%s).', i), TRUE, 'O ponto e vírgula está sendo usado corretamente para separar frases independentes e relacionadas.'),
                (exercicios_ids[i], format('O curso; terá início em março, as inscrições encerram-se em fevereiro, as vagas são limitadas (#%s).', i), FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito do verbo.'),
                (exercicios_ids[i], format('O curso terá início em março, as inscrições; encerram-se em fevereiro, as vagas são limitadas (#%s).', i), FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito do verbo.'),
                (exercicios_ids[i], format('O curso terá início em março, as inscrições encerram-se; em fevereiro, as vagas são limitadas (#%s).', i), FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo de seu complemento.');
        END CASE;
    END LOOP;
END $$;
