import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import { getTMDBImageUrl } from "@/lib/imageUrl";
import type { MediaType, TMDBMovie } from "@/types/tmdb";

import { landscapeCardStyles } from "./LandscapeCard.styles";

type LandscapeCardProps = {
  item: TMDBMovie;
  mediaType: MediaType;
};

export default function LandscapeCard({ item, mediaType }: LandscapeCardProps) {
  const title = item.title || item.name || "Unknown Title";
  const imageUrl = getTMDBImageUrl(
    item.backdrop_path || item.poster_path,
    "w780"
  );

  const rating = item.vote_average ? item.vote_average.toFixed(1) : "N/A";
  const typeLabel = mediaType === "tv" ? "Series" : "Movie";

  return (
    <Link
      href={`/details/${mediaType}/${item.id}`}
      className={landscapeCardStyles.link}
    >
      <article>
        <div className={landscapeCardStyles.imageWrapper}>
          {item.backdrop_path || item.poster_path ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 230px, 285px"
              className={landscapeCardStyles.image}
            />
          ) : (
            <div className={landscapeCardStyles.fallback}>{title}</div>
          )}

          <div className={landscapeCardStyles.gradient} />
        </div>

        <h3 className={landscapeCardStyles.title}>{title}</h3>

        <div className={landscapeCardStyles.meta}>
          <Star className={landscapeCardStyles.star} />
          <span className={landscapeCardStyles.rating}>{rating}</span>
          <span className={landscapeCardStyles.dot}>|</span>
          <span>Action</span>
          <span>•</span>
          <span>{typeLabel}</span>
        </div>
      </article>
    </Link>
  );
}