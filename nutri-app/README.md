# 🥗 Nutri — Sistema de Gestão Nutricional

Plataforma completa para nutricionistas modernos gerenciarem pacientes, consultas e planos alimentares.

## ✨ Funcionalidades

- **Autenticação** — Email/senha + OAuth (Google, GitHub), roles (admin, nutricionista, paciente)
- **Gestão de Pacientes** — CRUD completo com filtros, paginação e busca
- **Prontuários Eletrônicos** — Consultas, avaliações, prescrições e planos alimentares
- **Cálculos automáticos** — IMC, macronutrientes, classificações
- **Site Marketing** — Landing page, preços, blog, FAQ, contato

## 🚀 Stack

- **Framework**: Next.js 15 (App Router)
- **Auth**: NextAuth.js v5 / Auth.js
- **ORM**: Prisma + PostgreSQL
- **Estilos**: Tailwind CSS
- **Validação**: Zod + React Hook Form
- **Linguagem**: TypeScript

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Copiar variáveis de ambiente
cp .env.example .env

# Configurar banco de dados
npx prisma generate
npx prisma db push

# Rodar em desenvolvimento
npm run dev
```

## ⚙️ Variáveis de Ambiente

Edite o arquivo `.env` com suas configurações:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/nutri_db"
NEXTAUTH_SECRET="seu-secret-aqui"
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
GITHUB_CLIENT_ID="..."
GITHUB_CLIENT_SECRET="..."
```

## 📂 Estrutura

```
nutri-app/
├── app/
│   ├── (auth)/          # Login, registro, recuperação de senha
│   ├── (dashboard)/     # Painel do nutricionista
│   ├── (marketing)/     # Site público
│   └── api/             # API REST
├── components/
│   ├── ui/              # Componentes base (Button, Input, Card...)
│   ├── auth/            # Formulários de autenticação
│   ├── dashboard/       # Sidebar, Header, Stats
│   ├── patients/        # Tabelas e formulários de pacientes
│   ├── records/         # Prontuários
│   └── marketing/       # Navbar, Footer, Hero, Features
├── lib/
│   ├── auth.ts          # Configuração NextAuth
│   ├── db.ts            # Cliente Prisma
│   ├── utils.ts         # Utilitários
│   └── validations.ts   # Schemas Zod
└── prisma/
    └── schema.prisma    # Schema do banco de dados
```

## 🗄️ Models do Banco

- **User** — Usuários do sistema (nutricionistas, admin)
- **Account/Session** — OAuth e sessões (NextAuth)
- **Patient** — Pacientes cadastrados
- **MedicalRecord** — Prontuários e consultas
- **Consultation** — Detalhes de consultas
- **DietPlan** — Planos alimentares
- **BlogPost** — Posts do blog

## 🎨 Design System

Paleta de cores baseada em verde/esmeralda (saúde e natureza):
- Primary: `#16a34a` (green-600)
- Accent: `#0d9488` (teal-600)

## 📝 Licença

MIT © Nutri Team
