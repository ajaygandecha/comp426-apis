import { randomConnectionsGame } from "@/utils/connections";
import { NextResponse } from "next/server";

export const dynamic = 'force-static'

export async function GET() {
   const randomGame = randomConnectionsGame();
   return NextResponse.json(randomGame);
}