"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Github, Leaf } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert } from "@/components/ui/alert";
import {
  loginSchema,
  registerSchema,
  type LoginInput,
  type RegisterInput,
} from "@/lib/validations";

interface AuthFormProps {
  mode: "login" | "register";
}

function SocialButtons({ socialLoading, onSocialLogin }: {
  socialLoading: string | null;
  onSocialLogin: (provider: "google" | "github") => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 mb-6">
      <Button
        variant="outline"
        type="button"
        isLoading={socialLoading === "google"}
        onClick={() => onSocialLogin("google")}
        className="gap-2"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
        Google
      </Button>
      <Button
        variant="outline"
        type="button"
        isLoading={socialLoading === "github"}
        onClick={() => onSocialLogin("github")}
        className="gap-2"
      >
        <Github className="h-4 w-4" />
        GitHub
      </Button>
    </div>
  );
}

function Divider() {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200" />
      </div>
      <div className="relative flex justify-center text-xs text-gray-500">
        <span className="bg-white px-3">ou continue com e-mail</span>
      </div>
    </div>
  );
}

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);

  const isLogin = mode === "login";

  const loginForm = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const registerForm = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  const handleSocialLogin = async (provider: "google" | "github") => {
    setSocialLoading(provider);
    await signIn(provider, { callbackUrl: "/dashboard/patients" });
    setSocialLoading(null);
  };

  const onLoginSubmit = async (data: LoginInput) => {
    setError(null);
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (result?.error) {
      setError("E-mail ou senha incorretos. Verifique seus dados e tente novamente.");
      return;
    }
    router.push("/dashboard/patients");
    router.refresh();
  };

  const onRegisterSubmit = async (data: RegisterInput) => {
    setError(null);
    setSuccess(null);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!res.ok) {
      setError(json.error ?? "Ocorreu um erro ao criar sua conta.");
      return;
    }
    setSuccess("Conta criada com sucesso! Redirecionando...");
    await signIn("credentials", { email: data.email, password: data.password, redirect: false });
    router.push("/dashboard/patients");
  };

  const header = (
    <div className="flex flex-col items-center mb-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-600 mb-4">
        <Leaf className="h-6 w-6 text-white" />
      </div>
      <h1 className="text-2xl font-bold text-gray-900">
        {isLogin ? "Bem-vindo de volta!" : "Crie sua conta"}
      </h1>
      <p className="mt-1 text-sm text-gray-500">
        {isLogin
          ? "Entre na sua conta para acessar o painel"
          : "Comece a usar o Nutri gratuitamente por 14 dias"}
      </p>
    </div>
  );

  const switchLink = (
    <p className="mt-6 text-center text-sm text-gray-600">
      {isLogin ? (
        <>
          Não tem uma conta?{" "}
          <Link href="/register" className="font-medium text-primary-600 hover:underline">
            Cadastre-se gratuitamente
          </Link>
        </>
      ) : (
        <>
          Já tem uma conta?{" "}
          <Link href="/login" className="font-medium text-primary-600 hover:underline">
            Faça login
          </Link>
        </>
      )}
    </p>
  );

  if (isLogin) {
    const { handleSubmit, register, formState: { errors, isSubmitting } } = loginForm;
    return (
      <div className="w-full max-w-md mx-auto">
        {header}
        <SocialButtons socialLoading={socialLoading} onSocialLogin={handleSocialLogin} />
        <Divider />
        {error && <Alert variant="destructive" className="mb-4">{error}</Alert>}
        <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="email" required>E-mail</Label>
            <Input id="email" type="email" placeholder="seu@email.com" error={errors.email?.message} {...register("email")} />
            {errors.email && <p className="form-error">{errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="password" required>Senha</Label>
            <div className="relative">
              <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" className="pr-10" error={errors.password?.message} {...register("password")} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && <p className="form-error">{errors.password.message}</p>}
          </div>
          <div className="flex justify-end">
            <Link href="/forgot-password" className="text-sm text-primary-600 hover:text-primary-700 hover:underline">
              Esqueceu sua senha?
            </Link>
          </div>
          <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>Entrar</Button>
        </form>
        {switchLink}
      </div>
    );
  }

  const { handleSubmit, register, formState: { errors, isSubmitting } } = registerForm;
  return (
    <div className="w-full max-w-md mx-auto">
      {header}
      <SocialButtons socialLoading={socialLoading} onSocialLogin={handleSocialLogin} />
      <Divider />
      {error && <Alert variant="destructive" className="mb-4">{error}</Alert>}
      {success && <Alert variant="success" className="mb-4">{success}</Alert>}
      <form onSubmit={handleSubmit(onRegisterSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="name" required>Nome completo</Label>
          <Input id="name" placeholder="Seu nome completo" error={errors.name?.message} {...register("name")} />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email" required>E-mail</Label>
          <Input id="email" type="email" placeholder="seu@email.com" error={errors.email?.message} {...register("email")} />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="password" required>Senha</Label>
          <div className="relative">
            <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" className="pr-10" error={errors.password?.message} {...register("password")} />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.password && <p className="form-error">{errors.password.message}</p>}
        </div>
        <div>
          <Label htmlFor="confirmPassword" required>Confirmar senha</Label>
          <div className="relative">
            <Input id="confirmPassword" type={showConfirm ? "text" : "password"} placeholder="••••••••" className="pr-10" error={errors.confirmPassword?.message} {...register("confirmPassword")} />
            <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.confirmPassword && <p className="form-error">{errors.confirmPassword.message}</p>}
        </div>
        <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>Criar conta gratuita</Button>
      </form>
      {switchLink}
    </div>
  );
}
