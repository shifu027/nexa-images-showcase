"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    category: "Geral",
    questions: [
      {
        q: "O que é o Nutri?",
        a: "O Nutri é uma plataforma de gestão nutricional completa para nutricionistas. Permite gerenciar pacientes, prontuários, planos alimentares, consultas e muito mais em um sistema integrado e seguro.",
      },
      {
        q: "Preciso instalar algum programa?",
        a: "Não! O Nutri é 100% baseado em nuvem. Acesse pelo navegador de qualquer dispositivo — computador, tablet ou celular — sem instalações.",
      },
      {
        q: "Para quem é o Nutri?",
        a: "O Nutri é ideal para nutricionistas que atendem pacientes individualmente, clínicas de nutrição, equipes multidisciplinares e profissionais que desejam modernizar sua prática.",
      },
    ],
  },
  {
    category: "Planos e preços",
    questions: [
      {
        q: "Existe período de teste gratuito?",
        a: "Sim! Todos os planos têm 14 dias de teste gratuito, com acesso completo a todas as funcionalidades. Não pedimos cartão de crédito no cadastro.",
      },
      {
        q: "Posso mudar de plano depois?",
        a: "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento, e a cobrança é proporcional ao período restante.",
      },
      {
        q: "Existe desconto para pagamento anual?",
        a: "Sim! No plano anual você economiza 2 meses de assinatura, equivalente a 16% de desconto em relação ao plano mensal.",
      },
      {
        q: "Como funciona o cancelamento?",
        a: "Você pode cancelar a qualquer momento pelo painel, sem precisar entrar em contato com o suporte. Não há multas ou fidelidade.",
      },
    ],
  },
  {
    category: "Segurança e dados",
    questions: [
      {
        q: "Meus dados e dos pacientes estão seguros?",
        a: "Absolutamente. Utilizamos criptografia AES-256 para armazenamento, TLS 1.3 para transmissão, backups automáticos diários e servidores certificados ISO 27001.",
      },
      {
        q: "O Nutri está em conformidade com a LGPD?",
        a: "Sim! O Nutri foi desenvolvido com privacy by design, seguindo todos os requisitos da LGPD e do CFN para prontuários eletrônicos.",
      },
      {
        q: "Posso exportar os dados dos meus pacientes?",
        a: "Sim, você pode exportar todos os dados em formatos PDF e CSV a qualquer momento, garantindo que seus dados sempre estejam com você.",
      },
    ],
  },
  {
    category: "Funcionalidades",
    questions: [
      {
        q: "Posso criar planos alimentares pelo Nutri?",
        a: "Sim! O Nutri possui uma ferramenta completa de criação de planos alimentares com cálculo automático de macros, calorias e distribuição de refeições.",
      },
      {
        q: "O sistema faz cálculo de IMC automaticamente?",
        a: "Sim, ao registrar peso e altura do paciente, o IMC é calculado automaticamente e exibido com a classificação correspondente.",
      },
      {
        q: "Há suporte para múltiplos usuários na mesma clínica?",
        a: "Sim, o plano Enterprise suporta múltiplos nutricionistas em um mesmo ambiente, com controle de permissões e visibilidade de pacientes.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="flex w-full items-start justify-between gap-4 py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-gray-900 text-sm leading-relaxed">{q}</span>
        {open ? (
          <ChevronUp className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
        )}
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          open ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="gradient-hero section">
        <div className="container text-center max-w-2xl mx-auto">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 mx-auto mb-6">
            <HelpCircle className="h-7 w-7 text-primary-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Perguntas frequentes
          </h1>
          <p className="text-xl text-gray-600">
            Encontre respostas para as dúvidas mais comuns sobre o Nutri.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-3xl mx-auto space-y-10">
          {faqs.map((group) => (
            <div key={group.category}>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                {group.category}
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white px-5 shadow-sm">
                {group.questions.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}

          {/* Still have questions? */}
          <div className="rounded-2xl bg-primary-50 border border-primary-200 p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-4">
              Nossa equipe está pronta para ajudar. Entre em contato conosco.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-700 transition-colors"
            >
              Falar com a equipe
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
