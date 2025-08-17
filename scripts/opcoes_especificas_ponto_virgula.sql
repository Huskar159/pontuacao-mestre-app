-- Script para criar opções específicas para cada exercício de ponto e vírgula (exercícios 1-5)

-- Primeiro, vamos remover as opções genéricas existentes
DELETE FROM exercise_options 
WHERE exercise_id IN (
    SELECT id FROM exercises WHERE category_id LIKE 'ponto-virgula%'
);

-- Agora vamos inserir opções específicas para cada exercício

-- =========== EXERCÍCIO 1 ===========
-- Obter o ID do primeiro exercício de ponto e vírgula
DO $$
DECLARE
    exercicio1_id INTEGER;
BEGIN
    SELECT id INTO exercicio1_id FROM exercises 
    WHERE category_id = 'ponto-virgula' 
    ORDER BY id LIMIT 1;
    
    IF exercicio1_id IS NOT NULL THEN
        -- Inserir opções para o Exercício 1
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicio1_id, 'Ela estudou muito; conseguiu passar no vestibular.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar orações coordenadas que não estão ligadas por conjunção.'),
        (exercicio1_id, 'A reunião começou; às nove horas da manhã.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "começou" de seu complemento "às nove horas".'),
        (exercicio1_id, 'João; Maria e Pedro foram ao cinema.', FALSE, 'O ponto e vírgula está incorretamente usado em uma enumeração simples, onde deveria haver vírgula.'),
        (exercicio1_id, 'Ele saiu de casa portanto; estava atrasado.', FALSE, 'O ponto e vírgula está incorretamente posicionado após a conjunção "portanto".');
    END IF;
END $$;

-- =========== EXERCÍCIO 2 ===========
DO $$
DECLARE
    exercicio2_id INTEGER;
BEGIN
    SELECT id INTO exercicio2_id FROM exercises 
    WHERE category_id = 'ponto-virgula-2' 
    ORDER BY id LIMIT 1;
    
    IF exercicio2_id IS NOT NULL THEN
        -- Inserir opções para o Exercício 2
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicio2_id, 'Comprei vários itens: maçãs, peras e uvas frescas; pão, queijo e presunto; refrigerantes e sucos.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar itens em uma enumeração complexa onde os itens já contêm vírgulas.'),
        (exercicio2_id, 'Comprei vários itens: maçãs; peras e uvas frescas, pão, queijo e presunto, refrigerantes e sucos.', FALSE, 'O ponto e vírgula está sendo usado incorretamente dentro de um grupo de itens simples, onde deveria haver vírgula.'),
        (exercicio2_id, 'Comprei vários itens; maçãs, peras e uvas frescas, pão, queijo e presunto, refrigerantes e sucos.', FALSE, 'O ponto e vírgula está sendo usado incorretamente após "itens", onde deveria haver dois pontos.'),
        (exercicio2_id, 'Comprei vários itens: maçãs, peras e uvas frescas, pão; queijo e presunto, refrigerantes e sucos.', FALSE, 'O ponto e vírgula está sendo usado incorretamente no meio de um grupo de itens, separando "pão" de "queijo".');
    END IF;
END $$;

-- =========== EXERCÍCIO 3 ===========
DO $$
DECLARE
    exercicio3_id INTEGER;
BEGIN
    SELECT id INTO exercicio3_id FROM exercises 
    WHERE category_id = 'ponto-virgula-3' 
    ORDER BY id LIMIT 1;
    
    IF exercicio3_id IS NOT NULL THEN
        -- Inserir opções para o Exercício 3
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicio3_id, 'Os convidados chegaram atrasados; a festa, no entanto, foi um sucesso.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar orações coordenadas extensas com relação adversativa.'),
        (exercicio3_id, 'Os convidados; chegaram atrasados, a festa, no entanto, foi um sucesso.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "Os convidados" do verbo "chegaram".'),
        (exercicio3_id, 'Os convidados chegaram atrasados, a festa; no entanto, foi um sucesso.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "a festa" do resto da oração.'),
        (exercicio3_id, 'Os convidados chegaram atrasados, a festa, no entanto; foi um sucesso.', FALSE, 'O ponto e vírgula está incorretamente posicionado após "no entanto".');
    END IF;
