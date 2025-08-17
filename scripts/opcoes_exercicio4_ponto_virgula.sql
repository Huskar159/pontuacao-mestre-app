-- Script para adicionar opções a TODAS as questões do Exercício 4 de Ponto e Vírgula

-- Função para criar opções específicas para cada questão do Exercício 4
DO $$
DECLARE
    exercicios_ids INTEGER[];
BEGIN
    -- Obter todos os IDs dos exercícios da categoria ponto-virgula-4
    SELECT array(
        SELECT id 
        FROM exercises 
        WHERE category_id = 'ponto-virgula-4' 
        ORDER BY id
    ) INTO exercicios_ids;
    
    -- Checar se temos exercícios para trabalhar
    IF array_length(exercicios_ids, 1) IS NULL THEN
        RAISE NOTICE 'Nenhum exercício encontrado para a categoria ponto-virgula-4';
        RETURN;
    END IF;
    
    -- Para cada exercício, adicionar opções específicas
    
    -- Questão 1 - Enumerações complexas
    IF array_length(exercicios_ids, 1) >= 1 THEN
        -- Apagar opções existentes do primeiro exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[1];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[1], 'Nossa empresa oferece diversos serviços: consultoria financeira, com análise de investimentos; planejamento tributário, com foco em redução de impostos; assessoria contábil, com geração de relatórios mensais.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar itens em uma enumeração que já contém vírgulas.'),
        (exercicios_ids[1], 'Nossa empresa oferece diversos serviços: consultoria financeira; com análise de investimentos, planejamento tributário, com foco em redução de impostos, assessoria contábil, com geração de relatórios mensais.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "consultoria financeira" de sua explicação.'),
        (exercicios_ids[1], 'Nossa empresa; oferece diversos serviços: consultoria financeira, com análise de investimentos, planejamento tributário, com foco em redução de impostos, assessoria contábil, com geração de relatórios mensais.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "Nossa empresa" do verbo "oferece".'),
        (exercicios_ids[1], 'Nossa empresa oferece diversos; serviços: consultoria financeira, com análise de investimentos, planejamento tributário, com foco em redução de impostos, assessoria contábil, com geração de relatórios mensais.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "diversos" de "serviços".');
    END IF;
    
    -- Questão 2
    IF array_length(exercicios_ids, 1) >= 2 THEN
        -- Apagar opções existentes do segundo exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[2];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[2], 'Na feira, encontramos: frutas frescas, como maçãs, peras e uvas; legumes orgânicos, incluindo cenoura, beterraba e abobrinha; especiarias variadas, desde pimenta até açafrão.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar grupos de itens em uma enumeração complexa.'),
        (exercicios_ids[2], 'Na feira, encontramos: frutas frescas, como maçãs; peras e uvas, legumes orgânicos, incluindo cenoura, beterraba e abobrinha, especiarias variadas, desde pimenta até açafrão.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "maçãs" de "peras e uvas" dentro do mesmo grupo.'),
        (exercicios_ids[2], 'Na feira; encontramos: frutas frescas, como maçãs, peras e uvas, legumes orgânicos, incluindo cenoura, beterraba e abobrinha, especiarias variadas, desde pimenta até açafrão.', FALSE, 'O ponto e vírgula está incorretamente posicionado após "Na feira".'),
        (exercicios_ids[2], 'Na feira, encontramos: frutas frescas, como maçãs, peras e uvas, legumes orgânicos; incluindo cenoura, beterraba e abobrinha, especiarias variadas, desde pimenta até açafrão.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "legumes orgânicos" de "incluindo cenoura, beterraba e abobrinha".');
    END IF;
    
    -- Questão 3
    IF array_length(exercicios_ids, 1) >= 3 THEN
        -- Apagar opções existentes do terceiro exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[3];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[3], 'Os participantes do evento incluem: Dr. João Silva, médico; Dra. Maria Santos, advogada; Prof. Carlos Oliveira, físico; Eng. Ana Costa, arquiteta.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar itens em uma lista de pessoas com suas respectivas profissões.'),
        (exercicios_ids[3], 'Os participantes do evento incluem: Dr. João; Silva, médico, Dra. Maria Santos, advogada, Prof. Carlos Oliveira, físico, Eng. Ana Costa, arquiteta.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o título "Dr. João" do sobrenome "Silva".'),
        (exercicios_ids[3], 'Os participantes; do evento incluem: Dr. João Silva, médico, Dra. Maria Santos, advogada, Prof. Carlos Oliveira, físico, Eng. Ana Costa, arquiteta.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "Os participantes" do complemento "do evento".'),
        (exercicios_ids[3], 'Os participantes do evento incluem: Dr. João Silva, médico, Dra. Maria Santos; advogada, Prof. Carlos Oliveira, físico, Eng. Ana Costa, arquiteta.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando apenas um dos nomes de sua profissão, quando deveria separar cada conjunto nome-profissão.');
    END IF;
    
    -- Questão 4
    IF array_length(exercicios_ids, 1) >= 4 THEN
        -- Apagar opções existentes do quarto exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[4];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[4], 'A biblioteca adquiriu novos materiais: livros de ficção, romance e poesia; revistas científicas de diversas áreas; material audiovisual, incluindo documentários e filmes educativos.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar as categorias principais de materiais na enumeração.'),
        (exercicios_ids[4], 'A biblioteca adquiriu novos materiais: livros de ficção; romance e poesia, revistas científicas de diversas áreas, material audiovisual, incluindo documentários e filmes educativos.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "ficção" de "romance e poesia" que fazem parte da mesma categoria.'),
        (exercicios_ids[4], 'A biblioteca; adquiriu novos materiais: livros de ficção, romance e poesia, revistas científicas de diversas áreas, material audiovisual, incluindo documentários e filmes educativos.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "A biblioteca" do verbo "adquiriu".'),
        (exercicios_ids[4], 'A biblioteca adquiriu novos materiais: livros de ficção, romance e poesia, revistas científicas de diversas áreas, material audiovisual; incluindo documentários e filmes educativos.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "material audiovisual" de "incluindo documentários e filmes educativos" que é sua explicação.');
    END IF;
    
    -- Questão 5
    IF array_length(exercicios_ids, 1) >= 5 THEN
        -- Apagar opções existentes do quinto exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[5];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[5], 'No cardápio constam: entradas, como saladas e sopas; pratos principais, entre carnes, peixes e opções vegetarianas; sobremesas variadas, desde frutas da estação até doces elaborados.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar as categorias do cardápio em uma enumeração complexa.'),
        (exercicios_ids[5], 'No cardápio; constam: entradas, como saladas e sopas, pratos principais, entre carnes, peixes e opções vegetarianas, sobremesas variadas, desde frutas da estação até doces elaborados.', FALSE, 'O ponto e vírgula está incorretamente posicionado após "No cardápio".'),
        (exercicios_ids[5], 'No cardápio constam: entradas; como saladas e sopas, pratos principais, entre carnes, peixes e opções vegetarianas, sobremesas variadas, desde frutas da estação até doces elaborados.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "entradas" de sua explicação "como saladas e sopas".'),
        (exercicios_ids[5], 'No cardápio constam: entradas, como saladas e sopas, pratos principais; entre carnes, peixes e opções vegetarianas, sobremesas variadas, desde frutas da estação até doces elaborados.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "pratos principais" de "entre carnes, peixes e opções vegetarianas" que é sua explicação.');
    END IF;
    
    -- Adicione mais questões conforme necessário (até 10)
    
    -- Questão 6
    IF array_length(exercicios_ids, 1) >= 6 THEN
        -- Apagar opções existentes do sexto exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[6];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[6], 'A bibliografia do trabalho inclui: livros teóricos, como "Introdução à Linguística", "Elementos de Sintaxe" e "Análise do Discurso"; artigos científicos de revistas especializadas; teses e dissertações relacionadas ao tema.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar os diferentes tipos de referências bibliográficas.'),
        (exercicios_ids[6], 'A bibliografia do trabalho inclui: livros teóricos, como "Introdução à Linguística"; "Elementos de Sintaxe" e "Análise do Discurso", artigos científicos de revistas especializadas, teses e dissertações relacionadas ao tema.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando títulos de livros que pertencem ao mesmo grupo.'),
        (exercicios_ids[6], 'A bibliografia; do trabalho inclui: livros teóricos, como "Introdução à Linguística", "Elementos de Sintaxe" e "Análise do Discurso", artigos científicos de revistas especializadas, teses e dissertações relacionadas ao tema.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "A bibliografia" de "do trabalho".'),
        (exercicios_ids[6], 'A bibliografia do trabalho inclui: livros teóricos, como "Introdução à Linguística", "Elementos de Sintaxe" e "Análise do Discurso", artigos científicos; de revistas especializadas, teses e dissertações relacionadas ao tema.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "artigos científicos" de "de revistas especializadas" que é sua explicação.');
    END IF;
    
    -- Questão 7
    IF array_length(exercicios_ids, 1) >= 7 THEN
        -- Apagar opções existentes do sétimo exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[7];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[7], 'O currículo do curso abrange: disciplinas teóricas, ministradas no primeiro semestre; atividades práticas, desenvolvidas em laboratórios; estágio supervisionado, realizado em empresas parceiras.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar os diferentes componentes do currículo.'),
        (exercicios_ids[7], 'O currículo; do curso abrange: disciplinas teóricas, ministradas no primeiro semestre, atividades práticas, desenvolvidas em laboratórios, estágio supervisionado, realizado em empresas parceiras.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "O currículo" de "do curso".'),
        (exercicios_ids[7], 'O currículo do curso abrange: disciplinas teóricas; ministradas no primeiro semestre, atividades práticas, desenvolvidas em laboratórios, estágio supervisionado, realizado em empresas parceiras.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "disciplinas teóricas" de "ministradas no primeiro semestre" que é sua explicação.'),
        (exercicios_ids[7], 'O currículo do curso abrange: disciplinas teóricas, ministradas no primeiro semestre, atividades práticas, desenvolvidas em laboratórios, estágio supervisionado; realizado em empresas parceiras.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "estágio supervisionado" de "realizado em empresas parceiras" que é sua explicação.');
    END IF;
    
    -- Questão 8
    IF array_length(exercicios_ids, 1) >= 8 THEN
        -- Apagar opções existentes do oitavo exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[8];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[8], 'O relatório técnico deve apresentar: dados coletados, com respectivas margens de erro; análises estatísticas, incluindo gráficos e tabelas; recomendações para implementação, considerando os recursos disponíveis.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar as seções principais do relatório técnico.'),
        (exercicios_ids[8], 'O relatório técnico deve apresentar: dados coletados; com respectivas margens de erro, análises estatísticas, incluindo gráficos e tabelas, recomendações para implementação, considerando os recursos disponíveis.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "dados coletados" de "com respectivas margens de erro" que é sua explicação.'),
        (exercicios_ids[8], 'O relatório; técnico deve apresentar: dados coletados, com respectivas margens de erro, análises estatísticas, incluindo gráficos e tabelas, recomendações para implementação, considerando os recursos disponíveis.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o adjetivo "técnico" do substantivo "relatório".'),
        (exercicios_ids[8], 'O relatório técnico deve apresentar: dados coletados, com respectivas margens de erro, análises estatísticas, incluindo gráficos e tabelas, recomendações; para implementação, considerando os recursos disponíveis.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "recomendações" de "para implementação" que é sua explicação.');
    END IF;
    
    -- Questão 9
    IF array_length(exercicios_ids, 1) >= 9 THEN
        -- Apagar opções existentes do nono exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[9];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[9], 'As fontes de financiamento do projeto incluem: recursos próprios da instituição, no valor de R$ 50.000,00; patrocínio de empresas privadas, totalizando R$ 75.000,00; verba governamental, através do edital nº 123/2023.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar as diferentes fontes de financiamento, cada uma com detalhes adicionais.'),
        (exercicios_ids[9], 'As fontes; de financiamento do projeto incluem: recursos próprios da instituição, no valor de R$ 50.000,00, patrocínio de empresas privadas, totalizando R$ 75.000,00, verba governamental, através do edital nº 123/2023.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "As fontes" de "de financiamento".'),
        (exercicios_ids[9], 'As fontes de financiamento do projeto incluem: recursos próprios da instituição; no valor de R$ 50.000,00, patrocínio de empresas privadas, totalizando R$ 75.000,00, verba governamental, através do edital nº 123/2023.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "recursos próprios da instituição" de "no valor de R$ 50.000,00" que é sua explicação.'),
        (exercicios_ids[9], 'As fontes de financiamento do projeto incluem: recursos próprios da instituição, no valor de R$ 50.000,00, patrocínio de empresas privadas; totalizando R$ 75.000,00, verba governamental, através do edital nº 123/2023.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "patrocínio de empresas privadas" de "totalizando R$ 75.000,00" que é sua explicação.');
    END IF;
    
    -- Questão 10
    IF array_length(exercicios_ids, 1) >= 10 THEN
        -- Apagar opções existentes do décimo exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[10];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[10], 'O plano estratégico contempla: metas de curto prazo, a serem alcançadas em até um ano; objetivos de médio prazo, previstos para o triênio 2024-2026; visão de longo prazo, estabelecida para a próxima década.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar os diferentes horizontes temporais do plano estratégico.'),
        (exercicios_ids[10], 'O plano estratégico; contempla: metas de curto prazo, a serem alcançadas em até um ano, objetivos de médio prazo, previstos para o triênio 2024-2026, visão de longo prazo, estabelecida para a próxima década.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "O plano estratégico" do verbo "contempla".'),
        (exercicios_ids[10], 'O plano estratégico contempla: metas de curto prazo; a serem alcançadas em até um ano, objetivos de médio prazo, previstos para o triênio 2024-2026, visão de longo prazo, estabelecida para a próxima década.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "metas de curto prazo" de "a serem alcançadas em até um ano" que é sua explicação.'),
        (exercicios_ids[10], 'O plano estratégico contempla: metas de curto prazo, a serem alcançadas em até um ano, objetivos de médio prazo, previstos; para o triênio 2024-2026, visão de longo prazo, estabelecida para a próxima década.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "previstos" de "para o triênio 2024-2026".');
    END IF;
END $$;
