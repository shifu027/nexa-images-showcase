import type { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { PatientsTable } from "@/components/patients/patients-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Search, Filter, Users } from "lucide-react";

export const metadata: Metadata = { title: "Pacientes" };

interface PageProps {
  searchParams: Promise<{ search?: string; page?: string; status?: string }>;
}

export default async function PatientsPage({ searchParams }: PageProps) {
  const session = await auth();
  const params = await searchParams;
  const search = params.search ?? "";
  const page = parseInt(params.page ?? "1", 10);
  const status = params.status ?? "all";
  const perPage = 20;

  const where = {
    nutricionistaId: session?.user?.id ?? "",
    ...(search ? { name: { contains: search, mode: "insensitive" as const } } : {}),
    ...(status === "active" ? { active: true } : {}),
    ...(status === "inactive" ? { active: false } : {}),
  };

  const [patients, total] = await Promise.all([
    db.patient.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * perPage,
      take: perPage,
    }),
    db.patient.count({ where }),
  ]);

  const totalPages = Math.ceil(total / perPage);

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pacientes</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {total} paciente{total !== 1 ? "s" : ""} cadastrado{total !== 1 ? "s" : ""}
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/patients/new">
            <UserPlus className="h-4 w-4" />
            Novo paciente
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <form className="flex-1 relative" action="/dashboard/patients" method="GET">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            name="search"
            defaultValue={search}
            placeholder="Buscar por nome..."
            className="pl-9"
          />
          {params.status && <input type="hidden" name="status" value={params.status} />}
        </form>

        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-400 hidden sm:block" />
          {["all", "active", "inactive"].map((s) => (
            <Link
              key={s}
              href={`/dashboard/patients?status=${s}${search ? `&search=${search}` : ""}`}
            >
              <Badge
                variant={status === s ? "default" : "secondary"}
                className="cursor-pointer"
              >
                {s === "all" ? "Todos" : s === "active" ? "Ativos" : "Inativos"}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        {patients.length === 0 && !search ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 mb-4">
              <Users className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Nenhum paciente ainda
            </h3>
            <p className="text-sm text-gray-500 max-w-sm mb-6">
              Comece cadastrando seu primeiro paciente para gerenciar consultas e planos alimentares.
            </p>
            <Button asChild>
              <Link href="/dashboard/patients/new">
                <UserPlus className="h-4 w-4" />
                Cadastrar primeiro paciente
              </Link>
            </Button>
          </div>
        ) : (
          <PatientsTable patients={patients} />
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between text-sm">
          <p className="text-gray-500">
            Mostrando {(page - 1) * perPage + 1}–{Math.min(page * perPage, total)} de {total}
          </p>
          <div className="flex items-center gap-2">
            {page > 1 && (
              <Link
                href={`/dashboard/patients?page=${page - 1}${search ? `&search=${search}` : ""}&status=${status}`}
              >
                <Button variant="outline" size="sm">Anterior</Button>
              </Link>
            )}
            {page < totalPages && (
              <Link
                href={`/dashboard/patients?page=${page + 1}${search ? `&search=${search}` : ""}&status=${status}`}
              >
                <Button variant="outline" size="sm">Próxima</Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
