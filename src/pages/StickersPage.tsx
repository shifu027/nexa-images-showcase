import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductGrid from "@/components/product/ProductGrid";
import ZazzleDisclosure from "@/components/product/ZazzleDisclosure";
import { getProductsByCategory } from "@/data/products";

const stickers = getProductsByCategory("stickers");

export default function StickersPage() {
  return (
    <Layout title="Stickers" description="Figurinhas encantadoras para personalizar tudo — laptop, garrafa, planner e caderno. Vinil de alta qualidade com ilustrações exclusivas.">
      <div className="container">
        <Breadcrumbs items={[{ label: "Stickers" }]} />
        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Stickers</h1>
          <p className="text-muted-foreground max-w-2xl">
            Figurinhas encantadoras para personalizar tudo — laptop, garrafa, planner, caderno e muito mais. 
            Vinil de alta qualidade com ilustrações exclusivas.
          </p>
        </div>
        <ProductGrid products={stickers} />
        <div className="mt-12">
          <ZazzleDisclosure variant="card" />
        </div>
      </div>
    </Layout>
  );
}
