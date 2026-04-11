import Link from "next/link";
import { Phone, Mail, Calendar, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { formatDate, getAge, calculateBMI, getBMICategory } from "@/lib/utils";

interface Patient {
  id: string;
  name: string;
  email?: string | null;
  phone?: string | null;
  birthDate?: Date | string | null;
  gender?: string | null;
  height?: number | null;
  weight?: number | null;
  active: boolean;
  createdAt: Date | string;
}

interface PatientCardProps {
  patient: Patient;
}

export function PatientCard({ patient }: PatientCardProps) {
  const age = getAge(patient.birthDate);
  const bmi =
    patient.height && patient.weight
      ? calculateBMI(patient.weight, patient.height)
      : null;
  const bmiCategory = bmi ? getBMICategory(bmi) : null;

  return (
    <Link
      href={`/dashboard/patients/${patient.id}`}
      className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-primary-300 hover:shadow-card-hover transition-all duration-200"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar name={patient.name} size="md" />
          <div>
            <h3 className="font-semibold text-gray-900 leading-tight">
              {patient.name}
            </h3>
            {age !== null && (
              <p className="text-xs text-gray-500 mt-0.5">{age} anos</p>
            )}
          </div>
        </div>
        <Badge variant={patient.active ? "success" : "secondary"}>
          {patient.active ? "Ativo" : "Inativo"}
        </Badge>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        {patient.email && (
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Mail className="h-3.5 w-3.5 flex-shrink-0" />
            <span className="truncate">{patient.email}</span>
          </div>
        )}
        {patient.phone && (
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Phone className="h-3.5 w-3.5 flex-shrink-0" />
            <span>{patient.phone}</span>
          </div>
        )}
        {patient.birthDate && (
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
            <span>{formatDate(patient.birthDate)}</span>
          </div>
        )}
      </div>

      {/* BMI */}
      {bmi && bmiCategory && (
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Activity className="h-3.5 w-3.5" />
            <span>IMC: {bmi}</span>
          </div>
          <span className={`text-xs font-medium ${bmiCategory.color}`}>
            {bmiCategory.label}
          </span>
        </div>
      )}
    </Link>
  );
}
