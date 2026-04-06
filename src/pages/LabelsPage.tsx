import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductGrid from "@/components/product/ProductGrid";
import ZazzleDisclosure from "@/components/product/ZazzleDisclosure";
import { getProductsByCategory } from "@/data/products";

const labels = getProductsByCategory("labels");

export default function LabelsPage() {
  return (
    <Layout title="Labels & Etiquetas" description="Etiquetas delicadas para presentes, organização, escola, casamentos e pequenos negócios. Cada detalhe pensado com carinho.">
      <div className="container">
        <Breadcrumbs items={[{ label: "Labels & Etiquetas" }]} />
        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Labels & Etiquetas</h1>
          <p className="text-muted-foreground max-w-2xl">
            Etiquetas delicadas para presentes, organização, escola, casamentos e pequenos negócios. 
            Cada detalhe pensado com carinho.
          </p>
        </div>
        <ProductGrid products={labels} />
        <div className="mt-12">
          <ZazzleDisclosure variant="card" />
        </div>
      </div>
    </Layout>
  );
}
