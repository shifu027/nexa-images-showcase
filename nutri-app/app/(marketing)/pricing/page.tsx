import type { Metadata } from "next";
import { PricingCard } from "@/components/marketing/pricing-card";
import { CheckCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Preços",
  description: "Planos flexíveis para nutricionistas de todos os tamanhos.",
};

const plans = [
  {
    name: "Básico",
    price: "R$ 49",
    period: "mês",
    description: "Ideal para nutricionistas iniciantes ou com poucos pacientes",
    popular: false,
    features: [
      "Até 50 pacientes ativos",
      "Prontuários eletrônicos completos",
      "Planos alimentares básicos",
      "Registro de consultas",
      "Acesso via navegador",
      "Suporte por e-mail",
      "Backup automático diário",
    ],
    cta: "Começar grátis",
    href: "/register",
  },
  {
    name: "Profissional",
    price: "R$ 97",
    period: "mês",
    description: "Para nutricionistas com crescimento acelerado",
    popular: true,
    features: [
      "Pacientes ilimitados",
      "Tudo do plano Básico",
      "Cálculo automático de macros",
      "Gráficos de evolução",
      "Relatórios personalizados",
      "Templates de planos alimentares",
      "Acesso mobile otimizado",
      "Suporte prioritário",
    ],
    cta: "Começar grátis",
    href: "/register",
  },
  {
    name: "Enterprise",
    price: "R$ 197",
    period: "mês",
    description: "Para clínicas e equipes multidisciplinares",
    popular: false,
    features: [
      "Tudo do plano Profissional",
      "Múltiplos nutricionistas",
      "Painel administrativo",
      "Relatórios da clínica",
      "Integração via API",
      "Personalização de marca",
      "Treinamento dedicado",
      "SLA 99.9% garantido",
      "Gerente de conta",
    ],
    cta: "Falar com equipe",
    href: "/contact",
  },
];

const faqs = [
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim! Não há fidelidade. Você pode cancelar quando quiser diretamente no painel, sem burocracia.",
  },
  {
    q: "Como funciona o período de teste gratuito?",
    a: "Todos os planos têm 14 dias grátis, sem necessidade de cartão de crédito. Você tem acesso completo ao plano escolhido durante o trial.",
  },
  {
    q: "Meus dados ficam salvos se eu cancelar?",
    a: "Após o cancelamento, seus dados ficam disponíveis por 30 dias para exportação. Após esse período, são excluídos permanentemente.",
  },
  {
    q: "Existe desconto para pagamento anual?",
    a: "Sim! No plano anual você economiza 2 meses (equivalente a 16% de desconto). Entre em contato para mais detalhes.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero section">
        <div className="container text-center max-w-2xl mx-auto">
          <div className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 uppercase tracking-wider mb-4">
            Preços transparentes
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Planos para cada etapa da sua carreira
          </h1>
          <p className="text-xl text-gray-600">
            14 dias gratuitos em todos os planos. Sem surpresas, sem fidelidade.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section bg-gray-50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Comparação detalhada
          </h2>
          <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-4 text-sm font-semibold text-gray-700">Funcionalidade</th>
                  <th className="text-center p-4 text-sm font-semibold text-gray-700">Básico</th>
                  <th className="text-center p-4 text-sm font-semibold text-primary-700 bg-primary-50">Profissional</th>
                  <th className="text-center p-4 text-sm font-semibold text-gray-700">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Pacientes", "50", "Ilimitado", "Ilimitado"],
                  ["Prontuários", "✓", "✓", "✓"],
                  ["Planos alimentares", "Básico", "Avançado", "Avançado"],
                  ["Cálculo de macros", "—", "✓", "✓"],
                  ["Relatórios e gráficos", "—", "✓", "✓"],
                  ["Múltiplos usuários", "—", "—", "✓"],
                  ["API de integração", "—", "—", "✓"],
                  ["Suporte", "E-mail", "Prioritário", "Gerente dedicado"],
                ].map(([feature, basic, pro, enterprise], i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="p-4 text-sm text-gray-700 font-medium">{feature}</td>
                    <td className="p-4 text-sm text-gray-600 text-center">{basic}</td>
                    <td className="p-4 text-sm text-primary-700 text-center font-medium bg-primary-50/50">{pro}</td>
                    <td className="p-4 text-sm text-gray-600 text-center">{enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Dúvidas sobre os planos</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-gray-200 p-5">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
