-- Script para criar opções para os exercícios de Dois Pontos - Exercício 1
DO $$
DECLARE
    exercicio1_id uuid;
    exercicio2_id uuid;
    exercicio3_id uuid;
    exercicio4_id uuid;
    exercicio5_id uuid;
    exercicio6_id uuid;
    exercicio7_id uuid;
    exercicio8_id uuid;
    exercicio9_id uuid;
    exercicio10_id uuid;
BEGIN
    -- Buscar IDs dos exercícios na ordem de criação
    SELECT id INTO exercicio1_id FROM exercises WHERE category_id = 'dois-pontos' ORDER BY created_at LIMIT 1 OFFSET 0;
    SELECT id INTO exercicio2_id FROM exercises WHERE category_id = 'dois-pontos' ORDER BY created_at LIMIT 1 OFFSET 1;
    SELECT id INTO exercicio3_id FROM exercises WHERE category_id = 'dois-pontos' ORDER BY created_at LIMIT 1 OFFSET 2;
    SELECT id INTO exercicio4_id FROM exercises WHERE category_id = 'dois-pontos' ORDER BY created_at LIMIT 1 OFFSET 3;
    SELECT id INTO exercicio5_id FROM exercises WHERE category_id = 'dois-pontos' ORDER BY created_at LIMIT 1 OFFSET 4;
    SELECT id INTO exercicio6_id FROM exercises WHERE category_id = 'dois-pontos' ORDER BY created_at LIMIT 1 OFFSET 5;
    SELECT id INTO exercicio7_id FROM exercises WHERE category_id = 'dois-pontos' ORDER BY created_at LIMIT 1 OFFSET 6;
    SELECT id INTO exercicio8_id FROM exercises WHERE category_id = 'dois-pontos' ORDER BY created_at LIMIT 1 OFFSET 7;
    SELECT id INTO exercicio9_id FROM exercises WHERE category_id = 'dois-pontos' ORDER BY created_at LIMIT 1 OFFSET 8;
    SELECT id INTO exercicio10_id FROM exercises WHERE category_id = 'dois-pontos' ORDER BY created_at LIMIT 1 OFFSET 9;
    
    -- Inserir opções para o primeiro exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicio1_id, 'O professor disse: "Amanhã teremos prova."', TRUE, 'Correto! Os dois pontos são usados antes de uma citação direta.'),
    (exercicio1_id, 'Precisamos de vários itens: canetas, lápis e cadernos.', TRUE, 'Correto! Os dois pontos são usados antes de uma enumeração.'),
    (exercicio1_id, 'Concluí: o problema era mais simples do que parecia.', TRUE, 'Correto! Os dois pontos são usados para introduzir uma conclusão.'),
    (exercicio1_id, 'Fui à loja, comprei tudo o que precisava: e voltei para casa.', FALSE, 'Incorreto! Não se usa dois pontos antes de "e" dessa forma.'),
    (exercicio1_id, 'Ele respondeu: que não viria à reunião.', FALSE, 'Incorreto! Não se deve usar dois pontos antes de "que" neste contexto.');
    
    -- Inserir opções para o segundo exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicio2_id, 'Ficou claro: ele não queria participar da atividade.', TRUE, 'Correto! Os dois pontos introduzem uma explicação do que foi mencionado antes.'),
    (exercicio2_id, 'O resultado foi surpreendente: ninguém esperava um desempenho tão bom.', TRUE, 'Correto! Os dois pontos introduzem uma explicação ou esclarecimento.'),
    (exercicio2_id, 'A conclusão é óbvia: precisamos mudar nossa estratégia.', TRUE, 'Correto! Os dois pontos introduzem uma explicação ou conclusão.'),
    (exercicio2_id, 'Maria: chegou atrasada para a aula.', FALSE, 'Incorreto! Neste caso, não se usa dois pontos para separar o sujeito do predicado.'),
    (exercicio2_id, 'Eles estavam preocupados: por causa da chuva.', FALSE, 'Incorreto! Não se usa dois pontos antes de "por causa" neste contexto.');
    
    -- Inserir opções para o terceiro exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicio3_id, 'Compramos vários itens: frutas, verduras e pães.', TRUE, 'Correto! Os dois pontos são usados antes de uma enumeração.'),
    (exercicio3_id, 'Precisamos de três ingredientes básicos: farinha, ovos e leite.', TRUE, 'Correto! Os dois pontos introduzem uma enumeração depois de um termo anunciador.'),
    (exercicio3_id, 'As cores da bandeira são: verde, amarelo, azul e branco.', TRUE, 'Correto! Os dois pontos introduzem uma enumeração após o verbo "ser".'),
    (exercicio3_id, 'Os alunos: Pedro, João e Maria fizeram o trabalho.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito de seus elementos.'),
    (exercicio3_id, 'Eu fui para: a escola, o parque e o cinema.', FALSE, 'Incorreto! Não se usa dois pontos após uma preposição.');
    
    -- Inserir opções para o quarto exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicio4_id, 'O diretor anunciou: "As aulas serão suspensas amanhã."', TRUE, 'Correto! Os dois pontos são usados antes de uma citação direta.'),
    (exercicio4_id, 'João disse: "Não poderei ir à festa."', TRUE, 'Correto! Os dois pontos introduzem uma fala ou citação direta.'),
    (exercicio4_id, 'O aviso na porta dizia: "Fechado para manutenção."', TRUE, 'Correto! Os dois pontos introduzem uma citação de um texto escrito.'),
    (exercicio4_id, 'Maria pensou: que era melhor não comentar sobre o assunto.', FALSE, 'Incorreto! Após "pensou" seguido de "que", não se usam dois pontos, mas sim vírgula ou nada.'),
    (exercicio4_id, 'O professor explicou: sobre a matéria da prova.', FALSE, 'Incorreto! Não se usa dois pontos antes de "sobre" neste contexto.');
    
    -- Inserir opções para o quinto exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicio5_id, 'O professor perguntou: "Por que você chegou atrasado?"', TRUE, 'Correto! Os dois pontos são usados antes de uma fala direta.'),
    (exercicio5_id, 'Ana respondeu: "Perdi o ônibus."', TRUE, 'Correto! Os dois pontos introduzem uma fala em um diálogo.'),
    (exercicio5_id, 'O cartaz dizia: "Promoção: 50% de desconto!"', TRUE, 'Correto! Os dois pontos introduzem uma fala ou citação de um texto escrito.'),
    (exercicio5_id, 'Ele me contou: que tinha viajado para o exterior.', FALSE, 'Incorreto! Após verbos como "contar" seguidos de "que", não se usam dois pontos.'),
    (exercicio5_id, 'O palestrante: "Foi um prazer estar aqui hoje."', FALSE, 'Incorreto! Falta um verbo de elocução antes dos dois pontos.');
    
    -- Inserir opções para o sexto exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicio6_id, 'A situação era clara: precisávamos de mais tempo para concluir o projeto.', TRUE, 'Correto! Os dois pontos introduzem um esclarecimento.'),
    (exercicio6_id, 'O motivo do atraso foi simples: o trânsito estava congestionado.', TRUE, 'Correto! Os dois pontos introduzem uma explicação.'),
    (exercicio6_id, 'A conclusão é evidente: teremos que refazer todo o trabalho.', TRUE, 'Correto! Os dois pontos introduzem uma conclusão ou explicação.'),
    (exercicio6_id, 'Ela estava animada: porque ganhou um prêmio.', FALSE, 'Incorreto! Não se usa dois pontos antes de "porque" neste contexto.'),
    (exercicio6_id, 'O livro: trata de aventuras no espaço.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.');
    
    -- Inserir opções para o sétimo exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicio7_id, 'Importante destacar: esta informação é confidencial.', TRUE, 'Correto! Os dois pontos são usados para introduzir uma informação importante em textos informativos.'),
    (exercicio7_id, 'Nota: os valores apresentados podem sofrer alterações.', TRUE, 'Correto! Os dois pontos introduzem uma observação ou nota em textos informativos.'),
    (exercicio7_id, 'Atenção: as inscrições terminam amanhã.', TRUE, 'Correto! Os dois pontos são usados após palavras ou expressões de alerta em textos informativos.'),
    (exercicio7_id, 'O documento: foi assinado pelo diretor.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicio7_id, 'A empresa informou: que haverá mudanças.', FALSE, 'Incorreto! Após verbos como "informar" seguidos de "que", não se usam dois pontos.');
    
    -- Inserir opções para o oitavo exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicio8_id, 'Carlos perguntou: "Que horas são?"', TRUE, 'Correto! Os dois pontos são usados para introduzir falas em diálogos.'),
    (exercicio8_id, 'Maria respondeu: "São duas horas."', TRUE, 'Correto! Os dois pontos introduzem a resposta em um diálogo.'),
    (exercicio8_id, 'O pai alertou: "Não chegue tarde!"', TRUE, 'Correto! Os dois pontos introduzem uma fala em um diálogo.'),
    (exercicio8_id, 'Ele disse: que não sabia a resposta.', FALSE, 'Incorreto! Após verbos dicendi seguidos de "que", não se usam dois pontos.'),
    (exercicio8_id, 'Ana: "Vou ao cinema hoje."', FALSE, 'Incorreto! Falta um verbo de elocução antes dos dois pontos.');
    
    -- Inserir opções para o nono exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicio9_id, 'Fotossíntese: processo pelo qual as plantas produzem seu próprio alimento.', TRUE, 'Correto! Os dois pontos são usados em definições, separando o termo de sua definição.'),
    (exercicio9_id, 'Democracia: sistema político em que o poder emana do povo.', TRUE, 'Correto! Os dois pontos introduzem a definição de um termo.'),
    (exercicio9_id, 'Pandemia: surto de uma doença que afeta uma região inteira ou o mundo todo.', TRUE, 'Correto! Os dois pontos são usados para apresentar a definição de um termo.'),
    (exercicio9_id, 'A matemática: é uma ciência exata.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicio9_id, 'O conceito de: liberdade varia entre culturas.', FALSE, 'Incorreto! Não se usa dois pontos após preposição.');
    
    -- Inserir opções para o décimo exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicio10_id, 'O resultado não poderia ser outro: fracassamos completamente.', TRUE, 'Correto! Os dois pontos introduzem uma conclusão.'),
    (exercicio10_id, 'Agora sabemos a verdade: fomos enganados desde o início.', TRUE, 'Correto! Os dois pontos introduzem uma conclusão ou consequência.'),
    (exercicio10_id, 'A decisão está tomada: seguiremos com o plano original.', TRUE, 'Correto! Os dois pontos introduzem uma conclusão ou resultado.'),
    (exercicio10_id, 'Conclui-se: que o projeto deve ser arquivado.', FALSE, 'Incorreto! Após "conclui-se" seguido de "que", não se usam dois pontos.'),
    (exercicio10_id, 'O estudo foi finalizado: mas os resultados ainda não foram divulgados.', FALSE, 'Incorreto! Não se usa dois pontos antes de conjunções adversativas como "mas".');
    
END $$;
