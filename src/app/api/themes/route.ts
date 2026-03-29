import { NextResponse } from 'next/server';
import { themes } from '@/data/themes';

export async function GET() {
  return NextResponse.json({
    success: true,
    total: themes.length,
    themes: themes
  });
}
