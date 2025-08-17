-- Script para criar opções para os exercícios de Dois Pontos - Exercício 5
DO $$
DECLARE
    exercicios_ids uuid[];
BEGIN
    -- Buscar IDs dos exercícios na ordem correta
    SELECT array_agg(id ORDER BY created_at) INTO exercicios_ids
    FROM exercises
    WHERE category_id = 'dois-pontos-5';
    
    -- Inserir opções para o primeiro exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[1], 'Considerando: Que a Constituição Federal assegura o direito à educação; Que o acesso universal é garantia legal; determina-se a imediata matrícula do requerente.', TRUE, 'Correto! Em textos jurídicos, os dois pontos são usados para introduzir considerações ou fundamentações.'),
    (exercicios_ids[1], 'Art. 5º: São direitos do consumidor a informação clara sobre produtos e serviços.', TRUE, 'Correto! Em textos jurídicos, os dois pontos podem ser usados após a numeração de artigos para introduzir seu conteúdo.'),
    (exercicios_ids[1], 'O juiz sentenciou: "Declaro improcedente o pedido inicial."', TRUE, 'Correto! Os dois pontos são usados para introduzir a fala ou decisão de autoridades.'),
    (exercicios_ids[1], 'A lei: determina que todos os cidadãos são iguais perante a justiça.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[1], 'O advogado argumentou: que seu cliente estava em legítima defesa.', FALSE, 'Incorreto! Após verbos como "argumentar" seguidos de "que", não se usam dois pontos.');
    
    -- Inserir opções para o segundo exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[2], 'Assunto: Solicitação de ampliação de prazo para entrega do relatório final.', TRUE, 'Correto! Em requerimentos, os dois pontos podem introduzir o objeto ou assunto principal.'),
    (exercicios_ids[2], 'Requer: A concessão de licença para tratamento de saúde pelo período de 30 dias.', TRUE, 'Correto! Os dois pontos introduzem o objeto do requerimento após o verbo "requer".'),
    (exercicios_ids[2], 'Objeto do Requerimento: Transferência para o turno matutino.', TRUE, 'Correto! Os dois pontos são usados para introduzir o objeto de um requerimento após um termo anunciador.'),
    (exercicios_ids[2], 'O funcionário: solicitou férias por meio de requerimento.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[2], 'O diretor autorizou: que o prazo fosse estendido.', FALSE, 'Incorreto! Após verbos como "autorizar" seguidos de "que", não se usam dois pontos.');
    
    -- Inserir opções para o terceiro exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[3], 'SILVA, João. A era digital: desafios e oportunidades. São Paulo: Editora ABC, 2023.', TRUE, 'Correto! Em referências bibliográficas, os dois pontos podem separar o título principal do subtítulo.'),
    (exercicios_ids[3], 'MACHADO DE ASSIS, J. M. Memórias póstumas de Brás Cubas: texto integral. Rio de Janeiro: Nova Fronteira, 2018.', TRUE, 'Correto! Os dois pontos separam o título do subtítulo em referências bibliográficas.'),
    (exercicios_ids[3], 'São Paulo: Companhia das Letras, 2020.', TRUE, 'Correto! Os dois pontos são usados para separar a cidade da editora em referências bibliográficas.'),
    (exercicios_ids[3], 'O livro: foi publicado em 2019.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[3], 'A bibliografia: contém mais de cem referências.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.');
    
    -- Inserir opções para o quarto exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[4], 'O presidente declarou durante a coletiva: "Não haverá aumento de impostos este ano."', TRUE, 'Correto! Em notícias, os dois pontos são usados para introduzir declarações.'),
    (exercicios_ids[4], 'Urgente: Terremoto atinge a costa leste do país.', TRUE, 'Correto! Os dois pontos podem introduzir informações importantes em manchetes ou chamadas.'),
    (exercicios_ids[4], 'Pesquisa revela: 70% dos brasileiros aprovam a nova medida.', TRUE, 'Correto! Os dois pontos introduzem dados ou informações importantes em notícias.'),
    (exercicios_ids[4], 'A notícia: foi divulgada pela imprensa internacional.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[4], 'O jornal informou: que haveria uma coletiva de imprensa.', FALSE, 'Incorreto! Após verbos como "informar" seguidos de "que", não se usam dois pontos.');
    
    -- Inserir opções para o quinto exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[5], 'A proporção da mistura é de 2:1 (duas partes de água para uma de soluto).', TRUE, 'Correto! Em matemática, os dois pontos são usados para indicar proporções ou razões.'),
    (exercicios_ids[5], 'A escala do mapa é 1:100.000 (1 cm no mapa representa 100.000 cm no terreno).', TRUE, 'Correto! Os dois pontos são usados para indicar escalas e proporções.'),
    (exercicios_ids[5], 'O resultado da votação foi 3:2 a favor da proposta.', TRUE, 'Correto! Os dois pontos podem ser usados para indicar proporções ou resultados numéricos.'),
    (exercicios_ids[5], 'A proporção: foi calculada incorretamente.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[5], 'O matemático explicou: que a razão entre os números era importante.', FALSE, 'Incorreto! Após verbos como "explicar" seguidos de "que", não se usam dois pontos.');
    
    -- Inserir opções para o sexto exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[6], 'O trem parte às 15:45 e chega às 18:30.', TRUE, 'Correto! Os dois pontos são usados em horários para separar horas de minutos.'),
    (exercicios_ids[6], 'O expediente é das 8:00 às 17:00, de segunda a sexta-feira.', TRUE, 'Correto! Os dois pontos separam horas e minutos em indicações de horário.'),
    (exercicios_ids[6], 'A reunião está marcada para as 10:15 da manhã.', TRUE, 'Correto! Os dois pontos são usados para separar horas e minutos.'),
    (exercicios_ids[6], 'O relógio: marca exatamente meio-dia.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[6], 'Ele informou: que chegaria às 9h.', FALSE, 'Incorreto! Após verbos como "informar" seguidos de "que", não se usam dois pontos.');
    
    -- Inserir opções para o sétimo exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[7], 'Diretor: Carlos Mendes', TRUE, 'Correto! Em fichas técnicas, os dois pontos separam o título do item e seu conteúdo.'),
    (exercicios_ids[7], 'Elenco: Ana Silva, João Pereira, Maria Oliveira', TRUE, 'Correto! Os dois pontos separam a categoria dos nomes em fichas técnicas.'),
    (exercicios_ids[7], 'Duração: 120 minutos', TRUE, 'Correto! Os dois pontos separam o título do item e sua informação em fichas técnicas.'),
    (exercicios_ids[7], 'A ficha técnica: contém informações importantes sobre o filme.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[7], 'O produtor informou: que o orçamento era limitado.', FALSE, 'Incorreto! Após verbos como "informar" seguidos de "que", não se usam dois pontos.');
    
    -- Inserir opções para o oitavo exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[8], 'A correspondência entre os itens é a seguinte: A → 1, B → 2, C → 3.', TRUE, 'Correto! Os dois pontos podem indicar uma relação de correspondência entre elementos.'),
    (exercicios_ids[8], 'Classificação dos alimentos: Proteínas – carnes e ovos; Carboidratos – pães e massas; Gorduras – óleos e manteiga.', TRUE, 'Correto! Os dois pontos introduzem uma relação de correspondência entre categorias e exemplos.'),
    (exercicios_ids[8], 'Para cada país, sua respectiva capital: Brasil – Brasília; Argentina – Buenos Aires; Chile – Santiago.', TRUE, 'Correto! Os dois pontos introduzem uma relação de correspondência entre elementos relacionados.'),
    (exercicios_ids[8], 'A correspondência: foi estabelecida com base em critérios técnicos.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[8], 'O professor explicou: que há uma correspondência entre os conceitos.', FALSE, 'Incorreto! Após verbos como "explicar" seguidos de "que", não se usam dois pontos.');
    
    -- Inserir opções para o nono exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[9], 'Nome: [preencha seu nome completo]', TRUE, 'Correto! Em formulários, os dois pontos são usados após o nome do campo a ser preenchido.'),
    (exercicios_ids[9], 'Data de nascimento: __/__/____', TRUE, 'Correto! Os dois pontos separam o nome do campo e o espaço para preenchimento em formulários.'),
    (exercicios_ids[9], 'Endereço: ______________________', TRUE, 'Correto! Os dois pontos são usados após o nome do campo em formulários.'),
    (exercicios_ids[9], 'O formulário: deve ser preenchido com letra legível.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[9], 'O candidato informou: que já havia preenchido o formulário.', FALSE, 'Incorreto! Após verbos como "informar" seguidos de "que", não se usam dois pontos.');
    
    -- Inserir opções para o décimo exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[10], 'A diferença entre os dois métodos é notável: o primeiro é mais eficiente, mas o segundo é mais econômico.', TRUE, 'Correto! Os dois pontos podem ser usados em contextos de comparação para introduzir os elementos comparados.'),
    (exercicios_ids[10], 'Compare os resultados: enquanto o grupo A teve 80% de aprovação, o grupo B alcançou apenas 60%.', TRUE, 'Correto! Os dois pontos introduzem elementos comparados em uma análise.'),
    (exercicios_ids[10], 'A escolha entre as duas opções deve considerar: a primeira oferece mais recursos, mas a segunda tem melhor custo-benefício.', TRUE, 'Correto! Os dois pontos introduzem elementos para comparação.'),
    (exercicios_ids[10], 'A comparação: foi realizada seguindo critérios objetivos.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[10], 'O estudo mostrou: que havia diferenças significativas entre os grupos.', FALSE, 'Incorreto! Após verbos como "mostrar" seguidos de "que", não se usam dois pontos.');
    
END $$;
