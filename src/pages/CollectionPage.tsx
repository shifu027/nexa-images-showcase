import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductGrid from "@/components/product/ProductGrid";
import ZazzleDisclosure from "@/components/product/ZazzleDisclosure";
import { getProductsByCollection } from "@/data/products";
import { collections } from "@/data/collections";

export default function CollectionPage() {
  const { slug } = useParams<{ slug: string }>();
  const collection = collections.find(c => c.slug === slug);

  if (!collection) {
    return (
      <Layout title="Coleção não encontrada" noindex>
        <div className="container py-20 text-center">
          <h1 className="font-display text-2xl font-semibold mb-4">Coleção não encontrada</h1>
          <Link to="/colecoes" className="text-sm text-primary hover:underline">Ver todas as coleções</Link>
        </div>
      </Layout>
    );
  }

  const collectionProducts = getProductsByCollection(collection.id);

  return (
    <Layout title={collection.seoTitle || collection.name} description={collection.seoDescription || collection.description}>
      <div className="container">
        <Breadcrumbs items={[
          { label: "Coleções", href: "/colecoes" },
          { label: collection.name },
        ]} />

        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">{collection.name}</h1>
          <p className="text-muted-foreground max-w-2xl">{collection.description}</p>
        </div>

        <ProductGrid products={collectionProducts} />

        <div className="mt-12">
          <ZazzleDisclosure variant="card" />
        </div>
      </div>
    </Layout>
  );
}
