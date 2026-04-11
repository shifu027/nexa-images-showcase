"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Alert } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { patientSchema, type PatientInput } from "@/lib/validations";

interface PatientFormProps {
  initialData?: Partial<PatientInput> & { id?: string };
  mode: "create" | "edit";
}

export function PatientForm({ initialData, mode }: PatientFormProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PatientInput>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      name: initialData?.name ?? "",
      email: initialData?.email ?? "",
      phone: initialData?.phone ?? "",
      birthDate: initialData?.birthDate ?? "",
      gender: initialData?.gender,
      cpf: initialData?.cpf ?? "",
      address: initialData?.address ?? "",
      city: initialData?.city ?? "",
      state: initialData?.state ?? "",
      zipCode: initialData?.zipCode ?? "",
      height: initialData?.height ?? "",
      weight: initialData?.weight ?? "",
      bloodType: initialData?.bloodType ?? "",
      allergies: initialData?.allergies ?? "",
      medications: initialData?.medications ?? "",
      notes: initialData?.notes ?? "",
    },
  });

  const onSubmit = async (data: PatientInput) => {
    setError(null);
    try {
      const url =
        mode === "create"
          ? "/api/patients"
          : `/api/patients/${initialData?.id}`;
      const method = mode === "create" ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        setError(json.error ?? "Erro ao salvar paciente.");
        return;
      }

      const patient = await res.json();
      router.push(`/dashboard/patients/${patient.id}`);
      router.refresh();
    } catch {
      setError("Erro de conexão. Tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && <Alert variant="destructive">{error}</Alert>}

      {/* Personal info */}
      <Card>
        <CardHeader>
          <CardTitle>Dados pessoais</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label htmlFor="name" required>Nome completo</Label>
            <Input
              id="name"
              placeholder="Nome completo do paciente"
              {...register("name")}
            />
            {errors.name && <p className="form-error">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="email@exemplo.com"
              {...register("email")}
            />
            {errors.email && <p className="form-error">{errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              placeholder="(11) 99999-9999"
              {...register("phone")}
            />
          </div>

          <div>
            <Label htmlFor="birthDate">Data de nascimento</Label>
            <Input
              id="birthDate"
              type="date"
              {...register("birthDate")}
            />
          </div>

          <div>
            <Label htmlFor="gender">Sexo</Label>
            <Select id="gender" placeholder="Selecionar..." {...register("gender")}>
              <option value="MASCULINO">Masculino</option>
              <option value="FEMININO">Feminino</option>
              <option value="OUTRO">Outro</option>
            </Select>
          </div>

          <div>
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              placeholder="000.000.000-00"
              {...register("cpf")}
            />
          </div>

          <div>
            <Label htmlFor="bloodType">Tipo sanguíneo</Label>
            <Select id="bloodType" placeholder="Selecionar..." {...register("bloodType")}>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Address */}
      <Card>
        <CardHeader>
          <CardTitle>Endereço</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label htmlFor="address">Endereço</Label>
            <Input
              id="address"
              placeholder="Rua, número, complemento"
              {...register("address")}
            />
          </div>

          <div>
            <Label htmlFor="city">Cidade</Label>
            <Input id="city" placeholder="Cidade" {...register("city")} />
          </div>

          <div>
            <Label htmlFor="state">Estado</Label>
            <Select id="state" placeholder="Selecionar..." {...register("state")}>
              {["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"].map(uf => (
                <option key={uf} value={uf}>{uf}</option>
              ))}
            </Select>
          </div>

          <div>
            <Label htmlFor="zipCode">CEP</Label>
            <Input id="zipCode" placeholder="00000-000" {...register("zipCode")} />
          </div>
        </CardContent>
      </Card>

      {/* Clinical info */}
      <Card>
        <CardHeader>
          <CardTitle>Dados clínicos</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="height">Altura (cm)</Label>
            <Input
              id="height"
              type="number"
              placeholder="170"
              min="50"
              max="250"
              {...register("height")}
            />
          </div>

          <div>
            <Label htmlFor="weight">Peso (kg)</Label>
            <Input
              id="weight"
              type="number"
              placeholder="70"
              step="0.1"
              min="1"
              max="500"
              {...register("weight")}
            />
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="allergies">Alergias alimentares</Label>
            <Textarea
              id="allergies"
              placeholder="Liste alergias alimentares conhecidas..."
              rows={3}
              {...register("allergies")}
            />
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="medications">Medicamentos em uso</Label>
            <Textarea
              id="medications"
              placeholder="Liste medicamentos atuais..."
              rows={3}
              {...register("medications")}
            />
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="notes">Observações gerais</Label>
            <Textarea
              id="notes"
              placeholder="Outras informações relevantes..."
              rows={4}
              {...register("notes")}
            />
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
        >
          Cancelar
        </Button>
        <Button type="submit" isLoading={isSubmitting}>
          {mode === "create" ? "Cadastrar paciente" : "Salvar alterações"}
        </Button>
      </div>
    </form>
  );
}
