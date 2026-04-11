import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { Testimonials } from "@/components/marketing/testimonials";
import { PricingCard } from "@/components/marketing/pricing-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Nutri — Sistema de Gestão Nutricional para Nutricionistas",
  description:
    "Gerencie pacientes, consultas e planos alimentares com o sistema mais completo para nutricionistas.",
};

const plans = [
  {
    name: "Básico",
    price: "R$ 49",
    period: "mês",
    description: "Para nutricionistas que estão começando",
    popular: false,
    features: [
      "Até 50 pacientes",
      "Prontuários eletrônicos",
      "Planos alimentares básicos",
      "Acesso web",
      "Suporte por e-mail",
    ],
    cta: "Começar grátis",
    href: "/register",
  },
  {
    name: "Profissional",
    price: "R$ 97",
    period: "mês",
    description: "Para nutricionistas com demanda crescente",
    popular: true,
    features: [
      "Pacientes ilimitados",
      "Prontuários completos",
      "Planos alimentares avançados",
      "Cálculo de macros automático",
      "Relatórios e gráficos",
      "Acesso web e mobile",
      "Suporte prioritário",
    ],
    cta: "Começar grátis",
    href: "/register",
  },
  {
    name: "Enterprise",
    price: "R$ 197",
    period: "mês",
    description: "Para clínicas e equipes de nutrição",
    popular: false,
    features: [
      "Tudo do Profissional",
      "Múltiplos usuários",
      "Gestão de equipe",
      "API de integração",
      "Marca personalizada",
      "Gerente de conta dedicado",
      "SLA 99.9% de uptime",
    ],
    cta: "Falar com equipe",
    href: "/contact",
  },
];

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />

      {/* Stats section */}
      <section className="section bg-primary-600">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { value: "2.000+", label: "Nutricionistas" },
              { value: "150.000+", label: "Pacientes gerenciados" },
              { value: "98%", label: "Satisfação dos usuários" },
              { value: "24/7", label: "Suporte disponível" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-primary-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Pricing preview */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 uppercase tracking-wider mb-4">
              Preços
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Planos para todos os tamanhos de clínica
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              14 dias grátis em todos os planos. Sem cartão de crédito. Cancele quando quiser.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section gradient-hero border-t border-gray-100">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pronto para transformar sua prática?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Junte-se a mais de 2.000 nutricionistas que já estão usando o Nutri
            para crescer suas clínicas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button size="xl" asChild>
              <Link href="/register">
                Começar grátis agora
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link href="/contact">Falar com um especialista</Link>
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            {["14 dias grátis", "Sem cartão de crédito", "Cancele quando quiser", "Suporte 24/7"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
