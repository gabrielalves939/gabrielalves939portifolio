#!/bin/bash

# Script simples para enviar atualizações para o GitHub
echo "========================================"
echo "Enviando seu portfólio para o GitHub"
echo "========================================"

# Verifica se há alterações pendentes
if git diff-index --quiet HEAD --; then
  echo "Nenhuma alteração pendente foi encontrada."
else
  echo "Há alterações pendentes. Deseja fazer commit? (s/n)"
  read resposta
  
  if [ "$resposta" = "s" ]; then
    echo "Digite uma mensagem para o commit:"
    read mensagem
    
    # Adiciona todas as alterações e faz commit
    git add .
    git commit -m "$mensagem"
    echo "Commit realizado com sucesso!"
  else
    echo "Operação cancelada pelo usuário."
    exit 0
  fi
fi

# Pergunta se deseja fazer push
echo "Deseja enviar as alterações para o GitHub? (s/n)"
read resposta

if [ "$resposta" = "s" ]; then
  echo "Enviando para o GitHub..."
  git push origin main
  
  echo "========================================"
  echo "Pronto! Seu site está disponível em:"
  echo "https://gabrielalves939.github.io/gabrielalves939portifolio/"
  echo "========================================"
else
  echo "Push cancelado pelo usuário."
fi