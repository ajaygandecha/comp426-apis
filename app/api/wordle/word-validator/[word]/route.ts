import { fiveLetterWords } from "@/utils/wordle";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-static'

export async function GET(_: NextRequest, { params }: { params: Promise<{ word: string }> }) {

    const { word } = await params;

    if (!word || word.length !== 5) {
        return NextResponse.json({ valid: false });
    }

    const isValid = fiveLetterWords.includes(word.toLowerCase());
    return NextResponse.json({ valid: isValid });
}