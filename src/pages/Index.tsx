import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles, Truck, Shield, Palette, Star, Package, Heart, BookOpen, Flower2 } from "lucide-react";
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
const featuredCollections = collections.filter((c) => c.featured);

const howItWorks = [
  { icon: Sparkles, title: "Explore", description: "Navegue pelo catálogo, encontre coleções autorais e descubra o estilo que combina com você." },
  { icon: Heart, title: "Escolha", description: "Selecione seu produto favorito. Em alguns itens você também pode personalizar nome, frase ou foto." },
  { icon: ExternalLink, title: "Finalize na Zazzle", description: "Ao clicar em comprar, você segue para a plataforma da Zazzle para concluir o pedido com segurança." },
  { icon: Truck, title: "Receba", description: "Produção, envio e parte do atendimento do pedido acontecem pela plataforma de finalização." },
];

const benefits = [
  { icon: Palette, title: "Ilustrações com identidade", description: "Cada arte nasce para transmitir delicadeza, aconchego e personalidade visual." },
  { icon: BookOpen, title: "Universo cozy e criativo", description: "Livros, café, capivaras, flores, organização e pequenos prazeres do cotidiano." },
  { icon: Shield, title: "Compra transparente", description: "Você descobre os produtos aqui e finaliza com segurança na Zazzle, sem surpresas no processo." },
  { icon: Package, title: "Perfeito para presentear", description: "Stickers, etiquetas e presentes com visual de boutique criativa, ideais para encantar." },
];

export default function Index() {
  return (
    <Layout
      title="Stickers, Etiquetas & Presentes com Alma"
      description="Ilustrações exclusivas em stickers, etiquetas e papelaria criativa. Estética cozy, bookish e botanical, com compra final na Zazzle."
      canonical="/"
    >
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(203,224,214,0.85),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(244,220,226,0.7),transparent_35%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-sage-light/80 via-background to-rose-light/70" />
        <div className="container relative py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-card/80 backdrop-blur border border-border/70 text-primary text-xs font-semibold rounded-full mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Stickers, etiquetas & presentes com alma
              </span>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6 text-balance max-w-3xl">
                Delicadeza ilustrada para tornar o seu dia mais bonito
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Uma vitrine criativa de stickers, etiquetas e presentes para quem ama capivaras, livros, flores, organização e pequenos detalhes cheios de encanto.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  to="/loja"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-[0_14px_30px_-18px_rgba(0,0,0,0.35)]"
                >
                  Explorar catálogo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/colecoes"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-border bg-card/70 backdrop-blur font-semibold rounded-xl hover:bg-muted transition-colors"
                >
                  Ver coleções
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
                <div className="rounded-2xl border border-border/70 bg-card/80 backdrop-blur p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2">Estética</p>
                  <p className="font-display text-base font-semibold">Cozy, bookish & botanical</p>
                </div>
                <div className="rounded-2xl border border-border/70 bg-card/80 backdrop-blur p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2">Compra</p>
                  <p className="font-display text-base font-semibold">Finalização via Zazzle</p>
                </div>
                <div className="rounded-2xl border border-border/70 bg-card/80 backdrop-blur p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2">Ideal para</p>
                  <p className="font-display text-base font-semibold">Presentes e papelaria</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="relative"
            >
              <div className="rounded-[2rem] border border-border/70 bg-card/75 backdrop-blur p-4 shadow-[0_30px_60px_-28px_rgba(34,34,34,0.32)]">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-[1.4rem] overflow-hidden border border-border/60 bg-muted aspect-[0.9/1.15]">
                    <img src={featuredProducts[0]?.images[0] || "/placeholder.svg"} alt={featuredProducts[0]?.name || "Destaque Nexa Images"} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="rounded-[1.4rem] overflow-hidden border border-border/60 bg-muted aspect-square">
                      <img src={featuredProducts[1]?.images[0] || "/placeholder.svg"} alt={featuredProducts[1]?.name || "Produto em destaque"} className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-[1.4rem] border border-border/60 bg-background/90 p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-primary mb-2">Curadoria da marca</p>
                        <h2 className="font-display text-xl font-semibold mb-2">Capivaras, café, flores e leitura</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Uma seleção pensada para quem gosta de presentear e decorar o cotidiano com beleza delicada.
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                        <Flower2 className="w-4 h-4 text-primary" />
                        <span>Visual acolhedor e autoral</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">Categorias</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Do sticker delicado para laptop às etiquetas para presentes, escola e pequenos negócios.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-muted/70 py-16 md:py-20 border-y border-border/70">
        <div className="container">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-primary mb-2">Coleções autorais</p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">Coleções em destaque</h2>
              <p className="text-muted-foreground">Mundos visuais para explorar, presentear e se apaixonar.</p>
            </div>
            <Link to="/colecoes" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
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

      <section className="container py-16 md:py-20">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-primary mb-2">Favoritos</p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">Mais amados</h2>
            <p className="text-muted-foreground">Os produtos que melhor representam o universo da Nexa Images.</p>
          </div>
          <Link to="/loja" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            Ver todos <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <ProductGrid products={featuredProducts.slice(0, 8)} />
      </section>

      <section className="bg-rose-light/35 py-16 md:py-20 border-y border-border/60">
        <div className="container">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-primary mb-2">Recém-chegados</p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">Novidades</h2>
              <p className="text-muted-foreground">Novas ideias para stickers, etiquetas e presentes criativos.</p>
            </div>
            <Link to="/loja?filtro=novidades" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              Ver novidades <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <ProductGrid products={newArrivals.slice(0, 8)} />
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">Como funciona</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Uma jornada simples, transparente e alinhada ao funcionamento da Zazzle.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {howItWorks.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center rounded-2xl border border-border/70 bg-card p-6 shadow-[0_14px_30px_-24px_rgba(0,0,0,0.25)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-sage-light flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-2">Passo {i + 1}</div>
              <h3 className="font-display font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-muted py-16 md:py-20 border-y border-border/60">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">Por que escolher a Nexa Images?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-card border border-border/70 shadow-[0_12px_28px_-24px_rgba(0,0,0,0.28)]"
              >
                <b.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-sm mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center rounded-[2rem] border border-border/70 bg-card px-6 py-10 md:px-10 shadow-[0_20px_40px_-30px_rgba(0,0,0,0.3)]">
          <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">Uma marca feita para quem ama os detalhes</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A Nexa Images nasceu para transformar o cotidiano em algo mais bonito: uma etiqueta mais delicada, um sticker mais encantador, um presente mais memorável.
            Tudo com uma identidade acolhedora, criativa e visualmente refinada.
          </p>
          <Link to="/sobre" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            Conheça nossa história <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      <section className="bg-sage-light/50 py-16 md:py-20 border-y border-border/60">
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
                className="p-6 rounded-2xl bg-card border border-border/70 shadow-[0_16px_32px_-26px_rgba(0,0,0,0.3)]"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">“{t.text}”</p>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold">{t.name}</span>
                  {t.product && <span className="text-xs text-muted-foreground text-right">{t.product}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <FAQSection items={generalFAQ.slice(0, 4)} title="Perguntas frequentes" />
        <div className="text-center mt-8">
          <Link to="/faq" className="text-sm font-semibold text-primary hover:underline">
            Ver todas as perguntas →
          </Link>
        </div>
      </section>

      <section className="bg-primary py-16 md:py-20">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
              Pronta para encontrar seu próximo favorito?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Explore o catálogo completo e descubra stickers, etiquetas e presentes com estética delicada e acabamento de boutique criativa.
            </p>
            <Link
              to="/loja"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-background text-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Explorar catálogo <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
