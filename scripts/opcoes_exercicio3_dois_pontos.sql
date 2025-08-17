-- Script para criar opções para os exercícios de Dois Pontos - Exercício 3
DO $$
DECLARE
    exercicios_ids uuid[];
BEGIN
    -- Buscar IDs dos exercícios na ordem correta
    SELECT array_agg(id ORDER BY created_at) INTO exercicios_ids
    FROM exercises
    WHERE category_id = 'dois-pontos-3';
    
    -- Inserir opções para o primeiro exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[1], 'O professor afirmou: "A prova será na próxima semana."', TRUE, 'Correto! Os dois pontos são usados antes de uma citação direta, especialmente após verbos dicendi (verbos de dizer).'),
    (exercicios_ids[1], 'Suas últimas palavras foram: "Voltarei em breve."', TRUE, 'Correto! Os dois pontos introduzem uma citação direta.'),
    (exercicios_ids[1], 'O aviso na porta dizia: "Fechado para almoço. Voltamos às 14h."', TRUE, 'Correto! Os dois pontos introduzem uma citação de um texto escrito.'),
    (exercicios_ids[1], 'Ele disse: que viria mais tarde.', FALSE, 'Incorreto! Após verbos dicendi seguidos de "que", não se usam dois pontos, mas vírgula ou nada.'),
    (exercicios_ids[1], 'A notícia: "O presidente renunciou" surpreendeu a todos.', FALSE, 'Incorreto! Não se deve usar dois pontos entre o sujeito e o resto da oração.');
    
    -- Inserir opções para o segundo exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[2], 'João exclamou: "Conseguimos!"', TRUE, 'Correto! Os dois pontos são usados para introduzir falas de personagens.'),
    (exercicios_ids[2], 'A mãe perguntou: "Onde você estava?"', TRUE, 'Correto! Os dois pontos introduzem a fala de um personagem em narrativas.'),
    (exercicios_ids[2], 'Maria suspirou e disse: "Estou cansada."', TRUE, 'Correto! Os dois pontos introduzem a fala de um personagem após um verbo de elocução.'),
    (exercicios_ids[2], 'O garoto: "Quero chocolate" insistia sem parar.', FALSE, 'Incorreto! Falta um verbo de elocução antes dos dois pontos.'),
    (exercicios_ids[2], 'Ana disse: que estava com fome.', FALSE, 'Incorreto! Após verbos dicendi seguidos de "que", não se usam dois pontos.');
    
    -- Inserir opções para o terceiro exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[3], 'Como afirmou Aristóteles: "Somos aquilo que fazemos repetidamente."', TRUE, 'Correto! Os dois pontos são usados antes de citações de autores.'),
    (exercicios_ids[3], 'Shakespeare escreveu: "Ser ou não ser, eis a questão."', TRUE, 'Correto! Os dois pontos introduzem citações de autores.'),
    (exercicios_ids[3], 'O filósofo concluiu: "A vida não examinada não vale a pena ser vivida."', TRUE, 'Correto! Os dois pontos introduzem citações de autores após verbos de elocução.'),
    (exercicios_ids[3], 'Segundo Machado de Assis: que a realidade supera a imaginação.', FALSE, 'Incorreto! Após expressões como "segundo" seguidas de "que", não se usam dois pontos.'),
    (exercicios_ids[3], 'A citação: "Conhece-te a ti mesmo" é atribuída a Sócrates.', FALSE, 'Incorreto! Não se deve usar dois pontos entre o sujeito e o predicado.');
    
    -- Inserir opções para o quarto exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[4], 'Carlos perguntou: "Quando você vai voltar?"', TRUE, 'Correto! Os dois pontos são usados em diálogos para indicar a fala que se segue.'),
    (exercicios_ids[4], 'Ana: "Amanhã de manhã."', TRUE, 'Correto! Em diálogos estruturados, pode-se usar os dois pontos após o nome da pessoa que fala.'),
    (exercicios_ids[4], 'O garçom se aproximou e perguntou: "Os senhores já escolheram?"', TRUE, 'Correto! Os dois pontos introduzem falas em diálogos após verbos de elocução.'),
    (exercicios_ids[4], 'Ele disse: que não iria à festa.', FALSE, 'Incorreto! Após verbos dicendi seguidos de "que", não se usam dois pontos.'),
    (exercicios_ids[4], 'A menina: sorriu e respondeu à pergunta.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.');
    
    -- Inserir opções para o quinto exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[5], 'Pedro pensou consigo mesmo: "Preciso estudar mais."', TRUE, 'Correto! Os dois pontos podem introduzir pensamentos diretos de personagens.'),
    (exercicios_ids[5], 'Ela refletiu por um momento e pensou: "Esta é a decisão certa."', TRUE, 'Correto! Os dois pontos introduzem pensamentos diretos após verbos que indicam reflexão.'),
    (exercicios_ids[5], 'O protagonista olhou para o céu estrelado e pensou: "Como o universo é vasto!"', TRUE, 'Correto! Os dois pontos introduzem pensamentos diretos de personagens em narrativas.'),
    (exercicios_ids[5], 'Maria pensou: que seria melhor esperar.', FALSE, 'Incorreto! Após verbos de pensamento seguidos de "que", não se usam dois pontos.'),
    (exercicios_ids[5], 'O pensamento: "A vida é breve" não saía da sua cabeça.', FALSE, 'Incorreto! Não se deve usar dois pontos entre o sujeito e o predicado.');
    
    -- Inserir opções para o sexto exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[6], 'Repórter: Qual sua opinião sobre a nova lei?', TRUE, 'Correto! Em entrevistas, os dois pontos são usados após a indicação de quem fala.'),
    (exercicios_ids[6], 'Entrevistado: "Acredito que será benéfica para todos."', TRUE, 'Correto! Os dois pontos introduzem as falas em entrevistas após a indicação de quem fala.'),
    (exercicios_ids[6], 'O jornalista perguntou: "Como surgiu a ideia para seu novo livro?"', TRUE, 'Correto! Os dois pontos introduzem perguntas em entrevistas após verbos de elocução.'),
    (exercicios_ids[6], 'O entrevistador: fez várias perguntas polêmicas.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.'),
    (exercicios_ids[6], 'Ela respondeu: que estava satisfeita com os resultados.', FALSE, 'Incorreto! Após verbos dicendi seguidos de "que", não se usam dois pontos.');
    
    -- Inserir opções para o sétimo exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[7], 'A ata registra: "A reunião foi encerrada às 17h."', TRUE, 'Correto! Os dois pontos são usados antes de transcrições de falas ou textos.'),
    (exercicios_ids[7], 'A gravação revelou as palavras exatas: "Não concordo com essa proposta."', TRUE, 'Correto! Os dois pontos introduzem transcrições de falas.'),
    (exercicios_ids[7], 'O documento oficial afirma: "Todos os cidadãos têm direitos iguais perante a lei."', TRUE, 'Correto! Os dois pontos são usados antes de transcrições de textos oficiais.'),
    (exercicios_ids[7], 'O advogado transcreveu: que o réu estava ausente no momento do crime.', FALSE, 'Incorreto! Após verbos seguidos de "que", não se usam dois pontos.'),
    (exercicios_ids[7], 'A transcrição: foi feita com precisão.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado.');
    
    -- Inserir opções para o oitavo exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[8], 'O professor anunciou: "As notas serão divulgadas amanhã."', TRUE, 'Correto! Os dois pontos introduzem o discurso direto.'),
    (exercicios_ids[8], 'A mãe ordenou: "Arrume seu quarto agora mesmo!"', TRUE, 'Correto! Os dois pontos introduzem o discurso direto após verbos de elocução.'),
    (exercicios_ids[8], 'O médico explicou: "Você precisa fazer repouso por uma semana."', TRUE, 'Correto! Os dois pontos introduzem o discurso direto após verbos de elocução.'),
    (exercicios_ids[8], 'Ele contou: que havia viajado para o exterior.', FALSE, 'Incorreto! Após verbos dicendi seguidos de "que", não se usam dois pontos.'),
    (exercicios_ids[8], 'O aviso: "Proibido fumar" estava afixado na parede.', FALSE, 'Incorreto! Não se deve usar dois pontos entre o sujeito e o resto da oração.');
    
    -- Inserir opções para o nono exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[9], 'Hamlet: "Ser ou não ser, eis a questão."', TRUE, 'Correto! Em textos teatrais, os dois pontos são usados após o nome da personagem para introduzir sua fala.'),
    (exercicios_ids[9], 'Romeu: "Por que és tu, Romeu?"', TRUE, 'Correto! Os dois pontos são usados após o nome da personagem em textos teatrais.'),
    (exercicios_ids[9], 'Narrador: "Anos se passaram até que eles se reencontrassem."', TRUE, 'Correto! Os dois pontos são usados após a indicação de quem fala em textos teatrais ou roteiros.'),
    (exercicios_ids[9], 'A personagem: entrou em cena lentamente.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado em descrições de ações.'),
    (exercicios_ids[9], 'O ator disse: que estava preparado para o papel.', FALSE, 'Incorreto! Após verbos dicendi seguidos de "que", não se usam dois pontos.');
    
    -- Inserir opções para o décimo exercício
    INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
    VALUES
    (exercicios_ids[10], 'O narrador continuou: "A escuridão tomava conta da floresta enquanto eles avançavam."', TRUE, 'Correto! Os dois pontos introduzem a fala do narrador em textos com diálogos.'),
    (exercicios_ids[10], 'Ana olhou para João e disse: "Não esperava te encontrar aqui."', TRUE, 'Correto! Os dois pontos introduzem a fala de personagens em narrações com diálogos.'),
    (exercicios_ids[10], 'O menino sorriu e respondeu: "Esse é o melhor presente que já ganhei!"', TRUE, 'Correto! Os dois pontos introduzem falas de personagens em narrativas após verbos de elocução.'),
    (exercicios_ids[10], 'O protagonista: caminhou lentamente até a porta.', FALSE, 'Incorreto! Não se deve usar dois pontos para separar o sujeito do predicado em narrativas.'),
    (exercicios_ids[10], 'Maria disse: que nunca havia estado naquele lugar.', FALSE, 'Incorreto! Após verbos dicendi seguidos de "que", não se usam dois pontos.');
    
END $$;
