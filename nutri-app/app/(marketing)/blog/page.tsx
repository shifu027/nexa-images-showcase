import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos sobre nutrição, saúde e gestão clínica.",
};

const posts = [
  {
    slug: "como-calcular-macronutrientes",
    title: "Como calcular macronutrientes para seus pacientes",
    excerpt:
      "Um guia prático para nutricionistas calcularem proteínas, carboidratos e gorduras de forma personalizada para cada paciente.",
    category: "Nutrição Clínica",
    readTime: "8 min",
    publishedAt: "2024-11-15",
    featured: true,
  },
  {
    slug: "gestao-de-clinica-nutricional",
    title: "10 dicas para uma gestão eficiente da sua clínica nutricional",
    excerpt:
      "Descubra como organizar sua agenda, prontuários e finanças para ter mais tempo para o que realmente importa: seus pacientes.",
    category: "Gestão",
    readTime: "6 min",
    publishedAt: "2024-11-08",
    featured: false,
  },
  {
    slug: "lgpd-consultorio-nutricional",
    title: "LGPD no consultório: o que o nutricionista precisa saber",
    excerpt:
      "A Lei Geral de Proteção de Dados afeta diretamente como você armazena e processa dados dos seus pacientes. Saiba como se adequar.",
    category: "Regulamentação",
    readTime: "10 min",
    publishedAt: "2024-11-01",
    featured: false,
  },
  {
    slug: "prontuario-eletronico-beneficios",
    title: "Por que migrar para o prontuário eletrônico agora",
    excerpt:
      "Os benefícios de digitalizar seus prontuários vão além da organização. Entenda como isso pode transformar seus atendimentos.",
    category: "Tecnologia",
    readTime: "5 min",
    publishedAt: "2024-10-25",
    featured: false,
  },
  {
    slug: "nutricao-esportiva-tendencias",
    title: "Tendências em nutrição esportiva para 2025",
    excerpt:
      "As principais evidências científicas e tendências que vão moldar a nutrição esportiva nos próximos anos.",
    category: "Nutrição Esportiva",
    readTime: "7 min",
    publishedAt: "2024-10-18",
    featured: false,
  },
  {
    slug: "fidelizacao-pacientes",
    title: "Como fidelizar pacientes no consultório nutricional",
    excerpt:
      "Estratégias práticas para criar relacionamentos duradouros com seus pacientes e aumentar suas taxas de retorno.",
    category: "Marketing",
    readTime: "6 min",
    publishedAt: "2024-10-11",
    featured: false,
  },
];

const categoryColors: Record<string, "default" | "info" | "success" | "warning"> = {
  "Nutrição Clínica": "success",
  Gestão: "info",
  Regulamentação: "warning",
  Tecnologia: "default",
  "Nutrição Esportiva": "success",
  Marketing: "info",
};

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      <section className="gradient-hero section">
        <div className="container text-center max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Blog Nutri</h1>
          <p className="text-xl text-gray-600">
            Conteúdo sobre nutrição clínica, gestão de consultório e tecnologia para
            profissionais da saúde.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          {/* Featured post */}
          {featured && (
            <div className="mb-12">
              <Link
                href={`/blog/${featured.slug}`}
                className="group block rounded-2xl border border-gray-200 bg-gradient-to-br from-primary-50 to-primary-100/50 p-8 hover:border-primary-300 hover:shadow-card-hover transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant={categoryColors[featured.category] ?? "default"}>
                    {featured.category}
                  </Badge>
                  <Badge variant="secondary">Destaque</Badge>
                  <span className="text-xs text-gray-500">{featured.readTime} de leitura</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-2 text-primary-600 font-medium text-sm">
                  Ler artigo completo
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          )}

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-gray-200 bg-white p-5 hover:border-primary-300 hover:shadow-card-hover transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant={categoryColors[post.category] ?? "default"}>
                    {post.category}
                  </Badge>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{formatDate(post.publishedAt)}</span>
                  <span className="flex items-center gap-1 text-primary-600 font-medium">
                    Ler mais <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
