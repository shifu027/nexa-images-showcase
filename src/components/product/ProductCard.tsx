import { Link } from "react-router-dom";
import { ExternalLink, Paintbrush, Clock } from "lucide-react";
import { Product } from "@/data/types";
import { motion } from "framer-motion";
import { getBuyButtonLabel, resolveProductBuyUrl, resolveProductPersonalizeUrl } from "@/lib/zazzle";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const buyUrl = resolveProductBuyUrl(product);
  const personalizeUrl = resolveProductPersonalizeUrl(product);
  const buyLabel = getBuyButtonLabel(product);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.45 }}
      className="group"
    >
      <div className="rounded-2xl border border-border/80 bg-card/90 shadow-[0_10px_30px_-18px_rgba(30,30,30,0.28)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_45px_-18px_rgba(30,30,30,0.32)]">
        <Link to={`/produto/${product.slug}`} className="block p-3 sm:p-4">
          <div className="relative aspect-square rounded-[1.1rem] overflow-hidden bg-gradient-to-br from-muted via-background to-sage-light/40 mb-4 border border-border/60">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent opacity-80" />

            {product.badge && (
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-primary-foreground text-[11px] font-semibold rounded-full shadow-sm">
                {product.badge}
              </span>
            )}

            {product.newArrival && !product.badge && (
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-accent text-accent-foreground text-[11px] font-semibold rounded-full shadow-sm">
                Novidade
              </span>
            )}
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-1.5">
              {product.category === "labels" ? "Labels & Etiquetas" : product.category}
            </p>
            <h3 className="font-display font-semibold text-[15px] leading-snug mb-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed min-h-[2.8rem]">
              {product.shortDescription}
            </p>
            {product.optionalPriceNote && (
              <p className="text-xs text-warm-light mt-2">{product.optionalPriceNote}</p>
            )}
          </div>
        </Link>

        <div className="px-3 sm:px-4 pb-4 flex items-center gap-2">
          {buyUrl ? (
            <a
              href={buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 bg-primary text-primary-foreground text-xs font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {buyLabel}
            </a>
          ) : (
            <span className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 bg-muted text-muted-foreground text-xs font-semibold rounded-xl cursor-default">
              <Clock className="w-3.5 h-3.5" />
              Link em breve
            </span>
          )}

          {personalizeUrl && (
            <a
              href={personalizeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 border border-border text-xs font-semibold rounded-xl hover:bg-muted transition-colors"
              aria-label={`Personalizar ${product.name} na Zazzle`}
            >
              <Paintbrush className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
