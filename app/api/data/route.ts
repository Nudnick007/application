import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { decrypt } from '../../utils/encryption'; 

const prisma = new PrismaClient();

export async function GET() {
  try {
    const data = await prisma.details.findMany({
      select: {
        name: true,
        amount: true,
        iv: true,
        userKey: true, 
      },
    });

    const decryptedData = data.map(item => ({
      name: item.name,
      amount: decrypt(item.amount, item.iv, item.userKey),
    }));

    return NextResponse.json(decryptedData, { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}
