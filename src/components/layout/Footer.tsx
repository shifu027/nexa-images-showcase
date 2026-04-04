import { Link } from "react-router-dom";
import { Sparkles, Heart } from "lucide-react";

const footerLinks = {
  explorar: [
    { label: "Catálogo", href: "/loja" },
    { label: "Coleções", href: "/colecoes" },
    { label: "Stickers", href: "/stickers" },
    { label: "Labels & Etiquetas", href: "/labels" },
    { label: "Presentes", href: "/presentes" },
  ],
  institucional: [
    { label: "Sobre a Marca", href: "/sobre" },
    { label: "Como Funciona", href: "/como-funciona" },
    { label: "FAQ", href: "/faq" },
    { label: "Contato", href: "/contato" },
  ],
  legal: [
    { label: "Termos de Uso", href: "/termos" },
    { label: "Política de Privacidade", href: "/privacidade" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-display text-xl font-semibold">Nexa Images</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Stickers, etiquetas e papelaria com estética delicada e acolhedora. 
              Cada produto é criado para trazer beleza ao seu dia a dia.
            </p>
            <p className="text-xs text-muted-foreground">
              A finalização da compra é realizada pela Zazzle.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Explorar</h4>
            <ul className="space-y-2.5">
              {footerLinks.explorar.map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Institucional</h4>
            <ul className="space-y-2.5">
              {footerLinks.institucional.map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nexa Images. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-accent fill-accent" /> e muita criatividade
          </p>
        </div>
      </div>
    </footer>
  );
}
