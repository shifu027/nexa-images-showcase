# Nexa Images — Vitrine Criativa

Site de vitrine premium para a marca **Nexa Images**, focado em stickers, etiquetas, papelaria e presentes personalizados. A compra é finalizada na **Zazzle**.

## Stack

- **React 18** + **TypeScript 5** + **Vite 5**
- **Tailwind CSS 3** com design tokens customizados
- **Framer Motion** para animações
- **React Router** para navegação SPA
- **shadcn/ui** componentes base

## Scripts

```bash
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção
npm run preview   # preview do build
npm run test      # testes com vitest
npm run lint      # eslint
```

## Estrutura principal

```
src/
├── components/       # Componentes reutilizáveis (layout, product, shared, ui)
├── data/             # Catálogo de produtos, coleções, categorias, FAQ, depoimentos
├── hooks/            # Hooks customizados (useSeo, useMobile)
├── lib/              # Utilitários (zazzle.ts, utils.ts)
├── pages/            # Páginas do site (16 rotas)
```

## Configuração de URLs Zazzle

Cada produto em `src/data/products.ts` possui campos `zazzleUrl` e `personalizeUrl`. Substitua `"#"` pela URL real do produto na Zazzle. O sistema valida as URLs automaticamente e exibe "Link em breve" quando a URL ainda não foi configurada.

Se você quiser gerar URLs de fallback automaticamente, crie um arquivo `.env` na raiz (ou use o `.env.example` fornecido) e defina a variável `VITE_ZAZZLE_STORE_URL` com a URL base da sua loja na Zazzle. Por exemplo:

```ini
VITE_ZAZZLE_STORE_URL=https://www.zazzle.com.br/store/nexa_images
```

Quando definida, essa variável será usada para construir o link de compra (ex.: `https://www.zazzle.com.br/store/nexa_images/{slug}`) para produtos cujo campo `zazzleUrl` ainda esteja como `"#"`.

## SEO

- SEO dinâmico via hook `useSeo` (título, descrição, OG, canonical, robots)
- Cada página passa metadados para o `Layout`
- `robots.txt` e `site.webmanifest` em `public/`
- `sitemap.xml` com páginas estáticas (atualize com domínio canônico antes de publicar)

## Publicação

1. Substitua os campos `zazzleUrl` e `personalizeUrl` em `src/data/products.ts` pelas URLs reais dos produtos na Zazzle, ou configure `VITE_ZAZZLE_STORE_URL` para utilizar o fallback automático.
2. Substitua as imagens placeholder por imagens reais dos produtos e coleções.
3. Defina um domínio canônico para o seu site, atualize os campos `canonical` e metadados sociais conforme necessário em `index.html` e nas páginas.
4. Se necessário, ajuste o arquivo `public/sitemap.xml` para refletir o domínio canônico e as rotas do seu projeto.
5. Execute `npm run build` e faça o deploy do diretório `dist/`.
