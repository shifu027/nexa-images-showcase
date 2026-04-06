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
        className="group block rounded-xl overflow-hidden bg-muted border border-border shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="relative aspect-[4/3]">
          <img
            src={collection.image}
            alt={collection.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-display text-lg font-semibold text-background mb-1">
              {collection.name}
            </h3>
            <p className="text-sm text-background/80 line-clamp-2 mb-2">
              {collection.description}
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-background/90 group-hover:gap-2 transition-all">
              Ver coleção <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
