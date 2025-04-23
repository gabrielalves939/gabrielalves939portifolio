#!/bin/bash

# Script para preparar o projeto para o GitHub Pages

echo "Preparando build para GitHub Pages..."

# Usar a configuração específica para GitHub Pages
npx vite build --config vite.config.for-gh-pages.ts

# Renomear index.html para 404.html (para suportar roteamento SPA no GitHub Pages)
cp dist/index.html dist/404.html

# Criar arquivo .nojekyll para evitar processamento Jekyll no GitHub Pages
touch dist/.nojekyll

echo "Build para GitHub Pages concluído! Arquivos estão na pasta 'dist'"
echo "Para publicar no GitHub Pages, siga estas etapas:"
echo "1. Faça upload dos arquivos da pasta 'dist' para um repositório GitHub"
echo "2. Configure o GitHub Pages para usar a branch main ou gh-pages"
echo "3. Seu site estará disponível em https://seu-usuario.github.io/nome-do-repositorio/"