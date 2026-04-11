"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Edit, Trash2, Eye, MoreVertical } from "lucide-react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { formatDate, getAge } from "@/lib/utils";

interface Patient {
  id: string;
  name: string;
  email?: string | null;
  phone?: string | null;
  birthDate?: Date | string | null;
  gender?: string | null;
  active: boolean;
  createdAt: Date | string;
}

interface PatientsTableProps {
  patients: Patient[];
  onDelete?: (id: string) => void;
}

export function PatientsTable({ patients, onDelete }: PatientsTableProps) {
  const router = useRouter();
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await fetch(`/api/patients/${deleteId}`, { method: "DELETE" });
      setDeleteId(null);
      onDelete?.(deleteId);
      router.refresh();
    } finally {
      setDeleting(false);
    }
  };

  if (patients.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-sm">Nenhum paciente encontrado.</p>
      </div>
    );
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Paciente</TableHead>
            <TableHead className="hidden sm:table-cell">Contato</TableHead>
            <TableHead className="hidden md:table-cell">Nascimento</TableHead>
            <TableHead className="hidden lg:table-cell">Cadastro</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient) => {
            const age = getAge(patient.birthDate);
            return (
              <TableRow key={patient.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar name={patient.name} size="sm" />
                    <div>
                      <Link
                        href={`/dashboard/patients/${patient.id}`}
                        className="font-medium text-gray-900 hover:text-primary-600 transition-colors"
                      >
                        {patient.name}
                      </Link>
                      {age !== null && (
                        <p className="text-xs text-gray-500">{age} anos</p>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <div className="text-sm">
                    {patient.email && (
                      <p className="text-gray-700 truncate max-w-[180px]">{patient.email}</p>
                    )}
                    {patient.phone && (
                      <p className="text-gray-500 text-xs">{patient.phone}</p>
                    )}
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell text-sm text-gray-600">
                  {formatDate(patient.birthDate)}
                </TableCell>
                <TableCell className="hidden lg:table-cell text-sm text-gray-600">
                  {formatDate(patient.createdAt)}
                </TableCell>
                <TableCell>
                  <Badge variant={patient.active ? "success" : "secondary"}>
                    {patient.active ? "Ativo" : "Inativo"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu
                    trigger={
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    }
                  >
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/patients/${patient.id}`}>
                        <Eye className="h-4 w-4" />
                        Ver detalhes
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/patients/${patient.id}/edit`}>
                        <Edit className="h-4 w-4" />
                        Editar
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      destructive
                      onClick={() => setDeleteId(patient.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                      Excluir
                    </DropdownMenuItem>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      {/* Delete confirmation */}
      <Dialog open={!!deleteId} onClose={() => setDeleteId(null)}>
        <DialogHeader>
          <DialogTitle>Confirmar exclusão</DialogTitle>
          <DialogClose onClose={() => setDeleteId(null)} />
        </DialogHeader>
        <DialogContent>
          <p className="text-sm text-gray-600">
            Tem certeza que deseja excluir este paciente? Esta ação não pode ser desfeita
            e todos os prontuários associados também serão excluídos.
          </p>
        </DialogContent>
        <DialogFooter>
          <Button variant="outline" onClick={() => setDeleteId(null)}>
            Cancelar
          </Button>
          <Button variant="destructive" isLoading={deleting} onClick={handleDelete}>
            Excluir
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
