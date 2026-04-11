import type { Metadata } from "next";
import { PatientForm } from "@/components/patients/patient-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = { title: "Novo paciente" };

export default function NewPatientPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/patients">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Novo paciente</h1>
          <p className="text-sm text-gray-500">Preencha os dados do paciente</p>
        </div>
      </div>

      <PatientForm mode="create" />
    </div>
  );
}
