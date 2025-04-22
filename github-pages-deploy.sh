#!/bin/bash

echo "Iniciando deploy para GitHub Pages..."

# Limpar diretórios antigos se existirem
rm -rf dist
rm -rf docs/assets
rm -rf docs/index.html

# Iniciar o workflow para build
echo "Iniciando o build da aplicação..."
npm run build

# Criar estrutura para o GitHub Pages
echo "Preparando arquivos para o GitHub Pages..."
mkdir -p docs

# Copia o arquivo HTML principal com caminhos relativos
cat dist/public/index.html | sed -e 's|src="/assets/|src="./assets/|g' -e 's|href="/assets/|href="./assets/|g' > docs/index.html

# Copia os assets para a pasta docs
cp -r dist/public/assets docs/

# Criar arquivo .nojekyll para evitar processamento Jekyll no GitHub Pages
touch docs/.nojekyll

# Adicionar arquivos ao git
echo "Adicionando arquivos ao repositório..."
git add docs -f

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