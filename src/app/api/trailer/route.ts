import { NextResponse } from "next/server";

import { getMediaTrailer } from "@/services/tmdbService";
import type { MediaType } from "@/types/tmdb";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const mediaType = searchParams.get("mediaType") as MediaType | null;
  const id = searchParams.get("id");

  if (!mediaType || !id) {
    return NextResponse.json(
      { message: "mediaType and id are required." },
      { status: 400 }
    );
  }

  try {
    const trailer = await getMediaTrailer(mediaType, Number(id));

    return NextResponse.json({ trailer });
  } catch {
    return NextResponse.json(
      { message: "Failed to load trailer." },
      { status: 500 }
    );
  }
}