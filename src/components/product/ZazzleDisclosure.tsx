import { Info } from "lucide-react";

interface ZazzleDisclosureProps {
  variant?: "inline" | "card";
}

export default function ZazzleDisclosure({ variant = "inline" }: ZazzleDisclosureProps) {
  if (variant === "card") {
    return (
      <div className="bg-sage-light rounded-xl p-5 md:p-6 border border-primary/10">
        <div className="flex gap-3">
          <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">Sobre a compra</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A finalização da compra, produção e entrega são realizadas pela Zazzle. 
              Ao clicar em "Comprar" ou "Personalizar", você será redirecionado para a plataforma de compra.
            </p>
            <p className="text-xs text-muted-foreground">
              Disponibilidade e valores podem variar na plataforma de finalização.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <p className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
      <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
      <span>
        Ao continuar, você será redirecionado para a plataforma de compra. 
        Produção e entrega pela Zazzle.
      </span>
    </p>
  );
}
