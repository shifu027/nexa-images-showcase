import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { medicalRecordSchema } from "@/lib/validations";
import { calculateBMI } from "@/lib/utils";

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const patientId = searchParams.get("patientId");
  const page = parseInt(searchParams.get("page") ?? "1", 10);
  const perPage = parseInt(searchParams.get("perPage") ?? "20", 10);

  const where = {
    nutricionistaId: session.user.id,
    ...(patientId ? { patientId } : {}),
  };

  const [records, total] = await Promise.all([
    db.medicalRecord.findMany({
      where,
      include: { patient: { select: { id: true, name: true } } },
      orderBy: { date: "desc" },
      skip: (page - 1) * perPage,
      take: perPage,
    }),
    db.medicalRecord.count({ where }),
  ]);

  return NextResponse.json({ records, total, page, perPage });
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = medicalRecordSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Check patient ownership
  const patient = await db.patient.findFirst({
    where: { id: data.patientId, nutricionistaId: session.user.id },
  });

  if (!patient) {
    return NextResponse.json({ error: "Paciente não encontrado" }, { status: 404 });
  }

  const weight = data.weight ? Number(data.weight) : null;
  const height = data.height ? Number(data.height) : null;
  const bmi = weight && height ? calculateBMI(weight, height) : null;

  const record = await db.medicalRecord.create({
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
      patientId: data.patientId,
      nutricionistaId: session.user.id,
    },
  });

  // Update patient's latest weight/height
  if (weight || height) {
    await db.patient.update({
      where: { id: data.patientId },
      data: {
        ...(weight ? { weight } : {}),
        ...(height ? { height } : {}),
      },
    });
  }

  return NextResponse.json(record, { status: 201 });
}
