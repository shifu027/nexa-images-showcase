import type { Metadata } from "next";
import { AuthForm } from "@/components/auth/auth-form";

export const metadata: Metadata = {
  title: "Entrar",
  description: "Acesse sua conta no Nutri",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left panel - form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <AuthForm mode="login" />
      </div>

      {/* Right panel - visual */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800 p-12">
        <div className="max-w-md text-white">
          <div className="mb-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 mb-6">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Gerencie sua prática nutricional com excelência
            </h2>
            <p className="text-primary-100 leading-relaxed">
              Milhares de nutricionistas já confiam no Nutri para organizar
              seus pacientes, consultas e planos alimentares.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Prontuários eletrônicos completos",
              "Planos alimentares personalizados",
              "Acompanhamento de evolução",
              "Segurança e conformidade com LGPD",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                  </svg>
                </div>
                <span className="text-sm text-primary-50">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
