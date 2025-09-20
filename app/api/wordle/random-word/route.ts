import { fiveLetterWords } from "@/utils/wordle";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET() {
   const randomWord = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
   return NextResponse.json({ word: randomWord });
}