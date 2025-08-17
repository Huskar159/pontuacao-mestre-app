-- Script para criar a Prova Final de Dois Pontos no Supabase (30 questões)

-- Inserir exercícios para a categoria 'prova-dois-pontos' (Prova Final)
INSERT INTO exercises (category_id, question, explanation, difficulty) VALUES
-- Questões 1-5 - Uso básico dos dois pontos
('prova-dois-pontos', 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente:', 'Os dois pontos são usados para introduzir explicações, citações, enumerações ou falas.', 3),
('prova-dois-pontos', 'Em qual das opções os dois pontos estão sendo usados adequadamente em uma explicação?', 'Os dois pontos podem introduzir explicações ou esclarecimentos.', 3),
('prova-dois-pontos', 'Qual alternativa apresenta o uso correto dos dois pontos em um diálogo?', 'Os dois pontos são usados antes de falas em diálogos.', 3),
('prova-dois-pontos', 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente em uma enumeração:', 'Os dois pontos são usados antes de enumerações, especialmente quando há um termo que a anuncia.', 3),
('prova-dois-pontos', 'Em qual frase os dois pontos cumprem corretamente sua função antes de uma citação?', 'Os dois pontos são usados antes de citações diretas.', 3),

-- Questões 6-10 - Enumerações e listagens
('prova-dois-pontos', 'Qual das opções apresenta os dois pontos corretamente empregados antes de uma listagem?', 'Os dois pontos são usados antes de listagens de itens.', 3),
('prova-dois-pontos', 'Identifique a alternativa em que os dois pontos introduzem adequadamente uma enumeração de passos:', 'Os dois pontos podem introduzir uma enumeração de passos ou etapas.', 3),
('prova-dois-pontos', 'Em qual frase os dois pontos estão sendo usados corretamente antes de uma sequência de itens?', 'Os dois pontos são usados antes de sequências de itens.', 3),
('prova-dois-pontos', 'Qual alternativa apresenta o uso correto dos dois pontos antes de uma série de exemplos?', 'Os dois pontos são usados para introduzir exemplos que ilustram uma ideia.', 3),
('prova-dois-pontos', 'Identifique a frase em que os dois pontos estão adequadamente empregados em uma lista de requisitos:', 'Os dois pontos podem ser usados para introduzir listas de requisitos.', 3),

-- Questões 11-15 - Citações e falas
('prova-dois-pontos', 'Em qual opção os dois pontos estão sendo usados corretamente antes de uma fala direta?', 'Os dois pontos são usados antes de falas diretas.', 3),
('prova-dois-pontos', 'Identifique a alternativa em que os dois pontos introduzem adequadamente uma citação de autor:', 'Os dois pontos são usados antes de citações de autores.', 3),
('prova-dois-pontos', 'Qual frase apresenta o uso correto dos dois pontos em um texto teatral?', 'Em textos teatrais, os dois pontos são usados após o nome da personagem para introduzir sua fala.', 3),
('prova-dois-pontos', 'Em qual das opções os dois pontos estão sendo usados adequadamente em uma entrevista?', 'Em entrevistas, os dois pontos introduzem as falas dos entrevistados.', 3),
('prova-dois-pontos', 'Identifique a frase em que os dois pontos estão corretamente empregados em um diálogo narrativo:', 'Em diálogos narrativos, os dois pontos introduzem as falas dos personagens.', 3),

-- Questões 16-20 - Explicações e esclarecimentos
('prova-dois-pontos', 'Qual alternativa apresenta o uso correto dos dois pontos para introduzir uma explicação?', 'Os dois pontos são usados para introduzir explicações ou esclarecimentos.', 3),
('prova-dois-pontos', 'Em qual frase os dois pontos estão adequadamente empregados antes de um esclarecimento?', 'Os dois pontos introduzem esclarecimentos do que foi dito anteriormente.', 3),
('prova-dois-pontos', 'Identifique a alternativa em que os dois pontos introduzem corretamente uma conclusão:', 'Os dois pontos podem ser usados para introduzir conclusões.', 3),
('prova-dois-pontos', 'Qual das opções apresenta os dois pontos corretamente usados para introduzir uma consequência?', 'Os dois pontos podem introduzir consequências.', 3),
('prova-dois-pontos', 'Em qual frase os dois pontos estão sendo usados adequadamente em uma relação de causa e efeito?', 'Os dois pontos podem ser usados em relações de causa e efeito.', 3),

-- Questões 21-25 - Casos especiais
('prova-dois-pontos', 'Identifique a alternativa em que os dois pontos estão sendo usados corretamente em um texto jurídico:', 'Em textos jurídicos, os dois pontos são usados para introduzir explicações ou enumerações formais.', 3),
('prova-dois-pontos', 'Em qual opção os dois pontos estão adequadamente empregados em uma referência bibliográfica?', 'Em referências bibliográficas, os dois pontos podem separar o título principal do subtítulo.', 3),
('prova-dois-pontos', 'Qual frase apresenta o uso correto dos dois pontos em horários?', 'Os dois pontos são usados em horários para separar horas de minutos.', 3),
('prova-dois-pontos', 'Em qual das alternativas os dois pontos estão sendo usados corretamente em um formulário?', 'Em formulários, os dois pontos são usados após o nome do campo a ser preenchido.', 3),
('prova-dois-pontos', 'Identifique a frase em que os dois pontos estão adequadamente empregados em uma definição:', 'Os dois pontos são usados em definições, especialmente em dicionários e glossários.', 3),

-- Questões 26-30 - Usos em contextos variados
('prova-dois-pontos', 'Qual alternativa apresenta o uso correto dos dois pontos em um anúncio?', 'Em anúncios, os dois pontos podem introduzir informações destacadas.', 3),
('prova-dois-pontos', 'Em qual frase os dois pontos estão sendo usados adequadamente em uma receita culinária?', 'Em receitas culinárias, os dois pontos podem separar o nome do prato dos ingredientes ou o modo de preparo.', 3),
('prova-dois-pontos', 'Identifique a alternativa em que os dois pontos estão corretamente empregados em um e-mail formal:', 'Em e-mails formais, os dois pontos podem ser usados após a saudação.', 3),
('prova-dois-pontos', 'Qual das opções apresenta os dois pontos usados corretamente em uma bula de remédio?', 'Em bulas de remédios, os dois pontos podem introduzir informações importantes.', 3),
('prova-dois-pontos', 'Em qual frase os dois pontos estão sendo usados adequadamente em uma notícia jornalística?', 'Em notícias jornalísticas, os dois pontos podem introduzir declarações ou explicações importantes.', 3);
