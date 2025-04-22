#!/bin/bash

echo "Iniciando deploy para GitHub Pages..."

# Limpar diretórios antigos se existirem
rm -rf dist
rm -rf docs/dist

# Iniciar o workflow para build
echo "Iniciando o build da aplicação..."
npm run build

# Criar estrutura para o GitHub Pages
echo "Preparando arquivos para o GitHub Pages..."
mkdir -p docs/dist
cp -r dist/* docs/dist/

# Garantir que os arquivos de redirecionamento estejam atualizados
cat > docs/index.html << EOL
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gabriel Alves - Portfólio</title>
  <meta http-equiv="refresh" content="0;url=./dist/index.html">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      text-align: center;
      background-color: #0f172a;
      color: white;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 20px;
      background: linear-gradient(to right, #3b82f6, #bfdbfe);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      font-size: 16px;
      margin-bottom: 30px;
    }
    a {
      color: #3b82f6;
      text-decoration: none;
      border: 1px solid #3b82f6;
      padding: 10px 20px;
      border-radius: 5px;
      transition: all 0.3s;
    }
    a:hover {
      background-color: #3b82f6;
      color: white;
    }
  </style>
</head>
<body>
  <h1>Gabriel Alves - Portfólio</h1>
  <p>Redirecionando para o portfólio...</p>
  <p>Se o redirecionamento não funcionar, <a href="./dist/index.html">clique aqui</a>.</p>
</body>
</html>
EOL

# Criar arquivo .nojekyll para evitar processamento Jekyll no GitHub Pages
touch docs/.nojekyll

# Adicionar arquivos ao git
echo "Adicionando arquivos ao repositório..."
git add docs -f
git add index.html -f

# Configurar e-mail e nome para o commit
git config user.email "gabrielalves939@gmail.com"
git config user.name "Gabriel Alves"

# Fazer commit e push
git commit -m "Deploy para GitHub Pages"
git push origin main

echo "----------------------------------------"
echo "Deploy para GitHub Pages concluído!"
echo "IMPORTANTE: Acesse as configurações do seu repositório no GitHub e"
echo "certifique-se de que o GitHub Pages está configurado para usar a pasta 'docs' no branch 'main'."
echo "Seu site estará disponível em: https://gabrielalves939.github.io/gabrielalves939portifolio/"
echo "----------------------------------------"