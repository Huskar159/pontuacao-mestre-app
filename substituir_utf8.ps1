$conteudo = Get-Content -Path "c:\Users\LinkBiz\Downloads\PONT\src\pages\Success.tsx" -Raw -Encoding UTF8

# Restaurar o backup para garantir que temos um arquivo limpo
Copy-Item -Path "c:\Users\LinkBiz\Downloads\PONT\src\pages\Success.tsx.backup_final" -Destination "c:\Users\LinkBiz\Downloads\PONT\src\pages\Success.tsx" -Force

# Ler novamente o conteúdo após restaurar o backup
$conteudo = Get-Content -Path "c:\Users\LinkBiz\Downloads\PONT\src\pages\Success.tsx" -Raw -Encoding UTF8

# Encontrar o início do segundo bloco
$inicioSegundoBloco = $conteudo.IndexOf('{/* Segunda seção de exercícios de vírgula (duplicada) */}')

# Substituir "Vírgula" por "Ponto e Vírgula" e "vírgula" por "ponto e vírgula" apenas no segundo bloco
$novoConteudo = $conteudo.Substring(0, $inicioSegundoBloco) + 
                $conteudo.Substring($inicioSegundoBloco).
                Replace('{/* Segunda seção de exercícios de vírgula (duplicada) */}', '{/* Seção de exercícios de ponto e vírgula */}').
                Replace('Domínio da Vírgula', 'Domínio do Ponto e Vírgula').
                Replace('Sobre o Módulo de Vírgula', 'Sobre o Módulo de Ponto e Vírgula').
                Replace('Módulo de Vírgula', 'Módulo de Ponto e Vírgula').
                Replace('uso da vírgula', 'uso do ponto e vírgula').
                Replace('usos da vírgula', 'usos do ponto e vírgula').
                Replace('Vírgula - Exercício', 'Ponto e Vírgula - Exercício').
                Replace('Prova Final de Vírgula', 'Prova Final de Ponto e Vírgula')

# Salvar o arquivo modificado
$novoConteudo | Out-File -FilePath "c:\Users\LinkBiz\Downloads\PONT\src\pages\Success.tsx" -Encoding UTF8
