#!/bin/bash

# Script para facilitar o deploy no GitHub Pages
echo "========================================"
echo "Script de Deploy para GitHub Pages"
echo "========================================"

# Verifica se estamos na raiz do projeto
if [ ! -f "package.json" ]; then
  echo "Erro: Execute este script da raiz do projeto!"
  exit 1
fi

# Cria a pasta de build se não existir
mkdir -p github-build/assets

# Copia o arquivo HTML para a raiz
echo "Copiando arquivo index.html para a raiz..."
cp github-build/index.html index.html

# Garante que o arquivo .nojekyll existe
echo "Criando arquivo .nojekyll..."
touch .nojekyll

# Commit das alterações
echo "Commitando alterações..."
git add index.html .nojekyll
git commit -m "Atualiza versão estática para GitHub Pages"

echo "========================================"
echo "Tudo pronto! Agora você pode:"
echo "1. Enviar as alterações para o GitHub:"
echo "   git push origin main"
echo ""
echo "2. Verificar seu site em:"
echo "   https://gabrielalves939.github.io/gabrielalves939portifolio/"
echo "========================================"