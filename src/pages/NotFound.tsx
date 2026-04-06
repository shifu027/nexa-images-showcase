import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Layout title="Página não encontrada" noindex>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 font-display text-5xl font-bold">404</h1>
          <p className="mb-6 text-lg text-muted-foreground">Ops! Essa página não foi encontrada.</p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity">
            Voltar à página inicial
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
