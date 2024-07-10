// app/api/submit/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { name, amount } = await req.json();

  try {
    const newEntry = await prisma.details.create({
      data: {
        name,
        amount: parseFloat(amount), // Assuming amount is a number
      },
    });

    return NextResponse.json(newEntry, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating entry' }, { status: 500 });
  }
}