END $$;

-- =========== EXERCÍCIO 4 ===========
DO $$
DECLARE
    exercicio4_id INTEGER;
BEGIN
    SELECT id INTO exercicio4_id FROM exercises 
    WHERE category_id = 'ponto-virgula-4' 
    ORDER BY id LIMIT 1;
    
    IF exercicio4_id IS NOT NULL THEN
        -- Inserir opções para o Exercício 4
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicio4_id, 'Para o projeto precisamos de: computadores de última geração; impressoras a laser coloridas; scanners de alta resolução.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar itens em uma enumeração.'),
        (exercicio4_id, 'Para o projeto precisamos de: computadores; de última geração, impressoras a laser coloridas, scanners de alta resolução.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "computadores" de "de última geração".'),
        (exercicio4_id, 'Para o projeto; precisamos de: computadores de última geração, impressoras a laser coloridas, scanners de alta resolução.', FALSE, 'O ponto e vírgula está incorretamente posicionado após "projeto".'),
        (exercicio4_id, 'Para o projeto precisamos de: computadores de última geração, impressoras a laser; coloridas, scanners de alta resolução.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "impressoras a laser" de "coloridas".');
    END IF;
END $$;

-- =========== EXERCÍCIO 5 ===========
DO $$
DECLARE
    exercicio5_id INTEGER;
BEGIN
    SELECT id INTO exercicio5_id FROM exercises 
    WHERE category_id = 'ponto-virgula-5' 
    ORDER BY id LIMIT 1;
    
    IF exercicio5_id IS NOT NULL THEN
        -- Inserir opções para o Exercício 5
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (exercicio5_id, 'Já tomei minha decisão; não voltarei atrás.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar orações coordenadas que indicam oposição ou consequência.'),
        (exercicio5_id, 'Já tomei; minha decisão, não voltarei atrás.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "tomei" de seu objeto direto "minha decisão".'),
        (exercicio5_id, 'Já tomei minha decisão, não; voltarei atrás.', FALSE, 'O ponto e vírgula está incorretamente posicionado após a negação "não".'),
        (exercicio5_id, 'Já tomei minha decisão, não voltarei; atrás.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo "voltarei" de seu complemento "atrás".');
    END IF;
END $$;

-- =========== PROVA FINAL ===========
-- Para a prova final, adicionar várias opções (pelo menos para o primeiro exercício)
DO $$
DECLARE
    prova_id INTEGER;
BEGIN
    SELECT id INTO prova_id FROM exercises 
    WHERE category_id = 'prova-ponto-virgula' 
    ORDER BY id LIMIT 1;
    
    IF prova_id IS NOT NULL THEN
        -- Inserir opções para o primeiro exercício da prova
        INSERT INTO exercise_options (exercise_id, option_text, is_correct, explanation)
        VALUES
        (prova_id, 'A apresentação será amanhã; o relatório deve ser entregue hoje.', TRUE, 'O ponto e vírgula está sendo usado corretamente para separar orações coordenadas sem conjunção.'),
        (prova_id, 'A apresentação; será amanhã, o relatório deve ser entregue hoje.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o sujeito "A apresentação" do verbo "será".'),
        (prova_id, 'A apresentação será amanhã, o relatório; deve ser entregue hoje.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando "o relatório" do resto da oração.'),
        (prova_id, 'A apresentação será amanhã, o relatório deve; ser entregue hoje.', FALSE, 'O ponto e vírgula está incorretamente posicionado, separando o verbo auxiliar "deve" do resto da locução verbal "ser entregue".');
    END IF;
END $$;
