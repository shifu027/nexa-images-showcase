import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useSeo, SeoProps } from "@/hooks/useSeo";

interface LayoutProps extends SeoProps {
  children: ReactNode;
}

export default function Layout({ children, title, description, canonical, image, noindex }: LayoutProps) {
  useSeo({ title, description, canonical, image, noindex });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
