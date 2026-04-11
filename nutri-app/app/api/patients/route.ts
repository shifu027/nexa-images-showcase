import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { patientSchema } from "@/lib/validations";

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") ?? "";
  const page = parseInt(searchParams.get("page") ?? "1", 10);
  const perPage = parseInt(searchParams.get("perPage") ?? "20", 10);
  const status = searchParams.get("status") ?? "all";

  const where = {
    nutricionistaId: session.user.id,
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

  return NextResponse.json({ patients, total, page, perPage });
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = patientSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const data = parsed.data;

  const patient = await db.patient.create({
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
      nutricionistaId: session.user.id,
    },
  });

  return NextResponse.json(patient, { status: 201 });
}
