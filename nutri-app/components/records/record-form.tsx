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
import { medicalRecordSchema, type MedicalRecordInput } from "@/lib/validations";

interface RecordFormProps {
  initialData?: Partial<MedicalRecordInput> & { id?: string };
  patientId: string;
  mode: "create" | "edit";
}

export function RecordForm({ initialData, patientId, mode }: RecordFormProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<MedicalRecordInput>({
    resolver: zodResolver(medicalRecordSchema),
    defaultValues: {
      type: initialData?.type ?? "CONSULTA",
      date: initialData?.date ?? new Date().toISOString().split("T")[0],
      weight: initialData?.weight ?? "",
      height: initialData?.height ?? "",
      bloodPressure: initialData?.bloodPressure ?? "",
      notes: initialData?.notes ?? "",
      diagnosis: initialData?.diagnosis ?? "",
      prescription: initialData?.prescription ?? "",
      nextVisit: initialData?.nextVisit ?? "",
      patientId,
    },
  });

  const onSubmit = async (data: MedicalRecordInput) => {
    setError(null);
    try {
      const url =
        mode === "create"
          ? "/api/records"
          : `/api/records/${initialData?.id}`;
      const method = mode === "create" ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        setError(json.error ?? "Erro ao salvar prontuário.");
        return;
      }

      router.push(`/dashboard/patients/${patientId}`);
      router.refresh();
    } catch {
      setError("Erro de conexão. Tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && <Alert variant="destructive">{error}</Alert>}

      <Card>
        <CardHeader>
          <CardTitle>Dados da consulta</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="type" required>Tipo de atendimento</Label>
            <Select id="type" {...register("type")}>
              <option value="CONSULTA">Consulta</option>
              <option value="RETORNO">Retorno</option>
              <option value="AVALIACAO">Avaliação</option>
              <option value="PRESCRICAO">Prescrição</option>
            </Select>
          </div>

          <div>
            <Label htmlFor="date" required>Data</Label>
            <Input id="date" type="date" {...register("date")} />
          </div>

          <div>
            <Label htmlFor="weight">Peso atual (kg)</Label>
            <Input
              id="weight"
              type="number"
              step="0.1"
              placeholder="70.5"
              {...register("weight")}
            />
          </div>

          <div>
            <Label htmlFor="height">Altura (cm)</Label>
            <Input
              id="height"
              type="number"
              placeholder="170"
              {...register("height")}
            />
          </div>

          <div>
            <Label htmlFor="bloodPressure">Pressão arterial</Label>
            <Input
              id="bloodPressure"
              placeholder="120/80 mmHg"
              {...register("bloodPressure")}
            />
          </div>

          <div>
            <Label htmlFor="nextVisit">Próxima consulta</Label>
            <Input id="nextVisit" type="date" {...register("nextVisit")} />
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="diagnosis">Diagnóstico / Avaliação</Label>
            <Textarea
              id="diagnosis"
              placeholder="Descreva o diagnóstico e avaliação nutricional..."
              rows={4}
              {...register("diagnosis")}
            />
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="prescription">Prescrição / Plano alimentar</Label>
            <Textarea
              id="prescription"
              placeholder="Descreva as orientações e prescrições..."
              rows={5}
              {...register("prescription")}
            />
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="notes">Notas e observações</Label>
            <Textarea
              id="notes"
              placeholder="Observações adicionais..."
              rows={3}
              {...register("notes")}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-end gap-3">
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancelar
        </Button>
        <Button type="submit" isLoading={isSubmitting}>
          {mode === "create" ? "Registrar consulta" : "Salvar alterações"}
        </Button>
      </div>
    </form>
  );
}
