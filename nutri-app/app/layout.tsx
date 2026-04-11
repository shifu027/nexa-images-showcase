import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: {
    default: "Nutri — Sistema de Gestão Nutricional",
    template: "%s | Nutri",
  },
  description:
    "Plataforma completa para nutricionistas gerenciarem pacientes, consultas e planos alimentares com facilidade e eficiência.",
  keywords: ["nutrição", "nutricionista", "dieta", "saúde", "gestão", "pacientes"],
  authors: [{ name: "Nutri Team" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Nutri — Sistema de Gestão Nutricional",
    description: "Plataforma completa para nutricionistas modernos.",
    siteName: "Nutri",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
