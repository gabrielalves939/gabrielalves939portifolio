# Configuração de Token de Acesso Pessoal do GitHub

Para conectar seu repositório Replit ao GitHub com as credenciais corretas, siga estes passos:

## Passo 1: Criar um Token de Acesso Pessoal no GitHub

1. Acesse [GitHub > Settings > Developer Settings > Personal Access Tokens](https://github.com/settings/tokens)
2. Clique em "Generate new token" (Classic)
3. Dê um nome descritivo como "Replit Portfolio Access"
4. Selecione os seguintes escopos:
   - `repo` (acesso completo aos repositórios)
   - `workflow` (se estiver usando GitHub Actions)
5. Defina uma expiração (recomendado: 30 dias)
6. Clique em "Generate token"
7. **IMPORTANTE**: Copie o token gerado. Você não poderá vê-lo novamente!

## Passo 2: Configurar o token no Replit

### Método 1: Usando credenciais no Git
```bash
git remote set-url origin https://[SEU_NOME_DE_USUARIO]:[SEU_TOKEN]@github.com/gabrielalves939/gabrielalves939portifolio.git
```

Substitua [SEU_NOME_DE_USUARIO] por "gabrielalves939" e [SEU_TOKEN] pelo token que você acabou de gerar.

### Método 2: Usando o Git Credential Helper
```bash
git config --global credential.helper store
echo "https://gabrielalves939:[SEU_TOKEN]@github.com" > ~/.git-credentials
```

## Passo 3: Tentar fazer push novamente
```bash
git push origin main
```

## Dicas de Segurança
- Não compartilhe seu token com ninguém
- Defina uma data de expiração curta
- Limite os escopos ao mínimo necessário
- Revogue o token quando não precisar mais dele