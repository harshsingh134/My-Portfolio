import { NextResponse } from "next/server";
import { fetchGitHubPortfolioData } from "@/lib/github";

export const revalidate = 900; // Cache for 15 minutes by default

export async function GET() {
  try {
    const data = await fetchGitHubPortfolioData();
    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=900, stale-while-revalidate=1800",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to fetch GitHub data" },
      { status: 500 }
    );
  }
}
