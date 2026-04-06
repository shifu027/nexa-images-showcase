Nexa Images — Vitrine Criativa
Site vitrine da marca Nexa Images, focado em stickers, etiquetas, papelaria e presentes com estética cozy, bookish, botanical e delicada. A compra é finalizada externamente na Zazzle.
Stack
React 18
TypeScript
Vite
Tailwind CSS
React Router
Framer Motion
shadcn/ui (estrutura já presente no projeto)
Arquivos incluídos neste pacote
Este pacote contém os arquivos principais para deixar o projeto mais pronto para publicar:
SEO dinâmico via `useSeo`
helper da Zazzle com fallback para a loja
home mais refinada
página de produto mais forte visualmente
contato mais profissional
cards mais premium
`placeholder.svg` melhorado
`favicon.svg`
`robots.txt`, `sitemap.xml` e `site.webmanifest`
`.env.example`
Como usar
Substitua estes arquivos no seu projeto atual mantendo a mesma estrutura de pastas.
Variáveis de ambiente
Crie um arquivo `.env` na raiz usando o `.env.example` como base.
Exemplo
```env
VITE_SITE_URL=https://seu-dominio.com.br
VITE_ZAZZLE_STORE_URL=https://www.zazzle.com.br/store/nexa_images
```
O que cada variável faz
`VITE_SITE_URL`: usada para canonical e URLs absolutas de SEO.
`VITE_ZAZZLE_STORE_URL`: usada como fallback quando um produto ainda não tiver `zazzleUrl` individual.
Ajustes obrigatórios antes de publicar
Substituir os `zazzleUrl` reais em `src/data/products.ts` sempre que possível.
Trocar as imagens placeholder por mockups e imagens reais de produto.
Ajustar e-mail e Instagram se desejar usar dados finais.
Atualizar `VITE_SITE_URL` com seu domínio real.
Revisar `public/sitemap.xml` com seu domínio real antes da publicação.
Observação importante sobre a Zazzle
O site foi estruturado como vitrine própria com finalização externa. Não há checkout interno. Quando não existir link individual válido do produto, o projeto pode usar a URL base da loja na Zazzle como fallback para evitar botões quebrados.
Publicação
```bash
npm install
npm run dev
npm run build
```
Depois, publique normalmente na Vercel, Netlify ou outro host compatível com Vite.
