#!/bin/bash

# Script para garantir que todos os commits sejam atribuídos à conta gabrielalves939

echo "Configurando autor do Git para: gabrielalves939 <gabrielalves939@hotmail.com>"

# Configurar globalmente
git config --global user.name "gabrielalves939"
git config --global user.email "gabrielalves939@hotmail.com"

# Configurar localmente (para este repositório)
git config user.name "gabrielalves939"
git config user.email "gabrielalves939@hotmail.com"

# Criar alias para commit que força o autor correto
git config --global alias.ca 'commit --author="gabrielalves939 <gabrielalves939@hotmail.com>"'

echo "✅ Configuração concluída!"
echo "Para garantir que seus commits sejam atribuídos corretamente:"
echo "  - Use 'git commit' normalmente (deve usar a configuração atual)"
echo "  - OU para garantia extra, use 'git ca -m \"sua mensagem\"'"
echo ""
echo "Configuração atual:"
git config --list | grep -i user