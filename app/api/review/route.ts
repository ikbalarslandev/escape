import { NextResponse } from "next/server";
import { getReviews } from "@/services/review";

export async function GET(request: Request) {
  const result = await getReviews(request);

  // Convert to NextResponse
  const status = result.success ? 200 : result.status || 500;

  return NextResponse.json(result, { status });
}
