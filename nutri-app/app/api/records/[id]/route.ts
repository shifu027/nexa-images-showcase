import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { medicalRecordSchema } from "@/lib/validations";
import { calculateBMI } from "@/lib/utils";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_req: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const { id } = await params;
  const record = await db.medicalRecord.findFirst({
    where: { id, nutricionistaId: session.user.id },
    include: {
      patient: true,
      consultations: true,
      dietPlans: true,
    },
  });

  if (!record) {
    return NextResponse.json({ error: "Prontuário não encontrado" }, { status: 404 });
  }

  return NextResponse.json(record);
}

export async function PUT(request: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const parsed = medicalRecordSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const data = parsed.data;
  const existing = await db.medicalRecord.findFirst({
    where: { id, nutricionistaId: session.user.id },
  });

  if (!existing) {
    return NextResponse.json({ error: "Prontuário não encontrado" }, { status: 404 });
  }

  const weight = data.weight ? Number(data.weight) : null;
  const height = data.height ? Number(data.height) : null;
  const bmi = weight && height ? calculateBMI(weight, height) : null;

  const record = await db.medicalRecord.update({
    where: { id },
    data: {
      type: data.type,
      date: new Date(data.date),
      weight,
      height,
      bmi,
      bloodPressure: data.bloodPressure || null,
      notes: data.notes || null,
      diagnosis: data.diagnosis || null,
      prescription: data.prescription || null,
      nextVisit: data.nextVisit ? new Date(data.nextVisit) : null,
    },
  });

  return NextResponse.json(record);
}

export async function DELETE(_req: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const { id } = await params;
  const existing = await db.medicalRecord.findFirst({
    where: { id, nutricionistaId: session.user.id },
  });

  if (!existing) {
    return NextResponse.json({ error: "Prontuário não encontrado" }, { status: 404 });
  }

  await db.medicalRecord.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
