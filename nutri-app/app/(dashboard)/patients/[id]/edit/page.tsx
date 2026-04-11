import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/db";
import { PatientForm } from "@/components/patients/patient-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const patient = await db.patient.findUnique({ where: { id } });
  return { title: `Editar — ${patient?.name ?? "Paciente"}` };
}

export default async function EditPatientPage({ params }: PageProps) {
  const { id } = await params;
  const patient = await db.patient.findUnique({ where: { id } });

  if (!patient) notFound();

  const initialData = {
    id: patient.id,
    name: patient.name,
    email: patient.email ?? "",
    phone: patient.phone ?? "",
    birthDate: patient.birthDate
      ? new Date(patient.birthDate).toISOString().split("T")[0]
      : "",
    gender: patient.gender as "MASCULINO" | "FEMININO" | "OUTRO" | undefined,
    cpf: patient.cpf ?? "",
    address: patient.address ?? "",
    city: patient.city ?? "",
    state: patient.state ?? "",
    zipCode: patient.zipCode ?? "",
    height: patient.height ?? "",
    weight: patient.weight ?? "",
    bloodType: patient.bloodType ?? "",
    allergies: patient.allergies ?? "",
    medications: patient.medications ?? "",
    notes: patient.notes ?? "",
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/dashboard/patients/${id}`}>
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Editar paciente</h1>
          <p className="text-sm text-gray-500">{patient.name}</p>
        </div>
      </div>

      <PatientForm mode="edit" initialData={initialData} />
    </div>
  );
}
