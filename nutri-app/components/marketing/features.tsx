import {
  Users,
  FileText,
  TrendingUp,
  Calendar,
  Shield,
  Smartphone,
  BarChart3,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Gestão de Pacientes",
    description:
      "Cadastro completo com histórico clínico, dados antropométricos, alergias, medicamentos e acompanhamento evolutivo.",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: FileText,
    title: "Prontuário Eletrônico",
    description:
      "Registre consultas, avaliações nutricionais, diagnósticos e prescrições de forma organizada e segura.",
    color: "text-primary-600",
    bg: "bg-primary-100",
  },
  {
    icon: TrendingUp,
    title: "Planos Alimentares",
    description:
      "Crie planos personalizados com cálculo automático de macros, calorias e distribuição de refeições.",
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    icon: BarChart3,
    title: "Acompanhamento de Peso",
    description:
      "Monitore a evolução do peso, IMC e medidas corporais com gráficos visuais intuitivos.",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    icon: Calendar,
    title: "Agenda Integrada",
    description:
      "Gerencie sua agenda de consultas, retornos e lembretes automáticos para pacientes.",
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    icon: MessageSquare,
    title: "Comunicação",
    description:
      "Envie orientações, planos e lembretes diretamente para seus pacientes pelo sistema.",
    color: "text-pink-600",
    bg: "bg-pink-100",
  },
  {
    icon: Shield,
    title: "Segurança e LGPD",
    description:
      "Dados criptografados, backups automáticos e total conformidade com a Lei Geral de Proteção de Dados.",
    color: "text-red-600",
    bg: "bg-red-100",
  },
  {
    icon: Smartphone,
    title: "Acesso em Qualquer Lugar",
    description:
      "Plataforma 100% responsiva. Acesse do computador, tablet ou celular com total segurança.",
    color: "text-teal-600",
    bg: "bg-teal-100",
  },
];

export function Features() {
  return (
    <section className="section bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 uppercase tracking-wider mb-4">
            Funcionalidades
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Tudo que você precisa para uma clínica de sucesso
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Do prontuário ao plano alimentar, o Nutri centraliza toda a gestão da sua prática
            nutricional em uma plataforma poderosa e fácil de usar.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-xl border border-gray-200 bg-white p-6 hover:border-primary-200 hover:shadow-card-hover transition-all duration-200"
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${feature.bg} ${feature.color} mb-4`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
