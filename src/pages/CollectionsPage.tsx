import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CollectionCard from "@/components/shared/CollectionCard";
import { collections } from "@/data/collections";

export default function CollectionsPage() {
  return (
    <Layout>
      <div className="container">
        <Breadcrumbs items={[{ label: "Coleções" }]} />
        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Coleções</h1>
          <p className="text-muted-foreground">Mundos criativos com estéticas únicas para explorar</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col, i) => (
            <CollectionCard key={col.id} collection={col} index={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
