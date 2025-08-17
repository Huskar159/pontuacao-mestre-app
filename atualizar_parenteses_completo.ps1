$file = "c:\Users\LinkBiz\Downloads\PONT\src\services\parentesesData.ts"

# Criar backup do arquivo original
Copy-Item -Path $file -Destination "$file.bak" -Force

# Ler o conteúdo das partes das questões
$parte1 = Get-Content -Path "c:\Users\LinkBiz\Downloads\PONT\src\services\parentesesData.ts" -Raw
$parte2 = Get-Content -Path "c:\Users\LinkBiz\Downloads\PONT\questoes_parte2.txt" -Raw
$parte3 = Get-Content -Path "c:\Users\LinkBiz\Downloads\PONT\questoes_parte3.txt" -Raw
$parte4 = Get-Content -Path "c:\Users\LinkBiz\Downloads\PONT\questoes_parte4.txt" -Raw
$parte5 = Get-Content -Path "c:\Users\LinkBiz\Downloads\PONT\questoes_parte5.txt" -Raw

# Encontrar o ponto onde a prova termina
$pattern = '(?s)(  \{\s*id: 7505.*?(?:explanation:.*?\]\s*\}\s*}\s*))(];)'

# Substituir o fechamento do array com as novas questões
$novoConteudo = $parte1 -replace $pattern, "`$1,`n$parte2,`n$parte3,`n$parte4,`n$parte5`n];"

# Salvar o novo conteúdo no arquivo
Set-Content -Path $file -Value $novoConteudo -Encoding UTF8

Write-Output "Atualização concluída com sucesso! Agora o arquivo possui 30 questões na prova final de parênteses."
