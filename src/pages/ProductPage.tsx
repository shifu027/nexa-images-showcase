import { useMemo, useState } from "react";
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
import { ExternalLink, Paintbrush, Share2, Tag, Bookmark, CheckCircle2, Clock, Sparkles, Package2 } from "lucide-react";
import { motion } from "framer-motion";
import { getBuyButtonLabel, resolveProductBuyUrl, resolveProductPersonalizeUrl } from "@/lib/zazzle";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <Layout title="Produto não encontrado" noindex canonical="/404">
        <div className="container py-20 text-center">
          <h1 className="font-display text-2xl font-semibold mb-4">Produto não encontrado</h1>
          <Link to="/loja" className="text-sm text-primary hover:underline">
            Voltar ao catálogo
          </Link>
        </div>
      </Layout>
    );
  }

  const collection = collections.find((c) => c.id === product.collection);
  const category = categories.find((c) => c.id === product.category);
  const related = getRelatedProducts(product.relatedProducts);
  const buyUrl = resolveProductBuyUrl(product);
  const personalizeUrl = resolveProductPersonalizeUrl(product);
  const buyLabel = getBuyButtonLabel(product);
  const gallery = useMemo(() => (product.images.length > 0 ? product.images : ["/placeholder.svg"]), [product.images]);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: product.name, url: window.location.href });
    } else {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <Layout
      title={product.seoTitle || product.name}
      description={product.seoDescription || product.shortDescription}
      canonical={`/produto/${product.slug}`}
      image={gallery[0]}
    >
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Catálogo", href: "/loja" },
            ...(category ? [{ label: category.name, href: `/categoria/${category.slug}` }] : []),
            { label: product.name },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-8 lg:gap-12 mb-16 items-start">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="rounded-[2rem] border border-border/70 bg-card p-4 md:p-5 shadow-[0_28px_60px_-36px_rgba(0,0,0,0.35)]">
              <div className="aspect-square rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-muted via-background to-sage-light/30 border border-border/60">
                <img src={gallery[activeImage]} alt={product.name} className="w-full h-full object-cover" />
              </div>

              {gallery.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2.5 mt-3">
                  {gallery.slice(0, 5).map((img, i) => (
                    <button
                      key={`${img}-${i}`}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={`aspect-square rounded-xl overflow-hidden border transition-all ${
                        activeImage === i ? "border-primary ring-2 ring-primary/20" : "border-border/70 hover:border-primary/40"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              {product.badge && <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">{product.badge}</span>}
              {product.newArrival && <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">Novidade</span>}
              {product.customizable && <span className="px-3 py-1 bg-rose-light text-foreground text-xs font-semibold rounded-full">Personalizável</span>}
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-bold mb-3 text-balance">{product.name}</h1>

            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-5 flex-wrap">
              {category && (
                <Link to={`/categoria/${category.slug}`} className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Tag className="w-3.5 h-3.5" /> {category.name}
                </Link>
              )}
              {collection && (
                <Link to={`/colecao/${collection.slug}`} className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Bookmark className="w-3.5 h-3.5" /> {collection.name}
                </Link>
              )}
            </div>

            {product.optionalPriceNote && <p className="text-base font-semibold text-warm mb-4">{product.optionalPriceNote}</p>}

            <p className="text-base text-muted-foreground leading-relaxed mb-7">{product.shortDescription}</p>

            <div className="rounded-[1.5rem] border border-border/70 bg-card p-4 md:p-5 shadow-[0_18px_36px_-28px_rgba(0,0,0,0.28)] mb-6">
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                {buyUrl ? (
                  <a
                    href={buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {buyLabel}
                  </a>
                ) : (
                  <span className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 bg-muted text-muted-foreground font-semibold rounded-xl cursor-default">
                    <Clock className="w-4 h-4" />
                    Link de compra em breve
                  </span>
                )}

                {personalizeUrl && (
                  <a
                    href={personalizeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 border border-border font-semibold rounded-xl hover:bg-muted transition-colors"
                  >
                    <Paintbrush className="w-4 h-4" />
                    Personalizar e comprar
                  </a>
                )}
              </div>

              <ZazzleDisclosure />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="rounded-2xl border border-border/70 bg-muted/50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold mb-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Destaques do produto
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                  <li>• Design autoral com estética delicada e acolhedora.</li>
                  <li>• Ideal para presentear, organizar ou decorar com personalidade.</li>
                  <li>• Finalização de compra pela plataforma Zazzle.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border/70 bg-muted/50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold mb-2">
                  <Package2 className="w-4 h-4 text-primary" />
                  Bom saber
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Disponibilidade, preço e opções de personalização podem variar na plataforma final de compra.
                </p>
              </div>
            </div>

            <button onClick={handleShare} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <Share2 className="w-4 h-4" />
              Compartilhar este produto
            </button>

            <div className="pt-8 border-t border-border mb-6">
              <h2 className="font-display font-semibold text-lg mb-3">Sobre este produto</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{product.longDescription}</p>
            </div>

            {product.usage.length > 0 && (
              <div className="mb-6">
                <h3 className="font-display font-semibold text-sm mb-3">Sugestões de uso</h3>
                <div className="flex flex-wrap gap-2">
                  {product.usage.map((u) => (
                    <span key={u} className="flex items-center gap-1.5 px-3 py-2 bg-muted rounded-xl text-xs border border-border/60">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> {u}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <div className="flex flex-wrap gap-1.5">
                {product.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-muted text-muted-foreground rounded-full text-xs border border-border/60">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mb-16">
          <ZazzleDisclosure variant="card" />
        </div>

        <div className="mb-16">
          <FAQSection items={productFAQ} title="Dúvidas sobre este produto" />
        </div>

        {related.length > 0 && (
          <div className="mb-16">
            <h2 className="font-display text-2xl font-semibold mb-8">Produtos relacionados</h2>
            <ProductGrid products={related} />
          </div>
        )}
      </div>
    </Layout>
  );
}
