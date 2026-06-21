import type { MediaType } from "./tmdb";

export type WatchlistItem = {
  id: number;
  mediaType: MediaType;
  title: string;
  posterPath: string | null;
  backdropPath: string | null;
  rating: number;
  releaseDate?: string;
  addedAt?: unknown;
};