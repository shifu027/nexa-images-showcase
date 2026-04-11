import type { Metadata } from "next";
import { AuthForm } from "@/components/auth/auth-form";
import Link from "next/link";
import { Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Criar conta",
  description: "Crie sua conta gratuita no Nutri",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen gradient-hero flex flex-col items-center justify-center p-8">
      {/* Top nav */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
            <Leaf className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900">Nutri</span>
        </Link>
        <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-primary-600">
          Já tenho uma conta
        </Link>
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <AuthForm mode="register" />
      </div>

      <p className="mt-6 text-center text-xs text-gray-500 max-w-sm">
        Ao criar sua conta, você concorda com nossos{" "}
        <Link href="/terms" className="underline hover:text-gray-700">Termos de uso</Link>{" "}
        e{" "}
        <Link href="/privacy" className="underline hover:text-gray-700">Política de privacidade</Link>.
      </p>
    </div>
  );
}
