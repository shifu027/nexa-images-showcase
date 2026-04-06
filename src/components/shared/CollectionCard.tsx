import { Link } from "react-router-dom";
import { Collection } from "@/data/types";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CollectionCardProps {
  collection: Collection;
  index?: number;
}

export default function CollectionCard({ collection, index = 0 }: CollectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.08, 0.4), duration: 0.5 }}
    >
      <Link
        to={`/colecao/${collection.slug}`}
        className="group block rounded-2xl overflow-hidden border border-border/80 bg-card shadow-[0_10px_28px_-20px_rgba(20,20,20,0.28)] hover:-translate-y-1 hover:shadow-[0_24px_48px_-22px_rgba(20,20,20,0.34)] transition-all"
      >
        <div className="relative aspect-[4/3]">
          <img
            src={collection.image}
            alt={collection.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <p className="text-[11px] uppercase tracking-[0.16em] text-background/70 mb-2">
              {collection.productCount} produtos
            </p>
            <h3 className="font-display text-lg md:text-xl font-semibold text-background mb-2">
              {collection.name}
            </h3>
            <p className="text-sm text-background/85 line-clamp-2 leading-relaxed mb-3">
              {collection.description}
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-background group-hover:gap-2 transition-all">
              Explorar coleção <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
