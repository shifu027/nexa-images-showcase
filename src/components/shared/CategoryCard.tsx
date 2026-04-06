import { Link } from "react-router-dom";
import { Category } from "@/data/types";
import { motion } from "framer-motion";
import { Sparkles, Tag, BookOpen, Gift, Store, Heart, Baby, Calendar } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Tag,
  BookOpen,
  Gift,
  Store,
  Heart,
  Baby,
  Calendar,
};

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export default function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.06, 0.3), duration: 0.4 }}
    >
      <Link
        to={`/categoria/${category.slug}`}
        className="group flex h-full flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/80 shadow-[0_8px_24px_-18px_rgba(20,20,20,0.22)] hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_35px_-18px_rgba(20,20,20,0.28)] transition-all"
      >
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sage-light to-rose-light flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-display font-semibold text-sm mb-1.5">{category.name}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-2 line-clamp-2">{category.description}</p>
        <p className="text-[11px] uppercase tracking-[0.16em] text-primary/90">{category.productCount} produtos</p>
      </Link>
    </motion.div>
  );
}
