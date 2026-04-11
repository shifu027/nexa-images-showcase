"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSession, signOut } from "next-auth/react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Camera, LogOut, Shield, Bell, User, Lock } from "lucide-react";

export default function SettingsPage() {
  const { data: session } = useSession();
  const user = session?.user;
  const [saved, setSaved] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
    },
  });

  const onSave = async () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Configurações</h1>
        <p className="text-sm text-gray-500">Gerencie suas preferências e dados da conta</p>
      </div>

      {saved && <Alert variant="success">Alterações salvas com sucesso!</Alert>}

      {/* Profile */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-gray-400" />
            Perfil
          </CardTitle>
          <CardDescription>Suas informações pessoais</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <Avatar name={user?.name} src={user?.image} size="xl" />
              <button className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary-600 text-white shadow-sm hover:bg-primary-700 transition-colors">
                <Camera className="h-3.5 w-3.5" />
              </button>
            </div>
            <div>
              <p className="font-semibold text-gray-900">{user?.name}</p>
              <p className="text-sm text-gray-500">{user?.email}</p>
              <Badge variant="success" className="mt-1">
                {(user as { role?: string })?.role === "ADMIN"
                  ? "Administrador"
                  : (user as { role?: string })?.role === "PACIENTE"
                  ? "Paciente"
                  : "Nutricionista"}
              </Badge>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSave)} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" {...register("name")} />
            </div>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" {...register("email")} disabled />
            </div>
            <div className="sm:col-span-2 flex justify-end">
              <Button type="submit">Salvar alterações</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Security */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-gray-400" />
            Segurança
          </CardTitle>
          <CardDescription>Gerencie sua senha e autenticação</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label>Senha atual</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div />
            <div>
              <Label>Nova senha</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div>
              <Label>Confirmar nova senha</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Alterar senha</Button>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-gray-400" />
            Notificações
          </CardTitle>
          <CardDescription>Configure como você recebe alertas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { label: "Lembretes de consultas", desc: "Receba lembretes antes das consultas" },
              { label: "Novidades do produto", desc: "Fique por dentro das atualizações" },
              { label: "Relatórios semanais", desc: "Resumo semanal dos seus atendimentos" },
            ].map((item) => (
              <label key={item.label} className="flex items-center justify-between cursor-pointer">
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
                <div className="relative inline-flex h-5 w-9">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-600" />
                </div>
              </label>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Danger zone */}
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700">
            <Shield className="h-5 w-5" />
            Zona de perigo
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900">Sair da conta</p>
            <p className="text-xs text-gray-500">Encerrar sessão atual</p>
          </div>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            <LogOut className="h-4 w-4" />
            Sair
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
