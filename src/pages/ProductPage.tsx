import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductGrid from "@/components/product/ProductGrid";
import ZazzleDisclosure from "@/components/product/ZazzleDisclosure";
import FAQSection from "@/components/shared/FAQSection";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { collections } from "@/data/collections";
import { categories } from "@/data/categories";
import { productFAQ } from "@/data/faq";
import { ExternalLink, Paintbrush, Share2, Tag, Bookmark, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");

  if (!product) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-2xl font-semibold mb-4">Produto não encontrado</h1>
          <Link to="/loja" className="text-sm text-primary hover:underline">Voltar ao catálogo</Link>
        </div>
      </Layout>
    );
  }

  const collection = collections.find(c => c.id === product.collection);
  const category = categories.find(c => c.id === product.category);
  const related = getRelatedProducts(product.relatedProducts);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: product.name, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <Layout>
      <div className="container">
        <Breadcrumbs items={[
          { label: "Catálogo", href: "/loja" },
          ...(category ? [{ label: category.name, href: `/categoria/${category.slug}` }] : []),
          { label: product.name },
        ]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-muted">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2 mt-2">
                {product.images.slice(1, 5).map((img, i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              {product.badge && (
                <span className="px-2.5 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-md">
                  {product.badge}
                </span>
              )}
              {product.newArrival && (
                <span className="px-2.5 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-md">
                  Novidade
                </span>
              )}
              {product.customizable && (
                <span className="px-2.5 py-1 bg-rose-light text-foreground text-xs font-medium rounded-md">
                  Personalizável
                </span>
              )}
            </div>

            <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>

            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              {category && (
                <Link to={`/categoria/${category.slug}`} className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Tag className="w-3 h-3" /> {category.name}
                </Link>
              )}
              {collection && (
                <Link to={`/colecao/${collection.slug}`} className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Bookmark className="w-3 h-3" /> {collection.name}
                </Link>
              )}
            </div>

            {product.optionalPriceNote && (
              <p className="text-lg font-semibold text-warm mb-4">{product.optionalPriceNote}</p>
            )}

            <p className="text-muted-foreground leading-relaxed mb-6">{product.shortDescription}</p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href={product.zazzleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" />
                Comprar na Zazzle
              </a>
              {product.customizable && product.personalizeUrl && (
                <a
                  href={product.personalizeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 border border-border font-medium rounded-lg hover:bg-muted transition-colors"
                >
                  <Paintbrush className="w-4 h-4" />
                  Personalizar e comprar
                </a>
              )}
            </div>

            <ZazzleDisclosure />

            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mt-4 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Compartilhar
            </button>

            {/* Long Description */}
            <div className="mt-8 pt-8 border-t border-border">
              <h2 className="font-display font-semibold text-lg mb-3">Sobre este produto</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{product.longDescription}</p>
            </div>

            {/* Usage */}
            {product.usage.length > 0 && (
              <div className="mt-6">
                <h3 className="font-display font-semibold text-sm mb-3">Sugestões de uso</h3>
                <div className="flex flex-wrap gap-2">
                  {product.usage.map(u => (
                    <span key={u} className="flex items-center gap-1 px-3 py-1.5 bg-muted rounded-lg text-xs">
                      <CheckCircle2 className="w-3 h-3 text-primary" /> {u}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-1.5">
                {product.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Disclosure card */}
        <div className="mb-16">
          <ZazzleDisclosure variant="card" />
        </div>

        {/* Product FAQ */}
        <div className="mb-16">
          <FAQSection items={productFAQ} title="Dúvidas sobre este produto" />
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mb-16">
            <h2 className="font-display text-2xl font-semibold mb-8">Produtos Relacionados</h2>
            <ProductGrid products={related} />
          </div>
        )}
      </div>
    </Layout>
  );
}
