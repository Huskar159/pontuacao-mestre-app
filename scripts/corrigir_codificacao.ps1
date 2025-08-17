# Script para corrigir problemas de codificação nos arquivos de dados
# Este script substitui sequências de escape Unicode por caracteres UTF-8 corretos

$arquivos = @(
    ".\src\services\parentesesData.ts",
    ".\src\services\virgulaData.ts",
    ".\src\services\pontoEVirgulaData.ts",
    ".\src\services\doisPontosData.ts"
)

foreach ($arquivo in $arquivos) {
    Write-Host "Processando arquivo: $arquivo"
    
    # Ler o conteúdo do arquivo
    $conteudo = Get-Content -Path $arquivo -Raw -Encoding UTF8
    
    # Substituir sequências de escape Unicode comuns
    $conteudo = $conteudo -replace "u00e1", "á" # á
    $conteudo = $conteudo -replace "u00e0", "à" # à
    $conteudo = $conteudo -replace "u00e2", "â" # â
    $conteudo = $conteudo -replace "u00e3", "ã" # ã
    $conteudo = $conteudo -replace "u00e4", "ä" # ä
    $conteudo = $conteudo -replace "u00e9", "é" # é
    $conteudo = $conteudo -replace "u00ea", "ê" # ê
    $conteudo = $conteudo -replace "u00ed", "í" # í
    $conteudo = $conteudo -replace "u00f3", "ó" # ó
    $conteudo = $conteudo -replace "u00f4", "ô" # ô
    $conteudo = $conteudo -replace "u00f5", "õ" # õ
    $conteudo = $conteudo -replace "u00fa", "ú" # ú
    $conteudo = $conteudo -replace "u00fc", "ü" # ü
    $conteudo = $conteudo -replace "u00e7", "ç" # ç
    $conteudo = $conteudo -replace "u00c1", "Á" # Á
    $conteudo = $conteudo -replace "u00c9", "É" # É
    $conteudo = $conteudo -replace "u00cd", "Í" # Í
    $conteudo = $conteudo -replace "u00d3", "Ó" # Ó
    $conteudo = $conteudo -replace "u00da", "Ú" # Ú
    $conteudo = $conteudo -replace "u00c7", "Ç" # Ç
    $conteudo = $conteudo -replace "u00c3", "Ã" # Ã
    $conteudo = $conteudo -replace "u00d5", "Õ" # Õ
    $conteudo = $conteudo -replace "u00ca", "Ê" # Ê
    $conteudo = $conteudo -replace "u00f9", "ù" # ù
    $conteudo = $conteudo -replace "u00f2", "ò" # ò
    $conteudo = $conteudo -replace "u00ec", "ì" # ì
    $conteudo = $conteudo -replace "u00eb", "ë" # ë
    $conteudo = $conteudo -replace "u00ef", "ï" # ï
    $conteudo = $conteudo -replace "u00ee", "î" # î
    $conteudo = $conteudo -replace "u00e8", "è" # è
    $conteudo = $conteudo -replace "u00fb", "û" # û
    $conteudo = $conteudo -replace "u00c0", "À" # À
    $conteudo = $conteudo -replace "u00c8", "È" # È
    $conteudo = $conteudo -replace "u00cc", "Ì" # Ì
    $conteudo = $conteudo -replace "u00d2", "Ò" # Ò
    $conteudo = $conteudo -replace "u00d9", "Ù" # Ù
    $conteudo = $conteudo -replace "u00c2", "Â" # Â
    $conteudo = $conteudo -replace "u00ca", "Ê" # Ê
    $conteudo = $conteudo -replace "u00ce", "Î" # Î
    $conteudo = $conteudo -replace "u00d4", "Ô" # Ô
    $conteudo = $conteudo -replace "u00db", "Û" # Û
    $conteudo = $conteudo -replace "u00c4", "Ä" # Ä
    $conteudo = $conteudo -replace "u00cb", "Ë" # Ë
    $conteudo = $conteudo -replace "u00cf", "Ï" # Ï
    $conteudo = $conteudo -replace "u00d6", "Ö" # Ö
    $conteudo = $conteudo -replace "u00dc", "Ü" # Ü
    
    # Salvar o conteúdo corrigido de volta no arquivo
    $conteudo | Set-Content -Path $arquivo -Encoding UTF8
    
    Write-Host "Arquivo processado com sucesso: $arquivo"
}

Write-Host "Todos os arquivos foram processados com sucesso!"
