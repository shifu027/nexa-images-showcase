import Link from "next/link";
import { Leaf, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  product: [
    { href: "/pricing", label: "Preços" },
    { href: "/about", label: "Sobre nós" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
  ],
  legal: [
    { href: "/privacy", label: "Privacidade" },
    { href: "/terms", label: "Termos de uso" },
    { href: "/cookies", label: "Cookies" },
  ],
  support: [
    { href: "/contact", label: "Contato" },
    { href: "/docs", label: "Documentação" },
    { href: "/status", label: "Status" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
                <Leaf className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Nutri</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              A plataforma mais completa para nutricionistas modernos. Gerencie pacientes,
              consultas e planos alimentares com facilidade.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 hover:bg-primary-600 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 hover:bg-primary-600 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 hover:bg-primary-600 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Produto</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Suporte</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <Mail className="h-4 w-4" />
              contato@nutri.com.br
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-4 w-4" />
              (11) 99999-9999
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              São Paulo, SP
            </span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Nutri. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
