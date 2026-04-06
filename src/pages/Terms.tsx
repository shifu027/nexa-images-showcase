import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function Terms() {
  return (
    <Layout title="Termos de Uso" description="Termos de uso do site Nexa Images. Informações sobre compras via Zazzle e propriedade intelectual.">
      <div className="container">
        <Breadcrumbs items={[{ label: "Termos de Uso" }]} />
        <div className="max-w-3xl mx-auto py-8 prose-sm">
          <h1 className="font-display text-3xl font-bold mb-6">Termos de Uso</h1>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>Ao utilizar o site da Nexa Images, você concorda com os termos descritos abaixo.</p>
            <h2 className="font-display text-lg font-semibold text-foreground pt-4">1. Sobre o site</h2>
            <p>A Nexa Images é uma vitrine digital que apresenta produtos criativos como stickers, etiquetas, papelaria e presentes personalizados. A finalização da compra, produção e entrega são realizadas pela plataforma Zazzle.</p>
            <h2 className="font-display text-lg font-semibold text-foreground pt-4">2. Compras</h2>
            <p>Ao clicar nos botões de compra ou personalização, você será redirecionado para a Zazzle. Todas as transações financeiras, políticas de devolução e atendimento ao consumidor referentes ao pedido são de responsabilidade da Zazzle.</p>
            <h2 className="font-display text-lg font-semibold text-foreground pt-4">3. Propriedade intelectual</h2>
            <p>Todas as ilustrações, designs e conteúdos visuais apresentados no site são de propriedade exclusiva da Nexa Images e protegidos por direitos autorais. É proibida a reprodução sem autorização.</p>
            <h2 className="font-display text-lg font-semibold text-foreground pt-4">4. Preços e disponibilidade</h2>
            <p>Os preços exibidos são referências e podem variar na plataforma de finalização. A Nexa Images não se responsabiliza por alterações de preço, disponibilidade ou promoções na Zazzle.</p>
            <h2 className="font-display text-lg font-semibold text-foreground pt-4">5. Alterações</h2>
            <p>Reservamo-nos o direito de alterar estes termos a qualquer momento. Recomendamos a leitura periódica desta página.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
