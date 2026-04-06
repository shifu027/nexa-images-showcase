import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQSection from "@/components/shared/FAQSection";
import { generalFAQ } from "@/data/faq";

export default function FAQPage() {
  return (
    <Layout title="Perguntas Frequentes" description="Tudo o que você precisa saber sobre a Nexa Images, compras na Zazzle, personalização e entrega.">
      <div className="container">
        <Breadcrumbs items={[{ label: "FAQ" }]} />
        <div className="max-w-3xl mx-auto py-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">Perguntas Frequentes</h1>
          <p className="text-muted-foreground text-center mb-10">Tudo o que você precisa saber sobre a Nexa Images.</p>
          <FAQSection items={generalFAQ} />
        </div>
      </div>
    </Layout>
  );
}
