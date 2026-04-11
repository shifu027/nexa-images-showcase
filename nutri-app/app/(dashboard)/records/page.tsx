import type { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { RecordsList } from "@/components/records/records-list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, FileText } from "lucide-react";

export const metadata: Metadata = { title: "Prontuários" };

interface PageProps {
  searchParams: Promise<{ search?: string; page?: string; patientId?: string }>;
}

export default async function RecordsPage({ searchParams }: PageProps) {
  const session = await auth();
  const params = await searchParams;
  const search = params.search ?? "";
  const patientId = params.patientId;
  const page = parseInt(params.page ?? "1", 10);
  const perPage = 20;

  const records = await db.medicalRecord.findMany({
    where: {
      nutricionistaId: session?.user?.id ?? "",
      ...(patientId ? { patientId } : {}),
    },
    include: { patient: { select: { id: true, name: true } } },
    orderBy: { date: "desc" },
    skip: (page - 1) * perPage,
    take: perPage,
  });

  const total = await db.medicalRecord.count({
    where: {
      nutricionistaId: session?.user?.id ?? "",
      ...(patientId ? { patientId } : {}),
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Prontuários</h1>
          <p className="text-sm text-gray-500">{total} registro{total !== 1 ? "s" : ""}</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/records/new">
            <Plus className="h-4 w-4" />
            Nova consulta
          </Link>
        </Button>
      </div>

      <div className="flex gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Buscar prontuários..." className="pl-9" />
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-4">
        {records.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 mb-4">
              <FileText className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Nenhum prontuário ainda
            </h3>
            <p className="text-sm text-gray-500 max-w-sm mb-6">
              Registre consultas, avaliações e prescrições para seus pacientes.
            </p>
            <Button asChild>
              <Link href="/dashboard/records/new">
                <Plus className="h-4 w-4" />
                Registrar primeira consulta
              </Link>
            </Button>
          </div>
        ) : (
          <RecordsList records={records} />
        )}
      </div>
    </div>
  );
}
