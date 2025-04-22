#!/bin/bash

# Script simplificado para deploy no GitHub Pages
TOKEN="$1"
REPO_NAME="gabrielalves939portifolio"
USERNAME="gabrielalves939"
BRANCH="gh-pages"

echo "=== Script de Deploy Simplificado ==="

# Configurar Git
git config --global user.name "Gabriel Alves"
git config --global user.email "gabrielalves939@gmail.com"

# Criar e mudar para uma nova branch temporária
git checkout -b temp-deploy-branch

# Construir o projeto
echo "Compilando o projeto..."
npm run build

# Copiar arquivos compilados para um diretório temporário
echo "Preparando arquivos para deploy..."
mkdir -p /tmp/gh-pages
cp -r dist/public/* /tmp/gh-pages/
touch /tmp/gh-pages/.nojekyll

# Corrigir caminhos dos assets
echo "Corrigindo caminhos dos assets..."
cd /tmp/gh-pages
find . -name "*.html" -exec sed -i 's|src="/assets/|src="./assets/|g; s|href="/assets/|href="./assets/|g' {} \;

# Inicializar Git no diretório temporário
git init
git add .
git commit -m "Deploy para GitHub Pages"

# Configurar o repositório remoto com o token
git remote add origin https://${TOKEN}@github.com/${USERNAME}/${REPO_NAME}.git

# Forçar o push para a branch gh-pages
echo "Enviando para o GitHub Pages..."
git push -f origin HEAD:${BRANCH}

# Limpar
cd -
git checkout main
git branch -D temp-deploy-branch

echo "=== Deploy concluído! ==="
echo "Seu site estará disponível em alguns minutos em:"
echo "https://${USERNAME}.github.io/${REPO_NAME}/"
echo ""
echo "IMPORTANTE: Nas configurações do GitHub Pages,"
echo "selecione a branch '${BRANCH}' e pasta '/ (root)'."