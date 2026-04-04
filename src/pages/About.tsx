import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Sparkles, Heart, Palette, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Layout>
      <div className="container">
        <Breadcrumbs items={[{ label: "Sobre a Marca" }]} />
        <div className="max-w-3xl mx-auto py-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-6 text-center">Sobre a Nexa Images</h1>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>A <strong className="text-foreground">Nexa Images</strong> nasceu do amor pelos detalhes — por um sticker que transforma o laptop, uma etiqueta que torna o presente mais especial, uma caneca que aquece não só o café, mas o coração.</p>
            <p>Somos uma marca criativa dedicada a criar ilustrações delicadas, acolhedoras e cheias de personalidade. Nosso universo é feito de capivaras leitoras, jardins botânicos, animais da floresta, cantinhos de leitura e tudo o que traz conforto ao dia a dia.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
              {[
                { icon: Sparkles, title: "Criatividade", text: "Cada ilustração é original e pensada com carinho." },
                { icon: Heart, title: "Acolhimento", text: "Designs que transmitem conforto e ternura." },
                { icon: Palette, title: "Qualidade", text: "Materiais premium e impressão de alta fidelidade." },
                { icon: BookOpen, title: "Inspiração", text: "Livros, natureza, café e pequenos prazeres." },
              ].map(item => (
                <div key={item.title} className="p-5 rounded-xl bg-card border border-border">
                  <item.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-display font-semibold text-sm text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm">{item.text}</p>
                </div>
              ))}
            </div>
            <p>Nossos produtos são disponibilizados através da Zazzle, plataforma reconhecida mundialmente pela qualidade de impressão e entrega. Assim, podemos focar no que fazemos de melhor: criar com amor.</p>
            <div className="text-center pt-4">
              <Link to="/loja" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity">Explorar catálogo</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
