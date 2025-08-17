-- Script para criar categorias e exercícios de Dois Pontos no Supabase (5 exercícios com 10 questões cada)

-- 1. Inserir categorias para os exercícios de dois pontos
INSERT INTO exercise_categories (id, title, description) VALUES
('dois-pontos', 'Dois Pontos - Exercício 1', 'Introdução ao uso dos dois pontos na língua portuguesa.'),
('dois-pontos-2', 'Dois Pontos - Exercício 2', 'Uso dos dois pontos em enumerações e listagens.'),
('dois-pontos-3', 'Dois Pontos - Exercício 3', 'Dois pontos antes de citações e falas diretas.'),
('dois-pontos-4', 'Dois Pontos - Exercício 4', 'Dois pontos em explicações e esclarecimentos.'),
('dois-pontos-5', 'Dois Pontos - Exercício 5', 'Casos especiais do uso dos dois pontos em diversos contextos.'),
('prova-dois-pontos', 'Prova Final de Dois Pontos', 'Avalie seu conhecimento sobre o uso dos dois pontos na língua portuguesa.');

-- 2. Inserir exercícios para a categoria 'dois-pontos' (Exercício 1)
INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
('dois-pontos', 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente:', 'Os dois pontos são usados para introduzir uma explicação, enumeração ou citação.', 1),
('dois-pontos', 'Em qual das opções os dois pontos indicam uma explicação?', 'Os dois pontos podem ser usados para introduzir uma explicação do que foi mencionado anteriormente.', 1),
('dois-pontos', 'Qual alternativa apresenta o uso correto dos dois pontos antes de uma enumeração?', 'Os dois pontos são usados antes de enumerações ou listagens.', 1),
('dois-pontos', 'Identifique a frase em que os dois pontos estão sendo usados corretamente antes de uma citação:', 'Os dois pontos são usados antes de citações diretas.', 1),
('dois-pontos', 'Em qual frase os dois pontos estão sendo usados corretamente antes de uma fala?', 'Os dois pontos são usados antes de falas de personagens.', 1),
('dois-pontos', 'Qual alternativa apresenta o uso correto dos dois pontos introduzindo um esclarecimento?', 'Os dois pontos podem ser usados para introduzir um esclarecimento ou explicação.', 1),
('dois-pontos', 'Identifique a opção em que os dois pontos estão sendo usados adequadamente em um texto informativo:', 'Os dois pontos são usados em textos informativos para introduzir explicações ou exemplos.', 1),
('dois-pontos', 'Em qual das frases os dois pontos estão sendo usados corretamente em um diálogo?', 'Os dois pontos são usados para introduzir falas em diálogos.', 1),
('dois-pontos', 'Qual das alternativas apresenta o uso correto dos dois pontos em um contexto de definição?', 'Os dois pontos são usados para introduzir definições.', 1),
('dois-pontos', 'Identifique a frase em que os dois pontos estão sendo usados corretamente em uma conclusão:', 'Os dois pontos podem ser usados para introduzir uma conclusão ou consequência.', 1);

-- 3. Inserir exercícios para a categoria 'dois-pontos-2' (Exercício 2)
INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
('dois-pontos-2', 'Em qual das opções os dois pontos estão sendo usados corretamente em uma enumeração?', 'Os dois pontos são usados antes de uma enumeração, especialmente quando há um termo que a anuncia.', 2),
('dois-pontos-2', 'Identifique a alternativa em que os dois pontos introduzem corretamente uma lista de itens:', 'Os dois pontos são usados para introduzir listas de itens.', 2),
('dois-pontos-2', 'Qual frase apresenta o uso correto dos dois pontos em uma enumeração de características?', 'Os dois pontos são usados para introduzir uma enumeração de características.', 2),
('dois-pontos-2', 'Em qual opção os dois pontos estão sendo usados adequadamente antes de uma sequência de elementos?', 'Os dois pontos são usados antes de uma sequência de elementos.', 2),
('dois-pontos-2', 'Identifique a alternativa em que os dois pontos introduzem corretamente uma série de ações:', 'Os dois pontos podem introduzir uma série de ações em sequência.', 2),
('dois-pontos-2', 'Qual das frases apresenta o uso correto dos dois pontos antes de uma listagem de tópicos?', 'Os dois pontos são usados para introduzir uma listagem de tópicos.', 2),
('dois-pontos-2', 'Em qual opção os dois pontos estão sendo usados corretamente antes de um detalhamento?', 'Os dois pontos são usados para introduzir um detalhamento do que foi mencionado antes.', 2),
('dois-pontos-2', 'Identifique a alternativa em que os dois pontos introduzem corretamente uma enumeração de exemplos:', 'Os dois pontos são usados para introduzir exemplos que ilustram uma ideia.', 2),
('dois-pontos-2', 'Qual frase apresenta o uso correto dos dois pontos em uma enumeração de passos ou etapas?', 'Os dois pontos são usados para introduzir uma sequência de passos ou etapas.', 2),
('dois-pontos-2', 'Em qual das opções os dois pontos estão sendo usados adequadamente em um cardápio ou lista de opções?', 'Os dois pontos podem ser usados em cardápios ou listas de opções para separar categorias de itens.', 2);

-- 4. Inserir exercícios para a categoria 'dois-pontos-3' (Exercício 3)
INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
('dois-pontos-3', 'Identifique a frase em que os dois pontos estão sendo usados corretamente antes de uma citação direta:', 'Os dois pontos são usados antes de citações diretas, especialmente quando há um verbo dicendi.', 3),
('dois-pontos-3', 'Em qual alternativa os dois pontos introduzem adequadamente uma fala de personagem?', 'Os dois pontos são usados para introduzir falas de personagens em narrativas e diálogos.', 3),
('dois-pontos-3', 'Qual opção apresenta o uso correto dos dois pontos antes de uma citação de autor?', 'Os dois pontos são usados antes de citações de autores, especialmente em textos acadêmicos.', 3),
('dois-pontos-3', 'Identifique a frase em que os dois pontos estão sendo usados corretamente em um diálogo:', 'Os dois pontos são usados em diálogos para indicar a fala que se segue.', 3),
('dois-pontos-3', 'Em qual das alternativas os dois pontos introduzem adequadamente um pensamento direto?', 'Os dois pontos podem introduzir pensamentos diretos de personagens.', 3),
('dois-pontos-3', 'Qual opção apresenta o uso correto dos dois pontos em uma entrevista?', 'Os dois pontos são usados em entrevistas para introduzir as falas do entrevistado.', 3),
('dois-pontos-3', 'Identifique a frase em que os dois pontos estão sendo usados corretamente antes de uma transcrição:', 'Os dois pontos são usados antes de transcrições de falas ou textos.', 3),
('dois-pontos-3', 'Em qual alternativa os dois pontos introduzem adequadamente um discurso direto?', 'Os dois pontos introduzem o discurso direto.', 3),
('dois-pontos-3', 'Qual opção apresenta o uso correto dos dois pontos em texto teatral?', 'Em textos teatrais, os dois pontos são usados após o nome da personagem para introduzir sua fala.', 3),
('dois-pontos-3', 'Identifique a frase em que os dois pontos estão sendo usados corretamente em uma narração com diálogo:', 'Em narrações com diálogos, os dois pontos introduzem a fala dos personagens.', 3);

-- 5. Inserir exercícios para a categoria 'dois-pontos-4' (Exercício 4)
INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
('dois-pontos-4', 'Em qual das opções os dois pontos introduzem adequadamente uma explicação?', 'Os dois pontos são usados para introduzir explicações ou esclarecimentos.', 4),
('dois-pontos-4', 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente antes de um esclarecimento:', 'Os dois pontos introduzem esclarecimentos do que foi dito anteriormente.', 4),
('dois-pontos-4', 'Qual frase apresenta o uso correto dos dois pontos ao apresentar uma causa ou razão?', 'Os dois pontos podem introduzir a causa ou razão de algo mencionado antes.', 4),
('dois-pontos-4', 'Em qual opção os dois pontos estão sendo usados adequadamente para introduzir uma conclusão?', 'Os dois pontos podem introduzir conclusões ou deduções lógicas.', 4),
('dois-pontos-4', 'Identifique a alternativa em que os dois pontos introduzem corretamente uma consequência:', 'Os dois pontos podem ser usados para introduzir consequências.', 4),
('dois-pontos-4', 'Qual das frases apresenta o uso correto dos dois pontos antes de uma análise?', 'Os dois pontos podem introduzir análises ou interpretações.', 4),
('dois-pontos-4', 'Em qual opção os dois pontos estão sendo usados corretamente antes de uma síntese?', 'Os dois pontos podem introduzir sínteses ou resumos.', 4),
('dois-pontos-4', 'Identifique a alternativa em que os dois pontos introduzem corretamente um comentário explicativo:', 'Os dois pontos são usados antes de comentários explicativos.', 4),
('dois-pontos-4', 'Qual frase apresenta o uso correto dos dois pontos em contexto de causa e efeito?', 'Os dois pontos podem ser usados em relações de causa e efeito.', 4),
('dois-pontos-4', 'Em qual das opções os dois pontos estão sendo usados adequadamente em uma definição?', 'Os dois pontos são usados em definições, especialmente em dicionários e glossários.', 4);

-- 6. Inserir exercícios para a categoria 'dois-pontos-5' (Exercício 5)
INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
('dois-pontos-5', 'Identifique a frase em que os dois pontos estão sendo usados corretamente em um texto jurídico:', 'Em textos jurídicos, os dois pontos são usados para introduzir explicações ou enumerações formais.', 5),
('dois-pontos-5', 'Em qual alternativa os dois pontos introduzem adequadamente o objeto de um requerimento?', 'Em requerimentos, os dois pontos podem introduzir o objeto ou assunto principal.', 5),
('dois-pontos-5', 'Qual opção apresenta o uso correto dos dois pontos em uma referência bibliográfica?', 'Em referências bibliográficas, os dois pontos podem separar o título principal do subtítulo.', 5),
('dois-pontos-5', 'Identifique a frase em que os dois pontos estão sendo usados corretamente em uma notícia:', 'Em notícias, os dois pontos podem introduzir declarações ou explicações importantes.', 5),
('dois-pontos-5', 'Em qual das alternativas os dois pontos introduzem adequadamente uma proporção matemática?', 'Em matemática, os dois pontos podem ser usados para indicar proporções ou razões.', 5),
('dois-pontos-5', 'Qual opção apresenta o uso correto dos dois pontos em horários?', 'Os dois pontos são usados em horários para separar horas de minutos.', 5),
('dois-pontos-5', 'Identifique a frase em que os dois pontos estão sendo usados corretamente em uma ficha técnica:', 'Em fichas técnicas, os dois pontos podem separar o título do item e seu conteúdo.', 5),
('dois-pontos-5', 'Em qual alternativa os dois pontos introduzem adequadamente uma relação de correspondência?', 'Os dois pontos podem indicar uma relação de correspondência entre elementos.', 5),
('dois-pontos-5', 'Qual opção apresenta o uso correto dos dois pontos em um formulário?', 'Em formulários, os dois pontos são usados após o nome do campo a ser preenchido.', 5),
('dois-pontos-5', 'Identifique a frase em que os dois pontos estão sendo usados corretamente em contexto de comparação:', 'Os dois pontos podem ser usados em contextos de comparação para introduzir os elementos comparados.', 5);
