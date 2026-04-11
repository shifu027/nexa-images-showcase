import Link from "next/link";
import { FileText, Calendar, Weight, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDateTime } from "@/lib/utils";

interface MedicalRecord {
  id: string;
  type: string;
  date: Date | string;
  weight?: number | null;
  bmi?: number | null;
  diagnosis?: string | null;
  notes?: string | null;
  patientId: string;
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

interface RecordsListProps {
  records: MedicalRecord[];
}

export function RecordsList({ records }: RecordsListProps) {
  if (records.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <FileText className="h-12 w-12 mx-auto text-gray-300 mb-3" />
        <p className="text-sm">Nenhum prontuário registrado ainda.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {records.map((record) => (
        <Link
          key={record.id}
          href={`/dashboard/records/${record.id}`}
          className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 hover:border-primary-300 hover:shadow-sm transition-all duration-200 group"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 flex-shrink-0">
            <FileText className="h-5 w-5" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant={recordTypeBadge[record.type] ?? "default"}>
                {recordTypeLabels[record.type] ?? record.type}
              </Badge>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formatDateTime(record.date)}
              </span>
            </div>

            {record.diagnosis && (
              <p className="text-sm text-gray-700 truncate">{record.diagnosis}</p>
            )}
            {record.notes && !record.diagnosis && (
              <p className="text-sm text-gray-500 truncate">{record.notes}</p>
            )}

            {record.weight && (
              <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                <Weight className="h-3 w-3" />
                {record.weight} kg
                {record.bmi && ` • IMC: ${record.bmi}`}
              </div>
            )}
          </div>

          <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-primary-500 flex-shrink-0 mt-3 transition-colors" />
        </Link>
      ))}
    </div>
  );
}
