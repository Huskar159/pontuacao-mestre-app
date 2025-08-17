-- Script para criar opções para a Prova Final de Dois Pontos (Parte 1 - Questões 1-15)
DO $$
DECLARE
    exercicios_ids uuid[];
BEGIN
    -- Buscar IDs dos exercícios na ordem correta
    SELECT array_agg(id ORDER BY created_at) INTO exercicios_ids
    FROM exercises
    WHERE category_id = 'prova-dois-pontos';
    
    -- Questões 1-5 - Uso básico dos dois pontos
    
    -- Questão 1
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[1], 'O professor anunciou: "A prova será na próxima semana."', TRUE, 'Correto! Os dois pontos são usados antes de uma citação direta.'),
    (exercicios_ids[1], 'Vamos precisar de três ingredientes: farinha, ovos e leite.', TRUE, 'Correto! Os dois pontos são usados antes de uma enumeração.'),
    (exercicios_ids[1], 'A conclusão é evidente: precisamos mudar nossa estratégia.', TRUE, 'Correto! Os dois pontos introduzem uma explicação ou conclusão.'),
    (exercicios_ids[1], 'Ela chegou cedo: e começou a trabalhar imediatamente.', FALSE, 'Incorreto! Não se usa dois pontos antes de conjunções como "e".'),
    (exercicios_ids[1], 'O livro: foi escrito por um autor renomado.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.');
    
    -- Questão 2
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[2], 'O motivo é simples: não tivemos tempo suficiente para concluir o projeto.', TRUE, 'Correto! Os dois pontos introduzem uma explicação.'),
    (exercicios_ids[2], 'A situação ficou clara: precisávamos de ajuda profissional.', TRUE, 'Correto! Os dois pontos introduzem uma explicação ou esclarecimento.'),
    (exercicios_ids[2], 'O diagnóstico foi preciso: o paciente estava com uma infecção leve.', TRUE, 'Correto! Os dois pontos introduzem uma explicação ou detalhamento.'),
    (exercicios_ids[2], 'Maria: estava muito cansada após o trabalho.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[2], 'Ele explicou: que não poderia comparecer à reunião.', FALSE, 'Incorreto! Após verbos dicendi seguidos de "que", não se usam dois pontos.');
    
    -- Questão 3
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[3], 'João perguntou: "Que horas são?"', TRUE, 'Correto! Os dois pontos são usados antes de falas em diálogos.'),
    (exercicios_ids[3], 'Maria respondeu: "São duas horas."', TRUE, 'Correto! Os dois pontos introduzem a fala em um diálogo.'),
    (exercicios_ids[3], 'O policial ordenou: "Pare imediatamente!"', TRUE, 'Correto! Os dois pontos introduzem uma fala ou ordem direta.'),
    (exercicios_ids[3], 'Ana disse: que chegaria mais tarde.', FALSE, 'Incorreto! Após verbos dicendi seguidos de "que", não se usam dois pontos.'),
    (exercicios_ids[3], 'O professor: "A aula terminou."', FALSE, 'Incorreto! Falta um verbo de elocução antes dos dois pontos.');
    
    -- Questão 4
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[4], 'Precisamos dos seguintes materiais: papel, canetas e cola.', TRUE, 'Correto! Os dois pontos são usados antes de uma enumeração, após um termo anunciador.'),
    (exercicios_ids[4], 'Os países mais populosos do mundo são: China, Índia e Estados Unidos.', TRUE, 'Correto! Os dois pontos introduzem uma enumeração após o verbo "são".'),
    (exercicios_ids[4], 'O relatório inclui três seções: introdução, desenvolvimento e conclusão.', TRUE, 'Correto! Os dois pontos introduzem uma enumeração.'),
    (exercicios_ids[4], 'Os estudantes: João, Maria e Pedro fizeram o trabalho.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito de seus elementos.'),
    (exercicios_ids[4], 'Ela foi para: a escola, o shopping e a casa da amiga.', FALSE, 'Incorreto! Não se usa dois pontos após preposição.');
    
    -- Questão 5
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[5], 'O autor escreveu: "A literatura é o reflexo da sociedade."', TRUE, 'Correto! Os dois pontos são usados antes de citações diretas.'),
    (exercicios_ids[5], 'Como dizia minha avó: "Mais vale um pássaro na mão do que dois voando."', TRUE, 'Correto! Os dois pontos introduzem uma citação ou provérbio.'),
    (exercicios_ids[5], 'A mensagem no quadro dizia: "Reunião cancelada."', TRUE, 'Correto! Os dois pontos introduzem uma citação de um texto escrito.'),
    (exercicios_ids[5], 'Ela afirmou: que terminaria o trabalho no prazo.', FALSE, 'Incorreto! Após verbos dicendi seguidos de "que", não se usam dois pontos.'),
    (exercicios_ids[5], 'A citação: foi retirada de um livro famoso.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.');
    
    -- Questões 6-10 - Enumerações e listagens
    
    -- Questão 6
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[6], 'A receita requer os seguintes ingredientes: farinha, açúcar, ovos e leite.', TRUE, 'Correto! Os dois pontos são usados antes de uma listagem, após um termo anunciador.'),
    (exercicios_ids[6], 'Os documentos necessários são: RG, CPF e comprovante de residência.', TRUE, 'Correto! Os dois pontos introduzem uma listagem após o verbo "são".'),
    (exercicios_ids[6], 'Atenção aos itens obrigatórios: capacete, luvas e óculos de proteção.', TRUE, 'Correto! Os dois pontos introduzem uma listagem após um termo anunciador.'),
    (exercicios_ids[6], 'Os alunos: devem trazer o material completo.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[6], 'Ela trouxe: para a festa um bolo e refrigerantes.', FALSE, 'Incorreto! Não se usa dois pontos após o verbo seguido de preposição.');
    
    -- Questão 7
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[7], 'O processo de fabricação segue estas etapas: preparação, montagem, teste e embalagem.', TRUE, 'Correto! Os dois pontos introduzem uma enumeração de passos após um termo anunciador.'),
    (exercicios_ids[7], 'Para se inscrever, siga os passos: preencha o formulário, anexe os documentos e efetue o pagamento.', TRUE, 'Correto! Os dois pontos introduzem uma enumeração de passos ou etapas.'),
    (exercicios_ids[7], 'O método científico envolve: observação, hipótese, experimentação e conclusão.', TRUE, 'Correto! Os dois pontos introduzem uma enumeração de etapas.'),
    (exercicios_ids[7], 'Os pesquisadores: identificaram várias etapas no processo.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[7], 'Ele mostrou: para os participantes as etapas do projeto.', FALSE, 'Incorreto! Não se usa dois pontos após o verbo seguido de preposição.');
    
    -- Questão 8
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[8], 'Durante a viagem, visitamos várias cidades: Paris, Roma, Barcelona e Amsterdã.', TRUE, 'Correto! Os dois pontos são usados antes de uma sequência de itens.'),
    (exercicios_ids[8], 'A biblioteca adquiriu novos livros: romances, biografias, estudos científicos e dicionários.', TRUE, 'Correto! Os dois pontos introduzem uma sequência de itens.'),
    (exercicios_ids[8], 'O currículo incluirá quatro disciplinas principais: matemática, português, ciências e história.', TRUE, 'Correto! Os dois pontos introduzem uma sequência de itens após um termo anunciador.'),
    (exercicios_ids[8], 'Os produtos: chegaram danificados.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[8], 'Ela viajou para: vários países da Europa.', FALSE, 'Incorreto! Não se usa dois pontos após preposição.');
    
    -- Questão 9
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[9], 'Grandes escritores brasileiros influenciaram sua obra: Machado de Assis, Clarice Lispector e Guimarães Rosa.', TRUE, 'Correto! Os dois pontos são usados para introduzir exemplos que ilustram uma ideia.'),
    (exercicios_ids[9], 'Existem vários benefícios nessa prática: aumento da produtividade, redução do estresse e melhoria da saúde.', TRUE, 'Correto! Os dois pontos introduzem exemplos que ilustram uma ideia.'),
    (exercicios_ids[9], 'A empresa investe em diversas áreas: tecnologia, educação e meio ambiente.', TRUE, 'Correto! Os dois pontos introduzem exemplos de áreas de investimento.'),
    (exercicios_ids[9], 'Os exemplos: foram citados no artigo científico.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[9], 'O professor citou: durante a aula, vários exemplos práticos.', FALSE, 'Incorreto! Não se usa dois pontos após o verbo dessa forma.');
    
    -- Questão 10
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[10], 'Para montar o móvel, siga estes requisitos: superfície plana, ferramentas adequadas e pelo menos duas pessoas.', TRUE, 'Correto! Os dois pontos são usados para introduzir uma lista de requisitos após um termo anunciador.'),
    (exercicios_ids[10], 'Os pré-requisitos para a inscrição são: idade mínima de 18 anos, ensino médio completo e conhecimentos básicos de informática.', TRUE, 'Correto! Os dois pontos introduzem uma lista de requisitos após o verbo "são".'),
    (exercicios_ids[10], 'Atenção às exigências: documentação completa, formulário preenchido e taxa paga.', TRUE, 'Correto! Os dois pontos introduzem uma lista de requisitos após um termo anunciador.'),
    (exercicios_ids[10], 'Os requisitos: foram estabelecidos pela comissão organizadora.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[10], 'Ela verificou: se todos os requisitos foram atendidos.', FALSE, 'Incorreto! Não se usa dois pontos antes de uma oração subordinada introduzida por "se".');
    
    -- Questões 11-15 - Citações e falas
    
    -- Questão 11
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[11], 'O diretor anunciou: "As férias começarão na próxima semana."', TRUE, 'Correto! Os dois pontos são usados antes de uma fala direta.'),
    (exercicios_ids[11], 'Ela gritou: "Socorro!"', TRUE, 'Correto! Os dois pontos introduzem uma fala direta, mesmo que seja apenas uma palavra.'),
    (exercicios_ids[11], 'O médico aconselhou: "Procure descansar mais e beber bastante água."', TRUE, 'Correto! Os dois pontos introduzem uma fala direta após um verbo de elocução.'),
    (exercicios_ids[11], 'Ele comunicou: que haveria mudanças na empresa.', FALSE, 'Incorreto! Após verbos dicendi seguidos de "que", não se usam dois pontos.'),
    (exercicios_ids[11], 'A mensagem: dizia que o prazo foi prorrogado.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.');
    
    -- Questão 12
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[12], 'Como dizia Sócrates: "Só sei que nada sei."', TRUE, 'Correto! Os dois pontos são usados antes de citações de autores.'),
    (exercicios_ids[12], 'Shakespeare escreveu em Hamlet: "Ser ou não ser, eis a questão."', TRUE, 'Correto! Os dois pontos introduzem uma citação de autor.'),
    (exercicios_ids[12], 'A frase célebre de Nelson Mandela diz: "A educação é a arma mais poderosa que você pode usar para mudar o mundo."', TRUE, 'Correto! Os dois pontos introduzem uma citação de autor após um termo anunciador.'),
    (exercicios_ids[12], 'O autor afirmou: que sua obra foi inspirada em fatos reais.', FALSE, 'Incorreto! Após verbos dicendi seguidos de "que", não se usam dois pontos.'),
    (exercicios_ids[12], 'A citação: foi tirada de contexto pelos críticos.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.');
    
    -- Questão 13
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[13], 'Romeu: "Por que és tu, Romeu?"', TRUE, 'Correto! Em textos teatrais, os dois pontos são usados após o nome da personagem para introduzir sua fala.'),
    (exercicios_ids[13], 'Narrador: "Enquanto isso, na casa ao lado..."', TRUE, 'Correto! Os dois pontos são usados após a indicação de quem fala em textos teatrais.'),
    (exercicios_ids[13], 'Julieta: "Ó Romeu, Romeu! Por que és tu, Romeu?"', TRUE, 'Correto! Os dois pontos são usados após o nome da personagem em textos teatrais.'),
    (exercicios_ids[13], 'A atriz: interpretou o papel principal.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[13], 'O diretor decidiu: que o espetáculo seria cancelado.', FALSE, 'Incorreto! Após verbos seguidos de "que", não se usam dois pontos.');
    
    -- Questão 14
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[14], 'Repórter: Como o senhor avalia o resultado das eleições?', TRUE, 'Correto! Em entrevistas, os dois pontos são usados após a indicação de quem fala.'),
    (exercicios_ids[14], 'Entrevistado: "Considero que foi um processo democrático."', TRUE, 'Correto! Os dois pontos introduzem as falas em entrevistas após a indicação de quem fala.'),
    (exercicios_ids[14], 'A jornalista perguntou: "Quais são seus projetos futuros?"', TRUE, 'Correto! Os dois pontos introduzem perguntas em entrevistas após verbos de elocução.'),
    (exercicios_ids[14], 'O entrevistador: fez perguntas polêmicas.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[14], 'Ela respondeu: que estava satisfeita com os resultados.', FALSE, 'Incorreto! Após verbos dicendi seguidos de "que", não se usam dois pontos.');
    
    -- Questão 15
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[15], 'Maria olhou para o céu e pensou: "Parece que vai chover."', TRUE, 'Correto! Os dois pontos são usados para introduzir diálogos narrativos ou pensamentos de personagens.'),
    (exercicios_ids[15], 'O protagonista observou a cena e concluiu: "Algo está errado aqui."', TRUE, 'Correto! Os dois pontos introduzem pensamentos ou conclusões de personagens em narrativas.'),
    (exercicios_ids[15], 'João chegou em casa, olhou ao redor e exclamou: "Que bagunça!"', TRUE, 'Correto! Os dois pontos introduzem falas de personagens em narrativas.'),
    (exercicios_ids[15], 'A personagem: caminhou lentamente até a janela.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado em narrativas.'),
    (exercicios_ids[15], 'O narrador descreveu: que a cidade estava deserta.', FALSE, 'Incorreto! Após verbos seguidos de "que", não se usam dois pontos.');
    
END $$;
