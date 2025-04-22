# Instruções para Deploy no GitHub Pages

Para fazer o deploy do seu portfólio React no GitHub Pages exatamente como está no Replit, siga estas instruções:

## 1. Gerar um token de acesso pessoal no GitHub

1. Acesse [https://github.com/settings/tokens](https://github.com/settings/tokens)
2. Clique em "Generate new token" e depois "Generate new token (classic)"
3. Dê um nome ao token, como "deploy-portfolio"
4. Selecione os seguintes escopos: `repo` (todos)
5. Clique em "Generate token"
6. **IMPORTANTE**: Copie o token gerado e guarde-o em um lugar seguro, pois ele não será mostrado novamente

## 2. Configurar o GitHub Pages

1. Crie um repositório no GitHub (se ainda não tiver) com o nome `gabrielalves939portifolio`
2. Vá para as configurações do repositório (Settings)
3. Na seção Pages, selecione:
   - Source: "Deploy from a branch"
   - Branch: "gh-pages" (essa branch será criada automaticamente pelo script de deploy)
   - Pasta: "/ (root)"
4. Clique em "Save"

## 3. Executar o script de deploy

Execute o script de deploy que prepara os arquivos, compila o projeto e envia para o GitHub Pages:

```bash
# No terminal do Replit
./deploy-github.sh SEU_TOKEN_DO_GITHUB
```

## 4. Verificar o deploy

Após o deploy, seu site estará disponível em aproximadamente 1-2 minutos em:
[https://gabrielalves939.github.io/gabrielalves939portifolio/](https://gabrielalves939.github.io/gabrielalves939portifolio/)

## Notas importantes

- O processo de build compila o React e prepara arquivos estáticos otimizados
- Todo o código dinâmico é transformado em JavaScript que roda diretamente no navegador
- O site manterá todas as animações e recursos visuais do Replit
- Para futuras atualizações, basta executar novamente o script de deploy