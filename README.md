# Portfólio de Gabriel Alves

Um portfólio profissional para desenvolvedores, com design moderno e responsivo para exibir projetos, habilidades e experiência.

## Tecnologias

- **React + TypeScript**: Para uma estrutura de código robusta e tipada
- **Tailwind CSS**: Para estilização rápida e responsiva
- **Framer Motion**: Para animações suaves
- **React Query**: Para gerenciamento de estado
- **Wouter**: Para roteamento leve
- **Shadcn UI**: Para componentes de interface modernos

## Características

- Design responsivo para todos os dispositivos
- Tema escuro como padrão (com suporte a tema claro)
- Efeitos de gradiente de texto para destaque visual
- Seções organizadas para educação, experiência, projetos e habilidades
- Componentes interativos como acordeões e carrosséis

## Executando o projeto localmente

```bash
# Instalar dependências
npm install

# Iniciar em modo de desenvolvimento
npm run dev
```

## Deploy para GitHub Pages

Este projeto é configurado para ser implantado no GitHub Pages. Para realizar o deploy:

### Manualmente

```bash
# Execute o script de build para GitHub Pages
./build-for-gh-pages.sh

# Faça upload da pasta 'dist' para o seu repositório no GitHub
```

### Usando GitHub Actions

O projeto inclui um workflow de GitHub Actions para automatizar o deploy:

1. Faça push do código para o seu repositório GitHub
2. Configure o GitHub Pages para usar a branch gh-pages
3. O GitHub Actions irá construir e publicar automaticamente seu site

## Personalizando

- **Base Path**: Altere o caminho base no arquivo `vite.config.for-gh-pages.ts` para corresponder ao nome do seu repositório
- **Meta tags**: Edite as meta tags no `client/index.html` para incluir suas informações
- **Conteúdo**: Modifique os arquivos de constantes em `client/src/lib/constants.ts` para atualizar seu conteúdo

## Estrutura do Projeto

```
/client
  /src
    /components      # Componentes React 
    /hooks           # Custom hooks
    /lib             # Utilitários e constantes
    /pages           # Páginas da aplicação
    /types           # Definições de tipos TypeScript
```

## Licença

MIT