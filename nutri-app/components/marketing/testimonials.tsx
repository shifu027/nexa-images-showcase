import { Star } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Dra. Ana Paula Ferreira",
    role: "Nutricionista Clínica • São Paulo, SP",
    image: null,
    rating: 5,
    content:
      "O Nutri transformou completamente minha prática clínica. Antes eu perdia horas com planilhas e papéis. Hoje, em poucos minutos, tenho o histórico completo de cada paciente, o plano alimentar pronto e os dados de evolução organizados. Indispensável!",
  },
  {
    name: "Dr. Carlos Eduardo Santos",
    role: "Nutricionista Esportivo • Rio de Janeiro, RJ",
    image: null,
    rating: 5,
    content:
      "A funcionalidade de monitoramento de peso e composição corporal é incrível. Consigo acompanhar a evolução dos meus atletas em tempo real e ajustar os planos conforme a progressão. A interface é super intuitiva e meus pacientes adoram.",
  },
  {
    name: "Dra. Maria Fernanda Lima",
    role: "Nutricionista Pediátrica • Belo Horizonte, MG",
    image: null,
    rating: 5,
    content:
      "Como mãe e nutricionista, valorizo muito a segurança dos dados dos pacientes. O Nutri é totalmente seguro e em conformidade com a LGPD. Além disso, o suporte é excepcional — respondem em minutos e sempre resolvem!",
  },
  {
    name: "Dra. Juliana Costa",
    role: "Nutricionista Funcional • Curitiba, PR",
    image: null,
    rating: 5,
    content:
      "Migrei de outro sistema e não poderia estar mais feliz. A criação de planos alimentares personalizados é muito mais rápida, e o histórico completo de consultas me ajuda a tomar decisões clínicas mais embasadas.",
  },
  {
    name: "Dr. Roberto Mendes",
    role: "Nutricionista Oncológico • Brasília, DF",
    image: null,
    rating: 5,
    content:
      "Trabalho com pacientes em tratamento oncológico que precisam de acompanhamento minucioso. O Nutri me permite registrar todos os detalhes, prescrições e evolução de forma organizada. Não consigo mais imaginar trabalhar sem ele.",
  },
  {
    name: "Dra. Patricia Oliveira",
    role: "Nutricionista • Florianópolis, SC",
    image: null,
    rating: 5,
    content:
      "O custo-benefício é excelente. Por uma mensalidade acessível, tenho acesso a todas as funcionalidades que preciso. Em 3 meses usando o Nutri, aumentei minha capacidade de atendimento em 40% sem perder qualidade.",
  },
];

export function Testimonials() {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 uppercase tracking-wider mb-4">
            Depoimentos
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Mais de 2.000 nutricionistas já confiam no Nutri
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Veja o que os profissionais de nutrição dizem sobre como o Nutri transformou
            suas práticas clínicas.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-card-hover transition-all duration-200"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm leading-relaxed text-gray-600 mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar name={testimonial.name} size="sm" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
