-- Script para adicionar opções a TODAS as questões do Exercício 3 de Ponto e Vírgula

-- Função para criar opções específicas para cada questão do Exercício 3
DO $$
DECLARE
    exercicios_ids INTEGER[];
BEGIN
    -- Obter todos os IDs dos exercícios da categoria ponto-virgula-3
    SELECT array(
        SELECT id 
        FROM exercises 
        WHERE category_id = 'ponto-virgula-3' 
        ORDER BY id
    ) INTO exercicios_ids;
    
    -- Checar se temos exercícios para trabalhar
    IF array_length(exercicios_ids, 1) IS NULL THEN
        RAISE NOTICE 'Nenhum exercício encontrado para a categoria ponto-virgula-3';
        RETURN;
    END IF;
    
    -- Para cada exercício, adicionar opções específicas
    
    -- Questão 1 - Orações coordenadas extensas
    IF array_length(exercicios_ids, 1) >= 1 THEN
        -- Apagar opções existentes do primeiro exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[1];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[1], 'A pesquisa durou mais de três anos e contou com a participação de especialistas de diversas áreas do conhecimento, desde a linguística até a computação; os resultados mostraram padrões interessantes sobre o uso da linguagem nas redes sociais.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar orações coordenadas extensas.'),
        (exercicios_ids[1], 'A pesquisa; durou mais de três anos e contou com a participação de especialistas de diversas áreas do conhecimento, desde a linguística até a computação, os resultados mostraram padrões interessantes sobre o uso da linguagem nas redes sociais.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "A pesquisa" do verbo "durou".'),
        (exercicios_ids[1], 'A pesquisa durou mais de três anos e contou com a participação de especialistas de diversas áreas do conhecimento, desde a linguística até a computação, os resultados; mostraram padrões interessantes sobre o uso da linguagem nas redes sociais.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "os resultados" do verbo "mostraram".'),
        (exercicios_ids[1], 'A pesquisa durou mais de três anos; e contou com a participação de especialistas de diversas áreas do conhecimento, desde a linguística até a computação, os resultados mostraram padrões interessantes sobre o uso da linguagem nas redes sociais.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando orações que estão ligadas pela conjunção "e".');
    END IF;
    
    -- Questão 2
    IF array_length(exercicios_ids, 1) >= 2 THEN
        -- Apagar opções existentes do segundo exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[2];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[2], 'Os sintomas da doença incluem febre alta, dores de cabeça e fadiga; a medicação deve ser administrada conforme prescrição médica, com monitoramento contínuo dos efeitos colaterais.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar orações independentes mas relacionadas tematicamente.'),
        (exercicios_ids[2], 'Os sintomas da doença; incluem febre alta, dores de cabeça e fadiga, a medicação deve ser administrada conforme prescrição médica, com monitoramento contínuo dos efeitos colaterais.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "Os sintomas da doença" do verbo "incluem".'),
        (exercicios_ids[2], 'Os sintomas da doença incluem febre alta, dores de cabeça e fadiga, a medicação; deve ser administrada conforme prescrição médica, com monitoramento contínuo dos efeitos colaterais.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "a medicação" do verbo "deve".'),
        (exercicios_ids[2], 'Os sintomas da doença incluem febre alta; dores de cabeça e fadiga, a medicação deve ser administrada conforme prescrição médica, com monitoramento contínuo dos efeitos colaterais.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando itens de uma enumeração simples.');
    END IF;
    
    -- Questão 3
    IF array_length(exercicios_ids, 1) >= 3 THEN
        -- Apagar opções existentes do terceiro exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[3];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[3], 'O romance narra a história de três gerações de uma família ao longo do século XX; explora temas como imigração, identidade cultural e relações familiares em um contexto de transformações sociais.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar orações coordenadas sem conjunção.'),
        (exercicios_ids[3], 'O romance; narra a história de três gerações de uma família ao longo do século XX, explora temas como imigração, identidade cultural e relações familiares em um contexto de transformações sociais.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "O romance" do verbo "narra".'),
        (exercicios_ids[3], 'O romance narra a história de três gerações de uma família ao longo do século XX, explora; temas como imigração, identidade cultural e relações familiares em um contexto de transformações sociais.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "explora" de seu objeto direto.'),
        (exercicios_ids[3], 'O romance narra a história; de três gerações de uma família ao longo do século XX, explora temas como imigração, identidade cultural e relações familiares em um contexto de transformações sociais.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "narra" de seu complemento "a história".');
    END IF;
    
    -- Questão 4
    IF array_length(exercicios_ids, 1) >= 4 THEN
        -- Apagar opções existentes do quarto exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[4];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[4], 'A teoria foi amplamente debatida nos círculos acadêmicos durante décadas; entretanto, só recentemente foi comprovada por experimentos científicos rigorosos.', TRUE, 'O ponto e vírgula está sendo usado corretamente antes da conjunção adversativa "entretanto".'),
        (exercicios_ids[4], 'A teoria; foi amplamente debatida nos círculos acadêmicos durante décadas, entretanto, só recentemente foi comprovada por experimentos científicos rigorosos.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "A teoria" do verbo "foi".'),
        (exercicios_ids[4], 'A teoria foi amplamente debatida nos círculos acadêmicos durante décadas, entretanto; só recentemente foi comprovada por experimentos científicos rigorosos.', FALSE, 'O ponto e vírgula está incorretamente posicionado após a conjunção "entretanto".'),
        (exercicios_ids[4], 'A teoria foi amplamente debatida nos círculos acadêmicos; durante décadas, entretanto, só recentemente foi comprovada por experimentos científicos rigorosos.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo e seu complemento.');
    END IF;
    
    -- Questão 5
    IF array_length(exercicios_ids, 1) >= 5 THEN
        -- Apagar opções existentes do quinto exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[5];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[5], 'O relatório apresenta três conclusões principais: os investimentos em educação precisam ser ampliados; as políticas de inclusão devem ser fortalecidas; a infraestrutura escolar necessita de modernização urgente.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar itens em uma enumeração após dois-pontos.'),
        (exercicios_ids[5], 'O relatório; apresenta três conclusões principais: os investimentos em educação precisam ser ampliados, as políticas de inclusão devem ser fortalecidas, a infraestrutura escolar necessita de modernização urgente.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "O relatório" do verbo "apresenta".'),
        (exercicios_ids[5], 'O relatório apresenta três conclusões principais: os investimentos em educação; precisam ser ampliados, as políticas de inclusão devem ser fortalecidas, a infraestrutura escolar necessita de modernização urgente.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "os investimentos em educação" do verbo "precisam".'),
        (exercicios_ids[5], 'O relatório apresenta; três conclusões principais: os investimentos em educação precisam ser ampliados, as políticas de inclusão devem ser fortalecidas, a infraestrutura escolar necessita de modernização urgente.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "apresenta" de seu complemento "três conclusões principais".');
    END IF;
    
    -- Adicione mais questões conforme necessário (até 10)
    -- Questão 6
    IF array_length(exercicios_ids, 1) >= 6 THEN
        -- Apagar opções existentes do sexto exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[6];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[6], 'A conferência reuniu especialistas de diversos países; as discussões se estenderam por três dias; os resultados serão publicados no próximo mês.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar orações coordenadas independentes em uma sequência.'),
        (exercicios_ids[6], 'A conferência; reuniu especialistas de diversos países, as discussões se estenderam por três dias, os resultados serão publicados no próximo mês.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "A conferência" do verbo "reuniu".'),
        (exercicios_ids[6], 'A conferência reuniu especialistas de diversos países, as discussões; se estenderam por três dias, os resultados serão publicados no próximo mês.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "as discussões" do verbo "se estenderam".'),
        (exercicios_ids[6], 'A conferência reuniu especialistas; de diversos países, as discussões se estenderam por três dias, os resultados serão publicados no próximo mês.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "reuniu" de seu complemento "especialistas de diversos países".');
    END IF;
    
    -- Questão 7
    IF array_length(exercicios_ids, 1) >= 7 THEN
        -- Apagar opções existentes do sétimo exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[7];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[7], 'O estudo analisou o comportamento de consumidores em diferentes faixas etárias; ademais, identificou padrões específicos para cada grupo socioeconômico.', TRUE, 'O ponto e vírgula está sendo usado corretamente antes do advérbio "ademais", que inicia uma nova oração.'),
        (exercicios_ids[7], 'O estudo; analisou o comportamento de consumidores em diferentes faixas etárias, ademais, identificou padrões específicos para cada grupo socioeconômico.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "O estudo" do verbo "analisou".'),
        (exercicios_ids[7], 'O estudo analisou o comportamento de consumidores em diferentes faixas etárias, ademais; identificou padrões específicos para cada grupo socioeconômico.', FALSE, 'O ponto e vírgula está incorretamente posicionado após o advérbio "ademais".'),
        (exercicios_ids[7], 'O estudo analisou o comportamento; de consumidores em diferentes faixas etárias, ademais, identificou padrões específicos para cada grupo socioeconômico.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "analisou" de seu complemento.');
    END IF;
    
    -- Questão 8
    IF array_length(exercicios_ids, 1) >= 8 THEN
        -- Apagar opções existentes do oitavo exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[8];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[8], 'A equipe trabalhou incansavelmente para cumprir o prazo; todavia, alguns ajustes ainda precisarão ser feitos antes da entrega final.', TRUE, 'O ponto e vírgula está sendo usado corretamente antes da conjunção adversativa "todavia".'),
        (exercicios_ids[8], 'A equipe; trabalhou incansavelmente para cumprir o prazo, todavia, alguns ajustes ainda precisarão ser feitos antes da entrega final.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "A equipe" do verbo "trabalhou".'),
        (exercicios_ids[8], 'A equipe trabalhou incansavelmente para cumprir o prazo, todavia; alguns ajustes ainda precisarão ser feitos antes da entrega final.', FALSE, 'O ponto e vírgula está incorretamente posicionado após a conjunção "todavia".'),
        (exercicios_ids[8], 'A equipe trabalhou incansavelmente; para cumprir o prazo, todavia, alguns ajustes ainda precisarão ser feitos antes da entrega final.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "trabalhou" de seu complemento "incansavelmente para cumprir o prazo".');
    END IF;
    
    -- Questão 9
    IF array_length(exercicios_ids, 1) >= 9 THEN
        -- Apagar opções existentes do nono exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[9];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[9], 'O artigo científico deve conter: introdução, com contextualização do tema; metodologia, detalhando os procedimentos adotados; resultados, apresentando os dados obtidos; discussão, analisando as implicações dos resultados.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar itens em uma enumeração complexa.'),
        (exercicios_ids[9], 'O artigo científico; deve conter: introdução, com contextualização do tema, metodologia, detalhando os procedimentos adotados, resultados, apresentando os dados obtidos, discussão, analisando as implicações dos resultados.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "O artigo científico" do verbo "deve".'),
        (exercicios_ids[9], 'O artigo científico deve conter: introdução; com contextualização do tema, metodologia, detalhando os procedimentos adotados, resultados, apresentando os dados obtidos, discussão, analisando as implicações dos resultados.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "introdução" de "com contextualização do tema".'),
        (exercicios_ids[9], 'O artigo científico deve; conter: introdução, com contextualização do tema, metodologia, detalhando os procedimentos adotados, resultados, apresentando os dados obtidos, discussão, analisando as implicações dos resultados.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo auxiliar "deve" do verbo principal "conter".');
    END IF;
    
    -- Questão 10
    IF array_length(exercicios_ids, 1) >= 10 THEN
        -- Apagar opções existentes do décimo exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[10];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[10], 'O palestrante apresentou argumentos convincentes; sua análise foi bem recebida pela plateia; as perguntas após a apresentação demonstraram o interesse no tema.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar orações independentes mas relacionadas.'),
        (exercicios_ids[10], 'O palestrante; apresentou argumentos convincentes, sua análise foi bem recebida pela plateia, as perguntas após a apresentação demonstraram o interesse no tema.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "O palestrante" do verbo "apresentou".'),
        (exercicios_ids[10], 'O palestrante apresentou argumentos convincentes, sua análise; foi bem recebida pela plateia, as perguntas após a apresentação demonstraram o interesse no tema.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "sua análise" do verbo "foi".'),
        (exercicios_ids[10], 'O palestrante apresentou; argumentos convincentes, sua análise foi bem recebida pela plateia, as perguntas após a apresentação demonstraram o interesse no tema.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "apresentou" de seu objeto direto "argumentos convincentes".');
    END IF;
END $$;
