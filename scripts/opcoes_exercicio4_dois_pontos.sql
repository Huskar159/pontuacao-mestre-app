-- Script para criar opções para os exercícios de Dois Pontos - Exercício 4
DO $$
DECLARE
    exercicios_ids uuid[];
BEGIN
    -- Buscar IDs dos exercícios na ordem correta
    SELECT array_agg(id ORDER BY created_at) INTO exercicios_ids
    FROM exercises
    WHERE category_id = 'dois-pontos-4';
    
    -- Inserir opções para o primeiro exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[1], 'Chegamos a uma conclusão: precisamos melhorar nossa comunicação interna.', TRUE, 'Correto! Os dois pontos são usados para introduzir explicações.'),
    (exercicios_ids[1], 'A situação é simples: não temos recursos suficientes para o projeto.', TRUE, 'Correto! Os dois pontos introduzem uma explicação sobre uma situação.'),
    (exercicios_ids[1], 'O motivo do atraso ficou claro: houve um problema no sistema.', TRUE, 'Correto! Os dois pontos introduzem uma explicação sobre um fato mencionado.'),
    (exercicios_ids[1], 'A empresa: está passando por dificuldades financeiras.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[1], 'Ela explicou: que não poderia comparecer à reunião.', FALSE, 'Incorreto! Após verbos como "explicar" seguidos de "que", não se usam dois pontos.');
    
    -- Inserir opções para o segundo exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[2], 'Esclarecemos um ponto importante: o prazo de inscrição não será prorrogado.', TRUE, 'Correto! Os dois pontos são usados para introduzir um esclarecimento.'),
    (exercicios_ids[2], 'É necessário deixar claro: essas medidas são temporárias.', TRUE, 'Correto! Os dois pontos introduzem um esclarecimento sobre algo mencionado anteriormente.'),
    (exercicios_ids[2], 'Uma observação relevante: os documentos devem ser enviados com antecedência.', TRUE, 'Correto! Os dois pontos introduzem um esclarecimento ou observação importante.'),
    (exercicios_ids[2], 'O diretor: esclareceu todas as dúvidas dos funcionários.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[2], 'Ficou definido: que as reuniões serão às segundas-feiras.', FALSE, 'Incorreto! Após expressões como "ficou definido" seguidas de "que", não se usam dois pontos.');
    
    -- Inserir opções para o terceiro exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[3], 'Não conseguimos finalizar o projeto pelo seguinte motivo: faltaram recursos financeiros.', TRUE, 'Correto! Os dois pontos são usados para apresentar uma causa ou razão.'),
    (exercicios_ids[3], 'Sua candidatura foi rejeitada por uma razão: falta de experiência na área.', TRUE, 'Correto! Os dois pontos introduzem a causa ou razão de algo mencionado antes.'),
    (exercicios_ids[3], 'A reunião foi cancelada por um motivo importante: o diretor teve uma emergência familiar.', TRUE, 'Correto! Os dois pontos introduzem a causa ou razão de um fato mencionado.'),
    (exercicios_ids[3], 'O motivo: foi explicado detalhadamente no e-mail.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[3], 'Ele explicou: que o motivo da demissão foi a reestruturação da empresa.', FALSE, 'Incorreto! Após verbos como "explicar" seguidos de "que", não se usam dois pontos.');
    
    -- Inserir opções para o quarto exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[4], 'Depois de analisar todos os dados, chegamos a uma conclusão: precisamos mudar nossa estratégia.', TRUE, 'Correto! Os dois pontos são usados para introduzir uma conclusão.'),
    (exercicios_ids[4], 'A investigação levou a uma conclusão inevitável: o sistema estava vulnerável desde o início.', TRUE, 'Correto! Os dois pontos introduzem uma conclusão ou dedução lógica.'),
    (exercicios_ids[4], 'Os resultados apontam para uma direção clara: devemos investir em novas tecnologias.', TRUE, 'Correto! Os dois pontos introduzem uma conclusão baseada em resultados anteriores.'),
    (exercicios_ids[4], 'A conclusão: foi apresentada no relatório final.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[4], 'Os cientistas concluíram: que o experimento foi um sucesso.', FALSE, 'Incorreto! Após verbos como "concluir" seguidos de "que", não se usam dois pontos.');
    
    -- Inserir opções para o quinto exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[5], 'Ignoramos os avisos e agora enfrentamos as consequências: o sistema entrou em colapso.', TRUE, 'Correto! Os dois pontos são usados para introduzir uma consequência.'),
    (exercicios_ids[5], 'A falta de manutenção resultou em um problema grave: o equipamento parou de funcionar.', TRUE, 'Correto! Os dois pontos introduzem uma consequência de algo mencionado antes.'),
    (exercicios_ids[5], 'O atraso no pagamento gerou uma situação complicada: fomos incluídos na lista de inadimplentes.', TRUE, 'Correto! Os dois pontos introduzem uma consequência ou resultado.'),
    (exercicios_ids[5], 'A consequência: foi mais grave do que esperávamos.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[5], 'Ele previu: que as consequências seriam desastrosas.', FALSE, 'Incorreto! Após verbos como "prever" seguidos de "que", não se usam dois pontos.');
    
    -- Inserir opções para o sexto exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[6], 'Analisando os dados recentes, podemos observar: o crescimento tem sido consistente nos últimos três meses.', TRUE, 'Correto! Os dois pontos são usados para introduzir uma análise.'),
    (exercicios_ids[6], 'Nossa análise do mercado revela um fato importante: a concorrência está diminuindo seus preços.', TRUE, 'Correto! Os dois pontos introduzem uma análise ou interpretação.'),
    (exercicios_ids[6], 'O estudo das tendências de consumo mostra uma realidade interessante: os jovens preferem produtos sustentáveis.', TRUE, 'Correto! Os dois pontos introduzem uma análise ou interpretação de dados.'),
    (exercicios_ids[6], 'A análise: foi fundamentada em dados concretos.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[6], 'Os especialistas analisaram: que o problema era mais complexo do que parecia.', FALSE, 'Incorreto! Após verbos como "analisar" seguidos de "que", não se usam dois pontos.');
    
    -- Inserir opções para o sétimo exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[7], 'Em poucas palavras, a situação pode ser resumida: estamos enfrentando uma crise sem precedentes.', TRUE, 'Correto! Os dois pontos são usados para introduzir uma síntese ou resumo.'),
    (exercicios_ids[7], 'O relatório de 50 páginas pode ser sintetizado: os resultados foram abaixo do esperado.', TRUE, 'Correto! Os dois pontos introduzem uma síntese ou resumo.'),
    (exercicios_ids[7], 'Anos de pesquisa podem ser condensados nesta ideia: o aquecimento global é uma ameaça real.', TRUE, 'Correto! Os dois pontos introduzem uma síntese ou resumo de um tema complexo.'),
    (exercicios_ids[7], 'A síntese: foi apresentada na conferência anual.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[7], 'Ele sintetizou: que o problema tinha múltiplas causas.', FALSE, 'Incorreto! Após verbos como "sintetizar" seguidos de "que", não se usam dois pontos.');
    
    -- Inserir opções para o oitavo exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[8], 'Cabe ressaltar um detalhe importante: este procedimento não é reversível.', TRUE, 'Correto! Os dois pontos são usados para introduzir um comentário explicativo.'),
    (exercicios_ids[8], 'Observe-se, a propósito: a decisão não foi unânime.', TRUE, 'Correto! Os dois pontos introduzem um comentário explicativo ou observação.'),
    (exercicios_ids[8], 'É importante destacar: todas as medidas de segurança foram tomadas.', TRUE, 'Correto! Os dois pontos introduzem um comentário explicativo ou destaque.'),
    (exercicios_ids[8], 'O comentário: gerou polêmica nas redes sociais.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[8], 'Ela comentou: que o filme era excelente.', FALSE, 'Incorreto! Após verbos como "comentar" seguidos de "que", não se usam dois pontos.');
    
    -- Inserir opções para o nono exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[9], 'A relação é clara: quanto mais estudamos, melhores são nossos resultados.', TRUE, 'Correto! Os dois pontos são usados em relações de causa e efeito.'),
    (exercicios_ids[9], 'O princípio básico da física funciona assim: para cada ação, há uma reação igual e oposta.', TRUE, 'Correto! Os dois pontos introduzem uma relação de causa e efeito ou um princípio.'),
    (exercicios_ids[9], 'A regra é simples: se chover, o jogo será cancelado.', TRUE, 'Correto! Os dois pontos introduzem uma relação condicional de causa e efeito.'),
    (exercicios_ids[9], 'A causa: foi determinada pelos investigadores.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[9], 'Os cientistas descobriram: que o efeito era proporcional à causa.', FALSE, 'Incorreto! Após verbos como "descobrir" seguidos de "que", não se usam dois pontos.');
    
    -- Inserir opções para o décimo exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[10], 'Algoritmo: sequência finita de instruções bem definidas para realizar uma tarefa.', TRUE, 'Correto! Os dois pontos são usados em definições, especialmente em dicionários e glossários.'),
    (exercicios_ids[10], 'Biodiversidade: variedade de vida existente em determinado ambiente ou no planeta como um todo.', TRUE, 'Correto! Os dois pontos introduzem a definição de um termo.'),
    (exercicios_ids[10], 'Inflação: aumento generalizado e contínuo dos preços de bens e serviços.', TRUE, 'Correto! Os dois pontos são usados em definições em contextos técnicos ou educacionais.'),
    (exercicios_ids[10], 'A definição: foi contestada por vários especialistas.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[10], 'O professor definiu: que o conceito era fundamental para a disciplina.', FALSE, 'Incorreto! Após verbos como "definir" seguidos de "que", não se usam dois pontos.');
    
END $$;
