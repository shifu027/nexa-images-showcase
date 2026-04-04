import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import CollectionsPage from "./pages/CollectionsPage";
import CollectionPage from "./pages/CollectionPage";
import CategoryPage from "./pages/CategoryPage";
import StickersPage from "./pages/StickersPage";
import LabelsPage from "./pages/LabelsPage";
import GiftsPage from "./pages/GiftsPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQPage from "./pages/FAQPage";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import HowItWorksPage from "./pages/HowItWorksPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/loja" element={<Shop />} />
          <Route path="/produto/:slug" element={<ProductPage />} />
          <Route path="/colecoes" element={<CollectionsPage />} />
          <Route path="/colecao/:slug" element={<CollectionPage />} />
          <Route path="/categoria/:slug" element={<CategoryPage />} />
          <Route path="/stickers" element={<StickersPage />} />
          <Route path="/labels" element={<LabelsPage />} />
          <Route path="/presentes" element={<GiftsPage />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/termos" element={<Terms />} />
          <Route path="/privacidade" element={<Privacy />} />
          <Route path="/como-funciona" element={<HowItWorksPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
