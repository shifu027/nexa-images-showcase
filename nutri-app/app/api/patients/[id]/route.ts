import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { patientSchema } from "@/lib/validations";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_req: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const { id } = await params;
  const patient = await db.patient.findFirst({
    where: { id, nutricionistaId: session.user.id },
    include: { records: { orderBy: { date: "desc" } } },
  });

  if (!patient) {
    return NextResponse.json({ error: "Paciente não encontrado" }, { status: 404 });
  }

  return NextResponse.json(patient);
}

export async function PUT(request: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const parsed = patientSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const data = parsed.data;

  const existing = await db.patient.findFirst({
    where: { id, nutricionistaId: session.user.id },
  });

  if (!existing) {
    return NextResponse.json({ error: "Paciente não encontrado" }, { status: 404 });
  }

  const patient = await db.patient.update({
    where: { id },
    data: {
      name: data.name,
      email: data.email || null,
      phone: data.phone || null,
      birthDate: data.birthDate ? new Date(data.birthDate) : null,
      gender: data.gender || null,
      cpf: data.cpf || null,
      address: data.address || null,
      city: data.city || null,
      state: data.state || null,
      zipCode: data.zipCode || null,
      height: data.height ? Number(data.height) : null,
      weight: data.weight ? Number(data.weight) : null,
      bloodType: data.bloodType || null,
      allergies: data.allergies || null,
      medications: data.medications || null,
      notes: data.notes || null,
    },
  });

  return NextResponse.json(patient);
}

export async function DELETE(_req: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const { id } = await params;
  const existing = await db.patient.findFirst({
    where: { id, nutricionistaId: session.user.id },
  });

  if (!existing) {
    return NextResponse.json({ error: "Paciente não encontrado" }, { status: 404 });
  }

  await db.patient.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
