"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Leaf, ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert } from "@/components/ui/alert";
import { forgotPasswordSchema, type ForgotPasswordInput } from "@/lib/validations";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordInput) => {
    setError(null);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    setSent(true);
  };

  return (
    <div className="min-h-screen gradient-hero flex flex-col items-center justify-center p-8">
      <Link href="/" className="flex items-center gap-2 mb-8">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
          <Leaf className="h-4 w-4 text-white" />
        </div>
        <span className="text-lg font-bold text-gray-900">Nutri</span>
      </Link>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        {!sent ? (
          <>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100">
                <Mail className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Recuperar senha</h1>
                <p className="text-sm text-gray-500">Enviaremos um link para seu e-mail</p>
              </div>
            </div>

            {error && <Alert variant="destructive" className="mb-4">{error}</Alert>}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="email" required>E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="form-error">{errors.email.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
                Enviar link de recuperação
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 mx-auto mb-4">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">E-mail enviado!</h2>
            <p className="text-sm text-gray-600 mb-6">
              Enviamos um link de recuperação para{" "}
              <strong>{getValues("email")}</strong>. Verifique sua caixa de entrada.
            </p>
            <Alert variant="info" className="text-left">
              O link expira em 30 minutos. Verifique também a pasta de spam.
            </Alert>
          </div>
        )}

        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o login
          </Link>
        </div>
      </div>
    </div>
  );
}
