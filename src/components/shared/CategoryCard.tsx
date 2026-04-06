import { Link } from "react-router-dom";
import { Category } from "@/data/types";
import { motion } from "framer-motion";
import {
  Sparkles, Tag, BookOpen, Gift, Store, Heart, Baby, Calendar
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Sparkles, Tag, BookOpen, Gift, Store, Heart, Baby, Calendar,
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
        className="group flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all"
      >
        <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-display font-semibold text-sm mb-1">{category.name}</h3>
        <p className="text-xs text-muted-foreground">{category.productCount} produtos</p>
      </Link>
    </motion.div>
  );
}
