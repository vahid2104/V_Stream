import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import { getTMDBImageUrl } from "@/lib/imageUrl";
import type { MediaType, TMDBMovie } from "@/types/tmdb";

import { movieCardStyles } from "./MovieCard.styles";

type MovieCardProps = {
  item: TMDBMovie;
  mediaType?: MediaType;
};

export default function MovieCard({ item, mediaType = "movie" }: MovieCardProps) {
  const title = item.title || item.name || "Unknown Title";

  const posterUrl = getTMDBImageUrl(item.poster_path, "w500");

  const rating = item.vote_average ? item.vote_average.toFixed(1) : "N/A";

  const typeLabel = mediaType === "tv" ? "Series" : "Movie";

  return (
    <Link href={`/details/${mediaType}/${item.id}`} className={movieCardStyles.link}>
      <article className={movieCardStyles.card}>
        <div className={movieCardStyles.imageWrapper}>
          {item.poster_path ? (
            <Image
              src={posterUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 185px, 215px"
              className={movieCardStyles.image}
            />
          ) : (
            <div className={movieCardStyles.fallback}>{title}</div>
          )}

          <div className={movieCardStyles.gradient} />

          <div className={movieCardStyles.content}>
            <h3 className={movieCardStyles.title}>{title}</h3>

            <div className={movieCardStyles.meta}>
              <Star className={movieCardStyles.star} />
              <span className={movieCardStyles.rating}>{rating}</span>
              <span className={movieCardStyles.dot}>|</span>
              <span>Action</span>
              <span className={movieCardStyles.dot}>•</span>
              <span>{typeLabel}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}