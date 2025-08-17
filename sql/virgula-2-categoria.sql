-- Inserir a categoria 'virgula-2'
INSERT INTO exercise_categories (id, title, description)
SELECT 'virgula-2', 'Vírgula', 'Mais exercícios sobre o uso da vírgula na língua portuguesa.'
WHERE NOT EXISTS (SELECT 1 FROM exercise_categories WHERE id = 'virgula-2');
