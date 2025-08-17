-- Script para adicionar opções a TODAS as questões do Exercício 2 de Ponto e Vírgula

-- Função para criar opções específicas para cada questão do Exercício 2
DO $$
DECLARE
    exercicios_ids INTEGER[];
BEGIN
    -- Obter todos os IDs dos exercícios da categoria ponto-virgula-2
    SELECT array(
        SELECT id 
        FROM exercises 
        WHERE category_id = 'ponto-virgula-2' 
        ORDER BY id
    ) INTO exercicios_ids;
    
    -- Checar se temos exercícios para trabalhar
    IF array_length(exercicios_ids, 1) IS NULL THEN
        RAISE NOTICE 'Nenhum exercício encontrado para a categoria ponto-virgula-2';
        RETURN;
    END IF;
    
    -- Para cada exercício, adicionar opções específicas
    
    -- Questão 1 - Conjunções conclusivas
    IF array_length(exercicios_ids, 1) >= 1 THEN
        -- Apagar opções existentes do primeiro exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[1];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[1], 'O projeto foi finalizado ontem; portanto, poderemos entregar dentro do prazo.', TRUE, 'O ponto e vírgula está sendo usado corretamente antes da conjunção conclusiva "portanto".'),
        (exercicios_ids[1], 'O projeto foi finalizado ontem, portanto; poderemos entregar dentro do prazo.', FALSE, 'O ponto e vírgula está incorretamente posicionado após a conjunção "portanto".'),
        (exercicios_ids[1], 'O projeto; foi finalizado ontem, portanto, poderemos entregar dentro do prazo.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "O projeto" do verbo "foi".'),
        (exercicios_ids[1], 'O projeto foi finalizado ontem portanto, poderemos; entregar dentro do prazo.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "poderemos" de seu complemento "entregar".');
    END IF;
    
    -- Questão 2 - Enumeração complexa
    IF array_length(exercicios_ids, 1) >= 2 THEN
        -- Apagar opções existentes do segundo exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[2];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[2], 'No evento estarão presentes: especialistas em linguística, como Dr. Silva e Dra. Oliveira; professores de português; e estudantes de diversas universidades.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar itens em uma enumeração complexa.'),
        (exercicios_ids[2], 'No evento estarão presentes: especialistas; em linguística, como Dr. Silva e Dra. Oliveira, professores de português, e estudantes de diversas universidades.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "especialistas" de "em linguística".'),
        (exercicios_ids[2], 'No evento; estarão presentes: especialistas em linguística, como Dr. Silva e Dra. Oliveira, professores de português, e estudantes de diversas universidades.', FALSE, 'O ponto e vírgula está incorretamente posicionado após "evento".'),
        (exercicios_ids[2], 'No evento estarão presentes: especialistas em linguística, como Dr. Silva e Dra. Oliveira, professores de português, e estudantes; de diversas universidades.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "estudantes" de "de diversas universidades".');
    END IF;
    
    -- Questão 3 - Expressões explicativas
    IF array_length(exercicios_ids, 1) >= 3 THEN
        -- Apagar opções existentes do terceiro exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[3];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[3], 'A decisão foi unânime; isto é, todos os membros votaram a favor da proposta.', TRUE, 'O ponto e vírgula está sendo usado corretamente antes da expressão explicativa "isto é".'),
        (exercicios_ids[3], 'A decisão foi unânime, isto; é, todos os membros votaram a favor da proposta.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "isto" de "é".'),
        (exercicios_ids[3], 'A decisão; foi unânime, isto é, todos os membros votaram a favor da proposta.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "A decisão" do verbo "foi".'),
        (exercicios_ids[3], 'A decisão foi unânime, isto é; todos os membros votaram a favor da proposta.', FALSE, 'O ponto e vírgula está incorretamente posicionado após "isto é", quando deveria vir antes.');
    END IF;
    
    -- Questão 4 - Relação de causa e consequência
    IF array_length(exercicios_ids, 1) >= 4 THEN
        -- Apagar opções existentes do quarto exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[4];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[4], 'A chuva foi intensa durante toda a noite; as ruas amanheceram alagadas.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar orações com relação de causa e consequência.'),
        (exercicios_ids[4], 'A chuva; foi intensa durante toda a noite, as ruas amanheceram alagadas.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "A chuva" do verbo "foi".'),
        (exercicios_ids[4], 'A chuva foi intensa durante toda a noite, as ruas; amanheceram alagadas.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "as ruas" do verbo "amanheceram".'),
        (exercicios_ids[4], 'A chuva foi; intensa durante toda a noite, as ruas amanheceram alagadas.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "foi" de seu predicativo "intensa".');
    END IF;
    
    -- Questão 5 - Texto jurídico
    IF array_length(exercicios_ids, 1) >= 5 THEN
        -- Apagar opções existentes do quinto exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[5];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[5], 'O contrato estabelece: as obrigações da parte contratante; os direitos da parte contratada; as penalidades em caso de descumprimento.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar itens em um texto jurídico.'),
        (exercicios_ids[5], 'O contrato; estabelece: as obrigações da parte contratante, os direitos da parte contratada, as penalidades em caso de descumprimento.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "O contrato" do verbo "estabelece".'),
        (exercicios_ids[5], 'O contrato estabelece: as obrigações; da parte contratante, os direitos da parte contratada, as penalidades em caso de descumprimento.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "as obrigações" de "da parte contratante".'),
        (exercicios_ids[5], 'O contrato estabelece: as obrigações da parte contratante, os direitos da parte contratada, as penalidades; em caso de descumprimento.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "as penalidades" de "em caso de descumprimento".');
    END IF;
    
    -- Questão 6 - Lista de definições
    IF array_length(exercicios_ids, 1) >= 6 THEN
        -- Apagar opções existentes do sexto exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[6];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[6], 'No glossário encontramos: Sintaxe: estudo da organização das palavras na frase; Morfologia: estudo da estrutura e formação das palavras; Fonologia: estudo dos sons da língua.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar definições em uma lista.'),
        (exercicios_ids[6], 'No glossário encontramos: Sintaxe; estudo da organização das palavras na frase, Morfologia: estudo da estrutura e formação das palavras, Fonologia: estudo dos sons da língua.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "Sintaxe" de sua definição, quando deveria estar após a definição completa.'),
        (exercicios_ids[6], 'No glossário; encontramos: Sintaxe: estudo da organização das palavras na frase, Morfologia: estudo da estrutura e formação das palavras, Fonologia: estudo dos sons da língua.', FALSE, 'O ponto e vírgula está incorretamente posicionado após "glossário".'),
        (exercicios_ids[6], 'No glossário encontramos: Sintaxe: estudo da organização das palavras na frase, Morfologia: estudo da estrutura e formação das palavras, Fonologia: estudo; dos sons da língua.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "estudo" de "dos sons da língua".');
    END IF;
    
    -- Questão 7 - Orações coordenadas extensas
    IF array_length(exercicios_ids, 1) >= 7 THEN
        -- Apagar opções existentes do sétimo exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[7];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[7], 'O estudo foi realizado com uma amostra de mais de mil participantes de diferentes regiões do país e com variados níveis de escolaridade; e os resultados foram publicados em uma revista científica internacional.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar orações coordenadas extensas, mesmo havendo a conjunção "e".'),
        (exercicios_ids[7], 'O estudo foi realizado; com uma amostra de mais de mil participantes de diferentes regiões do país e com variados níveis de escolaridade, e os resultados foram publicados em uma revista científica internacional.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "foi realizado" de seu complemento.'),
        (exercicios_ids[7], 'O estudo foi realizado com uma amostra de mais de mil participantes de diferentes regiões do país e com variados níveis de escolaridade, e os resultados; foram publicados em uma revista científica internacional.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "os resultados" do verbo "foram publicados".'),
        (exercicios_ids[7], 'O estudo foi realizado com uma amostra; de mais de mil participantes de diferentes regiões do país e com variados níveis de escolaridade, e os resultados foram publicados em uma revista científica internacional.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "amostra" de "de mais de mil participantes".');
    END IF;
    
    -- Questão 8 - Antes de "porém"
    IF array_length(exercicios_ids, 1) >= 8 THEN
        -- Apagar opções existentes do oitavo exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[8];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[8], 'Os ingressos estavam esgotados; porém, conseguimos lugares na primeira fila.', TRUE, 'O ponto e vírgula está sendo usado corretamente antes da conjunção adversativa "porém".'),
        (exercicios_ids[8], 'Os ingressos; estavam esgotados, porém, conseguimos lugares na primeira fila.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "Os ingressos" do verbo "estavam".'),
        (exercicios_ids[8], 'Os ingressos estavam esgotados, porém; conseguimos lugares na primeira fila.', FALSE, 'O ponto e vírgula está incorretamente posicionado após a conjunção "porém".'),
        (exercicios_ids[8], 'Os ingressos estavam esgotados, porém, conseguimos; lugares na primeira fila.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "conseguimos" de seu objeto direto "lugares".');
    END IF;
    
    -- Questão 9 - Sequência de frases curtas
    IF array_length(exercicios_ids, 1) >= 9 THEN
        -- Apagar opções existentes do nono exercício
        DELETE FROM exercise_options WHERE exercise_id = exercicios_ids[9];
        
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicios_ids[9], 'Chegou cedo; organizou o material; iniciou a apresentação.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar frases curtas relacionadas entre si.'),
        (exercicios_ids[9], 'Chegou; cedo, organizou o material, iniciou a apresentação.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "Chegou" do advérbio "cedo".'),
        (exercicios_ids[9], 'Chegou cedo, organizou; o material, iniciou a apresentação.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "organizou" de seu objeto direto "o material".'),
        (exercicios_ids[9], 'Chegou cedo, organizou o material, iniciou; a apresentação.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "iniciou" de seu objeto direto "a apresentação".');
    END IF;
    
    -- Se temos mais de 9 exercícios, podemos adicionar mais opções para os exercícios restantes...
    
END $$;
