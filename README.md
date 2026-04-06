# Nexa Images — Vitrine Criativa

Site vitrine da marca **Nexa Images**, focado em stickers, etiquetas, papelaria e presentes com estética cozy, bookish, botanical e delicada. A compra é finalizada externamente na [Zazzle](https://www.zazzle.com.br/store/nexa_images).

## Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- React Router 6
- Framer Motion
- shadcn/ui

## Rodando localmente

```bash
# 1. Clone o repositório
git clone https://github.com/<usuario>/nexa-images-showcase.git
cd nexa-images-showcase

# 2. Instale as dependências
npm install

# 3. Crie o arquivo de variáveis de ambiente
cp .env.example .env
# Edite .env conforme necessário (veja seção abaixo)

# 4. Inicie o servidor de desenvolvimento
npm run dev
# Acesse http://localhost:8080
```

## Variáveis de ambiente

| Variável | Descrição | Exemplo |
|---|---|---|
| `VITE_SITE_URL` | URL pública do site (usada para canonical, OG tags, sitemap) | `https://www.nexaimages.com.br` |
| `VITE_ZAZZLE_STORE_URL` | URL base da loja na Zazzle (fallback para produtos sem link individual) | `https://www.zazzle.com.br/store/nexa_images` |
| `VITE_BASE_PATH` | Base path do Vite para deploy em subdiretório | `/nexa-images-showcase/` |

Crie um arquivo `.env` na raiz a partir do `.env.example`.

## Deploy automático via GitHub Pages

O repositório já possui um workflow em `.github/workflows/deploy.yml` que:

1. Executa em cada push na branch `main`
2. Instala dependências (`npm ci`)
3. Gera o build de produção (`npm run build`)
4. Copia `index.html` → `404.html` para fallback SPA
5. Publica no GitHub Pages

### Passo a passo para ativar

1. **No GitHub**, vá em **Settings → Pages**
2. Em **Source**, selecione **GitHub Actions**
3. *(Opcional)* Vá em **Settings → Environments → github-pages → Environment variables** e configure:
   - `VITE_SITE_URL` — URL do site publicado (ex.: `https://<usuario>.github.io/nexa-images-showcase`)
   - `VITE_ZAZZLE_STORE_URL` — URL da loja Zazzle (padrão: `https://www.zazzle.com.br/store/nexa_images`)
   - `VITE_BASE_PATH` — Necessário **apenas** se NÃO usar custom domain (ex.: `/nexa-images-showcase/`)
4. Faça um push na `main` — o deploy é automático

> **Nota:** Se usar **custom domain** (ex.: `www.nexaimages.com.br`), configure o domínio em **Settings → Pages → Custom domain** e deixe `VITE_BASE_PATH` como `/` (ou não defina).

### Alterando o base path

- **Sem custom domain** (GitHub Pages padrão `<user>.github.io/<repo>`): defina `VITE_BASE_PATH=/<repo>/` nas variáveis de ambiente do GitHub Actions.
- **Com custom domain**: não defina `VITE_BASE_PATH` ou use `/`.

### Alterando a URL da Zazzle

1. Edite `VITE_ZAZZLE_STORE_URL` no `.env` (local) ou nas variáveis de ambiente do GitHub (CI).
2. Para URLs individuais de produtos, edite `src/data/products.ts` — campo `zazzleUrl` de cada produto.
3. Produtos sem `zazzleUrl` válido usam automaticamente a URL base da loja como fallback.

## Estrutura do projeto

```
├── .github/workflows/deploy.yml   # CI/CD GitHub Pages
├── public/                        # Arquivos estáticos (favicon, robots, sitemap, manifest)
├── src/
│   ├── components/                # Componentes React (layout, product, shared, ui)
│   ├── data/                      # Dados estáticos (produtos, coleções, categorias)
│   ├── hooks/                     # Hooks customizados (useSeo, etc.)
│   ├── lib/                       # Utilitários (zazzle.ts, utils.ts)
│   ├── pages/                     # Páginas da aplicação
│   ├── App.tsx                    # Router principal
│   └── main.tsx                   # Entry point
├── .env.example                   # Template de variáveis de ambiente
├── vite.config.ts                 # Configuração Vite com base path dinâmico
└── index.html                     # HTML principal com SEO base
```

## SEO

- **Dinâmico por página** via `useSeo` hook — cada página define title, description, canonical e OG tags.
- **Canonical URL** baseada em `VITE_SITE_URL`.
- **index.html** já inclui meta tags padrão, OG, Twitter Card.
- **robots.txt** e **sitemap.xml** em `public/` — atualize o domínio antes de publicar.
- **site.webmanifest** configurado para PWA básico.

## Ajustes recomendados antes de publicar

- [ ] Substituir `/placeholder.svg` por imagens reais de produto e coleção
- [ ] Preencher `zazzleUrl` com os links reais em `src/data/products.ts`
- [ ] Atualizar `VITE_SITE_URL` com o domínio final
- [ ] Atualizar `public/sitemap.xml` e `public/robots.txt` com o domínio final
- [ ] Revisar e-mail e Instagram nas páginas de contato/sobre

## Observação sobre a Zazzle

Este site funciona como **vitrine própria** com finalização de compra externa na [Zazzle](https://www.zazzle.com.br/store/nexa_images). Não há checkout interno. Quando não existir link individual do produto, o projeto usa a URL base da loja como fallback, evitando botões quebrados.

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento (porta 8080) |
| `npm run build` | Build de produção |
| `npm run preview` | Preview do build local |
| `npm run lint` | Lint com ESLint |
| `npm run test` | Testes com Vitest |
