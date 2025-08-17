-- Script para criar opções para a Prova Final de Dois Pontos (Parte 2 - Questões 16-30)
DO $$
DECLARE
    exercicios_ids uuid[];
BEGIN
    -- Buscar IDs dos exercícios na ordem correta
    SELECT array_agg(id ORDER BY created_at) INTO exercicios_ids
    FROM exercises
    WHERE category_id = 'prova-dois-pontos';
    
    -- Questões 16-20 - Explicações e esclarecimentos
    
    -- Questão 16
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[16], 'A situação é clara: precisamos rever todo o projeto.', TRUE, 'Correto! Os dois pontos são usados para introduzir uma explicação.'),
    (exercicios_ids[16], 'O problema é evidente: falta comunicação entre os departamentos.', TRUE, 'Correto! Os dois pontos introduzem uma explicação sobre o problema mencionado.'),
    (exercicios_ids[16], 'Chegamos a uma conclusão óbvia: o sistema precisa ser atualizado.', TRUE, 'Correto! Os dois pontos introduzem uma explicação ou conclusão.'),
    (exercicios_ids[16], 'A empresa: precisa melhorar seus processos internos.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[16], 'Ele explicou: que o procedimento era complexo.', FALSE, 'Incorreto! Após verbos como "explicar" seguidos de "que", não se usam dois pontos.');
    
    -- Questão 17
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[17], 'Um detalhe importante a ser esclarecido: os pagamentos devem ser feitos até dia 10.', TRUE, 'Correto! Os dois pontos são usados para introduzir um esclarecimento.'),
    (exercicios_ids[17], 'É preciso deixar claro: o prazo de inscrição não será prorrogado.', TRUE, 'Correto! Os dois pontos introduzem um esclarecimento sobre uma informação importante.'),
    (exercicios_ids[17], 'Uma observação necessária: todos os documentos devem estar autenticados.', TRUE, 'Correto! Os dois pontos introduzem um esclarecimento ou observação importante.'),
    (exercicios_ids[17], 'O aviso: foi ignorado por muitos funcionários.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[17], 'Ela esclareceu: que haveria mudanças no cronograma.', FALSE, 'Incorreto! Após verbos como "esclarecer" seguidos de "que", não se usam dois pontos.');
    
    -- Questão 18
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[18], 'Após analisar os dados, chegamos a uma conclusão: o mercado está em recuperação.', TRUE, 'Correto! Os dois pontos são usados para introduzir uma conclusão.'),
    (exercicios_ids[18], 'Os resultados da pesquisa apontam para uma direção: precisamos mudar nossa abordagem.', TRUE, 'Correto! Os dois pontos introduzem uma conclusão baseada em informações anteriores.'),
    (exercicios_ids[18], 'A análise dos fatos nos leva a concluir: houve falha no processo de controle.', TRUE, 'Correto! Os dois pontos introduzem uma conclusão após um termo anunciador.'),
    (exercicios_ids[18], 'A conclusão: foi apresentada no relatório final.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[18], 'Os cientistas concluíram: que o experimento foi um sucesso.', FALSE, 'Incorreto! Após verbos como "concluir" seguidos de "que", não se usam dois pontos.');
    
    -- Questão 19
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[19], 'O atraso no pagamento resultou em uma consequência: a empresa foi incluída na lista de inadimplentes.', TRUE, 'Correto! Os dois pontos são usados para introduzir uma consequência.'),
    (exercicios_ids[19], 'A falta de manutenção regular teve um efeito previsível: o equipamento quebrou.', TRUE, 'Correto! Os dois pontos introduzem uma consequência de uma situação mencionada.'),
    (exercicios_ids[19], 'Anos de desmatamento geraram um resultado devastador: várias espécies estão ameaçadas de extinção.', TRUE, 'Correto! Os dois pontos introduzem uma consequência ou resultado.'),
    (exercicios_ids[19], 'A consequência: foi mais grave do que esperávamos.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[19], 'Ele previu: que as consequências seriam graves.', FALSE, 'Incorreto! Após verbos como "prever" seguidos de "que", não se usam dois pontos.');
    
    -- Questão 20
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[20], 'A relação entre os fatores é evidente: quanto maior o investimento, maior o retorno.', TRUE, 'Correto! Os dois pontos são usados em relações de causa e efeito.'),
    (exercicios_ids[20], 'O princípio físico é simples: a toda ação corresponde uma reação.', TRUE, 'Correto! Os dois pontos introduzem uma relação de causa e efeito ou um princípio.'),
    (exercicios_ids[20], 'A regra econômica básica funciona assim: quando a oferta diminui, o preço aumenta.', TRUE, 'Correto! Os dois pontos introduzem uma relação de causa e efeito.'),
    (exercicios_ids[20], 'A relação: foi estabelecida após anos de estudo.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[20], 'Os cientistas descobriram: que existe uma relação direta entre as variáveis.', FALSE, 'Incorreto! Após verbos como "descobrir" seguidos de "que", não se usam dois pontos.');
    
    -- Questões 21-25 - Casos especiais
    
    -- Questão 21
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[21], 'Considerando: I - que a lei determina o prazo máximo; II - que o solicitante atendeu aos requisitos; defere-se o pedido.', TRUE, 'Correto! Em textos jurídicos, os dois pontos são usados para introduzir considerações ou fundamentações.'),
    (exercicios_ids[21], 'Art. 7º: São direitos dos trabalhadores urbanos e rurais, além de outros que visem à melhoria de sua condição social.', TRUE, 'Correto! Em textos jurídicos, os dois pontos podem ser usados após a numeração de artigos.'),
    (exercicios_ids[21], 'O juiz sentenciou: "Julgo procedente o pedido conforme fundamentação exposta."', TRUE, 'Correto! Os dois pontos são usados para introduzir a decisão ou fala de autoridades.'),
    (exercicios_ids[21], 'A lei: determina que todos são iguais perante a justiça.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[21], 'O advogado argumentou: que seu cliente agiu em legítima defesa.', FALSE, 'Incorreto! Após verbos como "argumentar" seguidos de "que", não se usam dois pontos.');
    
    -- Questão 22
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[22], 'MACHADO, Assis. Memórias póstumas de Brás Cubas: texto integral. São Paulo: Ática, 2019.', TRUE, 'Correto! Em referências bibliográficas, os dois pontos podem separar o título principal do subtítulo.'),
    (exercicios_ids[22], 'SILVA, João. A era digital: desafios e oportunidades. Rio de Janeiro: Nova Fronteira, 2022.', TRUE, 'Correto! Os dois pontos separam o título do subtítulo em referências bibliográficas.'),
    (exercicios_ids[22], 'São Paulo: Companhia das Letras, 2021.', TRUE, 'Correto! Os dois pontos são usados para separar a cidade da editora em referências bibliográficas.'),
    (exercicios_ids[22], 'A referência: foi citada incorretamente no texto.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[22], 'O autor escreveu: que a obra foi baseada em fatos reais.', FALSE, 'Incorreto! Após verbos como "escrever" seguidos de "que", não se usam dois pontos.');
    
    -- Questão 23
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[23], 'A reunião está marcada para 14:30.', TRUE, 'Correto! Os dois pontos são usados em horários para separar horas de minutos.'),
    (exercicios_ids[23], 'O voo parte às 08:45 e chega às 10:15.', TRUE, 'Correto! Os dois pontos separam horas e minutos em indicações de horário.'),
    (exercicios_ids[23], 'O expediente da loja é das 9:00 às 18:00.', TRUE, 'Correto! Os dois pontos são usados para separar horas e minutos.'),
    (exercicios_ids[23], 'O relógio: marca exatamente meio-dia.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[23], 'Ela informou: que chegaria às 20h.', FALSE, 'Incorreto! Após verbos como "informar" seguidos de "que", não se usam dois pontos.');
    
    -- Questão 24
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[24], 'Nome: ____________________', TRUE, 'Correto! Em formulários, os dois pontos são usados após o nome do campo a ser preenchido.'),
    (exercicios_ids[24], 'Endereço: ____________________', TRUE, 'Correto! Os dois pontos separam o nome do campo e o espaço para preenchimento em formulários.'),
    (exercicios_ids[24], 'Data de nascimento: __/__/____', TRUE, 'Correto! Os dois pontos são usados após o nome do campo em formulários.'),
    (exercicios_ids[24], 'O formulário: deve ser preenchido com letra legível.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[24], 'Ela informou: que já havia preenchido o formulário.', FALSE, 'Incorreto! Após verbos como "informar" seguidos de "que", não se usam dois pontos.');
    
    -- Questão 25
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[25], 'Fotossíntese: processo pelo qual as plantas produzem seu próprio alimento usando a luz solar.', TRUE, 'Correto! Os dois pontos são usados em definições, separando o termo de sua definição.'),
    (exercicios_ids[25], 'Democracia: sistema político em que o poder emana do povo.', TRUE, 'Correto! Os dois pontos introduzem a definição de um termo.'),
    (exercicios_ids[25], 'Algoritmo: conjunto de regras e procedimentos lógicos para a solução de um problema.', TRUE, 'Correto! Os dois pontos são usados em definições em contextos técnicos ou educacionais.'),
    (exercicios_ids[25], 'A definição: foi apresentada pelo professor.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[25], 'O cientista explicou: que a definição era provisória.', FALSE, 'Incorreto! Após verbos como "explicar" seguidos de "que", não se usam dois pontos.');
    
    -- Questões 26-30 - Usos em contextos variados
    
    -- Questão 26
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[26], 'Promoção imperdível: 50% de desconto em todos os produtos!', TRUE, 'Correto! Em anúncios, os dois pontos podem introduzir informações destacadas.'),
    (exercicios_ids[26], 'Atenção: grande liquidação de verão a partir de amanhã.', TRUE, 'Correto! Os dois pontos introduzem uma informação importante após um termo de alerta.'),
    (exercicios_ids[26], 'Oportunidade única: apartamentos com vista para o mar.', TRUE, 'Correto! Os dois pontos introduzem informações promocionais em anúncios.'),
    (exercicios_ids[26], 'O anúncio: foi publicado em vários jornais.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[26], 'A empresa informou: que faria uma promoção especial.', FALSE, 'Incorreto! Após verbos como "informar" seguidos de "que", não se usam dois pontos.');
    
    -- Questão 27
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[27], 'Bolo de Chocolate: 2 ovos, 1 xícara de açúcar, 1 xícara de chocolate em pó...', TRUE, 'Correto! Em receitas culinárias, os dois pontos podem separar o nome do prato dos ingredientes.'),
    (exercicios_ids[27], 'Modo de preparo: misture todos os ingredientes e leve ao forno por 30 minutos.', TRUE, 'Correto! Os dois pontos separam a seção da receita de seu conteúdo.'),
    (exercicios_ids[27], 'Ingredientes: farinha, açúcar, ovos e leite.', TRUE, 'Correto! Os dois pontos introduzem uma lista de ingredientes após um termo anunciador.'),
    (exercicios_ids[27], 'A receita: foi passada de geração em geração.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[27], 'O chef explicou: que o segredo está no tempero.', FALSE, 'Incorreto! Após verbos como "explicar" seguidos de "que", não se usam dois pontos.');
    
    -- Questão 28
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[28], 'Prezado cliente: Informamos que sua solicitação foi aprovada.', TRUE, 'Correto! Em e-mails formais, os dois pontos podem ser usados após a saudação.'),
    (exercicios_ids[28], 'Assunto: Confirmação de inscrição no evento', TRUE, 'Correto! Os dois pontos separam o campo "Assunto" de seu conteúdo em e-mails.'),
    (exercicios_ids[28], 'Atenciosamente: A Diretoria', TRUE, 'Correto! Os dois pontos podem ser usados após fórmulas de despedida em alguns contextos formais.'),
    (exercicios_ids[28], 'O e-mail: foi enviado para todos os funcionários.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[28], 'Ela escreveu: que responderia em breve.', FALSE, 'Incorreto! Após verbos como "escrever" seguidos de "que", não se usam dois pontos.');
    
    -- Questão 29
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[29], 'Posologia: Tomar um comprimido duas vezes ao dia.', TRUE, 'Correto! Em bulas de remédios, os dois pontos podem introduzir informações importantes.'),
    (exercicios_ids[29], 'Composição: cada comprimido contém 500mg de paracetamol.', TRUE, 'Correto! Os dois pontos separam a categoria da informação em bulas de remédios.'),
    (exercicios_ids[29], 'Efeitos colaterais: náusea, dor de cabeça e sonolência.', TRUE, 'Correto! Os dois pontos introduzem informações importantes em bulas após um termo anunciador.'),
    (exercicios_ids[29], 'O medicamento: deve ser mantido em local seco e fresco.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[29], 'O médico recomendou: que o paciente tomasse o remédio com água.', FALSE, 'Incorreto! Após verbos como "recomendar" seguidos de "que", não se usam dois pontos.');
    
    -- Questão 30
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[30], 'O presidente declarou durante a coletiva: "Não haverá aumento de impostos."', TRUE, 'Correto! Em notícias jornalísticas, os dois pontos são usados para introduzir declarações.'),
    (exercicios_ids[30], 'Último minuto: Governo anuncia novas medidas econômicas.', TRUE, 'Correto! Os dois pontos podem introduzir informações importantes em manchetes ou chamadas.'),
    (exercicios_ids[30], 'Pesquisa revela dado alarmante: 80% dos jovens não praticam atividades físicas regularmente.', TRUE, 'Correto! Os dois pontos introduzem dados ou informações importantes em notícias.'),
    (exercicios_ids[30], 'A reportagem: foi publicada na primeira página do jornal.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[30], 'O jornalista informou: que a entrevista seria ao vivo.', FALSE, 'Incorreto! Após verbos como "informar" seguidos de "que", não se usam dois pontos.');
    
END $$;
