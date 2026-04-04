import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles, Truck, Shield, Palette, Star, Package, Heart } from "lucide-react";
import ProductGrid from "@/components/product/ProductGrid";
import CollectionCard from "@/components/shared/CollectionCard";
import CategoryCard from "@/components/shared/CategoryCard";
import FAQSection from "@/components/shared/FAQSection";
import { getFeaturedProducts, getNewArrivals } from "@/data/products";
import { collections } from "@/data/collections";
import { categories } from "@/data/categories";
import { testimonials } from "@/data/testimonials";
import { generalFAQ } from "@/data/faq";

const featuredProducts = getFeaturedProducts();
const newArrivals = getNewArrivals();
const featuredCollections = collections.filter(c => c.featured);

const howItWorks = [
  { icon: Sparkles, title: "Explore", description: "Navegue pelo catálogo e descubra stickers, etiquetas e presentes com estética delicada." },
  { icon: Heart, title: "Escolha", description: "Encontre o produto perfeito. Se for personalizável, customize com seu nome, frase ou foto." },
  { icon: ExternalLink, title: "Finalize na Zazzle", description: "Clique para comprar e finalize sua compra com segurança na plataforma Zazzle." },
  { icon: Truck, title: "Receba", description: "A Zazzle cuida da produção e entrega do seu pedido com qualidade garantida." },
];

const benefits = [
  { icon: Palette, title: "Ilustrações Exclusivas", description: "Cada design é criado com cuidado e originalidade pela Nexa Images." },
  { icon: Shield, title: "Compra Segura", description: "Checkout protegido pela Zazzle, plataforma confiável e reconhecida mundialmente." },
  { icon: Package, title: "Qualidade Premium", description: "Materiais de alta qualidade: vinil resistente, cerâmica durável e impressão perfeita." },
  { icon: Star, title: "Personalização", description: "Muitos produtos podem ser personalizados com nome, frase, monograma ou foto." },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-light via-background to-rose-light opacity-60" />
        <div className="container relative py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-6">
              <Sparkles className="w-3 h-3" /> Stickers, etiquetas & presentes com alma
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Beleza delicada para o seu dia a dia
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Ilustrações exclusivas em stickers, etiquetas e papelaria criados para quem ama os pequenos detalhes da vida.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/loja"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Explorar catálogo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/colecoes"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border font-medium rounded-lg hover:bg-muted transition-colors"
              >
                Ver coleções
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">Categorias</h2>
          <p className="text-muted-foreground">Encontre exatamente o que procura</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">Coleções em Destaque</h2>
              <p className="text-muted-foreground">Mundos criativos para explorar</p>
            </div>
            <Link to="/colecoes" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              Ver todas <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredCollections.map((col, i) => (
              <CollectionCard key={col.id} collection={col} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-16 md:py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">Mais Amados</h2>
            <p className="text-muted-foreground">Os favoritos de quem ama Nexa Images</p>
          </div>
          <Link to="/loja" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            Ver todos <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <ProductGrid products={featuredProducts.slice(0, 8)} />
      </section>

      {/* New Arrivals */}
      <section className="bg-rose-light/30 py-16 md:py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">Novidades</h2>
              <p className="text-muted-foreground">Recém-chegados ao catálogo</p>
            </div>
            <Link to="/loja?filtro=novidades" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              Ver todas <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <ProductGrid products={newArrivals.slice(0, 8)} />
        </div>
      </section>

      {/* How it works */}
      <section className="container py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">Como Funciona</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Do site à sua porta em quatro passos simples
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {howItWorks.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-sage-light flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-xs font-medium text-primary mb-2">Passo {i + 1}</div>
              <h3 className="font-display font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">Por que Nexa Images?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <b.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-sm mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="container py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">Sobre a Nexa Images</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Somos uma marca criativa apaixonada por stickers, etiquetas e papelaria com alma. 
              Cada ilustração é pensada para trazer beleza, organização e aconchego ao seu dia a dia. 
              De capivaras fofas a arranjos botânicos, criamos com carinho para quem valoriza os detalhes.
            </p>
            <Link to="/sobre" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              Conheça nossa história <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-sage-light/50 py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">O que dizem nossos clientes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{t.name}</span>
                  {t.product && <span className="text-xs text-muted-foreground">{t.product}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="container py-16 md:py-20">
        <FAQSection items={generalFAQ.slice(0, 4)} title="Perguntas Frequentes" />
        <div className="text-center mt-8">
          <Link to="/faq" className="text-sm font-medium text-primary hover:underline">
            Ver todas as perguntas →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
              Pronto para encontrar seu favorito?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
              Explore nosso catálogo completo de stickers, etiquetas e presentes com ilustrações exclusivas.
            </p>
            <Link
              to="/loja"
              className="inline-flex items-center gap-2 px-8 py-3 bg-background text-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Explorar catálogo <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
