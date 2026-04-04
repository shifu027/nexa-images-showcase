import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="container">
        <Breadcrumbs items={[{ label: "Contato" }]} />
        <div className="max-w-2xl mx-auto py-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">Contato</h1>
          <p className="text-muted-foreground text-center mb-10">Adoramos ouvir de você! Envie sua mensagem e responderemos com carinho.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="p-5 rounded-xl bg-card border border-border text-center">
              <Mail className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-display font-semibold text-sm mb-1">E-mail</h3>
              <p className="text-sm text-muted-foreground">contato@nexaimages.com</p>
            </div>
            <div className="p-5 rounded-xl bg-card border border-border text-center">
              <MessageSquare className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-display font-semibold text-sm mb-1">Redes Sociais</h3>
              <p className="text-sm text-muted-foreground">@nexaimages</p>
            </div>
          </div>
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <div><label className="text-sm font-medium block mb-1.5">Nome</label><input type="text" className="w-full px-4 py-2.5 bg-card border border-border rounded-lg text-sm outline-none focus:ring-1 focus:ring-primary/30" placeholder="Seu nome" /></div>
            <div><label className="text-sm font-medium block mb-1.5">E-mail</label><input type="email" className="w-full px-4 py-2.5 bg-card border border-border rounded-lg text-sm outline-none focus:ring-1 focus:ring-primary/30" placeholder="seu@email.com" /></div>
            <div><label className="text-sm font-medium block mb-1.5">Mensagem</label><textarea rows={5} className="w-full px-4 py-2.5 bg-card border border-border rounded-lg text-sm outline-none focus:ring-1 focus:ring-primary/30 resize-none" placeholder="Escreva sua mensagem..." /></div>
            <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity">Enviar mensagem</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
