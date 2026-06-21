import { NextResponse } from "next/server";

import { searchMulti } from "@/services/tmdbService";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query || query.trim().length < 2) {
    return NextResponse.json({ results: [] });
  }

  try {
    const data = await searchMulti(query.trim());

    const results = data.results
      .filter((item) => item.media_type === "movie" || item.media_type === "tv")
      .filter((item) => item.poster_path || item.backdrop_path)
      .slice(0, 6);

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json(
      { message: "Failed to search movies." },
      { status: 500 }
    );
  }
}