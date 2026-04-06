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

Opcionalmente, defina `VITE_ZAZZLE_STORE_URL` no `.env` para gerar URLs de fallback baseadas no slug do produto.

## SEO

- SEO dinâmico via hook `useSeo` (título, descrição, OG, canonical, robots)
- Cada página passa metadados para o `Layout`
- `robots.txt` e `site.webmanifest` em `public/`
- Sem sitemap.xml (domínio canônico não definido)

## Publicação

1. Substitua os `zazzleUrl` e `personalizeUrl` por URLs reais
2. Substitua as imagens placeholder por imagens reais dos produtos
3. Configure o domínio e atualize os campos canonical/OG conforme necessário
4. Execute `npm run build` e faça deploy do diretório `dist/`
