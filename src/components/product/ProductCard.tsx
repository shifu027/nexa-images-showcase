import { Link } from "react-router-dom";
import { ExternalLink, Paintbrush, Clock } from "lucide-react";
import { Product } from "@/data/types";
import { motion } from "framer-motion";
import { resolveProductBuyUrl, resolveProductPersonalizeUrl } from "@/lib/zazzle";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const buyUrl = resolveProductBuyUrl(product);
  const personalizeUrl = resolveProductPersonalizeUrl(product);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.4 }}
      className="group"
    >
      <Link to={`/produto/${product.slug}`} className="block">
        <div className="relative aspect-square rounded-xl overflow-hidden bg-muted mb-3 border border-border shadow-sm group-hover:shadow-md transition-shadow">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-md">
              {product.badge}
            </span>
          )}
          {product.newArrival && !product.badge && (
            <span className="absolute top-3 left-3 px-2.5 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-md">
              Novidade
            </span>
          )}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1 capitalize">{product.category === "labels" ? "Labels & Etiquetas" : product.category}</p>
          <h3 className="font-display font-semibold text-sm leading-snug mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
          {product.optionalPriceNote && (
            <p className="text-xs text-warm-light mt-1.5">{product.optionalPriceNote}</p>
          )}
        </div>
      </Link>

      <div className="flex items-center gap-2 mt-3">
        {buyUrl ? (
          <a
            href={buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-primary text-primary-foreground text-xs font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="w-3 h-3" />
            Comprar na Zazzle
          </a>
        ) : (
          <span className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-muted text-muted-foreground text-xs font-medium rounded-lg cursor-default">
            <Clock className="w-3 h-3" />
            Link em breve
          </span>
        )}
        {personalizeUrl && (
          <a
            href={personalizeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 border border-border text-xs font-medium rounded-lg hover:bg-muted transition-colors"
          >
            <Paintbrush className="w-3 h-3" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
