import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductGrid from "@/components/product/ProductGrid";
import ZazzleDisclosure from "@/components/product/ZazzleDisclosure";
import { getProductsByCategory } from "@/data/products";

const presentes = getProductsByCategory("presentes");

export default function GiftsPage() {
  return (
    <Layout title="Presentes" description="Canecas, ímãs, chaveiros e presentes personalizados com ilustrações exclusivas. Surpreenda quem você ama.">
      <div className="container">
        <Breadcrumbs items={[{ label: "Presentes" }]} />
        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Presentes</h1>
          <p className="text-muted-foreground max-w-2xl">
            Canecas, ímãs, chaveiros e presentes personalizados com ilustrações exclusivas. 
            Surpreenda quem você ama com algo único.
          </p>
        </div>
        <ProductGrid products={presentes} />
        <div className="mt-12">
          <ZazzleDisclosure variant="card" />
        </div>
      </div>
    </Layout>
  );
}
