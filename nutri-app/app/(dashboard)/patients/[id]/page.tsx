import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RecordsList } from "@/components/records/records-list";
import {
  ArrowLeft, Edit, Phone, Mail, MapPin, Calendar, Activity,
  Weight, Ruler, FileText, Plus,
} from "lucide-react";
import { formatDate, getAge, calculateBMI, getBMICategory } from "@/lib/utils";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const patient = await db.patient.findUnique({ where: { id } });
  return { title: patient?.name ?? "Paciente" };
}

export default async function PatientDetailPage({ params }: PageProps) {
  const { id } = await params;
  const patient = await db.patient.findUnique({
    where: { id },
    include: {
      records: {
        orderBy: { date: "desc" },
        take: 10,
      },
    },
  });

  if (!patient) notFound();

  const age = getAge(patient.birthDate);
  const bmi = patient.weight && patient.height
    ? calculateBMI(patient.weight, patient.height)
    : null;
  const bmiCategory = bmi ? getBMICategory(bmi) : null;

  const genderLabel: Record<string, string> = {
    MASCULINO: "Masculino",
    FEMININO: "Feminino",
    OUTRO: "Outro",
  };

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard/patients">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div className="flex items-center gap-3">
            <Avatar name={patient.name} size="lg" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{patient.name}</h1>
              <div className="flex items-center gap-2 mt-0.5">
                {age !== null && (
                  <span className="text-sm text-gray-500">{age} anos</span>
                )}
                {patient.gender && (
                  <span className="text-sm text-gray-500">• {genderLabel[patient.gender]}</span>
                )}
                <Badge variant={patient.active ? "success" : "secondary"}>
                  {patient.active ? "Ativo" : "Inativo"}
                </Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 ml-14 sm:ml-0">
          <Button variant="outline" asChild>
            <Link href={`/dashboard/patients/${id}/edit`}>
              <Edit className="h-4 w-4" />
              Editar
            </Link>
          </Button>
          <Button asChild>
            <Link href={`/dashboard/records?patientId=${id}`}>
              <Plus className="h-4 w-4" />
              Nova consulta
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-1 space-y-5">
          {/* Vitals */}
          {(patient.weight || patient.height || bmi) && (
            <Card>
              <CardHeader><CardTitle>Dados clínicos</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {patient.weight && (
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-gray-500">
                      <Weight className="h-4 w-4" /> Peso
                    </span>
                    <span className="text-sm font-medium">{patient.weight} kg</span>
                  </div>
                )}
                {patient.height && (
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-gray-500">
                      <Ruler className="h-4 w-4" /> Altura
                    </span>
                    <span className="text-sm font-medium">{patient.height} cm</span>
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
                {patient.bloodType && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Tipo sanguíneo</span>
                    <span className="text-sm font-medium">{patient.bloodType}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Contact */}
          <Card>
            <CardHeader><CardTitle>Contato</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {patient.email && (
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <a href={`mailto:${patient.email}`} className="text-primary-600 hover:underline truncate">
                    {patient.email}
                  </a>
                </div>
              )}
              {patient.phone && (
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700">{patient.phone}</span>
                </div>
              )}
              {patient.birthDate && (
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700">{formatDate(patient.birthDate)}</span>
                </div>
              )}
              {(patient.address || patient.city) && (
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    {[patient.address, patient.city, patient.state].filter(Boolean).join(", ")}
                  </span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Clinical notes */}
          {(patient.allergies || patient.medications) && (
            <Card>
              <CardHeader><CardTitle>Informações clínicas</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {patient.allergies && (
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1.5">Alergias</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{patient.allergies}</p>
                  </div>
                )}
                {patient.medications && (
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1.5">Medicamentos</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{patient.medications}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Since */}
          <div className="text-xs text-gray-400 px-1">
            Cadastrado em {formatDate(patient.createdAt)}
          </div>
        </div>

        {/* Right column - records */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-gray-400" />
              <h2 className="text-lg font-semibold text-gray-900">
                Prontuários ({patient.records.length})
              </h2>
            </div>
            <Button size="sm" asChild>
              <Link href={`/dashboard/records/new?patientId=${id}`}>
                <Plus className="h-4 w-4" />
                Nova consulta
              </Link>
            </Button>
          </div>
          <RecordsList records={patient.records} />
        </div>
      </div>
    </div>
  );
}
