import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Instagram, Mail, MessageSquareHeart } from "lucide-react";

export default function Contact() {
  return (
    <Layout title="Contato" description="Entre em contato com a Nexa Images para tirar dúvidas, enviar sugestões ou conversar sobre os produtos." canonical="/contato">
      <div className="container">
        <Breadcrumbs items={[{ label: "Contato" }]} />

        <div className="max-w-4xl mx-auto py-8 md:py-12">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs uppercase tracking-[0.16em] text-primary mb-2">Contato</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">Vamos conversar?</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Se você quer tirar dúvidas sobre produtos, personalização ou apenas mandar uma mensagem gentil, a Nexa Images vai adorar te ouvir.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-8">
            <div className="rounded-[2rem] border border-border/70 bg-card p-6 md:p-7 shadow-[0_24px_50px_-34px_rgba(0,0,0,0.3)]">
              <h2 className="font-display text-xl font-semibold mb-5">Canais de contato</h2>

              <div className="space-y-4">
                <a href="mailto:contato@nexaimages.com.br" className="flex items-start gap-3 p-4 rounded-2xl bg-muted/60 border border-border/60 hover:border-primary/30 transition-colors">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">E-mail</h3>
                    <p className="text-sm text-muted-foreground">contato@nexaimages.com.br</p>
                    <p className="text-xs text-muted-foreground mt-1">Ideal para dúvidas gerais e solicitações.</p>
                  </div>
                </a>

                <a href="https://instagram.com/nexaimages" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-4 rounded-2xl bg-muted/60 border border-border/60 hover:border-primary/30 transition-colors">
                  <Instagram className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Instagram</h3>
                    <p className="text-sm text-muted-foreground">@nexaimages</p>
                    <p className="text-xs text-muted-foreground mt-1">Para acompanhar novidades, bastidores e lançamentos.</p>
                  </div>
                </a>
              </div>

              <div className="mt-6 rounded-2xl bg-sage-light/60 border border-border/60 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquareHeart className="w-4 h-4 text-primary" />
                  <p className="text-sm font-semibold">Antes de enviar</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Para dúvidas sobre pagamento, produção ou entrega de um pedido já realizado, verifique também as informações da plataforma de finalização da compra.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-card p-6 md:p-7 shadow-[0_24px_50px_-34px_rgba(0,0,0,0.3)]">
              <h2 className="font-display text-xl font-semibold mb-5">Envie sua mensagem</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm font-medium block mb-1.5">Nome</label>
                  <input type="text" className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary/30" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">E-mail</label>
                  <input type="email" className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary/30" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">Mensagem</label>
                  <textarea rows={6} className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary/30 resize-none" placeholder="Escreva sua mensagem com calma. Vamos adorar ler." />
                </div>
                <button type="submit" className="w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity">
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
