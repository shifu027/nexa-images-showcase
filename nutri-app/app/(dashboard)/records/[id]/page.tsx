import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Edit, User, Calendar, Weight, Activity } from "lucide-react";
import { formatDateTime, calculateBMI, getBMICategory } from "@/lib/utils";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const record = await db.medicalRecord.findUnique({
    where: { id },
    include: { patient: true },
  });
  return { title: `Prontuário — ${record?.patient?.name ?? "Registro"}` };
}

const recordTypeLabels: Record<string, string> = {
  CONSULTA: "Consulta",
  RETORNO: "Retorno",
  AVALIACAO: "Avaliação",
  PRESCRICAO: "Prescrição",
};

const recordTypeBadge: Record<string, "default" | "info" | "success" | "warning"> = {
  CONSULTA: "default",
  RETORNO: "info",
  AVALIACAO: "success",
  PRESCRICAO: "warning",
};

export default async function RecordDetailPage({ params }: PageProps) {
  const { id } = await params;
  const record = await db.medicalRecord.findUnique({
    where: { id },
    include: {
      patient: true,
    },
  });

  if (!record) notFound();

  const bmi =
    record.weight && record.height
      ? calculateBMI(record.weight, record.height)
      : record.bmi;
  const bmiCategory = bmi ? getBMICategory(bmi) : null;

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href={`/dashboard/patients/${record.patientId}`}>
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-gray-900">
                {recordTypeLabels[record.type] ?? record.type}
              </h1>
              <Badge variant={recordTypeBadge[record.type] ?? "default"}>
                {recordTypeLabels[record.type]}
              </Badge>
            </div>
            <p className="text-sm text-gray-500">{formatDateTime(record.date)}</p>
          </div>
        </div>
        <Button variant="outline" size="sm">
          <Edit className="h-4 w-4" />
          Editar
        </Button>
      </div>

      {/* Patient link */}
      <Link
        href={`/dashboard/patients/${record.patientId}`}
        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 hover:border-primary-300 transition-colors"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100">
          <User className="h-5 w-5 text-primary-600" />
        </div>
        <div>
          <p className="text-xs text-gray-500">Paciente</p>
          <p className="font-medium text-gray-900">{record.patient.name}</p>
        </div>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vitals */}
        <Card>
          <CardHeader><CardTitle>Dados antropométricos</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {record.date && (
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" /> Data
                </span>
                <span className="text-sm font-medium">{formatDateTime(record.date)}</span>
              </div>
            )}
            {record.weight && (
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-gray-500">
                  <Weight className="h-4 w-4" /> Peso
                </span>
                <span className="text-sm font-medium">{record.weight} kg</span>
              </div>
            )}
            {record.height && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Altura</span>
                <span className="text-sm font-medium">{record.height} cm</span>
              </div>
            )}
            {bmi && bmiCategory && (
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-gray-500">
                  <Activity className="h-4 w-4" /> IMC
                </span>
                <div className="text-right">
                  <span className="text-sm font-medium block">{bmi}</span>
                  <span className={`text-xs ${bmiCategory.color}`}>{bmiCategory.label}</span>
                </div>
              </div>
            )}
            {record.bloodPressure && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Pressão arterial</span>
                <span className="text-sm font-medium">{record.bloodPressure}</span>
              </div>
            )}
            {record.nextVisit && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Próxima consulta</span>
                <span className="text-sm font-medium">{formatDateTime(record.nextVisit)}</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick info */}
        {record.notes && (
          <Card>
            <CardHeader><CardTitle>Observações</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                {record.notes}
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Diagnosis */}
      {record.diagnosis && (
        <Card>
          <CardHeader><CardTitle>Diagnóstico / Avaliação nutricional</CardTitle></CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
              {record.diagnosis}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Prescription */}
      {record.prescription && (
        <Card>
          <CardHeader><CardTitle>Prescrição / Plano alimentar</CardTitle></CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
              {record.prescription}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
