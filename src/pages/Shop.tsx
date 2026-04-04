import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductGrid from "@/components/product/ProductGrid";
import EmptyState from "@/components/shared/EmptyState";
import ZazzleDisclosure from "@/components/product/ZazzleDisclosure";
import { products, searchProducts } from "@/data/products";
import { categories } from "@/data/categories";
import { collections } from "@/data/collections";
import { Search, SlidersHorizontal, X } from "lucide-react";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get("busca") || "";
  const initialFilter = searchParams.get("filtro") || "";

  const [query, setQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = query ? searchProducts(query) : products.filter(p => p.active);
    
    if (initialFilter === "novidades") {
      result = result.filter(p => p.newArrival);
    }
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (selectedCollection) {
      result = result.filter(p => p.collection === selectedCollection);
    }

    switch (sortBy) {
      case "name-asc": return [...result].sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc": return [...result].sort((a, b) => b.name.localeCompare(a.name));
      case "newest": return [...result].sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
      default: return [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
  }, [query, selectedCategory, selectedCollection, sortBy, initialFilter]);

  const clearFilters = () => {
    setQuery("");
    setSelectedCategory("");
    setSelectedCollection("");
    setSortBy("featured");
    setSearchParams({});
  };

  const hasActiveFilters = query || selectedCategory || selectedCollection || initialFilter;

  return (
    <Layout>
      <div className="container">
        <Breadcrumbs items={[{ label: "Catálogo" }]} />

        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Catálogo</h1>
          <p className="text-muted-foreground">Explore todos os nossos stickers, etiquetas e presentes</p>
        </div>

        {/* Search & Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Buscar produtos..."
              className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-lg text-sm outline-none focus:ring-1 focus:ring-primary/30"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 border rounded-lg text-sm font-medium transition-colors ${
                showFilters ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-muted"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filtros
            </button>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="px-3 py-2.5 bg-card border border-border rounded-lg text-sm outline-none"
            >
              <option value="featured">Destaques</option>
              <option value="newest">Novidades</option>
              <option value="name-asc">A → Z</option>
              <option value="name-desc">Z → A</option>
            </select>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-card border border-border rounded-xl mb-6">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Categoria</label>
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm"
              >
                <option value="">Todas</option>
                {categories.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Coleção</label>
              <select
                value={selectedCollection}
                onChange={e => setSelectedCollection(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm"
              >
                <option value="">Todas</option>
                {collections.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Active filters */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="text-xs text-muted-foreground">Filtros ativos:</span>
            {query && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded text-xs">
                "{query}" <button onClick={() => setQuery("")}><X className="w-3 h-3" /></button>
              </span>
            )}
            {selectedCategory && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded text-xs">
                {categories.find(c => c.id === selectedCategory)?.name}
                <button onClick={() => setSelectedCategory("")}><X className="w-3 h-3" /></button>
              </span>
            )}
            <button onClick={clearFilters} className="text-xs text-primary hover:underline ml-2">
              Limpar tudo
            </button>
          </div>
        )}

        {/* Results */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">{filtered.length} produto{filtered.length !== 1 ? "s" : ""}</p>
        </div>

        {filtered.length > 0 ? (
          <ProductGrid products={filtered} />
        ) : (
          <EmptyState />
        )}

        <div className="mt-12">
          <ZazzleDisclosure variant="card" />
        </div>
      </div>
    </Layout>
  );
}
