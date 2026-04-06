import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function Privacy() {
  return (
    <Layout title="Política de Privacidade" description="Como a Nexa Images trata suas informações pessoais. Política de privacidade e uso de cookies.">
      <div className="container">
        <Breadcrumbs items={[{ label: "Política de Privacidade" }]} />
        <div className="max-w-3xl mx-auto py-8">
          <h1 className="font-display text-3xl font-bold mb-6">Política de Privacidade</h1>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>A Nexa Images respeita sua privacidade. Esta política descreve como tratamos suas informações.</p>
            <h2 className="font-display text-lg font-semibold text-foreground pt-4">Coleta de dados</h2>
            <p>Não coletamos dados pessoais através deste site, exceto quando você nos contata diretamente pelo formulário de contato. As informações enviadas são utilizadas exclusivamente para responder à sua mensagem.</p>
            <h2 className="font-display text-lg font-semibold text-foreground pt-4">Compras na Zazzle</h2>
            <p>Ao ser redirecionado para a Zazzle, seus dados serão tratados conforme a política de privacidade da Zazzle. Recomendamos a leitura dos termos da plataforma antes de finalizar sua compra.</p>
            <h2 className="font-display text-lg font-semibold text-foreground pt-4">Cookies</h2>
            <p>Este site pode utilizar cookies para melhorar a experiência de navegação. Nenhuma informação pessoal identificável é armazenada através de cookies.</p>
            <h2 className="font-display text-lg font-semibold text-foreground pt-4">Contato</h2>
            <p>Para dúvidas sobre privacidade, entre em contato através da página de Contato.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
