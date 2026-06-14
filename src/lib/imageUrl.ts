const IMAGE_BASE_URL =
  process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL || "https://image.tmdb.org/t/p";

type ImageSize =
  | "w92"
  | "w154"
  | "w185"
  | "w342"
  | "w500"
  | "w780"
  | "original";

export function getTMDBImageUrl(
  path: string | null | undefined,
  size: ImageSize = "w500"
) {
  if (!path) {
    return "/images/placeholders/movie-placeholder.png";
  }

  return `${IMAGE_BASE_URL}/${size}${path}`;
}