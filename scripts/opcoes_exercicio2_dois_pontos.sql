-- Script para criar opções para os exercícios de Dois Pontos - Exercício 2
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
    SELECT id INTO exercicio1_id FROM exercises WHERE category_id = 'dois-pontos-2' ORDER BY created_at LIMIT 1 OFFSET 0;
    SELECT id INTO exercicio2_id FROM exercises WHERE category_id = 'dois-pontos-2' ORDER BY created_at LIMIT 1 OFFSET 1;
    SELECT id INTO exercicio3_id FROM exercises WHERE category_id = 'dois-pontos-2' ORDER BY created_at LIMIT 1 OFFSET 2;
    SELECT id INTO exercicio4_id FROM exercises WHERE category_id = 'dois-pontos-2' ORDER BY created_at LIMIT 1 OFFSET 3;
    SELECT id INTO exercicio5_id FROM exercises WHERE category_id = 'dois-pontos-2' ORDER BY created_at LIMIT 1 OFFSET 4;
    SELECT id INTO exercicio6_id FROM exercises WHERE category_id = 'dois-pontos-2' ORDER BY created_at LIMIT 1 OFFSET 5;
    SELECT id INTO exercicio7_id FROM exercises WHERE category_id = 'dois-pontos-2' ORDER BY created_at LIMIT 1 OFFSET 6;
    SELECT id INTO exercicio8_id FROM exercises WHERE category_id = 'dois-pontos-2' ORDER BY created_at LIMIT 1 OFFSET 7;
    SELECT id INTO exercicio9_id FROM exercises WHERE category_id = 'dois-pontos-2' ORDER BY created_at LIMIT 1 OFFSET 8;
    SELECT id INTO exercicio10_id FROM exercises WHERE category_id = 'dois-pontos-2' ORDER BY created_at LIMIT 1 OFFSET 9;
    
    -- Inserir opções para o primeiro exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicio1_id, 'Precisamos dos seguintes materiais: madeira, pregos, cola e lixa.', TRUE, 'Correto! Os dois pontos são usados antes de uma enumeração, após um termo que a anuncia.'),
    (exercicio1_id, 'Comprei algumas frutas: maçãs, bananas, uvas e peras.', TRUE, 'Correto! Os dois pontos introduzem uma enumeração de itens.'),
    (exercicio1_id, 'Os ingredientes necessários são: farinha, açúcar, ovos e leite.', TRUE, 'Correto! Os dois pontos introduzem uma enumeração após o verbo "são".'),
    (exercicio1_id, 'Vários alunos: Carlos, Pedro e Ana foram aprovados.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar elementos que compõem o sujeito.'),
    (exercicio1_id, 'Ele foi à: padaria, farmácia e supermercado.', FALSE, 'Incorreto! Não se usa dois pontos após preposição.');
    
    -- Inserir opções para o segundo exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicio2_id, 'Segue a lista de participantes: Maria Silva, João Pereira e Ana Souza.', TRUE, 'Correto! Os dois pontos são usados para introduzir uma lista após um termo anunciador.'),
    (exercicio2_id, 'Os itens faltantes são: canetas, papel A4 e grampeador.', TRUE, 'Correto! Os dois pontos introduzem uma lista de itens após o verbo "são".'),
    (exercicio2_id, 'Aviso aos funcionários: a reunião foi adiada para segunda-feira.', TRUE, 'Correto! Os dois pontos podem introduzir uma informação após um termo anunciador.'),
    (exercicio2_id, 'A empresa: Microsoft, Apple e Google dominam o mercado.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado ou elementos dentro do sujeito.'),
    (exercicio2_id, 'Ele pensou em: desistir do projeto.', FALSE, 'Incorreto! Não se usa dois pontos após preposição.');
    
    -- Inserir opções para o terceiro exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicio3_id, 'O candidato possui as seguintes qualidades: proatividade, responsabilidade e criatividade.', TRUE, 'Correto! Os dois pontos são usados para introduzir uma enumeração de características.'),
    (exercicio3_id, 'As características do produto são: durabilidade, praticidade e baixo custo.', TRUE, 'Correto! Os dois pontos introduzem uma enumeração de características após o verbo "são".'),
    (exercicio3_id, 'Observe as propriedades do material: resistência, flexibilidade e leveza.', TRUE, 'Correto! Os dois pontos introduzem uma enumeração de características após um termo anunciador.'),
    (exercicio3_id, 'O atleta: força, velocidade e resistência são suas principais qualidades.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito de suas características quando estas estão no predicado.'),
    (exercicio3_id, 'A casa tem: três quartos, duas salas e uma cozinha.', FALSE, 'Incorreto! Não se usa dois pontos após o verbo "ter" dessa forma. O correto seria usar vírgula ou outra construção.');
    
    -- Inserir opções para o quarto exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicio4_id, 'Os alunos deverão trazer os seguintes elementos: caderno, lápis e borracha.', TRUE, 'Correto! Os dois pontos são usados antes de uma sequência de elementos, após um termo anunciador.'),
    (exercicio4_id, 'O processo ocorre em três etapas: preparação, execução e finalização.', TRUE, 'Correto! Os dois pontos introduzem uma sequência de elementos após um termo anunciador.'),
    (exercicio4_id, 'As fases da lua são: nova, crescente, cheia e minguante.', TRUE, 'Correto! Os dois pontos introduzem uma sequência de elementos após o verbo "são".'),
    (exercicio4_id, 'Os candidatos: devem apresentar os documentos exigidos.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicio4_id, 'Eu preciso de: tempo para terminar este trabalho.', FALSE, 'Incorreto! Não se usa dois pontos após preposição.');
    
    -- Inserir opções para o quinto exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicio5_id, 'O plano é composto por várias ações: reformular o projeto, buscar financiamento e iniciar a execução.', TRUE, 'Correto! Os dois pontos introduzem uma série de ações após um termo anunciador.'),
    (exercicio5_id, 'Segue o cronograma de atividades: organizar documentos, preparar apresentação e realizar a reunião.', TRUE, 'Correto! Os dois pontos introduzem uma série de ações após um termo anunciador.'),
    (exercicio5_id, 'Para finalizar o curso, o aluno deve: entregar o trabalho final, apresentar o projeto e passar na prova.', TRUE, 'Correto! Os dois pontos podem introduzir uma série de ações em sequência.'),
    (exercicio5_id, 'Os funcionários: chegaram, trabalharam e saíram no horário determinado.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicio5_id, 'Ela gosta de: dançar, cantar e tocar piano.', FALSE, 'Incorreto! Não se usa dois pontos após preposição.');
    
    -- Inserir opções para o sexto exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicio6_id, 'A agenda da reunião contém os seguintes tópicos: apresentação do projeto, análise de resultados e planejamento futuro.', TRUE, 'Correto! Os dois pontos são usados para introduzir uma listagem de tópicos após um termo anunciador.'),
    (exercicio6_id, 'Os pontos a serem discutidos são: orçamento, prazos e recursos humanos.', TRUE, 'Correto! Os dois pontos introduzem uma listagem de tópicos após o verbo "são".'),
    (exercicio6_id, 'Pauta do dia: aprovação da ata anterior, informes gerais e assuntos diversos.', TRUE, 'Correto! Os dois pontos introduzem uma listagem de tópicos após um termo anunciador.'),
    (exercicio6_id, 'O documento: contém várias seções.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicio6_id, 'Vamos falar sobre: o novo projeto da empresa.', FALSE, 'Incorreto! Não se usa dois pontos após preposição.');
    
    -- Inserir opções para o sétimo exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicio7_id, 'O diagnóstico revelou detalhes importantes: havia uma fratura no osso e inflamação no tecido.', TRUE, 'Correto! Os dois pontos são usados para introduzir um detalhamento do que foi mencionado antes.'),
    (exercicio7_id, 'A análise mostrou o seguinte: o sistema está desatualizado e precisa de manutenção urgente.', TRUE, 'Correto! Os dois pontos introduzem um detalhamento após um termo anunciador.'),
    (exercicio7_id, 'Segue o relatório detalhado: todas as metas foram cumpridas e os objetivos alcançados.', TRUE, 'Correto! Os dois pontos introduzem um detalhamento após um termo anunciador.'),
    (exercicio7_id, 'O projeto: foi detalhado no documento anexo.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicio7_id, 'Ele falou sobre: os detalhes do contrato.', FALSE, 'Incorreto! Não se usa dois pontos após preposição.');
    
    -- Inserir opções para o oitavo exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicio8_id, 'Vários escritores influenciaram sua obra: Machado de Assis, Guimarães Rosa e Clarice Lispector.', TRUE, 'Correto! Os dois pontos são usados para introduzir exemplos que ilustram uma ideia.'),
    (exercicio8_id, 'O Brasil possui diversas paisagens naturais: praias, montanhas, florestas e cachoeiras.', TRUE, 'Correto! Os dois pontos introduzem exemplos que ilustram uma ideia.'),
    (exercicio8_id, 'Existem vários estilos musicais: rock, jazz, samba e música clássica.', TRUE, 'Correto! Os dois pontos introduzem exemplos que ilustram uma ideia.'),
    (exercicio8_id, 'Os países: Brasil, Argentina e Chile estão na América do Sul.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito de seus elementos quando o predicado vem depois.'),
    (exercicio8_id, 'Ele visitou: Paris, Roma e Londres durante suas férias.', FALSE, 'Incorreto! Não se usa dois pontos após o verbo dessa forma.');
    
    -- Inserir opções para o nono exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicio9_id, 'Para montar o móvel, siga estas etapas: separe as peças, identifique os parafusos e siga o manual.', TRUE, 'Correto! Os dois pontos são usados para introduzir uma sequência de passos após um termo anunciador.'),
    (exercicio9_id, 'O processo de inscrição segue os seguintes passos: preencher o formulário, enviar documentos e pagar a taxa.', TRUE, 'Correto! Os dois pontos introduzem uma sequência de passos após um termo anunciador.'),
    (exercicio9_id, 'A reciclagem do papel ocorre em três etapas: coleta, triagem e processamento.', TRUE, 'Correto! Os dois pontos introduzem uma sequência de etapas após um termo anunciador.'),
    (exercicio9_id, 'Os funcionários: seguiram todos os procedimentos de segurança.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicio9_id, 'A empresa decidiu: implementar novos processos em etapas.', FALSE, 'Incorreto! Não se usa dois pontos após o verbo dessa forma.');
    
    -- Inserir opções para o décimo exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicio10_id, 'Menu do dia: Entrada: salada verde; Prato principal: filé com batatas; Sobremesa: pudim.', TRUE, 'Correto! Os dois pontos são usados em cardápios para separar categorias de itens.'),
    (exercicio10_id, 'Opções de pagamento: cartão de crédito, débito ou dinheiro.', TRUE, 'Correto! Os dois pontos introduzem uma lista de opções após um termo anunciador.'),
    (exercicio10_id, 'Tipos de quarto disponíveis: standard, luxo e suíte presidencial.', TRUE, 'Correto! Os dois pontos introduzem uma lista de opções após um termo anunciador.'),
    (exercicio10_id, 'O restaurante: oferece diversas opções no cardápio.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicio10_id, 'Você pode escolher entre: carne, frango ou peixe.', FALSE, 'Incorreto! Não se usa dois pontos após preposição.');
    
END $$;
