import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { decrypt } from '../../../utils/encryption'; // Adjust the import path accordingly

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  try {
    const entry = await prisma.details.findUnique({
      where: { id: parseInt(id) },
    });

    if (entry) {
      const decryptedAmount = decrypt(entry.amount, entry.iv, entry.userKey);
      return NextResponse.json({
        ...entry,
        amount: decryptedAmount,
      }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Entry not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching entry:', error);
    return NextResponse.json({ error: 'Error fetching entry' }, { status: 500 });
  }
}