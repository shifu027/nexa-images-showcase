import type { Metadata } from "next";
import { Heart, Target, Users, Award, Leaf } from "lucide-react";
import { getInitials } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sobre nós",
  description: "Conheça a história, missão e valores por trás do Nutri.",
};

const team = [
  {
    name: "Dr. Rafael Mendes",
    role: "CEO & Co-fundador",
    bio: "Nutricionista com 15 anos de experiência e PhD em tecnologia em saúde. Fundou o Nutri após perceber a necessidade de modernizar a gestão nutricional.",
  },
  {
    name: "Dra. Camila Torres",
    role: "CTO & Co-fundadora",
    bio: "Engenheira de software com especialização em sistemas de saúde. Lidera o desenvolvimento tecnológico focando em usabilidade e segurança.",
  },
  {
    name: "Dr. Lucas Oliveira",
    role: "Head de Produto",
    bio: "Nutricionista e UX designer. Garante que cada funcionalidade do Nutri seja criada pensando na realidade diária do nutricionista.",
  },
  {
    name: "Ana Beatriz Lima",
    role: "Head de Customer Success",
    bio: "Especialista em educação nutricional, responsável por garantir que cada usuário extraia o máximo da plataforma.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Saúde em primeiro lugar",
    description:
      "Tudo que fazemos tem como objetivo final melhorar a saúde das pessoas, auxiliando nutricionistas a prestarem o melhor cuidado.",
  },
  {
    icon: Target,
    title: "Simplicidade com poder",
    description:
      "Ferramentas poderosas não precisam ser complicadas. Construímos o Nutri para ser intuitivo sem abrir mão da robustez.",
  },
  {
    icon: Users,
    title: "Comunidade primeiro",
    description:
      "Ouvimos ativamente nossos usuários. Cada feature do Nutri nasce de uma necessidade real de nutricionistas como você.",
  },
  {
    icon: Award,
    title: "Excelência técnica",
    description:
      "Investimos continuamente em segurança, performance e confiabilidade para que você possa focar no que mais importa.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero section">
        <div className="container text-center max-w-3xl mx-auto">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-600 mx-auto mb-6">
            <Leaf className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Sobre o Nutri
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Nascemos da frustração de nutricionistas que precisavam de uma ferramenta
            moderna, simples e poderosa para gerenciar suas práticas clínicas.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 uppercase tracking-wider mb-4">
                Nossa missão
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Empoderar nutricionistas com tecnologia de ponta
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                O Nutri nasceu em 2021 quando Dr. Rafael Mendes, nutricionista com mais de
                15 anos de experiência, percebeu que a maioria das ferramentas disponíveis
                eram ou muito complexas, ou muito simples para as necessidades reais dos
                profissionais da área.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Junto com Camila Torres, especialista em tecnologia para saúde, criaram o
                Nutri com uma missão clara: construir a plataforma de gestão nutricional
                mais intuitiva e completa do Brasil.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2021", label: "Ano de fundação" },
                { value: "2.000+", label: "Nutricionistas" },
                { value: "150k+", label: "Pacientes" },
                { value: "98%", label: "Satisfação" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-primary-50 border border-primary-100 p-6 text-center"
                >
                  <p className="text-3xl font-bold text-primary-700">{stat.value}</p>
                  <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Nossos valores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-600 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa equipe</h2>
            <p className="text-gray-600">
              Profissionais apaixonados por saúde e tecnologia, trabalhando para
              transformar a nutrição clínica.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-600">
                    {getInitials(member.name.replace(/^(Dr\.|Dra\.)\s*/, ""))}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-primary-600 mb-3">{member.role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
