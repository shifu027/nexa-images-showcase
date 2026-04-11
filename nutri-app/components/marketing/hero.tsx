import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-200/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary-300/30 blur-3xl" />
      </div>

      <div className="container relative py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          {/* Social proof */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-primary-500 text-primary-500" />
              ))}
            </div>
            <span>Mais de 2.000 nutricionistas confiam no Nutri</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Gerencie seus pacientes com{" "}
            <span className="text-primary-600">inteligência e eficiência</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl max-w-2xl mx-auto">
            O Nutri é a plataforma completa para nutricionistas modernos. Prontuários eletrônicos,
            planos alimentares personalizados, acompanhamento de peso e muito mais — tudo em um
            só lugar.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/register">
                Começar gratuitamente
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">Ver planos e preços</Link>
            </Button>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            14 dias grátis • Sem cartão de crédito • Cancele quando quiser
          </p>
        </div>

        {/* Dashboard preview mockup */}
        <div className="mt-16 mx-auto max-w-5xl">
          <div className="relative rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
            {/* Browser bar */}
            <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4">
                <div className="rounded-md bg-white border border-gray-200 px-3 py-1 text-xs text-gray-500 text-center max-w-xs mx-auto">
                  app.nutri.com.br/dashboard
                </div>
              </div>
            </div>
            {/* Mock dashboard */}
            <div className="flex h-80 overflow-hidden">
              {/* Sidebar */}
              <div className="w-48 bg-gray-900 p-4 flex-shrink-0">
                <div className="h-8 w-24 rounded-lg bg-primary-600 mb-6" />
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`h-8 rounded-lg mb-2 ${i === 0 ? "bg-primary-700" : "bg-gray-800"}`} />
                ))}
              </div>
              {/* Content */}
              <div className="flex-1 bg-gray-50 p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Pacientes", value: "127" },
                    { label: "Consultas", value: "43" },
                    { label: "Este mês", value: "R$ 8.900" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-white border border-gray-200 p-4">
                      <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                      <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-white border border-gray-200 p-4">
                  <div className="h-4 w-32 bg-gray-200 rounded mb-4" />
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
                      <div className="h-8 w-8 rounded-full bg-primary-100" />
                      <div className="flex-1">
                        <div className="h-3 w-24 bg-gray-200 rounded mb-1" />
                        <div className="h-2.5 w-16 bg-gray-100 rounded" />
                      </div>
                      <div className="h-6 w-16 rounded-full bg-green-100" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
