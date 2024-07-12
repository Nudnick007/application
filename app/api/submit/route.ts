import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { encrypt } from '../../utils/encryption'; 

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, amount, userKey } = await req.json();

    if (!name || !amount || !userKey) {
      return NextResponse.json({ error: 'Name, amount, and userKey are required' }, { status: 400 });
    }

    const encryptedAmount = encrypt(amount.toString(), userKey);
    const newEntry = await prisma.details.create({
      data: {
        name,
        amount: encryptedAmount.encryptedData,
        iv: encryptedAmount.iv, // Store the IV for decryption
        userKey, // Store the user-provided key
      },
    });

    return NextResponse.json(newEntry, { status: 200 });
  } catch (error) {
    console.error('Error creating entry:', error);
    return NextResponse.json({ error: 'Error creating entry' }, { status: 500 });
  }
}