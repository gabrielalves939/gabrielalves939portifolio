# Como Publicar Seu Portfólio no GitHub Pages

Este guia explica como publicar seu portfólio exatamente como está no Replit para o GitHub Pages.

## 1. Obtenha um token do GitHub

1. Acesse https://github.com/settings/tokens
2. Clique em "Generate new token" e depois "Generate new token (classic)"
3. Dê um nome ao token (ex: "deploy-portfolio")
4. Marque a opção `repo` (dá acesso ao seu repositório)
5. Clique em "Generate token"
6. **IMPORTANTE**: Copie o token gerado e guarde-o em um lugar seguro!

## 2. Configure seu repositório no GitHub

1. Crie um repositório no GitHub com o nome `gabrielalves939portifolio` (ou o nome que preferir)
2. Conecte este projeto do Replit ao seu repositório GitHub:
   - Copie a URL do seu repositório: `https://github.com/gabrielalves939/gabrielalves939portifolio.git`
   - No terminal do Replit, execute:
     ```
     git remote add origin https://github.com/gabrielalves939/gabrielalves939portifolio.git
     ```

## 3. Execute o script de deploy

1. No terminal do Replit, execute o comando:
   ```
   ./deploy-github.sh SEU_TOKEN_AQUI
   ```
   Substitua `SEU_TOKEN_AQUI` pelo token que você copiou no passo 1.

2. O script vai:
   - Configurar o projeto para o GitHub Pages
   - Compilar o código React
   - Fazer o upload dos arquivos para a branch `gh-pages`

## 4. Configure o GitHub Pages

1. Acesse as configurações do seu repositório: `https://github.com/gabrielalves939/gabrielalves939portifolio/settings/pages`
2. Em "Source", selecione a branch `gh-pages`
3. Mantenha a pasta como `/ (root)`
4. Clique em "Save"

## 5. Acesse seu site

Após alguns minutos, seu portfólio estará disponível em:
`https://gabrielalves939.github.io/gabrielalves939portifolio/`

## Notas importantes

- O site publicado será exatamente igual ao que você vê no Replit
- Para fazer atualizações, faça as mudanças no Replit e execute o script de deploy novamente
- Este método preserva todas as animações, estilos e funcionalidades do React