import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductGrid from "@/components/product/ProductGrid";
import ZazzleDisclosure from "@/components/product/ZazzleDisclosure";
import { getProductsByCategory } from "@/data/products";
import { categories } from "@/data/categories";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(c => c.slug === slug);

  if (!category) {
    return (
      <Layout title="Categoria não encontrada" noindex>
        <div className="container py-20 text-center">
          <h1 className="font-display text-2xl font-semibold mb-4">Categoria não encontrada</h1>
          <Link to="/loja" className="text-sm text-primary hover:underline">Voltar ao catálogo</Link>
        </div>
      </Layout>
    );
  }

  const categoryProducts = getProductsByCategory(category.id);

  return (
    <Layout title={category.name} description={`${category.name} — ${category.description}`}>
      <div className="container">
        <Breadcrumbs items={[
          { label: "Catálogo", href: "/loja" },
          { label: category.name },
        ]} />

        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">{category.name}</h1>
          <p className="text-muted-foreground max-w-2xl">{category.description}</p>
        </div>

        <ProductGrid products={categoryProducts} />

        <div className="mt-12">
          <ZazzleDisclosure variant="card" />
        </div>
      </div>
    </Layout>
  );
}
