import Image from "next/image";

import { getTMDBImageUrl } from "@/lib/imageUrl";
import type { TMDBMovie } from "@/types/tmdb";

type PosterCollageProps = {
  posters: TMDBMovie[];
};

export default function PosterCollage({ posters }: PosterCollageProps) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {posters.slice(0, 16).map((movie, index) => {
        const title = movie.title || movie.name || "Movie";

        return (
          <div
            key={`${movie.id}-${index}`}
            className={`relative overflow-hidden rounded-xl bg-white/5 ${
              index % 5 === 0 ? "h-36" : "h-28"
            }`}
          >
            <Image
              src={getTMDBImageUrl(movie.poster_path, "w342")}
              alt={title}
              fill
              sizes="120px"
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>
        );
      })}
    </div>
  );
}