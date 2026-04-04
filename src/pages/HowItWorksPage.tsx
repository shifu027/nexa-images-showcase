import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { ExternalLink, Sparkles, Shield, Truck, Paintbrush } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { icon: Sparkles, title: "Explore o catálogo", text: "Navegue pelo site da Nexa Images e descubra stickers, etiquetas, papelaria e presentes com ilustrações exclusivas." },
  { icon: Paintbrush, title: "Personalize (se quiser)", text: "Muitos produtos permitem personalização com nome, frase, monograma ou foto. Clique em 'Personalizar e comprar' para customizar." },
  { icon: ExternalLink, title: "Finalize na Zazzle", text: "Ao clicar em 'Comprar na Zazzle' ou 'Personalizar e comprar', você será redirecionado para a Zazzle, onde poderá finalizar sua compra com segurança." },
  { icon: Shield, title: "Pagamento seguro", text: "A Zazzle oferece checkout protegido com diversas formas de pagamento. Toda a transação financeira acontece na plataforma deles." },
  { icon: Truck, title: "Produção e entrega", text: "A Zazzle cuida da produção com materiais de qualidade e do envio até sua casa. Prazos e rastreamento disponíveis na plataforma." },
];

export default function HowItWorksPage() {
  return (
    <Layout>
      <div className="container">
        <Breadcrumbs items={[{ label: "Como Funciona" }]} />
        <div className="max-w-3xl mx-auto py-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">Como Funciona a Compra</h1>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            A Nexa Images é uma vitrine criativa. Apresentamos nossos produtos aqui, e a finalização da compra acontece com segurança na plataforma Zazzle.
          </p>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-sage-light flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-medium text-primary mb-1">Passo {i + 1}</div>
                  <h3 className="font-display font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 rounded-xl bg-sage-light border border-primary/10">
            <h3 className="font-display font-semibold mb-2">Importante</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• A finalização da compra, produção e entrega são realizadas pela Zazzle.</li>
              <li>• Disponibilidade e valores podem variar na plataforma de finalização.</li>
              <li>• Trocas e devoluções seguem a política da Zazzle.</li>
              <li>• A Nexa Images é responsável apenas pela criação dos designs e curadoria do catálogo.</li>
            </ul>
          </div>
          <div className="text-center mt-10">
            <Link to="/loja" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity">Explorar catálogo</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
