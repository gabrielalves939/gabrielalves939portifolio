#!/bin/bash

# Verifica se o token do GitHub foi fornecido
if [ -z "$1" ]; then
  echo "Erro: Token do GitHub não fornecido."
  echo "Uso: ./deploy-github.sh SEU_TOKEN_DO_GITHUB"
  exit 1
fi

GITHUB_TOKEN=$1
REPO_NAME="gabrielalves939portifolio"
USERNAME="gabrielalves939"

echo "==================================================="
echo "    Deploy do Projeto React para GitHub Pages      "
echo "==================================================="

# Instala gh-pages se não estiver instalado
echo "Verificando gh-pages..."
if ! npm list -g gh-pages &> /dev/null; then
  echo "Instalando gh-pages globalmente..."
  npm install -g gh-pages
fi

# Modifica o package.json para adicionar configurações de homepage e scripts de deploy
echo "Configurando package.json para deploy..."
TMP_FILE=$(mktemp)
jq '.homepage = "https://gabrielalves939.github.io/gabrielalves939portifolio/" | 
    .scripts.predeploy = "npm run build" | 
    .scripts.deploy = "gh-pages -d dist"' package.json > "$TMP_FILE"
mv "$TMP_FILE" package.json

# Atualiza o vite.config.ts para adicionar a base correta
echo "Atualizando configuração do Vite..."
TMP_FILE=$(mktemp)
# Verifica se o arquivo já tem a configuração de base
if grep -q "base:" vite.config.ts; then
  # Substitui a configuração de base existente
  sed 's|base:.*|base: "/gabrielalves939portifolio/",|' vite.config.ts > "$TMP_FILE"
else
  # Adiciona a configuração de base
  sed '/plugins: \[/i \  base: "/gabrielalves939portifolio/",' vite.config.ts > "$TMP_FILE"
fi
mv "$TMP_FILE" vite.config.ts

# Configura o Git para o deploy
echo "Configurando Git para deploy..."
git config --global user.name "Gabriel Alves"
git config --global user.email "gabrielalves939@gmail.com"

# Constrói o projeto
echo "Construindo o projeto..."
npm run build

# Verifica se o build foi bem-sucedido
if [ $? -ne 0 ]; then
  echo "Erro ao construir o projeto. Abortando deploy."
  exit 1
fi

# Cria um arquivo .nojekyll na pasta dist para evitar processamento do Jekyll
touch dist/.nojekyll

# Configura o Git para usar o token fornecido
echo "Configurando credenciais do GitHub..."
git remote set-url origin https://${GITHUB_TOKEN}@github.com/${USERNAME}/${REPO_NAME}.git

# Ajusta os caminhos no arquivo index.html para que funcionem no GitHub Pages
echo "Corrigindo caminhos dos assets..."
TMP_FILE=$(mktemp)
sed 's|src="/assets/|src="./assets/|g; s|href="/assets/|href="./assets/|g' dist/public/index.html > "$TMP_FILE"
mv "$TMP_FILE" dist/public/index.html

# Cria um arquivo .nojekyll na pasta dist/public para evitar processamento do Jekyll
touch dist/public/.nojekyll

# Deploy com gh-pages
echo "Realizando deploy para GitHub Pages..."
GIT_DEPLOY_TOKEN=$GITHUB_TOKEN npx gh-pages -d dist/public -u "Gabriel Alves <gabrielalves939@gmail.com>"

echo "==================================================="
echo "Deploy concluído com sucesso!"
echo "Seu site estará disponível em alguns minutos em:"
echo "https://${USERNAME}.github.io/${REPO_NAME}/"
echo "==================================================="
echo "Nota: Certifique-se de que nas configurações do GitHub Pages,"
echo "você selecionou a branch 'gh-pages' como origem."
echo "==================================================="