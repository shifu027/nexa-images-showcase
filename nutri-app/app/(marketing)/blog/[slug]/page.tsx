import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const posts: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
}> = {
  "como-calcular-macronutrientes": {
    title: "Como calcular macronutrientes para seus pacientes",
    excerpt: "Um guia prático para nutricionistas calcularem proteínas, carboidratos e gorduras.",
    category: "Nutrição Clínica",
    readTime: "8 min",
    publishedAt: "2024-11-15",
    author: "Dr. Rafael Mendes",
    content: `
## Introdução

O cálculo de macronutrientes é uma das habilidades fundamentais de um nutricionista. Um plano alimentar bem estruturado considera as necessidades individuais de cada paciente, seus objetivos e condições de saúde.

## Por que os macronutrientes importam?

Os macronutrientes — proteínas, carboidratos e gorduras — são as fontes de energia do nosso organismo. Cada um tem funções específicas:

- **Proteínas**: construção e reparo de tecidos, enzimas, hormônios
- **Carboidratos**: principal fonte de energia, especialmente para o cérebro
- **Gorduras**: produção hormonal, absorção de vitaminas, proteção de órgãos

## Como calcular as necessidades calóricas

Antes de calcular os macros, é preciso estimar a necessidade calórica total do paciente:

### 1. Calcule o Metabolismo Basal (TMB)

Utilize a equação de Harris-Benedict revisada:

**Homens**: TMB = 88,36 + (13,4 × peso em kg) + (4,8 × altura em cm) - (5,7 × idade)

**Mulheres**: TMB = 447,6 + (9,2 × peso em kg) + (3,1 × altura em cm) - (4,3 × idade)

### 2. Aplique o fator de atividade

Multiplique a TMB pelo fator correspondente ao nível de atividade:
- Sedentário: × 1,2
- Levemente ativo: × 1,375
- Moderadamente ativo: × 1,55
- Muito ativo: × 1,725
- Extremamente ativo: × 1,9

## Distribuição dos macronutrientes

A distribuição ideal varia conforme os objetivos do paciente:

### Para emagrecimento:
- Proteínas: 30-35% do VCT
- Carboidratos: 35-40% do VCT
- Gorduras: 25-30% do VCT

### Para manutenção:
- Proteínas: 15-20% do VCT
- Carboidratos: 50-55% do VCT
- Gorduras: 25-30% do VCT

### Para ganho de massa muscular:
- Proteínas: 25-30% do VCT
- Carboidratos: 45-55% do VCT
- Gorduras: 20-25% do VCT

## Ferramentas para facilitar o processo

O Nutri calcula automaticamente os macronutrientes baseado nos dados do paciente, economizando tempo e reduzindo erros. Com apenas alguns cliques, você tem um plano alimentar completo e personalizado.

## Conclusão

O cálculo de macronutrientes é uma ciência, mas também uma arte. Combine os cálculos com sua experiência clínica e as preferências individuais do paciente para resultados ótimos.
    `,
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Artigo não encontrado" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) notFound();

  const paragraphs = post.content.trim().split("\n\n").filter(Boolean);

  return (
    <article className="section bg-white">
      <div className="container max-w-3xl mx-auto">
        {/* Back */}
        <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2">
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao blog
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="success">{post.category}</Badge>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime} de leitura
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.publishedAt)}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">{post.excerpt}</p>
          <div className="mt-4 text-sm text-gray-500">Por <strong>{post.author}</strong></div>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          {paragraphs.map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace("## ", "")}</h2>;
            }
            if (paragraph.startsWith("### ")) {
              return <h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-3">{paragraph.replace("### ", "")}</h3>;
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").filter(l => l.startsWith("- "));
              return (
                <ul key={i} className="list-disc list-inside space-y-1 my-4">
                  {items.map((item, j) => (
                    <li key={j} className="text-gray-700" dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-gray-700 leading-relaxed my-4"
                dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
              />
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-primary-50 border border-primary-200 p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Experimente o Nutri gratuitamente
          </h3>
          <p className="text-gray-600 mb-4">
            Automatize os cálculos de macros e muito mais com nossa plataforma.
          </p>
          <Button asChild>
            <Link href="/register">Começar 14 dias grátis</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
