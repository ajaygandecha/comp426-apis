import { fiveLetterWords } from "@/utils/wordle";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-static'

export async function GET(_: NextRequest, { params }: { params: Promise<{ word: string }> }) {

    const { word } = await params;

    if (!word || word.length !== 5) {
        return NextResponse.json({ valid: false });
    }

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`)
    const data = await response.json();

    // Check if the response has a "title" field with "No Definitions Found"
    if (data.title === "No Definitions Found") {
        return NextResponse.json({ valid: false });
    }

    // If no "title" field (or it's not "No Definitions Found"), the word is valid
    return NextResponse.json({ valid: true });
}